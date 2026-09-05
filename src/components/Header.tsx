import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  AlertTriangle, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  FileCheck2, 
  ShieldAlert, 
  Compass, 
  ArrowRight,
  Database
} from 'lucide-react';
import { Logo } from './Logo';
import { NavigationPage } from '../types';

interface HeaderProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal?: () => void;
  onOpenAdminModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate,
  onOpenQuoteModal,
  onOpenAdminModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: NavigationPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar with Micro Contact & Region info */}
      <div className="bg-[#0A1F33] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Atención técnica a proyectos en todo el territorio peruano</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href="https://wa.me/51943055949?text=Hola,%20solicito%20asistencia%20t%C3%A9cnica%20con%20RG%20Consultor%C3%ADa%20Ambiental" target="_blank" rel="noopener noreferrer">
                <span className="text-emerald-400 font-medium">Asistencia Técnica:</span> WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <a href="mailto:hernan23rg@gmail.com">hernan23rg@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Evaluadores acreditados CENEPRED
            </span>
            {onOpenAdminModal && (
              <button
                onClick={onOpenAdminModal}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 bg-slate-800/80 hover:bg-slate-700 px-2 py-0.5 rounded transition-colors"
                title="Panel de Leads y Solicitudes"
              >
                <Database className="w-3 h-3 text-cyan-400" />
                <span>Gestión CMS</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`w-full bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md py-2.5 border-b border-slate-200' : 'py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('inicio')} 
            className="text-left focus:outline-none"
            aria-label="RG Consultoría Ambiental - Inicio"
          >
            <Logo />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-7">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`text-sm font-semibold transition-colors relative py-1 ${
                currentPage === 'inicio' 
                  ? 'text-[#0284C7]' 
                  : 'text-slate-700 hover:text-[#0284C7]'
              }`}
            >
              Inicio
              {currentPage === 'inicio' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('nosotros')}
              className={`text-sm font-semibold transition-colors relative py-1 ${
                currentPage === 'nosotros' 
                  ? 'text-[#0284C7]' 
                  : 'text-slate-700 hover:text-[#0284C7]'
              }`}
            >
              Nosotros
              {currentPage === 'nosotros' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </button>

            {/* Mega Menu Trigger for Servicios */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                onClick={() => handleNavClick('servicios')}
                className={`text-sm font-semibold inline-flex items-center gap-1 transition-colors py-1 ${
                  currentPage === 'servicios' || currentPage === 'instrumentos-ambientales' || currentPage === 'evaluacion-riesgos'
                    ? 'text-[#0284C7]'
                    : 'text-slate-700 hover:text-[#0284C7]'
                }`}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesMenuOpen ? 'rotate-180 text-[#0284C7]' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {servicesMenuOpen && (
                <div className="absolute top-full -left-12 w-[560px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {/* Branch 1 */}
                  <div 
                    onClick={() => handleNavClick('instrumentos-ambientales')}
                    className="p-3.5 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 cursor-pointer transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block mb-0.5">RAMA 01</span>
                    <h4 className="font-heading font-bold text-sm text-slate-800 group-hover:text-[#0284C7] leading-snug">
                      Instrumentos de Gestión Ambiental
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      EVAP, DIA, ITS, PAMA, FITSA y planes complementarios ante SENACE y ministerios.
                    </p>
                    <span className="text-[11px] font-semibold text-[#0284C7] mt-2 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Ver instrumentos <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Branch 2 */}
                  <div 
                    onClick={() => handleNavClick('evaluacion-riesgos')}
                    className="p-3.5 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-100 cursor-pointer transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center mb-2.5 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block mb-0.5">RAMA 02</span>
                    <h4 className="font-heading font-bold text-sm text-slate-800 group-hover:text-[#0284C7] leading-snug">
                      Evaluación de Riesgos Naturales
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      Geodinámica interna (sismos), externa (huaycos, deslizamientos) e hidrometeorológicos (inundaciones).
                    </p>
                    <span className="text-[11px] font-semibold text-[#0284C7] mt-2 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Ver evaluaciones <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('proyectos')}
              className={`text-sm font-semibold transition-colors relative py-1 ${
                currentPage === 'proyectos' || currentPage === 'casos-exito'
                  ? 'text-[#0284C7]' 
                  : 'text-slate-700 hover:text-[#0284C7]'
              }`}
            >
              Proyectos
              {currentPage === 'proyectos' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`text-sm font-semibold transition-colors relative py-1 ${
                currentPage === 'blog' 
                  ? 'text-[#0284C7]' 
                  : 'text-slate-700 hover:text-[#0284C7]'
              }`}
            >
              Blog
              {currentPage === 'blog' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contacto')}
              className={`text-sm font-semibold transition-colors relative py-1 ${
                currentPage === 'contacto' 
                  ? 'text-[#0284C7]' 
                  : 'text-slate-700 hover:text-[#0284C7]'
              }`}
            >
              Contacto
              {currentPage === 'contacto' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </button>
          </div>

          {/* Right Action CTA Button (Matching screen.png: SOLICITAR COTIZACIÓN) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal ? onOpenQuoteModal : () => handleNavClick('cotizacion')}
              className="px-5 py-2.5 bg-[#0F2942] hover:bg-[#0284C7] text-white text-xs md:text-sm font-bold tracking-wide uppercase rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] font-heading"
            >
              SOLICITAR COTIZACIÓN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal ? onOpenQuoteModal : () => handleNavClick('cotizacion')}
              className="px-3 py-1.5 bg-[#0F2942] text-white text-xs font-bold uppercase rounded-md sm:hidden"
            >
              Cotizar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0284C7] focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1 divide-y divide-slate-100 text-sm">
              <button
                onClick={() => handleNavClick('inicio')}
                className={`py-2.5 text-left font-medium ${currentPage === 'inicio' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick('nosotros')}
                className={`py-2.5 text-left font-medium ${currentPage === 'nosotros' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                Nosotros
              </button>

              <div className="py-2.5">
                <span className="font-bold text-xs uppercase text-slate-400 tracking-wider block mb-2">Servicios Especializados</span>
                <div className="space-y-2 pl-2">
                  <button
                    onClick={() => handleNavClick('instrumentos-ambientales')}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0284C7] text-left text-xs py-1"
                  >
                    <FileCheck2 className="w-4 h-4 text-sky-600" />
                    <span>Instrumentos de Gestión Ambiental (EVAP, DIA, ITS, PAMA)</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('evaluacion-riesgos')}
                    className="flex items-center gap-2 text-slate-700 hover:text-amber-600 text-left text-xs py-1"
                  >
                    <ShieldAlert className="w-4 h-4 text-[#0284C7]" />
                    <span>Evaluación de Riesgos (Geodinámica & Fenómenos Hidro)</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('proyectos')}
                className={`py-2.5 text-left font-medium ${currentPage === 'proyectos' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                Proyectos y Casos de Éxito
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`py-2.5 text-left font-medium ${currentPage === 'blog' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                RG Conocimiento (Blog Técnico)
              </button>

              <button
                onClick={() => handleNavClick('recursos')}
                className={`py-2.5 text-left font-medium ${currentPage === 'recursos' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                Recursos Técnicos Gratuitos
              </button>

              <button
                onClick={() => handleNavClick('contacto')}
                className={`py-2.5 text-left font-medium ${currentPage === 'contacto' ? 'text-[#0284C7] font-bold' : 'text-slate-700'}`}
              >
                Contacto
              </button>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else handleNavClick('cotizacion');
                }}
                className="w-full py-3 bg-[#0F2942] hover:bg-[#0284C7] text-white text-sm font-bold uppercase rounded-lg text-center"
              >
                SOLICITAR COTIZACIÓN
              </button>
              <a
                href="https://wa.me/51943055949?text=Hola,%20solicito%20asistencia%20t%C3%A9cnica%20con%20RG%20Consultor%C3%ADa%20Ambiental"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Asistencia Técnica WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
