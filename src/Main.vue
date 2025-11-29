<script setup>
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
import { provide, ref } from 'vue'

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

// Default SEO for all pages (pages can override with their own useHead)
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { getDefaultSEO } from './utils/seoDefault.js'

const route = useRoute()

// Use default SEO configuration
useHead(getDefaultSEO(route))
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>