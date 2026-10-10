import React from 'react';
import { Sparkles, Printer, FileText, Layers, Compass } from 'lucide-react';

interface HeaderProps {
  onToggleFullView: () => void;
  isFullView: boolean;
  onSelectTab: (tabId: number) => void;
  activeTab: number;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleFullView,
  isFullView,
  onSelectTab,
  activeTab,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly adheres to Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-sky-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-indigo-100" />
            </div>
            <span>
              GIÁO DỤC AI <span className="text-indigo-600">PHỔ THÔNG</span>
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => {
                if (isFullView) onToggleFullView();
                onSelectTab(1);
              }}
              className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 ${
                !isFullView && activeTab === 1 ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              1. Thông tin chung
            </button>
            <button
              onClick={() => {
                if (isFullView) onToggleFullView();
                onSelectTab(3);
              }}
              className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 ${
                !isFullView && activeTab === 3 ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              3. Bốn mạch năng lực
            </button>
            <button
              onClick={() => {
                if (isFullView) onToggleFullView();
                onSelectTab(4);
              }}
              className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 ${
                !isFullView && activeTab === 4 ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              4. Ba cấp học
            </button>
            <button
              onClick={() => {
                if (isFullView) onToggleFullView();
                onSelectTab(8);
              }}
              className={`hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0 ${
                !isFullView && activeTab === 8 ? 'text-indigo-600 font-semibold' : ''
              }`}
            >
              8. Khai báo & Đánh giá
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleFullView}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                isFullView
                  ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
              title="Xem toàn bộ 8 phần trên 1 trang dài"
            >
              {isFullView ? (
                <>
                  <Layers className="w-4 h-4" />
                  <span>Chế độ 8 Tab</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Toàn cảnh Infographic</span>
                </>
              )}
            </button>
            <button
              onClick={() => window.print()}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              title="In hoặc lưu PDF Infographic"
              aria-label="In bản Infographic"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
