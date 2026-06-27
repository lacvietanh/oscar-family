# Bộ nguyên tắc xây dựng trang bài viết SEO

**v2.1 - 30/11/2025** | Dành cho HUMAN & AI | Kim chỉ nam xây dựng trang content tối ưu SEO + UX

## 🎯 MỤC TIÊU
**Thuyết phục trong 5 giây đầu tiên**. Cấu trúc "tinh túy trước - chi tiết sau" phù hợp thói quen "scroll nhanh quyết định nhanh".

## 1. File & Naming
- `src/pages/<slug>.vue` (SFC Vue 3, `<script setup>`)
- Slug: chữ thường, không dấu, gạch ngang
- Route trùng tên file

## 2. Cấu trúc UX (Bắt buộc)
```
1. Header + Highlight Section (4 cards điểm mạnh, CTA internal link)
2. Section 01: Câu chuyện/Lý do (nếu có tác giả)
3. Section 02+: Chi tiết kỹ thuật (workflow, so sánh, table)
4. Section cuối: FAQ interactive (<details>/<summary>)
5. Final CTA + RelatedPosts
```

**Template Vue:**
```vue
<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <header class="text-center mb-12">
      <figure class="mb-8"><img src="/img/..." alt="..."><figcaption>Insight</figcaption></figure>
      <h1>Tiêu đề <span class="highlight-keyword">KEYWORD</span></h1>
      <p class="text-xl text-muted">Mở bài thuyết phục</p>
      
      <!-- HIGHLIGHT SECTION: 4 cards + CTA link -->
      <div class="highlight-section mt-10">
        <h2>⚡ TINH TÚY ⚡</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="hover-card"><!-- Card 1 --></div>
          <!-- ... 3 cards more -->
        </div>
        <a href="#section-id" class="cta-button">KHÁM PHÁ</a>
      </div>
    </header>
    
    <!-- Sections với ID + scroll-mt-20 -->
    <div class="space-y-16">
      <section id="section-id" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800">01</span>
          <h2 class="text-3xl font-bold">Tiêu đề Section</h2>
        </div>
        <!-- Content -->
      </section>
    </div>
    
    <div class="final-cta"><a href="..." target="_blank">🚀 CTA</a></div>
    <RelatedPosts exclude-slug="/slug" />
  </article>
</template>
```

## 3. Ảnh & Visual
- **Hình chính:** `public/img/`, ≥1200px ngang (social card)
- **Alt text:** Mô tả khung cảnh + keyword tự nhiên
- **Figcaption:** Nhấn mạnh insight, tạo curiosity
- **Icons:** Emoji (⚡🎵📱💰) + gradient backgrounds in cards

## 4. Nội dung & Tone
- **SEO:** Keyword chính + long-tail xen kẽ tự nhiên, cấu trúc số `n. Tên mục`
- **Highlight:** `<span class="highlight-keyword">TRONG 5S</span>` (gradient text)
- **Tone:** UX-friendly, tránh technical jargon (dùng "kéo thả ngay" thay "import")
- **FAQ:** `<details>/<summary>` với animation (▶ rotate 90deg khi open)
- **Visual hierarchy:** Dùng icons, colors, shadows dẫn mắt đọc

## 5. Meta Tags (Đầy đủ)
```javascript
const title = 'Title KEYWORD - TRONG 5S' // ≤65 ký tự
const description = 'Description lợi ích cụ thể - TRONG 5S' // 150-160 ký tự
const url = 'https://oscarfamily.vn/<slug>'
// LƯU Ý: Phải dùng ảnh bài viết (feature image), KHÔNG dùng ảnh logo mặc định
const image = 'https://oscarfamily.vn/img/<specific-article-image>.png' // ≥1200px

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'keyword chính, long-tail, TRONG 5S, ...' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'Lạc Việt Anh' },
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Oscar Family' },
    { property: 'og:locale', content: 'vi_VN' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ],
  link: [{ rel: 'canonical', href: url }],
  script: schemas.map(s => ({ type: 'application/ld+json', innerHTML: JSON.stringify(s) }))
})
```

