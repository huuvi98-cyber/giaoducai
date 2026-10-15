import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// SVG Data URI helper
const createSvgDataUri = (svgString: string) => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
};

// High-definition vector diagram fallbacks matching the user's 4 figures
const HINH_2_2_SVG = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
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
  <rect width="800" height="500" fill="url(#bg2)" rx="16"/>
  <rect x="40" y="25" width="720" height="55" fill="#1e3a8a" opacity="0.8" rx="10" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="60" fill="#38bdf8" font-family="sans-serif" font-size="19" font-weight="bold" text-anchor="middle">HÌNH 2-2: KHUNG 6 PHƯƠNG DIỆN NĂNG LỰC AI PHỔ THÔNG</text>
  
  <g transform="translate(40, 100)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#0284c7"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">1</text>
    <text x="65" y="40" fill="#38bdf8" font-family="sans-serif" font-size="15" font-weight="bold">Hiểu biết AI</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Khái niệm &amp; Nguyên lý</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Bản chất mô hình AI</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Khả năng &amp; Giới hạn</text>
  </g>
  <g transform="translate(290, 100)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#0284c7"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">2</text>
    <text x="65" y="40" fill="#38bdf8" font-family="sans-serif" font-size="15" font-weight="bold">Nhiệm vụ &amp; Bối cảnh</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Áp dụng đúng nhu cầu</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Bối cảnh môn học</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Giải quyết vấn đề</text>
  </g>
  <g transform="translate(540, 100)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#0284c7" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#0284c7"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">3</text>
    <text x="65" y="40" fill="#38bdf8" font-family="sans-serif" font-size="15" font-weight="bold">Mức độ Tự chủ</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Hỗ trợ học tập</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Tương tác chủ động</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Sáng tạo độc lập</text>
  </g>

  <g transform="translate(40, 280)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#6366f1" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#6366f1"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">4</text>
    <text x="65" y="40" fill="#a5b4fc" font-family="sans-serif" font-size="15" font-weight="bold">Kiểm chứng Dữ liệu</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Đánh giá độ chính xác</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Phát hiện ảo giác AI</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Đối chiếu minh chứng</text>
  </g>
  <g transform="translate(290, 280)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#6366f1" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#6366f1"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">5</text>
    <text x="65" y="40" fill="#a5b4fc" font-family="sans-serif" font-size="15" font-weight="bold">An toàn &amp; Đạo đức</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Bảo mật thông tin</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Trách nhiệm tác quyền</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Phòng tránh định kiến</text>
  </g>
  <g transform="translate(540, 280)">
    <rect width="220" height="150" fill="url(#cardGrad)" rx="12" stroke="#6366f1" stroke-width="1.5"/>
    <circle cx="35" cy="35" r="18" fill="#6366f1"/>
    <text x="35" y="41" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">6</text>
    <text x="65" y="40" fill="#a5b4fc" font-family="sans-serif" font-size="15" font-weight="bold">Thiết kế &amp; Cải tiến</text>
    <text x="20" y="80" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Kỹ thuật viết Prompt</text>
    <text x="20" y="102" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Tối ưu hóa kết quả</text>
    <text x="20" y="124" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Sáng tạo giải pháp AI</text>
  </g>
  <text x="400" y="470" fill="#64748b" font-family="sans-serif" font-size="11" text-anchor="middle">Sơ đồ Chuẩn Khung Năng lực AI Giáo dục Phổ thông</text>
