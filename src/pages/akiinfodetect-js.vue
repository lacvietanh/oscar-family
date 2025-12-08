<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <!-- HEADER + TINH TÚY NỔI BẬT -->
    <header class="text-center mb-12">
      <figure class="mb-8">
        <img src="/img/AkiNet-akivn.net.png" alt="aki-info-detect - JavaScript library phát hiện thông tin thiết bị, trình duyệt, phần cứng" class="w-full h-auto rounded-lg shadow-2xl object-cover aspect-video">
        <figcaption class="text-center text-sm mt-4 text-gray-400 italic">Library JavaScript hiện đại cho phát hiện thiết bị thông minh - nền tảng sản phẩm AkiNet.</figcaption>
      </figure>
      
      <h1 class="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
        Ra mắt <span class="highlight-keyword">aki-info-detect</span>: <br class="hidden md:block" />
        JavaScript Library Phát Hiện Thiết Bị Thông Minh TRONG 5S
      </h1>
      
      <div class="text-sm text-gray-400 mb-6 flex justify-center items-center gap-4">
        <span class="flex items-center gap-2"><i class="fas fa-user-edit"></i> Lạc Việt Anh</span>
        <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
        <span class="flex items-center gap-2"><i class="fas fa-calendar-alt"></i> 08/12/2024</span>
      </div>

      <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        <strong>AkiNet</strong> tự hào giới thiệu <strong>aki-info-detect</strong> - thư viện JavaScript nhẹ nhàng, mạnh mẽ để phát hiện thông tin thiết bị, trình duyệt, phần cứng và mạng trong môi trường web. Hỗ trợ Client Hints API, tree-shakeable, tối ưu hiệu năng, được xây dựng bởi <strong>Lạc Việt Anh</strong> - Founder AkiNet và tác giả của hệ sinh thái Oscar Family, Oscar Studio.
      </p>

      <!-- TINH TÚY NỔI BẬT - ĐIỂM MẠNH NHẤT -->
      <div class="highlight-section mt-10 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
        <h2 class="text-2xl font-black text-yellow-500 mb-8 uppercase tracking-wider">⚡ Tính Năng Vượt Trội ⚡</h2>
        
        <div class="grid md:grid-cols-4 gap-6 text-left">
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔍</div>
            <h3 class="font-bold text-white mb-2">Phát Hiện Sâu</h3>
            <p class="text-xs text-gray-400">Browser, OS, CPU, GPU, RAM với Client Hints API. Hỗ trợ Apple Silicon (M1-MX).</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
            <h3 class="font-bold text-white mb-2">Siêu Nhẹ</h3>
            <p class="text-xs text-gray-400">Tree-shakeable, minified. Chỉ import những gì cần thiết, tối ưu bundle size.</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h3 class="font-bold text-white mb-2">Network Info</h3>
            <p class="text-xs text-gray-400">Public IP, ISP, country code với caching thông minh 1 giờ.</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔌</div>
            <h3 class="font-bold text-white mb-2">Modern APIs</h3>
            <p class="text-xs text-gray-400">Battery, Geolocation, Screen info, Connection với API chuẩn mới nhất.</p>
          </div>
        </div>
        
        <div class="mt-8">
          <a href="#cai-dat" class="cta-button inline-flex items-center gap-2 group">
            <span>CÀI ĐẶT NGAY</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </header>

    <!-- NỘI DUNG CHÍNH -->
    <div class="space-y-16">
      
      <!-- SECTION 1: TẦM NHÌN & SỨ MỆNH -->
      <section id="tam-nhin" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">01</span>
          <h2 class="text-3xl font-bold text-white">Từ Producer Âm Nhạc đến JavaScript Developer</h2>
        </div>
        
        <div class="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-yellow-500">
          <p class="text-lg mb-6">
            <strong>Lạc Việt Anh</strong> - Founder <strong>AkiNet</strong>, Chief Product Architect, đồng thời là tác giả của nhiều dự án công nghệ phục vụ cộng đồng sáng tạo nội dung tại Việt Nam: <em>akivn.net, lamnhac.net, vstshop.com, Oscar Family, Oscar Studio</em>.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 class="font-bold text-yellow-500 mb-2 uppercase text-sm tracking-wide">Khởi đầu từ âm nhạc</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Xuất phát điểm là nhạc công keyboard (2009), hòa âm phối khí chuyên nghiệp (2014), Việt Anh thấu hiểu nhu cầu về công cụ và workflow hiệu quả trong quá trình sáng tạo.
              </p>
            </div>
            <div>
              <h4 class="font-bold text-blue-500 mb-2 uppercase text-sm tracking-wide">Chuyển hướng công nghệ</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Từ 2018, tự học lập trình để xây dựng các công cụ phục vụ cộng đồng producer, content creator. Mỗi sản phẩm đều xuất phát từ nhu cầu thực tế và giải quyết vấn đề cụ thể.
              </p>
            </div>
          </div>

          <div class="bg-gray-800/70 p-6 rounded-xl border border-purple-500/30 mb-6">
            <h4 class="font-bold text-purple-400 mb-3 uppercase text-sm tracking-wide flex items-center gap-2">
              <span class="text-xl">💡</span> Tại Sao Tạo Ra aki-info-detect?
            </h4>
            <p class="text-gray-300 text-sm leading-relaxed mb-3">
              Trong quá trình phát triển các web app thuộc hệ sinh thái AkiNet, nhu cầu về một thư viện phát hiện thiết bị <strong>chính xác, nhẹ, hiện đại</strong> trở nên cấp thiết. Các library hiện có hoặc quá nặng, hoặc không hỗ trợ Client Hints API, hoặc không có khả năng phát hiện phần cứng mới (Apple Silicon M1-MX).
            </p>
            <p class="text-gray-300 text-sm leading-relaxed">
              <span class="highlight-keyword">aki-info-detect</span> được sinh ra để giải quyết đúng những vấn đề này - một library hoàn toàn mới, tối ưu cho thời đại web hiện đại, với khả năng mở rộng và tùy biến cao.
            </p>
          </div>

          <p class="text-gray-300 italic border-t border-gray-700 pt-4 mt-4">
            "Mỗi công cụ tôi tạo ra đều hướng đến mục tiêu giúp developer và creator làm việc nhanh hơn, chính xác hơn, tập trung vào giá trị cốt lõi thay vì mất thời gian với các vấn đề kỹ thuật căn bản." — <span class="text-white not-italic font-semibold">Lạc Việt Anh</span>
          </p>
        </div>
      </section>

      <!-- SECTION 2: TÍNH NĂNG CHI TIẾT -->
      <section id="tinh-nang" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">02</span>
          <h2 class="text-3xl font-bold text-white">Tính Năng Chi Tiết - Tất Cả Trong Một</h2>
        </div>

        <div class="space-y-6">
          <!-- Browser Detection -->
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500">
            <h3 class="font-bold text-xl mb-3 text-blue-400 flex items-center gap-2">
              <span>🌐</span> Browser Detection
            </h3>
            <p class="text-gray-300 text-sm mb-3">
              Phát hiện tên trình duyệt, phiên bản, rendering engine (Blink, Webkit, Gecko). Hỗ trợ Chrome, Firefox, Safari, Edge, Opera và các trình duyệt ít phổ biến hơn.
            </p>
            <code class="block bg-gray-900 p-3 rounded text-xs text-green-400">
              info.browser // "Chrome 120", "Safari 17"
            </code>
          </div>

          <!-- OS Detection -->
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500">
            <h3 class="font-bold text-xl mb-3 text-green-400 flex items-center gap-2">
              <span>💻</span> OS Detection với Version
            </h3>
            <p class="text-gray-300 text-sm mb-3">
              Nhận dạng hệ điều hành: Windows, macOS, Linux, iOS, Android kèm theo số phiên bản chi tiết (ví dụ: macOS 14.2.0, Windows 11).
            </p>
            <code class="block bg-gray-900 p-3 rounded text-xs text-green-400">
              info.os.string // "macOS 14.2.0", "Windows 11"
            </code>
          </div>

          <!-- Hardware Info -->
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-purple-500">
            <h3 class="font-bold text-xl mb-3 text-purple-400 flex items-center gap-2">
              <span>⚙️</span> Hardware Detection (CPU, GPU, RAM)
            </h3>
            <p class="text-gray-300 text-sm mb-3">
              Phát hiện số lõi CPU, kiến trúc (arm64, x86_64), RAM (GB), GPU. <strong>Đặc biệt:</strong> Hỗ trợ Apple Silicon với khả năng nhận dạng M1, M2, M3, M4... MX một cách tương lai hóa (future-proof).
            </p>
            <pre class="bg-gray-900 p-3 rounded text-xs text-green-400 overflow-x-auto"><code>info.CPU // "Apple Silicon", "Intel", "AMD"
