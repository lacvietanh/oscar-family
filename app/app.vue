<script setup>
import { contactInfo } from '~/data/contact'
provide('contactInfo', contactInfo);


onMounted(() => {
  if (window.location.hostname === 'oscarfamily.vn') {
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6183950712708494'
    script.async = true
    script.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(script)
  }
})
</script>

<template>
  <Nav />
  <NuxtPage />
  <Footer />
</template>