</svg>
`);

const HINH_3_SVG = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#0f172a" rx="16"/>
  <rect x="40" y="25" width="720" height="55" fill="#0369a1" opacity="0.8" rx="10" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="400" y="60" fill="#ffffff" font-family="sans-serif" font-size="19" font-weight="bold" text-anchor="middle">HÌNH 3: CẤU TRÚC 4 MẠCH NỘI DUNG GIÁO DỤC AI</text>

  <g transform="translate(40, 100)">
    <rect width="165" height="340" fill="#1e293b" rx="12" stroke="#0ea5e9" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="40" fill="#0284c7" rx="6"/>
    <text x="82" y="35" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">MẠCH 1</text>
    <text x="82" y="80" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Khai phá &amp;</text>
    <text x="82" y="100" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Trải nghiệm AI</text>
    <line x1="20" y1="120" x2="145" y2="120" stroke="#334155" stroke-width="1"/>
    <text x="15" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Nhận diện AI thực tế</text>
    <text x="15" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Trải nghiệm trợ lý số</text>
    <text x="15" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Phân biệt AI &amp; CNTT</text>
    <text x="15" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Tương tác tự nhiên</text>
  </g>

  <g transform="translate(225, 100)">
    <rect width="165" height="340" fill="#1e293b" rx="12" stroke="#6366f1" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="40" fill="#4f46e5" rx="6"/>
    <text x="82" y="35" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">MẠCH 2</text>
    <text x="82" y="80" fill="#a5b4fc" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Thuật toán, Dữ liệu</text>
    <text x="82" y="100" fill="#a5b4fc" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">&amp; Mô hình AI</text>
    <line x1="20" y1="120" x2="145" y2="120" stroke="#334155" stroke-width="1"/>
    <text x="15" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Học máy (Machine Learning)</text>
    <text x="15" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Tập dữ liệu huấn luyện</text>
    <text x="15" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Mạng Nơ-ron nhân tạo</text>
    <text x="15" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Mô hình ngôn ngữ lớn</text>
  </g>

  <g transform="translate(410, 100)">
    <rect width="165" height="340" fill="#1e293b" rx="12" stroke="#06b6d4" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="40" fill="#0891b2" rx="6"/>
    <text x="82" y="35" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">MẠCH 3</text>
    <text x="82" y="80" fill="#67e8f9" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Sáng tạo &amp; Ứng dụng</text>
    <text x="82" y="100" fill="#67e8f9" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Giải pháp AI</text>
    <line x1="20" y1="120" x2="145" y2="120" stroke="#334155" stroke-width="1"/>
    <text x="15" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Thiết kế câu lệnh (Prompt)</text>
    <text x="15" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Sáng tạo nội dung số</text>
    <text x="15" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Tự động hóa công việc</text>
    <text x="15" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Xây dựng ứng dụng AI</text>
  </g>

  <g transform="translate(595, 100)">
    <rect width="165" height="340" fill="#1e293b" rx="12" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="10" y="10" width="145" height="40" fill="#d97706" rx="6"/>
    <text x="82" y="35" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">MẠCH 4</text>
    <text x="82" y="80" fill="#fcd34d" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Tác động Xã hội &amp;</text>
    <text x="82" y="100" fill="#fcd34d" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Trách nhiệm Số</text>
    <line x1="20" y1="120" x2="145" y2="120" stroke="#334155" stroke-width="1"/>
    <text x="15" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Đạo đức sử dụng AI</text>
    <text x="15" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="11">• An toàn thông tin cá nhân</text>
    <text x="15" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Ảnh hưởng việc làm</text>
    <text x="15" y="240" fill="#cbd5e1" font-family="sans-serif" font-size="11">• Văn hóa không gian số</text>
  </g>
  <text x="400" y="470" fill="#64748b" font-family="sans-serif" font-size="11" text-anchor="middle">4 Trụ cột Tri thức Cốt lõi của Chương trình Giáo dục AI Phổ thông</text>
</svg>
`);

