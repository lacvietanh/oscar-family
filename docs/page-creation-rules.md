# Bộ nguyên tắc xây dựng trang bài viết SEO

**Phiên bản: 2.0 - Ngày cập nhật: 30/11/2025**

Tài liệu này tích hợp kinh nghiệm từ các trang hiện có (`lamnhac.vue`, `akinet.vue`, `qqmusic-lyrics-search.vue`) và nghiên cứu UX hiện đại để tạo ra quy trình chuẩn hóa việc xây dựng trang mới trong `src/pages/`.

## 🎯 MỤC TIÊU QUAN TRỌNG:
Tối ưu trải nghiệm người dùng thời đại số - **thuyết phục trong 5 giây đầu tiên**, chi tiết kỹ thuật sau. Cấu trúc "tinh túy trước - giải thích sau" để phù hợp với thói quen "scroll nhanh quyết định nhanh".

## 1. Định dạng file & đặt tên
- Mỗi trang là một Single File Component (SFC) Vue 3 dạng `<script setup>` đặt tại `src/pages/<slug>.vue`.
- Tên file sử dụng chữ thường, không dấu, nối bằng gạch ngang (`-`).
- Tên route/slug trùng với tên file để đồng bộ giữa router và `RelatedPosts`.

## 2. Cấu trúc tổng quát - UX tối ưu cho thời đại sống vội

### Nguyên tắc "Tinh túy trước - Chi tiết sau":
```
1. Header + Tinh túy nổi bật (điểm mạnh nhất - thuyết phục trong 5s)
2. Lý do cần công cụ (ngắn gọn, logic)
3. Chi tiết kỹ thuật (thư viện, tính năng, workflow)
4. Lợi ích kinh doanh (dưới dạng card trực quan)
5. Hướng dẫn + FAQ (interactive)
6. CTA cuối trang + Related posts
```

### Template chuẩn:
```vue
<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <!-- HEADER + TINH TÚY NỔI BẬT -->
    <header class="text-center mb-12">
      <figure class="mb-8">
        <img ...>
        <figcaption>...</figcaption>
      </figure>
      <h1>Tiêu đề chính <span class="highlight-keyword">KEYWORD</span></h1>
      <p class="text-xl text-muted">Mở bài thuyết phục</p>

      <!-- TINH TÚY NỔI BẬT - ĐIỂM MẠNH NHẤT -->
      <div class="highlight-section">
        <h2>⚡ TINH TÚY NỔI BẬT ⚡</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <!-- 4 cards điểm mạnh -->
        </div>
        <a href="..." target="_blank" class="cta-button">🚀 DÙNG NGAY</a>
      </div>
    </header>

    <!-- CHI TIẾT KỸ THUẬT -->
    <section class="space-y-12">
      <section><!-- Lý do cần --></section>
      <section><!-- Chi tiết --></section>
      <section><!-- Lợi ích --></section>
      <section><!-- FAQ --></section>
    </section>

    <!-- CTA CUỐI + RELATED -->
    <div class="final-cta">
      <a href="..." target="_blank">🚀 DÙNG NGAY</a>
    </div>
    <RelatedPosts exclude-slug="/<slug>" />
  </article>
</template>
```

### Nguyên tắc thiết kế:
- **Header tối ưu:** `figure` + `h1` (keyword highlight) + mở bài + **section tinh túy nổi bật**
- **Section tinh túy:** 4-6 cards với icon, gradient background, CTA button ngay giữa
- **Thân bài:** `space-y-12` thay vì `space-y-8` để breathing room tốt hơn
- **Interactive elements:** FAQ `details/summary`, hover effects, gradient backgrounds
- **Visual hierarchy:** Icons, colors, shadows dẫn dắt mắt đọc tự nhiên

## 3. Ảnh & tài nguyên - Visual storytelling
- **Hình chính:** Lấy từ `public/img/`, kích thước ≥ 1200px ngang cho social card
- **Alt text tối ưu:** Mô tả khung cảnh + keyword chính, tự nhiên không nhồi nhét
- **Figcaption:** Nhấn mạnh insight chính, tạo curiosity
- **Section tinh túy:** Sử dụng icons emoji (⚡🎵📱💰) + gradient backgrounds
- **CTA buttons:** Design gradient, rounded-full, hover scale effect
- **Interactive feedback:** Hover states, transitions để tăng engagement

## 4. Nội dung SEO & tone - Thuyết phục tức thì

### SEO tối ưu:
- **Tiếng Việt tự nhiên:** Xen kẽ keyword chính + long-tail, tránh nhồi nhét
- **Cấu trúc số:** `n. Tên mục` hỗ trợ scan reading
- **Số liệu USP:** Bullet points với emoji, số liệu cụ thể

### Highlight keywords mạnh mẽ:
- **Kỹ thuật styling:** Background color + `font-black` cho keyword chính
- **Ví dụ:** `TRONG 5S` với `bg-yellow-900/50 px-2 py-1 rounded font-black`
- **Vị trí:** H1 title, meta description, workflow steps, comparison table
- **Mục đích:** Tạo ấn tượng mạnh, dễ nhớ, tăng CTR

