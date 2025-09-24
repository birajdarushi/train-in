import React from 'react';
import { MapPin, Train, AlertTriangle } from 'lucide-react';

export const SectionMap: React.FC = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Section Overview</h3>
        <div className="text-sm text-slate-400">Delhi-Ghaziabad Section</div>
      </div>
      
      {/* Simplified railway section visualization */}
      <div className="bg-slate-900 rounded-lg p-6 min-h-[400px] relative">
        {/* Main railway line */}
        <div className="absolute top-1/2 left-4 right-4 h-2 bg-slate-600 rounded-full transform -translate-y-1/2">
          {/* Railway ties */}
          <div className="absolute inset-0 flex justify-between items-center px-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-0.5 h-4 bg-slate-500"></div>
            ))}
          </div>
        </div>
        
        {/* Stations */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span className="text-xs text-slate-300 mt-2">Delhi</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span className="text-xs text-slate-300 mt-2">Junction A</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span className="text-xs text-slate-300 mt-2">Station B</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            <span className="text-xs text-slate-300 mt-2">Ghaziabad</span>
          </div>
        </div>
        
        {/* Trains */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-green-600 rounded-lg">
              <Train className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-green-400 mt-1">12345</span>
          </div>
        </div>
        
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-amber-600 rounded-lg">
              <Train className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-amber-400 mt-1">23456</span>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-1/3 transform translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Train className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs text-blue-400 mt-1">34567</span>
          </div>
        </div>
        
        {/* Signal block with issue */}
        <div className="absolute top-1/3 left-3/5 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <div className="p-1 bg-red-600 rounded">
              <AlertTriangle className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-red-400 mt-1">Block 7</span>
          </div>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 space-y-2">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-green-600 rounded"></div>
            <span className="text-slate-300">Express Train</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-amber-600 rounded"></div>
            <span className="text-slate-300">Passenger Train</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-slate-300">Freight Train</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-red-600 rounded"></div>
            <span className="text-slate-300">Signal Block</span>
          </div>
        </div>
      </div>
    </div>
  );
};