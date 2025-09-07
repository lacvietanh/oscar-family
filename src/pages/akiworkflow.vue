<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <header class="mb-10">
      <h1 class="text-4xl font-black mb-4 leading-tight">
        AkiWorkflow - Nền tảng quản lý quy trình sản xuất âm nhạc, project & asset cho Producer, Studio, Artist
      </h1>
      <p class="text-lg text-muted">
        AkiWorkflow là công cụ (platform) giúp chuẩn hóa <strong>workflow sản xuất âm nhạc</strong> từ giai đoạn ý tưởng, arrangement, thu âm, mixing, mastering đến phát hành. Bài viết này tham khảo công năng tại <strong>akiworkflow.com</strong> & <strong>akiworkflow.pages.dev</strong>, tối ưu SEO cho cụm từ: AkiWorkflow, quản lý dự án âm nhạc, music production workflow tool, track sheet, stem management, producer tool Việt Nam.
      </p>
    </header>

    <section class="space-y-8">
      <h2 class="text-2xl font-bold">1. AkiWorkflow giải quyết vấn đề gì?</h2>
      <p>
        Thực tế nhiều producer / studio lưu trữ file rời rạc: phiên bản beat, vocal take, stems, preset, lyric, artwork, invoice… nằm ở nhiều thư mục. Mất thời gian tìm kiếm, dễ thất lạc, khó cộng tác. <strong>AkiWorkflow</strong> tập trung hóa: <em>Project → Phase → Task → Asset → Version</em> dưới một cấu trúc logic + gắn metadata chuẩn (BPM, key, mood, version tag, release status).</p>

      <h2 class="text-2xl font-bold">2. Tính năng chính (Feature Set)</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Project Dashboard:</strong> tổng quan tiến độ, trạng thái từng bài.</li>
        <li><strong>Track Sheet:</strong> liệt kê instrument layer, vocal track, edit note.</li>
        <li><strong>Stem & Version Management:</strong> upload + tagging + version diff.</li>
        <li><strong>Task Board Kanban:</strong> assign, deadline, priority, comment real-time.</li>
        <li><strong>Reference Library:</strong> lưu reference track / mix note.</li>
        <li><strong>Release Checklist:</strong> ISRC, artwork, lyric sync, loudness verify.</li>
        <li><strong>AI Assist (định hướng):</strong> key detection, BPM detect, vocal chain template, mix feedback gợi ý.</li>
        <li><strong>Role & Permission:</strong> chia quyền artist, producer, khách hàng.</li>
      </ul>

      <h2 class="text-2xl font-bold">3. Đối tượng sử dụng</h2>
      <table class="w-full text-sm md:text-base border border-gray-700">
        <thead><tr class="bg-gray-800"><th class="p-2">Nhóm</th><th class="p-2">Mục tiêu</th><th class="p-2">Lợi ích</th></tr></thead>
        <tbody>
          <tr class="border-t border-gray-700"><td class="p-2">Producer Freelance</td><td class="p-2">Quản lý đa dự án</td><td class="p-2">Giảm lộn xộn file</td></tr>
          <tr class="border-t border-gray-700"><td class="p-2">Studio</td><td class="p-2">Phân chia nhân sự</td><td class="p-2">Theo dõi KPI</td></tr>
          <tr class="border-t border-gray-700"><td class="p-2">Artist Indie</td><td class="p-2">Tối ưu quy trình phát hành</td><td class="p-2">Checklist rõ ràng</td></tr>
          <tr class="border-t border-gray-700"><td class="p-2">Label nhỏ</td><td class="p-2">Điều phối pipeline</td><td class="p-2">Minh bạch tiến độ</td></tr>
        </tbody>
      </table>

      <h2 class="text-2xl font-bold">4. Luồng làm việc mẫu AkiWorkflow</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li>Tạo project: khai báo tên bài, tempo, key, style.</li>
        <li>Thêm phase: Pre-Production, Production, Mixing, Mastering, Release.</li>
        <li>Upload stems & version: đánh tag v1, v2, final.</li>
        <li>Tạo task: thu vocal chính, chỉnh lyric, thêm ambient layer…</li>
        <li>Thêm reference track để so A/B.</li>
        <li>Checklist phát hành: artwork 3000x3000, loudness -14 LUFS, metadata.</li>
        <li>Đóng dự án & lưu archive.</li>
      </ol>

      <h2 class="text-2xl font-bold">5. Từ khóa SEO mục tiêu</h2>
      <p>"AkiWorkflow", "music production workflow tool", "quản lý dự án âm nhạc", "producer tool", "stem management", "track sheet online", "quản lý version bài hát", "release checklist DSP".</p>

      <h2 class="text-2xl font-bold">6. FAQ</h2>
      <details class="bg-gray-800 p-4 rounded"><summary class="font-semibold">Có đồng bộ cloud không?</summary><p>Dự kiến hỗ trợ integration S3 / Wasabi.</p></details>
      <details class="bg-gray-800 p-4 rounded"><summary class="font-semibold">Có mobile app?</summary><p>Roadmap 2026.</p></details>
      <details class="bg-gray-800 p-4 rounded"><summary class="font-semibold">Có AI gợi ý phối?</summary><p>Đang nghiên cứu pattern gợi ý arrangement.</p></details>

      <h2 class="text-2xl font-bold">7. Kết luận</h2>
      <p>
        <strong>AkiWorkflow</strong> hướng tới trở thành chuẩn nền tảng <strong>workflow sản xuất âm nhạc</strong> tại Việt Nam: tập trung – minh bạch – tối ưu – thông minh. Theo dõi để nhận bản beta sớm.
      </p>
    </section>

    <RelatedPosts exclude-slug="/akiworkflow" />
  </article>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import RelatedPosts from '../components/RelatedPosts.vue';

const title = 'AkiWorkflow - Nền tảng quản lý workflow sản xuất âm nhạc, project, stem, release checklist'
const description = 'AkiWorkflow: quản lý dự án âm nhạc, track sheet, stem version, task, release checklist cho producer, studio, artist. Công cụ workflow sản xuất âm nhạc chuẩn hóa.'
const url = 'https://oscarfamily.vn/akiworkflow'
const image = 'https://oscarfamily.vn/img/AkiWF-GrCover2025.png'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AkiWorkflow',
  applicationCategory: 'MusicProduction',
  operatingSystem: 'Web',
  description,
  url,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'VND' }
}

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'AkiWorkflow, workflow sản xuất âm nhạc, music production workflow, quản lý dự án âm nhạc, stem management, track sheet, release checklist, producer tool' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ],
  link: [ { rel: 'canonical', href: url } ],
  script: [ { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) } ]
})
</script>

<style scoped>
.seo-article { color:#fff; }
.text-muted { color:#c3afc8; }
body { background:#000; }
</style>
