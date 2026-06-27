# Generate Sitemap Flow

## Tổng quan

Script `generate-sitemap.js` tạo sitemap.xml tự động sau khi SSG build hoàn thành. Nó scan thư mục dist/ để tìm tất cả file HTML và convert thành URL structure cho sitemap.

## Flow Diagram

```mermaid
graph TD
    A[onFinished callback in vite-ssg] --> B[Import generate-sitemap.js]
    B --> C[Read package.json for siteUrl]
    C --> D[siteUrl = homepage || 'https://oscarfamily.vn']

    D --> E[Walk dist/ directory recursively]
    E --> F[Find all .html files]
    F --> G[Exclude special files: 404.html, admin.html]

    G --> H[Convert file path to URL]
    H --> H1[path = 'index.html' → '/']
    H --> H2[path = 'page/index.html' → '/page']
    H --> H3[path = 'page.html' → '/page']

    H --> I[Collect URLs in Set]
    I --> J[All files processed]

    J --> K[Generate XML structure]
    K --> L[&lt;?xml version="1.0"?&gt;]
    L --> M[&lt;urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"&gt;]
    M --> N[For each URL: &lt;url&gt;&lt;loc&gt;...&lt;/loc&gt;&lt;lastmod&gt;...&lt;/lastmod&gt;&lt;changefreq&gt;...&lt;/changefreq&gt;&lt;priority&gt;...&lt;/priority&gt;&lt;/url&gt;]
    N --> O[&lt;/urlset&gt;]

    O --> P[Write to dist/sitemap.xml]
    P --> Q[Success: Console log URLs count]
    P --> R[Error: Console error message]
```

## Chi tiết các bước

### 1. Trigger
- **Called by**: `vite-ssg` trong `onFinished` callback
- **Timing**: Sau khi tất cả pages được render
- **Location**: `vite.config.js` → `ssgOptions.onFinished`

### 2. Configuration
- **siteUrl**: Từ `package.json.homepage` hoặc fallback `https://oscarfamily.vn`
- **Output**: `dist/sitemap.xml`
- **Format**: XML sitemap protocol

### 3. File Discovery
```javascript
// Walk directory recursively
async function walkDir(dir, baseDir) {
  // Find all .html files
  // Exclude: 404.html, *admin.html
}
```

### 4. Path Conversion
```javascript
// File path → URL path
index.html → /
about.html → /about
blog/index.html → /blog
blog/post.html → /blog/post
```

### 5. XML Generation
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://oscarfamily.vn/</loc>
    <lastmod>2024-01-15T10:00:00.000Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- more urls... -->
</urlset>
```

## Key Features

### ✅ Automatic Discovery
- Scan toàn bộ `dist/` directory
- Tìm tất cả `.html` files
- Convert paths automatically

### ✅ Smart Filtering
- Exclude error pages (`404.html`)
- Exclude admin pages (`*admin.html`)
- Only include public pages

### ✅ SEO Optimized
- `changefreq`: daily
- `priority`: 0.8
- `lastmod`: current timestamp

### ✅ Error Handling
- Directory scan errors logged
- File write errors logged
- Continues execution on failures

## Dependencies

- **fs/promises**: File system operations
- **path**: Path manipulation
- **package.json**: siteUrl configuration

## Usage

```bash
# Automatic: runs after npm run build
npm run build

# Manual: run standalone
node scripts/generate-sitemap.js
```

## Output Example

```
[sitemap] Generated with 9 URLs → /path/to/dist/sitemap.xml
```

## Integration Points

- **Input**: `dist/` directory (built HTML files)
- **Config**: `package.json.homepage`
- **Output**: `dist/sitemap.xml`
- **Consumer**: Search engines (Google, Bing, etc.)

## Error Scenarios

- **Missing dist/**: Script fails silently (called after build)
- **No HTML files**: Empty sitemap generated
- **Permission denied**: Write error logged
- **Invalid siteUrl**: Uses fallback URL
