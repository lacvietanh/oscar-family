// src/utils/seoDefault.js
// Default SEO configuration for Oscar Family

const BASE_URL = 'https://oscarfamily.vn'
const DEFAULT_TITLE = 'Oscar Family - Hệ Sinh Thái Sáng Tạo'
const DEFAULT_DESCRIPTION = 'Oscar Entertainment là đơn vị sản xuất, phát hành, truyền thông âm nhạc. Chúng tôi đào tạo các giọng hát tiềm năng, tiếp sức cho các tài năng trẻ theo đuổi đam mê.'
const SITE_NAME = 'Oscar Family'
const DEFAULT_IMAGE = `${BASE_URL}/img/default-og.jpg`

/**
 * Get default SEO configuration for App.vue
 * @param {Object} route - Vue Router route object
 * @returns {Object} useHead configuration object
 */
export function getDefaultSEO(route) {
  const currentUrl = `${BASE_URL}${route.path}`

  return {
    titleTemplate: (title) => title || DEFAULT_TITLE,

    meta: [
      // Basic meta
      { name: 'description', content: DEFAULT_DESCRIPTION },
      { name: 'keywords', content: 'oscar family, oscar entertainment, nhạc, music, sản xuất âm nhạc, phát hành nhạc, studio thu âm, đào tạo giọng hát, tài năng âm nhạc, oscarstudio' },
      { name: 'author', content: SITE_NAME },
      { name: 'robots', content: 'index, follow' },

      // Open Graph - Facebook, LinkedIn
      { property: 'og:title', content: DEFAULT_TITLE },
      { property: 'og:description', content: DEFAULT_DESCRIPTION },
      { property: 'og:image', content: DEFAULT_IMAGE },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: DEFAULT_TITLE },
      { name: 'twitter:description', content: DEFAULT_DESCRIPTION },
      { name: 'twitter:image', content: DEFAULT_IMAGE },
      { name: 'twitter:creator', content: '@oscarstudiohanoi' }
    ],

    link: [
      // Canonical URL
      { rel: 'canonical', href: currentUrl }
    ],

    script: [
      // JSON-LD Structured Data - Organization
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          url: BASE_URL,
          logo: `${BASE_URL}/favicon.png`,
          image: DEFAULT_IMAGE,
          sameAs: [
            'https://www.youtube.com/@oscarstudiohanoi',
            'https://www.tiktok.com/@oscarstudio.vn',
            'https://fb.com/oscarstudiohanoi',
            'https://zalo.me/0849297957'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '0849 297 957',
            contactType: 'customer service',
            availableLanguage: 'Vietnamese'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Số 9, ngách 78, ngõ 169, Hoàng Mai, Hoàng Văn Thụ',
            addressLocality: 'Hà Nội',
            addressCountry: 'VN'
          }
        })
      }
    ]
  }
}
