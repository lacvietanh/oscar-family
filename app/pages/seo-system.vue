<template>
  <article class="seo-article font-montserrat px-6 py-12 max-w-5xl mx-auto">
    <!-- HEADER + TINH TÚY NỔI BẬT -->
    <header class="text-center mb-12">
      <figure class="mb-8">
        <img src="/img/seo-check.png" alt="Hệ thống SEO Automation Oscar Family - kiểm tra offline không cần deploy" class="w-full h-auto rounded-lg shadow-2xl object-cover aspect-video">
        <figcaption class="text-center text-sm mt-4 text-gray-400 italic">CheckSEO Offline: Kiểm tra toàn bộ SEO ngay trên localhost, zero lỗi lên production.</figcaption>
      </figure>
      
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-normal">
        Hệ thống <span class="highlight-keyword">CHECKSEO OFFLINE</span> <br class="hidden md:block" />
        Kiểm Tra SEO Không Cần Deploy TRONG 5S
      </h1>
      
      <div class="text-sm text-gray-400 mb-6 flex justify-center items-center gap-4">
        <span class="flex items-center gap-2"><i class="fas fa-user-edit"></i> Lạc Việt Anh</span>
        <span class="w-1 h-1 bg-gray-600 rounded-full"></span>
        <span class="flex items-center gap-2"><i class="fas fa-calendar-alt"></i> 30/11/2025</span>
      </div>

      <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Khác biệt hoàn toàn: kiểm tra SEO <strong>trên localhost</strong>, không cần deploy production. Tự động validate 100% meta tags, JSON-LD, images alt text với scoring system 0-100. Chặn deploy nếu phát hiện lỗi.
      </p>

      <!-- TINH TÚY NỔI BẬT - ĐIỂM MẠNH NHẤT -->
      <div class="highlight-section mt-10 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
        <h2 class="text-2xl font-black text-yellow-500 mb-8 uppercase tracking-wider">⚡ Khác Biệt Hoàn Toàn ⚡</h2>
        
        <div class="grid md:grid-cols-4 gap-6 text-left">
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 class="font-bold text-white mb-2">Zero Lên Production</h3>
            <p class="text-xs text-gray-400">Chặn deploy nếu SEO score < 100. Không bao giờ lỗi trên production.</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📍</div>
            <h3 class="font-bold text-white mb-2">Localhost /checkseo</h3>
            <p class="text-xs text-gray-400">Route chỉ dành cho dev, hiển thị report trực quan ngay trên trình duyệt.</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🔌</div>
            <h3 class="font-bold text-white mb-2">Offline 100%</h3>
            <p class="text-xs text-gray-400">Validate JSON-LD với schema.org context cached. Không cần internet.</p>
          </div>
          
          <div class="hover-card bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all group">
            <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 class="font-bold text-white mb-2">Auto Sitemap</h3>
            <p class="text-xs text-gray-400">Scan thư mục dist/ tự động tạo sitemap.xml sau mỗi lần build.</p>
          </div>
        </div>
        
        <div class="mt-8">
          <a href="#cong-nghe" class="cta-button inline-flex items-center gap-2 group">
            <span>TÌM HIỂU CÁCH HOẠT ĐỘNG</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </header>

    <!-- NỘI DUNG CHÍNH -->
    <div class="space-y-16">
      
      <!-- SECTION 1: CÂU CHUYỆN -->
      <section id="cau-chuyen" class="scroll-mt-20">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">01</span>
          <h2 class="text-3xl font-bold text-white">Từ Nhạc Công đến Kiến Trúc Sư Hệ Thống</h2>
        </div>
        
        <div class="bg-gray-900/50 p-8 rounded-2xl border-l-4 border-yellow-500">
          <p class="text-lg mb-6">
            <strong>Lạc Việt Anh</strong> không chỉ là một lập trình viên. Anh là <strong>Founder AkiNet</strong> và <strong>Chief Product Architect</strong> đứng sau thành công của hệ sinh thái <em>lamnhac.net, akivn.net, vstshop.com</em>.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 class="font-bold text-yellow-500 mb-2 uppercase text-sm tracking-wide">Khởi nguồn đam mê</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Xuất thân là nhạc công keyboard (2009) và dấn thân vào con đường hòa âm phối khí chuyên nghiệp từ 2014, Việt Anh thấu hiểu sâu sắc nỗi đau của người làm nghệ thuật: <em>Ý tưởng bay bổng nhưng công cụ lại giới hạn.</em>
              </p>
            </div>
            <div>
              <h4 class="font-bold text-blue-500 mb-2 uppercase text-sm tracking-wide">Bước ngoặt công nghệ</h4>
              <p class="text-gray-300 text-sm leading-relaxed">
                Nhận thấy thị trường thiếu hụt nghiêm trọng các workflow chuẩn, năm 2018, anh tự học lập trình để xây dựng <strong>AkiWorkflow</strong> và cộng đồng <strong>AkiNet</strong>, với sứ mệnh dùng công nghệ để giải phóng sáng tạo.
              </p>
            </div>
          </div>

          <div class="bg-gray-800/70 p-6 rounded-xl border border-purple-500/30 mb-6">
            <h4 class="font-bold text-purple-400 mb-3 uppercase text-sm tracking-wide flex items-center gap-2">
              <span class="text-xl">🔄</span> Lý Do Có Hệ Thống Này
            </h4>
            <p class="text-gray-300 text-sm leading-relaxed mb-3">
              Trong quá trình chế tạo các website, nhu cầu đồng bộ ngày càng lớn vì <strong>có cái thì tinh túy chỗ này có cái thì tinh túy chỗ kia</strong>, rồi các version update mới cũ các kiểu... Để giải quyết vấn đề này, Việt Anh làm việc kết hợp với các AI để <em>cào toàn bộ những cái hay, cái tinh túy của từng dự án</em> ra, mang về gom vào một template chuẩn, từ đó <strong>xả ra mọi dự án</strong> → đảm bảo đồng bộ stack với nhau, tất cả dự án đều có tất cả những cái hay của nhau.
            </p>
            <p class="text-gray-400 text-xs italic">
              Nhân tiện, cái <strong class="text-yellow-400">SEO-system</strong> nhỏ nhỏ này cũng là một trong những "cái hay" đó...
            </p>
          </div>

          <p class="text-gray-300 italic border-t border-gray-700 pt-4 mt-4">
            "Tôi không chỉ vận hành website. Tôi xây dựng các công cụ, app, script để lấp đầy những khoảng trống mà thị trường bỏ quên, giúp mọi người làm việc nhanh hơn, hiệu quả hơn trên máy tính." — <span class="text-white not-italic font-semibold">Lạc Việt Anh</span>
          </p>
        </div>
      </section>

      <!-- SECTION 2: VẤN ĐỀ THỰC TẾ -->
      <section>
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">02</span>
          <h2 class="text-3xl font-bold text-white">Vấn Đề Thực Tế Của SEO Checker Truyền Thống</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-red-500">
            <h3 class="font-bold text-xl mb-4 text-red-400">❌ Các Công Cụ Online (SEMrush, Ahrefs)</h3>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">›</span>
                <span><strong>Phải deploy production</strong> → mất thời gian build + deploy</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">›</span>
                <span><strong>Tốn chi phí</strong> → Subscription hàng tháng $99-$399</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">›</span>
                <span><strong>Phụ thuộc internet</strong> → Không work offline</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">›</span>
                <span><strong>Phát hiện lỗi sau khi live</strong> → User đã thấy lỗi</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <h3 class="font-bold text-xl mb-4 text-green-400">✅ CheckSEO Offline (Oscar Family)</h3>
            <ul class="space-y-3 text-gray-300 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">›</span>
                <span><strong>Check trên localhost</strong> → Chỉ mất 5-10s sau build</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">›</span>
                <span><strong>Miễn phí 100%</strong> → Open source, không giới hạn</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">›</span>
                <span><strong>Offline hoàn toàn</strong> → Cached schema.org context</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">›</span>
                <span><strong>Chặn deploy nếu lỗi</strong> → Zero lỗi lên production</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 3: CÔNG NGHỆ THỰC TẾ -->
      <section id="cong-nghe">
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">03</span>
          <h2 class="text-3xl font-bold text-white">Công Nghệ Thực Tế Bên Trong</h2>
        </div>

        <div class="space-y-6">
          <!-- Workflow Diagram -->
          <div class="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
            <h3 class="font-bold text-lg mb-4 text-yellow-500">Workflow Thực Tế:</h3>
            <div class="font-mono text-xs text-gray-300 leading-relaxed">
              <div class="mb-2"><span class="text-blue-400">1.</span> <code class="bg-gray-800 px-2 py-1 rounded">npm run generate</code></div>
              <div class="pl-4 mb-2"><span class="text-gray-600">↓</span> Chạy <code class="bg-gray-800 px-2 py-1 rounded">nuxt generate</code> (SSG prerender via Nitro)</div>
              <div class="pl-4 mb-2"><span class="text-gray-600">↓</span> <code class="bg-gray-800 px-2 py-1 rounded">@nuxtjs/seo</code> → Tự động tạo sitemap.xml và robots.txt</div>
              <div class="pl-4 mb-2"><span class="text-gray-600">↓</span> Scripts: <code class="bg-gray-800 px-2 py-1 rounded">checkseo-offline.js</code></div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Đọc sitemap.xml</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Loop từng URL → Đọc HTML từ dist/</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Extract: title, meta description, h1, og:image, canonical</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Extract: Tất cả &lt;img&gt; tags → Check alt attributes</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Extract: JSON-LD scripts → Parse JSON</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Validate: <code class="bg-gray-800 px-2 py-1 rounded">jsonld.expand()</code> với custom loader</div>
              <div class="pl-12 mb-2"><span class="text-gray-600">→</span> Load offline: <code class="bg-gray-800 px-2 py-1 rounded">dev/schemaorg-context.jsonld</code></div>
              <div class="pl-12 mb-2"><span class="text-gray-600">→</span> Expand JSON-LD to RDF triples</div>
              <div class="pl-12 mb-2"><span class="text-gray-600">→</span> Detect unknown @type (không có trong schema.org)</div>
              <div class="pl-8 mb-2"><span class="text-blue-400">→</span> Calculate score: 100 - (errors × 10) - (warnings × 5)</div>
              <div class="pl-4 mb-2"><span class="text-gray-600">↓</span> Lưu: <code class="bg-gray-800 px-2 py-1 rounded">dev/seo-report.json</code></div>
              <div class="pl-4 mb-2"><span class="text-gray-600">↓</span> Console: Hiển thị summary (Average score, Perfect pages, Issues)</div>
              <div class="pl-4"><span class="text-gray-600">↓</span> Exit code 1 nếu có lỗi → Chặn deploy pipeline</div>
            </div>
          </div>

          <!-- Core Features -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-6 rounded-xl">
              <h4 class="font-bold text-white mb-3 flex items-center gap-2">
                <span class="text-2xl">🎯</span> Điểm Mạnh Kỹ Thuật
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li><strong class="text-yellow-500">Custom Document Loader:</strong> Thay vì fetch schema.org online → Load cached context từ <code class="bg-gray-700 px-1 rounded">dev/schemaorg-context.jsonld</code></li>
                <li><strong class="text-yellow-500">Regex-based Extraction:</strong> Parse HTML với regex pattern cực nhanh, không cần DOM parser nặng</li>
                <li><strong class="text-yellow-500">Scoring System:</strong> 100 điểm base, -10 per error, -5 per warning. Rõ ràng và khách quan</li>
                <li><strong class="text-yellow-500">Route /checkseo:</strong> Chỉ exist trong dev mode, không build vào production bundle</li>
              </ul>
            </div>

            <div class="bg-gray-800 p-6 rounded-xl">
              <h4 class="font-bold text-white mb-3 flex items-center gap-2">
                <span class="text-2xl">📊</span> Dữ Liệu Kiểm Tra
              </h4>
              <ul class="space-y-2 text-sm text-gray-300">
                <li><strong class="text-blue-500">Meta Tags:</strong> title, description, keywords, og:* (title, description, image, url, type), twitter:card</li>
                <li><strong class="text-blue-500">Semantic:</strong> h1 (phải unique), canonical URL, hreflang (nếu có)</li>
                <li><strong class="text-blue-500">Images:</strong> Tất cả &lt;img&gt; phải có alt text, nếu thiếu → warning</li>
                <li><strong class="text-blue-500">JSON-LD:</strong> Parse JSON syntax + Expand với schema.org + Validate @type + Detect unknown types</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: DEV ROUTE /CHECKSEO -->
      <section>
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">04</span>
          <h2 class="text-3xl font-bold text-white">Tính Năng Độc Quyền: Route /checkseo (Dev Only)</h2>
        </div>

        <div class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="font-bold text-xl mb-4 text-purple-400">Cách Hoạt Động:</h3>
              <ol class="space-y-3 text-gray-300 text-sm list-decimal pl-5">
                <li>Route <code class="bg-gray-800 px-2 py-1 rounded">/checkseo</code> chỉ tồn tại trong development mode</li>
                <li>Component <code class="bg-gray-800 px-2 py-1 rounded">app/pages/checkseo.vue</code> fetch <code class="bg-gray-800 px-2 py-1 rounded">/dev/seo-report.json</code></li>
                <li>Vite dev server serve cả thư mục <code class="bg-gray-800 px-2 py-1 rounded">dev/</code> (không build vào production)</li>
                <li>Hiển thị UI trực quan: Summary cards, Per-page results, Issues list</li>
                <li>Score color-coded: Green (90-100), Yellow (70-89), Red (&lt;70)</li>
              </ol>
            </div>

            <div>
              <h3 class="font-bold text-xl mb-4 text-blue-400">Lợi Ích:</h3>
              <ul class="space-y-3 text-gray-300 text-sm">
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <span><strong>Visual Report:</strong> Không cần đọc JSON raw, UI responsive đẹp</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <span><strong>Real-time Check:</strong> <code class="bg-gray-800 px-1 rounded">npm run checkseo</code> → F5 browser → Thấy ngay</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <span><strong>Detail Drilling:</strong> Click từng page → Xem metadata, images, JSON-LD, issues</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-green-500">✓</span>
                  <span><strong>Security:</strong> Route này KHÔNG build vào production → Không lo lộ report</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 bg-gray-900/50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p class="text-sm text-gray-300">
              <strong class="text-yellow-500">Lưu ý:</strong> Nếu access <code class="bg-gray-800 px-2 py-1 rounded">https://oscarfamily.vn/checkseo</code> trên production → 404. Route chỉ exist khi <code class="bg-gray-800 px-2 py-1 rounded">import.meta.env.DEV === true</code>.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION 5: SO SÁNH -->
      <section>
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">05</span>
          <h2 class="text-3xl font-bold text-white">So Sánh Với Các Công Cụ Khác</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-gray-800 text-white">
                <th class="p-4 text-left">Tiêu chí</th>
                <th class="p-4 text-center">CheckSEO Offline</th>
                <th class="p-4 text-center">Lighthouse</th>
                <th class="p-4 text-center">SEMrush</th>
                <th class="p-4 text-center">Screaming Frog</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Kiểm tra Offline</td>
                <td class="p-4 text-center text-green-400">✓ Hoàn toàn</td>
                <td class="p-4 text-center text-green-400">✓ Có</td>
                <td class="p-4 text-center text-red-400">✗ Cần internet</td>
                <td class="p-4 text-center text-yellow-400">~ Giới hạn</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Validate JSON-LD</td>
                <td class="p-4 text-center text-green-400">✓ Expand RDF</td>
                <td class="p-4 text-center text-red-400">✗ Không</td>
                <td class="p-4 text-center text-yellow-400">~ Basic</td>
                <td class="p-4 text-center text-red-400">✗ Không</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Check Images Alt</td>
                <td class="p-4 text-center text-green-400">✓ Tất cả</td>
                <td class="p-4 text-center text-green-400">✓ Có</td>
                <td class="p-4 text-center text-green-400">✓ Có</td>
                <td class="p-4 text-center text-green-400">✓ Có</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Exit code chặn deploy</td>
                <td class="p-4 text-center text-green-400">✓ Code 1</td>
                <td class="p-4 text-center text-red-400">✗ Không</td>
                <td class="p-4 text-center text-red-400">✗ Không</td>
                <td class="p-4 text-center text-red-400">✗ Không</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Visual Report</td>
                <td class="p-4 text-center text-green-400">✓ /checkseo UI</td>
                <td class="p-4 text-center text-green-400">✓ Chrome UI</td>
                <td class="p-4 text-center text-green-400">✓ Dashboard</td>
                <td class="p-4 text-center text-green-400">✓ Desktop app</td>
              </tr>
              <tr class="border-b border-gray-700">
                <td class="p-4 font-semibold">Chi phí</td>
                <td class="p-4 text-center text-green-400 font-bold">FREE</td>
                <td class="p-4 text-center text-green-400">FREE</td>
                <td class="p-4 text-center text-red-400">$99-399/mo</td>
                <td class="p-4 text-center text-yellow-400">$149/yr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECTION 6: FAQ -->
      <section>
        <div class="flex items-center gap-4 mb-6">
          <span class="text-5xl font-black text-gray-800 select-none">06</span>
          <h2 class="text-3xl font-bold text-white">Câu Hỏi Thường Gặp</h2>
        </div>
        
        <div class="space-y-4">
          <details class="group bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 open:pb-4">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:bg-gray-750 transition-colors">
              <span class="flex items-center gap-3">Làm sao để integrate vào CI/CD pipeline?</span>
              <span class="transform group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="px-6 text-gray-300 pl-8 text-sm">
              Thêm step <code class="bg-gray-700 px-2 py-1 rounded">npm run checkseo</code> vào pipeline. Nếu score < 100, script sẽ exit với code 1 → Pipeline fail → Chặn deploy. Ví dụ GitHub Actions: <code class="bg-gray-700 px-2 py-1 rounded">run: npm run checkseo || exit 1</code>
            </div>
          </details>

          <details class="group bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 open:pb-4">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:bg-gray-750 transition-colors">
              <span class="flex items-center gap-3">Route /checkseo có bảo mật không?</span>
              <span class="transform group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="px-6 text-gray-300 pl-8 text-sm">
              Hoàn toàn bảo mật. Route chỉ register khi <code class="bg-gray-700 px-2 py-1 rounded">import.meta.env.DEV</code>. Production build sẽ tree-shake hết code này. File <code class="bg-gray-700 px-2 py-1 rounded">dev/seo-report.json</code> cũng không copy vào <code class="bg-gray-700 px-2 py-1 rounded">dist/</code>.
            </div>
          </details>

          <details class="group bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 open:pb-4">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:bg-gray-750 transition-colors">
              <span class="flex items-center gap-3">Offline JSON-LD validation hoạt động thế nào?</span>
              <span class="transform group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="px-6 text-gray-300 pl-8 text-sm">
              Thư viện <code class="bg-gray-700 px-2 py-1 rounded">jsonld</code> có <code class="bg-gray-700 px-2 py-1 rounded">customDocumentLoader</code>. Khi expand JSON-LD, nó fetch schema.org context. Mình intercept request này và trả về cached context từ <code class="bg-gray-700 px-2 py-1 rounded">dev/schemaorg-context.jsonld</code>. Zero network request.
            </div>
          </details>

          <details class="group bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 open:pb-4">
            <summary class="flex items-center justify-between p-6 cursor-pointer font-bold text-lg hover:bg-gray-750 transition-colors">
              <span class="flex items-center gap-3">Có thể adapt cho WordPress hoặc Next.js không?</span>
              <span class="transform group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div class="px-6 text-gray-300 pl-8 text-sm">
              Concept tương tự: Build HTML files → Run script scan → Validate. Với Next.js SSG, scan <code class="bg-gray-700 px-2 py-1 rounded">out/</code> thư mục. WordPress cần export static HTML hoặc crawl website local. Core logic (checkseo-offline.js) có thể reuse 100%.
            </div>
          </details>
        </div>
      </section>

    </div>

    <!-- FINAL CTA -->
    <div class="mt-20 space-y-12">
      <!-- Open Source & System Prompt Section -->
      <div class="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 rounded-2xl border border-green-500/30">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <span class="text-3xl">📖</span> WEB NÀY OPEN SOURCE
          </h3>
          <p class="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ai dev mang về sài cũng được luôn. Có sẵn một số docs và file <strong class="text-green-400">"system_prompt"</strong> để ném cho AI khi cần viết bài mới. Các tiêu chuẩn và ràng buộc cần thiết đã được thiết lập sẵn và tối ưu qua nhiều đợt nghiên cứu.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-900/50 p-6 rounded-xl border-l-4 border-green-500">
            <h4 class="font-bold text-white mb-3 flex items-center gap-2">
              <span class="text-xl">🤖</span> Cách Sử Dụng System Prompt
            </h4>
            <ol class="space-y-2 text-sm text-gray-300 list-decimal pl-5">
              <li>Tải file <code class="bg-gray-800 px-2 py-1 rounded text-green-400">docs/ref/page-creation-rules.md</code> từ repo</li>
              <li>Add/mention file đó vào kèm vài lời ngắn gọn</li>
              <li>Ví dụ: <em>"Viết cho tôi trang về... (dựa theo chuẩn trong file này)"</em></li>
              <li>AI sẽ output trang với SEO, UX, và tiêu chuẩn đã tối ưu sẵn!</li>
            </ol>
          </div>

          <div class="bg-gray-900/50 p-6 rounded-xl border-l-4 border-blue-500">
            <h4 class="font-bold text-white mb-3 flex items-center gap-2">
              <span class="text-xl">✍️</span> Muốn Viết Bài?
            </h4>
            <p class="text-gray-300 text-sm leading-relaxed mb-3">
              Liên hệ mình hoặc <strong class="text-blue-400">Lạc Quốc Huy</strong> để viết bằng trang này. Trang này chỉ để viết bài tĩnh nên <strong class="text-yellow-400">SEO cực tốt</strong>, nhất là cấu trúc JSON-LD giúp AI/bot quét tổng hợp thông tin.
            </p>
            <p class="text-gray-400 text-xs italic">
              ⏱️ Hiệu quả thường thấy sau khoảng <strong>vài ngày đến 1 tuần</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Fork & Explore Section -->
      <div class="text-center relative">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl -z-10"></div>
        <h3 class="text-2xl font-bold mb-6">Sẵn Sàng Nâng Tầm SEO Workflow?</h3>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Fork source code, customize theo nhu cầu. Zero learning curve, chỉ cần biết Node.js cơ bản.
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <a href="https://github.com/lacvietanh/oscar-family" target="_blank" class="cta-button bg-white text-black hover:bg-gray-200">
            <i class="fab fa-github mr-2"></i> Fork trên GitHub
          </a>
          <a href="https://akivn.net" target="_blank" class="cta-button border border-white/20 hover:bg-white/10">
            <i class="fas fa-globe mr-2"></i> Khám Phá AkiNet
          </a>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-gray-800 pt-12">
      <RelatedPosts exclude-slug="/seo-system/" />
    </div>

  </article>
