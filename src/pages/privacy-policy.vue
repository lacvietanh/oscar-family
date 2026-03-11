<template>
  <div class="min-h-screen bg-[#121212] text-[#E0E0E0] font-montserrat flex flex-col">
    <header class="fixed w-full z-50 shadow-lg bg-black/70 backdrop-blur">
      <div class="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/" class="text-[#f2c35a] font-bold text-xl uppercase tracking-wider">Oscar Entertainment</a>
      </div>
    </header>

    <main class="flex-1 max-w-4xl mx-auto px-6 py-24">
      <h1 class="text-3xl md:text-4xl font-black uppercase mb-8 text-[#f2c35a] tracking-widest">Chính sách bảo mật</h1>
      <p class="text-gray-400 mb-6 text-sm">Cập nhật lần cuối: tháng 3 năm 2025</p>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">1. Thông tin chúng tôi thu thập</h2>
        <p class="text-gray-300 leading-relaxed">
          Oscar Entertainment ("chúng tôi") có thể thu thập các thông tin cá nhân mà bạn tự nguyện cung cấp khi liên hệ hoặc đăng ký dịch vụ, bao gồm họ tên, địa chỉ email, số điện thoại và nội dung tin nhắn. Chúng tôi cũng có thể thu thập dữ liệu kỹ thuật không định danh như loại trình duyệt, địa chỉ IP và thời gian truy cập thông qua các công cụ phân tích web.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">2. Mục đích sử dụng thông tin</h2>
        <ul class="list-disc ml-6 text-gray-300 leading-relaxed space-y-2">
          <li>Phản hồi yêu cầu, đặt lịch và tư vấn dịch vụ.</li>
          <li>Gửi thông tin cập nhật, chương trình khuyến mãi (nếu bạn đã đồng ý).</li>
          <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng trên website.</li>
          <li>Tuân thủ các nghĩa vụ pháp lý.</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">3. Chia sẻ thông tin</h2>
        <p class="text-gray-300 leading-relaxed">
          Chúng tôi không bán, trao đổi hay chuyển giao thông tin cá nhân của bạn cho bên thứ ba, ngoại trừ các trường hợp: (i) được sự đồng ý của bạn; (ii) cần thiết để cung cấp dịch vụ bạn yêu cầu; (iii) theo yêu cầu của pháp luật.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">4. Bảo mật dữ liệu</h2>
        <p class="text-gray-300 leading-relaxed">
          Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin của bạn khỏi truy cập trái phép, mất mát hoặc tiết lộ. Tuy nhiên, không có phương thức truyền dữ liệu qua internet nào là hoàn toàn an toàn tuyệt đối.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">5. Cookie</h2>
        <p class="text-gray-300 leading-relaxed">
          Website của chúng tôi có thể sử dụng cookie và công nghệ theo dõi tương tự để nâng cao trải nghiệm duyệt web. Bạn có thể tắt cookie trong cài đặt trình duyệt, tuy nhiên một số tính năng của website có thể bị ảnh hưởng.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">6. Liên kết bên thứ ba</h2>
        <p class="text-gray-300 leading-relaxed">
          Website có thể chứa liên kết đến các trang web bên ngoài. Chúng tôi không chịu trách nhiệm về chính sách bảo mật hay nội dung của các trang đó.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">7. Quyền của bạn</h2>
        <p class="text-gray-300 leading-relaxed">
          Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân mà chúng tôi đang lưu giữ. Để thực hiện các quyền này, vui lòng liên hệ chúng tôi qua email bên dưới.
        </p>
      </section>

      <section class="mb-8">
        <h2 class="text-xl font-bold mb-3 text-white">8. Liên hệ</h2>
        <p class="text-gray-300 leading-relaxed">
          Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ:<br>
          <a href="mailto:contact@oscarfamily.vn" class="text-[#f2c35a] hover:underline">contact@oscarfamily.vn</a>
        </p>
      </section>

      <div class="mt-10 pt-6 border-t border-gray-700">
        <a href="/" class="text-[#f2c35a] hover:underline">&larr; Về trang chủ</a>
        &nbsp;&nbsp;
        <a href="/terms-of-service" class="text-[#f2c35a] hover:underline">Điều khoản dịch vụ</a>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const pageTitle = 'Chính sách bảo mật - Oscar Entertainment'
const pageDescription = 'Chính sách bảo mật của Oscar Entertainment. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.'
const pageUrl = 'https://oscarfamily.vn/privacy-policy'

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Oscar Entertainment' },
    { name: 'robots', content: 'index, follow' },
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
  ],
})
</script>
