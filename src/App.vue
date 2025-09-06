<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script setup>
import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
// App shell, chứa Nav, Footer và router-view
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>
