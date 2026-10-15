const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '..', 'public');
const assetsDir = path.join(__dirname, '..', 'src', 'assets', 'images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const svgs = {
  'Dao tao AI -Ky 1-hinh-2-2': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#bg2)"/>
  <rect x="60" y="40" width="1080" height="80" fill="#1e3a8a" opacity="0.8" rx="16" stroke="#3b82f6" stroke-width="2"/>
  <text x="600" y="90" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">HÌNH 2-2: KHUNG 6 PHƯƠNG DIỆN NĂNG LỰC AI PHỔ THÔNG</text>

  <g transform="translate(60, 160)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#0284c7" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#0284c7"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">1</text>
    <text x="95" y="58" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">Hiểu biết AI</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Khái niệm &amp; Nguyên lý vận hành</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Bản chất mô hình &amp; Thuật toán</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Khả năng &amp; Giới hạn của AI</text>
  </g>

  <g transform="translate(435, 160)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#0284c7" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#0284c7"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">2</text>
    <text x="95" y="58" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">Nhiệm vụ &amp; Bối cảnh</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Áp dụng đúng nhu cầu thực tế</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Bối cảnh học tập từng môn học</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Giải quyết vấn đề sáng tạo</text>
  </g>

  <g transform="translate(810, 160)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#0284c7" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#0284c7"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">3</text>
    <text x="95" y="58" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">Mức độ Tự chủ</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Hỗ trợ học tập cá nhân hóa</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Tương tác chủ động &amp; phản biện</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Sáng tạo sản phẩm độc lập</text>
  </g>

  <g transform="translate(60, 430)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#6366f1" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#6366f1"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">4</text>
    <text x="95" y="58" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">Kiểm chứng Dữ liệu</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Đánh giá độ chính xác thông tin</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Phát hiện ảo giác (Hallucination)</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Đối chiếu chứng cứ tin cậy</text>
  </g>

  <g transform="translate(435, 430)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#6366f1" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#6366f1"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">5</text>
    <text x="95" y="58" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">An toàn &amp; Đạo đức</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Bảo mật dữ liệu cá nhân</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Tôn trọng bản quyền tác giả</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Phòng tránh thiên vị &amp; định kiến</text>
  </g>

  <g transform="translate(810, 430)">
    <rect width="330" height="230" fill="url(#cardGrad)" rx="16" stroke="#6366f1" stroke-width="2"/>
    <circle cx="50" cy="50" r="26" fill="#6366f1"/>
    <text x="50" y="58" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">6</text>
    <text x="95" y="58" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold">Thiết kế &amp; Cải tiến</text>
    <text x="30" y="115" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Kỹ thuật thiết kế câu lệnh Prompt</text>
    <text x="30" y="150" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Tối ưu hóa phản hồi đầu ra</text>
    <text x="30" y="185" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Sáng tạo giải pháp ứng dụng AI</text>
  </g>
  <text x="600" y="700" fill="#64748b" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" text-anchor="middle">Khung 6 Phương diện Năng lực AI Giáo dục Phổ thông</text>
</svg>`,

  'Dao tao AI -Ky 1-hinh-3': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#0f172a"/>
  <rect x="60" y="40" width="1080" height="80" fill="#0369a1" opacity="0.8" rx="16" stroke="#38bdf8" stroke-width="2"/>
  <text x="600" y="90" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">HÌNH 3: CẤU TRÚC 4 MẠCH NỘI DUNG GIÁO DỤC AI</text>

  <g transform="translate(60, 150)">
    <rect width="245" height="520" fill="#1e293b" rx="16" stroke="#0ea5e9" stroke-width="2"/>
    <rect x="15" y="15" width="215" height="60" fill="#0284c7" rx="10"/>
    <text x="122" y="52" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">MẠCH 1</text>
    <text x="122" y="120" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Khai phá &amp;</text>
    <text x="122" y="150" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Trải nghiệm AI</text>
    <line x1="25" y1="180" x2="220" y2="180" stroke="#334155" stroke-width="2"/>
    <text x="25" y="220" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Nhận diện ứng dụng AI</text>
    <text x="25" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Trải nghiệm trợ lý số</text>
    <text x="25" y="300" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Phân biệt AI &amp; CNTT</text>
    <text x="25" y="340" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Tương tác tự nhiên</text>
  </g>

  <g transform="translate(338, 150)">
    <rect width="245" height="520" fill="#1e293b" rx="16" stroke="#6366f1" stroke-width="2"/>
    <rect x="15" y="15" width="215" height="60" fill="#4f46e5" rx="10"/>
    <text x="122" y="52" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">MẠCH 2</text>
    <text x="122" y="120" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Thuật toán, Dữ liệu</text>
    <text x="122" y="150" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">&amp; Mô hình AI</text>
    <line x1="25" y1="180" x2="220" y2="180" stroke="#334155" stroke-width="2"/>
    <text x="25" y="220" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Học máy (Machine Learning)</text>
    <text x="25" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Tập dữ liệu huấn luyện</text>
    <text x="25" y="300" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Mạng Nơ-ron nhân tạo</text>
    <text x="25" y="340" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Mô hình ngôn ngữ lớn</text>
  </g>

  <g transform="translate(616, 150)">
    <rect width="245" height="520" fill="#1e293b" rx="16" stroke="#06b6d4" stroke-width="2"/>
    <rect x="15" y="15" width="215" height="60" fill="#0891b2" rx="10"/>
    <text x="122" y="52" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">MẠCH 3</text>
    <text x="122" y="120" fill="#67e8f9" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Sáng tạo &amp; Ứng dụng</text>
    <text x="122" y="150" fill="#67e8f9" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Giải pháp AI</text>
    <line x1="25" y1="180" x2="220" y2="180" stroke="#334155" stroke-width="2"/>
    <text x="25" y="220" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Thiết kế câu lệnh (Prompt)</text>
    <text x="25" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Sáng tạo nội dung đa phương tiện</text>
    <text x="25" y="300" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Tự động hóa công việc học tập</text>
    <text x="25" y="340" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Xây dựng ứng dụng AI nhỏ</text>
  </g>

  <g transform="translate(895, 150)">
    <rect width="245" height="520" fill="#1e293b" rx="16" stroke="#f59e0b" stroke-width="2"/>
    <rect x="15" y="15" width="215" height="60" fill="#d97706" rx="10"/>
    <text x="122" y="52" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">MẠCH 4</text>
    <text x="122" y="120" fill="#fcd34d" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Tác động Xã hội &amp;</text>
    <text x="122" y="150" fill="#fcd34d" font-family="DejaVu Sans, Arial, sans-serif" font-size="21" font-weight="bold" text-anchor="middle">Trách nhiệm Số</text>
    <line x1="25" y1="180" x2="220" y2="180" stroke="#334155" stroke-width="2"/>
    <text x="25" y="220" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Đạo đức sử dụng AI</text>
    <text x="25" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• An toàn thông tin cá nhân</text>
    <text x="25" y="300" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Ảnh hưởng việc làm tương lai</text>
    <text x="25" y="340" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16">• Văn hóa ứng xử không gian số</text>
  </g>
  <text x="600" y="710" fill="#64748b" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" text-anchor="middle">4 Trụ cột Tri thức Cốt lõi của Chương trình Giáo dục AI Phổ thông</text>
</svg>`,

  'Dao tao AI -Ky 1-hinh-3-1': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#0f172a"/>
  <rect x="60" y="40" width="1080" height="80" fill="#4338ca" opacity="0.8" rx="16" stroke="#818cf8" stroke-width="2"/>
  <text x="600" y="90" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">HÌNH 3-1: LỘ TRÌNH 3 CẤP HỌC &amp; ĐÁNH GIÁ NĂNG LỰC</text>

  <g transform="translate(60, 160)">
    <rect width="330" height="380" fill="#1e293b" rx="16" stroke="#38bdf8" stroke-width="2"/>
    <path d="M0 16 C0 7.16 7.16 0 16 0 L314 0 C322.84 0 330 7.16 330 16 L330 70 L0 70 Z" fill="#0284c7"/>
    <text x="165" y="45" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">CẤP TIỂU HỌC</text>
    <text x="165" y="115" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Nhận biết &amp; Trải nghiệm</text>
    <text x="30" y="170" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Quan sát ứng dụng AI thực tế</text>
    <text x="30" y="215" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Tương tác qua giọng nói &amp; hình ảnh</text>
    <text x="30" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Hình thành ý thức ban đầu về AI</text>
    <text x="30" y="305" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Trải nghiệm game học tập số</text>
  </g>

  <path d="M400 330 L425 330 L425 320 L435 340 L425 360 L425 350 L400 350 Z" fill="#38bdf8"/>

  <g transform="translate(435, 160)">
    <rect width="330" height="380" fill="#1e293b" rx="16" stroke="#818cf8" stroke-width="2"/>
    <path d="M0 16 C0 7.16 7.16 0 16 0 L314 0 C322.84 0 330 7.16 330 16 L330 70 L0 70 Z" fill="#4f46e5"/>
    <text x="165" y="45" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">CẤP THCS</text>
    <text x="165" y="115" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Hiểu biết &amp; Ứng dụng</text>
    <text x="30" y="170" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Nguyên lý Học máy &amp; Dữ liệu</text>
    <text x="30" y="215" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Sử dụng AI tạo nội dung học tập</text>
    <text x="30" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Viết Prompt hỗ trợ giải toán, văn</text>
    <text x="30" y="305" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Đánh giá an toàn &amp; bảo mật</text>
  </g>

  <path d="M775 330 L800 330 L800 320 L810 340 L800 360 L800 350 L775 350 Z" fill="#818cf8"/>

  <g transform="translate(810, 160)">
    <rect width="330" height="380" fill="#1e293b" rx="16" stroke="#c084fc" stroke-width="2"/>
    <path d="M0 16 C0 7.16 7.16 0 16 0 L314 0 C322.84 0 330 7.16 330 16 L330 70 L0 70 Z" fill="#9333ea"/>
    <text x="165" y="45" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">CẤP THPT</text>
    <text x="165" y="115" fill="#e9d5ff" font-family="DejaVu Sans, Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">Thiết kế &amp; Sáng tạo</text>
    <text x="30" y="170" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Xây dựng giải pháp ứng dụng AI</text>
    <text x="30" y="215" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Huấn luyện mô hình trí tuệ nhân tạo</text>
    <text x="30" y="260" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Phân tích tác động xã hội &amp; đạo đức</text>
    <text x="30" y="305" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17">• Định hướng nghề nghiệp công nghệ</text>
  </g>

  <rect x="60" y="570" width="1080" height="110" fill="#1e1b4b" rx="16" stroke="#6366f1" stroke-width="2"/>
  <text x="600" y="610" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">KHUNG ĐÁNH GIÁ NĂNG LỰC GIÁO DỤC AI</text>
  <text x="600" y="650" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Đánh giá quá trình qua sản phẩm thực hành • Hồ sơ học tập (Portfolio) • Minh chứng năng lực thực tế</text>
</svg>`,

  'Dao tao AI -Ky 1-hinh-5': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <rect width="1200" height="750" fill="#0f172a"/>
  <rect x="60" y="40" width="1080" height="80" fill="#0f766e" opacity="0.8" rx="16" stroke="#2dd4bf" stroke-width="2"/>
  <text x="600" y="90" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle">HÌNH 5: SƠ ĐỒ MẠCH GIÁO DỤC AI PHỔ THÔNG TỔNG THỂ</text>

  <circle cx="600" cy="390" r="130" fill="#115e59" stroke="#2dd4bf" stroke-width="4"/>
  <text x="600" y="375" fill="#ffffff" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" font-weight="bold" text-anchor="middle">HỌC SINH</text>
  <text x="600" y="410" fill="#99f6e4" font-family="DejaVu Sans, Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle">NĂNG LỰC AI</text>
  <text x="600" y="440" fill="#ccfbf1" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" text-anchor="middle">Trung tâm giáo dục</text>

  <rect x="80" y="160" width="360" height="170" fill="#1e293b" rx="16" stroke="#0ea5e9" stroke-width="2"/>
  <text x="260" y="205" fill="#38bdf8" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Trải nghiệm &amp; Nhận thức</text>
  <text x="260" y="245" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Hiểu biết khái niệm cơ bản</text>
  <text x="260" y="280" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Tương tác công cụ AI tự nhiên</text>

  <rect x="760" y="160" width="360" height="170" fill="#1e293b" rx="16" stroke="#6366f1" stroke-width="2"/>
  <text x="940" y="205" fill="#a5b4fc" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Kỹ năng Thực hành Prompt</text>
  <text x="940" y="245" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Giao tiếp hiệu quả với AI</text>
  <text x="940" y="280" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Tối ưu hóa kết quả đầu ra</text>

  <rect x="80" y="460" width="360" height="170" fill="#1e293b" rx="16" stroke="#f59e0b" stroke-width="2"/>
  <text x="260" y="505" fill="#fcd34d" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">An toàn &amp; Trách nhiệm Số</text>
  <text x="260" y="545" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Bảo mật thông tin &amp; Đạo đức</text>
  <text x="260" y="580" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Kiểm chứng độ chính xác</text>

  <rect x="760" y="460" width="360" height="170" fill="#1e293b" rx="16" stroke="#10b981" stroke-width="2"/>
  <text x="940" y="505" fill="#6ee7b7" font-family="DejaVu Sans, Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Sáng tạo Giải pháp AI</text>
  <text x="940" y="545" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Ứng dụng giải quyết vấn đề</text>
  <text x="940" y="580" fill="#cbd5e1" font-family="DejaVu Sans, Arial, sans-serif" font-size="17" text-anchor="middle">Định hướng tương lai số</text>

  <line x1="440" y1="280" x2="500" y2="330" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6"/>
  <line x1="760" y1="280" x2="700" y2="330" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6"/>
  <line x1="440" y1="500" x2="500" y2="450" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6"/>
  <line x1="760" y1="500" x2="700" y2="450" stroke="#2dd4bf" stroke-width="3" stroke-dasharray="6"/>
</svg>`
};

console.log('Writing SVG and converting to JPG files...');

for (const [name, svgContent] of Object.entries(svgs)) {
  const svgPath = path.join(publicDir, `${name}.svg`);
  const jpgPublicPath = path.join(publicDir, `${name}.jpg`);
  const jpgAssetsPath = path.join(assetsDir, `${name}.jpg`);

  fs.writeFileSync(svgPath, svgContent, 'utf8');

  try {
    execSync(`convert -density 150 "${svgPath}" "${jpgPublicPath}"`);
    fs.copyFileSync(jpgPublicPath, jpgAssetsPath);
    console.log(`Successfully generated JPG for ${name}`);
  } catch (err) {
    console.error(`Error converting ${name}:`, err.message);
  }
}

console.log('Done generating JPG files!');
