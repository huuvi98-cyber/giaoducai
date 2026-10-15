import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface StageTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const STAGE_THEMES: Record<number, StageTheme> = {
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
};

const PRINCIPLE_THEMES = [
  {
    bg: 'bg-blue-50/70 hover:bg-blue-100/60',
    borderColor: 'border-blue-100',
    titleColor: 'text-blue-950',
  },
  {
    bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
    borderColor: 'border-emerald-100',
    titleColor: 'text-emerald-950',
  },
  {
    bg: 'bg-amber-50/70 hover:bg-amber-100/60',
    borderColor: 'border-amber-100',
    titleColor: 'text-amber-950',
  },
  {
    bg: 'bg-rose-50/70 hover:bg-rose-100/60',
    borderColor: 'border-rose-100',
    titleColor: 'text-rose-950',
  },
];

export const Tab5Progression: React.FC = () => {
  const stages = [
    { num: 1, title: 'Quan sát, trải nghiệm, nhận biết' },
    { num: 2, title: 'Tìm hiểu, giải thích, kiểm chứng' },
    { num: 3, title: 'Phân tích, phản biện, đánh giá' },
    { num: 4, title: 'Đề xuất, thiết kế và cải tiến giải pháp' },
  ];

  // Note: Removed semicolons at end of sentences per user instruction
  const principles = [
    'Sự hỗ trợ trực tiếp của giáo viên giảm dần',
    'Độ phức tạp của nhiệm vụ tăng dần',
    'Mức độ tự chủ và trách nhiệm của học sinh tăng dần',
    'Yêu cầu về kiểm chứng và chất lượng minh chứng ngày càng cao',
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tiến trình phát triển năng lực
          </h2>
        </div>

        {/* 4-Stage Flow matching soft pastel colors and body typography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {stages.map((s, idx) => {
            const theme = STAGE_THEMES[s.num];
            return (
              <div
                key={s.num}
                className={`p-3.5 sm:p-5 rounded-xl border ${theme.borderColor} ${theme.bg} text-left relative flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 transition-colors shadow-xs`}
              >
                <span className="p-1 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs font-bold text-xs sm:text-base flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                  {s.num}
                </span>
                <div className={`text-xs sm:text-sm md:text-base font-bold ${theme.titleColor} leading-snug`}>
                  {s.title}
                </div>

                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-1 text-blue-600 shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 4 Quy luật chuyển dịch với soft pastel sections & matching body font */}
        <div className="pt-6 border-t border-slate-200">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Quy luật chuyển dịch qua các cấp học
          </h3>
          <div className="space-y-3 sm:space-y-3.5">
            {principles.map((p, idx) => {
              const theme = PRINCIPLE_THEMES[idx] || PRINCIPLE_THEMES[0];
              return (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-5 rounded-xl border ${theme.borderColor} ${theme.bg} flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-xs transition-colors`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                      {p}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
