import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ActiveView } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ActiveView;
  onViewChange: (view: ActiveView) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeView, onViewChange }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <div className="flex">
        <Sidebar activeView={activeView} onViewChange={onViewChange} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};