## 6. JSON-LD Schemas (3-5/trang)

**QUAN TRỌNG:** Mỗi trang PHẢI có nhiều schemas để tối ưu rich snippets.

```javascript
const schemas = [
  articleSchema,        // 1. Schema chính
  personSchema,         // 2. Tác giả (chi tiết)
  faqSchema,            // 3. FAQ (nếu có section FAQ)
  softwareSchema,       // 4. Tool/App (nếu đề cập)
  organizationSchema    // 5. Organization
]
```

**Kết hợp theo loại trang:**
- **Bài viết:** `TechArticle` + `Person` + `Organization` + `FAQPage`
- **Tool/App:** `SoftwareApplication` + `Person` + `HowTo` + `AggregateRating`
- **Studio/Dịch vụ:** `LocalBusiness` + `Organization` + `Service` + `Review`

**Lợi ích:**
- Google hiểu sâu → Rich snippets đa dạng (FAQs, How-to, People also ask)
- Rank cao hơn cho long-tail keywords
- Xuất hiện nhiều loại search results

### Schema Types Phổ Biến:
- `TechArticle`: Bài viết kỹ thuật (+ `datePublished`, `author`, `publisher`)
- `SoftwareApplication`: Tool/App (+ `offers`, `applicationCategory`, `operatingSystem`)
- `FAQPage`: Trang có FAQ (+ `mainEntity` array of Questions)
- `Person`: Tác giả chi tiết (+ `jobTitle`, `worksFor`, `sameAs`, `knowsAbout`)
- `Organization`: Tổ chức (+ `founder`, `logo`, `sameAs`, `contactPoint`)

### Template Article Schema:
```javascript
{
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: title,
  description,
  image,
  author: { 
    '@type': 'Person', 
    name: 'Lạc Việt Anh', 
    url: 'https://akivn.net',
    jobTitle: 'Chief Product Architect'
  },
  publisher: { 
    '@type': 'Organization', 
    name: 'AkiNet', 
    logo: { '@type': 'ImageObject', url: 'https://oscarfamily.vn/logo.png' }
  },
  datePublished: '2025-11-30',
  dateModified: '2025-11-30',
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  about: [
    { '@type': 'Thing', name: 'Keyword chính' },
    { '@type': 'Thing', name: 'Lợi ích' }
  ]
}
```

## 6a. Date/Time Standards

> **🚨 CRITICAL — BẮT BUỘC:** Trước khi tạo hoặc cập nhật bất kỳ bài viết nào, AI Agent **PHẢI** lấy thời gian hiện tại theo múi giờ GMT+7 (Việt Nam) để đảm bảo tính chính xác tuyệt đối cho `datePublished`, `dateModified`, ngày hiển thị trên UI và `time` (Unix timestamp) trong `RelatedPosts`. Không được tự suy đoán hoặc dùng năm mặc định từ training data.

- **Format:** ISO 8601 (`YYYY-MM-DD` hoặc `YYYY-MM-DDTHH:mm:ss+07:00`)
- **datePublished:** Ngày xuất bản (không đổi)
- **dateModified:** Ngày update (thay đổi khi sửa content)
- **Timezone:** `+07:00` (UTC+7 Việt Nam)
- **UI hiển thị:** Có thể dùng format khác (30/11/2025), nhưng schema phải ISO 8601

## 6b. Section IDs & Internal Linking

**Naming Convention:**
```vue
<!-- ĐÚNG: tiếng Việt không dấu + gạch ngang -->
<section id="cau-chuyen" class="scroll-mt-20">...</section>
<section id="cong-nghe" class="scroll-mt-20">...</section>

<!-- SAI -->
<section id="cauChuyen">  <!-- ✗ camelCase -->
<section id="câu_chuyện"> <!-- ✗ có dấu -->
```

