import React, { useState, useEffect } from 'react';
import { 
  Database, 
  X, 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Trash2, 
  Download,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { QuoteRequest } from '../types';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminLeadDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = () => {
    try {
      const stored = localStorage.getItem('rg_quotes');
      if (stored) {
        setQuotes(JSON.parse(stored));
      } else {
        // Seed some sample quotes so the dashboard is informative immediately
        const seedQuotes: QuoteRequest[] = [
          {
            id: 'RG-2026-1042',
            service: 'DIA (Sector Saneamiento)',
            region: 'Lima Metropolitana',
            province: 'Lima',
            district: 'Lurín',
            projectType: 'Privado / Construcción',
            description: 'Construcción de complejo logístico con pozo de agua y planta de tratamiento de efluentes domésticos.',
            fullName: 'Ing. Fernando Ramos',
            company: 'Inversiones Logísticas del Sur S.A.C.',
            position: 'Gerente de Proyectos',
            email: 'framos@inversioneslog.pe',
            phone: '+51 987 112 233',
            whatsapp: '+51 987 112 233',
            createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
            status: 'Recibido'
          },
          {
            id: 'RG-2026-0985',
            service: 'Evaluación de inundaciones (EVAR)',
            region: 'Piura',
            province: 'Piura',
            district: 'Catacaos',
            projectType: 'Público / Infraestructura',
            description: 'Modelación hidráulica 2D con HEC-RAS para defensas ribereñas del río Piura ante crecidas extraordinarias.',
            fullName: 'Arq. Lucía Delgado',
            company: 'Consorcio Ribereño Norte',
            position: 'Coordinadora Técnica',
            email: 'ldelgado@consorcionorte.pe',
            phone: '+51 974 556 789',
            whatsapp: '+51 974 556 789',
            createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
            status: 'En Evaluación'
          }
        ];
        localStorage.setItem('rg_quotes', JSON.stringify(seedQuotes));
        setQuotes(seedQuotes);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateStatus = (id: string, newStatus: 'Recibido' | 'En Evaluación' | 'Cotizado' | 'Cerrado') => {
    const updated = quotes.map(q => q.id === id ? { ...q, status: newStatus } : q);
    setQuotes(updated);
    localStorage.setItem('rg_quotes', JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
    if (window.confirm(`¿Deseas eliminar la solicitud ${id}?`)) {
      const filtered = quotes.filter(q => q.id !== id);
      setQuotes(filtered);
      localStorage.setItem('rg_quotes', JSON.stringify(filtered));
    }
  };

  const filteredQuotes = quotes.filter(q => {
    const matchesStatus = filterStatus === 'all' || q.status === filterStatus;
    const matchesSearch = 
      q.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = 'ID,Fecha,Servicio,Region,Empresa,Contacto,Correo,Telefono,Estado\n';
    const rows = filteredQuotes.map(q => 
      `"${q.id}","${new Date(q.createdAt).toLocaleDateString()}","${q.service}","${q.region}","${q.company}","${q.fullName}","${q.email}","${q.phone}","${q.status}"`
    ).join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `RG_Solicitudes_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#0F2942] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
                <span>Panel de Gestión de Solicitudes y Leads</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {quotes.length} Registros
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                Trazabilidad de cotizaciones generadas por el Cotizador Inteligente con código único (RG-2026-XXXX).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
            aria-label="Cerrar panel"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por código, cliente o servicio..."
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-xs w-full sm:w-64 focus:outline-none focus:border-[#0284C7]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs"
              >
                <option value="all">Todos los Estados</option>
                <option value="Recibido">Recibido</option>
                <option value="En Evaluación">En Evaluación</option>
                <option value="Cotizado">Cotizado</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>

            <button
              onClick={exportCSV}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-200 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar CSV</span>
            </button>
          </div>
        </div>

        {/* Table / List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-16 text-slate-500">
              <Database className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="font-heading font-bold text-slate-700">No hay solicitudes que coincidan</p>
              <p className="text-xs text-slate-400 mt-1">Realiza una prueba desde el Cotizador Inteligente para verla registrada aquí en tiempo real.</p>
            </div>
          ) : (
            filteredQuotes.map((quote) => (
              <div
                key={quote.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0284C7] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-sm text-[#0F2942] tracking-wider">
                      {quote.id}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      quote.status === 'Recibido' ? 'bg-amber-100 text-amber-800' :
                      quote.status === 'En Evaluación' ? 'bg-sky-100 text-[#0284C7]' :
                      quote.status === 'Cotizado' ? 'bg-emerald-100 text-emerald-800' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {quote.status}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {new Date(quote.createdAt).toLocaleDateString()} {new Date(quote.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-slate-900">
                    {quote.service}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {quote.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <strong>{quote.company}</strong> ({quote.fullName})
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {quote.region} - {quote.district}
                    </span>
                  </div>
                </div>

                {/* Right Actions & Status Picker */}
                <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <select
                      value={quote.status}
                      onChange={(e) => handleUpdateStatus(quote.id, e.target.value as any)}
                      className="text-xs py-1 px-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
                    >
                      <option value="Recibido">Recibido</option>
                      <option value="En Evaluación">En Evaluación</option>
                      <option value="Cotizado">Cotizado</option>
                      <option value="Cerrado">Cerrado</option>
                    </select>

                    <button
                      onClick={() => handleDelete(quote.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                      title="Eliminar registro"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${quote.email}?subject=Propuesta Técnica RG - ${quote.id}&body=Estimado(a) ${quote.fullName}, en atención a su requerimiento de ${quote.service}...`}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg flex items-center gap-1"
                    >
                      <Mail className="w-3 h-3 text-[#0284C7]" />
                      Responder
                    </a>
                    <a
                      href={`https://wa.me/${quote.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(quote.fullName)},%20te%20escribimos%20de%20RG%20Consultoría%20Ambiental%20respecto%20a%20tu%20solicitud%20${quote.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
