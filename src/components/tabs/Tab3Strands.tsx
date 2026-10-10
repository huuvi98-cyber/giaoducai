import React from 'react';
import { FOUR_STRANDS } from '../../data/infographicData';
import {
  Compass,
  ShieldCheck,
  Cpu,
  Wrench,
  Layers,
} from 'lucide-react';

export const Tab3Strands: React.FC = () => {
  const getStrandIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-rose-600" />;
      case 3:
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 4:
        return <Wrench className="w-5 h-5 text-amber-600" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Overview Card & Official Content */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Bốn mạch kiến thức và bốn miền năng lực
          </h2>
        </div>

        {/* Official 4-Strand Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700">
                <th className="py-3 px-4 font-semibold w-1/3">Bốn mạch kiến thức</th>
                <th className="py-3 px-4 font-semibold">Bốn miền năng lực hình thành ở học sinh</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70">
              {FOUR_STRANDS.map((strand) => (
                <tr
                  key={strand.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="py-4 px-4 font-bold text-slate-900 align-top">
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-lg bg-slate-100 shrink-0">
                        {getStrandIcon(strand.id)}
                      </span>
                      <span>{strand.strand}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-800 leading-relaxed font-normal">
                    {strand.competency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