**Internal Links:**
```vue
<!-- Từ Highlight Section -->
<a href="#cong-nghe" class="cta-button">KHÁM PHÁ CÔNG NGHỆ</a>

<!-- Trong content -->
<p>Chi tiết tại <a href="#cau-chuyen" class="text-yellow-500">phần câu chuyện</a>.</p>
```

**Lợi ích:**
- UX: Scroll mượt đến đúng section (dùng `scroll-mt-20` offset header)
- SEO: Google index structure rõ → Sitelinks tốt hơn
- Time on page tăng, bounce rate giảm

## 7. CSS Chuẩn (Scoped)

```css
<style scoped>
/* Keyword highlight - Gradient text */
.highlight-keyword {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}

/* Highlight Section - Glassmorphism */
.highlight-section {
  background: linear-gradient(180deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.8));
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

/* Hover card - Smooth lift */
.hover-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* CTA Button - Gradient + Hover scale */
.cta-button {
  background: linear-gradient(135deg, #fbbf24, #d97706);
  color: #000;
  font-weight: 800;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
}
.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
}

/* FAQ Interactive - Arrow rotate */
details > summary { list-style: none; }
details > summary::before {
  content: '▶';
  color: #fbbf24;
  margin-right: 12px;
  transition: transform 0.3s;
}
details[open] summary::before { transform: rotate(90deg); }

/* Responsive */
@media (max-width: 768px) {
  .hover-card:hover { transform: none; } /* Disable mobile */
  .highlight-section { padding: 1.5rem; }
}
</style>
```

## 8. RelatedPosts & CTA

**RelatedPosts Entry:**
```javascript
{
  slug: '/slug',
  title: 'Tiêu đề với KEYWORD',
  image: '/img/image.png',
  excerpt: 'Mô tả 1-2 câu nhấn mạnh lợi ích',
  tags: ['Tag1', 'Tag2'],
  // QUAN TRỌNG: Tính toán Unix timestamp HIỆN TẠI (không copy số cũ). Ví dụ: Math.floor(Date.now() / 1000)
  time: 1764441191 
}
```

**Final CTA Template:**
```vue
<div class="text-center mt-16">
  <a href="..." target="_blank" class="cta-button">🚀 DÙNG NGAY - TRONG 5S</a>
  <p class="text-gray-400 mt-4 text-sm">Miễn phí • Không cần đăng ký</p>
</div>
<RelatedPosts exclude-slug="/slug" />
```

## 9. Checklist Build

**UX & Design:**
- [ ] Highlight Section ngay sau header (4 cards + CTA internal link)
- [ ] Keyword `<span class="highlight-keyword">` ở H1, workflow, comparison
- [ ] Section IDs + `scroll-mt-20` + internal links
- [ ] FAQ `<details>/<summary>` với animation
- [ ] Responsive mobile/desktop

**SEO & Content:**
- [ ] Ảnh ≥1200px, alt text tự nhiên + figcaption insight
- [ ] Title ≤65 ký tự + "TRONG 5S", description 150-160 ký tự
- [ ] **3-5 JSON-LD schemas** (Article/Person/FAQ/Software/Org)
- [ ] Date format ISO 8601 (`datePublished`, `dateModified`)
- [ ] H1→H2→H3 đúng hierarchy, không bỏ cấp
- [ ] Keywords: chính + long-tail xen kẽ tự nhiên

**Technical:**
- [ ] Meta tags đầy đủ (OG, Twitter, robots, author)
- [ ] RelatedPosts entry + `exclude-slug` đúng
- [ ] **`npm run checkseo` pass 100/100**
- [ ] CSS scoped, không duplicate Tailwind
- [ ] `npm run build` không lỗi lint

---

**Tuân thủ rules đảm bảo:**
- **Thuyết phục TRONG 5S** (Highlight Section + visual hierarchy)
- **SEO tối ưu** (3-5 schemas, rich snippets, semantic search)
- **UX smooth** (internal links, FAQ interactive, responsive)
- **Conversion cao** (CTA chiến lược đầu + cuối trang)
