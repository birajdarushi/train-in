import React from 'react';
import { Train, Wifi, AlertTriangle, User, Clock } from 'lucide-react';
import { SystemStatus } from './SystemStatus';

export const Header: React.FC = () => {
  const currentTime = new Date().toLocaleTimeString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    hour12: false 
  });
  
  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Train className="w-8 h-8 text-blue-400" />
            <div>
              <h1 className="text-xl font-bold text-white">Railway AI Control System</h1>
              <p className="text-sm text-slate-400">Indian Railways - Section Control</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <SystemStatus />
          <div className="flex items-center space-x-2 text-slate-300">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{currentTime} IST</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <User className="w-5 h-5" />
            <span className="text-sm">Controller: S. Sharma</span>
          </div>
        </div>
      </div>
    </header>
  );
};