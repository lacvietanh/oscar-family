<template>
  <div class="studio-root font-montserrat min-h-screen">
    <!-- Header -->
    <header class="studio-header fixed w-full z-50 shadow-lg">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-highlight uppercase tracking-wider">
          Oscar Studio
        </a>
        <nav class="hidden md:flex space-x-8 items-center">
          <a href="#about" class="studio-link">Giới Thiệu</a>
          <a href="#services" class="studio-link">Dịch Vụ</a>
          <a href="#portfolio" class="studio-link">Sản Phẩm</a>
          <a href="#pricing" class="studio-link">Bảng Giá</a>
          <a href="https://studio.oscarfamily.vn/contact" class="studio-link studio-link-cta">Liên Hệ</a>
        </nav>
        <button class="md:hidden text-highlight">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="studio-hero relative h-screen flex items-center justify-center text-center bg-cover bg-center">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-background opacity-80"></div>
      <div class="relative z-10 px-6">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-text leading-tight mb-4">
          Phòng Thu Âm <span class="text-highlight">Chuyên Nghiệp</span><br>Tại Trung Tâm Hà Nội
        </h1>
        <p class="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-8">
          Nơi biến mọi ý tưởng âm nhạc của bạn thành hiện thực với chất lượng phòng thu đẳng cấp quốc tế.
        </p>
        <a href="#contact" class="studio-cta transition font-bold text-lg py-4 px-10 rounded-full uppercase tracking-widest">
          Đặt Lịch Ngay
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 md:py-32">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black uppercase tracking-wider mb-6 text-highlight">Về Oscar Studio</h2>
        <p class="text-lg text-text-muted max-w-xl mx-auto mb-12">
          Hơn cả một phòng thu âm, chúng tôi là ngôi nhà của những tâm hồn đồng điệu với âm nhạc.
        </p>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="text-left">
            <h3 class="text-2xl font-bold text-text mb-4">Không Gian Sáng Tạo Không Giới Hạn</h3>
            <p class="mb-4 text-text-muted">
              Tọa lạc tại vị trí trung tâm của <strong class="text-text">Hà Nội</strong>, Oscar Studio không chỉ là một <strong class="text-text">studio</strong> thu âm đơn thuần. Chúng tôi tạo ra một môi trường làm việc chuyên nghiệp, đầy cảm hứng, nơi các nghệ sĩ có thể tự do bay bổng và thăng hoa cùng âm nhạc.
            </p>
            <p class="mb-4 text-text-muted">
              Với đam mê <strong class="text-text">sản xuất âm nhạc</strong> và mong muốn nâng tầm V-Pop, đội ngũ của Oscar Studio là những producer, sound engineer dày dặn kinh nghiệm, luôn cập nhật những xu hướng và công nghệ âm thanh mới nhất trên thế giới. Chúng tôi cam kết mang đến những sản phẩm không chỉ hay về giai điệu mà còn hoàn hảo về chất lượng âm thanh.
            </p>
          </div>
          <div>
            <img src="/img/oscar-studio-desk.jpg" alt="Phòng thu âm Oscar Studio Hà Nội sản xuất âm nhạc" class="rounded-lg shadow-2xl">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 md:py-32 bg-background bg-opacity-80">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black uppercase tracking-wider mb-6 text-text">Dịch Vụ Toàn Diện</h2>
        <p class="text-lg text-text-muted max-w-xl mx-auto mb-12">
          Từ bản thu demo đầu tiên đến một sản phẩm âm nhạc hoàn chỉnh, Oscar Studio đồng hành cùng bạn trên mọi chặng đường.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="transition service-card bg-card p-8 rounded-lg border-t-4" :class="service.border">
            <img :src="service.icon" class="mx-auto mb-6" :alt="service.alt">
            <h3 class="text-xl font-bold text-text mb-3">{{ service.title }}</h3>
            <p class="text-text-muted" v-html="service.desc"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Dự án nổi bật -->
    <section id="portfolio" class="py-20 md:py-32">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black uppercase tracking-wider mb-6 text-highlight">Dự án nổi bật</h2>
        <p class="text-lg text-text-muted max-w-xl mx-auto mb-12">
          Những dự án âm nhạc, MV nổi bật được sản xuất tại Oscar Studio.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="rounded-2xl shadow-lg flex flex-col items-center bg-card border border-[#c77ed4] p-5">
            <iframe class="w-full aspect-video rounded shadow mb-4" src="https://www.youtube.com/embed/fPqDtTEjxEw" title="DUYÊN MỘNG VỠ TAN" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-text">DUYÊN MỘNG VỠ TAN - Qiti (Quyết Trịnh)</p>
          </div>
          <div class="rounded-2xl shadow-lg flex flex-col items-center bg-card border border-[#c77ed4] p-5">
            <iframe class="w-full aspect-video rounded shadow mb-4" src="https://www.youtube.com/embed/A-tntFuXdNg" title="DUYÊN CHƯA THÀNH, PHẬN DỞ DANG" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-text">DUYÊN CHƯA THÀNH, PHẬN DỞ DANG - QITI</p>
          </div>
          <div class="rounded-2xl shadow-lg flex flex-col items-center bg-card border border-[#c77ed4] p-5">
            <iframe class="w-full aspect-video rounded shadow mb-4" src="https://www.youtube.com/embed/lLbt0ZPvFms" title="HỌC CÁCH TẬP QUÊN" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-text">HỌC CÁCH TẬP QUÊN - QITI</p>
          </div>
          <div class="rounded-2xl shadow-lg flex flex-col items-center bg-card border border-[#c77ed4] p-5">
            <iframe class="w-full aspect-video rounded shadow mb-4" src="https://www.youtube.com/embed/KQjhcx_EkoA" title="MÙA XUÂN SANG" frameborder="0" allowfullscreen></iframe>
            <p class="font-semibold text-text">MÙA XUÂN SANG - QUYẾT TRỊNH (Qiti)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 md:py-32 bg-background bg-opacity-80">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-black uppercase tracking-wider mb-6 text-text">Bảng Giá Dịch Vụ</h2>
        <p class="text-lg text-text-muted max-w-xl mx-auto mb-12">
          Tham khảo các gói dịch vụ phổ biến nhất tại Oscar Studio. Giá có thể thay đổi tùy yêu cầu và thời lượng. Liên hệ để nhận tư vấn chi tiết và ưu đãi.
        </p>
        <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Gói Thu âm -->
          <div class="border-2 rounded-lg flex flex-col border-[#c77ed4] bg-card p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-highlight mb-2">Thu âm</h3>
            <p class="text-4xl font-black text-text mb-4">Từ 350.000 VNĐ</p>
            <ul class="text-text-muted space-y-3 mb-8 text-left flex-grow">
              <li>Phòng thu tiêu chuẩn, micro & soundcard cao cấp</li>
              <li>Kỹ thuật viên hỗ trợ trực tiếp</li>
              <li>Mix & master cơ bản miễn phí</li>
              <li>File thu chất lượng cao (WAV, MP3)</li>
            </ul>
            <a href="#contact" class="studio-cta mt-auto w-full text-center py-3 px-6 rounded-full font-bold">Đặt lịch thu âm</a>
          </div>
          <!-- Gói Hòa âm -->
          <div class="border-2 rounded-lg flex flex-col border-[#c77ed4] bg-card p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-highlight mb-2">Hòa âm phối khí</h3>
            <p class="text-4xl font-black text-text mb-4">Từ 1.200.000 VNĐ</p>
            <ul class="text-text-muted space-y-3 mb-8 text-left flex-grow">
              <li>Producer tư vấn ý tưởng, phong cách</li>
              <li>Phối khí chuyên nghiệp, nhạc cụ đa dạng</li>
              <li>Mix/master chuyên sâu</li>
              <li>Hỗ trợ phát hành nhạc số</li>
            </ul>
            <a href="#contact" class="studio-cta mt-auto w-full text-center py-3 px-6 rounded-full font-bold">Nhận tư vấn phối khí</a>
          </div>
          <!-- Gói Quay MV -->
          <div class="border-2 rounded-lg flex flex-col border-[#c77ed4] bg-card p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-highlight mb-2">Quay MV</h3>
            <p class="text-4xl font-black text-text mb-4">Từ 400.000 VNĐ</p>
            <ul class="text-text-muted space-y-3 mb-8 text-left flex-grow">
              <li>Đạo diễn, quay phim chuyên nghiệp</li>
              <li>Thiết bị hiện đại, đa góc quay</li>
              <li>Dựng phim, chỉnh màu, hiệu ứng</li>
              <li>Ý tưởng kịch bản sáng tạo</li>
            </ul>
            <a href="#contact" class="studio-cta mt-auto w-full text-center py-3 px-6 rounded-full font-bold">Nhận báo giá MV</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 md:py-32">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-black uppercase tracking-wider mb-6 text-highlight">Liên Hệ Oscar Studio</h2>
          <p class="text-lg text-text-muted max-w-xl mx-auto mb-12">
            Kết nối nhanh với chúng tôi qua các nền tảng mạng xã hội, email hoặc điện thoại.
          </p>
        </div>
        <div class="max-w-2xl mx-auto bg-card rounded-lg p-8 shadow-lg">
          <div class="mb-8 text-center">
            <h3 class="text-xl font-bold text-text mb-2">Oscar Studio</h3>
            <p class="text-text-muted mb-2">Chuyên sản xuất Audio, video, hình ảnh chuyên nghiệp</p>
            <div class="flex flex-col items-center space-y-2">
              <div class="flex items-center"><span class="text-highlight mr-2"></span> <span class="text-text">Số 9, ngách 78, ngõ 169, Hoàng Mai, Hoàng Văn Thụ, Hoàng Mai, Hà Nội, Việt Nam</span></div>
              <div class="flex items-center"><span class="text-highlight mr-2"></span> <a href="tel:0849297957" class="text-text hover:text-link">0849 297 957</a></div>
              <div class="flex items-center"><span class="text-highlight mr-2"></span> <a href="mailto:contact@oscarfamily.vn" class="text-text hover:text-link">contact@oscarfamily.vn</a></div>
            </div>
          </div>
          <div class="mb-8 text-center">
            <h3 class="text-lg font-bold text-text mb-4">Kết nối mạng xã hội</h3>
            <div class="flex flex-wrap justify-center gap-4">
              <a href="https://m.me/oscarstudiohanoi" target="_blank" class="studio-social studio-social-messenger">Messenger</a>
              <a href="https://fb.com/oscarstudiohanoi" target="_blank" class="studio-social studio-social-facebook">Facebook</a>
              <a href="mailto:contact@oscarfamily.vn" target="_blank" class="studio-social studio-social-email">Email</a>
              <a href="https://www.youtube.com/@oscarstudiohanoi" target="_blank" class="studio-social studio-social-youtube">YouTube</a>
              <a href="https://www.tiktok.com/@oscarstudio.vn" target="_blank" class="studio-social studio-social-tiktok">TikTok</a>
              <a href="https://zalo.me/0849297957" target="_blank" class="studio-social studio-social-zalo">Zalo</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

