# CLAUDE.md

## Global Rules
- **NPM Version Pin:** MUST use `npx npm@10.9.2 install` (matching Cloudflare Build Image v3) when updating `package.json` or lockfiles. Never use local `npm` to avoid version drift. (Detailed in AkiClaudeDoc - RULE-stack-akiNuxtCf).


## Aki Rules

Shared rules live at `~/.aki/claudedoc/`. Read `~/.aki/claudedoc/index.md` for the full rule index and loading policy.
Gemini reads them directly from that path.

---

## THIS PROJECT

### 1. Project
- **Name**: Oscar Family (oscarfamily.vn)
- **Description**: Website giới thiệu dịch vụ và hệ sinh thái của Oscar Entertainment và Oscar Studio.
- **Stack**: Nuxt 4 + Tailwind CSS v4 + Cloudflare Pages (hybrid SSR+SSG preset).
- **Build / Verification**:
  - Dev server: `npm run dev`
  - Build: `npm run build` (chạy `nuxt build`, kết xuất ra `dist/`, tự động chạy `scripts/validate-seo.js` thông qua `postbuild`)
  - Preview: `npm run preview`
  - Route check: `npm run check` (chạy `scripts/validate-routes.js`, xác minh tất cả 20 file page cốt lõi tồn tại)

### 2. Specific Config
- **SEO & Metadata**: Sử dụng module `@nuxtjs/seo`. Khai báo meta/OpenGraph bằng `usePageSeo` (`app/composables/usePageSeo.ts`). Schema JSON-LD sử dụng `useHead({ script: [...] })` truyền thống để trực quan và bảo toàn dữ liệu.
- **Google Adsense**: Được inject động ở client-side trong `app/app.vue` (`onMounted`) và chỉ chạy trên production domain `oscarfamily.vn`.
- **Blog / Articles**: Khi tạo bài viết/trang mới, bắt buộc phải khai báo metadata vào mảng `allPosts` trong `app/components/RelatedPosts.vue` để bài viết hiển thị trên giao diện.
- **Release Channel**:
  - Bản ghi thay đổi kỹ thuật (Developer): `CHANGELOG.md` ở root.
  - Bản ghi cập nhật người dùng (Public): `app/data/releases.json`.

### 3. Vibe / Styling
- **Vibe**: Tối giản, hiện đại, tối ưu UX cho cả thiết bị di động và máy tính. Sử dụng font Montserrat, các màu tối (`#111111`) kết hợp vàng/gradient làm điểm nhấn phù hợp với thương hiệu Oscar Entertainment.
