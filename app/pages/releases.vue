<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-4xl mx-auto text-[#E0E0E0] bg-[#121212] min-h-screen">
    <header class="text-center mb-12">
      <div class="text-sm text-[#f2c35a] font-semibold tracking-wider uppercase mb-3">
        ⚡ CẬP NHẬT HỆ THỐNG ⚡
      </div>
      <h1 class="text-4xl md:text-5xl font-black mb-4 leading-tight text-white">
        Release Notes
      </h1>
      <p class="text-lg text-gray-400 max-w-xl mx-auto mb-8">
        Nhật ký cập nhật hệ thống Oscar Family - thông tin tính năng mới, cải tiến hiệu năng và các bản sửa lỗi.
      </p>
      <router-link to="/" class="back-link inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#f2c35a] transition">
        <span>←</span> Quay lại trang chủ
      </router-link>
    </header>

    <div class="releases-list space-y-8">
      <section v-for="release in releasesData" :key="release.version" class="release-card bg-gray-900/60 p-6 md:p-8 rounded-3xl border border-gray-800/80">
        <div class="release-header flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-4 mb-6">
          <div>
            <span class="release-version text-[#f2c35a] font-extrabold text-lg mr-3">v{{ release.version }}</span>
            <span class="release-date text-sm text-gray-500">{{ release.date }}</span>
          </div>
          <h2 class="release-title text-white font-bold text-lg md:text-xl">{{ release.title }}</h2>
        </div>

        <ul class="release-changes space-y-4">
          <li v-for="(change, i) in release.changes" :key="i" class="release-change flex items-start gap-3">
            <span class="change-badge shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" :class="`badge-${change.type}`">
              {{ change.type === 'new' ? 'New' : change.type === 'improved' ? 'Improved' : 'Fixed' }}
            </span>
            <span class="change-text text-sm text-gray-300 leading-relaxed">{{ change.text }}</span>
          </li>
        </ul>
      </section>
    </div>

    <!-- Final CTA -->
    <div class="text-center mt-16 mb-8">
      <router-link to="/" class="cta-button inline-block text-black hover:scale-105 transition-all">Quay Về Trang Chủ</router-link>
    </div>
  </article>
</template>

<script setup>
import releasesData from '../data/releases.json'

const title = 'Release Notes - Nhật Ký Cập Nhật Hệ Thống | Oscar Family'
const description = 'Nhật ký cập nhật hệ thống Oscar Family: cập nhật tính năng mới, cải tiến hiệu năng và các sửa lỗi.'
const url = 'https://oscarfamily.vn/releases/'
const image = 'https://oscarfamily.vn/img/ogimage.jpg'
const currentDate = '2026-06-27T16:54:59+07:00'

const techArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  'headline': title,
  'description': description,
  'image': image,
  'datePublished': currentDate,
  'dateModified': currentDate,
  'author': {
    '@type': 'Person',
    'name': 'Lạc Việt Anh',
    'url': 'https://lamnhac.net/about',
    'jobTitle': 'Founder & Product Architect'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Oscar Entertainment',
    'url': 'https://oscarfamily.vn',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://oscarfamily.vn/logo.png'
    }
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': url
  }
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://oscarfamily.vn/releases/#founder',
  'name': 'Lạc Việt Anh',
  'url': 'https://lamnhac.net/about',
  'jobTitle': 'Founder & Product Architect',
  'worksFor': {
    '@type': 'Organization',
    'name': 'AkiNet',
    'url': 'https://akinet.me'
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Oscar Entertainment',
  'url': 'https://oscarfamily.vn',
  'logo': 'https://oscarfamily.vn/logo.png',
  'description': 'Đơn vị sản xuất và phát hành âm nhạc số toàn cầu tại Việt Nam.'
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Làm sao để biết phiên bản cập nhật mới nhất?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Tất cả các cập nhật hệ thống và thay đổi kỹ thuật được ghi chép chi tiết tại trang Release Notes (oscarfamily.vn/releases) và file CHANGELOG.md của mã nguồn.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Tôi có thể đóng góp ý kiến sửa lỗi hay tính năng mới ở đâu?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Mọi ý kiến đóng góp, báo lỗi xin gửi về địa chỉ hòm thư contact@oscarfamily.vn hoặc liên hệ trực tiếp qua hotline/Zalo được hiển thị dưới chân trang.'
      }
    }
  ]
}

usePageSeo({
  title: title,
  description: description,
  ogImage: image,
  keywords: 'Release Notes, nhật ký cập nhật, oscar family, changelog, tính năng mới, sửa lỗi, nâng cấp hệ thống, Lạc Việt Anh, Oscar Entertainment',
  author: 'Lạc Việt Anh'
})

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(techArticleSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) }
  ]
})
</script>

<style scoped>
/* Badge Colors */
.change-badge {
  text-align: center;
  border-radius: 4px;
}
.badge-new {
  background: rgba(34, 197, 94, 0.12);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.2);
}
.badge-improved {
  background: rgba(249, 115, 22, 0.12);
  color: #fb923c;
  border: 1px solid rgba(249, 115, 22, 0.2);
}
.badge-fixed {
  background: rgba(96, 165, 250, 0.12);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.2);
}

/* CTA Button */
.cta-button {
  background: linear-gradient(135deg, #f2c35a, #d97706);
  color: #000;
  font-weight: 800;
  padding: 0.8rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  box-shadow: 0 10px 25px -5px rgba(242, 195, 90, 0.3);
}

.releases-list {
  max-width: 48rem;
  margin: 0 auto;
}
</style>
