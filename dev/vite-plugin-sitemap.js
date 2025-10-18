/*
  dev/vite-plugin-sitemap.js

  Vite plugin (clean) để tự động tạo sitemap.xml khi build.

  Behavior (Tiếng Việt, tóm tắt):
  - Đọc `src/router.js` và lấy export `routes` (mảng route có thuộc tính `path`).
  - Quét thư mục `public/` để tìm các file .html và map thành đường dẫn tĩnh.
  - Kết hợp với `extraPaths` nếu truyền vào opts.
  - Xác định `siteUrl` theo thứ tự: opts.siteUrl -> process.env.SITE_URL -> package.json.homepage -> vite.config base.
  - Ghi `sitemap.xml` vào thư mục build output (config.build.outDir | dist).

  Options: { siteUrl, changefreq, priority, extraPaths }
*/

import fs from 'fs/promises'
import path from 'path'

function isStaticPath(p) {
  return p && typeof p === 'string' && !p.includes(':') && !p.includes('*')
}

function ensureSlash(p) {
  if (!p) return '/'
  return p.startsWith('/') ? p : '/' + p
}

async function walkDir(dir, baseDir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...await walkDir(abs, baseDir))
    } else if (e.isFile()) {
      out.push(path.relative(baseDir, abs))
    }
  }
  return out
}

export default function vitePluginSitemap(opts = {}) {
  const defaults = {
    siteUrl: opts.siteUrl || process.env.SITE_URL || null,
    changefreq: opts.changefreq || 'daily',
    priority: (typeof opts.priority === 'number') ? opts.priority : 0.8,
    extraPaths: Array.isArray(opts.extraPaths) ? opts.extraPaths : [],
  }

  let resolvedConfig = null

  return {
    name: 'dev:vite-plugin-sitemap',
    enforce: 'post',

    configResolved(config) {
      resolvedConfig = config
    },

    async closeBundle() {
      const cwd = process.cwd()

      // determine siteUrl
      let siteUrl = defaults.siteUrl
      if (!siteUrl) {
        try {
          const pkg = JSON.parse(await fs.readFile(path.join(cwd, 'package.json'), 'utf8'))
          siteUrl = pkg.homepage || pkg.siteUrl || pkg.home_url || ''
        } catch (e) {
          siteUrl = ''
        }
      }
      if (!siteUrl && resolvedConfig && resolvedConfig.base) {
        siteUrl = resolvedConfig.base
      }

      if (!siteUrl) {
        this.warn('[vite-plugin-sitemap] No siteUrl determined. Provide opts.siteUrl, SITE_URL env, or package.json.homepage. Skipping sitemap generation.')
        return
      }

      // collect urls
      const urls = new Set()

      // from router
      const routerFile = path.join(cwd, 'src', 'router.js')
      try {
        const routerContent = await fs.readFile(routerFile, 'utf8')
        // Extract routes from router.js using regex
        const pathMatches = routerContent.matchAll(/path:\s*['"]([^'"]+)['"]/g)
        for (const match of pathMatches) {
          const p = match[1]
          if (!p || !isStaticPath(p)) continue
          const cleanPath = p === '/' ? '/' : ensureSlash(p.replace(/\/$/, ''))
          urls.add(cleanPath)
        }
      } catch (e) {
        // no router or read failed -> ignore
      }

      // from public/
      const publicDir = path.join(cwd, 'public')
      try {
        const files = await walkDir(publicDir, publicDir)
        for (const f of files) {
          const lf = f.toLowerCase()
          if (lf.endsWith('.html')) {
            if (f === 'index.html') urls.add('/')
            else urls.add('/' + f.replace(/index\.html$/i, '').replace(/\.html$/i, ''))
          }
        }
      } catch (e) {
        // ignore if public doesn't exist
      }

      // extraPaths
      for (const ex of defaults.extraPaths) {
        if (typeof ex === 'string') urls.add(ensureSlash(ex))
      }

      // write sitemap
      const now = new Date().toISOString()
      const out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
      for (const p of Array.from(urls).sort()) {
        const loc = siteUrl.replace(/\/$/, '') + (p === '/' ? '/' : p)
        out.push('  <url>')
        out.push(`    <loc>${loc}</loc>`)
        out.push(`    <lastmod>${now}</lastmod>`)
        out.push(`    <changefreq>${defaults.changefreq}</changefreq>`)
        out.push(`    <priority>${defaults.priority}</priority>`)
        out.push('  </url>')
      }
      out.push('</urlset>')

      const xml = out.join('\n')
      const outDir = (resolvedConfig && resolvedConfig.build && resolvedConfig.build.outDir) ? resolvedConfig.build.outDir : 'dist'
      // Handle both absolute and relative paths correctly
      const target = path.isAbsolute(outDir)
        ? path.join(outDir, 'sitemap.xml')
        : path.join(cwd, outDir, 'sitemap.xml')
      try {
        await fs.mkdir(path.dirname(target), { recursive: true })
        await fs.writeFile(target, xml, 'utf8')
        this.warn(`[vite-plugin-sitemap] sitemap.xml generated with ${urls.size} URLs -> ${target}`)
      } catch (e) {
        this.error(`[vite-plugin-sitemap] Failed to write sitemap.xml: ${e.message}`)
      }
    }
  }
}
