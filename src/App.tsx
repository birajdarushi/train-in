import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { LiveRecommendations } from './components/LiveRecommendations';
import { ScenarioSimulation } from './components/ScenarioSimulation';
import { DisruptionManagement } from './components/DisruptionManagement';
import { TrainMonitoring } from './components/TrainMonitoring';
import { AuditTrail } from './components/AuditTrail';

export type ActiveView = 'dashboard' | 'recommendations' | 'simulation' | 'disruption' | 'monitoring' | 'audit';

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'recommendations':
        return <LiveRecommendations />;
      case 'simulation':
        return <ScenarioSimulation />;
      case 'disruption':
        return <DisruptionManagement />;
      case 'monitoring':
        return <TrainMonitoring />;
      case 'audit':
        return <AuditTrail />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderActiveView()}
    </Layout>
  );
}

export default App;