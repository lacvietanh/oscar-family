<template>
  <div class="home-page">

    <!-- ===== HERO SECTION ===== -->
    <header class="home-hero">
      <div class="home-hero-inner">
        <h1 class="home-hero-title">OSCAR ENTERTAINMENT</h1>
        <p class="home-hero-subtitle">Đơn vị sản xuất, phát hành, truyền thông âm nhạc &amp; đào tạo tài năng trẻ</p>

        <!-- Social buttons -->
        <div class="home-socials">
          <a :href="contactInfo.youtubeChannel" target="_blank" class="social-btn social-yt" title="YouTube"
            @mouseenter="hrefHover = contactInfo.youtubeChannel" @mouseleave="hrefHover = ''">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a :href="contactInfo.tiktok" target="_blank" class="social-btn social-tt" title="TikTok"
            @mouseenter="hrefHover = contactInfo.tiktok" @mouseleave="hrefHover = ''">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a :href="contactInfo.Messenger" target="_blank" class="social-btn social-msg" title="Messenger"
            @mouseenter="hrefHover = contactInfo.Messenger" @mouseleave="hrefHover = ''">
            <i class="fa-brands fa-facebook-messenger"></i>
          </a>
          <a :href="contactInfo.FacebookPage" target="_blank" class="social-btn social-fb" title="Facebook"
            @mouseenter="hrefHover = contactInfo.FacebookPage" @mouseleave="hrefHover = ''">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a :href="contactInfo.zalo" target="_blank" class="social-btn social-zalo" title="Zalo"
            @mouseenter="hrefHover = contactInfo.zalo" @mouseleave="hrefHover = ''">
            <img src="/img/icon-zalo.png" alt="Zalo" class="w-6 h-6" />
          </a>
        </div>

        <!-- URL hover hint -->
        <p class="home-hero-hint">{{ hrefHover ? hrefHover.replace('https://', '') : '' }}&nbsp;</p>

        <!-- In-page anchor nav -->
        <nav class="home-subnav" aria-label="Điều hướng trang chủ">
          <a href="#tin-tuc" class="home-subnav-link">Tin tức</a>
          <a href="#gioi-thieu" class="home-subnav-link">Giới thiệu</a>
          <a href="#quyen-loi" class="home-subnav-link">Quyền lợi</a>
          <a href="#san-pham" class="home-subnav-link">Sản phẩm</a>
          <a href="#dang-ky" class="home-subnav-link">Đăng ký</a>
        </nav>
      </div>
    </header>

    <!-- ===== MAIN CONTENT ===== -->
    <main class="home-main">

      <!-- Tin tức -->
      <section id="tin-tuc" class="home-section">
        <h2 class="section-title gold">Tin tức</h2>
        <p class="section-subtitle">Cập nhật các bài viết mới nhất từ Oscar Family.</p>
        <RelatedPosts :header="false" />
      </section>

      <!-- Giới thiệu -->
      <section id="gioi-thieu" class="home-section card-section">
        <h2 class="section-title gold">Giới thiệu</h2>
        <p class="section-body">Oscar Entertainment là đơn vị sản xuất, phát hành, truyền thông âm nhạc. Chúng tôi đào tạo các giọng hát tiềm năng, tiếp sức cho các tài năng trẻ theo đuổi đam mê.</p>

        <div class="rank-help-wrap">
          <button class="rank-help-btn" @click="showRankHelp = !showRankHelp">
            <i class="fa-solid fa-chart-line"></i>
            Giúp chúng tôi tăng thứ hạng
          </button>
          <transition name="fade">
            <div v-if="showRankHelp" class="rank-help-box">
              <div class="mb-4">
                <span class="rank-label">Bước 1:</span>
                Truy cập link này:
                <a href="https://google.com/search?q=oscar+studio+ha+noi" target="_blank" class="rank-link">
                  google.com/search?q=oscar+studio+ha+noi
                </a>
              </div>
              <div>
                <span class="rank-label">Bước 2:</span>
                <span class="ml-2">Bấm vào link trang web của Oscar Studio trong kết quả tìm kiếm.</span>
                <img src="/img/search-oscar-studio-on-google.png" alt="oscar-studio-phong-thu-am-hoang-mai-ha-noi-google-search" class="mt-4 rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </transition>
        </div>
      </section>

      <!-- Quyền lợi hợp tác -->
      <section id="quyen-loi" class="home-section">
        <h2 class="section-title white">Quyền lợi hợp tác</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <h3 class="benefit-title"><i class="fa-solid fa-share-nodes"></i>Social Media</h3>
            <ul>
              <li>Phát hành &amp; truyền thông trên hệ thống social của Oscar: Tiktok, Youtube, Fanpage.</li>
              <li>Hướng dẫn xây dựng &amp; phát triển kênh social chuyên nghiệp.</li>
            </ul>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title"><i class="fa-solid fa-lightbulb"></i>Sáng tạo</h3>
            <ul>
              <li>Tư vấn, hỗ trợ sáng tác, sản xuất và phát hành ca khúc chất lượng.</li>
              <li>Hỗ trợ xây dựng content Tiktok, viral kênh nghệ sĩ.</li>
            </ul>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title"><i class="fa-solid fa-video"></i>Sản xuất</h3>
            <ul>
              <li>Hỗ trợ sản xuất hình ảnh, MV, âm nhạc, thu âm bởi ekip chuyên nghiệp.</li>
              <li>Sử dụng thiết bị quay phim, thu âm phòng VIP.</li>
            </ul>
          </div>
          <div class="benefit-card">
            <h3 class="benefit-title"><i class="fa-solid fa-people-group"></i>Kết nối &amp; Phát triển</h3>
            <ul>
              <li>Tiếp cận khán giả qua show diễn, chương trình truyền hình.</li>
              <li>Cơ hội làm việc với nghệ sĩ nổi tiếng, học hỏi về Media &amp; đa nền tảng.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Dự án nổi bật -->
      <section id="san-pham" class="home-section">
        <h2 class="section-title gold">Dự án nổi bật</h2>
        <p class="section-subtitle">Những dự án âm nhạc, MV nổi bật được sản xuất tại Oscar Studio.</p>
        <div class="mv-grid">
          <div class="mv-card" v-for="mv in featuredMVs" :key="mv.src">
            <iframe class="mv-frame" :src="mv.src" :title="mv.title" frameborder="0" allowfullscreen></iframe>
            <p class="mv-label">{{ mv.title }}</p>
          </div>
        </div>
      </section>

      <!-- Đăng ký Idol -->
      <section id="dang-ky" class="home-section card-section text-center">
        <h2 class="section-title gold">Đăng ký Idol Oscar</h2>
        <p class="section-body">Nếu bạn đam mê ca hát, có tài năng nghệ thuật, hãy đăng ký để trở thành thành viên của Oscar Family!</p>
        <a href="https://forms.gle/ieT25qMcQgo3zd2q7" target="_blank" class="cta-btn">
          <i class="fa-solid fa-star"></i>Đăng ký ngay
        </a>
      </section>

    </main>
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import RelatedPosts from '../components/RelatedPosts.vue';