const HINH_3_1_SVG = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#0f172a" rx="16"/>
  <rect x="40" y="25" width="720" height="55" fill="#4338ca" opacity="0.8" rx="10" stroke="#818cf8" stroke-width="1.5"/>
  <text x="400" y="60" fill="#ffffff" font-family="sans-serif" font-size="19" font-weight="bold" text-anchor="middle">HÌNH 3-1: LỘ TRÌNH 3 CẤP HỌC &amp; ĐÁNH GIÁ NĂNG LỰC</text>

  <g transform="translate(40, 100)">
    <rect width="220" height="250" fill="#1e293b" rx="12" stroke="#38bdf8" stroke-width="1.5"/>
    <path d="M0 12 C0 5.37 5.37 0 12 0 L208 0 C214.63 0 220 5.37 220 12 L220 50 L0 50 Z" fill="#0284c7"/>
    <text x="110" y="32" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">CẤP TIỂU HỌC</text>
    <text x="110" y="80" fill="#38bdf8" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Nhận biết &amp; Trải nghiệm</text>
    <text x="20" y="120" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Quan sát ứng dụng AI</text>
    <text x="20" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Tương tác giọng nói</text>
    <text x="20" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Ý thức ban đầu về AI</text>
    <text x="20" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Trải nghiệm game số</text>
  </g>

  <path d="M268 225 L282 225 L282 220 L290 230 L282 240 L282 235 L268 235 Z" fill="#38bdf8"/>

  <g transform="translate(290, 100)">
    <rect width="220" height="250" fill="#1e293b" rx="12" stroke="#818cf8" stroke-width="1.5"/>
    <path d="M0 12 C0 5.37 5.37 0 12 0 L208 0 C214.63 0 220 5.37 220 12 L220 50 L0 50 Z" fill="#4f46e5"/>
    <text x="110" y="32" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">CẤP THCS</text>
    <text x="110" y="80" fill="#a5b4fc" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Hiểu biết &amp; Ứng dụng</text>
    <text x="20" y="120" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Nguyên lý Học máy</text>
    <text x="20" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="12">• AI tạo nội dung</text>
    <text x="20" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Viết Prompt học tập</text>
    <text x="20" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="12">• An toàn dữ liệu</text>
  </g>

  <path d="M518 225 L532 225 L532 220 L540 230 L532 240 L532 235 L518 235 Z" fill="#818cf8"/>

  <g transform="translate(540, 100)">
    <rect width="220" height="250" fill="#1e293b" rx="12" stroke="#c084fc" stroke-width="1.5"/>
    <path d="M0 12 C0 5.37 5.37 0 12 0 L208 0 C214.63 0 220 5.37 220 12 L220 50 L0 50 Z" fill="#9333ea"/>
    <text x="110" y="32" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">CẤP THPT</text>
    <text x="110" y="80" fill="#e9d5ff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Thiết kế &amp; Sáng tạo</text>
    <text x="20" y="120" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Xây dựng giải pháp AI</text>
    <text x="20" y="150" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Huấn luyện mô hình</text>
    <text x="20" y="180" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Phân tích tác động xã hội</text>
    <text x="20" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="12">• Định hướng nghề nghiệp</text>
  </g>

  <rect x="40" y="375" width="720" height="75" fill="#1e1b4b" rx="10" stroke="#6366f1" stroke-width="1.5"/>
  <text x="400" y="402" fill="#a5b4fc" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">KHUNG ĐÁNH GIÁ NĂNG LỰC AI</text>
  <text x="400" y="427" fill="#cbd5e1" font-family="sans-serif" font-size="12" text-anchor="middle">Đánh giá quá trình qua sản phẩm thực hành • Hồ sơ học tập (Portfolio) • Minh chứng thực tế</text>
