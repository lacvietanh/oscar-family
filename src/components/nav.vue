<template>
  <nav class="bg-white bg-opacity-10 backdrop-blur-lg fixed w-full z-50 shadow-lg text-[#E0E0E0] sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
      <a href="/#" class="flex items-center space-x-3">
        <img src="/favicon.png" alt="Oscar Logo" class="h-8 w-8" />
        <span class="font-bold text-lg text-[#f2c35a]">OSCAR FAMILY</span>
      </a>
      <div class="hidden md:flex items-center space-x-6 font-medium">
        <router-link to="/studio" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-headphones"></i>STUDIO</router-link>
        <a href="/#gioi-thieu" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-circle-info"></i>Giới thiệu</a>
        <a href="/#quyen-loi" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-handshake"></i>Quyền lợi</a>
        <a href="/#nghe-si" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-microphone"></i>Nghệ sĩ</a>
        <a href="/#san-pham" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-star"></i>Sản phẩm</a>
        <a href="/#dang-ky" class="flex items-center gap-2 hover:text-[#f2c35a] transition"><i class="fa-solid fa-user-plus"></i>Đăng ký</a>
        <a href="https://studio.oscarfamily.vn/contact" target="_blank" class="flex items-center gap-2 bg-[#f2c35a] text-black px-4 py-2 rounded-full font-bold shadow hover:bg-yellow-400 transition"><i class="fa-solid fa-headset"></i>Liên hệ</a>
      </div>
      <div class="md:hidden flex items-center gap-3">
        <button class="text-2xl" @click="open = !open">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
    <transition name="fade">
      <ul v-if="open" class="md:hidden px-4 pb-4 space-y-2 bg-[#181818] text-[#E0E0E0] shadow rounded-b-lg">
        <li><a href="/" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-house"></i>Trang chủ</a></li>
        <li><a href="/#gioi-thieu" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-circle-info"></i>Giới thiệu</a></li>
        <li><a href="/#quyen-loi" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-handshake"></i>Quyền lợi</a></li>
        <li><a href="/#nghe-si" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-microphone"></i>Nghệ sĩ</a></li>
        <li><a href="/#san-pham" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-star"></i>Sản phẩm</a></li>
        <li><a href="/#dang-ky" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-user-plus"></i>Đăng ký</a></li>
        <li><a href="/studio" class="flex items-center gap-2 py-2 hover:text-[#f2c35a]"><i class="fa-solid fa-headphones"></i>STUDIO</a></li>
        <li><a href="https://studio.oscarfamily.vn/contact" target="_blank" class="flex items-center gap-2 p-2 bg-[#f2c35a] text-black rounded-full font-bold shadow hover:bg-yellow-400 transition"><i class="fa-solid fa-headset"></i>Liên hệ</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