const contactInfo = inject('contactInfo');
const hrefHover = ref('');
const showRankHelp = ref(false);

const featuredMVs = [
  { src: 'https://www.youtube.com/embed/fPqDtTEjxEw', title: 'DUYÊN MỘNG VỠ TAN - Qiti (Quyết Trịnh)' },
  { src: 'https://www.youtube.com/embed/A-tntFuXdNg', title: 'DUYÊN CHƯA THÀNH, PHẬN DỞ DANG - QITI' },
  { src: 'https://www.youtube.com/embed/lLbt0ZPvFms', title: 'HỌC CÁCH TẬP QUÊN - QITI' },
  { src: 'https://www.youtube.com/embed/KQjhcx_EkoA', title: 'MÙA XUÂN SANG - QUYẾT TRỊNH (Qiti)' },
]

const pageTitle = 'Oscar Entertainment - Sản xuất, phát hành & truyền thông âm nhạc'
const pageDescription = 'Oscar Entertainment là đơn vị sản xuất, phát hành, truyền thông âm nhạc. Chúng tôi đào tạo các giọng hát tiềm năng, tiếp sức cho các tài năng trẻ theo đuổi đam mê.'
const pageUrl = 'https://oscarfamily.vn/'

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Oscar Entertainment',
  url: pageUrl,
  logo: 'https://oscarfamily.vn/favicon.png',
  description: pageDescription,
  sameAs: [
    'https://www.youtube.com/@oscarstudiohanoi',
    'https://www.tiktok.com/@oscarstudio.vn',
    'https://fb.com/oscarstudiohanoi',
    'https://zalo.me/0849297957'
  ]
}))

const websiteJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Oscar Entertainment',
  url: 'https://oscarfamily.vn/'
}))

usePageSeo({
  title: pageTitle,
  description: pageDescription
})

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: computed(() => JSON.stringify(jsonLd.value)) },
    { type: 'application/ld+json', innerHTML: computed(() => JSON.stringify(websiteJsonLd.value)) },
  ]
})
</script>

<style scoped>
/* ── WRAPPER ── */
.home-page {
  min-height: 100vh;
  background: #0a0a0a;
  color: #e0e0e0;
}

