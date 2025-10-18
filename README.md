production url: https://oscarfamily.vn

purpose: Đẩy mạnh SEO bằng cách viết từng page sau đó build.

features: Mỗi bài viết có một site riêng được viết thủ công và build tĩnh, tối đa SEO và social để prerender, đặc biệt là JD schema để google/AI crawl.

---

# Oscar Family Content Platform

Dự án sử dụng Vue 3 + Vite để xây dựng hệ thống các trang tĩnh tối ưu SEO cho hệ sinh thái Oscar Family.

## Quy trình phát triển

- Cấu trúc trang chuẩn hóa nằm trong `docs/page-authoring-instructions.md`.
- Mỗi trang mới được tạo dưới `src/pages/` theo cấu trúc SFC, import `useHead` để thiết lập meta/JSON-LD.
- Cập nhật `src/components/RelatedPosts.vue` để hiển thị danh sách bài liên quan và loại bỏ slug hiện tại.
- Sau khi hoàn tất nội dung, chạy build để xác thực (`npm run build`).

## Cài đặt & chạy cục bộ

```bash
npm install
npm run dev
```

## Build & deploy

- `npm run build`: xuất bản asset tĩnh sẵn sàng deploy.
- Asset build được phục vụ thông qua Vite Static Hosting hoặc nền tảng tương tự.
- **Tự động deploy:** Khi thực hiện git push lên repository, Cloudflare Pages sẽ tự động build và deploy phiên bản mới lên production.

## Liên kết hữu ích

- Hướng dẫn viết trang mới: `docs/page-authoring-instructions.md`
- Tailwind config: `tailwind.config.js`
- Vite config: `vite.config.js`
