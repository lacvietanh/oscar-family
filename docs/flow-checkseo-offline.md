# CheckSEO Offline Flow

## Tổng quan

Script `checkseo-offline.js` thực hiện SEO analysis offline cho toàn bộ project Oscar Family. Nó build project, parse HTML files, validate SEO metadata và JSON-LD structured data.

## Flow Diagram

```mermaid
graph TD
    A[Run: npm run checkseo] --> B[Build project với vite-ssg]
    B --> C[Check dist/ directory exists]
    C --> D[Read sitemap.xml from dist/]
    D --> E[Extract URLs from sitemap]

    E --> F[Loop qua từng URL]
    F --> G[Convert URL to HTML file path]
    G --> H[Read HTML file from dist/]

    H --> I[Extract SEO metadata]
    I --> I1[Parse &lt;title&gt;]
    I --> I2[Parse meta description]
    I --> I3[Parse &lt;h1&gt;]
    I --> I4[Parse og:image]
    I --> I5[Parse canonical URL]
    I --> I6[Parse images & alt texts]

    H --> J[Extract & validate JSON-LD]

    %% JSON-LD Validation Subgraph
    subgraph J[JSON-LD Validation]
        J1[Extract JSON-LD scripts] --> J2[Parse JSON content]
        J2 --> J3{Parse successful?}

        J3 -->|Yes| J4[Call jsonld.expand]
        J3 -->|No| J5[Add parse error to issues]

        J4 --> J6[Use custom document loader]
        J6 --> J7[Load offline schema.org context]
        J7 --> J8[Expand JSON-LD to RDF]

        J8 --> J9{Expansion successful?}
        J9 -->|Yes| J10[Check for unknown types]
        J9 -->|No| J11[Add expansion error to issues]

        J10 --> J12[Find unknown schema.org types]
        J12 --> J13[Validate known types]

        J13 --> J14{All types valid?}
        J14 -->|Yes| J15[Mark JSON-LD as valid]
        J14 -->|No| J16[Add type validation errors]

        J5 --> J17[Return validation result]
        J11 --> J17
        J15 --> J17
        J16 --> J17
    end

    I --> K[Calculate SEO score]
    J --> K
    K --> L[Generate issues list]

    L --> M[Next URL in loop]
    M --> F
    F --> N[All URLs processed]

    N --> O[Generate summary statistics]
    O --> P[Create JSON report]
    P --> Q[Save to dev/seo-report.json]
    Q --> R[Print console summary]
    R --> S[Exit with error code if issues]
```

## Chi tiết các bước

### 1. Initialization
- **Build project**: Chạy `vite-ssg build` để tạo HTML files
- **Check dist/**: Verify build output exists
- **Read sitemap**: Parse `sitemap.xml` để lấy list URLs

### 2. URL Processing Loop
For each URL in sitemap:
- **Convert URL to file path**: `https://domain.com/path` → `dist/path.html`
- **Read HTML file**: Load prerendered HTML content

### 3. SEO Metadata Extraction
Parse HTML using regex:
- `<title>` - Page title
- `<meta name="description">` - Meta description
- `<h1>` - Main heading
- `<meta property="og:image">` - Open Graph image
- `<link rel="canonical">` - Canonical URL
- `<img>` tags - Check alt attributes

### 4. JSON-LD Validation (Subgraph Detail)
- **Extract scripts**: Find all `<script type="application/ld+json">` tags
- **Parse JSON**: Validate JSON syntax for each script
- **Custom document loader**: Use offline `dev/schemaorg-context.jsonld` instead of fetching from web
- **jsonld.expand**: Convert compact JSON-LD to expanded RDF triples
- **Type validation**: Check if `@type` values are valid schema.org types
- **Unknown types detection**: Flag non-schema.org types as errors
- **Issue collection**: Aggregate all validation errors and warnings

### 5. Scoring System
- **Base score**: 100 points
- **Error penalty**: -10 points each
- **Warning penalty**: -5 points each
- **Minimum score**: 0

### 6. Report Generation
- **Summary stats**: Average score, perfect pages, issue counts
- **Per-page results**: Metadata, JSON-LD status, issues
- **Save to JSON**: `dev/seo-report.json`

## Dependencies

- **fs/promises**: File system operations
- **path**: Path manipulation
- **jsonld**: JSON-LD validation library
- **Custom document loader**: Offline schema.org context from `dev/schemaorg-context.jsonld`

## Key Technical Details

### Custom Document Loader
```javascript
// Load offline schema.org context instead of fetching from web
async function customDocumentLoader(url) {
  if (url.includes('schema.org')) {
    // Load from dev/schemaorg-context.jsonld
    return { document: localSchemaContext };
  }
  // Use default loader for other URLs
}
```

### Type Validation Logic
- **Known prefix**: `http://schema.org/`
- **Check expansion**: Invalid types fail to expand properly
- **Error reporting**: Flag unknown types with context path

### Offline Context File
- **`dev/schemaorg-context.jsonld`**: Cached schema.org vocabulary
- **No internet required**: Complete offline validation
- **Updated separately**: Manual sync with schema.org

## Usage

```bash
# Run complete SEO analysis
npm run checkseo

# View results in browser
npm run fe
# Navigate to: http://localhost:5173/checkseo
```

## Output Files

- **`dev/seo-report.json`**: Detailed analysis report
- **`dist/`**: Build output (HTML files for analysis)

## Error Handling

- **Missing dist/**: Exit with error
- **Empty sitemap**: Exit with error
- **Parse failures**: Log as issues, continue processing
- **Critical errors**: Exit with error code 1