/* ── HERO ── */
.home-hero {
  position: relative;
  padding-top: 64px; /* nav height */
  background: linear-gradient(160deg, #0f0f0f 0%, #161208 50%, #0f0c00 100%);
  border-bottom: 1px solid rgba(242, 195, 90, 0.1);
  overflow: hidden;
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(242, 195, 90, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.home-hero-inner {
  position: relative;
  max-width: 72rem;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 2rem;
  text-align: center;
}

.home-hero-title {
  font-family: var(--font-outfit);
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f2c35a;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 0 60px rgba(242, 195, 90, 0.25);
}

.home-hero-subtitle {
  font-size: clamp(0.95rem, 2.5vw, 1.25rem);
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

/* Socials */
.home-socials {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.social-btn {
  width: 52px;
  height: 52px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.4);
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.08);
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
}

.social-yt  { background: #e52d27; }
.social-yt:hover { background: #c41f1a; }
.social-tt  { background: #111; border: 1px solid #333; }
.social-tt:hover { background: #222; }
.social-msg { background: #0078ff; }
.social-msg:hover { background: #0061d5; }
.social-fb  { background: #4267B2; }
.social-fb:hover { background: #3558a0; }
.social-zalo { background: #008fe5; }
.social-zalo:hover { background: #0072b8; }

.home-hero-hint {
  height: 1.5rem;
  font-size: 0.75rem;
  color: #555;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  font-family: monospace;
}

/* In-page subnav */
.home-subnav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
}

.home-subnav-link {
  color: #f2c35a;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
  background: rgba(242, 195, 90, 0.07);
  text-decoration: none;
  border: 1px solid rgba(242, 195, 90, 0.15);
  transition: background 0.18s, color 0.18s;
  letter-spacing: 0.02em;
}

.home-subnav-link:hover {
  background: rgba(242, 195, 90, 0.15);
  color: #fff;
}

/* ── MAIN ── */
.home-main {
  max-width: 72rem;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
}

.home-section {
  margin-bottom: 5rem;
  scroll-margin-top: 80px;
}

/* Section headings */
.section-title {
  font-family: var(--font-outfit);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.75rem;
}

.section-title.gold { color: #f2c35a; }
.section-title.white { color: #fff; }

.section-subtitle {
  font-size: 1rem;
  color: #737373;
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-body {
  font-size: 1rem;
  color: #909090;
  line-height: 1.8;
  text-align: center;
  max-width: 640px;
  margin: 0 auto 1.75rem;
}

/* Card section */
.card-section {
  background: linear-gradient(135deg, #121212 0%, #181510 100%);
  border: 1px solid rgba(242, 195, 90, 0.1);
  border-radius: 1.5rem;
  padding: 3rem 2rem;
  box-shadow: 0 8px 40px rgba(0,0,0,0.3);
}

/* Rank help */
.rank-help-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rank-help-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #f2c35a;
  background: rgba(242, 195, 90, 0.08);
  border: 1px solid rgba(242, 195, 90, 0.2);
  border-radius: 9999px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s;
}

.rank-help-btn:hover {
  background: rgba(242, 195, 90, 0.15);
  transform: scale(1.03);
}

.rank-help-box {
  margin-top: 1.25rem;
  background: #111;
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: left;
  width: 100%;
  max-width: 600px;
  font-size: 0.9rem;
  color: #c0c0c0;
  line-height: 1.7;
}

.rank-label {
  color: #f2c35a;
  font-weight: 700;
  margin-right: 0.25rem;
}

.rank-link {
  color: #60a5fa;
  text-decoration: underline;
  margin-left: 0.25rem;
  word-break: break-all;
}

/* Benefits grid */
.benefits-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.benefit-card {
  background: #111;
  border: 1px solid #1e1e1e;
  border-top: 3px solid #f2c35a;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.benefit-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
}

.benefit-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #f2c35a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.benefit-card ul {
  list-style: disc;
  padding-left: 1.25rem;
  font-size: 0.875rem;
  color: #909090;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* MV grid */
.mv-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media (min-width: 768px) {
  .mv-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.mv-card {
  background: #0f0e0a;
  border: 1px solid rgba(242, 195, 90, 0.15);
  border-radius: 1rem;
  padding: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.mv-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.5);
}

.mv-frame {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  display: block;
}

.mv-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e0e0e0;
  line-height: 1.4;
}

/* CTA button */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f2c35a;
  color: #0a0a0a;
  font-weight: 800;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  margin-top: 1rem;
  box-shadow: 0 4px 20px rgba(242, 195, 90, 0.25);
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
}

.cta-btn:hover {
  background: #f0d570;
  transform: scale(1.05);
  box-shadow: 0 6px 28px rgba(242, 195, 90, 0.4);
}

/* Fade transition for rank-help */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