const services = [
  {
    title: "Thu Âm Chuyên Nghiệp",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=MIC",
    alt: "Icon thu âm chuyên nghiệp",
    desc: "Hệ thống micro và soundcard hàng đầu (Neumann, AKG, Universal Audio), không gian tiêu âm chuẩn quốc tế, giúp bắt trọn từng sắc thái cảm xúc trong giọng hát của bạn. Lý tưởng cho ca sĩ solo, band nhạc, thu âm quảng cáo, lồng tiếng.",
    border: "border-[#f2c35a]"
  },
  {
    title: "Sản Xuất Âm Nhạc (Làm Nhạc)",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=EQ",
    alt: "Icon sản xuất âm nhạc",
    desc: "Cung cấp dịch vụ <strong class='text-white'>sản xuất âm nhạc</strong> trọn gói từ A-Z. Sáng tác, hòa âm phối khí, mixing và mastering. Biến ý tưởng của bạn thành một bản hit thực thụ với sự tư vấn của các producer giàu kinh nghiệm.",
    border: "border-[#f2c35a]"
  },
  {
    title: "Quay MV Chuyên Nghiệp",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=MV",
    alt: "Icon quay MV",
    desc: "Không chỉ dừng lại ở âm thanh, chúng tôi còn giúp bạn <strong class='text-white'>quay MV</strong> ca nhạc. Đội ngũ đạo diễn, quay phim sáng tạo sẽ xây dựng kịch bản độc đáo, hình ảnh ấn tượng để sản phẩm của bạn tiếp cận khán giả một cách trọn vẹn nhất.",
    border: "border-[#f2c35a]"
  },
  {
    title: "Mixing & Mastering",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=MIX",
    alt: "Icon Mixing & Mastering",
    desc: "Sử dụng các công cụ analog và digital hàng đầu để xử lý, cân bằng và tối ưu hóa bản thu. Mang lại sản phẩm cuối cùng có âm thanh sạch sẽ, mạnh mẽ, và đạt chuẩn phát hành trên mọi nền tảng.",
    border: "border-[#f2c35a]"
  },
  {
    title: "Hòa Âm Phối Khí",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=NOTE",
    alt: "Icon Hòa âm phối khí",
    desc: "Tạo nên 'linh hồn' cho ca khúc của bạn. Các producer sẽ lựa chọn và sắp xếp các loại nhạc cụ, tạo nên một bản hòa âm đầy màu sắc, đúng với tinh thần bài hát và xu hướng âm nhạc hiện đại.",
    border: "border-[#f2c35a]"
  },
  {
    title: "Sáng Tác Ca Khúc",
    icon: "https://placehold.co/80x80/f2c35a/000000?text=PEN",
    alt: "Icon Sáng tác",
    desc: "Nếu bạn có ý tưởng nhưng chưa thể viết thành lời hoặc giai điệu, đội ngũ nhạc sĩ của chúng tôi sẵn sàng giúp bạn tạo ra một ca khúc độc quyền, mang đậm dấu ấn cá nhân của bạn.",
    border: "border-[#f2c35a]"
  }
];