</template>

<script setup>
import RelatedPosts from '../components/RelatedPosts.vue'

const title = 'Hệ thống CheckSEO Offline - Kiểm Tra SEO Không Cần Deploy TRONG 5S'
const description = 'Khác biệt hoàn toàn: Kiểm tra SEO trên localhost, validate JSON-LD offline, route /checkseo dev-only, chặn deploy nếu lỗi. Miễn phí 100% và open source.'
const url = 'https://oscarfamily.vn/seo-system/'
const image = 'https://oscarfamily.vn/img/seo-check.png'

// 1. TechArticle Schema
const techArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: title,
  description,
  image,
  author: {
    '@type': 'Person',
    name: 'Lạc Việt Anh',
    url: 'https://akivn.net'
  },
  publisher: {
    '@type': 'Organization',
    name: 'AkiNet',
    logo: {
      '@type': 'ImageObject',
      url: 'https://oscarfamily.vn/logo.png'
    }
  },
  datePublished: '2025-11-30',
  dateModified: '2025-11-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url
  },
  about: [
    { '@type': 'Thing', name: 'SEO Automation' },
    { '@type': 'Thing', name: 'Offline SEO Checker' },
    { '@type': 'Thing', name: 'JSON-LD Validation' }
  ]
}

// 2. Person Schema (Author)
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lạc Việt Anh',
  url: 'https://akivn.net',
  jobTitle: 'Chief Product Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'AkiNet'
  },
  sameAs: [
    'https://github.com/lacvietanh',
    'https://lamnhac.net'
  ],
  knowsAbout: ['SEO Automation', 'Vue.js', 'Node.js', 'Music Production']
}

