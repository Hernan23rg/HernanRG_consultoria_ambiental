import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldAlert, 
  Phone, 
  X,
  RefreshCw
} from 'lucide-react';
import { AI_FAQ_SUGGESTIONS } from '../data/mockData';

interface AiAssistantProps {
  onOpenQuoteModal: (service?: string) => void;
  isFloating?: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  recommendedService?: string;
  timestamp: string;
}

export const AiTechnicalAssistant: React.FC<AiAssistantProps> = ({ 
  onOpenQuoteModal,
  isFloating = false 
}) => {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: '¡Hola! Soy el Orientador Técnico de RG Consultoría Ambiental. Puedo ayudarte a identificar el Instrumento de Gestión Ambiental (EVAP, DIA, ITS, PAMA) o el estudio de riesgo (CENEPRED, inundación, deslizamiento) adecuado para tu proyecto. ¿En qué te puedo asesorar hoy?',
      timestamp: 'Ahora'
    }
  ]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Ahora'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Context-driven rule engine mimicking an environmental consultant
    setTimeout(() => {
      let reply = '';
      let recommendedService: string | undefined;

      const lower = query.toLowerCase();

      if (lower.includes('quebrada') || lower.includes('huayco') || lower.includes('deslizamiento') || lower.includes('ladera')) {
        reply = 'Si tu terreno o infraestructura está próximo a una quebrada o ladera con pendiente, el peligro primordial son los movimientos en masa (flujo de detritos o huaycos) e inundación repentina. Se requiere una Evaluación de Riesgos (EVAR) de Geodinámica Externa y Fenómenos Hidrometeorológicos acreditada por evaluadores CENEPRED, determinando fajas marginales y medidas de mitigación.';
        recommendedService = 'Evaluación de flujo de detritos / CENEPRED';
      } else if (lower.includes('diferencia') || (lower.includes('evap') && lower.includes('dia'))) {
        reply = 'La EVAP (Evaluación Preliminar) es el documento técnico inicial que se presenta ante la autoridad para que clasifique la categoría de tu proyecto. En cambio, la DIA (Declaración de Impacto Ambiental) corresponde específicamente a proyectos categorizados como Categoría I (impactos leves). En muchos sectores, la EVAP sirve como DIA si la autoridad aprueba la propuesta.';
        recommendedService = 'EVAP / DIA';
      } else if (lower.includes('sismo') || lower.includes('cenepred') || lower.includes('terremoto') || lower.includes('tsunami')) {
        reply = 'El CENEPRED norma la metodología oficial para evaluar la susceptibilidad del territorio ante la aceleración sísmica, licuación de suelos y tsunami en el litoral. Nuestro equipo cuenta con evaluadores acreditados para emitir informes oficiales EVAR con modelamiento geológico.';
        recommendedService = 'Evaluación de sismos y licuación';
      } else if (lower.includes('planta') || lower.includes('tratamiento') || lower.includes('agua') || lower.includes('ptar')) {
        reply = 'Para una Planta de Tratamiento (PTAR o PTAP), según el sector (Vivienda/Saneamiento), habitualmente se requiere una DIA (Categoría I) o un EIA-sd si es de gran escala, además de autorizaciones de vertimiento o reúso ante la Autoridad Nacional del Agua (ANA).';
        recommendedService = 'DIA - Sector Saneamiento';
      } else if (lower.includes('requisito') || lower.includes('informacion') || lower.includes('tener lista')) {
        reply = 'Para iniciar formalmente tu expediente recomendamos contar con: 1) Polígono o coordenadas UTM del predio (en WGS84), 2) Memoria descriptiva o plano de distribución del proyecto, y 3) Factibilidad de servicios o titularidad del terreno.';
        recommendedService = 'Diagnóstico Técnico Preliminar';
      } else {
        reply = 'Comprendo tu consulta. La legislación ambiental y de gestión del riesgo en el Perú exige evaluar sector por sector. Te sugiero que un consultor senior de RG revise los detalles de tu expediente sin compromiso.';
        recommendedService = 'Asesoría Personalizada';
      }

      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        recommendedService,
        timestamp: 'Ahora'
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  if (isFloating && !isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#0284C7] hover:bg-sky-600 text-white rounded-full shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105"
        aria-label="Abrir Orientador Ambiental AI"
      >
        <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
        <span className="font-heading font-bold text-xs uppercase pr-1 hidden sm:inline">¿Dudas Técnicas? Pregúntale a la IA</span>
      </button>
    );
  }

  return (
    <div className={`w-full ${isFloating ? 'fixed bottom-6 right-6 z-50 max-w-md w-full' : 'py-12 sm:py-16 bg-white'}`}>
      <div className={`${isFloating ? '' : 'max-w-4xl mx-auto px-4 sm:px-6'}`}>
        <div className="bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[560px]">
          {/* Top Bar */}
          <div className="p-4 sm:p-5 bg-[#0F2942] border-b border-slate-800 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/30">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm text-white">
                    Orientador Técnico RG (AI Guide)
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[11px] text-slate-400">
                  SEIA · CENEPRED · Normativa Ambiental Peruana
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMessages([
                    {
                      id: 'msg-welcome-reset',
                      sender: 'assistant',
                      text: 'Historial reiniciado. ¿En qué otro tema ambiental o de riesgos puedo orientarte?',
                      timestamp: 'Ahora'
                    }
                  ]);
                }}
                className="text-slate-400 hover:text-white p-1"
                title="Reiniciar chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              {isFloating && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Minimizar"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    RG
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0284C7] text-white rounded-tr-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-tl-none space-y-2.5'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.recommendedService && (
                    <div className="pt-2 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-[11px] text-cyan-300 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Sugerencia: {msg.recommendedService}
                      </span>
                      <button
                        onClick={() => onOpenQuoteModal(msg.recommendedService)}
                        className="px-2.5 py-1 bg-cyan-600 hover:bg-cyan-500 text-white text-[11px] font-bold rounded-lg self-start sm:self-auto"
                      >
                        Cotizar esto
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800/60 w-max px-3 py-2 rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce delay-200" />
                <span>Analizando normativa peruana...</span>
              </div>
            )}
          </div>

          {/* Quick FAQ Suggestion Chips */}
          <div className="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[11px]">
            <span className="text-slate-500 font-bold uppercase shrink-0 px-1">Consultas Rápidas:</span>
            {AI_FAQ_SUGGESTIONS.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(faq)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 whitespace-nowrap border border-slate-700/60 transition-colors shrink-0"
              >
                {faq}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#0F2942] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu consulta (ej. PTAR, quebrada, EVAP o DIA)..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2 bg-[#0284C7] hover:bg-sky-500 disabled:opacity-40 text-white rounded-xl transition-all"
              aria-label="Enviar pregunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
