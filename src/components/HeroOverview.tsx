import React from 'react';

interface HeroOverviewProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSelectTab?: (tabId: number) => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = () => {
  return (
    <div className="relative pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8 text-center">
      {/* Banner Title Content */}
      <div className="relative max-w-[1400px] mx-auto flex flex-col items-center text-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-center">
          <span className="block mb-1 sm:mb-2 text-blue-100/95">
            HỌC SINH PHỔ THÔNG
          </span>
          <span className="block">
            SẼ HỌC{' '}
            <span className="relative inline-block mx-1.5 px-3.5 py-0.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-300 text-slate-950 font-black shadow-[0_0_35px_rgba(34,211,238,0.7)] ring-2 ring-cyan-300/80 transform hover:scale-105 transition-transform duration-200">
              AI
              {/* Shimmer light over AI */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none animate-pulse" />
            </span>{' '}
            NHƯ THẾ NÀO?
          </span>
        </h1>
      </div>
    </div>
  );
};

