import React from 'react';

interface FooterProps {
  onSelectTab?: (tabId: number) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200 mt-16 py-6 text-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          <span className="font-semibold text-slate-800">Nguồn:</span> Khung nội dung giáo dục trí tuệ nhân tạo cho học sinh phổ thông, kèm theo Quyết định số 2422/QĐ-BGDĐT ngày 18-8-2026 của Bộ Giáo dục và Đào tạo
        </p>
      </div>
    </footer>
  );
};
