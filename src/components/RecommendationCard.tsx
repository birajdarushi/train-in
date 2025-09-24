import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, CheckCircle, XCircle, AlertTriangle, Train } from 'lucide-react';

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

interface RecommendationCardProps {
  recommendation: Recommendation;
  onAction: (id: string, action: 'accept' | 'reject') => void;
}

const priorityColors = {
  high: 'border-red-400 bg-red-400/10',
  medium: 'border-amber-400 bg-amber-400/10',
  low: 'border-blue-400 bg-blue-400/10',
};

const statusColors = {
  pending: 'text-amber-400 bg-amber-400/10',
  accepted: 'text-green-400 bg-green-400/10',
  rejected: 'text-red-400 bg-red-400/10',
};

const typeIcons = {
  precedence: Train,
  crossing: Train,
  platform: Train,
  routing: Train,
};

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  onAction,
}) => {
  const [timeLeft, setTimeLeft] = useState(recommendation.timeToDecide);
  const Icon = typeIcons[recommendation.type];

  useEffect(() => {
    if (recommendation.status === 'pending' && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, recommendation.status]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-slate-800 border-2 rounded-lg p-6 ${priorityColors[recommendation.priority]}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-slate-700 rounded-lg">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-lg font-semibold text-white">{recommendation.title}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full uppercase ${statusColors[recommendation.status]}`}>
                {recommendation.status}
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full uppercase ${priorityColors[recommendation.priority]} text-white`}>
                {recommendation.priority}
              </span>
            </div>
            <p className="text-slate-300 mb-3">{recommendation.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Train className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">Trains:</span>
                <span className="text-white font-mono">{recommendation.trains.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
        
        {recommendation.status === 'pending' && (
          <div className="flex items-center space-x-2 text-amber-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-slate-400">Expected Benefit:</span>
            <span className="text-green-400 font-medium">{recommendation.expectedBenefit}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-400">Confidence:</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 transition-all duration-300"
                  style={{ width: `${recommendation.confidence}%` }}
                />
              </div>
              <span className="text-white font-medium">{recommendation.confidence}%</span>
            </div>
          </div>
        </div>

        {recommendation.status === 'pending' && (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onAction(recommendation.id, 'reject')}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <XCircle className="w-4 h-4" />
              <span>Reject</span>
            </button>
            <button
              onClick={() => onAction(recommendation.id, 'accept')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Accept</span>
            </button>
          </div>
        )}

        {recommendation.status === 'accepted' && (
          <div className="flex items-center space-x-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Implemented</span>
          </div>
        )}

        {recommendation.status === 'rejected' && (
          <div className="flex items-center space-x-2 text-red-400">
            <XCircle className="w-5 h-5" />
            <span className="font-medium">Rejected</span>
          </div>
        )}
      </div>
    </div>
  );
};