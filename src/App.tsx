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
      {/* Hero Infographic Banner */}
      <HeroOverview />

      {/* Tabs Bar (Only when not in full continuous view) */}
      {!isFullView && (
        <TabNav activeTab={activeTab} onSelectTab={handleSelectTab} />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    </div>
  );
}
