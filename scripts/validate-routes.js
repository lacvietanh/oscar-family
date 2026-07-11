#!/usr/bin/env node
// Validates that every required page file exists.
// Run: npm run check

import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = resolve(root, 'app/pages')

const requiredPages = [
  'index',
  'oscarstudio',
  'studio',
  'oscar-music-group',
  'akinet',
  'akitao',
  'akiapp',
  'akiapp-chuyen-nha-akinet',
  'akiworkflow',
  'akiinfodetect-js',
  'tachnhac',
  'lamnhac',
  'qqmusic-lyrics-search',
  'kinhdich',
  'vstshop',
  'cloud-services-comparison',
  'seo-system',
  'posts',
  'releases',
  'privacy-policy',
  'terms-of-service',
]

let ok = true
for (const key of requiredPages) {
  const candidates = [
    resolve(pagesDir, `${key}.vue`),
    resolve(pagesDir, `${key}/index.vue`)
  ]
  if (!candidates.some(existsSync)) {
    console.error(`MISSING: app/pages/${key}.vue (declared as a required page but file not found)`)
    ok = false
  }
}

if (ok) {
  console.log(`OK: all ${requiredPages.length} required pages exist`)
  process.exit(0)
} else {
  process.exit(1)
}
