import React, { useState } from 'react';
import { Brain, Clock, AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { RecommendationCard } from './RecommendationCard';

interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  type: 'precedence' | 'crossing' | 'platform' | 'routing';
  title: string;
  description: string;
  trains: string[];
  expectedBenefit: string;
  confidence: number;
  timeToDecide: number;
  status: 'pending' | 'accepted' | 'rejected';
}

const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    priority: 'high',
    type: 'precedence',
    title: 'Priority Precedence at Junction A',
    description: 'Give precedence to Express 12345 over Freight 67890 to minimize overall delay',
    trains: ['12345 (Rajdhani Express)', '67890 (Freight)'],
    expectedBenefit: '8 min delay reduction',
    confidence: 94,
    timeToDecide: 180,
    status: 'pending',
  },
  {
    id: '2',
    priority: 'medium',
    type: 'crossing',
    title: 'Optimized Crossing at Station B',
    description: 'Schedule crossing between trains 23456 and 34567 at Platform 2',
    trains: ['23456 (Shatabdi)', '34567 (Passenger)'],
    expectedBenefit: '5 min delay reduction',
    confidence: 87,
    timeToDecide: 240,
    status: 'pending',
  },
  {
    id: '3',
    priority: 'low',
    type: 'platform',
    title: 'Platform Reallocation',
    description: 'Move train 45678 to Platform 1 for better departure sequencing',
    trains: ['45678 (Mail Express)'],
    expectedBenefit: '3 min efficiency gain',
    confidence: 79,
    timeToDecide: 360,
    status: 'accepted',
  },
];

export const LiveRecommendations: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>(mockRecommendations);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRecommendationAction = (id: string, action: 'accept' | 'reject') => {
    setRecommendations(prev => 
      prev.map(rec => 
        rec.id === id 
          ? { ...rec, status: action === 'accept' ? 'accepted' : 'rejected' }
          : rec
      )
    );
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const pendingCount = recommendations.filter(r => r.status === 'pending').length;
  const acceptedCount = recommendations.filter(r => r.status === 'accepted').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Brain className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">AI Recommendations</h2>
            <p className="text-slate-400">Real-time optimization suggestions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-slate-300">Pending: {pendingCount}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Accepted: {acceptedCount}</span>
            </div>
          </div>
          
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {recommendations.map(recommendation => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
            onAction={handleRecommendationAction}
          />
        ))}
      </div>

      {recommendations.length === 0 && (
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-400 mb-2">No Active Recommendations</h3>
          <p className="text-slate-500">AI engine is monitoring conditions for optimization opportunities</p>
        </div>
      )}
    </div>
  );
};