info.GPU // "Apple M2 Pro", "NVIDIA GeForce RTX 4090"
info.RAM // 16 (GB)</code></pre>
          </div>

          <!-- Network Info -->
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-500">
            <h3 class="font-bold text-xl mb-3 text-yellow-400 flex items-center gap-2">
              <span>🌍</span> Network Info với Caching
            </h3>
            <p class="text-gray-300 text-sm mb-3">
              Lấy thông tin IP công khai, ISP (nhà mạng), country code (mã quốc gia ISO 3166-1). Sử dụng cơ chế cache 1 giờ để tối ưu hiệu năng và giảm thiểu request.
            </p>
            <code class="block bg-gray-900 p-3 rounded text-xs text-green-400">
              await info.getNetworkInfo() // { IP, ISP, country }
            </code>
          </div>

          <!-- Modern APIs -->
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-red-500">
            <h3 class="font-bold text-xl mb-3 text-red-400 flex items-center gap-2">
              <span>🔋</span> Modern APIs: Battery, Geolocation, Screen
            </h3>
            <ul class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-yellow-500">›</span>
                <span><strong>Battery Status:</strong> Trạng thái sạc, mức pin, thời gian sạc/xả</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-500">›</span>
                <span><strong>Geolocation:</strong> Lấy tọa độ với quyền người dùng</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-500">›</span>
                <span><strong>Screen Info:</strong> Độ phân giải, pixel ratio, orientation</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-500">›</span>
                <span><strong>Connection:</strong> Loại kết nối mạng, tốc độ ước tính</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3: CÀI ĐẶT & SỬ DỤNG -->
      <section id="cai-dat" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">03</span>
          <h2 class="text-3xl font-bold text-white">Cài Đặt & Sử Dụng Trong 5S</h2>
        </div>

        <div class="space-y-6">
          <!-- Installation -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-white">📦 Cài đặt qua npm</h3>
            <code class="block bg-gray-800 p-4 rounded text-sm text-green-400 mb-3">
              npm install aki-info-detect
            </code>
            <p class="text-gray-400 text-xs">
              Hỗ trợ cả yarn và pnpm. Library hỗ trợ cả ES Module và UMD.
            </p>
          </div>

          <!-- Quick Start -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-white">⚡ Quick Start</h3>
            <pre class="bg-gray-800 p-4 rounded text-xs text-green-400 overflow-x-auto"><code>import akiInfoDetect from 'aki-info-detect';