</svg>
`);

const HINH_5_SVG = createSvgDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <rect width="800" height="500" fill="#0f172a" rx="16"/>
  <rect x="40" y="20" width="720" height="55" fill="#0f766e" opacity="0.8" rx="10" stroke="#2dd4bf" stroke-width="1.5"/>
  <text x="400" y="55" fill="#ffffff" font-family="sans-serif" font-size="19" font-weight="bold" text-anchor="middle">HÌNH 5: SƠ ĐỒ MẠCH GIÁO DỤC AI PHỔ THÔNG TỔNG THỂ</text>

  <circle cx="400" cy="260" r="85" fill="#115e59" stroke="#2dd4bf" stroke-width="3"/>
  <text x="400" y="250" fill="#ffffff" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">HỌC SINH</text>
  <text x="400" y="272" fill="#99f6e4" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">NĂNG LỰC AI</text>
  <text x="400" y="290" fill="#ccfbf1" font-family="sans-serif" font-size="11" text-anchor="middle">Trung tâm giáo dục</text>

  <rect x="60" y="100" width="230" height="110" fill="#1e293b" rx="10" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="175" y="128" fill="#38bdf8" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Trải nghiệm &amp; Nhận thức</text>
  <text x="175" y="152" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Hiểu biết khái niệm cơ bản</text>
  <text x="175" y="172" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Tương tác công cụ AI</text>

  <rect x="510" y="100" width="230" height="110" fill="#1e293b" rx="10" stroke="#6366f1" stroke-width="1.5"/>
  <text x="625" y="128" fill="#a5b4fc" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Kỹ năng Thực hành Prompt</text>
  <text x="625" y="152" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Giao tiếp hiệu quả với AI</text>
  <text x="625" y="172" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Tối ưu hóa kết quả đầu ra</text>

  <rect x="60" y="320" width="230" height="110" fill="#1e293b" rx="10" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="175" y="348" fill="#fcd34d" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">An toàn &amp; Trách nhiệm Số</text>
  <text x="175" y="372" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Bảo mật thông tin &amp; Đạo đức</text>
  <text x="175" y="392" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Kiểm chứng độ chính xác</text>

  <rect x="510" y="320" width="230" height="110" fill="#1e293b" rx="10" stroke="#10b981" stroke-width="1.5"/>
  <text x="625" y="348" fill="#6ee7b7" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Sáng tạo Giải pháp AI</text>
  <text x="625" y="372" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Ứng dụng giải quyết vấn đề</text>
  <text x="625" y="392" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">Định hướng tương lai số</text>

  <line x1="290" y1="180" x2="330" y2="210" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
  <line x1="510" y1="180" x2="470" y2="210" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
  <line x1="290" y1="340" x2="330" y2="310" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
  <line x1="510" y1="340" x2="470" y2="310" stroke="#2dd4bf" stroke-width="2" stroke-dasharray="4"/>
</svg>
`);

import imgRegenerated from '../assets/images/regenerated_image_1792054339436.jpg';
import imgHinh22 from '../assets/images/Dao tao AI -Ky 1-hinh-2-2.jpg';
import imgHinh3 from '../assets/images/Dao tao AI -Ky 1-hinh-3.jpg';
import imgHinh31 from '../assets/images/Dao tao AI -Ky 1-hinh-3-1.jpg';
import imgHinh5 from '../assets/images/Dao tao AI -Ky 1-hinh-5.jpg';
import imgKy2Hinh5 from '../assets/images/Dao tao AI -Ky 2-hinh-5.jpg';
import imgKy2Hinh1 from '../assets/images/Dao tao AI -Ky 2-hinh-1.jpg';

interface ImageItem {
  id: string;
  title: string;
  filename: string;
  caption?: string;
  srcCandidates: string[];
}

