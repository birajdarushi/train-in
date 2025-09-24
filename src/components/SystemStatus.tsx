import React from 'react';
import { Wifi, AlertTriangle, CheckCircle } from 'lucide-react';

export const SystemStatus: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <CheckCircle className="w-4 h-4 text-green-400" />
        <span className="text-xs text-slate-300">AI Engine</span>
      </div>
      <div className="flex items-center space-x-2">
        <Wifi className="w-4 h-4 text-green-400" />
        <span className="text-xs text-slate-300">IR Network</span>
      </div>
      <div className="flex items-center space-x-2">
        <AlertTriangle className="w-4 h-4 text-amber-400" />
        <span className="text-xs text-slate-300">1 Alert</span>
      </div>
    </div>
  );
};