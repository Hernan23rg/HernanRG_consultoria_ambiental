import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpecialtiesSlider } from './components/SpecialtiesSlider';
import { WhatDoYouNeed } from './components/WhatDoYouNeed';
import { EnvironmentalInstruments } from './components/EnvironmentalInstruments';
import { RiskEvaluationSection } from './components/RiskEvaluationSection';
import { RegulatoryComplianceSection } from './components/RegulatoryComplianceSection';
import { ProjectsAndCasesSection } from './components/ProjectsAndCasesSection';
import { FreeTechnicalResources } from './components/FreeTechnicalResources';
import { BlogAndKnowledgeSection } from './components/BlogAndKnowledgeSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SmartQuoteCalculator } from './components/SmartQuoteCalculator';
import { AiTechnicalAssistant } from './components/AiTechnicalAssistant';
import { AdminLeadDashboard } from './components/AdminLeadDashboard';
import { NavigationPage } from './types';
import { Phone, X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>('inicio');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string>('');
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuotePreselectedService('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-sky-100 selection:text-sky-900">
      {/* Global Header with Mega Menu */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenAdminModal={() => setAdminModalOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <>
            {/* Hero Banner with field photo & CTAs */}
            <Hero
              onNavigate={setCurrentPage}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            {/* Quiénes Somos / Nosotros (posterior presentación a inicio) */}
            <div id="nosotros">
              <AboutUsSection
                onNavigate={setCurrentPage}
                onOpenQuoteModal={() => handleOpenQuoteModal()}
              />
            </div>

            {/* Specialties Carousel Cards (matching screen.png) */}
            <div id="especialidades">
              <SpecialtiesSlider onNavigate={setCurrentPage} />
            </div>

            {/* Interactive Need Selector (matching screen.png) */}
            <WhatDoYouNeed
              onNavigate={setCurrentPage}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* RAMA 01: Instrumentos de Gestión Ambiental (EVAP, DIA, ITS, PAMA, FITSA) */}
            <div id="instrumentos-ambientales">
              <EnvironmentalInstruments onOpenQuoteModal={handleOpenQuoteModal} />
            </div>

            {/* RAMA 02: Evaluación de Riesgos (Sismos, Huaycos, Inundaciones + 6-Etapas) */}
            <div id="evaluacion-riesgos">
              <RiskEvaluationSection onOpenQuoteModal={handleOpenQuoteModal} />
            </div>

            {/* Cotizador Inteligente en 5 pasos */}
            <div id="cotizador" className="border-t border-slate-200">
              <SmartQuoteCalculator onQuoteSubmitted={() => {}} />
            </div>

            {/* Cumplimiento Normativo y Autoridades (SENACE, OEFA, CENEPRED) */}
            <RegulatoryComplianceSection />

            {/* Casos de Aplicación y Experiencia Técnica */}
            <div id="proyectos">
              <ProjectsAndCasesSection onOpenQuoteModal={handleOpenQuoteModal} />
            </div>

            {/* Recursos Técnicos Descargables */}
            <div id="recursos">
              <FreeTechnicalResources />
            </div>

            {/* Centro de Conocimiento & Blog Técnico */}
            <div id="blog">
              <BlogAndKnowledgeSection />
            </div>

            {/* Canales de Contacto Directo */}
            <div id="contacto">
              <ContactSection />
            </div>
          </>
        )}

        {currentPage === 'nosotros' && (
          <AboutUsSection
            onNavigate={setCurrentPage}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'servicios' && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                LÍNEAS DE ACCIÓN TÉCNICA
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Nuestros Servicios Especializados
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Instrumentos de gestión ambiental (SEIA) y evaluación del riesgo ante fenómenos naturales (CENEPRED).
              </p>
            </div>
            <SpecialtiesSlider onNavigate={setCurrentPage} />
            <EnvironmentalInstruments onOpenQuoteModal={handleOpenQuoteModal} />
            <RiskEvaluationSection onOpenQuoteModal={handleOpenQuoteModal} />
            <ContactSection />
          </div>
        )}

        {currentPage === 'instrumentos-ambientales' && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                RAMA 01 · GESTIÓN AMBIENTAL
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Instrumentos de Gestión Ambiental
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Elaboración y tramitación de EVAP, DIA, ITS, PAMA y FITSA conforme a la Ley del SEIA.
              </p>
            </div>
            <EnvironmentalInstruments onOpenQuoteModal={handleOpenQuoteModal} />
            <FreeTechnicalResources />
            <ContactSection />
          </div>
        )}

        {currentPage === 'evaluacion-riesgos' && (
          <div>
            <div className="bg-slate-900 text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800">
                RAMA 02 · GESTIÓN DEL RIESGO
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Evaluación de Riesgos por Fenómenos Naturales
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Geodinámica interna, externa y peligros hidrometeorológicos con metodología oficial CENEPRED.
              </p>
            </div>
            <RiskEvaluationSection onOpenQuoteModal={handleOpenQuoteModal} />
            <ContactSection />
          </div>
        )}

        {(currentPage === 'proyectos' || currentPage === 'casos-exito') && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                TRAYECTORIA & EXPERIENCIA
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Proyectos y Casos de Éxito
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Casos de estudio representativos por tipología de proyecto en el Perú.
              </p>
            </div>
            <ProjectsAndCasesSection onOpenQuoteModal={handleOpenQuoteModal} />
            <ContactSection />
          </div>
        )}

        {currentPage === 'blog' && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                RG CONOCIMIENTO
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Blog Técnico y Normativo
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Artículos prácticos sobre el SEIA, CENEPRED, modelamiento y gestión ambiental.
              </p>
            </div>
            <BlogAndKnowledgeSection />
            <FreeTechnicalResources />
          </div>
        )}

        {currentPage === 'recursos' && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                HERRAMIENTAS GRATUITAS
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Recursos Técnicos Descargables
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Checklists, guías metodológicas y matrices de decisión preparadas por nuestros consultores.
              </p>
            </div>
            <FreeTechnicalResources />
            <ContactSection />
          </div>
        )}

        {currentPage === 'contacto' && (
          <div>
            <div className="bg-[#0F2942] text-white py-14 text-center px-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-800">
                CANALES DIRECTOS
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
                Contacto y Atención Técnica
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2">
                Atención a proyectos en costa, sierra y selva del Perú.
              </p>
            </div>
            <ContactSection />
          </div>
        )}

        {currentPage === 'cotizacion' && (
          <div className="py-12 bg-slate-50">
            <SmartQuoteCalculator
              initialService={quotePreselectedService}
              onQuoteSubmitted={() => {}}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/51943055949?text=Hola,%20quisiera%20hablar%20con%20un%20especialista%20de%20RG%20Consultor%C3%ADa%20Ambiental"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 p-3.5 sm:p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group border-2 border-white/40"
        aria-label="Hablar con un especialista vía WhatsApp"
        title="Hablar con un especialista vía WhatsApp"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-heading pl-0 group-hover:pl-2">
          Hablar con un especialista
        </span>
      </a>

      {/* Floating AI Technical Guide Assistant */}
      <AiTechnicalAssistant
        isFloating={true}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Modal: Smart Quote Calculator */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={handleCloseQuoteModal}
              className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full backdrop-blur-sm"
              aria-label="Cerrar cotizador"
            >
              <X className="w-5 h-5" />
            </button>
            <SmartQuoteCalculator
              isModalMode={true}
              initialService={quotePreselectedService}
              onClose={handleCloseQuoteModal}
              onQuoteSubmitted={() => {}}
            />
          </div>
        </div>
      )}

      {/* Modal: Admin Lead Dashboard */}
      {adminModalOpen && (
        <AdminLeadDashboard onClose={() => setAdminModalOpen(false)} />
      )}
    </div>
  );
}
