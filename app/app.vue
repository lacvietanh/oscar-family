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