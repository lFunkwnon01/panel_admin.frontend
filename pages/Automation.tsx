import React, { useState } from 'react';
import { Mail, MessageCircle, Settings, Plus, Download, BarChart3, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Automation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'email' | 'whatsapp'>('email');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const emailTemplates = [
    {
      id: 1,
      name: 'Invitación a Evento',
      recipients: 1250,
      lastSent: '15 dic, 10:30 AM',
      status: 'Enviado',
      openRate: '32%',
    },
    {
      id: 2,
      name: 'Recordatorio de Afiliación',
      recipients: 890,
      lastSent: '10 dic, 2:15 PM',
      status: 'Enviado',
      openRate: '28%',
    },
    {
      id: 3,
      name: 'Anuncio de Beneficios',
      recipients: 2100,
      lastSent: '5 dic, 9:00 AM',
      status: 'Enviado',
      openRate: '41%',
    },
  ];

  const segments = [
    { id: 1, name: 'Miembros Activos', count: 3420, lastUsed: 'Hoy' },
    { id: 2, name: 'Nuevos Afiliados (30 días)', count: 156, lastUsed: '12 dic' },
    { id: 3, name: 'Premium VIP', count: 420, lastUsed: '8 dic' },
    { id: 4, name: 'Inactivos (6 meses)', count: 890, lastUsed: '1 dic' },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs Navigation */}
      <div className="flex gap-4 bg-white rounded-lg shadow-sm border border-gray-100 p-1">
        <button
          onClick={() => setActiveTab('email')}
          className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-colors ${
            activeTab === 'email'
              ? 'bg-bpcc-red text-white'
              : 'text-gray-600 hover:text-bpcc-red'
          }`}
        >
          <Mail size={18} />
          Correos Masivos
        </button>
        <button
          onClick={() => setActiveTab('whatsapp')}
          className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm transition-colors ${
            activeTab === 'whatsapp'
              ? 'bg-bpcc-red text-white'
              : 'text-gray-600 hover:text-bpcc-red'
          }`}
        >
          <MessageCircle size={18} />
          WhatsApp & Notificaciones
        </button>
      </div>

      {/* EMAIL SECTION */}
      {activeTab === 'email' && (
        <div className="space-y-6">
          {/* Configuration Alert */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="text-blue-600 flex-shrink-0" size={24} />
            <div className="flex-1">
              <h4 className="font-bold text-blue-900 mb-2">Configuración DNS Requerida</h4>
              <p className="text-sm text-blue-800 mb-3">
                Para garantizar que tus correos no vayan a spam, debes configurar:
              </p>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex gap-2">
                  <span className="font-mono bg-white px-2 py-1 rounded">SPF</span>
                  <span>En tu proveedor DNS para autorizar envíos</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono bg-white px-2 py-1 rounded">DKIM</span>
                  <span>Firma digital de autenticación de correos</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-mono bg-white px-2 py-1 rounded">DMARC</span>
                  <span>Política de autenticación y reporte de fallos</span>
                </li>
              </ul>
              <button className="mt-4 text-sm font-bold text-blue-700 hover:text-blue-900 flex items-center gap-2">
                <Settings size={16} />
                Ir a Configuración DNS
              </button>
            </div>
          </div>

          {/* Email Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-500 text-sm font-medium mb-2">Total Enviados</p>
              <p className="text-4xl font-bold text-bpcc-navy">8,453</p>
              <p className="text-xs text-gray-400 mt-2">Últimos 30 días</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-500 text-sm font-medium mb-2">Tasa de Apertura</p>
              <p className="text-4xl font-bold text-green-600">34%</p>
              <p className="text-xs text-gray-400 mt-2">Promedio general</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <p className="text-gray-500 text-sm font-medium mb-2">Reportados como Spam</p>
              <p className="text-4xl font-bold text-red-600">0.8%</p>
              <p className="text-xs text-gray-400 mt-2">Excelente reputación</p>
            </div>
          </div>

          {/* Segments Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-blue-50 flex items-center justify-between">
              <h3 className="text-lg font-bold text-blue-900">Segmentos de Audiencia</h3>
              <button className="flex items-center gap-2 bg-bpcc-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                <Plus size={16} />
                Nuevo Segmento
              </button>
            </div>
            <div className="divide-y">
              {segments.map((segment) => (
                <div key={segment.id} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">{segment.name}</h4>
                    <p className="text-sm text-gray-500">{segment.count.toLocaleString()} contactos • Último uso: {segment.lastUsed}</p>
                  </div>
                  <button className="px-4 py-2 bg-bpcc-navy text-white rounded hover:bg-blue-900 text-sm font-medium transition-colors">
                    Usar Segmento
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Templates Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-green-50 flex items-center justify-between">
              <h3 className="text-lg font-bold text-green-900">Plantillas de Correos</h3>
              <button className="flex items-center gap-2 bg-bpcc-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                <Plus size={16} />
                Nueva Plantilla
              </button>
            </div>
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3">Nombre</th>
                  <th className="px-6 py-3">Destinatarios</th>
                  <th className="px-6 py-3">Último Envío</th>
                  <th className="px-6 py-3">Tasa de Apertura</th>
                  <th className="px-6 py-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {emailTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">{template.name}</td>
                    <td className="px-6 py-4 text-gray-600">{template.recipients.toLocaleString()}</td>
                    <td className="px-6 py-4 text-gray-500">{template.lastSent}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 size={14} className="text-blue-600" />
                        <span className="font-semibold text-green-600">{template.openRate}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-xs bg-bpcc-navy text-white px-3 py-1.5 rounded hover:bg-blue-900 transition-colors">
                        Editar
                      </button>
                      <button className="text-xs bg-green-600 text-white px-3 py-1.5 rounded hover:bg-green-700 transition-colors">
                        Enviar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Best Practices */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-600" size={20} />
              Mejores Prácticas para Evitar Spam
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-800">Configuración Técnica</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Configurar SPF, DKIM y DMARC en DNS</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Usar plataforma de envío confiable (Brevo, MailerLite, Mailgun)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Incluir enlaces de autenticación válidos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Usar dominio personalizado (eventos@bpcc.org.pe)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-gray-800">Prácticas Operacionales</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Mantener listas limpias sin comprar bases</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Eliminar rebotes regularmente</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Incluir enlace de baja clara en todos los correos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Enviar contenido relevante y segmentado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP SECTION */}
      {activeTab === 'whatsapp' && (
        <div className="space-y-6">
          {/* Strategy Alert */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex gap-4">
            <MessageCircle className="text-green-600 flex-shrink-0" size={24} />
            <div className="flex-1">
              <h4 className="font-bold text-green-900 mb-2">Estrategia Recomendada: Modelo Mixto</h4>
              <p className="text-sm text-green-800 mb-3">
                Optimizar costos y reach usando múltiples canales de comunicación:
              </p>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900">80% Comunicaciones Masivas</p>
                  <p className="text-xs text-green-700 mt-1">Email + App (Push Notifications)</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900">15% Comunicaciones Críticas</p>
                  <p className="text-xs text-green-700 mt-1">WhatsApp API para recordatorios</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900">5% Atención VIP</p>
                  <p className="text-xs text-green-700 mt-1">Chatbot y soporte 1-a-1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Costs & Pricing */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-orange-50">
              <h3 className="text-lg font-bold text-orange-900">Costos de WhatsApp Business API</h3>
              <p className="text-sm text-orange-800 mt-1">Tarificación oficial por conversación iniciada</p>
            </div>
            <div className="p-6 grid grid-cols-2 gap-6">
              <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                <h4 className="font-bold text-gray-900 mb-3">❌ No Recomendado (Riesgos)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-600">→</span>
                    <span>APIs no oficiales / Web scrapers</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">→</span>
                    <span>Riesgo de baneo de número</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">→</span>
                    <span>Incumple términos de servicio</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">→</span>
                    <span>No apropiado para institucionesformales</span>
                  </li>
                </ul>
              </div>
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-bold text-gray-900 mb-3">✓ Recomendado (Oficial)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600">→</span>
                    <span>API Oficial WhatsApp Business</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">→</span>
                    <span>Cobro por conversación (20-30 USD / 600 contactos)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">→</span>
                    <span>Confiable y seguro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">→</span>
                    <span>Garantía y soporte oficial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Channels & Strategy */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-blue-50">
              <h3 className="text-lg font-bold text-blue-900">Canales de Comunicación</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Email Masivo</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Canal principal para anuncios, eventos y actualizaciones generales. Bajo costo, bien configurado no va a spam.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">80% del volumen</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Costo: Bajo</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-purple-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded">
                    <MessageCircle size={20} className="text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">Push Notifications (App Móvil)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Notificaciones instantáneas para usuarios de la app. Completamente gratis, excelente engagement.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">15% del volumen</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Costo: Gratis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">WhatsApp API (Selectivo)</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Reservar para: recordatorios de eventos, confirmaciones de pagos, comunicaciones VIP, y chatbot de atención.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">5% del volumen</span>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Costo: 20-30 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Config Status */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Estado de Configuración</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">API WhatsApp Business</span>
                </div>
                <span className="text-xs font-bold text-gray-500">NO CONFIGURADA</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">Número WhatsApp Oficial</span>
                </div>
                <span className="text-xs font-bold text-gray-500">NO ASIGNADO</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-medium text-gray-800">Webhook de Mensajes</span>
                </div>
                <span className="text-xs font-bold text-gray-500">NO CONFIGURADO</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-bpcc-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
              Configurar Integración WhatsApp
            </button>
          </div>

          {/* ROI Calculator */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200 p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-4">💡 Calculadora de ROI</h3>
            <div className="grid grid-cols-2 gap-6 text-sm text-blue-900">
              <div>
                <p className="font-medium mb-2">Ejemplo: Evento con 600 confirmados</p>
                <ul className="space-y-1 text-xs">
                  <li>• Email: $0 (con buena configuración)</li>
                  <li>• Push Notifications: $0 (si tienen app)</li>
                  <li>• WhatsApp recordatorio: ~$20-30 (API)</li>
                  <li className="font-bold mt-2">Total: ~$20-30 para 600 personas</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-bold text-blue-700 mb-2">Recomendación:</p>
                <p className="text-xs">Priorizar Email + Push Notifications como canales masivos. WhatsApp solo para high-value communications.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
