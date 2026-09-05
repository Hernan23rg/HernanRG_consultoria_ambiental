import React from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  BookOpen, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { NavigationPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: NavigationPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1F33] text-slate-300 border-t border-slate-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col 4 */}
          <div className="lg:col-span-4 space-y-5">
            <button 
              onClick={() => handleNav('inicio')} 
              className="text-left focus:outline-none"
              aria-label="RG Consultoría Ambiental"
            >
              <Logo variant="white" showDescriptor={true} />
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Servicios especializados en instrumentos de gestión ambiental y evaluación de riesgos originados por fenómenos naturales para proyectos públicos y privados en el Perú.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
              <span className="font-heading font-bold text-cyan-400 block tracking-wider uppercase text-[11px]">
                Lema Institucional:
              </span>
              <p className="text-slate-200 italic font-medium">
                Ambiente + Territorio + Prevención + Soluciones
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2.5 bg-[#0284C7] hover:bg-sky-500 text-white font-heading font-bold text-xs uppercase tracking-wide rounded-lg transition-colors shadow"
              >
                SOLICITAR COTIZACIÓN
              </button>
              <a
                href="https://wa.me/51943055949"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp: 943055949
              </a>
            </div>
          </div>

          {/* Col 2: Instrumentos de Gestión Ambiental */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Gestión Ambiental
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Evaluación Preliminar (EVAP)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Declaración de Impacto Ambiental (DIA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Informe Técnico Sustentatorio (ITS)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Plan de Adecuación Ambiental (PAMA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Ficha Técnica Socioambiental (FITSA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('instrumentos-ambientales')} className="hover:text-cyan-400 transition-colors text-left">
                  Planes de Cierre & Manejo de Residuos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Evaluación de Riesgos y Expertos */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Riesgos & Expertos
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('evaluacion-riesgos')} className="hover:text-amber-400 transition-colors text-left">
                  Geodinámica Interna (Sismos / Tsunamis)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('evaluacion-riesgos')} className="hover:text-amber-400 transition-colors text-left">
                  Geodinámica Externa (Huaycos / Deslizamientos)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('evaluacion-riesgos')} className="hover:text-cyan-400 transition-colors text-left">
                  Fenómenos Hidrometeorológicos e Inundaciones
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('evaluacion-riesgos')} className="hover:text-cyan-400 transition-colors text-left">
                  Metodología Oficial CENEPRED
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('recursos')} className="hover:text-cyan-400 transition-colors text-left">
                  Recursos Técnicos y Descargables
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto y Acreditaciones */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Asistencia Técnica
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Atención a proyectos en todo el territorio peruano</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:hernan23rg@gmail.com" className="hover:text-white">
                  hernan23rg@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="https://wa.me/51943055949" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  WhatsApp: 943055949
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contacto')}
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Libro de Reclamaciones</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 RG Consultoría Ambiental. Todos los derechos reservados. RUC: [DATO POR COMPLETAR]
          </p>

          <div className="flex items-center gap-5">
            <button onClick={() => handleNav('contacto')} className="hover:text-slate-300">
              Términos de Servicio
            </button>
            <button onClick={() => handleNav('contacto')} className="hover:text-slate-300">
              Política de Privacidad
            </button>
            <button onClick={() => handleNav('contacto')} className="hover:text-slate-300">
              Protección de Datos (Ley N° 29733)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