const info = await akiInfoDetect();

console.log(info.browser);    // "Chrome 120"
console.log(info.os.string);  // "macOS 14.2.0"
console.log(info.CPU);        // "Apple Silicon"
console.log(info.GPU);        // "Apple M2 Pro"
console.log(info.RAM);        // 16
console.log(info.isMobile);   // false</code></pre>
          </div>

          <!-- CDN Usage -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-white">🌐 Sử dụng qua CDN (Không cần build)</h3>
            <pre class="bg-gray-800 p-4 rounded text-xs text-green-400 overflow-x-auto"><code>&lt;script type="module"&gt;
  import akiInfoDetect from 'https://unpkg.com/aki-info-detect';
  const info = await akiInfoDetect();
  console.log(info);
&lt;/script&gt;</code></pre>
          </div>

          <!-- Tree-shakeable -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-white">🌲 Tree-shakeable: Import chỉ những gì cần</h3>
            <pre class="bg-gray-800 p-4 rounded text-xs text-green-400 overflow-x-auto"><code>import { getNetworkInfo, getScreen, getBattery } from 'aki-info-detect';

const screen = getScreen();
const battery = await getBattery();
const network = await getNetworkInfo();</code></pre>
            <p class="text-gray-400 text-xs mt-3">
              Giảm bundle size bằng cách chỉ import các function cần thiết.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 4: USE CASES -->
      <section id="use-cases" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">04</span>
          <h2 class="text-3xl font-bold text-white">Các Trường Hợp Sử Dụng Thực Tế</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 class="font-bold text-lg mb-3 text-yellow-500">🎨 Dynamic User Interface</h3>
            <p class="text-gray-300 text-sm">
              Điều chỉnh giao diện, tính năng dựa trên thiết bị: hiển thị UI tối ưu cho mobile/desktop, bật/tắt features theo khả năng phần cứng.
            </p>
          </div>

          <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 class="font-bold text-lg mb-3 text-blue-500">📊 Analytics & Logging</h3>
            <p class="text-gray-300 text-sm">
              Thu thập dữ liệu môi trường người dùng để phân tích, debug, tối ưu trải nghiệm. Biết user dùng device nào, OS gì, browser version bao nhiêu.
            </p>
          </div>

          <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 class="font-bold text-lg mb-3 text-green-500">🔄 Feature Fallbacks</h3>
            <p class="text-gray-300 text-sm">
              Tự động cung cấp fallback cho các tính năng không được hỗ trợ trên nền tảng cũ. Ví dụ: Sử dụng video codec khác nhau theo GPU.
            </p>
          </div>

          <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 class="font-bold text-lg mb-3 text-red-500">🛡️ Security & Fraud Detection</h3>
            <p class="text-gray-300 text-sm">
              Phát hiện browser/device giả mạo, bot, crawler. Tăng cường bảo mật bằng cách xác thực fingerprint thiết bị.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 5: INTEGRATION EXAMPLES -->
      <section id="integration" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">05</span>
          <h2 class="text-3xl font-bold text-white">Tích Hợp Với React & Vue</h2>
        </div>

        <div class="space-y-6">
          <!-- React Hook -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-blue-400 flex items-center gap-2">
              <span>⚛️</span> React Hook
            </h3>
            <pre class="bg-gray-800 p-4 rounded text-xs text-green-400 overflow-x-auto"><code>import { useState, useEffect } from 'react';
