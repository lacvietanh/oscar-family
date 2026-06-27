# Cố vấn Chuyển đổi từ Vite-SSG sang Nuxt 4 đảm bảo an toàn SEO

Tài liệu này đề xuất lộ trình chi tiết và phương pháp chuyển đổi dự án Oscar Family từ cấu trúc hiện tại (Vue 3 + Vite-SSG) sang Nuxt 4 (SSG Mode), đảm bảo không ảnh hưởng đến thứ hạng SEO và giữ nguyên LLM knowledge cực tốt đang có trên Internet.

---

## 🎯 Mục tiêu
- **Giữ vững SEO & LLM Knowledge**: Cấu trúc route, HTML tĩnh, SEO metadata (title, description, canonical, robots, og:image) và JSON-LD schemas phải trùng khớp chính xác 100% so với bản hiện tại.
- **Hiện đại hóa Tech Stack**: Chuyển sang Nuxt 4 giúp tối ưu quản lý trạng thái, dễ mở rộng tính năng và tận dụng hệ sinh thái phong phú của Nuxt (module Sitemap, Image, v.v.).
- **Giảm thiểu sai số**: Dùng script tự động so sánh chéo đầu ra để xác minh tính toàn vẹn của mã nguồn HTML trước khi triển khai.

---

## 📂 So sánh cấu trúc Thư mục

Nuxt 4 giới thiệu cấu trúc thư mục mới (mặc định gom trong thư mục `app/` để dễ quản lý hơn, hoặc tương thích ngược). Dưới đây là phương án ánh xạ:

| Thành phần | Cấu trúc hiện tại (Vite-SSG) | Cấu trúc Nuxt 4 (Khuyên dùng) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Cấu hình** | `vite.config.js`, `tailwind.config.js` | `nuxt.config.ts`, `tailwind.config.js` | Chuyển cấu hình Vite sang `nuxt.config.ts` |
| **Layout chính**| `src/Main.vue` | `app/app.vue` | Đổi tên và di chuyển |
| **Các trang** | `src/pages/*.vue` | `app/pages/*.vue` | Tự động sinh route dựa trên cấu trúc file |
| **Components** | `src/components/*.vue` | `app/components/*.vue` | Nuxt tự động imports (auto-import) |
| **Utilities** | `src/utils/*.js` | `app/utils/*.js` | Tự động imports các functions |
| **Tệp tĩnh** | `public/*` | `public/*` | Giữ nguyên ở thư mục root |
| **Đầu ra build** | `dist/` | `.output/public/` | Thư mục đầu ra khi chạy `nuxi generate` |

---

## ⚙️ Thiết lập `nuxt.config.ts` cho Nuxt 4

Để kích hoạt chế độ Nuxt 4 đầy đủ, tối ưu SSG và đồng bộ hóa trailing-slash an toàn cho Cloudflare Pages (học hỏi từ giải pháp của `akitao.com` và `vstshop.com`), ta sử dụng file cấu hình `nuxt.config.ts` như sau:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  // Kích hoạt tính năng Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  // Chế độ Server-Side Rendering phục vụ SSG
  ssr: true,

  // Sử dụng thư mục app/ làm source root theo chuẩn Nuxt 4
  srcDir: 'app',

  // Cấu hình PostCSS & Tailwind
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  // Cấu hình SEO mặc định (thay thế cho src/utils/seoDefault.js)
  app: {
    head: {
      htmlAttrs: {
        lang: 'vi',
      },
      link: [
        { rel: 'icon', href: '/favicon/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/icon-192.png' },
        { rel: 'manifest', href: '/favicon/manifest.json' },
      ],
      meta: [
        { name: 'theme-color', content: '#111111' },
      ]
    }
  },

  // Tối ưu hóa SEO & cấu hình Site Metadata
  site: {
    url: 'https://oscarfamily.vn',
    name: 'Oscar Family',
    defaultLocale: 'vi',
    trailingSlash: true // Bắt buộc trailing slash cho canonical & sitemap
  },

  // Đồng bộ trailing slash cho Router của Nuxt 4
  router: {
    options: {
      // @ts-expect-error - Nuxt config schema accepts trailingSlash but Vue Router typings do not
      trailingSlash: true
    }
  },

  // Tích hợp module Sitemap chính thức của Nuxt
  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    enabled: true,
    zeroRuntime: true, // Bắt buộc cho static site để tránh lỗi build-time
    exclude: ['/404', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }
  }
})
```

---

## 🛠️ Các bước thực hiện Di chuyển (Migration Steps)

### Bước 1: Khởi tạo Nuxt và cài đặt thư viện
1. Cài đặt các package của Nuxt 4 và module cần thiết:
   ```bash
   npm install nuxt@latest @nuxtjs/sitemap --save-dev
   ```
2. Cập nhật `package.json` scripts:
   ```json
   "scripts": {
     "dev": "nuxt dev",
     "build": "nuxt build",
     "generate": "nuxt generate",
     "preview": "nuxt preview"
   }
   ```

### Bước 2: Tổ chức lại mã nguồn
1. Tạo thư mục `app/` ở root.
2. Di chuyển `src/pages` sang `app/pages`, `src/components` sang `app/components`, `src/utils` sang `app/utils`.
3. Đổi tên `src/Main.vue` thành `app/app.vue`. Cập nhật template của `app.vue` sử dụng `<NuxtPage />` thay cho `<router-view />`:
   ```vue
   <!-- app/app.vue -->
   <template>
     <Nav />
     <NuxtPage />
     <Footer />
   </template>
   ```

### Bước 3: Chuyển đổi Meta tags & JSON-LD
1. **SEO Meta**: Nuxt 4 hỗ trợ hook `useHead` và `useSeoMeta` trực tiếp. Cấu trúc khai báo meta tag trong các trang con Vue sẽ giữ nguyên cú pháp của `@vueuse/head`, đảm bảo các thẻ `@type`, `og:title`, `og:description`, `og:image`... trùng khớp 100%.
2. **JSON-LD Schema**: Trong các trang con, ta nhúng JSON-LD bằng cách đẩy trực tiếp script block vào `useHead`:
   ```javascript
   useHead({
     script: [
       {
         type: 'application/ld+json',
         innerHTML: JSON.stringify(schemas)
       }
     ]
   })
   ```

---

## 🧪 Quy trình Xác minh (Verification Plan) - So sánh chéo đầu ra

Để đảm bảo tuyệt đối không làm drift SEO sau khi chuyển đổi sang Nuxt 4, chúng ta áp dụng phương pháp so sánh chéo (cross-compare) output HTML của bản build Nuxt 4 mới với bản build Vite-SSG cũ đã backup tại `dev/dist-before-nuxt4`.

### 1. Script tự động so sánh chéo (Cross-Compare Tool)
Chúng ta có thể viết một script kiểm tra offline `scripts/compare-builds.js` để tự động quét cả hai thư mục và đối chiếu:

```javascript
// scripts/compare-builds.js
import fs from 'fs/promises';
import path from 'path';
import { JSDOM } from 'jsdom'; // Hoặc parse thủ công bằng regex nếu muốn chạy native không phụ thuộc node_modules lớn

