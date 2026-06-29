production url: https://oscarfamily.vn

purpose: Đẩy mạnh SEO bằng cách viết từng page sau đó build tĩnh (SSG).

features: Mỗi bài viết có một site riêng được viết thủ công và build tĩnh, tối đa SEO và social để prerender, đặc biệt là JSON-LD schema để google/AI crawl.

---

# Oscar Family Content Platform

Dự án sử dụng Nuxt 4 + Tailwind CSS v4 để xây dựng hệ thống các trang tĩnh tối ưu SEO cho hệ sinh thái Oscar Family.

## Quy trình phát triển

- Cấu trúc trang chuẩn hóa nằm trong `docs/ref/page-creation-rules.md`.
- Mỗi trang mới được tạo dưới `app/pages/` theo cấu trúc SFC, sử dụng `usePageSeo` cho các thẻ meta và `useHead` cho JSON-LD schema truyền thống.
- Cập nhật `app/components/RelatedPosts.vue` để hiển thị danh sách bài liên quan và loại bỏ slug hiện tại.
- Sau khi hoàn tất nội dung, chạy check và build để xác thực (`npm run check`, `npm run build`).

## Cài đặt & chạy cục bộ

```bash
npm install
npm run dev
```

> [!NOTE]
> **Lưu ý về Dev & Port:**
> * Luôn tắt dev server bằng **`Ctrl + C`** để giải phóng cổng hoàn toàn. Tránh dùng ký tự `&` chạy ngầm làm treo cổng.
> * Dự án này hiện tại chạy tĩnh. Nếu sau này cần kết nối D1/KV khi dev, khuyến khích sử dụng module `nitro-cloudflare-dev` để giả lập tích hợp trực tiếp, tránh cấu hình proxy Wrangler cồng kềnh.

## Build & deploy

- `npm run build`: biên dịch dự án và prerender vào `dist/` sẵn sàng deploy, đồng thời tự động chạy kiểm tra SEO (`validate-seo.js`).
- **Tự động deploy:** Khi thực hiện git push lên repository branch `master`, Cloudflare Pages sẽ tự động build và deploy phiên bản mới lên production.

## Cơ chế SEO & Metadata

- **Thẻ Meta / OpenGraph**: Được khai báo qua composable `usePageSeo(...)` trong `app/composables/usePageSeo.ts` để đồng bộ cấu hình Robots, Twitter, canonical và trailing slash.
- **Schema JSON-LD**: Tiếp tục sử dụng thẻ `useHead({ script: [...] })` truyền thống để trực quan hóa, dễ tùy biến và bảo toàn cấu trúc dữ liệu thô.

## Liên kết hữu ích

- Hướng dẫn viết trang mới: `docs/ref/page-creation-rules.md`
- Cấu hình Nuxt: `nuxt.config.ts`
