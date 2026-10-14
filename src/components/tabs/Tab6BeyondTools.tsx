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
} from 'lucide-react';

interface DimensionTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const DIMENSION_THEMES: Record<number, DimensionTheme> = {
  1: {
    bg: 'bg-blue-50/70 hover:bg-blue-100/60',
    borderColor: 'border-blue-100',
    titleColor: 'text-blue-950',
  },
  2: {
    bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
    borderColor: 'border-emerald-100',
    titleColor: 'text-emerald-950',
  },
  3: {
    bg: 'bg-amber-50/70 hover:bg-amber-100/60',
    borderColor: 'border-amber-100',
    titleColor: 'text-amber-950',
  },
  4: {
    bg: 'bg-violet-50/70 hover:bg-violet-100/60',
    borderColor: 'border-violet-100',
    titleColor: 'text-violet-950',
  },
  5: {
    bg: 'bg-rose-50/70 hover:bg-rose-100/60',
    borderColor: 'border-rose-100',
    titleColor: 'text-rose-950',
  },
  6: {
    bg: 'bg-sky-50/70 hover:bg-sky-100/60',
    borderColor: 'border-sky-100',
    titleColor: 'text-sky-950',
  },
};

export const Tab6BeyondTools: React.FC = () => {
  const getDimensionIcon = (id: number) => {
    switch (id) {
      case 1:
        return <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 2:
        return <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 3:
        return <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 4:
        return <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 5:
        return <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 6:
        return <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      default:
        return <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        {/* Header Section */}
        <div className="pb-4 border-b border-slate-100 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Học AI không chỉ là học công cụ
          </h2>
        </div>

        {/* 6 Dimensions Section Heading */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Năng lực AI được xem xét đồng thời trên 6 phương diện:
          </h3>
        </div>

        {/* 6 Grid Cards: compact, no extra description, all blue icons, soft pastel backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SIX_DIMENSIONS.map((dim) => {
            const theme = DIMENSION_THEMES[dim.id] || DIMENSION_THEMES[1];
            return (
              <div
                key={dim.id}
                className={`p-3.5 sm:p-5 rounded-xl border ${theme.borderColor} ${theme.bg} transition-colors shadow-xs flex items-center justify-between gap-3`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className={`text-xs sm:text-sm md:text-base font-bold ${theme.titleColor} leading-snug`}>
                    <span className="text-blue-700 mr-1.5">{dim.id}.</span>
                    {dim.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emphasized Quote Banner in gentle pastel tint - moved below the 6 dimensions */}
        <div className="mt-8 p-5 sm:p-7 rounded-2xl bg-blue-50/60 border border-blue-100 shadow-xs relative overflow-hidden">
          <Quote className="w-10 h-10 sm:w-16 sm:h-16 text-blue-200/30 absolute right-4 top-2 pointer-events-none" />
          <div className="relative max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 leading-snug">
              {EMPHASIS_QUOTE.quote}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-700 mt-2 font-medium">
              {EMPHASIS_QUOTE.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
