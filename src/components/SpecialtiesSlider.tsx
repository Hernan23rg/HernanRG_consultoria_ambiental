import React from 'react';
import { ArrowRight, FileCheck, ShieldAlert } from 'lucide-react';
import { NavigationPage } from '../types';

interface SpecialtiesSliderProps {
  onNavigate: (page: NavigationPage) => void;
}

export const SpecialtiesSlider: React.FC<SpecialtiesSliderProps> = ({ onNavigate }) => {
  const specialties = [
    {
      id: 'gestion-ambiental',
      branchBadge: 'RAMA 01 · GESTIÓN AMBIENTAL',
      category: 'Gestión Ambiental',
      title: 'Instrumentos de Gestión Ambiental',
      page: 'instrumentos-ambientales' as NavigationPage,
      description: 'Desarrollo y evaluación de Instrumentos de Gestión Ambiental (EVAP, DIA, ITS, PAMA, FITSA) conforme al SEIA y normativas sectoriales.',
      icon: FileCheck,
      imageUrl: '/images/gestion_ambiental_vest.jpg',
      highlights: ['EVAP y Clasificación Ambiental', 'DIA (Categoría I)', 'ITS y Modificaciones de Componentes', 'PAMA y Planes de Adecuación']
    },
    {
      id: 'riesgos-naturales',
      branchBadge: 'RAMA 02 · GESTIÓN DE RIESGOS Y DESASTRES',
      category: 'Gestión de Riesgos y Desastres',
      title: 'Evaluación de Riesgos originados por Fenómenos Naturales',
      page: 'evaluacion-riesgos' as NavigationPage,
      description: 'Evaluación integral de riesgos originados por fenómenos naturales: sismos, tsunamis, deslizamientos, huaycos e inundaciones conforme a CENEPRED.',
      icon: ShieldAlert,
      imageUrl: '/images/riesgos_naturales_vest.jpg',
      highlights: ['Geodinámica Interna (Sismos / Tsunamis)', 'Geodinámica Externa (Deslizamientos)', 'Peligros Hidrometeorológicos (Inundaciones)', 'Metodología oficial de 6 etapas']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Centered */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3.5 py-1 rounded-full mb-3">
            NUESTROS SERVICIOS ESPECIALIZADOS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Nuestras Especialidades
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Soluciones integrales adaptadas a las exigencias normativas del Sistema Nacional de Gestión Ambiental y CENEPRED
          </p>
        </div>

        {/* 2 Main Specialties Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate(item.page)}
                className="group relative h-[480px] sm:h-[500px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6 sm:p-8 border border-slate-100"
              >
                {/* Background Photography with Zoom on Hover */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.88]"
                  />
                  {/* Subtle Dark Bottom Gradient for crisp readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F33] via-[#0A1F33]/70 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#0F2942] shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-[#0284C7]" />
                    {item.branchBadge}
                  </span>
                </div>

                {/* Card Text Content */}
                <div className="relative z-10 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-200 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-4 pt-4 border-t border-white/15 space-y-1.5">
                    {item.highlights.slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link (matching screen.png: SABER MÁS ->) */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-cyan-300 group-hover:text-white transition-colors">
                    <span>SABER MÁS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
