import React from 'react';
import { 
  BarChart3, 
  Brain, 
  PlayCircle, 
  AlertCircle, 
  Monitor, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { ActiveView } from '../App';

interface SidebarProps {
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

const menuItems = [
  { id: 'dashboard' as ActiveView, label: 'Dashboard', icon: BarChart3 },
  { id: 'recommendations' as ActiveView, label: 'AI Recommendations', icon: Brain },
  { id: 'simulation' as ActiveView, label: 'Scenario Simulation', icon: PlayCircle },
  { id: 'disruption' as ActiveView, label: 'Disruption Management', icon: AlertCircle },
  { id: 'monitoring' as ActiveView, label: 'Train Monitoring', icon: Monitor },
  { id: 'audit' as ActiveView, label: 'Audit Trail', icon: FileText },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 min-h-[calc(100vh-80px)]">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};