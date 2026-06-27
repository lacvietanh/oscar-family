import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-06-27',

  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  ssr: true,

  srcDir: 'app',

  // Tailwind CSS v4 integration via Vite plugin
  vite: {
    plugins: [tailwindcss()]
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/posts/',
        '/studio/',
        '/releases/',
        '/privacy-policy/',
        '/terms-of-service/',
        '/oscarstudio/',
        '/akinet/',
        '/akitao/',
        '/vstshop/',
        '/kinhdich/',
        '/akiworkflow/',
        '/akiapp/',
        '/lamnhac/',
        '/tachnhac/',
        '/qqmusic-lyrics-search/',
        '/seo-system/',
        '/akiinfodetect-js/',
        '/cloud-services-comparison/',
        '/oscar-music-group/'
      ]
    }
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
    '@nuxtjs/seo'
  ],

  seo: {
    enabled: true
  },

  ogImage: {
    enabled: false
  },

  robots: {
    enabled: true
  },

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
