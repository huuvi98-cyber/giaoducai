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

  const getLevelTheme = (id: string) => {
    switch (id) {
      case 'tieuhoc':
        return {
          pill: 'bg-emerald-100/90 text-emerald-800 border-emerald-200',
          cardActive: 'border-blue-400 ring-2 ring-blue-400/20 bg-emerald-50/70',
          tagColor: 'text-emerald-950',
          bgHighlight: 'bg-emerald-50/70',
          borderColor: 'border-emerald-100',
        };
      case 'thcs':
        return {
          pill: 'bg-sky-100/90 text-sky-800 border-sky-200',
          cardActive: 'border-blue-400 ring-2 ring-blue-400/20 bg-sky-50/70',
          tagColor: 'text-sky-950',
          bgHighlight: 'bg-sky-50/70',
          borderColor: 'border-sky-100',
        };
      case 'thpt':
        return {
          pill: 'bg-violet-100/90 text-violet-800 border-violet-200',
          cardActive: 'border-blue-400 ring-2 ring-blue-400/20 bg-violet-50/70',
          tagColor: 'text-violet-950',
          bgHighlight: 'bg-violet-50/70',
          borderColor: 'border-violet-100',
        };
      default:
        return {
          pill: 'bg-slate-100 text-slate-800 border-slate-200',
          cardActive: 'border-blue-400 ring-2 ring-blue-400/20 bg-slate-50',
          tagColor: 'text-slate-900',
          bgHighlight: 'bg-slate-50',
          borderColor: 'border-slate-100',
        };
    }
  };

  const currentTheme = getLevelTheme(currentLevel.id);

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'tieuhoc':
        return <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 'thcs':
        return <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      case 'thpt':
        return <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
      default:
        return <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs">
        <div className="pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Hành trình năng lực qua ba cấp học
          </h2>
        </div>

        {/* Level Selector Segmented Controller */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
          {THREE_LEVEL_JOURNEY.map((lvl) => {
            const isSelected = activeLevelId === lvl.id;
            const theme = getLevelTheme(lvl.id);
            return (
              <button
                key={lvl.id}
                onClick={() => setActiveLevelId(lvl.id)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? `${theme.cardActive} shadow-xs`
                    : 'bg-white hover:bg-slate-50/80 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">
                    {lvl.grades}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${theme.pill}`}>
                    {lvl.level}
                  </span>
                </div>
                <div className="mt-2.5 text-xs sm:text-sm md:text-base font-bold text-slate-900">
                  {lvl.focusTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus Detail for Selected Level */}
      <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-wide ${currentTheme.tagColor}`}>
              {currentLevel.level} ({currentLevel.grades})
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              {currentLevel.focusTitle}
            </h3>
          </div>
        </div>

        {/* Trọng tâm năng lực */}
        <div className="p-5 sm:p-6 rounded-xl bg-blue-50/70 border border-blue-100 transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3 mb-2.5">
            <span className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            </span>
            <span className="text-xs sm:text-sm md:text-base font-bold text-blue-950">
              Trọng tâm năng lực
            </span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed pl-1 sm:pl-2">
            {currentLevel.focusContent}
          </div>
        </div>

        {/* Phương pháp chủ đạo */}
        <div className={`p-5 sm:p-6 rounded-xl ${currentTheme.bgHighlight} border ${currentTheme.borderColor} transition-colors`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3 mb-2.5">
            <span className="p-1.5 sm:p-2 rounded-lg bg-blue-100 text-blue-600 border border-blue-200/70 shrink-0 shadow-xs">
              {getMethodIcon(currentLevel.id)}
            </span>
            <span className={`text-xs sm:text-sm md:text-base font-bold ${currentTheme.tagColor}`}>
              Phương pháp chủ đạo
            </span>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed pl-1 sm:pl-2">
            {currentLevel.methods}
          </div>
        </div>
      </div>
    </div>
  );
};
