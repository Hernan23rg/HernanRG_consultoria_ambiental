import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen,
  FileSpreadsheet
} from 'lucide-react';
import { PERU_REGIONS } from '../data/mockData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [complaintsModal, setComplaintsModal] = useState(false);
  const [complaintSubmitted, setComplaintSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    region: 'Lima Metropolitana',
    projectType: 'Privado',
    subject: 'Consulta Técnica General',
    message: ''
  });

  const [complaintForm, setComplaintForm] = useState({
    claimantName: '',
    dniRuc: '',
    email: '',
    phone: '',
    claimType: 'Queja' as 'Queja' | 'Reclamo',
    details: ''
  });

  const [lastSubmittedText, setLastSubmittedText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Save to local storage mock leads
    try {
      const existing = JSON.parse(localStorage.getItem('rg_contacts') || '[]');
      localStorage.setItem('rg_contacts', JSON.stringify([
        { id: `MSG-${Date.now()}`, ...formData, date: new Date().toISOString() },
        ...existing
      ]));
    } catch (err) {
      console.error(err);
    }

    // Direccionar en forma automática al número 943055949 por WhatsApp
    const messageParts = [
      `*Consulta enviada a RG Consultoría Ambiental:*`,
      `• *Nombre:* ${formData.fullName}`,
      `• *Correo:* ${formData.email}`,
      `• *Teléfono:* ${formData.phone}`,
      `• *Ubicación:* ${formData.region}`,
      formData.subject ? `• *Asunto:* ${formData.subject}` : '',
      `• *Mensaje:* ${formData.message}`
    ].filter(Boolean).join('\n');

    setLastSubmittedText(messageParts);
    const whatsappUrl = `https://wa.me/51943055949?text=${encodeURIComponent(messageParts)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComplaintSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100/80 px-3.5 py-1 rounded-full mb-3">
            <Mail className="w-4 h-4" />
            <span>CANALES DE ATENCIÓN DIRECTA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Conversemos sobre los requerimientos de tu proyecto
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Nuestros consultores y evaluadores están listos para revisar las características de tu expediente o terreno y brindarte una respuesta técnica oportuna.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold font-heading text-[#0F2942] flex items-center justify-between">
                <span>Asistencia Técnica y Contacto</span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Respuesta inmediata
                </span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Ámbito de Atención:</strong>
                    <span>Atención técnica a proyectos a nivel nacional en Perú (Costa, Sierra y Selva).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Asistencia Técnica WhatsApp:</strong>
                    <a href="https://wa.me/51943055949?text=Hola,%20solicito%20asistencia%20t%C3%A9cnica%20con%20RG%20Consultor%C3%ADa%20Ambiental" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline font-bold text-base">
                      943055949
                    </a>
                    <span className="block text-[11px] text-slate-500">Coordinación directa por WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Correo Electrónico Oficial:</strong>
                    <a href="mailto:hernan23rg@gmail.com" className="text-[#0284C7] hover:underline font-bold text-sm sm:text-base">
                      hernan23rg@gmail.com
                    </a>
                    <span className="block text-[11px] text-slate-500">Recepción de expedientes y consultas técnicas</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-heading">Horario de Coordinación:</strong>
                    <span>Lunes a Viernes: 8:30 am – 6:30 pm<br />Sábados: 9:00 am – 1:00 pm</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/51943055949?text=Hola,%20solicito%20asistencia%20t%C3%A9cnica%20con%20RG%20Consultor%C3%ADa%20Ambiental"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wide rounded-xl shadow flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chatear al WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Libro de Reclamaciones Link Box (Section 31 Mandate) */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-amber-600" />
                <div>
                  <h4 className="font-heading font-bold text-xs text-slate-800">
                    Libro de Reclamaciones Virtual
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Conforme al Código de Protección al Consumidor (Ley N° 29571).
                  </p>
                </div>
              </div>
              <button
                onClick={() => setComplaintsModal(true)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Abrir
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-[#0F2942] mb-4">
                  Envíanos un mensaje o consulta
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ing. María Salazar"
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="msalazar@empresa.com"
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej: 943055949"
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Ubicación del Proyecto
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                    >
                      {PERU_REGIONS.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Tipo de Proyecto o Asunto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ej. Evaluación de inundación para habilitación urbana"
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Detalle o consulta técnica *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe las características generales del proyecto, requerimiento normativo o consultas puntuales..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#0284C7]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0F2942] hover:bg-[#0284C7] text-white font-heading font-bold text-xs uppercase tracking-wide rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR MENSAJE A NUESTRO EQUIPO</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Gracias por comunicarte con RG Consultoría Ambiental. Se ha iniciado la redirección automática a WhatsApp para continuar la atención de tu mensaje.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/51943055949?text=${encodeURIComponent(lastSubmittedText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow flex items-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir chat de WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        region: 'Lima Metropolitana',
                        projectType: 'Privado',
                        subject: 'Consulta Técnica General',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal: Libro de Reclamaciones */}
        {complaintsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => { setComplaintsModal(false); setComplaintSubmitted(false); }}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 font-bold p-1"
              >
                ✕
              </button>

              <div className="flex items-center gap-2.5 mb-4">
                <BookOpen className="w-6 h-6 text-[#0284C7]" />
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    Libro de Reclamaciones
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    RG Consultoría Ambiental · RUC: [DATO POR COMPLETAR]
                  </span>
                </div>
              </div>

              {!complaintSubmitted ? (
                <form onSubmit={handleComplaintSubmit} className="space-y-3.5 text-xs text-slate-700">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Nombre o Razón Social *</label>
                    <input
                      type="text"
                      required
                      value={complaintForm.claimantName}
                      onChange={(e) => setComplaintForm({ ...complaintForm, claimantName: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">DNI o RUC *</label>
                      <input
                        type="text"
                        required
                        value={complaintForm.dniRuc}
                        onChange={(e) => setComplaintForm({ ...complaintForm, dniRuc: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Teléfono *</label>
                      <input
                        type="tel"
                        required
                        value={complaintForm.phone}
                        onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      value={complaintForm.email}
                      onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Tipo de Registro:</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="claimType"
                          value="Queja"
                          checked={complaintForm.claimType === 'Queja'}
                          onChange={() => setComplaintForm({ ...complaintForm, claimType: 'Queja' })}
                        />
                        <span>Queja (Disconformidad con la atención)</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="claimType"
                          value="Reclamo"
                          checked={complaintForm.claimType === 'Reclamo'}
                          onChange={() => setComplaintForm({ ...complaintForm, claimType: 'Reclamo' })}
                        />
                        <span>Reclamo (Disconformidad con el servicio)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Detalle de los Hechos *</label>
                    <textarea
                      rows={4}
                      required
                      value={complaintForm.details}
                      onChange={(e) => setComplaintForm({ ...complaintForm, details: e.target.value })}
                      placeholder="Explica detalladamente la situación acontecida..."
                      className="w-full p-2.5 rounded-xl border border-slate-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0F2942] hover:bg-[#0284C7] text-white font-bold rounded-xl uppercase tracking-wider"
                  >
                    REGISTRAR EN LIBRO DE RECLAMACIONES
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-slate-900">Hoja de Reclamación Registrada</h4>
                  <p className="text-xs text-slate-600">
                    Se ha generado tu registro conforme a ley. Recibirás una copia y respuesta formal en un plazo no mayor a 15 días hábiles.
                  </p>
                  <button
                    onClick={() => { setComplaintsModal(false); setComplaintSubmitted(false); }}
                    className="px-5 py-2 bg-slate-100 text-xs font-bold rounded-xl"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
