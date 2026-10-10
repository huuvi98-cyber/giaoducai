import React, { useState } from 'react';
import { THREE_LEVEL_JOURNEY } from '../../data/infographicData';
import {
  BookOpen,
  Gamepad2,
  Search,
  Scale,
} from 'lucide-react';

export const Tab4Journey: React.FC = () => {
  const [activeLevelId, setActiveLevelId] = useState<'tieuhoc' | 'thcs' | 'thpt'>('tieuhoc');

  const currentLevel = THREE_LEVEL_JOURNEY.find((lvl) => lvl.id === activeLevelId) || THREE_LEVEL_JOURNEY[0];

  const getLevelColor = (id: string) => {
    switch (id) {
      case 'tieuhoc':
        return {
          pill: 'bg-emerald-100 text-emerald-800 border-emerald-300',
          cardActive: 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/20',
          accent: 'text-emerald-600',
          bgHighlight: 'bg-emerald-50',
          btnActive: 'bg-emerald-600 text-white',
        };
      case 'thcs':
        return {
          pill: 'bg-sky-100 text-sky-800 border-sky-300',
          cardActive: 'border-sky-500 ring-2 ring-sky-500/20 bg-sky-50/20',
          accent: 'text-sky-600',
          bgHighlight: 'bg-sky-50',
          btnActive: 'bg-sky-600 text-white',
        };
      case 'thpt':
        return {
          pill: 'bg-indigo-100 text-indigo-800 border-indigo-300',
          cardActive: 'border-indigo-500 ring-2 ring-indigo-500/20 bg-indigo-50/20',
          accent: 'text-indigo-600',
          bgHighlight: 'bg-indigo-50',
          btnActive: 'bg-indigo-600 text-white',
        };
      default:
        return {
          pill: 'bg-slate-100 text-slate-800 border-slate-300',
          cardActive: 'border-slate-500',
          accent: 'text-slate-600',
          bgHighlight: 'bg-slate-50',
          btnActive: 'bg-slate-600 text-white',
        };
    }
  };

  const currentColor = getLevelColor(currentLevel.id);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hành trình năng lực qua ba cấp học
          </h2>
        </div>

        {/* Level Selector Segmented Controller */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {THREE_LEVEL_JOURNEY.map((lvl) => {
            const isSelected = activeLevelId === lvl.id;
            const color = getLevelColor(lvl.id);
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? `${color.cardActive} shadow-xs`
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    {lvl.grades}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${color.pill}`}>
                    {lvl.level}
                  </span>
                </div>
                <div className="mt-2 text-base font-bold text-slate-900">
                  {lvl.focusTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus Detail for Selected Level */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className={`text-xs font-bold uppercase tracking-wide ${currentColor.accent}`}>
              {currentLevel.level} ({currentLevel.grades})
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              {currentLevel.focusTitle}
            </h3>
          </div>
        </div>

        {/* Trọng tâm năng lực (Verbatim content) */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Trọng tâm năng lực:</span>
          </div>
          <p className="text-sm text-slate-800 leading-relaxed font-normal">
            {currentLevel.focusContent}
          </p>
        </div>

        {/* Phương pháp chủ đạo (Verbatim content) */}
        <div className={`p-5 rounded-xl ${currentColor.bgHighlight} border border-slate-200/80`}>
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            {currentLevel.id === 'tieuhoc' && <Gamepad2 className="w-4 h-4 text-emerald-600" />}
            {currentLevel.id === 'thcs' && <Search className="w-4 h-4 text-sky-600" />}
            {currentLevel.id === 'thpt' && <Scale className="w-4 h-4 text-indigo-600" />}
            <span>Phương pháp chủ đạo:</span>
          </div>
          <p className="text-sm text-slate-900 leading-relaxed font-semibold">
            {currentLevel.methods}
          </p>
        </div>
      </div>
    </div>
  );
};
