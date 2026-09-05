import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  MapPin, 
  Building, 
  FileText, 
  Phone, 
  Mail, 
  User, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERU_REGIONS } from '../data/mockData';
import { QuoteRequest } from '../types';

interface SmartQuoteCalculatorProps {
  initialService?: string;
  onQuoteSubmitted?: (quote: QuoteRequest) => void;
  isModalMode?: boolean;
  onClose?: () => void;
}

export const SmartQuoteCalculator: React.FC<SmartQuoteCalculatorProps> = ({
  initialService = '',
  onQuoteSubmitted,
  isModalMode = false,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [copiedCode, setCopiedCode] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    service: initialService || 'DIA',
    region: 'Lima Metropolitana',
    province: '',
    district: '',
    locationDetail: '',
    projectType: 'Privado',
    sector: 'Construcción',
    description: '',
    fullName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    whatsapp: '',
  });

  const [generatedQuote, setGeneratedQuote] = useState<QuoteRequest | null>(null);

  const servicesList = [
    { cat: 'Gestión Ambiental (SEIA)', items: ['EVAP', 'DIA', 'ITS', 'PAMA', 'FITSA', 'Plan de Cierre / PMRS'] },
    { cat: 'Riesgos Naturales (CENEPRED)', items: ['Evaluación de sismos', 'Evaluación de tsunami', 'Evaluación de deslizamientos', 'Evaluación de flujo de detritos', 'Evaluación de inundaciones', 'Evaluación por lluvias intensas'] },
    { cat: 'Talento Especializado', items: ['Profesional especializado', 'Asesoría técnica integral', 'Otro servicio'] }
  ];

  const projectTypes = [
    'Privado', 'Público', 'Infraestructura', 'Construcción', 
    'Minería', 'Industria', 'Energía', 'Transporte', 'Agricultura', 'Vivienda', 'Otro'
  ];

  const handleNextStep = () => {
    if (currentStep === 5) {
      // Validate Contact
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert('Por favor completa al menos tu Nombre, Correo y Teléfono para enviarte la cotización formal.');
        return;
      }

      // Generate unique sequential code (e.g. RG-2026-0482)
      const randomSeq = Math.floor(1000 + Math.random() * 9000);
      const quoteCode = `RG-2026-${randomSeq}`;

      const newQuote: QuoteRequest = {
        id: quoteCode,
        service: formData.service,
        region: formData.region,
        province: formData.province || formData.region,
        district: formData.district || 'Distrito central',
        projectType: `${formData.projectType} / ${formData.sector}`,
        description: formData.description || 'Cotización solicitada mediante el portal interactivo.',
        fullName: formData.fullName,
        company: formData.company || 'Particular',
        position: formData.position || 'Representante',
        email: formData.email,
        phone: formData.phone,
        whatsapp: formData.whatsapp || formData.phone,
        createdAt: new Date().toISOString(),
        status: 'Recibido'
      };

      setGeneratedQuote(newQuote);

      // Save to localStorage for demo CMS
      try {
        const existing = JSON.parse(localStorage.getItem('rg_quotes') || '[]');
        localStorage.setItem('rg_quotes', JSON.stringify([newQuote, ...existing]));
      } catch (e) {
        console.error('Error saving quote', e);
      }

      if (onQuoteSubmitted) {
        onQuoteSubmitted(newQuote);
      }

      setCurrentStep(6);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleCopyCode = () => {
    if (generatedQuote) {
      navigator.clipboard.writeText(generatedQuote.id);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  const createWhatsAppLink = () => {
    if (!generatedQuote) return '#';
    const text = `Hola RG Consultoría Ambiental, he generado la solicitud de cotización *${generatedQuote.id}* para el servicio: *${generatedQuote.service}* en *${generatedQuote.region}*. Mi nombre es ${generatedQuote.fullName} de la empresa ${generatedQuote.company}.`;
    return `https://wa.me/51943055949?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`w-full ${isModalMode ? '' : 'py-12 sm:py-16 bg-slate-50'}`}>
      <div className={`${isModalMode ? 'max-w-3xl mx-auto' : 'max-w-4xl mx-auto px-4 sm:px-6'}`}>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-[#0F2942] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                <Calculator className="w-4 h-4" />
                <span>COTIZADOR INTELIGENTE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                Calcula y solicita la cotización de tu proyecto
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Proceso ágil en 5 pasos para estimar el alcance técnico y económico.
              </p>
            </div>

            {/* Step Counter Indicator */}
            {currentStep < 6 && (
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/20 text-xs font-bold text-cyan-300">
                <span>Paso {currentStep} de 5</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {currentStep < 6 && (
            <div className="w-full bg-slate-100 h-1.5">
              <div 
                className="bg-[#0284C7] h-1.5 transition-all duration-300 ease-out" 
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          )}

          {/* Step Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* PASO 1: ¿Qué servicio necesitas? */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Paso 1: ¿Qué servicio técnico necesitas?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Selecciona el instrumento ambiental, evaluación de riesgo o requerimiento profesional.
                  </p>
                </div>

                <div className="space-y-4">
                  {servicesList.map((categoryGroup, gIdx) => (
                    <div key={gIdx} className="space-y-2">
                      <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                        {categoryGroup.cat}
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {categoryGroup.items.map((srv) => {
                          const isSelected = formData.service === srv;
                          return (
                            <button
                              key={srv}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: srv })}
                              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all border ${
                                isSelected
                                  ? 'bg-sky-50 text-[#0284C7] border-[#0284C7] shadow-sm font-bold'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {srv}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 2: ¿Dónde se encuentra el proyecto? */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#0284C7]" />
                    <span>Paso 2: ¿Dónde se encuentra el proyecto?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Indica la región y provincia para considerar factores geográficos y de movilización.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Región / Departamento *
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    >
                      {PERU_REGIONS.map((reg) => (
                        <option key={reg} value={reg}>{reg}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Provincia
                    </label>
                    <input
                      type="text"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      placeholder="Ej. Lima, Huaraz, Huancayo, Piura"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Distrito
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="Ej. San Juan de Lurigancho, Chilca"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5">
                      Referencia o Coordenadas (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.locationDetail}
                      onChange={(e) => setFormData({ ...formData, locationDetail: e.target.value })}
                      placeholder="Ej. Km 42 Panamericana Sur / Coordenadas UTM"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* PASO 3: ¿Qué tipo de proyecto es? */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#0284C7]" />
                    <span>Paso 3: ¿Qué tipo de proyecto y sector es?</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Permite calibrar los requerimientos sectoriales específicos (SEIA o CENEPRED).
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Naturaleza de la inversión:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Privado', 'Público (Invierte.pe)', 'Asociación Público-Privada', 'Municipal / Comunal'].map((tp) => (
                      <button
                        key={tp}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: tp })}
                        className={`p-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                          formData.projectType === tp
                            ? 'bg-[#0284C7] text-white border-[#0284C7]'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {tp}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-2">
                    Sector Productivo:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {projectTypes.map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: sec })}
                        className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                          formData.sector === sec
                            ? 'bg-sky-100 text-[#0284C7] border-[#0284C7] font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PASO 4: Describe tu necesidad */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#0284C7]" />
                    <span>Paso 4: Describe tu necesidad o requerimiento</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Cuéntanos brevemente sobre el área, estado actual del trámite o plazos previstos.
                  </p>
                </div>

                <div>
                  <textarea
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Ejemplo: Necesitamos una Declaración de Impacto Ambiental para la construcción de una planta de almacenamiento de 5,000 m². El expediente de ingeniería está listo y requerimos la aprobación ambiental para iniciar obras en 3 meses..."
                    className="w-full p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284C7]"
                  />
                  <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Si ya cuentas con observaciones de la autoridad fiscalizadora, puedes mencionarlo aquí.</span>
                  </div>
                </div>
              </div>
            )}

            {/* PASO 5: Datos de contacto */}
            {currentStep === 5 && (
              <div className="space-y-5 animate-in fade-in duration-200">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold font-heading text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#0284C7]" />
                    <span>Paso 5: Datos de contacto para la propuesta</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Te enviaremos la propuesta técnica y económica formal a tu correo y te contactaremos por WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ing. Juan Pérez"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Empresa o Institución
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Constructora / Minera / Municipalidad"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Correo Electrónico Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jperez@empresa.pe"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value, whatsapp: e.target.value })}
                      placeholder="+51 999 888 777"
                      className="w-full p-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 pt-1">
                  Protección de datos conforme a la Ley N° 29733. No compartimos tu información con terceros.
                </p>
              </div>
            )}

            {/* PASO 6: Confirmación con Código Único (RG-2026-XXXX) */}
            {currentStep === 6 && generatedQuote && (
              <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Solicitud Registrada Exitosamente
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0F2942] pt-2">
                    ¡Gracias, {generatedQuote.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Hemos recibido los requerimientos de tu proyecto. Un consultor técnico especializado se pondrá en contacto contigo a la brevedad.
                  </p>
                </div>

                {/* Tracking Code Box (Exact mandate Section 18: RG-2026-0001 format) */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-sky-50/80 border border-sky-200 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-slate-500">
                      Código Único de Solicitud:
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:underline"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>

                  <div className="text-2xl sm:text-3xl font-black font-heading text-[#0F2942] tracking-wider">
                    {generatedQuote.id}
                  </div>

                  <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-sky-200/60">
                    <p><strong>Servicio:</strong> {generatedQuote.service}</p>
                    <p><strong>Ubicación:</strong> {generatedQuote.region}</p>
                    <p><strong>Empresa:</strong> {generatedQuote.company}</p>
                  </div>
                </div>

                {/* Direct Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir en WhatsApp con Código</span>
                  </a>

                  {onClose ? (
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-semibold text-xs uppercase tracking-wider rounded-xl"
                    >
                      Cerrar Ventana
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                        setGeneratedQuote(null);
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-semibold text-xs uppercase tracking-wider rounded-xl"
                    >
                      Nueva Cotización
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Stepper Footer Controls */}
            {currentStep < 6 && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-6 py-2.5 rounded-xl bg-[#0284C7] hover:bg-sky-600 active:bg-sky-700 text-white text-xs sm:text-sm font-heading font-bold flex items-center gap-2 shadow transition-all"
                >
                  <span>{currentStep === 5 ? 'ENVIAR SOLICITUD DE COTIZACIÓN' : 'Siguiente Paso'}</span>
                  {currentStep === 5 ? <Send className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
