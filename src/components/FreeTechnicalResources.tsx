import React, { useState } from 'react';
import { Download, CheckCircle2, X } from 'lucide-react';
import { TECHNICAL_RESOURCES } from '../data/mockData';
import { ResourceItem } from '../types';

export const FreeTechnicalResources: React.FC = () => {
  const [downloadModalResource, setDownloadModalResource] = useState<ResourceItem | null>(null);
  const [downloadForm, setDownloadForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadForm.name || !downloadForm.email) return;

    // Simulate instant download trigger
    setDownloadSuccess(true);
    setTimeout(() => {
      // Mock triggering file download
      const element = document.createElement("a");
      const file = new Blob([
        `DOCUMENTO TÉCNICO OFICIAL - RG CONSULTORÍA AMBIENTAL\n\nRecurso: ${downloadModalResource?.title}\nFormato: ${downloadModalResource?.pagesOrFormat}\nFecha: ${new Date().toLocaleDateString()}\n\nEste recurso técnico ha sido preparado por el equipo multidisciplinario de RG Consultoría Ambiental para fines de orientación técnica y planificación de proyectos.\n\nPara asistencia técnica o cotización de expedientes oficiales:\nWeb: https://rgconsultoria.pe\nContacto: hernan23rg@gmail.com\nWhatsApp: +51 943 055 949`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${downloadModalResource?.title.replace(/[^a-zA-Z0-9]/g, '_')}_RG.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-3">
            <Download className="w-4 h-4" />
            <span>HERRAMIENTAS & GUÍAS GRATUITAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Recursos Técnicos para tu Proyecto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Descarga checklists, matrices comparativas y guías metodológicas elaboradas por nuestros evaluadores y especialistas.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {TECHNICAL_RESOURCES.map((resource) => (
            <div
              key={resource.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0284C7] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-sky-100 text-[#0284C7]">
                    {resource.type}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    {resource.pagesOrFormat}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-slate-900 mb-2 leading-snug">
                  {resource.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {resource.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {resource.downloadCount}+ descargas
                </span>
                <button
                  onClick={() => {
                    setDownloadModalResource(resource);
                    setDownloadSuccess(false);
                  }}
                  className="px-4 py-2 bg-[#0F2942] hover:bg-[#0284C7] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Lead Form for Download */}
        {downloadModalResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
              <button
                onClick={() => setDownloadModalResource(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!downloadSuccess ? (
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-4">
                    <Download className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-1">
                    Descargar Recurso Técnico
                  </h3>
                  <p className="text-xs text-slate-500 mb-5">
                    {downloadModalResource.title} ({downloadModalResource.pagesOrFormat})
                  </p>

                  <form onSubmit={handleDownloadSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={downloadForm.name}
                        onChange={(e) => setDownloadForm({ ...downloadForm, name: e.target.value })}
                        placeholder="Ing. Carlos Mendoza"
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={downloadForm.email}
                        onChange={(e) => setDownloadForm({ ...downloadForm, email: e.target.value })}
                        placeholder="cmendoza@empresa.pe"
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Empresa o Entidad
                      </label>
                      <input
                        type="text"
                        value={downloadForm.company}
                        onChange={(e) => setDownloadForm({ ...downloadForm, company: e.target.value })}
                        placeholder="Consultora / Constructora / Municipalidad"
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={downloadForm.phone}
                        onChange={(e) => setDownloadForm({ ...downloadForm, phone: e.target.value })}
                        placeholder="Ej: 943055949"
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 mt-2 bg-[#0284C7] hover:bg-sky-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all"
                    >
                      OBTENER DESCARGA INMEDIATA
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    ¡Descarga iniciada!
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    El documento técnico ha sido generado y descargado a tu equipo. También hemos enviado una copia de respaldo a <strong>{downloadForm.email}</strong>.
                  </p>
                  <button
                    onClick={() => setDownloadModalResource(null)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
