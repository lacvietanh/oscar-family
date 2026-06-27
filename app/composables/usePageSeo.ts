import type { UseHeadInput } from '@unhead/vue'
import { toValue, computed, type MaybeRef } from 'vue'

interface PageSeoOptions {
  title: MaybeRef<string>
  description: MaybeRef<string>
  ogImage?: MaybeRef<string>
  ogType?: MaybeRef<'website' | 'article'>
  noindex?: MaybeRef<boolean>
  keywords?: MaybeRef<string>
  author?: MaybeRef<string>
}

/**
 * Composable for setting per-page SEO metadata.
 * Canonical and ogLocale are derived automatically from the current route.
 */
export function usePageSeo(options: PageSeoOptions) {
  const route = useRoute()
  const siteUrl = 'https://oscarfamily.vn'
  const defaultOgImage = `${siteUrl}/img/ogimage.jpg`

  const canonical = computed(() => {
    const path = route.path
    return path.endsWith('/') ? `${siteUrl}${path}` : `${siteUrl}${path}/`
  })

  const finalOgImage = computed(() => toValue(options.ogImage) ?? defaultOgImage)
  const finalOgType = computed(() => toValue(options.ogType) ?? 'website')
  const robots = computed(() => toValue(options.noindex)
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

  useSeoMeta({
    title: options.title,
    description: options.description,
    keywords: options.keywords,
    author: options.author,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: canonical,
    ogType: finalOgType,
    ogSiteName: 'Oscar Family',
    ogLocale: 'vi_VN',
    ogImage: finalOgImage,
    ogImageAlt: options.title,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: finalOgImage,
    robots
  })

  useHead({
    link: [
      { rel: 'canonical', href: canonical }
    ]
  } as UseHeadInput)
}
