import React from 'react';
import { Tab1GeneralInfo } from './tabs/Tab1GeneralInfo';
import { Tab2Objectives } from './tabs/Tab2Objectives';
import { Tab3Strands } from './tabs/Tab3Strands';
import { Tab4Journey } from './tabs/Tab4Journey';
import { Tab5Progression } from './tabs/Tab5Progression';
import { Tab6BeyondTools } from './tabs/Tab6BeyondTools';
import { Tab7Organization } from './tabs/Tab7Organization';
import { Tab8Assessment } from './tabs/Tab8Assessment';
import { INFOGRAPHIC_SOURCE } from '../data/infographicData';
import { Sparkles, Layers, ArrowUp } from 'lucide-react';

interface FullInfographicViewProps {
  onBackToTabs: (targetTab?: number) => void;
}

export const FullInfographicView: React.FC<FullInfographicViewProps> = ({ onBackToTabs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 pb-16 animate-fadeIn">
      {/* Overview Banner */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
            <Layers className="w-4 h-4" />
            <span>CHẾ ĐỘ TOÀN CẢNH INFOGRAPHIC (8 CHUYÊN ĐỀ LIÊN TỤC)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold">
            Toàn bộ Khung Giáo dục AI Phổ thông trên một trang
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            {INFOGRAPHIC_SOURCE.decision} ngày {INFOGRAPHIC_SOURCE.date} · {INFOGRAPHIC_SOURCE.issuer}
          </p>
        </div>
        <button
          onClick={() => onBackToTabs()}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shrink-0 transition-colors"
        >
          Trở về dạng 8 Tab
        </button>
      </div>

      {/* 8 Sections Sequentially */}
      <section id="section-1" className="scroll-mt-24 space-y-3">
        <Tab1GeneralInfo />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-2" className="scroll-mt-24 space-y-3">
        <Tab2Objectives />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-3" className="scroll-mt-24 space-y-3">
        <Tab3Strands />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-4" className="scroll-mt-24 space-y-3">
        <Tab4Journey />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-5" className="scroll-mt-24 space-y-3">
        <Tab5Progression />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-6" className="scroll-mt-24 space-y-3">
        <Tab6BeyondTools />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-7" className="scroll-mt-24 space-y-3">
        <Tab7Organization />
      </section>

      <div className="w-full h-px bg-slate-200" />

      <section id="section-8" className="scroll-mt-24 space-y-3">
        <Tab8Assessment />
      </section>

      {/* Bottom Floating Scroll to top */}
      <div className="flex justify-center pt-8">
        <button
          onClick={scrollToTop}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-full text-xs font-semibold flex items-center gap-2 shadow-md transition-all"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Lên đầu trang</span>
        </button>
      </div>
    </div>
  );
};
