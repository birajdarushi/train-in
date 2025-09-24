import React from 'react';
import { Monitor, Train, MapPin, Clock, Activity } from 'lucide-react';
import { TrainList } from './TrainList';
import { SectionMap } from './SectionMap';

export const TrainMonitoring: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Monitor className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Train Monitoring</h2>
            <p className="text-slate-400">Live train positions and section status</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-slate-300">On Time: 12</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <span className="text-slate-300">Delayed: 3</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-slate-300">Critical: 1</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SectionMap />
        </div>
        <div>
          <TrainList />
        </div>
      </div>
    </div>
  );
};