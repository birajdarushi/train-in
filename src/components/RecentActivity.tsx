import React from 'react';
import { Clock, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'recommendation',
    title: 'AI Recommendation Accepted',
    description: 'Train 12345 precedence over 67890 at Junction A',
    time: '14:23',
    status: 'success',
    icon: CheckCircle,
  },
  {
    id: 2,
    type: 'disruption',
    title: 'Disruption Detected',
    description: 'Signal failure at Block 7 - Re-optimization initiated',
    time: '14:18',
    status: 'warning',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'override',
    title: 'Manual Override',
    description: 'Controller overrode AI recommendation for Express 45123',
    time: '14:15',
    status: 'info',
    icon: XCircle,
  },
  {
    id: 4,
    type: 'simulation',
    title: 'Scenario Completed',
    description: 'What-if analysis for platform reallocation completed',
    time: '14:10',
    status: 'success',
    icon: CheckCircle,
  },
];

const statusColors = {
  success: 'text-green-400 bg-green-400/10',
  warning: 'text-amber-400 bg-amber-400/10',
  info: 'text-blue-400 bg-blue-400/10',
  error: 'text-red-400 bg-red-400/10',
};

export const RecentActivity: React.FC = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        <Clock className="w-5 h-5 text-slate-400" />
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full ${statusColors[activity.status as keyof typeof statusColors]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white truncate">
                    {activity.title}
                  </p>
                  <span className="text-xs text-slate-400">{activity.time}</span>
                </div>
                <p className="text-sm text-slate-400 mt-1">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 py-2 px-4 text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
};