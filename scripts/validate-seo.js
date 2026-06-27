#!/usr/bin/env node

/**
 * Oscar Family — Post-Build SEO Verification Script
 *
 * RATIONALE & PURPOSE:
 * Runs after Nuxt generates the static bundle. Crawls dist/ and inspects all
 * pre-rendered HTML files for strict SEO compliance.
 *
 * ALIGNMENT WITH AKIRULE:
 * 1. Title length (< 80 chars for articles, < 60 for other pages) & Description length (< 155 chars).
 * 2. Strict 'trailingSlash: true' on all canonical links.
 * 3. No em/en dashes (—, –) in titles & descriptions.
 * 4. Organization JSON-LD with Oscar Entertainment brand name.
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(import.meta.url), '../..')
const distDir = join(root, 'dist')

if (!existsSync(distDir)) {
  console.error(`\x1b[31m[ERROR]\x1b[0m Directory ${distDir} does not exist. Run 'npm run build' or 'npm run generate' first.\n`)
  process.exit(1)
}

console.log(`Starting SEO output verification on: ${distDir}\n`)

let totalChecked = 0
let totalErrors = 0
let totalWarnings = 0

function getHtmlFiles(dir, filesList = []) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const res = join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === '_nuxt' || entry.name === '__sitemap__' || entry.name === 'sitemap.xml') continue
      getHtmlFiles(res, filesList)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      filesList.push(res)
    }
  }
  return filesList
}

const htmlFiles = getHtmlFiles(distDir)

// Decode common HTML entities for accurate length measurement
function decodeHtmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
}

// Article pages have inherently longer titles — use a higher threshold
function isArticlePage(relPath) {
  // All pages other than index, posts, studio, releases, privacy-policy, terms-of-service are articles
  return !/^(index|posts|studio|releases|privacy-policy|terms-of-service)\.html$/.test(relPath)
}

for (const filePath of htmlFiles) {
  const relPath = relative(distDir, filePath)
  const content = readFileSync(filePath, 'utf-8')

  // Skip SPA fallback files, redirect stubs, and NotFound pages
  if (relPath === '200.html' || relPath === '404.html' || relPath.startsWith('NotFound/') || content.includes('http-equiv="refresh"')) continue

  const errors = []
  const warnings = []
  const titleLimit = isArticlePage(relPath) ? 80 : 60

  // 1. TITLE
  const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i)
  let title = ''
  if (!titleMatch) {
    errors.push('Missing <title> tag')
  } else {
    title = titleMatch[1].trim()
    if (title.length === 0) errors.push('Empty <title> tag')
    else {
      const titleDecoded = decodeHtmlEntities(title)
      if (titleDecoded.length > titleLimit) warnings.push(`Title exceeds ${titleLimit} chars (${titleDecoded.length}): "${title}"`)
      if (title.includes('—') || title.includes('–')) errors.push(`Title contains illegal dash (— or –): "${title}"`)
    }
  }

  // 2. META DESCRIPTION
  const descMatch = content.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
                    content.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"/i)
  if (!descMatch) {
    if (relPath.includes('privacy') || relPath.includes('terms') || relPath.includes('login')) {
      warnings.push('Missing meta description')
    } else {
      errors.push('Missing meta description')
    }
  } else {
    const desc = descMatch[1].trim()
    if (desc.length === 0) errors.push('Empty meta description')
    else {
      const descDecoded = decodeHtmlEntities(desc)
      if (descDecoded.length > 155) warnings.push(`Description exceeds 155 chars (${descDecoded.length}): "${desc}"`)
      if (desc.includes('—') || desc.includes('–')) errors.push(`Description contains illegal dash (— or –): "${desc}"`)
    }
  }

  // 3. CANONICAL
  const canonicalMatch = content.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) ||
                         content.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"/i)
  if (!canonicalMatch) {
    errors.push('Missing link rel="canonical"')
  } else {
    if (!canonicalMatch[1].endsWith('/')) errors.push(`Canonical missing trailing slash: "${canonicalMatch[1]}"`)
  }

  // 4. HOMEPAGE SCHEMA & ORGANIZATIONAL CHECK
  if (relPath === 'index.html') {
    if (!content.includes('Oscar Entertainment')) {
      errors.push('Homepage missing "Oscar Entertainment" references in schema/content')
    }
  }

  // 5. ECOSYSTEM CROSS-LINK
  if (!content.includes('href="https://oscarlabel.com"')) {
    warnings.push('Missing link to parent ecosystem oscarlabel.com in footer/content')
  }

  totalChecked++
  if (errors.length > 0 || warnings.length > 0) {
    console.log(`\x1b[36mFile: ${relPath}\x1b[0m`)
    for (const err of errors) { console.log(`  \x1b[31m[ERROR]\x1b[0m ${err}`); totalErrors++ }
    for (const warn of warnings) { console.log(`  \x1b[33m[WARN]\x1b[0m ${warn}`); totalWarnings++ }
    console.log()
  }
}

console.log('--------------------------------------------------')
console.log(`SEO Verification completed. Checked: ${totalChecked} HTML files.`)
console.log(`Errors: \x1b[31m${totalErrors}\x1b[0m  Warnings: \x1b[33m${totalWarnings}\x1b[0m`)

if (totalErrors > 0) {
  process.exit(1)
} else {
  console.log(`\n\x1b[32m[PASS] All pre-rendered files pass SEO guidelines!\x1b[0m`)
  process.exit(0)
}
