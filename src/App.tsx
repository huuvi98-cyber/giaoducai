import React, { useState } from 'react';
import { HeroOverview } from './components/HeroOverview';
import { TabNav } from './components/TabNav';
import { Tab1GeneralInfo } from './components/tabs/Tab1GeneralInfo';
import { Tab2Objectives } from './components/tabs/Tab2Objectives';
import { Tab3Strands } from './components/tabs/Tab3Strands';
import { Tab4Journey } from './components/tabs/Tab4Journey';
import { Tab5Progression } from './components/tabs/Tab5Progression';
import { Tab6BeyondTools } from './components/tabs/Tab6BeyondTools';
import { Tab7Organization } from './components/tabs/Tab7Organization';
import { Tab8Assessment } from './components/tabs/Tab8Assessment';
import { FullInfographicView } from './components/FullInfographicView';
import { Footer } from './components/Footer';
import { InfographicImageGallery } from './components/InfographicImageGallery';

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isFullView, setIsFullView] = useState<boolean>(false);

  const handleSelectTab = (tabId?: number) => {
    if (tabId) {
      setActiveTab(tabId);
    }
    if (isFullView) {
      setIsFullView(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Full-bleed Cover Banner with exact blue background matching title & gallery */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white border-b border-blue-800/50 shadow-2xl">
        {/* Ambient soft glow */}
        <div className="absolute -top-16 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Floating small circular tech particles */}
        <div className="absolute top-1/4 left-[12%] w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] pointer-events-none animate-particle-1" />
        <div className="absolute top-2/3 left-[22%] w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_6px_#93c5fd] pointer-events-none animate-particle-2" />
        <div className="absolute top-1/5 right-[18%] w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_10px_#7dd3fc] pointer-events-none animate-particle-3" />
        <div className="absolute top-3/4 right-[28%] w-2 h-2 rounded-full bg-cyan-200 shadow-[0_0_8px_#a5f3fc] pointer-events-none animate-particle-4" />
        <div className="absolute top-1/2 left-[48%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff] pointer-events-none animate-particle-5" />
        <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] pointer-events-none animate-particle-2" />
        <HeroOverview />

        {/* Image Diagram Gallery inside the cover section */}
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-12 pb-12 sm:pb-16 relative z-10">
          <InfographicImageGallery />
        </div>
      </section>

      {/* Tabs Bar (Only when not in full continuous view) */}
      {!isFullView && (
        <TabNav activeTab={activeTab} onSelectTab={handleSelectTab} />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 my-4 sm:my-6 bg-gradient-to-br from-blue-500/35 via-sky-400/25 to-blue-600/20 border border-blue-300/70 rounded-3xl shadow-sm backdrop-blur-xs">
        {isFullView ? (
          <FullInfographicView onBackToTabs={handleSelectTab} />
        ) : (
          <div className="space-y-8">
            {/* Tab Body */}
            {activeTab === 1 && <Tab1GeneralInfo />}
            {activeTab === 2 && <Tab2Objectives />}
            {activeTab === 3 && <Tab3Strands />}
            {activeTab === 4 && <Tab4Journey />}
            {activeTab === 5 && <Tab5Progression />}
            {activeTab === 6 && <Tab6BeyondTools />}
            {activeTab === 7 && <Tab7Organization />}
            {activeTab === 8 && <Tab8Assessment />}
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