### Ngôn ngữ UX-friendly:
- **Tránh technical terms:** "Import" → "kéo thả trực tiếp và có ngay lập tức"
- **Nhấn mạnh tốc độ:** "5S" thay vì "5 giây" cho cảm giác urgency
- **Tone thân thiện:** Chuyên nghiệp nhưng gần gũi, thuyết phục
- **FAQ interactive:** `details/summary` với animation mượt mà

## 5. Meta tags với `useHead` - SEO tối ưu

### Template meta tags chuẩn:
```javascript
<script setup>
import { useHead } from '@vueuse/head'
import RelatedPosts from '../components/RelatedPosts.vue'

const title = 'Title với KEYWORD chính - TRONG 5S'
const description = 'Description nhấn mạnh tốc độ và lợi ích chính - TRONG 5S'
const url = 'https://oscarfamily.vn/<slug>'
const image = 'https://oscarfamily.vn/img/<image>.png'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article', // Hoặc 'WebSite', 'Product' tùy mục đích
  headline: title,
  description,
  image,
  author: { '@type': 'Person', name: 'LacVietAnh' },
  datePublished: '2025-11-30',
  url,
  inLanguage: 'vi',
  about: [
    { '@type': 'Thing', name: 'Keyword chính' },
    { '@type': 'Thing', name: 'Lợi ích chính' }
  ]
}

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'keyword chính, long-tail keyword, tốc độ 5s, ...' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'LacVietAnh' },
    { name: 'language', content: 'vi' },
    // Open Graph tối ưu
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Oscar Family' },
    { property: 'og:locale', content: 'vi_VN' },
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: '@oscarfamily' }
  ],
  link: [
    { rel: 'canonical', href: url },
    { rel: 'alternate', hreflang: 'vi', href: url }
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }]
})
</script>
```

### Nguyên tắc meta tags tối ưu:
- **Title:** ≤ 65 ký tự, chứa keyword chính + "TRONG 5S" cho urgency
- **Description:** 150–160 ký tự, nhấn mạnh tốc độ và lợi ích chính
- **Keywords:** Keyword chính + long-tail, phân tách bằng dấu phẩy
- **Open Graph:** Thêm `site_name`, `locale` cho social sharing tối ưu
- **Twitter Cards:** `summary_large_image` cho visual appeal
- **JSON-LD:** `@type` phù hợp (Article cho blog, Product cho tool), thêm `about` array
- **Robots:** Thêm `max-snippet:-1, max-image-preview:large` để tối ưu rich snippets

## 6. Schema & JSON-LD - Structured Data tối ưu

### Schema types thông minh:
- **`Article`**: Bài viết blog, hướng dẫn (thêm `datePublished`, `author`)
- **`Product`**: Trang tool/app (thêm `offers`, `applicationCategory`)
- **`WebApplication`**: Tool web (thêm `operatingSystem`, `softwareVersion`)
- **`FAQPage`**: Trang có FAQ section (thêm `mainEntity` array)
- **`HowTo`**: Hướng dẫn từng bước (thêm `step` array)

### JSON-LD tối ưu cho UX:
```javascript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article', // Hoặc 'Product', 'WebApplication'
  headline: title,
  description,
  image,
  author: {
    '@type': 'Person',
    name: 'LacVietAnh',
    url: 'https://oscarfamily.vn'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Oscar Family',
    logo: {
      '@type': 'ImageObject',
      url: 'https://oscarfamily.vn/img/logo.png'
    }
  },
  datePublished: '2025-11-30',
  dateModified: '2025-11-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  },
  about: [
    { '@type': 'Thing', name: 'Keyword chính' },
    { '@type': 'Thing', name: 'Lợi ích TRONG 5S' },
    { '@type': 'Thing', name: 'UX tối ưu' }
  ],
  mentions: [
    { '@type': 'WebApplication', name: 'Tool chính' }
  ]
}
```

### Best practices:
- **Một schema chính:** Tránh duplicate, chọn `@type` phù hợp nhất
- **Fields đầy đủ:** `headline`, `description`, `image`, `author`, `publisher`
- **Rich snippets:** Thêm `aggregateRating`, `offers` khi phù hợp
- **About array:** Liệt kê các entities quan trọng cho semantic search
- **Validation:** Test với Google's Rich Results Tool trước khi deploy

## 7. Phong cách CSS - UX tối ưu

