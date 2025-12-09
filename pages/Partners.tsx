import React from 'react';
import { Plus, Search, MoreVertical, Shield, Star, Award } from 'lucide-react';
import { Partner, MembershipType, PartnerStatus } from '../types';

const PARTNERS_DATA: Partner[] = [
  { id: '1', name: 'Anglo American Quellaveco', sector: 'Minería', country: 'Reino Unido', membership: MembershipType.PATRON, status: PartnerStatus.APPROVED, joinDate: '2020-01-15' },
  { id: '2', name: 'Banco de Crédito del Perú', sector: 'Banca', country: 'Perú', membership: MembershipType.PREMIUM, status: PartnerStatus.APPROVED, joinDate: '2019-05-20' },
  { id: '3', name: 'Green Solutions SAC', sector: 'Ambiental', country: 'Perú', membership: MembershipType.STANDARD, status: PartnerStatus.PROSPECT, joinDate: '2023-11-02' },
];

const MembershipBadge = ({ type }: { type: MembershipType }) => {
  let color = 'bg-gray-100 text-gray-700';
  let Icon = Star;
  if (type === MembershipType.PATRON) {
    color = 'bg-purple-100 text-purple-700 border-purple-200';
    Icon = Award;
  } else if (type === MembershipType.PREMIUM) {
    color = 'bg-yellow-50 text-yellow-700 border-yellow-200';
    Icon = Shield;
  }
  return (
    <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${color}`}>
      <Icon size={12} /> {type}
    </span>
  );
};

export const Partners: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-2">
           <select className="border border-gray-300 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:border-bpcc-navy">
             <option>Todos los sectores</option>
             <option>Minería</option>
             <option>Banca</option>
           </select>
           <select className="border border-gray-300 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:border-bpcc-navy">
             <option>Todas las membresías</option>
             <option>Patron</option>
             <option>Premium</option>
             <option>Standard</option>
           </select>
        </div>
        <button className="bg-bpcc-navy hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
          <Plus size={16} /> Nuevo Socio
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
            <tr>
              <th className="px-6 py-3">Empresa</th>
              <th className="px-6 py-3">Sector</th>
              <th className="px-6 py-3">País</th>
              <th className="px-6 py-3">Membresía</th>
              <th className="px-6 py-3">Estado</th>
              <th className="px-6 py-3">Alta</th>
              <th className="px-6 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PARTNERS_DATA.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 group cursor-pointer transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 border border-gray-200">Logo</div>
                    <span className="font-medium text-gray-900">{p.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{p.sector}</td>
                <td className="px-6 py-4 text-gray-600">{p.country}</td>
                <td className="px-6 py-4">
                  <MembershipBadge type={p.membership} />
                </td>
                <td className="px-6 py-4">
                   <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    p.status === PartnerStatus.APPROVED ? 'text-green-700 bg-green-50' :
                    p.status === PartnerStatus.PROSPECT ? 'text-orange-700 bg-orange-50' : 'text-gray-500 bg-gray-100'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{p.joinDate}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-bpcc-navy p-1">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};