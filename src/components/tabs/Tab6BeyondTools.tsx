import React from 'react';
import { SIX_DIMENSIONS, EMPHASIS_QUOTE } from '../../data/infographicData';
import {
  Quote,
  BookOpen,
  Target,
  Compass,
  FileCheck,
  Shield,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

export const Tab6BeyondTools: React.FC = () => {
  const getDimensionIcon = (id: number) => {
    switch (id) {
      case 1:
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Target className="w-5 h-5 text-rose-600" />;
      case 3:
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 4:
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
      case 5:
        return <Shield className="w-5 h-5 text-sky-600" />;
      case 6:
        return <Lightbulb className="w-5 h-5 text-violet-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section with Key Quote */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Học AI không chỉ là học công cụ
          </h2>
        </div>

        {/* Emphasized Quote Banner */}
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border border-rose-200 shadow-xs relative overflow-hidden">
          <Quote className="w-16 h-16 text-rose-200/50 absolute right-4 top-2 pointer-events-none" />
          <div className="relative max-w-3xl">
            <p className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {EMPHASIS_QUOTE.quote}
            </p>
            <p className="text-sm text-slate-700 mt-2 font-medium">
              {EMPHASIS_QUOTE.explanation}
            </p>
          </div>
        </div>
      </div>

      {/* The 6 Dimensions Visual Grid */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIX_DIMENSIONS.map((dim) => {
            return (
              <div
                key={dim.id}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-2xs flex flex-col items-start gap-2.5"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 rounded-lg bg-slate-100">
                    {getDimensionIcon(dim.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{dim.id}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {dim.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
