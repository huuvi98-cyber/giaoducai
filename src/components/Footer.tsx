import React from 'react';
import { TABS_CONFIG } from '../data/infographicData';

interface FooterProps {
  onSelectTab: (tabId: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-20 pt-10 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Quick Tabs Grid in footer */}
        <div>
          <span className="text-slate-300 font-bold block mb-3 uppercase tracking-wider text-[11px]">
            Chuyển nhanh đến 8 chuyên đề Infographic:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TABS_CONFIG.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onSelectTab(t.id);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className="text-left p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-700/50"
              >
                <span className="font-semibold block text-xs truncate">
                  {t.shortTitle}
                </span>
                <span className="text-[10px] text-slate-400">
                  {t.badge}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom source citation line */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed text-center sm:text-left">
          <p>
            <span className="font-semibold text-slate-300">Nguồn:</span> Khung nội dung giáo dục trí tuệ nhân tạo cho học sinh phổ thông, kèm theo Quyết định số 2422/QĐ-BGDĐT ngày 18-8-2026 của Bộ Giáo dục và Đào tạo
          </p>
        </div>
      </div>
    </footer>
  );
};
