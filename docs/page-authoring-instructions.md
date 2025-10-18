# Bộ nguyên tắc xây dựng trang bài viết SEO

Tài liệu này trích xuất cấu trúc và quy trình từ các trang hiện có (`lamnhac.vue`, `akinet.vue`) để chuẩn hóa việc tạo trang mới trong `src/pages/`.

## 1. Định dạng file & đặt tên
- Mỗi trang là một Single File Component (SFC) Vue 3 dạng `<script setup>` đặt tại `src/pages/<slug>.vue`.
- Tên file sử dụng chữ thường, không dấu, nối bằng gạch ngang (`-`).
- Tên route/slug trùng với tên file để đồng bộ giữa router và `RelatedPosts`.

## 2. Cấu trúc tổng quát
```
<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <header>
      <figure>
        <img ...>
        <figcaption>...</figcaption>
      </figure>
      <h1>Tiêu đề chính</h1>
      <p class="text-lg text-muted">Mở bài</p>
    </header>

    <section class="space-y-8">
      <!-- Nội dung thân bài chia thành h2/h3, list, bảng, details -->
    </section>

    <RelatedPosts exclude-slug="/<slug>" />
  </article>
</template>
```
- `article` giữ lớp `seo-article font-montserrat` để thống nhất kiểu chữ và màu nền.
- `header` luôn gồm: `figure` (ảnh + chú thích), `h1` (tiêu đề 60-70 ký tự, chứa keyword chính), đoạn mở đầu (có thể thêm `<strong>`, `<em>` cho keyword).
- Thân bài (`section.space-y-8`) chia rõ các mục với `h2` đánh số, có thể lồng `h3` khi cần.
- Dekoration hỗ trợ SEO: danh sách (`ul`, `ol`), bảng (`table`), `details/summary` cho FAQ, mã (`code`) khi mô tả kỹ thuật.
- Cuối bài đặt `RelatedPosts` và chuyền slug hiện tại vào `exclude-slug` để tránh lặp.

## 3. Ảnh & tài nguyên
- Hình minh họa đầu bài lấy từ `public/img/`. Đảm bảo file tồn tại và có tên mô tả, kích thước đủ lớn (≥ 1200px chiều ngang) để hiển thị social card.
- Thuộc tính `alt` mô tả đầy đủ khung cảnh + từ khóa.
- `figcaption` cung cấp ngữ cảnh, nhấn mạnh insight chính.

## 4. Nội dung SEO & tone
- Viết bằng tiếng Việt, xen kẽ Keyword chính và long-tail tự nhiên, tránh nhồi nhét.
- Giữ cấu trúc tiêu đề dạng `n. Tên mục` (ví dụ `1. Tổng quan`, `2. ...`) nhằm hỗ trợ đọc nhanh.
- Chèn số liệu, USP, bullet list khi nhấn mạnh lợi ích.
- Với FAQ: dùng `details` lồng `summary` theo format mẫu.

## 5. Meta tags với `useHead`
```
<script setup>
import { useHead } from '@vueuse/head'
import RelatedPosts from '../components/RelatedPosts.vue'

const title = '...'
const description = '...'
const url = 'https://oscarfamily.vn/<slug>'
const image = 'https://oscarfamily.vn/img/<image>.png'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tên dự án',
  url,
  description,
  inLanguage: 'vi',
  sameAs: [...],
  about: [...]
}

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'keyword, ...' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ],
  link: [{ rel: 'canonical', href: url }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }]
})
</script>
```
- `title` ≤ 65 ký tự, chứa keyword chính.
- `description` 150–160 ký tự, mô tả giá trị cốt lõi.
- `keywords`: liệt kê keyword chính + long-tail (phân tách bằng dấu phẩy).
- `image`: dùng URL tuyệt đối để hiển thị khi share.
- `jsonLd`: giữ `@type` = `WebSite` cho trang khái quát; tùy chỉnh trường `sameAs`, `about` phù hợp nội dung. Thêm thuộc tính khác (ví dụ `creator`, `headline`) nếu cần để đáp ứng JSON-LD schema.

## 6. Schema & JSON-LD schema tối ưu crawl

Chèn JSON-LD schema phù hợp để giúp Google và các công cụ AI hiểu rõ nội dung trang. Một số loại schema phổ biến:

- `Article`, `BlogPosting`: Dùng cho bài viết, tin tức, blog.
- `Product`: Trang giới thiệu sản phẩm, dịch vụ.
- `Event`: Sự kiện, hội thảo, buổi diễn.
- `FAQPage`: Trang hỏi đáp, nhiều câu hỏi thường gặp.
- `JobPosting`: Tin tuyển dụng, mô tả vị trí công việc.
- `Organization`, `LocalBusiness`: Trang giới thiệu doanh nghiệp, tổ chức, địa điểm.
- `Review`: Đánh giá sản phẩm, dịch vụ, địa điểm.
- `Person`: Hồ sơ cá nhân, tác giả.
- `WebSite`, `WebPage`: Trang tổng quan, trang chủ, landing page.

**Hướng dẫn:**
- Chọn `@type` phù hợp với mục đích trang.
- Tham khảo tài liệu schema.org để biết các trường bắt buộc và khuyến nghị cho từng loại.
- Chỉ nên chèn một block JSON-LD chính dưới `useHead` để tránh trùng lặp.
- Đảm bảo các trường như `headline`, `description`, `image`, `datePublished`, `author`... được điền đầy đủ và đúng ngữ cảnh.

Ví dụ:
```js
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image,
  author: { '@type': 'Person', name: 'Tên tác giả' },
  datePublished: '2025-10-18',
  ...
}
```

## 7. Phong cách CSS
- Khối `<style scoped>` dùng để tinh chỉnh màu chữ, background:
```
<style scoped>
.seo-article { color: #fff; }
.text-muted { color: #c3afc8; }
body { background: #000; }
</style>
```
- Chỉ thêm CSS khi thật sự cần để tránh trùng lặp với Tailwind.

## 8. Cập nhật `RelatedPosts`
- Mỗi khi thêm trang mới, bổ sung object vào `src/components/RelatedPosts.vue`:
```
{
  slug: '/<slug>',
  title: 'Tiêu đề hiển thị',
  image: '/img/...',
  excerpt: 'Mô tả ngắn 1-2 câu',
  tags: ['Tag1', 'Tag2']
}
```
- Đảm bảo `excludeSlug` truyền vào component có dạng `/<slug>`.

## 9. Checklist trước khi build
- [ ] Ảnh chính đã tồn tại và tối ưu (webp/png, kích thước lớn, dung lượng < 500KB).
- [ ] Copy đã điền đầy đủ `title`, `description`, `keywords`, `jsonLd` đúng ngữ cảnh.
- [ ] Heading hierarchy hợp lý, không bỏ qua cấp (H2 → H3).
- [ ] Bảng/FAQ/List hiển thị tốt trên mobile.
- [ ] Đã thêm bài vào `RelatedPosts` và thiết lập `exclude-slug` đúng.
- [ ] Chạy `npm run build` đảm bảo không lỗi lint/compile.

Tuân thủ bộ nguyên tắc giúp tất cả trang mới giữ cấu trúc SEO đồng nhất, hỗ trợ prerender, nâng điểm crawl của Google và các công cụ AI.
