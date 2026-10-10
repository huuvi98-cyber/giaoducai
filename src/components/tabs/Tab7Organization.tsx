import React from 'react';
import { SCHOOL_ORGANIZATION } from '../../data/infographicData';
import {
  School,
  Clock,
  Puzzle,
  CheckCircle2,
  Users,
} from 'lucide-react';

export const Tab7Organization: React.FC = () => {
  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'core':
        return <Clock className="w-5 h-5 text-indigo-600" />;
      case 'extended':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'integrated':
        return <Puzzle className="w-5 h-5 text-violet-600" />;
      default:
        return <School className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cách tổ chức trong nhà trường
          </h2>
        </div>
      </div>

      {/* 3 Pillars Visual Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {SCHOOL_ORGANIZATION.map((pillar) => {
          return (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {pillar.type}
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  {pillar.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
