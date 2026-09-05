import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Layers, 
  Activity, 
  CloudRain, 
  Mountain, 
  CheckCircle2, 
  ArrowRight, 
  Workflow, 
  Compass, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { RISK_CATEGORIES, RISK_METHODOLOGY_STEPS } from '../data/mockData';

interface RiskEvaluationSectionProps {
  onOpenQuoteModal: (hazardName?: string) => void;
}

export const RiskEvaluationSection: React.FC<RiskEvaluationSectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('geodinamica-interna');
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  const currentCategory = RISK_CATEGORIES.find(c => c.id === activeCategory) || RISK_CATEGORIES[0];

  return (
    <section className="py-16 sm:py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-3">
            <ShieldAlert className="w-4 h-4 text-[#0284C7]" />
            <span>RAMA 02 · GESTIÓN DE RIESGOS Y DESASTRES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Evaluación de Riesgos Originados por Fenómenos Naturales
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Evaluamos peligros y escenarios de riesgo asociados a fenómenos naturales para contribuir a la prevención, planificación territorial y toma de decisiones seguras.
          </p>
        </div>

        {/* Responsible Regulatory Warning Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border-2 border-emerald-500 shadow-sm flex items-start gap-3.5 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold font-heading text-emerald-700 text-sm sm:text-base">Acreditación Oficial y Rigor Metodológico CENEPRED</p>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Las Evaluaciones del Riesgo de Desastres (EVAR) son formuladas por evaluadores acreditados por CENEPRED y habilitados por sus respectivos colegios profesionales, conforme al Manual de Evaluación de Riesgos y los lineamientos del SINAGERD.
            </p>
          </div>
        </div>

        {/* Interactive Selector Header: ¿QUÉ FENÓMENO O AMENAZA DESEAS EVALUAR? */}
        <div className="bg-slate-50 p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 mb-8">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 py-1.5 flex items-center justify-between">
            <span>¿QUÉ FENÓMENO O AMENAZA DESEAS EVALUAR? SELECCIONA:</span>
            <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">Haz clic para ver alcances, modelamiento y entregables</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-1">
            {/* Card 1: Geodinámica Interna */}
            <button
              onClick={() => setActiveCategory('geodinamica-interna')}
              className={`p-5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                activeCategory === 'geodinamica-interna'
                  ? 'bg-[#0F2942] text-white shadow-md shadow-slate-900/10 scale-[1.01]'
                  : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200/60'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  activeCategory === 'geodinamica-interna' ? 'bg-white/10 text-cyan-300' : 'bg-sky-100 text-[#0284C7]'
                }`}>
                  <Activity className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  activeCategory === 'geodinamica-interna' ? 'text-cyan-300' : 'text-[#0284C7]'
                }`}>
                  Peligros Geológicos
                </span>
                <h3 className={`text-base sm:text-lg font-bold font-heading mt-0.5 ${
                  activeCategory === 'geodinamica-interna' ? 'text-white' : 'text-slate-900'
                }`}>
                  Geodinámica Interna
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${
                  activeCategory === 'geodinamica-interna' ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  Sismos, tsunamis, licuación de suelos y fallas tectónicas activas.
                </p>
              </div>
              <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                activeCategory === 'geodinamica-interna' ? 'border-white/10 text-cyan-300' : 'border-slate-100 text-[#0284C7]'
              }`}>
                <span>Ver análisis y flujo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 2: Geodinámica Externa */}
            <button
              onClick={() => setActiveCategory('geodinamica-externa')}
              className={`p-5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                activeCategory === 'geodinamica-externa'
                  ? 'bg-[#0F2942] text-white shadow-md shadow-slate-900/10 scale-[1.01]'
                  : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200/60'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  activeCategory === 'geodinamica-externa' ? 'bg-white/10 text-cyan-300' : 'bg-sky-100 text-[#0284C7]'
                }`}>
                  <Mountain className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  activeCategory === 'geodinamica-externa' ? 'text-cyan-300' : 'text-[#0284C7]'
                }`}>
                  Movimientos en Masa
                </span>
                <h3 className={`text-base sm:text-lg font-bold font-heading mt-0.5 ${
                  activeCategory === 'geodinamica-externa' ? 'text-white' : 'text-slate-900'
                }`}>
                  Geodinámica Externa
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${
                  activeCategory === 'geodinamica-externa' ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  Flujo de detritos, deslizamientos, caídas de rocas y socavación.
                </p>
              </div>
              <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                activeCategory === 'geodinamica-externa' ? 'border-white/10 text-cyan-300' : 'border-slate-100 text-[#0284C7]'
              }`}>
                <span>Ver modelamiento SIG</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 3: Fenómenos Hidrometeorológicos */}
            <button
              onClick={() => setActiveCategory('hidrometeorologicos')}
              className={`p-5 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                activeCategory === 'hidrometeorologicos'
                  ? 'bg-[#0F2942] text-white shadow-md shadow-slate-900/10 scale-[1.01]'
                  : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] border border-slate-200/60'
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  activeCategory === 'hidrometeorologicos' ? 'bg-white/10 text-cyan-300' : 'bg-sky-100 text-[#0284C7]'
                }`}>
                  <CloudRain className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  activeCategory === 'hidrometeorologicos' ? 'text-cyan-300' : 'text-[#0284C7]'
                }`}>
                  Hidrología e Inundaciones
                </span>
                <h3 className={`text-base sm:text-lg font-bold font-heading mt-0.5 ${
                  activeCategory === 'hidrometeorologicos' ? 'text-white' : 'text-slate-900'
                }`}>
                  Fenómenos Hidrometeorológicos
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${
                  activeCategory === 'hidrometeorologicos' ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  Inundaciones fluviales, lluvias intensas extraordinarias y huaycos.
                </p>
              </div>
              <div className={`mt-3 pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                activeCategory === 'hidrometeorologicos' ? 'border-white/10 text-cyan-300' : 'border-slate-100 text-[#0284C7]'
              }`}>
                <span>Ver modelación 2D</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Detailed Risk Evaluation Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden mb-12">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-[#0F2942] to-[#0369A1] p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Metodología Oficial CENEPRED · SINAGERD</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {currentCategory.title}
              </h3>
              <p className="text-sm sm:text-base text-cyan-100 max-w-2xl font-light">
                {currentCategory.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <button
                onClick={() => onOpenQuoteModal(currentCategory.title)}
                className="px-6 py-3 bg-[#0284C7] hover:bg-sky-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wide rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>SOLICITAR EVALUACIÓN DE RIESGO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8 bg-white">
            {/* Top 3-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Box 1: Fenómenos y Amenazas */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-sm mb-3">
                  01
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                  Amenazas Evaluadas
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {currentCategory.hazards.map((hz, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200/80 shadow-xs"
                    >
                      {hz}
                    </span>
                  ))}
                </div>
              </div>

              {/* Box 2: Herramientas SIG & Modelamiento */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center font-bold text-sm mb-3">
                  02
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                  Herramientas SIG & Modelamiento
                </h4>
                <div className="space-y-1.5 mt-2 text-xs text-slate-600">
                  {currentCategory.technicalTools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                      <span>{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 3: Casos de Aplicación Típica */}
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100">
                <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm mb-3">
                  03
                </div>
                <h4 className="font-heading font-bold text-base text-[#0F2942] mb-2">
                  Casos de Aplicación Típica
                </h4>
                <ul className="space-y-1.5 mt-2 text-xs text-slate-700">
                  {currentCategory.typicalScenarios.map((sc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
                      <span>{sc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom 2-column Grid (Metodología y Entregables) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {/* Pipeline Cadena Metodológica */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-sky-600" />
                  <span>Cadena Metodológica de Análisis</span>
                </h4>
                <div className="space-y-2 text-xs">
                  {currentCategory.workflow.map((wfStep, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-[#0284C7] font-bold flex items-center justify-center text-[10px] shrink-0">
                        {i + 1}
                      </span>
                      <span>{wfStep}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entregables Oficiales */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0284C7]" />
                  <span>Entregables Técnicos Oficiales</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentCategory.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 14: Interactive Methodology (6 Stages Timeline) */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-2 inline-block">
              PROCESO METODOLÓGICO CENEPRED
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2942] mt-1">
              ¿Cómo evaluamos el riesgo?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Proceso técnico de seis etapas estandarizadas para estimar la probabilidad y magnitud de daños potenciales.
            </p>
          </div>

          {/* Interactive 6-step timeline buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {RISK_METHODOLOGY_STEPS.map((stepItem, idx) => {
              const isCurrent = activeMethodStep === idx;
              return (
                <button
                  key={stepItem.step}
                  onClick={() => setActiveMethodStep(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-[#0F2942] text-white border-[#0F2942] shadow-md scale-105'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-sky-50 hover:text-[#0284C7]'
                  }`}
                >
                  <span className={`text-xl font-extrabold font-heading ${isCurrent ? 'text-cyan-300' : 'text-[#0284C7]'}`}>
                    {stepItem.step}
                  </span>
                  <div className="mt-3">
                    <p className="font-heading font-bold text-xs leading-snug">
                      {stepItem.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed selected step explanation box */}
          <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0 font-bold text-lg font-heading">
              {RISK_METHODOLOGY_STEPS[activeMethodStep].step}
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                Fase {RISK_METHODOLOGY_STEPS[activeMethodStep].step} — {RISK_METHODOLOGY_STEPS[activeMethodStep].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {RISK_METHODOLOGY_STEPS[activeMethodStep].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
