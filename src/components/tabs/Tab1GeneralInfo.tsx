import React from 'react';
import { GENERAL_INFO } from '../../data/infographicData';
import {
  GraduationCap,
  Layers,
  Clock,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface RowTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const SECTION_THEMES: Record<string, RowTheme> = {
  scope: {
    bg: 'bg-blue-50/70 hover:bg-blue-100/60',
    borderColor: 'border-blue-100',
    titleColor: 'text-blue-950',
  },
  structure: {
    bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
    borderColor: 'border-emerald-100',
    titleColor: 'text-emerald-950',
  },
  duration: {
    bg: 'bg-amber-50/70 hover:bg-amber-100/60',
    borderColor: 'border-amber-100',
    titleColor: 'text-amber-950',
  },
  qualities: {
    bg: 'bg-violet-50/70 hover:bg-violet-100/60',
    borderColor: 'border-violet-100',
    titleColor: 'text-violet-950',
  },
  assessment: {
    bg: 'bg-rose-50/70 hover:bg-rose-100/60',
    borderColor: 'border-rose-100',
    titleColor: 'text-rose-950',
  },
};

export const Tab1GeneralInfo: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    scope: <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    structure: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    duration: <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    qualities: <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
    assessment: <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />,
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section with context */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 pt-3 px-4 rounded-xl bg-amber-100/80 border-b border-amber-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 tracking-tight">
            Thông tin chung
          </h2>
        </div>

        {/* Official Data Table with comfortable body typography & soft light green theme */}
        <div className="mt-6 overflow-hidden rounded-xl bg-emerald-50/80 border border-emerald-200/90 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-100/90 border-b border-emerald-200 text-emerald-950">
                <th className="py-3.5 px-4 sm:px-6 font-bold text-xs sm:text-sm md:text-base w-1/3 sm:w-2/5">
                  Thông tin
                </th>
                <th className="py-3.5 px-4 sm:px-6 font-bold text-xs sm:text-sm md:text-base">
                  Nội dung
                </th>
              </tr>
            </thead>
            <tbody>
              {GENERAL_INFO.map((item) => {
                const theme = SECTION_THEMES[item.key] || SECTION_THEMES.scope;
                return (
                  <tr
                    key={item.key}
                    className={`${theme.bg} ${theme.borderColor} border-b transition-colors`}
                  >
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                        <span className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
                          {iconMap[item.key]}
                        </span>
                        <span className={`text-xs sm:text-sm md:text-base font-bold ${theme.titleColor}`}>
                          {item.title}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                        {item.content}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
