import React, { useState } from 'react';
import { 
  FileText, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Phone,
  X
} from 'lucide-react';
import { NavigationPage } from '../types';

interface WhatDoYouNeedProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: (preselectedService?: string) => void;
}

interface RecommendationOption {
  id: string;
  label: string;
  icon: typeof FileText;
  recommendedService: string;
  pageTarget: NavigationPage;
  explanation: string;
  regulatoryNote: string;
  quoteServiceKey: string;
}

export const WhatDoYouNeed: React.FC<WhatDoYouNeedProps> = ({ 
  onNavigate, 
  onOpenQuoteModal 
}) => {
  const [selectedOption, setSelectedOption] = useState<RecommendationOption | null>(null);

  const options: RecommendationOption[] = [
    {
      id: 'opt-iga',
      label: 'Necesito un instrumento de gestión ambiental',
      icon: FileText,
      recommendedService: 'Instrumentos de Gestión Ambiental (EVAP / DIA / ITS / PAMA)',
      pageTarget: 'instrumentos-ambientales',
      explanation: 'Para proyectos nuevos o en ejecución que requieren certificación ambiental ante SENACE o ministerios sectoriales, elaboramos la Evaluación Preliminar (EVAP), DIA o ITS correspondientes.',
      regulatoryNote: 'La categorización y aplicabilidad específica se determina conforme a la Ley del SEIA (Ley N° 27446) y el reglamento del sector correspondiente a su inversión.',
      quoteServiceKey: 'DIA'
    },
    {
      id: 'opt-riesgo',
      label: 'Necesito evaluar un riesgo natural',
      icon: AlertTriangle,
      recommendedService: 'Evaluación de Riesgos Originados por Fenómenos Naturales (EVAR)',
      pageTarget: 'evaluacion-riesgos',
      explanation: 'Si tu proyecto se ubica cerca de ríos, laderas inestables, zonas de sismicidad o fallas geológicas, realizamos la Evaluación del Riesgo (EVAR) acreditada por CENEPRED.',
      regulatoryNote: 'Elaboramos el informe técnico bajo los lineamientos del SINAGERD y el manual oficial de evaluación del riesgo de CENEPRED.',
      quoteServiceKey: 'Evaluación de inundaciones'
    },
    {
      id: 'opt-ayuda',
      label: 'No sé qué servicio necesito',
      icon: HelpCircle,
      recommendedService: 'Asesoría de Diagnóstico Técnico Inicial',
      pageTarget: 'contacto',
      explanation: 'Revisamos tu expediente de inversión o características del terreno sin costo inicial para orientarte hacia el instrumento ambiental o estudio de riesgo estrictamente necesario.',
      regulatoryNote: 'Evita sobrecostos o trámites innecesarios mediante una determinación preliminar transparente de los requerimientos de tu proyecto.',
      quoteServiceKey: 'Otro'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and Subtitle (matching screen.png) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100/60 px-3 py-1 rounded-full mb-3">
              ORIENTACIÓN INMEDIATA
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
              ¿Qué necesitas?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              Selecciona una opción para guiarte hacia la solución adecuada para tu proyecto. Te orientamos de forma técnica y responsable.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>Diagnóstico técnico sin compromiso de contratación previa.</span>
            </div>
          </div>

          {/* Right Column: 4 Interactive Options (matching screen.png) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedOption?.id === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt)}
                  className={`p-5 rounded-xl text-left transition-all duration-200 flex items-center gap-4 group ${
                    isSelected
                      ? 'bg-white border-2 border-[#0284C7] shadow-lg shadow-sky-950/5 scale-[1.02]'
                      : 'bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-[#0284C7] text-white' 
                      : 'bg-slate-100 text-slate-700 group-hover:bg-sky-50 group-hover:text-[#0284C7]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="font-heading font-bold text-sm sm:text-[15px] text-slate-800 group-hover:text-[#0284C7] block leading-snug">
                      {opt.label}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 group-hover:text-[#0284C7]">
                      Explorar recomendación <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Recommendation Panel (Opens below when user clicks an option) */}
        {selectedOption && (
          <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-sky-200 shadow-xl shadow-sky-950/5 animate-in fade-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setSelectedOption(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              aria-label="Cerrar recomendación"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0284C7]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>SERVICIO TÉCNICO RECOMENDADO</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0F2942]">
                  {selectedOption.recommendedService}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedOption.explanation}
                </p>
                <div className="mt-2 text-xs text-amber-800 bg-amber-50/80 border border-amber-200/60 p-2.5 rounded-lg flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Consideración técnica:</strong> {selectedOption.regulatoryNote}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <button
                  onClick={() => onOpenQuoteModal(selectedOption.quoteServiceKey)}
                  className="px-5 py-3 bg-[#0284C7] hover:bg-sky-600 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-sm hover:shadow transition-all text-center"
                >
                  SOLICITAR EVALUACIÓN / COTIZAR
                </button>
                <button
                  onClick={() => onNavigate(selectedOption.pageTarget)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-semibold text-xs sm:text-sm rounded-xl transition-all text-center"
                >
                  Ver Información del Servicio
                </button>
                <a
                  href={`https://wa.me/51943055949?text=Hola,%20tengo%20interés%20en%20el%20servicio:%20${encodeURIComponent(selectedOption.recommendedService)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-emerald-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Consultar vía WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
