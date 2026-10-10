import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Tab5Progression: React.FC = () => {
  const stages = [
    { num: 1, title: 'Quan sát, trải nghiệm, nhận biết' },
    { num: 2, title: 'Tìm hiểu, giải thích, kiểm chứng' },
    { num: 3, title: 'Phân tích, phản biện, đánh giá' },
    { num: 4, title: 'Đề xuất, thiết kế và cải tiến giải pháp' },
  ];

  const principles = [
    'Sự hỗ trợ trực tiếp của giáo viên giảm dần;',
    'Độ phức tạp của nhiệm vụ tăng dần;',
    'Mức độ tự chủ và trách nhiệm của học sinh tăng dần;',
    'Yêu cầu về kiểm chứng và chất lượng minh chứng ngày càng cao.',
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section & Official Content */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tiến trình phát triển năng lực
          </h2>
        </div>

        {/* 4-Stage Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((s, idx) => (
            <div
              key={s.num}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 text-left relative flex items-center gap-3"
            >
              <span className="w-7 h-7 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                {s.num}
              </span>
              <div className="text-sm font-bold text-slate-900 leading-snug">
                {s.title}
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 rounded-full p-0.5 text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 4 Nguyên lý chuyển dịch (Nguyên văn) */}
        <div className="pt-6 border-t border-slate-200">
          <ul className="space-y-2.5 text-sm text-slate-800 leading-relaxed list-disc list-inside">
            {principles.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
