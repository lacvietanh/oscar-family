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
          <p class="text-sm text-gray-400 mb-5 line-clamp-3">{{ post.excerpt }}</p>
          <div class="mt-auto flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
            <span class="text-xs text-gray-500">Chi tiết</span>
            <span class="text-[#f2c35a] font-semibold text-sm group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
        <span class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-gradient-to-br from-transparent via-transparent to-[#f2c35a]/10 transition duration-300"></span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

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
    tags: ['Phòng thu âm', 'Làm nhạc', 'Hà Nội']
  },
  {
    slug: '/akinet',
    title: 'AkiNet - Hệ sinh thái công nghệ làm nhạc (AkiWorkflow, VSTShop, AkiApp)',
    image: '/img/AkiNet-akivn.net.png',
    excerpt: 'AkiNet (akivn.net) kết nối AkiWorkflow, VSTShop, AkiApp, Tách Nhạc AI, LamNhac.net tạo nền tảng công nghệ âm nhạc Việt Nam.',
    tags: ['Công nghệ', 'Âm nhạc', 'AI']
  },
  {
    slug: '/akiworkflow',
    title: 'AkiWorkflow - Hệ sinh thái tất cả trong một để bắt đầu làm nhạc',
    image: '/img/AkiWF-GrCover2025.png',
    excerpt: 'Nền tảng quản lý dự án âm nhạc: task, version, stem, release checklist dành cho producer, studio, artist indie.',
    tags: ['Workflow', 'Producer tool', 'Studio']
  },
  {
    slug: '/lamnhac',
    title: 'LamNhac.net - Cộng đồng làm nhạc, preset và mentorship cho producer Việt Nam',
    image: '/img/lamnhac-net.png',
    excerpt: 'LamNhac.net là hub chia sẻ preset, tutorial, feedback và mentorship dành cho cộng đồng producer Việt Nam.',
    tags: ['Cộng đồng', 'Preset', 'Mentorship']
  },
  {
    slug: '/tachnhac',
    title: 'Tách Nhạc AI tool.akivn.net - Tachnhac, Vocal Remover, Tải nhạc',
    image: '/img/akivn-tachnhacv1.png',
    excerpt: 'Giới thiệu tool.akivn.net/tachnhac: tách nhạc AI, vocal remove, tải nhạc YouTube, download SoundCloud cho producer và content creator.',
    tags: ['AI', 'Tách nhạc', 'YouTube']
  }
];

const filteredPosts = computed(() => {
  return allPosts.filter(post => post.slug !== props.excludeSlug);
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
