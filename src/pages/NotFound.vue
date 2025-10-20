<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
    <h1 class="text-7xl font-extrabold mb-6 drop-shadow-lg">404</h1>
    <h2 class="text-2xl font-semibold mb-4">Trang không tồn tại</h2>
    <p class="mb-8 text-lg">Rất tiếc, trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
    <router-link to="/" class="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-blue-100 font-bold transition">Về trang chủ</router-link>
    <img src="/img/404-illustration.svg" alt="404" class="mt-10 w-72 max-w-full" />
  </div>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>

<style scoped>
</style>
