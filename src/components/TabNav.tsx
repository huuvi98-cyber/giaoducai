import React from 'react';

interface TabNavProps {
  activeTab: number;
  onSelectTab: (id: number) => void;
}

const TAB_STYLES = [
  {
    id: 1,
    num: '1',
    label: 'Thông tin chung',
    gradient: 'bg-gradient-to-b from-amber-400 via-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.4)',
  },
  {
    id: 2,
    num: '2',
    label: 'Mục tiêu lớn nhất',
    gradient: 'bg-gradient-to-b from-lime-400 via-lime-500 to-emerald-600',
    glowColor: 'rgba(132, 204, 22, 0.4)',
  },
  {
    id: 3,
    num: '3',
    label: 'Bốn mạch kiến thức và bốn miền năng lực',
    gradient: 'bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600',
    glowColor: 'rgba(14, 165, 233, 0.4)',
  },
  {
    id: 4,
    num: '4',
    label: 'Hành trình năng lực qua ba cấp học',
    gradient: 'bg-gradient-to-b from-pink-400 via-rose-500 to-pink-600',
    glowColor: 'rgba(244, 63, 94, 0.4)',
  },
  {
    id: 5,
    num: '5',
    label: 'Tiến trình phát triển năng lực',
    gradient: 'bg-gradient-to-b from-purple-400 via-violet-500 to-indigo-600',
    glowColor: 'rgba(168, 85, 247, 0.4)',
  },
  {
    id: 6,
    num: '6',
    label: 'Học AI không chỉ là học công cụ',
    gradient: 'bg-gradient-to-b from-indigo-400 via-indigo-600 to-blue-700',
    glowColor: 'rgba(99, 102, 241, 0.4)',
  },
  {
    id: 7,
    num: '7',
    label: 'Cách tổ chức trong nhà trường',
    gradient: 'bg-gradient-to-b from-teal-400 via-emerald-500 to-teal-700',
    glowColor: 'rgba(20, 184, 166, 0.4)',
  },
  {
    id: 8,
    num: '8',
    label: 'Đánh giá học sinh như thế nào',
    gradient: 'bg-gradient-to-b from-rose-500 via-red-500 to-rose-700',
    glowColor: 'rgba(239, 68, 68, 0.4)',
  },
];

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onSelectTab }) => {
  return (
    <div className="sticky top-0 z-30 bg-slate-100/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs pt-3 pb-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* 2 rows with 4 squarish tabs in each row */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 py-1">
          {TAB_STYLES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                title={`${tab.num}. ${tab.label}`}
                style={{
                  boxShadow: isActive
                    ? `0 10px 20px -2px ${tab.glowColor}, 0 4px 6px -1px rgba(0,0,0,0.15)`
                    : '0 4px 8px -1px rgba(0,0,0,0.08)',
                }}
                className={`relative min-h-[110px] sm:min-h-[130px] md:min-h-[148px] flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-t-2xl sm:rounded-t-3xl rounded-b-none transition-all duration-200 cursor-pointer select-none group text-white ${tab.gradient} active:translate-y-1.5 ${
                  isActive
                    ? 'translate-y-1 opacity-100 scale-[0.99]'
                    : 'translate-y-0 opacity-90 hover:opacity-100 hover:translate-y-0.5'
                }`}
              >
                {/* Larger, bold, uppercase (CAP) label */}
                <span className="text-xs sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-wide text-white text-center leading-snug sm:leading-tight drop-shadow-md px-1 line-clamp-3">
                  {tab.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                  <span className="absolute -bottom-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full shadow-md ring-2 ring-slate-800 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
