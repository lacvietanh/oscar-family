<template>
  <nav class="nav-bar">
    <div class="nav-inner">
      <!-- Logo -->
      <a href="/" class="nav-logo">
        <img src="/favicon/icon-192.png" alt="Oscar Logo" class="nav-logo-icon" />
        <span class="nav-logo-text">OSCAR FAMILY</span>
      </a>

      <!-- Desktop links -->
      <div class="nav-links">
        <a href="/#gioi-thieu" class="nav-link">
          <i class="fa-solid fa-circle-info"></i>Giới thiệu
        </a>
        <router-link to="/posts" class="nav-link">
          <i class="fa-solid fa-newspaper"></i>Bài viết
        </router-link>
        <router-link to="/studio" class="nav-link">
          <i class="fa-solid fa-headphones"></i>Studio
        </router-link>
        <a href="https://studio.oscarfamily.vn/contact" target="_blank" class="nav-cta">
          <i class="fa-solid fa-headset"></i>Liên hệ
        </a>
      </div>

      <!-- Hamburger -->
      <button class="nav-hamburger" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <i :class="open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide-down">
      <ul v-if="open" class="nav-mobile">
        <li><a href="/" class="nav-mobile-link" @click="open = false"><i class="fa-solid fa-house"></i>Trang chủ</a></li>
        <li><a href="/#gioi-thieu" class="nav-mobile-link" @click="open = false"><i class="fa-solid fa-circle-info"></i>Giới thiệu</a></li>
        <li><router-link to="/posts" class="nav-mobile-link" @click="open = false"><i class="fa-solid fa-newspaper"></i>Bài viết</router-link></li>
        <li><router-link to="/studio" class="nav-mobile-link" @click="open = false"><i class="fa-solid fa-headphones"></i>Studio</router-link></li>
        <li>
          <a href="https://studio.oscarfamily.vn/contact" target="_blank" class="nav-mobile-cta" @click="open = false">
            <i class="fa-solid fa-headset"></i>Liên hệ
          </a>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(242, 195, 90, 0.12);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
}

.nav-inner {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  flex-shrink: 0;
}

.nav-logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.nav-logo-text {
  font-family: var(--font-outfit);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: #f2c35a;
}

/* Desktop links */
.nav-links {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #c8c8c8;
  text-decoration: none;
  transition: color 0.18s, background 0.18s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #f2c35a;
  background: rgba(242, 195, 90, 0.1);
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  background: #f2c35a;
  color: #0a0a0a;
  text-decoration: none;
  margin-left: 0.5rem;
  transition: background 0.18s, transform 0.18s;
}

.nav-cta:hover {
  background: #f0d080;
  transform: scale(1.04);
}

/* Hamburger */
.nav-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #e0e0e0;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.18s;
}

.nav-hamburger:hover {
  background: rgba(242, 195, 90, 0.12);
  color: #f2c35a;
}

@media (min-width: 768px) {
  .nav-hamburger {
    display: none;
  }
}

/* Mobile menu */
.nav-mobile {
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem 1rem;
  background: rgba(10, 10, 10, 0.97);
  border-top: 1px solid rgba(242, 195, 90, 0.1);
}

.nav-mobile-link,
.nav-mobile-cta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #c8c8c8;
  text-decoration: none;
  transition: color 0.15s, background 0.15s;
}

.nav-mobile-link:hover {
  color: #f2c35a;
  background: rgba(242, 195, 90, 0.08);
}

.nav-mobile-cta {
  background: #f2c35a;
  color: #0a0a0a;
  font-weight: 700;
  margin-top: 0.5rem;
  justify-content: center;
}

.nav-mobile-cta:hover {
  background: #f0d080;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.22s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>
