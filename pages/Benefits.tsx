import React from 'react';
import { Plus, QrCode } from 'lucide-react';
import { Benefit, MembershipType } from '../types';

const BENEFITS_DATA: Benefit[] = [
  { id: '1', name: '20% Dscto. Sala de Eventos Hotel B', type: 'Descuento', membership: [MembershipType.PREMIUM, MembershipType.PATRON], validUntil: '2023-12-31', active: true },
  { id: '2', name: 'Acceso VIP Lounge Aeropuerto', type: 'Acceso', membership: [MembershipType.PATRON], validUntil: '2024-06-30', active: true },
];

export const Benefits: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-600">Gestión de Cupones y Beneficios</h3>
        <button className="bg-bpcc-navy hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus size={16} /> Nuevo Beneficio
        </button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS_DATA.map((b) => (
            <div key={b.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${b.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                  {b.active ? 'Activo' : 'Inactivo'}
                </span>
                <button className="text-gray-400 hover:text-bpcc-navy"><QrCode size={18}/></button>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{b.name}</h4>
              <p className="text-sm text-gray-500 mb-4">{b.type} • Vence: {b.validUntil}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {b.membership.map(m => (
                  <span key={m} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">{m}</span>
                ))}
              </div>
              
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <button className="flex-1 text-sm font-medium text-gray-600 hover:text-bpcc-navy py-1.5 rounded hover:bg-gray-50">Editar</button>
                <button className="flex-1 text-sm font-medium text-bpcc-red hover:text-red-800 py-1.5 rounded hover:bg-red-50">Desactivar</button>
              </div>
            </div>
          ))}
       </div>
    </div>
  );
};