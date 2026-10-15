import React from 'react';
import {
  Bot,
  Compass,
  FileCheck2,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

interface AbilityItem {
  id: number;
  title: string;
  bg: string;
  borderColor: string;
  badgeBg: string;
}

export const Tab2Objectives: React.FC = () => {
  const abilities: AbilityItem[] = [
    {
      id: 1,
      title: 'Tương tác với AI',
      bg: 'bg-blue-50/70 hover:bg-blue-100/60',
      borderColor: 'border-blue-100',
      badgeBg: 'bg-blue-100/80 text-blue-800 border-blue-200/80',
    },
    {
      id: 2,
      title: 'Ứng dụng AI trong học tập và cuộc sống',
      bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
      borderColor: 'border-emerald-100',
      badgeBg: 'bg-emerald-100/80 text-emerald-800 border-emerald-200/80',
    },
    {
      id: 3,
      title: 'Kiểm chứng, đánh giá kết quả do AI cung cấp',
      bg: 'bg-amber-50/70 hover:bg-amber-100/60',
      borderColor: 'border-amber-100',
      badgeBg: 'bg-amber-100/80 text-amber-800 border-amber-200/80',
    },
    {
      id: 4,
      title: 'Tham gia kiến tạo sản phẩm, giải pháp ứng dụng AI',
      bg: 'bg-violet-50/70 hover:bg-violet-100/60',
      borderColor: 'border-violet-100',
      badgeBg: 'bg-violet-100/80 text-violet-800 border-violet-200/80',
    },
    {
      id: 5,
      title: 'Sử dụng và phát triển AI hiệu quả, sáng tạo, có trách nhiệm',
      bg: 'bg-rose-50/70 hover:bg-rose-100/60',
      borderColor: 'border-rose-100',
      badgeBg: 'bg-rose-100/80 text-rose-800 border-rose-200/80',
    },
  ];

  const icons = [
    <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    <FileCheck2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Overview Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mục tiêu lớn nhất
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base font-bold text-slate-800 leading-relaxed">
            Hình thành và phát triển năng lực AI để học sinh trở thành công dân số chủ động, có khả năng:
          </p>
        </div>

        {/* 5 Abilities List with matching font text-xs sm:text-sm md:text-base */}
        <div className="mt-6 space-y-3 sm:space-y-3.5">
          {abilities.map((ability, idx) => (
            <div
              key={ability.id}
              className={`p-4 sm:p-5 rounded-xl border ${ability.borderColor} ${ability.bg} transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-xs`}
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
                {icons[idx]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                  {ability.title}
                </div>
              </div>
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border ${ability.badgeBg} font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs`}
              >
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