// 3. FAQPage Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Làm sao để integrate vào CI/CD pipeline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thêm step npm run checkseo vào pipeline. Nếu score < 100, script sẽ exit với code 1 → Pipeline fail → Chặn deploy.'
      }
    },
    {
      '@type': 'Question',
      name: 'Route /checkseo có bảo mật không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hoàn toàn bảo mật. Route chỉ register khi import.meta.env.DEV. Production build sẽ tree-shake hết code này.'
      }
    },
    {
      '@type': 'Question',
      name: 'Offline JSON-LD validation hoạt động thế nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thư viện jsonld có customDocumentLoader. Khi expand JSON-LD, nó fetch schema.org context. Mình intercept request này và trả về cached context từ dev/schemaorg-context.jsonld.'
      }
    }
  ]
}

// 4. SoftwareApplication Schema
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CheckSEO Offline',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Cross-platform',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'VND'
  },
  author: {
    '@type': 'Person',
    name: 'Lạc Việt Anh'
  },
  description: 'Hệ thống kiểm tra SEO offline tự động cho Vue.js/Vite. Validate JSON-LD, meta tags, images alt text. Open source miễn phí.'
}

// 5. Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AkiNet',
  url: 'https://akivn.net',
  logo: 'https://oscarfamily.vn/logo.png',
  founder: {
    '@type': 'Person',
    name: 'Lạc Việt Anh'
  },
  description: 'Hệ sinh thái công nghệ hỗ trợ creator tại Việt Nam: lamnhac.net, vstshop.com, AkiWorkflow.'
}

usePageSeo({
  title: title,
  description: description,
  ogImage: image,
  ogType: 'article',
  keywords: 'checkseo offline, SEO automation, JSON-LD validation, offline SEO checker, Vue.js SEO, Vite SSG, schema.org validation, localhost SEO, CI/CD SEO, Lạc Việt Anh, AkiNet',
  author: 'Lạc Việt Anh'
})

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(techArticleSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(softwareSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(organizationSchema) }
  ]
})
</script>

<style scoped>
.seo-article {
  color: #e5e7eb;
  line-height: 1.8;
}

.highlight-keyword {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}

.highlight-section {
  background: linear-gradient(180deg, rgba(31, 41, 55, 0.5) 0%, rgba(17, 24, 39, 0.8) 100%);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.cta-button {
  background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
  color: #000;
  font-weight: 800;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  text-decoration: none;
  display: inline-flex;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 15px 30px -5px rgba(245, 158, 11, 0.5);
}

details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
