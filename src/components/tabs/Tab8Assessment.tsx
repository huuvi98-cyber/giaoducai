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

export const Tab8Assessment: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Đánh giá học sinh như thế nào
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Nguyên tắc đánh giá vì sự tiến bộ, danh mục minh chứng phong phú và quy trình khai báo sử dụng AI minh bạch
          </p>
        </div>
      </div>

      {/* 4 Golden Principles of Assessment */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            Định hướng đánh giá nhân văn & công bằng
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ASSESSMENT_PRINCIPLES.map((p) => (
            <div
              key={p.id}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                  0{p.id}
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minh chứng đánh giá (12 Types of Evaluative Evidence Matrix) */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">
            12 Loại minh chứng đánh giá năng lực AI
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ASSESSMENT_EVIDENCES.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800 flex items-center gap-2 hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Khi sử dụng AI, học sinh cần khai báo */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Quy định khai báo khi sử dụng AI
          </h3>
        </div>

        {/* 4 Mandatory Declaration Criteria Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AI_DECLARATION_RULES.fields.map((field) => (
            <div
              key={field.id}
              className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between"
            >
              <h4 className="text-sm font-bold text-white">
                {field.label}
              </h4>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
            </div>
          ))}
        </div>

        {/* Vital Conclusion Card */}
        <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 text-xs sm:text-sm font-medium flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            {AI_DECLARATION_RULES.conclusion}
          </div>
        </div>
      </div>
    </div>
  );
};
