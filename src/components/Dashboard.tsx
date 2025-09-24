import React from 'react';
import { TrendingUp, TrendingDown, Clock, Train, AlertTriangle, CheckCircle } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { RecentActivity } from './RecentActivity';
import { PerformanceChart } from './PerformanceChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Control Dashboard</h2>
        <div className="text-sm text-slate-400">
          Section: Delhi-Ghaziabad | Last Update: {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Average Delay"
          value="12.5 min"
          change="-18.2%"
          trend="down"
          icon={Clock}
          color="green"
        />
        <MetricCard
          title="Daily Throughput"
          value="156 trains"
          change="+12.4%"
          trend="up"
          icon={Train}
          color="blue"
        />
        <MetricCard
          title="AI Adoption Rate"
          value="89.3%"
          change="+5.7%"
          trend="up"
          icon={CheckCircle}
          color="green"
        />
        <MetricCard
          title="Active Disruptions"
          value="3"
          change="2 resolved"
          trend="down"
          icon={AlertTriangle}
          color="amber"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <RecentActivity />
      </div>
    </div>
  );
};