import akiInfoDetect from 'aki-info-detect';

function useSystemInfo() {
  const [info, setInfo] = useState(null);
  
  useEffect(() => {
    akiInfoDetect().then(setInfo);
  }, []);
  
  return info;
}

function App() {
  const info = useSystemInfo();
  
  if (!info) return &lt;div&gt;Loading...&lt;/div&gt;;
  
  return (
    &lt;div&gt;
      &lt;p&gt;Browser: {info.browser}&lt;/p&gt;
      &lt;p&gt;OS: {info.os.string}&lt;/p&gt;
      &lt;p&gt;GPU: {info.GPU}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
          </div>

          <!-- Vue 3 Composable -->
          <div class="bg-gray-900/50 p-6 rounded-xl">
            <h3 class="font-bold text-xl mb-4 text-green-400 flex items-center gap-2">
              <span>💚</span> Vue 3 Composable
            </h3>
            <pre class="bg-gray-800 p-4 rounded text-xs text-green-400 overflow-x-auto"><code>import { ref, onMounted } from 'vue';
import akiInfoDetect from 'aki-info-detect';

export function useSystemInfo() {
  const info = ref(null);
  
  onMounted(async () => {
    info.value = await akiInfoDetect();
  });
  
  return { info };
}</code></pre>
          </div>
        </div>
      </section>

      <!-- SECTION 6: SO SÁNH -->
      <section id="so-sanh" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">06</span>
          <h2 class="text-3xl font-bold text-white">So Sánh Với Các Library Khác</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-gray-700">
            <thead>
              <tr class="bg-gray-800">
                <th class="p-3 text-left">Tính năng</th>
                <th class="p-3 text-center">aki-info-detect</th>
                <th class="p-3 text-center">Platform.js</th>
                <th class="p-3 text-center">UAParser.js</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Client Hints API</td>
                <td class="p-3 text-center text-green-400">✅</td>
                <td class="p-3 text-center text-red-400">❌</td>
                <td class="p-3 text-center text-red-400">❌</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Apple Silicon Detection</td>
                <td class="p-3 text-center text-green-400">✅ (M1-MX)</td>
                <td class="p-3 text-center text-red-400">❌</td>
                <td class="p-3 text-center text-red-400">❌</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Network Info (IP, ISP)</td>
                <td class="p-3 text-center text-green-400">✅</td>
                <td class="p-3 text-center text-red-400">❌</td>
                <td class="p-3 text-center text-red-400">❌</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Hardware Info (GPU, RAM)</td>
                <td class="p-3 text-center text-green-400">✅</td>
                <td class="p-3 text-center text-yellow-400">Partial</td>
                <td class="p-3 text-center text-red-400">❌</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Tree-shakeable</td>
                <td class="p-3 text-center text-green-400">✅</td>
                <td class="p-3 text-center text-red-400">❌</td>
                <td class="p-3 text-center text-yellow-400">Partial</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Battery/Geolocation API</td>
                <td class="p-3 text-center text-green-400">✅</td>
                <td class="p-3 text-center text-red-400">❌</td>
                <td class="p-3 text-center text-red-400">❌</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Bundle Size (minzipped)</td>
                <td class="p-3 text-center text-green-400">~3KB</td>
                <td class="p-3 text-center text-yellow-400">~5KB</td>
                <td class="p-3 text-center text-yellow-400">~12KB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-xl">
          <h4 class="font-bold text-yellow-400 mb-2">💡 Tại sao chọn aki-info-detect?</h4>
          <p class="text-gray-300 text-sm">
            Được xây dựng từ đầu cho web hiện đại, hỗ trợ Client Hints API chuẩn mới nhất, tối ưu bundle size với tree-shaking, và có khả năng phát hiện phần cứng mới nhất (Apple Silicon M1-MX). Không chỉ là UA parsing, mà là giải pháp toàn diện cho device detection.
          </p>
        </div>
      </section>

      <!-- SECTION 7: FAQ -->
      <section id="faq" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">07</span>
          <h2 class="text-3xl font-bold text-white">Câu Hỏi Thường Gặp (FAQ)</h2>
        </div>

        <div class="space-y-4">
          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Library có miễn phí không?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              <strong>Hoàn toàn miễn phí</strong> và open-source với giấy phép MIT. Bạn có thể sử dụng cho mọi dự án cá nhân và thương mại.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Có hỗ trợ Node.js không?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              Không. <span class="highlight-keyword">aki-info-detect</span> được thiết kế riêng cho môi trường <strong>browser</strong>, vì các API như navigator, screen, battery chỉ tồn tại trên browser.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Làm sao để phát hiện Apple Silicon chính xác?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              Library sử dụng kết hợp User-Agent, Client Hints API và WebGL fingerprinting để phát hiện. Kết quả được verify với GPU renderer string để đảm bảo độ chính xác cao nhất. Hỗ trợ <strong>future-proof</strong> cho cả M1, M2, M3, M4... MX.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Network info có chính xác không? Privacy thế nào?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              Network info được lấy từ <strong>ipapi.co</strong> API (free tier). Dữ liệu được cache 1 giờ để giảm request. Library <strong>không thu thập, không lưu trữ</strong> bất kỳ thông tin cá nhân nào. Hoàn toàn GDPR-compliant.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Có thể sử dụng với TypeScript không?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              <strong>Có</strong>. Library đi kèm với TypeScript declarations (.d.ts) đầy đủ. IntelliSense hoạt động hoàn hảo trong VSCode và các editor khác.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Có ảnh hưởng đến performance không?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              <strong>Không</strong>. Library rất nhẹ (~3KB minzipped), chạy async, không block main thread. Network request được cache và lazy-load. Tree-shakeable để bạn chỉ import những gì cần.
            </p>
          </details>

          <details class="bg-gray-800 p-5 rounded-xl border border-gray-700 group">
            <summary class="font-semibold cursor-pointer text-lg text-white flex items-center">
              Có thể đóng góp vào dự án không?
            </summary>
            <p class="mt-4 text-gray-300 text-sm">
              <strong>Tất nhiên!</strong> Dự án open-source trên GitHub. Pull requests, issues, và feedback đều được hoan nghênh. Repo: <a href="https://github.com/lacvietanh/akiInfoDetect.js" target="_blank" class="text-yellow-500 underline">github.com/lacvietanh/akiInfoDetect.js</a>
            </p>
          </details>
        </div>
      </section>

      <!-- SECTION 8: KẾT LUẬN & LIÊN KẾT -->
      <section id="ket-luan" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">08</span>
          <h2 class="text-3xl font-bold text-white">Kết Luận & Liên Kết Hữu Ích</h2>
        </div>

        <div class="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-yellow-500/30">
          <p class="text-lg mb-6 text-gray-300 leading-relaxed">
            <strong class="text-white">aki-info-detect</strong> là một bước tiến mới trong việc phát hiện thông tin thiết bị trên web. Được xây dựng bởi <strong>Lạc Việt Anh</strong> - Founder <strong>AkiNet</strong>, library này không chỉ là công cụ kỹ thuật, mà còn thể hiện triết lý <em>"công nghệ phục vụ sáng tạo"</em> - làm cho việc phát triển web trở nên dễ dàng, nhanh chóng và chính xác hơn.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gray-800/70 p-5 rounded-xl border border-blue-500/30">
              <h4 class="font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span>🔗</span> Liên kết chính thức
              </h4>
              <ul class="space-y-2 text-sm">
                <li><a href="https://akiinfodetect-js.pages.dev/" target="_blank" class="text-yellow-400 hover:underline">🌐 Demo & Documentation</a></li>
                <li><a href="https://www.npmjs.com/package/aki-info-detect" target="_blank" class="text-yellow-400 hover:underline">📦 npm Package</a></li>
                <li><a href="https://github.com/lacvietanh/akiInfoDetect.js" target="_blank" class="text-yellow-400 hover:underline">💻 GitHub Repository</a></li>
                <li><a href="https://akivn.net" target="_blank" class="text-yellow-400 hover:underline">🌟 AkiNet - Hệ sinh thái</a></li>
              </ul>
            </div>

            <div class="bg-gray-800/70 p-5 rounded-xl border border-green-500/30">
              <h4 class="font-bold text-green-400 mb-3 flex items-center gap-2">
                <span>🏢</span> Về tác giả & AkiNet
              </h4>
              <ul class="space-y-2 text-sm">
                <li><a href="/akinet" class="text-yellow-400 hover:underline">📖 AkiNet - Hệ sinh thái công nghệ</a></li>
                <li><a href="/oscarstudio" class="text-yellow-400 hover:underline">🎵 Oscar Studio - Phòng thu âm</a></li>
                <li><a href="/akiworkflow" class="text-yellow-400 hover:underline">⚙️ AkiWorkflow - Quản lý dự án</a></li>
                <li><a href="/lamnhac" class="text-yellow-400 hover:underline">🎹 LamNhac.net - Cộng đồng</a></li>
              </ul>
            </div>
          </div>

          <p class="text-gray-400 text-sm italic border-t border-gray-700 pt-4">
            AkiNet - nơi công nghệ và nghệ thuật gặp nhau, tạo ra những sản phẩm hữu ích cho cộng đồng sáng tạo Việt Nam.
          </p>
        </div>
      </section>
    </div>

    <!-- FINAL CTA -->
    <div class="text-center mt-16 py-8">
      <a href="https://akiinfodetect-js.pages.dev/" target="_blank" class="cta-button inline-flex items-center gap-3 text-lg">
        <span>🚀 XEM DEMO & TÀI LIỆU</span>
      </a>
      <p class="text-gray-400 mt-4 text-sm">Miễn phí • Open Source • MIT License</p>
      <div class="flex justify-center gap-6 mt-6 text-sm">
        <a href="https://www.npmjs.com/package/aki-info-detect" target="_blank" class="text-yellow-500 hover:underline flex items-center gap-2">
          <span>📦</span> npm
        </a>
        <a href="https://github.com/lacvietanh/akiInfoDetect.js" target="_blank" class="text-yellow-500 hover:underline flex items-center gap-2">
          <span>💻</span> GitHub
        </a>
        <a href="https://akivn.net" target="_blank" class="text-yellow-500 hover:underline flex items-center gap-2">
          <span>🌐</span> AkiNet
        </a>
      </div>
    </div>

    <RelatedPosts exclude-slug="/akiinfodetect-js" />
  </article>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import RelatedPosts from '../components/RelatedPosts.vue';

const title = 'aki-info-detect: JavaScript Library Phát Hiện Thiết Bị - TRONG 5S | AkiNet'
const description = 'Ra mắt aki-info-detect - thư viện JavaScript nhẹ, mạnh mẽ phát hiện browser, OS, hardware, network. Client Hints API, Apple Silicon M1-MX, tree-shakeable. By Lạc Việt Anh - Founder AkiNet.'
const url = 'https://oscarfamily.vn/akiinfodetect-js'
const image = 'https://oscarfamily.vn/img/AkiNet-akivn.net.png'

// TechArticle Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: title,
  description: description,
  image: image,
  author: { 
    '@type': 'Person', 
    name: 'Lạc Việt Anh',
    url: 'https://akivn.net',
    jobTitle: 'Founder & Chief Product Architect',
    worksFor: {
      '@type': 'Organization',
      name: 'AkiNet'
    }
  },
  publisher: { 
    '@type': 'Organization', 
    name: 'AkiNet', 
    logo: { 
      '@type': 'ImageObject', 
      url: 'https://oscarfamily.vn/img/AkiNet-akivn.net.png' 
    }
  },
  datePublished: '2024-12-08',
  dateModified: '2024-12-08',
  mainEntityOfPage: { 
    '@type': 'WebPage', 
    '@id': url 
  },
  about: [
    { '@type': 'Thing', name: 'JavaScript Library' },
    { '@type': 'Thing', name: 'Device Detection' },
    { '@type': 'Thing', name: 'Browser Detection' },
    { '@type': 'Thing', name: 'Client Hints API' }
  ],
  keywords: 'aki-info-detect, JavaScript library, device detection, browser detection, hardware detection, Client Hints API, Apple Silicon, AkiNet, Lạc Việt Anh'
}

// SoftwareApplication Schema
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'aki-info-detect',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description: 'Lightweight JavaScript library for detecting device, browser, hardware, and network information with Client Hints API support',
  author: {
    '@type': 'Person',
    name: 'Lạc Việt Anh'
  },
  softwareVersion: '2.0.1',
  downloadUrl: 'https://www.npmjs.com/package/aki-info-detect',
  screenshot: image,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1'
  }
}

