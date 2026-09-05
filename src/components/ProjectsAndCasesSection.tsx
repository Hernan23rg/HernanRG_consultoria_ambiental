import React, { useState } from 'react';
import { Briefcase, MapPin, Building, CheckCircle2, ArrowRight, Filter, ShieldCheck } from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/mockData';
import { ProjectCase } from '../types';

interface ProjectsSectionProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export const ProjectsAndCasesSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCaseModal, setSelectedCaseModal] = useState<ProjectCase | null>(null);

  const filteredCases = selectedCategory === 'all'
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-3">
            <Briefcase className="w-4 h-4" />
            <span>CASOS DE APLICACIÓN TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Proyectos y Experiencia Técnica Representativa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Casos de estudio representativos por tipología de proyecto, demostrando el abordaje técnico, modelamiento y gestión ante entidades reguladoras.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos los Casos' },
            { id: 'ambiental', label: 'Gestión Ambiental (SEIA)' },
            { id: 'riesgo', label: 'Evaluación de Riesgos (CENEPRED)' },
            { id: 'integral', label: 'Proyectos Integrales' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0F2942] text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase bg-white/95 text-[#0F2942] shadow-sm">
                      {proj.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm">
                    <MapPin className="w-3 h-3 text-cyan-300" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-xs font-bold uppercase text-[#0284C7]">
                    {proj.instrument}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <div className="pt-2 text-xs text-slate-600 space-y-2">
                    <p><strong>Reto:</strong> {proj.challenge}</p>
                    <p><strong>Solución:</strong> {proj.solution}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Entidad: <strong className="text-slate-700">{proj.authority}</strong>
                </span>
                <button
                  onClick={() => setSelectedCaseModal(proj)}
                  className="font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                >
                  <span>Ver Ficha</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Ficha Técnica del Proyecto */}
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-sky-100 text-[#0284C7]">
                  {selectedCaseModal.sector} · {selectedCaseModal.category.toUpperCase()}
                </span>
                <button
                  onClick={() => setSelectedCaseModal(null)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">
                {selectedCaseModal.title}
              </h3>

              <p className="text-xs text-slate-500 flex items-center gap-2 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedCaseModal.location} | Entidad: {selectedCaseModal.authority}</span>
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Instrumento / Estudio:</span>
                  <p>{selectedCaseModal.instrument}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Desafío y Reto Técnico:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedCaseModal.challenge}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block mb-1">Metodología y Solución RG:</span>
                  <p className="text-slate-600 leading-relaxed">{selectedCaseModal.solution}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <span className="font-bold block mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Resultado y Valor Aportado:
                  </span>
                  <p className="text-xs text-emerald-800">{selectedCaseModal.result}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const title = selectedCaseModal.title;
                    setSelectedCaseModal(null);
                    onOpenQuoteModal(title);
                  }}
                  className="w-full py-3 bg-[#0284C7] hover:bg-sky-600 text-white font-heading font-bold text-xs uppercase tracking-wide rounded-xl shadow text-center"
                >
                  COTIZAR UN PROYECTO SIMILAR
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
