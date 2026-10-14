import React from 'react';

interface HeroOverviewProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSelectTab?: (tabId: number) => void;
}

export const HeroOverview: React.FC<HeroOverviewProps> = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-blue-800/50">
      {/* Ambient soft glow */}
      <div className="absolute -top-16 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating small circular tech particles */}
      <div className="absolute top-1/4 left-[12%] w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] pointer-events-none animate-particle-1" />
      <div className="absolute top-2/3 left-[22%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_#93c5fd] pointer-events-none animate-particle-2" />
      <div className="absolute top-1/5 right-[18%] w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_10px_#7dd3fc] pointer-events-none animate-particle-3" />
      <div className="absolute top-3/4 right-[28%] w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_8px_#a5f3fc] pointer-events-none animate-particle-4" />
      <div className="absolute top-1/2 left-[48%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff] pointer-events-none animate-particle-5" />
      <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] pointer-events-none animate-particle-2" />
      <div className="absolute bottom-1/4 left-[6%] w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] pointer-events-none animate-particle-4" />

      {/* Banner Content */}
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
    </section>
  );
};

