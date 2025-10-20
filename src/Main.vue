<script setup>
import { provide, ref } from "vue";
import Nav from "./components/nav.vue";
import Footer from "./components/footer.vue";

const contactInfo = ref({
  address: "Số 9, ngách 78, ngõ 169, Hoàng Mai, Hoàng văn thụ Hoàng Mai, Hà Nội, Việt Nam",
  phone: "0849 297 957",
  email: "contact@oscarfamily.vn",
  youtubeChannel: "https://youtube.com/@oscarstudiohanoi",
  tiktok: "https://tiktok.com/@oscarstudio.vn",
  Messenger: "https://m.me/oscarstudiohanoi",
  FacebookPage: "https://fb.com/oscarstudiohanoi",
  zalo: "https://zalo.me/0849297957"
});

provide("contactInfo", contactInfo);
</script>

<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap");

.font-montserrat {
  font-family: "Montserrat", sans-serif;
}
</style>
