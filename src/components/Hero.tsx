import React from 'react';
import { ShieldCheck, FileCheck, ArrowRight, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import { NavigationPage } from '../types';
import heroBannerImg from '../assets/images/hero_cover.jpg';

interface HeroProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
  onOpenAiAssistant?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigate, 
  onOpenQuoteModal,
  onOpenAiAssistant
}) => {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Composition: Environmental engineers sampling and disaster risk assessment in field */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBannerImg}
          alt="RG Consultoría Ambiental - Ingenieros ambientales y evaluadores de riesgos de desastres en campo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.80] contrast-[1.04]"
        />
        {/* Subtle gradient vignette to guarantee pristine WCAG contrast while preserving the visual field details */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F33] via-[#0F2942]/65 to-[#0A1F33]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A1F33]/30 to-[#0A1F33]/75" />
      </div>

      {/* Decorative Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-wide flex items-center flex-wrap justify-center gap-2">
            <span>Consultoría Ambiental</span>
            <span className="text-cyan-400/60 font-bold">·</span>
            <span>Gestión de Riesgos</span>
            <span className="text-cyan-400/60 font-bold">·</span>
            <span className="text-emerald-300 font-bold">Consultoría Ambiental de Vanguardia</span>
          </span>
        </div>

        {/* Main Title - Company Name Prominent */}
        <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] max-w-4xl mx-auto text-balance drop-shadow-md">
          RG Consultoría Ambiental
        </h1>

        {/* Secondary Title (swapped font size) */}
        <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-sky-300 tracking-normal mt-3 sm:mt-4 max-w-3xl mx-auto drop-shadow-md">
          Soluciones ambientales para proyectos seguros y sostenibles
        </h2>

        {/* Subtitle (Exact from user request) */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed text-balance drop-shadow">
          Brindamos servicios especializados en instrumentos de gestión ambiental, evaluación de riesgos originados por fenómenos naturales, para garantizar la viabilidad y sostenibilidad de tus proyectos.
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#0284C7] hover:bg-sky-500 active:bg-sky-700 text-white font-heading font-bold text-sm sm:text-base tracking-wide rounded-xl shadow-lg shadow-sky-950/40 hover:shadow-sky-500/20 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            <span>INICIAR PROYECTO / COTIZAR</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('servicios')}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-heading font-semibold text-sm sm:text-base rounded-xl backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>EXPLORAR SERVICIOS</span>
          </button>

          <a
            href="https://wa.me/51943055949?text=Hola,%20quisiera%20hablar%20con%20un%20especialista%20de%20RG%20Consultor%C3%ADa%20Ambiental"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-heading font-semibold text-sm sm:text-base rounded-xl backdrop-blur-md shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 border border-emerald-400/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>HABLAR CON UN ESPECIALISTA</span>
          </a>
        </div>

        {/* Bottom Trust Indicators (4 Technical Badges) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-cyan-300">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm font-heading">SEIA & SENACE</p>
              <p className="text-slate-300 text-[11px] leading-tight">EVAP, DIA, ITS, PAMA y FITSA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm font-heading">CENEPRED</p>
              <p className="text-slate-300 text-[11px] leading-tight">Evaluadores de Riesgo acreditados</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm font-heading">SIG</p>
              <p className="text-slate-300 text-[11px] leading-tight">Sistemas de Información Geográfica</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm font-heading">Cobertura Nacional</p>
              <p className="text-slate-300 text-[11px] leading-tight">Proyectos en Costa, Sierra y Selva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