const pageTitle = 'Oscar Studio - Phòng Thu Âm Chuyên Nghiệp tại Hà Nội'
const pageDescription = 'Oscar Studio - Phòng thu âm chuyên nghiệp tại Hà Nội. Cung cấp dịch vụ thu âm, sản xuất âm nhạc, hoà âm phối khí, quay MV. Không gian sáng tạo, thiết bị hiện đại.'
const pageUrl = 'https://oscarfamily.vn/studio'
const ogImage = 'https://oscarfamily.vn/img/oscar-studio-desk.jpg'

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'MusicRecordingStudio',
  name: 'Oscar Studio',
  url: pageUrl,
  logo: 'https://oscarfamily.vn/favicon.png',
  image: ogImage,
  description: pageDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Số 9, ngách 78, ngõ 169, Hoàng Mai, Hoàng Văn Thụ',
    addressLocality: 'Hoàng Mai',
    addressRegion: 'Hà Nội',
    postalCode: '11700',
    country: 'VN'
  },
  telephone: '+84849297957',
  priceRange: 'VND',
  openingHours: 'Mo-Su 08:00-22:00',
  sameAs: [
    'https://fb.com/oscarstudiohanoi',
    'https://www.youtube.com/@oscarstudiohanoi',
    'https://www.tiktok.com/@oscarstudio.vn'
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
    { property: 'og:site_name', content: 'Oscar Studio' },
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
:root {
  --highlight-color: #c77ed4;
  --background-color: #000;
  --text-color: #fff;
  --text-muted: #c3afc8;
  --link-color: #c77ed4;
  --link-active-color: #c3afc8;
  --card-bg: #18141c;
}

.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.studio-root {
  background: var(--background-color);
  color: var(--text-color);
}

.studio-header {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}

.studio-link {
  color: var(--link-color);
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 999px;
}

.studio-link:hover {
  color: var(--link-active-color);
  background: rgba(199, 126, 212, 0.08);
}

.studio-link-cta {
  background: var(--highlight-color);
  color: var(--background-color);
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(199, 126, 212, 0.15);
}

.studio-link-cta:hover {
  background: var(--link-active-color);
  color: var(--background-color);
}

.studio-hero {
  /* background: url('/img/oscar-studio-desk.jpg') center/cover no-repeat; */
  background: url('/img/oscar-studio-render.jpg') center/cover no-repeat;
  min-height: 70vh;
}

.text-highlight {
  color: var(--highlight-color);
}

.text-text {
  color: var(--text-color);
}

.text-text-muted {
  color: var(--text-muted);
}

.bg-background {
  background: var(--background-color);
}

.bg-card {
  background: var(--card-bg);
}

.studio-cta {
  background: var(--highlight-color);
  color: var(--background-color);
  border: none;
  box-shadow: 0 2px 8px rgba(199, 126, 212, 0.15);
  transition: background 0.2s, color 0.2s;
}

.studio-cta:hover {
  background: var(--link-active-color);
  color: var(--background-color);
}

.studio-footer {
  background: var(--background-color);
}

.studio-social {
  padding: 0.5rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
  color: var(--text-color);
  background: var(--card-bg);
  box-shadow: 0 2px 8px rgba(199, 126, 212, 0.08);
}

.studio-social-messenger {
  background: #0078ff;
}

.studio-social-facebook {
  background: #4267B2;
}

.studio-social-email {
  background: var(--card-bg);
  color: var(--highlight-color);
}

.studio-social-youtube {
  background: #e52d27;
}

.studio-social-tiktok {
  background: #000;
}

.studio-social-zalo {
  background: #008fe5;
}

.studio-social:hover {
  background: var(--highlight-color);
  color: var(--background-color);
}
</style>
