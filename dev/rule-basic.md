# Quy tắc cơ bản cho các dự án vite vue tailwind vitessg usehead firebase

## main.js

```js
import { ViteSSG } from "vite-ssg";
import Main from "./Main.vue";
import { routes } from "./router.js";
import "./style.css";

const firebaseConfig = {
  // apiKey: "...",
  // authDomain: "...",
  // projectId: "...",
  // ...
};

export const createApp = ViteSSG(Main, { routes },
  ({ app, router, isClient }) => {
    // 3.2. Logic chỉ chạy ở phía client
    if (isClient) {
      // Khởi tạo Firebase chỉ ở phía client để tránh lỗi khi build SSG
      // const firebaseApp = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(firebaseApp);
      router.afterEach(() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  }
);
```

## router.js

```js
import NotFound from './components/NotFound.vue'

export const routes = [
  { path: '/', name: 'Home', component: () => import('./Home.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

export default router
```

## Main.vue (root layout)

Có thể thêm transition và các css phục vụ transition ở đây.

```vue
<template>
  <Nav />
  <router-view />
  <Footer />
</template>
```

## Sử dụng vueuse/head cho SEO và JSON-LD

- Dùng `useHead` để thiết lập meta, title, Open Graph, canonical, script.
- Khi khai báo script JSON-LD, dùng `innerHTML` thay vì `children` để tránh bị escape ký tự.
ví dụ một trang Home:

```js
import { useHead } from '@vueuse/head'
useHead({meta: [...], title: '...', script: [...]})
```

## Phiên bản dependencies

- Vue 3.x
- Vite >=4.x
- vite-ssg
- @vueuse/head
- tailwindcss >=3.x
- postcss, autoprefixer

## 6. Cấu hình Tailwind & postcss
```js // tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```js // postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```


## style Tailwind

- Trong src/style.css: chỉ cần khai báo
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```


## Index.html & Favicons:

- sử dụng trang https://www.favicon-generator.org/ để tạo nguyên bộ favicon từ file png (512x512 trở lên).
- Tải về, giải nén, copy toàn bộ file vào public/favicon
- đảm bảo thay thế / mặc định thành /favicon/ :
  ```html
  
  <!-- FAVICON  -->
  <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
  <link rel="manifest" href="/favicon/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <!-- FONT AWESOME -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  ```
- nhớ sửa đổi browserconfig.xml trong public/favicon:
```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/favicon/ms-icon-70x70.png" />
      <square150x150logo src="/favicon/ms-icon-150x150.png" />
      <square310x310logo src="/favicon/ms-icon-310x310.png" />
      <TileColor>#ffffff</TileColor>
    </tile>
  </msapplication>
</browserconfig>
```
- sửa manifest.json trong public/favicon:
```json
{
  "name": "app name",
  "short_name": "app short name",
  "description": "app description",
  "start_url": "/",
  "scope": "/",
  "theme_color": "#111111",
  "background_color": "#000000",
  "display": "standalone",
  "icons": [
    {
      "src": "/favicon/android-icon-36x36.png",
      "sizes": "36x36",
      "type": "image/png",
      "density": "0.75"
    },
  ]
}
```
