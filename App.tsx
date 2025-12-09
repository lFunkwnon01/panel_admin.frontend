import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/Events';
import { Partners } from './pages/Partners';
import { Benefits } from './pages/Benefits';
import { Login } from './pages/Login';
import { Edit } from 'lucide-react';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-96 text-gray-400">
    <div className="bg-gray-100 p-6 rounded-full mb-4">
      <Edit size={48} className="text-gray-300" />
    </div>
    <h3 className="text-lg font-medium text-gray-600">Sección {title}</h3>
    <p className="text-sm">Funcionalidad en desarrollo para esta demo.</p>
  </div>
);

const LeadsPage = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-orange-50">
        <h3 className="text-lg font-bold text-orange-800">Solicitudes de Afiliación (Web)</h3>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
          <tr>
            <th className="px-6 py-3">Empresa</th>
            <th className="px-6 py-3">Contacto</th>
            <th className="px-6 py-3">Fecha</th>
            <th className="px-6 py-3">Estado</th>
            <th className="px-6 py-3 text-right">Acción</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {[
            { company: 'StartUp Perú SAC', contact: 'Juan Perez', date: 'Hoy, 10:30 AM', status: 'Recibido' },
            { company: 'Consultora Global', contact: 'Maria Lopez', date: 'Ayer', status: 'En evaluación' },
          ].map((lead, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{lead.company}</td>
              <td className="px-6 py-4 text-gray-600">{lead.contact}</td>
              <td className="px-6 py-4 text-gray-500">{lead.date}</td>
              <td className="px-6 py-4"><span className="text-xs font-bold px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">{lead.status}</span></td>
              <td className="px-6 py-4 text-right">
                <button className="text-xs bg-bpcc-navy text-white px-3 py-1.5 rounded hover:bg-blue-900 transition-colors">
                  Convertir en Socio
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('dashboard');
  };

  // Auth Guard
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'events': return <Events />;
      case 'partners': return <Partners />;
      case 'benefits': return <Benefits />;
      case 'leads': return <LeadsPage />;
      case 'web': return <PlaceholderPage title="Contenido Web (CMS)" />;
      case 'settings': return <PlaceholderPage title="Configuración" />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bpcc-gray-light">
      <Sidebar 
        currentView={currentView} 
        onChangeView={setCurrentView} 
        onLogout={handleLogout}
      />
      
      <div className="flex-1 ml-64 flex flex-col">
        <Topbar title={currentView === 'web' ? 'Contenido Web' : currentView} />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;