const BEFORE_DIR = path.resolve('dev/dist-before-nuxt4');
const AFTER_DIR = path.resolve('.output/public'); // Đầu ra mặc định của Nuxt static build

async function compareSEO(route) {
  const fileBefore = path.join(BEFORE_DIR, route === '/' ? 'index.html' : `${route}/index.html`);
  const fileAfter = path.join(AFTER_DIR, route === '/' ? 'index.html' : `${route}/index.html`);

  try {
    const htmlBefore = await fs.readFile(fileBefore, 'utf-8');
    const htmlAfter = await fs.readFile(fileAfter, 'utf-8');

    const domBefore = new JSDOM(htmlBefore);
    const domAfter = new JSDOM(htmlAfter);

    const docBefore = domBefore.window.document;
    const docAfter = domAfter.window.document;

    const issues = [];

    // 1. So sánh Title
    const titleB = docBefore.querySelector('title')?.textContent;
    const titleA = docAfter.querySelector('title')?.textContent;
    if (titleB !== titleA) {
      issues.push(`Title lệch: [Trước] "${titleB}" | [Sau] "${titleA}"`);
    }

    // 2. So sánh Meta Description
    const descB = docBefore.querySelector('meta[name="description"]')?.getAttribute('content');
    const descA = docAfter.querySelector('meta[name="description"]')?.getAttribute('content');
    if (descB !== descA) {
      issues.push(`Meta Description lệch: [Trước] "${descB}" | [Sau] "${descA}"`);
    }

    // 3. So sánh Canonical Link
    const canonB = docBefore.querySelector('link[rel="canonical"]')?.getAttribute('href');
    const canonA = docAfter.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (canonB !== canonA) {
      issues.push(`Canonical URL lệch: [Trước] "${canonB}" | [Sau] "${canonA}"`);
    }

    // 4. So sánh OG Image
    const ogB = docBefore.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const ogA = docAfter.querySelector('meta[property="og:image"]')?.getAttribute('content');
    if (ogB !== ogA) {
      issues.push(`og:image lệch: [Trước] "${ogB}" | [Sau] "${ogA}"`);
    }

    // 5. So sánh cấu trúc Heading H1
    const h1B = docBefore.querySelector('h1')?.textContent?.trim();
    const h1A = docAfter.querySelector('h1')?.textContent?.trim();
    if (h1B !== h1A) {
      issues.push(`H1 lệch: [Trước] "${h1B}" | [Sau] "${h1A}"`);
    }

    // 6. So sánh JSON-LD Schemas
    const scriptB = Array.from(docBefore.querySelectorAll('script[type="application/ld+json"]')).map(s => s.innerHTML.trim());
    const scriptA = Array.from(docAfter.querySelectorAll('script[type="application/ld+json"]')).map(s => s.innerHTML.trim());
    if (scriptB.length !== scriptA.length) {
      issues.push(`Số lượng Schema JSON-LD lệch: [Trước] ${scriptB.length} | [Sau] ${scriptA.length}`);
    }

    return { route, ok: issues.length === 0, issues };
  } catch (err) {
    return { route, ok: false, error: err.message };
  }
}

// Hàm chạy quét toàn bộ sitemap và so sánh...
```

### 2. Tiêu chuẩn đánh giá Pass/Fail
- **Pass (100% Khớp)**: Tất cả các file HTML tĩnh ở `.output/public` có các thẻ meta SEO, cấu trúc Canonical URL, thẻ heading H1, danh sách JSON-LD schema giống hệt với `dev/dist-before-nuxt4`.
- **Fail**: Có bất cứ sự sai lệch nào về tag meta (ví dụ: bị thêm/bớt ký tự, thiếu schema, sai og:image, canonical bị lệch đuôi gạch chéo `/`). Cần phải chỉnh sửa cấu hình Nuxt hoặc file vue con tương ứng để đạt 100% tương thích.
