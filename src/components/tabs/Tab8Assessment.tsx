import React from 'react';
import {
  ASSESSMENT_PRINCIPLES,
  ASSESSMENT_EVIDENCES,
  AI_DECLARATION_RULES,
} from '../../data/infographicData';
import {
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface PrincipleTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const PRINCIPLE_THEMES: PrincipleTheme[] = [
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
    bg: 'bg-violet-50/70 hover:bg-violet-100/60',
    borderColor: 'border-violet-100',
    titleColor: 'text-violet-950',
  },
];

export const Tab8Assessment: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="pt-2 pb-1 px-1 sm:px-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Đánh giá học sinh như thế nào
        </h2>
      </div>

      {/* 4 Định hướng đánh giá */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Nguyên tắc
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ASSESSMENT_PRINCIPLES.map((p, idx) => {
            const theme = PRINCIPLE_THEMES[idx] || PRINCIPLE_THEMES[0];
            return (
              <div
                key={p.id}
                className={`p-3.5 sm:p-5 rounded-xl border ${theme.borderColor} ${theme.bg} transition-colors shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5`}
              >
                <div className="p-1 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs font-bold text-xs sm:text-base flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                  0{p.id}
                </div>
                <div className={`text-xs sm:text-sm md:text-base font-bold ${theme.titleColor} leading-relaxed`}>
                  {p.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Minh chứng đánh giá (12 Loại minh chứng) */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100 mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Minh chứng đánh giá
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ASSESSMENT_EVIDENCES.map((item, idx) => {
            const pastelColors = [
              'bg-blue-50/60 border-blue-100 hover:bg-blue-100/50',
              'bg-emerald-50/60 border-emerald-100 hover:bg-emerald-100/50',
              'bg-amber-50/60 border-amber-100 hover:bg-amber-100/50',
              'bg-violet-50/60 border-violet-100 hover:bg-violet-100/50',
              'bg-rose-50/60 border-rose-100 hover:bg-rose-100/50',
              'bg-sky-50/60 border-sky-100 hover:bg-sky-100/50',
            ];
            const colorClass = pastelColors[idx % pastelColors.length];
            return (
              <div
                key={idx}
                className={`p-3 sm:p-4 rounded-xl border ${colorClass} transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 shadow-2xs`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 leading-snug">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Khi sử dụng AI, học sinh cần khai báo */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Quy định khai báo khi sử dụng AI
          </h3>
        </div>

        {/* 4 Mandatory Declaration Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {AI_DECLARATION_RULES.fields.map((field, idx) => {
            const pastelTints = [
              'bg-blue-50/70 border-blue-100',
              'bg-emerald-50/70 border-emerald-100',
              'bg-amber-50/70 border-amber-100',
              'bg-violet-50/70 border-violet-100',
            ];
            const tint = pastelTints[idx % pastelTints.length];
            return (
              <div
                key={field.id}
                className={`p-3.5 sm:p-5 rounded-xl border ${tint} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-2xs`}
              >
                <h4 className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
                  {field.label}
                </h4>
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
              </div>
            );
          })}
        </div>

        {/* Vital Conclusion Card with gentle pastel background and blue-600 icon */}
        <div className="p-3.5 sm:p-5 rounded-xl bg-blue-50/80 border border-blue-100 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3.5">
          <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
          </div>
          <div className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed pt-0.5">
            {AI_DECLARATION_RULES.conclusion}
          </div>
        </div>
      </div>
    </div>
  );
};
