import React, { useState } from 'react';
import { 
  FileCheck2, 
  CheckCircle, 
  FileText, 
  Clock, 
  HelpCircle, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { ENVIRONMENTAL_INSTRUMENTS } from '../data/mockData';
import { EnvironmentalInstrument } from '../types';

interface EnvironmentalInstrumentsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const EnvironmentalInstruments: React.FC<EnvironmentalInstrumentsProps> = ({ 
  onOpenQuoteModal 
}) => {
  const [activeTab, setActiveTab] = useState<string>('evap');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const currentInstrument: EnvironmentalInstrument = 
    ENVIRONMENTAL_INSTRUMENTS.find(i => i.id === activeTab) || ENVIRONMENTAL_INSTRUMENTS[0];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-3">
            <FileCheck2 className="w-4 h-4" />
            <span>RAMA 01 · GESTIÓN AMBIENTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Instrumentos de Gestión Ambiental
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Desarrollamos instrumentos de gestión ambiental orientados a la planificación, evaluación, adecuación y seguimiento ambiental de proyectos públicos y privados.
          </p>
        </div>

        {/* Responsible Regulatory Warning Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-500 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold font-heading text-emerald-700 text-sm sm:text-base">Nota de Responsabilidad Regulatoria</p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Ningún instrumento de gestión ambiental aplica de forma genérica a todos los proyectos. La categorización y exigibilidad técnica depende estrictamente del sector productivo, la magnitud de la inversión y la normativa vigente del SEIA.
            </p>
          </div>
        </div>

        {/* Interactive Selector Header: ¿QUÉ INSTRUMENTO NECESITAS? */}
        <div className="bg-slate-50 p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 mb-8">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 py-1.5 flex items-center justify-between">
            <span>¿QUÉ INSTRUMENTO NECESITAS? SELECCIONA:</span>
            <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">Haz clic para ver alcances y requisitos</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-1">
            {ENVIRONMENTAL_INSTRUMENTS.map((inst) => {
              const isActive = inst.id === activeTab;
              return (
                <button
                  key={inst.id}
                  onClick={() => {
                    setActiveTab(inst.id);
                    setExpandedFaq(null);
                  }}
                  className={`py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-200 flex flex-col items-center justify-center text-center gap-1 ${
                    isActive
                      ? 'bg-[#0F2942] text-white shadow-md shadow-slate-900/10 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200/60'
                  }`}
                >
                  <span className="text-base sm:text-lg tracking-tight font-extrabold">{inst.code}</span>
                  <span className="text-[10px] font-normal opacity-85 truncate max-w-full">
                    {inst.id === 'otros' ? 'Complementarios' : inst.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detailed Instrument Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          {/* Top Instrument Banner */}
          <div className="bg-gradient-to-r from-[#0F2942] to-[#0369A1] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentInstrument.normativeReference}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {currentInstrument.fullName}
              </h3>
              <p className="text-sm sm:text-base text-cyan-100 max-w-2xl font-light">
                {currentInstrument.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <button
                onClick={() => onOpenQuoteModal(currentInstrument.code)}
                className="px-6 py-3 bg-[#0284C7] hover:bg-sky-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>SOLICITAR ASESORÍA / COTIZACIÓN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-cyan-300" />
                <span>Tiempo est: {currentInstrument.timelineEst}</span>
              </div>
            </div>
          </div>

          {/* Instrument Core Content Grid */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: ¿Qué es? */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                  ¿Qué es?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentInstrument.whatIs}
                </p>
              </div>

              {/* Box 2: ¿Para qué sirve? */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                  ¿Para qué sirve?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentInstrument.purpose}
                </p>
              </div>

              {/* Box 3: ¿Cuándo puede requerirse? */}
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100">
                <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-heading font-bold text-base text-[#0F2942] mb-2">
                  ¿Cuándo puede requerirse?
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentInstrument.whenRequired}
                </p>
              </div>
            </div>

            {/* Requirements and Deliverables 2-Column */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Requirements */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sky-600" />
                  <span>¿Qué información se necesita? (Requisitos)</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentInstrument.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2Icon className="w-5 h-5 text-[#0284C7]" />
                  <span>¿Qué entregamos? (Entregables Técnicos)</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentInstrument.deliverables.map((del, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-2" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs for this specific instrument */}
            {currentInstrument.faqs.length > 0 && (
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-heading font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>Preguntas Frecuentes sobre {currentInstrument.code}</span>
                </h4>
                <div className="space-y-2.5">
                  {currentInstrument.faqs.map((faq, idx) => {
                    const isExpanded = expandedFaq === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                          className="w-full text-left p-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        {isExpanded && (
                          <div className="p-3.5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircle2Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);
