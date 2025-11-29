#!/usr/bin/env node
/*
 * checkseo-offline.js
 *
 * Offline SEO checker for oscar-family project.
 * Analyzes built HTML files from dist/ to validate SEO elements and JSON-LD structured data.
 *
 * Usage: npm run checkseo
 * - Builds the project (vite-ssg)
 * - Reads sitemap.xml from dist/
 * - Extracts and validates SEO metadata and JSON-LD for each route
 * - Generates comprehensive report to dev/seo-report.json
 *
 * Docs: ../docs/flow-checkseo-offline.md
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonld from 'jsonld';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap.xml');
const OUTPUT_FILE = path.resolve(__dirname, '../dev/seo-report.json');
const SCHEMA_CONTEXT_PATH = path.resolve(__dirname, '../dev/schemaorg-context.jsonld');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

// Custom document loader for offline JSON-LD validation
let schemaContext = null;
async function customDocumentLoader(url) {
  if (url === 'https://schema.org' || url === 'https://schema.org/' || url.startsWith('https://schema.org')) {
    if (!schemaContext) {
      const contextData = await fs.readFile(SCHEMA_CONTEXT_PATH, 'utf-8');
      schemaContext = JSON.parse(contextData);
    }
    return {
      contextUrl: null,
      document: schemaContext,
      documentUrl: url
    };
  }
  // For other URLs, use default loader
  return jsonld.documentLoaders.node()(url);
}

// Read and parse sitemap.xml
async function getSitemapUrls() {
  try {
    const xml = await fs.readFile(SITEMAP_PATH, 'utf-8');
    const urls = [];
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
      urls.push(match[1]);
    }
    return urls;
  } catch (error) {
    console.error(`${colors.red}✗ Failed to read sitemap: ${error.message}${colors.reset}`);
    return [];
  }
}

// Convert URL to local HTML file path
function urlToFilePath(url) {
  const urlObj = new URL(url);
  let pathname = urlObj.pathname;
  
  // Remove trailing slash if not root
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }
  
  // Convert path to file path
  if (pathname === '/') {
    return path.join(DIST_DIR, 'index.html');
  } else {
    // Try both path.html and path/index.html
    const directPath = path.join(DIST_DIR, `${pathname}.html`);
    const indexPath = path.join(DIST_DIR, pathname, 'index.html');
    return { directPath, indexPath };
  }
}

// Extract SEO metadata from HTML
function extractSeoMetadata(html, url) {
  const metadata = {
    url,
    title: null,
    description: null,
    h1: null,
    ogImage: null,
    canonicalUrl: null,
    images: [],
    issues: []
  };

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  metadata.title = titleMatch ? titleMatch[1].trim() : null;
  if (!metadata.title) {
    metadata.issues.push({ severity: 'error', message: 'Missing <title> tag' });
  }

  // Extract meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i) 
                  || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  metadata.description = descMatch ? descMatch[1].trim() : null;
  if (!metadata.description) {
    metadata.issues.push({ severity: 'error', message: 'Missing meta description' });
  }

  // Extract h1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/is);
  if (h1Match) {
    metadata.h1 = h1Match[1].replace(/<[^>]+>/g, '').trim();
  } else {
    metadata.issues.push({ severity: 'error', message: 'Missing <h1> tag' });
  }

  // Extract og:image
  const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i);
  metadata.ogImage = ogImageMatch ? ogImageMatch[1] : null;
  if (!metadata.ogImage) {
    metadata.issues.push({ severity: 'warning', message: 'Missing og:image' });
  }

  // Extract canonical URL
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
  metadata.canonicalUrl = canonicalMatch ? canonicalMatch[1] : null;
  if (!metadata.canonicalUrl) {
    metadata.issues.push({ severity: 'warning', message: 'Missing canonical URL' });
  }

  // Extract images with alt attributes
  const imgRegex = /<img[^>]+>/gi;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(html)) !== null) {
    const imgTag = imgMatch[0];
    const srcMatch = imgTag.match(/src=["']([^"']+)["']/i);
    const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
    
    if (srcMatch) {
      const imgData = {
        src: srcMatch[1],
        alt: altMatch ? altMatch[1] : ''
      };
      metadata.images.push(imgData);
      
      if (!altMatch || !altMatch[1]) {
        metadata.issues.push({ 
          severity: 'warning', 
          message: `Image missing alt text: ${srcMatch[1].substring(0, 50)}...` 
        });
      }
    }
  }

  return metadata;
}

// Extract and validate JSON-LD
async function extractAndValidateJsonLd(html, url) {
  const jsonLdResult = {
    found: false,
    valid: false,
    data: null,
    expandedData: null,
    validationError: null,
    issues: []
  };

  // Extract JSON-LD script tags
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis;
  const matches = [...html.matchAll(jsonLdRegex)];

  if (matches.length === 0) {
    jsonLdResult.issues.push({ 
      severity: 'warning', 
      message: 'No JSON-LD structured data found on page' 
    });
    return jsonLdResult;
  }

  jsonLdResult.found = true;

  try {
    // Parse and combine all JSON-LD blocks
    const jsonLdObjects = matches.map(match => {
      const content = match[1].trim();
      try {
        return JSON.parse(content);
      } catch (e) {
        jsonLdResult.issues.push({ 
          severity: 'error', 
          message: `Failed to parse JSON-LD: ${e.message}` 
        });
        return null;
      }
    }).filter(Boolean);

    if (jsonLdObjects.length === 0) {
      jsonLdResult.validationError = 'All JSON-LD blocks failed to parse';
      return jsonLdResult;
    }

    // Use the first valid JSON-LD object (or merge if needed)
    jsonLdResult.data = jsonLdObjects.length === 1 ? jsonLdObjects[0] : jsonLdObjects;

    // Validate using jsonld.expand with offline schema.org context
    try {
      const expanded = await jsonld.expand(jsonLdResult.data, {
        documentLoader: customDocumentLoader
      });
      
      jsonLdResult.expandedData = expanded;

      // Check for unknown types in the expanded data
      // Unknown types will have URIs that don't resolve to schema.org vocabulary
      const unknownTypes = findUnknownTypes(expanded, jsonLdResult.data);
      if (unknownTypes.length > 0) {
        jsonLdResult.valid = false;
        unknownTypes.forEach(typeInfo => {
          jsonLdResult.issues.push({
            severity: 'error',
            message: `Unknown or invalid schema.org type: "${typeInfo.type}" ${typeInfo.context ? `in ${typeInfo.context}` : ''}`
          });
        });
        jsonLdResult.validationError = `Found ${unknownTypes.length} unknown type(s)`;
      } else {
        jsonLdResult.valid = true;
      }

      // Basic validation checks
      if (expanded.length === 0) {
        jsonLdResult.issues.push({ 
          severity: 'warning', 
          message: 'JSON-LD expanded to empty result' 
        });
      }

    } catch (error) {
      jsonLdResult.valid = false;
      jsonLdResult.validationError = error.message;
      jsonLdResult.issues.push({ 
        severity: 'error', 
        message: `JSON-LD validation failed: ${error.message}` 
      });
    }

  } catch (error) {
    jsonLdResult.validationError = error.message;
    jsonLdResult.issues.push({ 
      severity: 'error', 
      message: `JSON-LD processing error: ${error.message}` 
    });
  }

  return jsonLdResult;
}

// Find types that don't exist in schema.org vocabulary
// by checking if they expanded to unknown URIs
function findUnknownTypes(expanded, original) {
  const unknownTypes = [];
  const knownSchemaOrgPrefix = 'http://schema.org/';
  
  // Recursively check for types in expanded data
  function checkTypes(obj, path = '') {
    if (!obj || typeof obj !== 'object') return;
    
    if (Array.isArray(obj)) {
      obj.forEach((item, idx) => checkTypes(item, `${path}[${idx}]`));
      return;
    }
    
    // Check @type field
    if (obj['@type']) {
      const types = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
      types.forEach(type => {
        // Check if type is a schema.org URI
        if (typeof type === 'string') {
          // If it's expanded but not a recognized schema.org type
          // it will either not have the schema.org prefix or be unrecognized
          if (!type.startsWith(knownSchemaOrgPrefix) && !type.startsWith('@')) {
            unknownTypes.push({
              type: getOriginalTypeName(original, type),
              context: path,
              expandedUri: type
            });
          }
        }
      });
    }
    
    // Recursively check all other properties
    Object.keys(obj).forEach(key => {
      if (key !== '@type' && key !== '@context' && key !== '@id') {
        checkTypes(obj[key], path ? `${path}.${key}` : key);
      }
    });
  }
  
  checkTypes(expanded);
  return unknownTypes;
}

// Helper to get the original type name from the compact JSON-LD
function getOriginalTypeName(original, expandedUri) {
  if (!original || typeof original !== 'object') return expandedUri;
  
  // Recursively search for @type with this value
  function search(obj) {
    if (!obj || typeof obj !== 'object') return null;
    
    if (Array.isArray(obj)) {
      for (const item of obj) {
        const result = search(item);
        if (result) return result;
      }
      return null;
    }
    
    // Check if this object has a @type that might match
    if (obj['@type']) {
      const types = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
      // Return first type that looks like it could be unknown
      const unknownType = types.find(t => 
        typeof t === 'string' && 
        !t.startsWith('http://') && 
        !t.startsWith('https://') &&
        t !== 'WebPage' && 
        t !== 'WebSite' && 
        t !== 'Organization' &&
        t !== 'Person' &&
        t !== 'Thing' &&
        t !== 'CreativeWork'
      );
      if (unknownType) return unknownType;
    }
    
    // Recursively search in all properties
    for (const key of Object.keys(obj)) {
      if (key !== '@type' && key !== '@context') {
        const result = search(obj[key]);
        if (result) return result;
      }
    }
    
    return null;
  }
  
  return search(original) || expandedUri;
}

// Analyze a single page
async function analyzePage(url) {
  const result = {
    url,
    analyzed: false,
    metadata: null,
    jsonLd: null,
    allIssues: [],
    score: 0
  };

  try {
    // Convert URL to file path
    const filePaths = urlToFilePath(url);
    let html = null;
    let usedPath = null;

    if (typeof filePaths === 'string') {
      // Root path
      html = await fs.readFile(filePaths, 'utf-8');
      usedPath = filePaths;
    } else {
      // Try both paths
      try {
        html = await fs.readFile(filePaths.directPath, 'utf-8');
        usedPath = filePaths.directPath;
      } catch {
        html = await fs.readFile(filePaths.indexPath, 'utf-8');
        usedPath = filePaths.indexPath;
      }
    }

    // Extract SEO metadata
    result.metadata = extractSeoMetadata(html, url);
    result.allIssues.push(...result.metadata.issues);

    // Extract and validate JSON-LD
    result.jsonLd = await extractAndValidateJsonLd(html, url);
    result.allIssues.push(...result.jsonLd.issues);

    result.analyzed = true;

    // Calculate SEO score (0-100)
    let score = 100;
    const errors = result.allIssues.filter(i => i.severity === 'error').length;
    const warnings = result.allIssues.filter(i => i.severity === 'warning').length;
    score -= errors * 10;
    score -= warnings * 5;
    result.score = Math.max(0, score);

  } catch (error) {
    result.allIssues.push({ 
      severity: 'error', 
      message: `Failed to analyze page: ${error.message}` 
    });
  }

  return result;
}

// Generate summary statistics
function generateSummary(results) {
  const summary = {
    totalPages: results.length,
    analyzedPages: results.filter(r => r.analyzed).length,
    averageScore: 0,
    pagesWithJsonLd: 0,
    pagesWithValidJsonLd: 0,
    totalIssues: 0,
    errorCount: 0,
    warningCount: 0,
    perfectPages: 0
  };

  let totalScore = 0;
  results.forEach(result => {
    if (result.analyzed) {
      totalScore += result.score;
      if (result.score === 100) summary.perfectPages++;
    }
    if (result.jsonLd?.found) summary.pagesWithJsonLd++;
    if (result.jsonLd?.valid) summary.pagesWithValidJsonLd++;
    
    summary.totalIssues += result.allIssues.length;
    summary.errorCount += result.allIssues.filter(i => i.severity === 'error').length;
    summary.warningCount += result.allIssues.filter(i => i.severity === 'warning').length;
  });

  summary.averageScore = summary.analyzedPages > 0 
    ? Math.round(totalScore / summary.analyzedPages) 
    : 0;

  return summary;
}

// Main execution
async function main() {
  console.log(`${colors.bold}${colors.cyan}📊 Oscar Family - Offline SEO Checker${colors.reset}\n`);

  // Check if dist directory exists
  try {
    await fs.access(DIST_DIR);
  } catch {
    console.error(`${colors.red}✗ dist/ directory not found. Run 'npm run build' first.${colors.reset}`);
    process.exit(1);
  }

  // Get URLs from sitemap
  console.log(`${colors.gray}Reading sitemap.xml...${colors.reset}`);
  const urls = await getSitemapUrls();
  
  if (urls.length === 0) {
    console.error(`${colors.red}✗ No URLs found in sitemap${colors.reset}`);
    process.exit(1);
  }

  console.log(`${colors.green}✓ Found ${urls.length} URLs in sitemap${colors.reset}\n`);

  // Analyze each page
  console.log(`${colors.gray}Analyzing pages...${colors.reset}`);
  const results = [];
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`${colors.gray}[${i + 1}/${urls.length}] ${url}...${colors.reset}`);
    
    const result = await analyzePage(url);
    results.push(result);
    
    const scoreColor = result.score >= 90 ? colors.green 
                     : result.score >= 70 ? colors.yellow 
                     : colors.red;
    console.log(` ${scoreColor}${result.score}/100${colors.reset}`);
  }

  // Generate summary
  const summary = generateSummary(results);
  
  // Save report
  const report = {
    generatedAt: new Date().toISOString(),
    summary,
    results
  };
  
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(report, null, 2), 'utf-8');
  
  // Print summary
  console.log(`\n${colors.bold}${colors.cyan}╔═══════════════════════════╗${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}║   SEO Analysis Summary    ║${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}╚═══════════════════════════╝${colors.reset}\n`);
  
  console.log(`  Pages analyzed:      ${summary.analyzedPages}/${summary.totalPages}`);
  console.log(`  Average score:       ${summary.averageScore}/100`);
  console.log(`  Perfect pages:       ${summary.perfectPages}`);
  console.log(`  Pages with JSON-LD:  ${summary.pagesWithJsonLd}`);
  console.log(`  Valid JSON-LD:       ${summary.pagesWithValidJsonLd}`);
  console.log(`  ${colors.red}Errors:${colors.reset}              ${summary.errorCount}`);
  console.log(`  ${colors.yellow}Warnings:${colors.reset}            ${summary.warningCount}`);
  
  console.log(`\n${colors.green}✓ Report saved to: ${OUTPUT_FILE}${colors.reset}`);
  console.log(`${colors.cyan}➜ View report: http://localhost:5173/checkseo${colors.reset}\n`);
  
  // Exit with error code if there are critical issues
  if (summary.errorCount > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error(`${colors.red}✗ Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});
