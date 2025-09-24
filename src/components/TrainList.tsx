import React from 'react';
import { Train, Clock, MapPin, AlertTriangle } from 'lucide-react';

interface TrainInfo {
  id: string;
  name: string;
  type: 'express' | 'passenger' | 'freight';
  status: 'on_time' | 'delayed' | 'critical';
  currentLocation: string;
  nextStation: string;
  delay: number;
  speed: number;
}

const trains: TrainInfo[] = [
  {
    id: '12345',
    name: 'Rajdhani Express',
    type: 'express',
    status: 'on_time',
    currentLocation: 'Km 125.4',
    nextStation: 'Junction A',
    delay: 0,
    speed: 95,
  },
  {
    id: '23456',
    name: 'Shatabdi Express',
    type: 'express',
    status: 'delayed',
    currentLocation: 'Junction A',
    nextStation: 'Station B',
    delay: 8,
    speed: 0,
  },
  {
    id: '34567',
    name: 'Local Passenger',
    type: 'passenger',
    status: 'on_time',
    currentLocation: 'Station B',
    nextStation: 'Ghaziabad',
    delay: 2,
    speed: 65,
  },
  {
    id: '45678',
    name: 'Mail Express',
    type: 'express',
    status: 'critical',
    currentLocation: 'Km 89.2',
    nextStation: 'Junction A',
    delay: 25,
    speed: 45,
  },
  {
    id: '67890',
    name: 'Freight Special',
    type: 'freight',
    status: 'on_time',
    currentLocation: 'Delhi Yard',
    nextStation: 'Junction A',
    delay: 0,
    speed: 35,
  },
];

const statusColors = {
  on_time: 'text-green-400 bg-green-400/10',
  delayed: 'text-amber-400 bg-amber-400/10',
  critical: 'text-red-400 bg-red-400/10',
};

const typeColors = {
  express: 'bg-green-600',
  passenger: 'bg-amber-600',
  freight: 'bg-blue-600',
};

export const TrainList: React.FC = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Active Trains</h3>
        <Train className="w-5 h-5 text-slate-400" />
      </div>
      
      <div className="space-y-4">
        {trains.map(train => (
          <div key={train.id} className="bg-slate-900 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${typeColors[train.type]}`}></div>
                <div>
                  <h4 className="font-medium text-white">{train.name}</h4>
                  <p className="text-sm text-slate-400 font-mono">#{train.id}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[train.status]}`}>
                {train.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">Current:</span>
                <span className="text-white">{train.currentLocation}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">Next:</span>
                <span className="text-white">{train.nextStation}</span>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Delay:</span>
                  <span className={train.delay > 15 ? 'text-red-400' : train.delay > 0 ? 'text-amber-400' : 'text-green-400'}>
                    {train.delay} min
                  </span>
                </div>
                <div className="text-slate-400">
                  <span className="text-white">{train.speed}</span> km/h
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};