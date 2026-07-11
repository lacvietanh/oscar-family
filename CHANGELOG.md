# Changelog

All notable changes to this project will be documented in this file.  
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) · [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

> **Changelog split**: This file is for developer/technical notes. User-facing release notes are in [`app/data/releases.json`](app/data/releases.json).

---

## [2.3.1] - 2026-07-11

### Added
- **AkiApp migration article**: new page `app/pages/akiapp-chuyen-nha-akinet.vue` (`/akiapp-chuyen-nha-akinet/`) announcing the AkiApp move from `app.akivn.net` to `app.akinet.me` (v1.0 launched 2026-07-10, full redirect completed 2026-07-11) and clarifying the AkiVN → AkiTao brand restructure (May 2026). Includes old/new homepage screenshots, AkiVN/AkiTao 96px logos, and `TechArticle` + `Person` + `Organization` + `SoftwareApplication` + `FAQPage` JSON-LD with cross-entity `@id` linking.
- **Images** in `public/img/`: `akivn-akitao-restructured-2026.jpg` (og/feature, from akivn.net homepage hero), `akiapp-cu-app-akivn-net.jpg`, `akiapp-moi-app-akinet-me.jpg`, `logo-akivn-96.png`, `logo-akitao-96.png`.
- Route registered in `app/components/RelatedPosts.vue` (`allPosts`), `nuxt.config.ts` (`nitro.prerender.routes`), and `scripts/validate-routes.js` (`requiredPages`).

### Changed
- **`app/pages/akiapp.vue`**: added a "moved to app.akinet.me" correction banner linking to the new article; `SoftwareApplication.url` updated to `https://app.akinet.me` (retaining `sameAs: app.akivn.net`). The historical body is preserved as a record.

## [2.3.0] - 2026-06-30

### Changed
- **Contact Single Source of Truth**: Extracted all contact data into `app/data/contact.ts` (Oscar Entertainment) and `app/data/contact-studio.ts` (Oscar Studio), ending hardcoded address/phone/email duplication across 7+ pages.
- **Oscar Entertainment headquarters**: Updated to new address: Tầng 21 toà VINACONEX DIAMOND 459C, Bạch Mai, Hà Nội (zipcode 11415).
- **JSON-LD organizations**: Added `address`, `founder` (Lạc Quốc Huy), and `telephone` fields to all Organization/MusicRecordingStudio schemas for SEO consistency.
- **Footer contact info**: Now sourced from `app/data/contact.ts` instead of inline in `app.vue`.

### Fixed
- `studio.vue`, `oscarstudio.vue`: Template and JSON-LD address now sourced from `studioContact` (Oscar Studio — Hoàng Mai).
- `releases.vue`, `oscar-music-group.vue`, `lamnhac.vue`, `qqmusic-lyrics-search.vue`: Organization schemas now include address, telephone, and founder.

---

## [2.2.1] - 2026-06-30

### Changed
- **Footer Background & Borders**: Softened the dark background from `#0a0a0a` to `#151515` and adjusted borders for improved contrast and visual comfort.
- **AkiNet Ecosystem list**: Collapsed the links from a two-column grid to a single vertical column (`space-y-3`) structure.
- **Footer grid**: Switched layout from a 3-column layout to a standard 4-column layout (`md:grid-cols-4`) on medium and larger viewports.

### Added
- **Logo drop shadow**: Added white drop shadow filter and scale transitions on hover (micro-interactions) for the main Oscar logo and links inside `oscarSystem` list.
- **Contact info column**: Introduced a 4th footer column dynamically displaying address, phone, email, Zalo, and Messenger details injected from the root `contactInfo` provider.

---

## [2.2.0] - 2026-06-27

### Changed
- **Git history**: Reset toàn bộ lịch sử về 1 commit sạch (`git orphan fresh-start`) — loại bỏ ~49MB blob cũ (ảnh PNG nặng từ lịch sử), `.git/objects` giảm còn 16MB khớp với dung lượng file thực tế.
- **`@nuxtjs/seo` upgrade**: Thay `@nuxtjs/sitemap` ^6 → `@nuxtjs/seo` ^3 (bao gồm sitemap + sitemap_index + robots + schema + link checker). Chuẩn hóa với toàn bộ AkiNet ecosystem (akitao.com, akinet.me, kinhdich.akinet.me).
- **`nuxt.config.ts`**: Thêm `devtools: { enabled: true }`, `ogImage: { enabled: false }`, `robots: { enabled: true }`, `seo: { enabled: true }` và `nitro: { preset: 'cloudflare-pages' }`.
- **`CLAUDE.md`**: Cập nhật build commands cho đúng Nuxt 4 (`npm run dev`, `npm run generate`, `npm run check`).
- **Trailing Slashes and Canonicals**: Chuẩn hóa toàn bộ liên kết điều hướng và URL canonical có dấu gạch chéo `/` cuối, sửa lỗi cảnh báo Link Checker và validate-seo (đưa warnings về 0).
- **Google Adsense Dynamic Injection**: Khôi phục Adsense chỉ tải ở client-side trong `app/app.vue` khi chạy trên production `oscarfamily.vn` (khắc phục tàn dư do mất `src/main.js` khi nâng cấp Nuxt 4).

### Added
- **`tsconfig.json`**: Chuẩn hóa TypeScript config theo ecosystem (`strict`, `ESNext`, `bundler`).
- **`.npmrc`**: Thêm `include=optional` — chuẩn hóa với mọi dự án cùng stack.
- **`scripts/validate-routes.js`**: Port từ akinet.me — kiểm tra 20 page files tồn tại, chạy `npm run check`.
- **`scripts/validate-seo.js`**: Kịch bản kiểm tra SEO offline cực nhẹ sau build, thay thế cho script cũ.

### Removed
- **`task.md`**: File rác của AI session (Gemini task list).
- **`scripts/generate-sitemap.js`**: Dead code — `@nuxtjs/sitemap` đã xử lý hoàn toàn.
- **`scripts/checkseo-offline.js`**: Thay bằng `validate-seo.js`.
- **`app/pages/checkseo.vue`**: Giao diện check SEO cũ (đã chuyển sang dùng validate-seo.js CLI).
- **`tailwind.config.js`**: Dead code — Tailwind v4 không dùng file này (dùng Vite plugin).
- **`index.html`** (root): Tàn dư Vite-SSG — Nuxt không dùng.
- **`docs/feat/flow-generate-sitemap.md` & `docs/feat/flow-checkseo-offline.md`**: Xóa tài liệu lỗi thời.
- **Thư viện `jsonld`**: Gỡ bỏ khỏi package.json.
- **GitHub branches cũ**: Xóa 8 Copilot branches còn tồn đọng.

---

## [2.1.0] - 2026-06-27

### Changed
- **Image optimization (batch)**: Convert 8 file PNG nặng (500KB–1.9MB) sang JPG chất lượng cao nhất (`ffmpeg -q:v 1`). Tổng tiết kiệm ~70% dung lượng (7.5MB → 2.5MB). Các file: `akinet-fbog`, `akitao-home-ogimage`, `ogimage`, `akivn-tachnhacv1`, `AkiWF-GrCover2025`, `user-cloud-services-vs-hosting-cloud`, `AkiApp-cover`, `intro-tachnhacv1-3d`.
- **Rename `qqmusicsearch-logo.jpg`** → `qqmusicsearch-hero.jpg` (đây là ảnh hero/banner, không phải logo). Update đồng bộ `qqmusic-lyrics-search.vue` và `RelatedPosts.vue`.
- **Code references**: Cập nhật toàn bộ đường dẫn ảnh trong `seoDefault.js`, `RelatedPosts.vue`, `akinet.vue`, `akitao.vue`, `akiworkflow.vue`, `akiapp.vue`, `cloud-services-comparison.vue`, `tachnhac.vue`, `releases.vue`.
- **`app/components/Nav.vue`**: Rewrite — xóa conflict `fixed` + `sticky` đồng thời; glass morphism nhất quán (`rgba(10,10,10,0.85)` + blur 20px); active link highlight; hamburger icon toggle (≡/×); mobile slide-down animation mượt.
- **`app/pages/index.vue`**: Refactor — xóa `bg-dark` (class không tồn tại trong Tailwind v4); xóa `font-montserrat` (không defined); gộp 2 `<header>` conflicting thành hero duy nhất có in-page subnav bên trong; gradient thật; title dùng `clamp()` responsive.

### Fixed
- **`postcss.config.js`**: Xóa file — Tailwind CSS v4 dùng Vite plugin (`@tailwindcss/vite`), không cần PostCSS standalone, file này gây `WARN` Nuxt 4.

---

## [2.0.0] - 2026-06-27

### Added
- **`app/` directory**: Re-architected project under Nuxt 4 compatibility structure.
- **`nuxt.config.ts`**: Configured Nuxt 4 settings, including `@tailwindcss/vite` plugin and trailing slash requirements for Cloudflare Pages.
- **`public/img/oscarlabel-logo.png`**: Localized official Oscar Label logo for the footer.
- **Favicon assets**: Standardized favicon assets (added `/favicon.ico` at root, `/favicon/icon-48.png`, `/favicon/icon-96.png`, `/favicon/icon-512-maskable.png` and updated manifest) matching AkiTao generation standard.

### Changed
- **Framework stack**: Refactored from Vite-SSG to native Nuxt 4 (SSG mode) + Tailwind CSS v4 stack.
- **File-based Routing**: Renamed `home.vue` to `index.vue` to let Nuxt handle root `/` route.
- **Auto-imports**: Renamed components to PascalCase (`Nav.vue`, `Footer.vue`) for Nuxt auto-import.
- **Cleaned dependencies**: Replaced `@nuxtjs/seo` with `@nuxtjs/sitemap` to bypass local install errors.
- **Footer styling**: Standardized to `20px` icons, integrated `Powered by AkiTao`, dynamic copyright range (`2018–2026`), and Oscar Label link.
- **Image optimization**: Optimized `qqmusicsearch-logo.png` (compressed from 6.1MB down to 776KB) by converting it to `qqmusicsearch-logo.jpg` via `ffmpeg` and updated all code references.

### Fixed
- **Tailwind v4 SFC error**: Fixed Rollup compiler errors in `checkseo.vue` by adding `@reference "tailwindcss";` and simplifying nested `@apply` classes.

---

## [1.2.0] - 2026-06-27

### Added
- **`src/pages/releases.vue`**: New system release notes display page, fetching updates dynamically from `src/data/releases.json`.
- **JSON-LD FAQ Schema**: Added comprehensive AkiNet ecosystem history timeline to `src/pages/akinet.vue`, `src/pages/akitao.vue`, `src/pages/akiworkflow.vue`, and `src/pages/vstshop.vue` for structured LLM parsing.

### Changed
- **`src/components/footer.vue`**: Restructured to a standard 4-column layout including "Oscar System" and "AkiNet Ecosystem" sections with official brand icons, and integrated dynamic Release Notes link at the bottom.
- **Font Face Upgrade**: Removed Montserrat font. Integrated **Inter** (body) and **Outfit** (headings) fonts globally via `src/Main.vue`.
- **Heading Alignment**: Cleaned up code-level layout issues by replacing custom `tracking-tight`/`tracking-tighter` with `tracking-normal` and downgrading `font-black` (900) to `font-extrabold` (800) in headings across all 9 blog pages to resolve character overlap (dính chữ).
- **VSTShop Launch Info**: Corrected launch and founding dates in `src/pages/vstshop.vue` and `src/pages/akiworkflow.vue` from incorrect "2018" to ideation in 2024-2025 and official launch on 2026-06-26.
- **`src/router.js`**: Registered route for `/releases`.
- **`package.json`**: Upgraded project version to `1.2.0`.

---

## [1.1.0] - 2026-06-27

### Added
- **`src/pages/akitao.vue`**: Trang mới đại diện cho AkiTao B2B (branding, SEO, cố vấn chiến lược).
- **`src/pages/vstshop.vue`**: Trang mới giới thiệu VSTShop marketplace dành cho music producers.
- **`src/pages/kinhdich.vue`**: Trang mới giới thiệu Kinh Dịch Online (gieo quẻ Lục Hào trực tuyến).
- **`src/data/releases.json`**: File lưu trữ thông tin release thân thiện cho người dùng.
- **`CLAUDE.md` / `GEMINI.md`**: Cấu hình quy tắc và context cho các AI coding assistants.

### Changed
- **`src/pages/akinet.vue`**: Cập nhật định vị thương hiệu mới thành nền tảng cá nhân `akinet.me` (triết lý YLYG) và chuyển giao mảng B2B doanh nghiệp sang `akitao.com`.
- **`src/pages/akiworkflow.vue`**: Tinh chỉnh nội dung làm rõ lịch sử phát triển liên quan đến AkiVN (`akivn.net`), `akinet.me`, `akitao.com` và việc tách mảng thương mại sang `vstshop.com` + cộng đồng sang `lamnhac.net`. Tích hợp liên kết lai (internal/external).
- **`src/components/RelatedPosts.vue`**: Cập nhật danh sách liên kết chéo `allPosts` cho các bài viết mới, cập nhật timestamp `1782554099`.
- **`src/router.js`**: Đăng ký các route `/akitao`, `/vstshop` và `/kinhdich` để hỗ trợ prerender SSG đầy đủ.
- **`package.json`**: Nâng phiên bản dự án lên `1.1.0`.

---

## [1.0.0] - 2026-06-27

### Added
- Khởi tạo dự án Vue 3 + Vite-SSG giới thiệu hệ sinh thái Oscar Entertainment.
- **`dev/dist-before-nuxt4`**: Backup thư mục build tĩnh `dist/` nguyên bản.

### Changed
- **Chuẩn hóa Docs**: Di chuyển tài liệu theo cấu trúc `akirule` (feat/ref/research) và tạo Master Index tại `docs/index.md`. Sửa các liên kết drift trong code.
- **OG Image Default**: Cập nhật default/fallback ogimage trong `src/utils/seoDefault.js` trỏ sang `/img/ogimage.png`.
- **Google Adsense Security**: Loại bỏ script nhúng cứng ở `index.html`, thực hiện inject động tại client-side trong `src/main.js` chỉ khi hostname là `oscarfamily.vn`.

---

## [0.9.0] - 2026-04-30

### Changed
- **`src/pages/home.vue`**: Thay đổi thứ tự sắp xếp tin tức hiển thị tin mới nhất lên đầu tiên ở trang chủ.

---

## [0.8.0] - 2026-04-24

### Added
- **`src/pages/oscar-music-group.vue`**: Thêm trang giới thiệu Oscar Music Group với SEO đầy đủ, tích hợp thư viện ảnh local, schemas và route tương ứng.

### Changed
- **`src/pages/home.vue`**: Loại bỏ phần Nghệ sĩ (Nghệ sĩ section) và link điều hướng navbar tương ứng để làm gọn trang chủ.

---

## [0.7.0] - 2026-03-11

### Added
- **`src/pages/privacy-policy.vue` / `src/pages/terms-of-service.vue`**: Thêm các trang chính sách bảo mật và điều khoản dịch vụ phục vụ quy trình xác minh thương hiệu của Google (Google brand verification).
- **Homepage JSON-LD**: Tích hợp schema structured JSON-LD cho Oscar Label trên trang chủ phục vụ xác minh OAuth GCP.

### Fixed
- **SEO Metadata Duplication**: Khắc phục hiện tượng trùng lặp thẻ meta SEO và cải tiến cấu hình SEO mặc định toàn trang.

---

## [0.6.0] - 2026-01-04

### Added
- **`src/pages/cloud-services-comparison.vue`**: Thêm trang so sánh dịch vụ đám mây (User Cloud vs Hosting Cloud) với SEO tối ưu.

### Changed
- **`src/pages/akiworkflow.vue`**: Viết lại bài viết AkiWorkflow cập nhật nội dung cho năm 2026.

### Fixed
- **Assets**: Cập nhật ảnh thật, sửa lỗi đường dẫn favicon bị thiếu trong menu điều hướng.

---

## [0.5.0] - 2025-12-08

### Added
- **`src/pages/akiinfodetect-js.vue`**: Thêm trang chi tiết về thư viện `akiinfodetect-js` tối ưu SEO hoàn chỉnh.

### Changed
- **`RelatedPosts.vue`**: Loại bỏ giới hạn phân trang (pagination limit) giúp hiển thị đầy đủ liên kết.

### Fixed
- **Dates & Years**: Khắc phục cấu hình ngày tháng hiển thị nhầm năm 2024 về đúng năm 2025.

---

## [0.4.0] - 2025-11-30

### Added
- **`src/pages/seo-system.vue`**: Thêm trang giới thiệu hệ thống SEO Oscar Family.
- **`src/pages/qqmusic-lyrics-search.vue`**: Thêm trang QQMusic Lyrics Search.
- **`src/pages/checkseo.vue`**: Thêm giao diện quản lý / check SEO trực quan.
- **`postMetadata`**: Thêm công cụ quản lý metadata bài viết tập trung.

### Changed
- **Build date**: Cập nhật hiển thị ngày build ở chân trang tự động lấy từ biến môi trường `VITE_BUILD_DATE` theo múi giờ UTC chuyển đổi sang client timezone.
- **Sitemap**: Thay thế package `vite-plugin-sitemap` cũ bằng script standalone sinh sitemap.xml độc lập và tối ưu hơn.
- **SEO Default**: Tập trung cấu hình SEO mặc định vào `src/utils/seoDefault.js`.

---

## [0.3.0] - 2025-11-29

### Added
- **`src/pages/akiapp.vue`**: Thêm trang giới thiệu ứng dụng AkiApp và tối ưu kích thước ảnh.

### Fixed
- **SEO**: Sửa lỗi thẻ JSON-LD schema trang chủ.

---

## [0.2.0] - 2025-10-20

### Added
- **`src/pages/posts.vue`**: Tạo trang danh sách bài viết `/posts` tổng hợp.
- **`src/pages/tachnhac.vue`**: Thêm trang giới thiệu ứng dụng Tách Nhạc AI.

### Changed
- **Navigation**: Thiết kế lại menu điều hướng chính và thêm sticky navigation cho trang chủ.
- **Sitemap**: Tăng tần suất quét sitemap lên daily (hàng ngày) và độ ưu tiên lên 0.8.

---

## [0.1.0] - 2025-10-13

### Added
- **`src/pages/lamnhac.vue`**: Thêm bài viết giới thiệu `lamnhac.net`.
- **`public/ads.txt`**: Tích hợp file khai báo nhà quảng cáo ads.txt của Google.
- **Google Adsense**: Nhúng script Google Adsense ban đầu phục vụ kiếm tiền.
