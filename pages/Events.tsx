import React, { useState } from 'react';
import { Plus, Filter, MoreHorizontal, Users, Edit2, Copy, Trash2 } from 'lucide-react';
import { Event, EventType, EventStatus } from '../types';

// Mock Data
const EVENTS_DATA: Event[] = [
  { id: '1', title: 'Desayuno Ejecutivo: Minería', date: '2023-10-15', type: EventType.COMMITTEE, modality: 'Presencial', status: EventStatus.PUBLISHED, attendees: 45 },
  { id: '2', title: 'Networking Night', date: '2023-10-22', type: EventType.SOCIAL, modality: 'Presencial', status: EventStatus.DRAFT, attendees: 0 },
  { id: '3', title: 'Webinar: Tax Reforms', date: '2023-10-28', type: EventType.WEBINAR, modality: 'Online', status: EventStatus.PUBLISHED, attendees: 120 },
];

export const Events: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-2">
           <select className="border border-gray-300 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:border-bpcc-navy">
             <option>Todos los tipos</option>
             <option>Networking</option>
             <option>Comité</option>
           </select>
           <select className="border border-gray-300 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:border-bpcc-navy">
             <option>Todos los estados</option>
             <option>Publicado</option>
             <option>Borrador</option>
           </select>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-bpcc-navy hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus size={16} /> Crear nuevo evento
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Fecha</th>
              <th className="px-6 py-3">Tipo</th>
              <th className="px-6 py-3">Modalidad</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Inscritos</th>
              <th className="px-6 py-3 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {EVENTS_DATA.map((ev) => (
              <tr key={ev.id} className="hover:bg-gray-50 group">
                <td className="px-6 py-4 font-medium text-bpcc-navy">{ev.title}</td>
                <td className="px-6 py-4 text-gray-600">{ev.date}</td>
                <td className="px-6 py-4 text-gray-600">{ev.type}</td>
                <td className="px-6 py-4 text-gray-600">{ev.modality}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                    ev.status === EventStatus.PUBLISHED ? 'bg-green-50 text-green-700 border-green-100' :
                    ev.status === EventStatus.DRAFT ? 'bg-gray-100 text-gray-600 border-gray-200' :
                    'bg-red-50 text-red-700 border-red-100'
                  }`}>
                    {ev.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-900">{ev.attendees}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-gray-400 hover:text-bpcc-navy hover:bg-gray-100 rounded-md" title="Editar"><Edit2 size={16}/></button>
                    <button className="p-1.5 text-gray-400 hover:text-bpcc-navy hover:bg-gray-100 rounded-md" title="Ver Inscritos"><Users size={16}/></button>
                    <button className="p-1.5 text-gray-400 hover:text-bpcc-navy hover:bg-gray-100 rounded-md" title="Duplicar"><Copy size={16}/></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md" title="Desactivar"><Trash2 size={16}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Simple Modal Implementation */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
              <h3 className="text-xl font-bold text-bpcc-navy">Crear Nuevo Evento</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Col 1 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-bpcc-navy focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                        <option>Networking</option>
                        <option>Comité</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Modalidad</label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                        <option>Presencial</option>
                        <option>Online</option>
                      </select>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                    <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                    <input type="time" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                  </div>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lugar / Link</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"></textarea>
                </div>
              </div>

              {/* Col 2 */}
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Configuración de Acceso</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded text-bpcc-navy focus:ring-bpcc-navy" />
                      <span className="text-sm text-gray-700">Membresía Standard</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded text-bpcc-navy focus:ring-bpcc-navy" />
                      <span className="text-sm text-gray-700">Membresía Premium</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded text-bpcc-navy focus:ring-bpcc-navy" />
                      <span className="text-sm text-gray-700">Membresía Patron</span>
                    </label>
                    <hr className="my-2 border-gray-200" />
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-bpcc-navy focus:ring-bpcc-navy" />
                      <span className="text-sm font-medium text-gray-900">Evento abierto al público</span>
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Integración App Móvil</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-700">Mostrar en app</span>
                    <div className="w-10 h-5 bg-bpcc-navy rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Habilitar QR asistencia</span>
                    <div className="w-10 h-5 bg-gray-300 rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Imagen del evento (Opcional)</label>
                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                     <p className="text-xs text-gray-500">Haz click o arrastra una imagen aquí</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 flex justify-end gap-3 sticky bottom-0 bg-white">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800">Cancelar</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-bpcc-navy rounded-lg hover:bg-blue-900 shadow-sm">Guardar Evento</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};