# CLAUDE.md

## Aki Rules

Shared rules live at `~/.aki/claudedoc/`. Read `~/.aki/claudedoc/index.md` for the full rule index and loading policy.
Gemini reads them directly from that path.

---

## THIS PROJECT

### 1. Project
- **Name**: Oscar Family (oscarfamily.vn)
- **Description**: Website giới thiệu dịch vụ và hệ sinh thái của Oscar Entertainment và Oscar Studio.
- **Stack**: Vue 3 + Vite + Tailwind CSS v3 + Vite-SSG (Static Site Generation).
- **Build / Verification**:
  - Dev server: `npm run fe` (chạy vite dev server)
  - Build SSG: `npm run build` (chạy `vite-ssg build` kết xuất ra thư mục `dist/` và tự động tạo sitemap.xml)
  - Preview: `npm run preview`
  - SEO Analysis: `npm run checkseo` (build dự án và chạy phân tích SEO offline xuất báo cáo ra `dev/seo-report.json`)

### 2. Specific Config
- **SEO & Metadata**: Cấu hình mặc định nằm trong `src/utils/seoDefault.js`. Các trang con sử dụng `@vueuse/head` (`useHead`) để override.
- **Google Adsense**: Được inject động ở client-side trong `src/main.js` và chỉ chạy trên production domain `oscarfamily.vn`. Không nhúng cứng vào `index.html` để tránh lỗi môi trường phát triển.
- **Release Channel**:
  - Bản ghi thay đổi kỹ thuật (Developer): `CHANGELOG.md` ở root.
  - Bản ghi cập nhật người dùng (Public): `src/data/releases.json`.

### 3. Vibe / Styling
- **Vibe**: Tối giản, hiện đại, tối ưu UX cho cả thiết bị di động và máy tính. Sử dụng font Montserrat, các màu tối (`#121212`) kết hợp vàng/gradient làm điểm nhấn phù hợp với thương hiệu Oscar Entertainment.
