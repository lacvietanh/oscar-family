<template>
  <div class="min-h-screen bg-[#121212] text-[#E0E0E0] font-montserrat flex flex-col">
    <header class="py-10 bg-dark bg-opacity-70 backdrop-blur-xl text-center text-[#f2c35a] shadow-2xl rounded-b-3xl">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4 tracking-widest drop-shadow-xl">Bài viết</h1>
      <p class="text-lg md:text-xl text-gray-400">Tổng hợp các bài viết liên quan và hướng dẫn từ hệ sinh thái.</p>
    </header>

    <main class="flex-1 max-w-6xl mx-auto px-6">
      <RelatedPosts :header="false" />
    </main>
  </div>
</template>

<script setup>
import RelatedPosts from '../components/RelatedPosts.vue'
import { useHead } from '@vueuse/head'

const pageTitle = 'Bài viết - Oscar Family'
const pageDescription = 'Tổng hợp bài viết liên quan về Oscar Studio, AkiNet, AkiWorkflow, LamNhac và các công cụ âm nhạc.'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    // og:image from App.vue default, canonical from App.vue
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: pageTitle,
        description: pageDescription,
        url: 'https://oscarfamily.vn/posts'
      })
    }
  ]
})
</script>

<style scoped>
/* keep styles minimal - inherit site styles */
</style>
