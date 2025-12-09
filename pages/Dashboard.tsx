import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, FileText, Ticket, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Networking', count: 12 },
  { name: 'Webinars', count: 8 },
  { name: 'Comités', count: 15 },
  { name: 'Social', count: 4 },
];

const StatCard = ({ title, value, icon: Icon, colorClass }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-sm text-gray-500 font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-bpcc-navy">{value}</h3>
    </div>
    <div className={`p-3 rounded-lg ${colorClass}`}>
      <Icon size={24} className="text-white" />
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Socios Activos" value="135" icon={Users} colorClass="bg-blue-600" />
        <StatCard title="Eventos este mes" value="8" icon={Calendar} colorClass="bg-bpcc-red" />
        <StatCard title="Solicitudes pendientes" value="12" icon={FileText} colorClass="bg-orange-500" />
        <StatCard title="Cupones vigentes" value="25" icon={Ticket} colorClass="bg-green-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-bpcc-navy mb-6">Distribución de Eventos (YTD)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <Tooltip
                  cursor={{fill: '#F3F4F6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
                <Bar dataKey="count" fill="#0B1F3B" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-bpcc-navy mb-4">Últimas Acciones</h3>
          <div className="space-y-4">
            {[
              { text: 'Nueva solicitud de socio: Mining Corp', time: '2h atrás', type: 'lead' },
              { text: 'Evento "Cocktail de Verano" publicado', time: '5h atrás', type: 'event' },
              { text: 'Noticia "Balance 2024" publicada', time: '1d atrás', type: 'news' },
              { text: 'Socio TechSolutions actualizado', time: '1d atrás', type: 'partner' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                  item.type === 'lead' ? 'bg-orange-500' :
                  item.type === 'event' ? 'bg-bpcc-red' :
                  'bg-blue-500'
                }`} />
                <div>
                  <p className="text-sm text-gray-800 font-medium">{item.text}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 text-sm text-bpcc-navy font-medium hover:text-bpcc-red flex items-center justify-center gap-1 transition-colors">
            Ver historial completo <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Quick Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-bpcc-navy">Próximos Eventos</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Ver todos</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3">Tipo</th>
                <th className="px-6 py-3">Inscritos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Desayuno Ejecutivo: Minería', date: '15 Oct 2023', type: 'Comité', count: 45 },
                { name: 'Networking Night', date: '22 Oct 2023', type: 'Social', count: 82 },
                { name: 'Webinar: Tax Reforms', date: '28 Oct 2023', type: 'Webinar', count: 120 },
              ].map((ev, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{ev.name}</td>
                  <td className="px-6 py-4 text-gray-600">{ev.date}</td>
                  <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">{ev.type}</span></td>
                  <td className="px-6 py-4 text-gray-900">{ev.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};