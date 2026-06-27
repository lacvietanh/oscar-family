import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-27',

  future: {
    compatibilityVersion: 4
  },

  ssr: true,

  srcDir: 'app',

  // Tailwind CSS v4 integration via Vite plugin
  vite: {
    plugins: [tailwindcss()]
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'vi'
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', href: '/favicon/favicon.ico', sizes: '32x32' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/icon-192.png' },
        { rel: 'manifest', href: '/favicon/manifest.json' }
      ],
      meta: [
        { name: 'theme-color', content: '#111111' }
      ]
    }
  },

  site: {
    url: 'https://oscarfamily.vn',
    name: 'Oscar Family',
    defaultLocale: 'vi',
    trailingSlash: true
  },

  router: {
    options: {
      // @ts-expect-error - Nuxt config schema accepts trailingSlash but Vue Router typings do not
      trailingSlash: true
    }
  },

  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    enabled: true,
    zeroRuntime: true,
    exclude: ['/450', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  }
})