// Person Schema
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lạc Việt Anh',
  url: 'https://akivn.net',
  jobTitle: 'Founder & Chief Product Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'AkiNet',
    url: 'https://akivn.net'
  },
  sameAs: [
    'https://github.com/lacvietanh',
    'https://www.npmjs.com/~lacvietanh'
  ],
  knowsAbout: ['JavaScript', 'Web Development', 'Music Production', 'Audio Engineering', 'System Architecture']
}

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AkiNet',
  url: 'https://akivn.net',
  logo: 'https://oscarfamily.vn/img/AkiNet-akivn.net.png',
  founder: {
    '@type': 'Person',
    name: 'Lạc Việt Anh'
  },
  description: 'Hệ sinh thái công nghệ hỗ trợ sản xuất âm nhạc & media tại Việt Nam',
  sameAs: [
    'https://oscarfamily.vn',
    'https://github.com/lacvietanh'
  ]
}

// FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Library có miễn phí không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoàn toàn miễn phí và open-source với giấy phép MIT. Bạn có thể sử dụng cho mọi dự án cá nhân và thương mại.'
      }
    },
    {
      '@type': 'Question',
      name: 'Có hỗ trợ Node.js không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Không. aki-info-detect được thiết kế riêng cho môi trường browser, vì các API như navigator, screen, battery chỉ tồn tại trên browser.'
      }
    },
    {
      '@type': 'Question',
      name: 'Làm sao để phát hiện Apple Silicon chính xác?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Library sử dụng kết hợp User-Agent, Client Hints API và WebGL fingerprinting để phát hiện. Kết quả được verify với GPU renderer string để đảm bảo độ chính xác cao nhất. Hỗ trợ future-proof cho cả M1, M2, M3, M4... MX.'
      }
    },
    {
      '@type': 'Question',
      name: 'Network info có chính xác không? Privacy thế nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Network info được lấy từ ipapi.co API (free tier). Dữ liệu được cache 1 giờ để giảm request. Library không thu thập, không lưu trữ bất kỳ thông tin cá nhân nào. Hoàn toàn GDPR-compliant.'
      }
    },
    {
      '@type': 'Question',
      name: 'Có thể sử dụng với TypeScript không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Có. Library đi kèm với TypeScript declarations (.d.ts) đầy đủ. IntelliSense hoạt động hoàn hảo trong VSCode và các editor khác.'
      }
    },
    {
      '@type': 'Question',
      name: 'Có ảnh hưởng đến performance không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Không. Library rất nhẹ (~3KB minzipped), chạy async, không block main thread. Network request được cache và lazy-load. Tree-shakeable để bạn chỉ import những gì cần.'
      }
    }
  ]
}

