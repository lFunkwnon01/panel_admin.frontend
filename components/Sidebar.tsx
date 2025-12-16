import React from 'react';
import { LayoutDashboard, Calendar, Users, Ticket, Globe, Settings, FileText, LogOut, Zap } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onChangeView: (view: string) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onChangeView, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'events', label: 'Eventos', icon: Calendar },
    { id: 'partners', label: 'Socios', icon: Users },
    { id: 'benefits', label: 'Cupones / Beneficios', icon: Ticket },
    { id: 'automation', label: 'Automatización', icon: Zap },
    { id: 'web', label: 'Contenido Web', icon: Globe },
    { id: 'leads', label: 'Leads / Solicitudes', icon: FileText },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="w-64 bg-bpcc-navy text-white flex flex-col fixed h-full shadow-xl z-20">
      <div className="p-6 border-b border-gray-700 flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-bpcc-navy font-bold text-xs">
          BP
        </div>
        <h1 className="text-xl font-bold tracking-tight">BPCC Admin</h1>
      </div>

      <nav className="flex-1 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-bpcc-red text-white border-r-4 border-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden ring-2 ring-gray-600">
             <img src="https://picsum.photos/100/100" alt="Admin" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate">Admin User</p>
            <p className="text-xs text-gray-400 truncate">admin@bpcc.org.pe</p>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-gray-300 bg-gray-800/50 hover:bg-gray-800 hover:text-white rounded-lg transition-colors border border-gray-700"
        >
          <LogOut size={14} /> Cerrar Sesión
        </button>
      </div>
    </div>
  );
};