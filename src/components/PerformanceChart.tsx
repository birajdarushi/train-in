import React from 'react';
import { BarChart3 } from 'lucide-react';

export const PerformanceChart: React.FC = () => {
  const data = [
    { hour: '06:00', baseline: 45, optimized: 52, delay: 18 },
    { hour: '08:00', baseline: 38, optimized: 48, delay: 25 },
    { hour: '10:00', baseline: 42, optimized: 55, delay: 15 },
    { hour: '12:00', baseline: 40, optimized: 51, delay: 20 },
    { hour: '14:00', baseline: 43, optimized: 58, delay: 12 },
    { hour: '16:00', baseline: 39, optimized: 49, delay: 22 },
    { hour: '18:00', baseline: 44, optimized: 56, delay: 14 },
  ];

  const maxValue = Math.max(...data.flatMap(d => [d.baseline, d.optimized, d.delay]));

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Performance Comparison</h3>
        <BarChart3 className="w-5 h-5 text-slate-400" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <span className="text-slate-400">Baseline Throughput</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-slate-400">AI Optimized</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
            <span className="text-slate-400">Avg Delay (min)</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{item.hour}</span>
                <span>+{item.optimized - item.baseline} trains</span>
              </div>
              <div className="flex items-end space-x-1 h-8">
                <div 
                  className="bg-slate-600 rounded-sm min-w-[2px]"
                  style={{ height: `${(item.baseline / maxValue) * 100}%` }}
                />
                <div 
                  className="bg-blue-500 rounded-sm min-w-[2px]"
                  style={{ height: `${(item.optimized / maxValue) * 100}%` }}
                />
                <div 
                  className="bg-amber-500 rounded-sm min-w-[2px]"
                  style={{ height: `${(item.delay / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};