const schemas = [articleSchema, softwareSchema, personSchema, organizationSchema, faqSchema]

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'aki-info-detect, JavaScript library, device detection, browser detection, hardware detection, Client Hints API, Apple Silicon, tree-shakeable, network info, GPU detection, AkiNet, Lạc Việt Anh, Oscar Family, Oscar Studio, phát hiện thiết bị, thư viện JavaScript, TRONG 5S' },
    { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
    { name: 'author', content: 'Lạc Việt Anh' },
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Oscar Family' },
    { property: 'og:locale', content: 'vi_VN' },
    { property: 'article:published_time', content: '2024-12-08T08:00:00+07:00' },
    { property: 'article:modified_time', content: '2024-12-08T08:00:00+07:00' },
    { property: 'article:author', content: 'Lạc Việt Anh' },
    { property: 'article:section', content: 'Technology' },
    { property: 'article:tag', content: 'JavaScript' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:creator', content: '@lacvietanh' }
  ],
  link: [
    { rel: 'canonical', href: url }
  ],
  script: schemas.map(s => ({ 
    type: 'application/ld+json', 
    innerHTML: JSON.stringify(s) 
  }))
})
</script>

<style scoped>
.seo-article { 
  color: #fff; 
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.text-muted { 
  color: #c3afc8; 
}

/* Keyword highlight - Gradient text */
.highlight-keyword {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}

/* Highlight Section - Glassmorphism */
.highlight-section {
  background: linear-gradient(180deg, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.8));
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

/* Hover card - Smooth lift */
.hover-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

/* CTA Button - Gradient + Hover scale */
.cta-button {
  background: linear-gradient(135deg, #fbbf24, #d97706);
  color: #000;
  font-weight: 800;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
  display: inline-block;
  text-decoration: none;
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 15px 35px -5px rgba(245, 158, 11, 0.6);
}

/* FAQ Interactive - Arrow rotate */
details > summary { 
  list-style: none;
  transition: color 0.3s;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::before {
  content: '▶';
  color: #fbbf24;
  margin-right: 12px;
  transition: transform 0.3s;
  display: inline-block;
}

details[open] > summary::before { 
  transform: rotate(90deg); 
}

details > summary:hover {
  color: #fbbf24;
}

/* Responsive */
@media (max-width: 768px) {
  .hover-card:hover { 
    transform: none;
  }
  
  .highlight-section { 
    padding: 1.5rem; 
  }

  h1 {
    font-size: 2rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 0.875rem;
  }
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Code blocks */
code {
  font-family: 'Courier New', monospace;
}

pre code {
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
