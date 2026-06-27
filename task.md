# Task List - Refactor sang Nuxt 4 & Tailwind CSS v4

- [x] Đồng bộ và Tinh giản Dependencies (package.json)
  - [x] Chuyển đổi package.json sang Nuxt 4 + Tailwind v4 + @nuxtjs/sitemap
  - [x] Xóa node_modules/ và package-lock.json cũ
  - [x] Chạy npm install --legacy-peer-deps thành công
- [x] Cấu trúc lại thư mục dự án theo tiêu chuẩn Nuxt 4
  - [x] Di chuyển src/ sang app/
  - [x] Đổi tên Main.vue sang app.vue và chuyển router-view sang NuxtPage
  - [x] Đổi tên home.vue sang index.vue để Nuxt map route / trang chủ
  - [x] Đổi tên components sang PascalCase để auto-import
- [x] Tích hợp Tailwind v4 & nuxt.config.ts
  - [x] Cấu hình nuxt.config.ts với `@tailwindcss/vite`
  - [x] Cấu hình trailingSlash: true đồng bộ Cloudflare Pages
  - [x] Vá lỗi scoped style @apply trong checkseo.vue bằng chỉ thị @reference và native classes
- [x] Chạy build tĩnh và check SEO
  - [x] Chạy npm run generate thành công nitro prerender 48 routes
  - [x] Chạy checkseo offline đạt 100/100 tuyệt đối trên 20 trang con
  - [x] Chạy so sánh chéo compare-builds.js khớp SEO metadata
