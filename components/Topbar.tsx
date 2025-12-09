import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TopbarProps {
  title: string;
}

export const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-xl font-semibold text-bpcc-navy capitalize">{title}</h2>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar en todo el panel..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bpcc-navy focus:border-transparent w-64 transition-all"
          />
        </div>

        <button className="relative p-2 text-gray-500 hover:text-bpcc-navy transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-bpcc-red rounded-full"></span>
        </button>
      </div>
    </header>
  );
};