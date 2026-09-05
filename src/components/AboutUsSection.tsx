import React from 'react';
import { Target, Compass, Award } from 'lucide-react';
import { NavigationPage } from '../types';

interface AboutUsProps {
  onNavigate?: (page: NavigationPage) => void;
  onOpenQuoteModal?: () => void;
}

export const AboutUsSection: React.FC<AboutUsProps> = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner Nosotros - Fondo Blanco */}
      <section className="pt-10 sm:pt-14 pb-2 bg-white text-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full inline-block">
            IDENTIDAD Y PROPÓSITO
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold font-heading text-[#0F2942] tracking-tight leading-tight">
            Quiénes Somos
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            En RG Consultoría Ambiental integramos el conocimiento normativo del SEIA y los lineamientos del CENEPRED para hacer viables y seguros los proyectos que impulsan el desarrollo del Perú.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Purpose */}
      <section className="pt-4 sm:pt-6 pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Propósito */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-5 mx-auto">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3 text-center">
                Nuestro Propósito
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Ser la consultoría ambiental y de gestión del riesgo de referencia para proyectos de desarrollo en el Perú, combinando solvencia técnica, rigor normativo, dominio del territorio y agilidad en la gestión.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-[#0284C7] text-center w-full">
              Sustento auditable en cada informe
            </div>
          </div>

          {/* Misión */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3 text-center">
                Nuestra Misión
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Brindar soluciones integrales en instrumentos de gestión ambiental y evaluación de riesgos ante fenómenos naturales, protegiendo las inversiones de nuestros clientes y promoviendo la sostenibilidad ambiental y la resiliencia del territorio.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-emerald-700 text-center w-full">
              Alineados a ODS y SINAGERD
            </div>
          </div>

          {/* Visión */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold font-heading text-slate-900 mb-3 text-center">
                Nuestra Visión
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Consolidarnos como el socio estratégico predilecto de inversionistas públicos y privados en el Perú, reconocidos por nuestra capacidad técnica de resolver desafíos complejos en campo y ante las autoridades reguladoras.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-amber-700 text-center w-full">
              Cobertura en proyectos a nivel nacional
            </div>
          </div>
        </div>

        {/* Principios Fundamentales (Conservado en fondo claro y centrado) */}
        <div className="mt-14 sm:mt-16">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full inline-block">
              PRINCIPIOS FUNDAMENTALES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2942] mt-3 text-center">
              Valores que sustentan cada uno de nuestros estudios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 Rigor Técnico y Científico */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center font-extrabold text-base mb-4 mx-auto">
                01
              </div>
              <h3 className="text-xl font-semibold font-heading text-slate-700 text-center">
                Rigor Técnico y Científico
              </h3>
            </div>

            {/* 02 Transparencia Normativa */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center font-extrabold text-base mb-4 mx-auto">
                02
              </div>
              <h3 className="text-xl font-semibold font-heading text-slate-700 text-center">
                Transparencia Normativa
              </h3>
            </div>

            {/* 03 Responsabilidad Preventiva */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284C7] flex items-center justify-center font-extrabold text-base mb-4 mx-auto">
                03
              </div>
              <h3 className="text-xl font-semibold font-heading text-slate-700 text-center">
                Responsabilidad Preventiva
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
