<template>
  <div class="min-h-screen bg-[#121212] text-[#E0E0E0] font-montserrat flex flex-col">
    <!-- Header -->
    <header class="py-10 bg-dark bg-opacity-70 backdrop-blur-xl text-center text-[#f2c35a] shadow-2xl rounded-b-3xl">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4 tracking-widest drop-shadow-xl">OSCAR ENTERTAINMENT</h1>
      <h2 class="text-xl md:text-3xl font-semibold text-gray-300 mb-2">Đơn vị sản xuất, phát hành, truyền thông âm nhạc & đào tạo tài năng trẻ</h2>
      <div class="flex justify-center gap-6 mt-6">
        <a :href="contactInfo.youtubeChannel" target="_blank" class="bg-[#e52d27] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#b31217] transition-all duration-200" title="YouTube"
          @mouseenter="hrefHover = contactInfo.youtubeChannel" @mouseleave="hrefHover = ''">
          <i class="fa-brands fa-youtube text-xl"></i>
        </a>
        <a :href="contactInfo.tiktok" target="_blank" class="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#222] transition-all duration-200" title="TikTok"
          @mouseenter="hrefHover = contactInfo.tiktok" @mouseleave="hrefHover = ''">
          <i class="fa-brands fa-tiktok text-xl"></i>
        </a>
        <a :href="contactInfo.Messenger" target="_blank" class="bg-[#0078ff] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#005ecb] transition-all duration-200" title="Messenger"
          @mouseenter="hrefHover = contactInfo.Messenger" @mouseleave="hrefHover = ''">
          <i class="fa-brands fa-facebook-messenger text-xl"></i>
        </a>
        <a :href="contactInfo.FacebookPage" target="_blank" class="bg-[#4267B2] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#365899] transition-all duration-200" title="Facebook"
          @mouseenter="hrefHover = contactInfo.FacebookPage" @mouseleave="hrefHover = ''">
          <i class="fa-brands fa-facebook-f text-xl"></i>
        </a>
        <a :href="contactInfo.zalo" target="_blank" class="bg-[#008fe5] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#006bb3] transition-all duration-200" title="Zalo"
          @mouseenter="hrefHover = contactInfo.zalo" @mouseleave="hrefHover = ''">
          <img src="/img/icon-zalo.png" alt="Zalo" class="w-7 h-7" />
        </a>
      </div>
      <p class="h-8 mt-5 px-2 flex items-center justify-center text-gray-400">{{ hrefHover.slice(8) }}</p>
    </header>

    <!-- Main Content -->
    <main class="flex-1 max-w-6xl mx-auto px-6 py-16">
      <!-- Giới thiệu -->
      <section id="gioi-thieu" class="mb-24 text-center bg-gradient-to-br from-[#181818] to-[#232323] rounded-3xl py-12 shadow-2xl">
        <h3 class="text-3xl md:text-4xl font-black uppercase mb-6 text-[#f2c35a] tracking-widest">Giới thiệu</h3>
        <p class="text-lg md:text-xl text-gray-400 leading-relaxed">Oscar Entertainment là đơn vị sản xuất, phát hành, truyền thông âm nhạc. Chúng tôi đào tạo các giọng hát tiềm năng, tiếp sức cho các tài năng trẻ theo đuổi đam mê.</p>

        <div class="mt-8 flex flex-col items-center">
          <button class="font-semibold underline hover:text-yellow-400 transition cursor-pointer"
            @click="showRankHelp = !showRankHelp">
            Giúp chúng tôi tăng thứ hạng
          </button>
          <div v-if="showRankHelp" class="mt-4 bg-gray-900 shadow-lg p-6 text-left max-w-auto w-full">
            <div class="mb-4">
              <span class="font-bold text-[#f2c35a]">Bước 1:</span>
              Truy cập link này:
              <a href="https://google.com/search?q=oscar+studio+ha+noi" target="_blank" class="text-blue-400 underline ml-2">
                Google.com/search?q=oscar+studio+ha+noi
              </a>
            </div>
            <div>
              <span class="font-bold text-[#f2c35a]">Bước 2:</span>
              <span class="ml-2">Bấm vào link trang web của Oscar Studio trong kết quả tìm kiếm.</span>
              <img src="/img/search-oscar-studio-on-google.png" alt="oscar-studio-phong-thu-am-hoang-mai-ha-noi-google-search" class="mt-4 rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>

      </section>

      <!-- Quyền lợi hợp tác -->
      <section id="quyen-loi" class="mb-24 py-12 w-full">
        <h3 class="text-3xl md:text-4xl font-black uppercase mb-6 text-center text-white tracking-widest">Quyền lợi hợp tác</h3>
        <div class="grid md:grid-cols-2 gap-10">
          <div class="bg-gray-900 rounded-3xl shadow-2xl p-8 border-t-4 border-[#f2c35a] hover:scale-[1.03] transition-all duration-200">
            <h4 class="font-semibold mb-4 flex items-center gap-3 text-lg"><i class="fa-solid fa-share-nodes text-[#f2c35a]"></i> Social Media</h4>
            <ul class="list-disc ml-6 text-base">
              <li>Phát hành & truyền thông trên hệ thống social của Oscar: Tiktok, Youtube, Fanpage.</li>
              <li>Hướng dẫn xây dựng & phát triển kênh social chuyên nghiệp.</li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-3xl shadow-2xl p-8 border-t-4 border-[#f2c35a] hover:scale-[1.03] transition-all duration-200">
            <h4 class="font-semibold mb-4 flex items-center gap-3 text-lg"><i class="fa-solid fa-lightbulb text-[#f2c35a]"></i> Sáng tạo</h4>
            <ul class="list-disc ml-6 text-base">
              <li>Tư vấn, hỗ trợ sáng tác, sản xuất và phát hành ca khúc chất lượng.</li>
              <li>Hỗ trợ xây dựng content Tiktok, viral kênh nghệ sĩ.</li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-3xl shadow-2xl p-8 border-t-4 border-[#f2c35a] hover:scale-[1.03] transition-all duration-200">
            <h4 class="font-semibold mb-4 flex items-center gap-3 text-lg"><i class="fa-solid fa-video text-[#f2c35a]"></i> Sản xuất</h4>
            <ul class="list-disc ml-6 text-base">
              <li>Hỗ trợ sản xuất hình ảnh, MV, âm nhạc, thu âm bởi ekip chuyên nghiệp.</li>
              <li>Sử dụng thiết bị quay phim, thu âm phòng VIP.</li>
            </ul>
          </div>
          <div class="bg-gray-900 rounded-3xl shadow-2xl p-8 border-t-4 border-[#f2c35a] hover:scale-[1.03] transition-all duration-200">
            <h4 class="font-semibold mb-4 flex items-center gap-3 text-lg"><i class="fa-solid fa-people-group text-[#f2c35a]"></i> Kết nối & Phát triển</h4>
            <ul class="list-disc ml-6 text-base">
              <li>Tiếp cận khán giả qua show diễn, chương trình truyền hình.</li>
              <li>Cơ hội làm việc với nghệ sĩ nổi tiếng, học hỏi về Media & đa nền tảng.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Nghệ sĩ -->
      <section id="nghe-si" class="mb-24 bg-gradient-to-br from-[#181814] to-[#232323] rounded-3xl py-12 shadow-2xl">
        <h3 class="text-3xl md:text-4xl font-black uppercase mb-6 text-center text-[#f2c35a] tracking-widest">Nghệ sĩ</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          <div class="flex flex-col items-center">
            <img src="/src/assets/qiti.jpg" alt="Qiti" class="rounded-full shadow-2xl w-36 h-36 object-cover mb-3 hover:scale-105 transition-all duration-200">
            <span class="font-semibold text-lg">Qiti</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/src/assets/quin.jpg" alt="Quin" class="rounded-full shadow-2xl w-36 h-36 object-cover mb-3 hover:scale-105 transition-all duration-200">
            <span class="font-semibold text-lg">Quin</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/src/assets/tuyner.jpg" alt="Tuyner" class="rounded-full shadow-2xl w-36 h-36 object-cover mb-3 hover:scale-105 transition-all duration-200">
            <span class="font-semibold text-lg">Tuyner</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/src/assets/tt.jpg" alt="Thuy Tien" class="rounded-full shadow-2xl w-36 h-36 object-cover mb-3 hover:scale-105 transition-all duration-200">
            <span class="font-semibold text-lg">Thuy Tien</span>
          </div>
        </div>
      </section>

      <!-- Dự án nổi bật -->
      <section id="san-pham" class="mb-24 py-12 w-full">
        <h3 class="text-3xl md:text-4xl font-black uppercase mb-6 text-center text-[#f2c35a] tracking-widest">Dự án nổi bật</h3>
        <p class="text-xl text-center text-gray-400 mb-10">Những dự án âm nhạc, MV nổi bật được sản xuất tại Oscar Studio.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="rounded-3xl shadow-2xl flex flex-col items-center bg-[#181814] border border-[#f2c35a] p-8 hover:scale-[1.02] transition-all duration-200">
            <iframe class="w-full aspect-video rounded-2xl shadow mb-6" src="https://www.youtube.com/embed/fPqDtTEjxEw" title="DUYÊN MỘNG VỠ TAN" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-white text-lg">DUYÊN MỘNG VỠ TAN - Qiti (Quyết Trịnh)</p>
          </div>
          <div class="rounded-3xl shadow-2xl flex flex-col items-center bg-[#181814] border border-[#f2c35a] p-8 hover:scale-[1.02] transition-all duration-200">
            <iframe class="w-full aspect-video rounded-2xl shadow mb-6" src="https://www.youtube.com/embed/A-tntFuXdNg" title="DUYÊN CHƯA THÀNH, PHẬN DỞ DANG" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-white text-lg">DUYÊN CHƯA THÀNH, PHẬN DỞ DANG - QITI</p>
          </div>
          <div class="rounded-3xl shadow-2xl flex flex-col items-center bg-[#181814] border border-[#f2c35a] p-8 hover:scale-[1.02] transition-all duration-200">
            <iframe class="w-full aspect-video rounded-2xl shadow mb-6" src="https://www.youtube.com/embed/lLbt0ZPvFms" title="HỌC CÁCH TẬP QUÊN" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-white text-lg">HỌC CÁCH TẬP QUÊN - QITI</p>
          </div>
          <div class="rounded-3xl shadow-2xl flex flex-col items-center bg-[#181814] border border-[#f2c35a] p-8 hover:scale-[1.02] transition-all duration-200">
            <iframe class="w-full aspect-video rounded-2xl shadow mb-6" src="https://www.youtube.com/embed/KQjhcx_EkoA" title="MÙA XUÂN SANG" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-white text-lg">MÙA XUÂN SANG - QUYẾT TRỊNH (Qiti)</p>
          </div>
        </div>
      </section>

      <!-- Đăng ký Idol -->
      <section id="dang-ky" class="mb-24 text-center bg-gradient-to-br from-[#181818] to-[#232323] rounded-3xl py-12 shadow-2xl">
        <h3 class="text-3xl md:text-4xl font-black uppercase mb-6 text-[#f2c35a] tracking-widest">Đăng ký Idol Oscar</h3>
        <p class="mb-6 text-gray-400 text-lg">Nếu bạn đam mê ca hát, có tài năng nghệ thuật, hãy đăng ký để trở thành thành viên của Oscar Family!</p>
        <a href="https://forms.gle/ieT25qMcQgo3zd2q7" target="_blank" class="inline-block px-8 py-3 bg-[#f2c35a] text-black rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-200 text-lg">Đăng ký ngay</a>
      </section>

      <!-- Bài viết liên quan -->
      <RelatedPosts />
    </main>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { computed, inject, ref } from 'vue'
import RelatedPosts from '../components/RelatedPosts.vue';

const contactInfo = inject('contactInfo');
const hrefHover = ref('');
const showRankHelp = ref(false);

// Trang chủ Oscar Family
const pageTitle = 'Oscar Entertainment - Sản xuất, phát hành & truyền thông âm nhạc'
const pageDescription = 'Oscar Entertainment là đơn vị sản xuất, phát hành, truyền thông âm nhạc. Chúng tôi đào tạo các giọng hát tiềm năng, tiếp sức cho các tài năng trẻ theo đuổi đam mê.'
const pageUrl = 'https://oscarfamily.vn'
const ogImage = 'https://oscarfamily.vn/img/oscar-studio-render.jpg'

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

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    // Open Graph
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Oscar Entertainment' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    { name: 'twitter:image', content: ogImage }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify(jsonLd.value)),
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
})
</script>

<style scoped>
body {
  font-size: large;
}

/* Modern UI tweaks for home page */
.shadow-2xl {
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
}

.rounded-3xl {
  border-radius: 2rem;
}

.drop-shadow-xl {
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.3));
}
</style>
