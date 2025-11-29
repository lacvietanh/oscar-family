/*
 * generate-sitemap.js
 *
 * Auto-generate sitemap.xml after SSG build.
 * Scans dist/ directory for HTML files and creates sitemap.xml.
 *
 * Usage: Called automatically by vite-ssg onFinished callback
 * Manual: node scripts/generate-sitemap.js
 *
 * Docs: ../docs/flow-generate-sitemap.md
 */

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cwd = path.resolve(__dirname, '..')
const distDir = path.join(cwd, 'dist')

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

export async function generateSitemap() {
  // Read package.json for siteUrl
  const pkg = JSON.parse(await fs.readFile(path.join(cwd, 'package.json'), 'utf8'))
  const siteUrl = (pkg.homepage || 'https://oscarfamily.vn').replace(/\/$/, '')
  
  // Scan dist for HTML files
  const urls = new Set()
  
  try {
    const files = await walkDir(distDir, distDir)
    for (const file of files) {
      const lf = file.toLowerCase()
      if (lf.endsWith('.html')) {
        // Skip special files
        if (lf === '404.html' || lf.includes('admin.html')) continue
        
        // Convert file path to URL
        let urlPath = file.replace(/\\/g, '/')
        if (urlPath === 'index.html') {
          urlPath = '/'
        } else if (urlPath.endsWith('/index.html')) {
          urlPath = '/' + urlPath.replace(/\/index\.html$/, '')
        } else if (urlPath.endsWith('.html')) {
          urlPath = '/' + urlPath.replace(/\.html$/, '')
        }
        urls.add(urlPath)
      }
    }
  } catch (e) {
    console.error(`[sitemap] Failed to scan dist: ${e.message}`)
    return
  }
  
  // Generate XML
  const now = new Date().toISOString()
  const out = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
  for (const p of Array.from(urls).sort()) {
    const loc = siteUrl + p
    out.push('  <url>')
    out.push(`    <loc>${loc}</loc>`)
    out.push(`    <lastmod>${now}</lastmod>`)
    out.push(`    <changefreq>daily</changefreq>`)
    out.push(`    <priority>0.8</priority>`)
    out.push('  </url>')
  }
  out.push('</urlset>')
  
  const xml = out.join('\n')
  const target = path.join(distDir, 'sitemap.xml')
  
  try {
    await fs.writeFile(target, xml, 'utf8')
    console.log(`[sitemap] Generated with ${urls.size} URLs → ${target}`)
  } catch (e) {
    console.error(`[sitemap] Failed to write: ${e.message}`)
  }
}
