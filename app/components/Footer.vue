<script setup>
import { inject } from 'vue'

// Footer Oscar Family
const contactInfo = inject('contactInfo')
const currentYear = new Date().getFullYear()

const isDev = import.meta.env.DEV === true

// Helper function to format build date
const formatBuildDate = (dateString) => {
  try {
    const utcDate = new Date(dateString + 'Z')
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const formatter = new Intl.DateTimeFormat('sv-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: userTimeZone
    })
    return formatter.format(utcDate).replace(' ', ' ')
  } catch (error) {
    return dateString
  }
}

const buildDate = isDev
  ? new Date().toLocaleString('sv-SE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).replace(' ', ' ')
  : (import.meta.env.VITE_BUILD_DATE ? formatBuildDate(import.meta.env.VITE_BUILD_DATE) : '')

const oscarSystem = [
  { name: 'Oscar Entertainment', href: '/', internal: true, icon: '/favicon/icon-192.png' },
  { name: 'Oscar Studio', href: '/studio/', internal: true, icon: '/favicon/icon-192.png' },
  { name: 'Oscar Music Group', href: 'https://oscarlabel.com', internal: false, icon: '/img/oscarlabel-logo.png' },
  { name: 'Oscar Music Dashboard', href: 'https://app.oscarlabel.com', internal: false, icon: '/img/oscarlabel-logo.png' }
]

const akinetEcosystem = [
  { name: 'AkiNet.me', href: 'https://akinet.me', icon: 'https://akitao.com/pj/icon-akinet.me-96.png' },
  { name: 'AkiTao.com', href: 'https://akitao.com', icon: 'https://akitao.com/favicon/icon-192.png' },
  { name: 'Kinh Dịch', href: 'https://kinhdich.akinet.me', icon: 'https://akitao.com/pj/icon-kinhdich.akinet.me-96.png' },
  { name: 'VSTShop.com', href: 'https://vstshop.com', icon: 'https://akitao.com/pj/icon-vstshop.com-96.png' },
  { name: 'LamNhac.net', href: 'https://lamnhac.net', icon: 'https://akitao.com/pj/icon-lamnhac.net-96.png' },
]
</script>

<template>
  <footer class="site-footer bg-[#151515] border-t border-[#222222] text-[#e0e0e0] pt-12 pb-8">
    <div class="max-w-5xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-10">

      <!-- Cột 1: Brand & Social -->
      <div class="brand-column flex flex-col gap-4">
        <router-link to="/" class="footer-logo flex items-center space-x-2">
          <img src="/favicon/icon-192.png" alt="Oscar Logo" class="h-8 w-8 rounded-lg shadow-lg footer-logo-img">
          <span class="font-black text-[#f2c35a] tracking-wider text-lg">OSCAR ENTERTAINMENT</span>
        </router-link>
        <p class="text-xs text-gray-500 leading-relaxed max-w-[20ch]">
          Sản xuất, phát hành, truyền thông âm nhạc số toàn cầu & Đào tạo nghệ sĩ tài năng trẻ.
        </p>
        <div class="social-links flex items-center gap-3">
          <a href="https://www.facebook.com/oscarstudiohanoi" target="_blank" class="social-icon hover:text-[#f2c35a] transition" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/@oscarstudiohanoi" target="_blank" class="social-icon hover:text-[#f2c35a] transition" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://www.tiktok.com/@oscarstudio.vn" target="_blank" class="social-icon hover:text-[#f2c35a] transition" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="mailto:contact@oscarfamily.vn" class="social-icon hover:text-[#f2c35a] transition" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://studio.oscarfamily.vn/contact" target="_blank" class="social-icon hover:text-[#f2c35a] transition" aria-label="Support"><i class="fa-solid fa-headset"></i></a>
        </div>
      </div>

      <!-- Cột 2: Hệ Thống Oscar -->
      <div class="nav-column">
        <h3 class="footer-title text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Hệ Thống Oscar</h3>
        <ul class="space-y-3">
          <li v-for="item in oscarSystem" :key="item.name">
            <template v-if="item.internal">
              <router-link :to="item.href" class="link-item flex items-center gap-2 hover:text-[#f2c35a] transition text-[0.78rem]">
                <img :src="item.icon" :alt="item.name" class="w-5 h-5 rounded shrink-0 object-cover footer-logo-img">
                <span>{{ item.name }}</span>
              </router-link>
            </template>
            <template v-else>
              <a :href="item.href" target="_blank" rel="noopener" class="link-item flex items-center gap-2 hover:text-[#f2c35a] transition text-[0.78rem]">
                <img :src="item.icon" :alt="item.name" class="w-5 h-5 rounded shrink-0 object-cover footer-logo-img">
                <span>{{ item.name }}</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-gray-600"></i>
              </a>
            </template>
          </li>
        </ul>
      </div>

      <!-- Cột 3: Hệ Sinh Thái AkiNet -->
      <div class="nav-column">
        <h3 class="footer-title text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Hệ Sinh Thái AkiNet</h3>
        <ul class="space-y-3">
          <li v-for="item in akinetEcosystem" :key="item.name">
            <a :href="item.href" target="_blank" rel="noopener noreferrer" class="link-item flex items-center gap-2 hover:text-[#f2c35a] transition text-[0.78rem]">
              <img :src="item.icon" :alt="item.name" class="w-5 h-5 rounded shrink-0 object-cover">
              <span>{{ item.name }}</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[9px] text-gray-600"></i>
            </a>
          </li>
        </ul>
      </div>

      <!-- Cột 4: Thông Tin Liên Hệ -->
      <div class="nav-column">
        <h3 class="footer-title text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Thông Tin Liên Hệ</h3>
        <ul class="space-y-3 text-[0.78rem] text-[#a0aec0]">
          <li class="flex items-start gap-2">
            <i class="fa-solid fa-location-dot mt-0.5 shrink-0 text-[#f2c35a]"></i>
            <span>{{ contactInfo?.address }}</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-phone shrink-0 text-[#f2c35a]"></i>
            <a :href="`tel:${contactInfo?.phone?.replace(/\s+/g, '')}`" class="hover:text-[#f2c35a] transition">
              {{ contactInfo?.phone }}
            </a>
          </li>
          <li class="flex items-center gap-2">
            <i class="fa-solid fa-envelope shrink-0 text-[#f2c35a]"></i>
            <a :href="`mailto:${contactInfo?.email}`" class="hover:text-[#f2c35a] transition text-wrap break-all">
              {{ contactInfo?.email }}
            </a>
          </li>
          <li class="flex items-center gap-4 pt-1">
            <a :href="contactInfo?.zalo" target="_blank" rel="noopener" class="link-item flex items-center gap-1.5 hover:text-[#f2c35a] transition">
              <img src="/img/icon-zalo.png" alt="Zalo" class="w-4 h-4 rounded shrink-0">
              <span>Zalo</span>
            </a>
            <a :href="contactInfo?.Messenger" target="_blank" rel="noopener" class="link-item flex items-center gap-1.5 hover:text-[#f2c35a] transition">
              <i class="fa-brands fa-facebook-messenger text-[15px] text-[#0084FF] shrink-0"></i>
              <span>Messenger</span>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom border-t border-[#0c0c0c] pt-6">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>
          <span>Oscar Entertainment © 2018–{{ currentYear }}. Powered by </span>
          <a href="https://akitao.com" target="_blank" rel="noopener" class="text-[#fbbf24] hover:underline font-semibold">AkiTao</a>.
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/privacy-policy/" class="hover:text-[#f2c35a] hover:underline transition">Chính sách bảo mật</router-link>
          <span>·</span>
          <router-link to="/terms-of-service/" class="hover:text-[#f2c35a] hover:underline transition">Điều khoản dịch vụ</router-link>
        </div>
        <div class="text-gray-600 flex items-center gap-2">
          <span>{{ isDev ? 'Dev' : 'Build' }} {{ buildDate }}</span>
          <span>·</span>
          <router-link to="/releases/" class="text-gray-500 hover:text-[#f2c35a] hover:underline transition font-semibold">Release Notes</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.footer-logo-img {
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.45));
  transition: filter 0.3s ease, transform 0.3s ease;
}

.footer-logo:hover .footer-logo-img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
  transform: scale(1.03);
}

.link-item:hover .footer-logo-img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.7));
  transform: scale(1.05);
}

.social-icon {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  transition: all 0.2s ease;
}

.social-icon:hover {
  background: rgba(242, 195, 90, 0.1);
  border-color: rgba(242, 195, 90, 0.2);
  transform: translateY(-2px);
}

.link-item {
  color: #a0aec0;
  font-size: 0.78rem;
}

.link-item img {
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
