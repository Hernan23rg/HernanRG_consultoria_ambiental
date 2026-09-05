import React from 'react';
import { ShieldCheck, Scale, CheckCircle2, AlertOctagon, Building2, Landmark } from 'lucide-react';
import { REGULATORY_ENTITIES, LEGAL_FRAMEWORK } from '../data/mockData';

export const RegulatoryComplianceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full mb-3">
            <Scale className="w-4 h-4 text-[#0284C7]" />
            <span>SEGURIDAD JURÍDICA & SECTORIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Cumplimiento Normativo y Autoridades Competentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Orientamos la gestión para que tus proyectos cumplan de manera oportuna con las normativas peruanas, evitando paralizaciones de obra, observaciones reiterativas o sanciones administrativas.
          </p>
        </div>

        {/* Entities Badges & Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {REGULATORY_ENTITIES.map((ent, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-lg font-black font-heading text-[#0284C7]">
                  {ent.acronym}
                </div>
                <h4 className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">
                  {ent.name}
                </h4>
              </div>
              <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-slate-200/80">
                {ent.role}
              </p>
            </div>
          ))}
        </div>

        {/* Legal Framework & Risk Mitigation 2-Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Leyes Marco */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0F2942] font-heading font-bold text-base">
              <Landmark className="w-5 h-5 text-[#0284C7]" />
              <span>Marco Legal Fundamental en el Perú</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nuestros expedientes e informes periciales se formulan observando rigurosamente los mandatos de las leyes nacionales:
            </p>

            <div className="space-y-3 pt-1">
              {LEGAL_FRAMEWORK.map((law, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-xs font-bold text-[#0284C7] block">{law.law}</span>
                  <p className="text-xs text-slate-600 mt-0.5">{law.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Prevención de Contingencias */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-800 font-heading font-bold text-base">
                <AlertOctagon className="w-5 h-5 text-amber-600" />
                <span>¿Por qué la rigurosidad técnica protege tu inversión?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-2">
                Un instrumento ambiental mal sustentado o un análisis de riesgo superficial puede derivar en:
              </p>

              <ul className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Rechazos y observaciones reiteradas:</strong> Pérdida de semanas o meses en trámites ante ventanillas únicas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Multas y paralizaciones del OEFA / OSINERGMIN:</strong> Riesgo de sanciones económicas por iniciar obras sin IGA aprobado.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Pérdida de infraestructura por desastres:</strong> Ubicar instalaciones en cauces activos de huayco o áreas inundables sin medidas estructurales.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>Con RG Consultoría cuentas con sustento técnico auditable y trazabilidad ante cualquier inspección fiscalizadora.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
