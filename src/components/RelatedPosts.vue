<template>
  <section v-if="filteredPosts.length > 0" id="bai-viet-lien-quan" class="my-16 max-w-6xl mx-auto px-6">
    <h3 v-if="header" class="text-3xl md:text-4xl font-black uppercase mb-10 text-center text-[#f2c35a] tracking-widest">Bài viết liên quan</h3>
    <div class="grid gap-10 md:grid-cols-3">
      <router-link
        v-for="post in filteredPosts"
        :key="post.slug"
        :to="post.slug"
        class="group relative rounded-3xl overflow-hidden shadow-2xl bg-[#181818] border border-[#2a2a2a] hover:border-[#f2c35a] transition-all duration-300 flex flex-col"
        :aria-label="'Đọc bài viết ' + post.title">
        <div class="relative w-full aspect-video overflow-hidden">
          <img :src="post.image" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" :alt="post.title" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute top-3 left-3 flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-[10px] uppercase tracking-wider font-semibold bg-[#f2c35a] text-black px-2 py-1 rounded-full shadow">{{ tag }}</span>
          </div>
        </div>
        <div class="p-6 flex flex-col flex-1">
          <h4 class="text-lg font-bold mb-3 leading-snug line-clamp-2 group-hover:text-[#f2c35a] transition-colors">{{ post.title }}</h4>
          <p class="text-sm text-gray-400 mb-3 line-clamp-3">{{ post.excerpt }}</p>
          <div class="mt-auto flex flex-col gap-2">
            <div class="text-xs text-gray-500 flex items-center gap-1">
              <i class="fas fa-calendar text-xs"></i>
              {{ formatDate(post.time) }}
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-[#2a2a2a]">
              <span class="text-xs text-gray-500">Chi tiết</span>
              <span class="text-[#f2c35a] font-semibold text-sm group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
        <span class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent via-transparent to-[#f2c35a]/10 transition duration-300"></span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

// Format Unix timestamp to Vietnamese date
const formatDate = (timestamp) => {
  if (!timestamp) return '';
  // Convert Unix timestamp (seconds) to JavaScript timestamp (milliseconds)
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const props = defineProps({
  excludeSlug: {
    type: String,
    default: ''
  },
  header: {
    type: Boolean,
    default: true
  }
});

const allPosts = [
  {
    slug: '/oscarstudio',
    title: 'Oscar Studio Hà Nội - Phòng Thu Âm & Làm Nhạc Chuyên Nghiệp',
    image: '/img/oscar-studio-phong-thu-am-Ha-Noi-main-view-to-desk-and-cabin.jpg',
    excerpt: 'Phòng thu âm chuyên nghiệp tại Hà Nội: thu âm, làm nhạc, hòa âm phối khí, mixing mastering, quay MV chất lượng cao.',
    tags: ['Phòng thu âm', 'Làm nhạc', 'Hà Nội'],
    time: 1760933084
  },
  {
    slug: '/akinet',
    title: 'AkiNet - Hệ sinh thái công nghệ làm nhạc (AkiWorkflow, VSTShop, AkiApp)',
    image: '/img/AkiNet-akivn.net.png',
    excerpt: 'AkiNet (akivn.net) kết nối AkiWorkflow, VSTShop, AkiApp, Tách Nhạc AI, LamNhac.net tạo nền tảng công nghệ âm nhạc Việt Nam.',
    tags: ['Công nghệ', 'Âm nhạc', 'AI'],
    time: 1757246755
  },
  {
    slug: '/akiworkflow',
    title: 'AkiWorkflow - Hệ sinh thái tất cả trong một để bắt đầu làm nhạc',
    image: '/img/AkiWF-GrCover2025.png',
    excerpt: 'Nền tảng quản lý dự án âm nhạc: task, version, stem, release checklist dành cho producer, studio, artist indie.',
    tags: ['Workflow', 'Producer tool', 'Studio'],
    time: 1757246716
  },
  {
    slug: '/akiapp',
    title: 'AkiApp - Nền tảng Mini-OS cho người sáng tạo (app.akivn.net)',
    image: '/img/AkiApp-cover.png',
    excerpt: 'AkiApp là một nền tảng Mini-OS trên trình duyệt, cung cấp các ứng dụng và tiện ích cho producer, content creator và người dùng sáng tạo.',
    tags: ['Mini-OS', 'Web App', 'Công cụ'],
    time: 1764397499
  },
  {
    slug: '/lamnhac',
    title: 'LamNhac.net - Cộng đồng làm nhạc, preset và mentorship cho producer Việt Nam',
    image: '/img/lamnhac-net.png',
    excerpt: 'LamNhac.net là hub chia sẻ preset, tutorial, feedback và mentorship dành cho cộng đồng producer Việt Nam.',
    tags: ['Cộng đồng', 'Preset', 'Mentorship'],
    time: 1760933084
  },
  {
    slug: '/tachnhac',
    title: 'Tách Nhạc AI tool.akivn.net - Tachnhac, Vocal Remover, Tải nhạc',
    image: '/img/akivn-tachnhacv1.png',
    excerpt: 'Giới thiệu tool.akivn.net/tachnhac: tách nhạc AI, vocal remove, tải nhạc YouTube, download SoundCloud cho producer và content creator.',
    tags: ['AI', 'Tách nhạc', 'YouTube'],
    time: 1760747169
  },
  {
    slug: '/qqmusic-lyrics-search',
    title: 'QQMusic Lyrics Search: Bí Quyết Có Lời Bài Hát Đúng Timecode Cho Video Âm Nhạc',
    image: '/img/qqmusicsearch-logo.png',
    excerpt: 'Công cụ tìm kiếm lyrics từ QQMusic với timecode chuẩn, hỗ trợ nhạc Trung và quốc tế - giải pháp tối ưu cho creator video âm nhạc.',
    tags: ['Lyrics', 'Video editing', 'Content creator'],
    time: 1764435883
  },
  {
    slug: '/seo-system',
    title: 'Hệ thống SEO AUTOMATION Độc Quyền AkiNet - Tối Ưu Trong 5S',
    image: '/img/seo-check.png',
    excerpt: 'Khám phá hệ thống SEO Automation do Lạc Việt Anh (Founder AkiNet) phát triển. Tự động kiểm tra lỗi, tối ưu JSON-LD và Meta Tags, giúp Creator tập trung vào nội dung.',
    tags: ['SEO automation', 'JSON-LD', 'Meta tags'],
    time: 1764441191
  },
  {
    slug: '/akiinfodetect-js',
    title: 'aki-info-detect: JavaScript Library Phát Hiện Thiết Bị Thông Minh',
    image: '/img/AkiNet-akivn.net.png',
    excerpt: 'Ra mắt aki-info-detect - thư viện JavaScript nhẹ, mạnh mẽ phát hiện browser, OS, hardware, network. Client Hints API, Apple Silicon M1-MX, tree-shakeable. By Lạc Việt Anh.',
    tags: ['JavaScript', 'Device Detection', 'AkiNet'],
    time: 1765186455
  }
];

const filteredPosts = computed(() => {
  return allPosts
    .filter(post => post.slug !== props.excludeSlug)
    .sort((a, b) => b.time - a.time); // Mới nhất lên trước
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