### Template CSS chuẩn:
```css
<style scoped>
.seo-article {
  color: #fff;
  line-height: 1.7;
}

.text-muted { color: #c3afc8; }
body { background: #000; }

/* Highlight keywords mạnh mẽ */
.highlight-keyword {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  padding: 2px 6px;
  border-radius: 4px;
}

/* Section tinh túy nổi bật */
.highlight-section {
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  border: 2px solid #f59e0b;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 8px 32px rgba(245, 158, 11, 0.3);
}

/* Cards với hover effects */
.hover-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* CTA buttons */
.cta-button {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #000;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4);
}

.cta-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
}

/* FAQ interactive */
details {
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

details:hover {
  border-color: #4f46e5;
}

details[open] {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

summary::before {
  content: '▶';
  color: #fbbf24;
  font-size: 1.2em;
  margin-right: 12px;
  transition: transform 0.3s ease;
}

details[open] summary::before {
  transform: rotate(90deg);
}

/* Responsive tối ưu */
@media (max-width: 768px) {
  .seo-article {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .highlight-section {
    padding: 1.5rem;
  }

  .hover-card:hover {
    transform: none; /* Disable hover transform on mobile */
  }
}
</style>
```

### Nguyên tắc CSS tối ưu:
- **Highlight keywords:** Gradient text effect cho keyword chính
- **Interactive elements:** Hover effects, transitions mượt mà
- **Visual hierarchy:** Shadows, gradients, borders để dẫn dắt mắt
- **Responsive:** Tối ưu cho mobile, disable hover effects khi cần
- **Performance:** Chỉ CSS thực sự cần thiết, tránh duplicate với Tailwind

## 8. Cập nhật `RelatedPosts` & Final CTA

### RelatedPosts chuẩn:
```javascript
{
  slug: '/<slug>',
  title: 'Tiêu đề hiển thị với KEYWORD',
  image: '/img/<image>.png',
  excerpt: 'Mô tả ngắn 1-2 câu nhấn mạnh lợi ích chính',
  tags: ['Tag1', 'Tag2', 'TRONG 5S']
}
```

### Final CTA section:
```vue
<!-- CTA CUỐI TRANG -->
<div class="text-center mt-16 mb-8">
  <a href="https://app.akivn.net/<tool>" target="_blank" rel="noopener noreferrer"
     class="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
    🚀 DÙNG NGAY - TRONG 5S
  </a>
  <p class="text-gray-400 mt-4 text-sm">
    Mở trong tab mới • Hoàn toàn miễn phí • Không cần đăng ký
  </p>
</div>

<RelatedPosts exclude-slug="/<slug>" />
```

### Nguyên tắc:
- **Exclude slug:** Đảm bảo `exclude-slug="/<slug>"` để tránh lặp bài hiện tại
- **Final CTA:** Button gradient với `target="_blank"`, kèm mô tả phụ
- **RelatedPosts:** Tiêu đề và excerpt chứa keyword để tối ưu SEO

## 9. Checklist đầy đủ trước khi build

### 🎯 UX tối ưu cho thời đại sống vội:
- [ ] **Section tinh túy nổi bật** ở vị trí chiến lược (ngay sau header)
- [ ] **4-6 cards điểm mạnh** với icon, gradient background, hover effects
- [ ] **Keyword chính được highlight mạnh mẽ** với background + font-black
- [ ] **CTA buttons** ở đầu trang (trong highlight) + cuối trang với `target="_blank"`
- [ ] **Ngôn ngữ thân thiện:** Tránh technical terms, nhấn mạnh tốc độ
- [ ] **UI responsive** trên mobile và desktop

### 🔍 SEO & Content tối ưu:
- [ ] Ảnh chính ≥ 1200px ngang, alt text tự nhiên, figcaption có insight
- [ ] Title ≤ 65 ký tự với keyword + "TRONG 5S", description 150-160 ký tự
- [ ] Keywords đầy đủ: chính + long-tail, phân tách bằng dấu phẩy
- [ ] JSON-LD schema phù hợp với `@type` chính xác và fields đầy đủ
- [ ] Open Graph + Twitter Cards với `site_name`, `locale`
- [ ] Heading hierarchy hợp lý (H1 → H2 → H3), không bỏ cấp

### 💻 Technical & Performance:
- [ ] Copy đã điền đầy đủ tất cả meta tags và schema
- [ ] Tables/FAQ/Lists hiển thị tốt trên mobile
- [ ] Đã thêm bài vào `RelatedPosts` với `exclude-slug` đúng
- [ ] CSS tối ưu: chỉ thêm khi cần, tránh duplicate với Tailwind
- [ ] Chạy `npm run build` đảm bảo không lỗi lint/compile
- [ ] Test responsive trên các thiết bị thực tế

### 📊 Kết quả mong đợi:
- **Thuyết phục trong 5 giây đầu tiên** nhờ section tinh túy
- **Tăng conversion rate** với CTA buttons chiến lược
- **Giảm bounce rate** với nội dung UX-friendly
- **SEO tối ưu** với meta tags và schema đầy đủ
- **Trải nghiệm mượt mà** trên tất cả thiết bị

---

**Tuân thủ bộ nguyên tắc 2.0 này đảm bảo:**
- Cấu trúc "tinh túy trước - chi tiết sau" phù hợp thời đại số
- UX tối ưu cho người dùng "sống vội"
- SEO toàn diện với highlight keywords mạnh mẽ
- Performance và accessibility đạt chuẩn
- Conversion rate tối ưu với CTA buttons chiến lược

