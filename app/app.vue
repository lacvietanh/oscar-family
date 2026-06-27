<script setup>
const contactInfo = ref({
  address: 'Số 9, ngách 78, ngõ 169, Hoàng Mai, Hoàng văn thụ Hoàng Mai, Hà Nội, Việt Nam',
  phone: '0849 297 957',
  email: 'contact@oscarfamily.vn',
  youtubeChannel: 'https://youtube.com/@oscarstudiohanoi',
  tiktok: 'https://tiktok.com/@oscarstudio.vn',
  Messenger: 'https://m.me/oscarstudiohanoi',
  FacebookPage: 'https://fb.com/oscarstudiohanoi',
  zalo: 'https://zalo.me/0849297957'
});
provide('contactInfo', contactInfo);

const route = useRoute()

// Use default SEO configuration
useHead(getDefaultSEO(route))
</script>

<template>
  <Nav />
  <NuxtPage />
  <Footer />
</template>