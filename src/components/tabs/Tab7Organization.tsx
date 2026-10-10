import React from 'react';
import { SCHOOL_ORGANIZATION } from '../../data/infographicData';
import { CheckCircle2 } from 'lucide-react';

interface PillarTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const PILLAR_THEMES: Record<string, PillarTheme> = {
  core: {
    bg: 'bg-blue-50/70 hover:bg-blue-100/60',
    borderColor: 'border-blue-100',
    titleColor: 'text-blue-950',
  },
  extended: {
    bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
    borderColor: 'border-emerald-100',
    titleColor: 'text-emerald-950',
  },
  integrated: {
    bg: 'bg-violet-50/70 hover:bg-violet-100/60',
    borderColor: 'border-violet-100',
    titleColor: 'text-violet-950',
  },
};

export const Tab7Organization: React.FC = () => {
  // Strip trailing semicolons if any
  const cleanPoint = (text: string) => {
    return text.replace(/;$/, '').trim();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cách tổ chức trong nhà trường
          </h2>
        </div>

        {/* 3 Pillars Visual Cards with soft colors and matching typography */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {SCHOOL_ORGANIZATION.map((pillar) => {
            const theme = PILLAR_THEMES[pillar.id] || PILLAR_THEMES.core;
            return (
              <div
                key={pillar.id}
                className={`p-5 sm:p-7 rounded-2xl border ${theme.borderColor} ${theme.bg} transition-colors shadow-xs flex flex-col justify-between`}
              >
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold ${theme.titleColor} mb-3.5`}>
                    {pillar.type}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                          {cleanPoint(point)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
