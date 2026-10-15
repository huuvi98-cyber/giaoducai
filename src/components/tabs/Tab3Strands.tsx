import React from 'react';
import { FOUR_STRANDS } from '../../data/infographicData';
import {
  Compass,
  ShieldCheck,
  Cpu,
  Wrench,
  Layers,
} from 'lucide-react';

interface RowTheme {
  bg: string;
  borderColor: string;
  titleColor: string;
}

const STRAND_THEMES: Record<number, RowTheme> = {
  1: {
    bg: 'bg-emerald-50/70 hover:bg-emerald-100/60',
    borderColor: 'border-emerald-100',
    titleColor: 'text-emerald-950',
  },
  2: {
    bg: 'bg-rose-50/70 hover:bg-rose-100/60',
    borderColor: 'border-rose-100',
    titleColor: 'text-rose-950',
  },
  3: {
    bg: 'bg-blue-50/70 hover:bg-blue-100/60',
    borderColor: 'border-blue-100',
    titleColor: 'text-blue-950',
  },
  4: {
    bg: 'bg-amber-50/70 hover:bg-amber-100/60',
    borderColor: 'border-amber-100',
    titleColor: 'text-amber-950',
  },
};

export const Tab3Strands: React.FC = () => {
  const getStrandIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 2:
        return <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 3:
        return <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 4:
        return <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      default:
        return <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Overview Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bốn mạch kiến thức và bốn miền năng lực
          </h2>
        </div>

        {/* 4-Strand Data Table matching Tab1 typography (text-xs sm:text-sm md:text-base) and gentle soft colors */}
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/90 border-b border-slate-200 text-slate-800">
                <th className="py-3.5 px-4 sm:px-6 font-bold text-xs sm:text-sm md:text-base w-1/3 sm:w-2/5">
                  Bốn mạch kiến thức
                </th>
                <th className="py-3.5 px-4 sm:px-6 font-bold text-xs sm:text-sm md:text-base">
                  Bốn miền năng lực hình thành ở học sinh
                </th>
              </tr>
            </thead>
            <tbody>
              {FOUR_STRANDS.map((strand) => {
                const theme = STRAND_THEMES[strand.id] || {
                  bg: 'bg-blue-50/70 hover:bg-blue-100/60',
                  borderColor: 'border-blue-100',
                  titleColor: 'text-blue-950',
                };
                return (
                  <tr
                    key={strand.id}
                    className={`${theme.bg} ${theme.borderColor} border-b transition-colors`}
                  >
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                        <span className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
                          {getStrandIcon(strand.id)}
                        </span>
                        <span className={`text-xs sm:text-sm md:text-base font-bold ${theme.titleColor}`}>
                          {strand.strand}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 align-middle">
                      <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed">
                        {strand.competency}
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