const IMAGES: ImageItem[] = [
  {
    id: 'hinh-2-2',
    title: 'Hình 2-2: Khung Năng lực AI Phổ thông',
    filename: 'regenerated_image_1792054339436.jpg',
    caption: 'Học sinh Trường Tiểu học Nguyễn Bỉnh Khiêm trong tiết học môn Tự nhiên và Xã hội có ứng dụng AI. Ảnh: HOÀNG TRIỀU',
    srcCandidates: [
      imgRegenerated,
      '/src/assets/images/regenerated_image_1792054339436.jpg',
      imgHinh22,
      '/src/assets/images/Dao tao AI -Ky 1-hinh-2-2.jpg',
      'Dao tao AI -Ky 1-hinh-2-2.jpg',
      HINH_2_2_SVG,
    ],
  },
  {
    id: 'hinh-3',
    title: 'Hình 3: Cấu trúc Mạch Nội dung Giáo dục AI',
    filename: 'Dao tao AI -Ky 1-hinh-3.jpg',
    caption: 'Học sinh Trường Tiểu học Trần Hưng Đạo trong tiết Toán lớp 4. Ảnh: HOÀNG TRIỀU',
    srcCandidates: [
      imgHinh3,
      '/src/assets/images/Dao tao AI -Ky 1-hinh-3.jpg',
      'Dao tao AI -Ky 1-hinh-3.jpg',
      HINH_3_SVG,
    ],
  },
  {
    id: 'hinh-3-1',
    title: 'Hình 3-1: Lộ trình & Đánh giá Năng lực AI',
    filename: 'Dao tao AI -Ky 2-hinh-1.jpg',
    caption: 'Học sinh trong giờ Tin học tại Trường THPT Hùng Vương. Ảnh: HOÀNG TRIỀU',
    srcCandidates: [
      imgKy2Hinh1,
      '/src/assets/images/Dao tao AI -Ky 2-hinh-1.jpg',
      'Dao tao AI -Ky 2-hinh-1.jpg',
      imgKy2Hinh5,
      '/src/assets/images/Dao tao AI -Ky 2-hinh-5.jpg',
      HINH_3_1_SVG,
    ],
  },
  {
    id: 'hinh-5',
    title: 'Hình 5: Sơ đồ Mạch Giáo dục AI Phổ thông',
    filename: 'Dao tao AI -Ky 1-hinh-5.jpg',
    caption: 'Giáo viên Trường THPT chuyên Lê Hồng Phong hướng dẫn học sinh ứng dụng AI vào nghiên cứu khoa học. Ảnh: HOÀNG TRIỀU',
    srcCandidates: [
      imgHinh5,
      '/src/assets/images/Dao tao AI -Ky 1-hinh-5.jpg',
      'Dao tao AI -Ky 1-hinh-5.jpg',
      HINH_5_SVG,
    ],
  },
];

export const InfographicImageGallery: React.FC = () => {
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, number>>({});

  const handleImageError = (imageId: string) => {
    setImageErrorMap((prev) => ({
      ...prev,
      [imageId]: (prev[imageId] || 0) + 1,
    }));
  };

  const getCurrentImageSrc = (item: ImageItem) => {
    const errorIndex = imageErrorMap[item.id] || 0;
    if (errorIndex < item.srcCandidates.length) {
      return item.srcCandidates[errorIndex];
    }
    return item.srcCandidates[item.srcCandidates.length - 1]; // Fallback to vector SVG Data URI
  };

  return (
    <div className="w-full my-2">
      {/* Direct image grid - 2 columns on mobile, 4 columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
        {IMAGES.map((item) => {
          const imgSrc = getCurrentImageSrc(item);

          return (
            <div
              key={item.id}
              className="group relative z-10 hover:z-30 transition-all duration-300 ease-out transform-gpu hover:scale-110 active:scale-110 sm:hover:scale-115 sm:active:scale-115 overflow-hidden rounded-xl sm:rounded-2xl bg-blue-950/90 border border-blue-800/80 hover:border-cyan-400 shadow-md hover:shadow-2xl hover:shadow-cyan-500/40 flex flex-col h-full justify-between cursor-pointer"
            >
              {/* Image container */}
              <div className="w-full aspect-[4/3] bg-blue-950 flex items-center justify-center overflow-hidden shrink-0 relative">
                <img
                  src={imgSrc}
                  alt={item.filename}
                  onError={() => handleImageError(item.id)}
                  className="w-full h-full object-cover group-hover:scale-105 active:scale-105 transition-transform duration-300 ease-out transform-gpu"
                />
                {/* Subtle sheen highlight effect on hover/touch */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {item.caption && (
                <div className="p-2 sm:p-3.5 bg-blue-950/95 border-t border-blue-800/70 grow flex items-center">
                  <p className="text-[11px] sm:text-xs text-blue-100/90 italic leading-snug sm:leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
