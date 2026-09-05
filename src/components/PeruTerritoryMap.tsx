import React, { useState } from 'react';
import { MapPin, Layers, Info, Filter, ArrowRight, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface TerritoryPoint {
  id: string;
  name: string;
  department: string;
  type: 'peligro' | 'proyecto' | 'profesional';
  coordinates: { x: number; y: number }; // Percentage for SVG positioning
  title: string;
  detail: string;
  hazardOrInstrument: string;
}

const TERRITORY_POINTS: TerritoryPoint[] = [
  {
    id: 'pt-piura',
    name: 'Bajo Piura - Chulucanas',
    department: 'Piura',
    type: 'peligro',
    coordinates: { x: 26, y: 18 },
    title: 'Modelación Hidráulica 2D de Inundación',
    detail: 'Evaluación de caudal pico extraordinario y fajas marginales por activación de quebradas durante el FEN.',
    hazardOrInstrument: 'Inundación Fluvial / HEC-RAS 2D'
  },
  {
    id: 'pt-ancash',
    name: 'Callejón de Huaylas',
    department: 'Áncash',
    type: 'peligro',
    coordinates: { x: 38, y: 44 },
    title: 'Estudio de Geodinámica Externa y Aluviones',
    detail: 'Monitoreo de lagunas glaciares y susceptibilidad a movimientos en masa en cuencas de alta pendiente.',
    hazardOrInstrument: 'Flujo de Detritos / Deslizamientos'
  },
  {
    id: 'pt-lima',
    name: 'Lima Metropolitana y Cuenca del Rímac',
    department: 'Lima',
    type: 'proyecto',
    coordinates: { x: 44, y: 58 },
    title: 'DIA & EVAR para Habilitación Industrial',
    detail: 'Expediente ambiental integral y evaluación de peligro sísmico y licuación de suelos.',
    hazardOrInstrument: 'DIA (SEIA) + EVAR CENEPRED'
  },
  {
    id: 'pt-ica',
    name: 'Valle de Ica y Pisco',
    department: 'Ica',
    type: 'proyecto',
    coordinates: { x: 50, y: 68 },
    title: 'ITS para Ampliación de Planta Agroindustrial',
    detail: 'Modificación de componentes auxiliares y actualización de compromisos de reúso de efluentes tratados.',
    hazardOrInstrument: 'ITS Sectorial / ANA'
  },
  {
    id: 'pt-cusco',
    name: 'Espinar y Corredor Sur',
    department: 'Cusco',
    type: 'profesional',
    coordinates: { x: 74, y: 72 },
    title: 'Supervisión Geológica de Taludes Viales',
    detail: 'Ingeniero Geólogo y evaluador de riesgo in situ para estabilización de laderas en época de lluvias.',
    hazardOrInstrument: 'Ing. Geológica / CENEPRED'
  },
  {
    id: 'pt-arequipa',
    name: 'Zona Costera e Islas de Chala',
    department: 'Arequipa',
    type: 'peligro',
    coordinates: { x: 62, y: 82 },
    title: 'Evaluación de Peligro Sísmico y Tsunami',
    detail: 'Delimitación de áreas de inundación marina conforme a las cartas oficiales de la Dirección de Hidrografía y Navegación (DHN).',
    hazardOrInstrument: 'Tsunami y Sismo'
  },
  {
    id: 'pt-junin',
    name: 'Valle del Mantaro',
    department: 'Junín',
    type: 'profesional',
    coordinates: { x: 53, y: 53 },
    title: 'Línea Base Ambiental y Monitoreo Biológico',
    detail: 'Ingeniero Forestal y Biólogos evaluando cobertura vegetal y planes de reforestación para infraestructura eléctrica.',
    hazardOrInstrument: 'Línea Base SEIA'
  }
];

export const PeruTerritoryMap: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'peligro' | 'proyecto' | 'profesional'>('all');
  const [activePoint, setActivePoint] = useState<TerritoryPoint>(TERRITORY_POINTS[2]);

  const filteredPoints = filterType === 'all' 
    ? TERRITORY_POINTS 
    : TERRITORY_POINTS.filter(p => p.type === filterType);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100/70 px-3 py-1 rounded-full mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>VISIÓN ESPACIAL & SIG/GIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Evaluamos el territorio peruano
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Comprendemos la geografía, hidrología y particularidades tectónicas del territorio peruano para formular soluciones viables y seguras.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold uppercase text-slate-500">Capas del Territorio:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'all'
                  ? 'bg-[#0F2942] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todas las intervenciones ({TERRITORY_POINTS.length})
            </button>
            <button
              onClick={() => setFilterType('peligro')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'peligro'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              }`}
            >
              Peligros y Riesgos Naturales
            </button>
            <button
              onClick={() => setFilterType('proyecto')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'proyecto'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-sky-50 text-sky-700 hover:bg-sky-100'
              }`}
            >
              Gestión Ambiental (SEIA)
            </button>
            <button
              onClick={() => setFilterType('profesional')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'profesional'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Profesionales en Campo
            </button>
          </div>
        </div>

        {/* Interactive Map and Detail Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Map Display (Left Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200 shadow-md relative overflow-hidden flex items-center justify-center min-h-[440px]">
            {/* Background Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(#0284C7 1px, transparent 1px), linear-gradient(to right, #0284C7 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />

            {/* Peru Map Graphic Silhouette with Elevation and Regions representation */}
            <div className="relative w-full max-w-[460px] aspect-[4/5]">
              <svg 
                viewBox="0 0 400 500" 
                className="w-full h-full filter drop-shadow"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pacific Ocean background tint */}
                <path d="M 0 0 L 150 0 L 110 500 L 0 500 Z" fill="#F0F9FF" opacity="0.6" />

                {/* Simplified Realistic Peru Map Polygon */}
                <path
                  d="M 95 65 
                     C 120 50, 160 40, 205 50 
                     C 240 60, 275 80, 290 120 
                     C 305 160, 310 200, 280 235 
                     C 260 260, 270 290, 285 320 
                     C 300 350, 295 380, 275 410 
                     C 255 440, 240 450, 220 460 
                     C 200 470, 180 450, 165 425 
                     C 150 400, 135 370, 120 340 
                     C 105 310, 95 280, 85 240 
                     C 75 200, 60 160, 65 125 
                     C 70 95, 80 80, 95 65 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />

                {/* Andes Mountain Cordillera Ridge Silhouette (Internal Elevation) */}
                <path
                  d="M 125 105 
                     C 145 150, 155 220, 175 290 
                     C 195 360, 230 420, 245 445"
                  stroke="#CBD5E1"
                  strokeWidth="8"
                  strokeDasharray="4 6"
                  fill="none"
                />

                {/* River Basin System (Amazon/Marañón/Ucayali hints) */}
                <path
                  d="M 180 80 Q 220 110 270 140"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 210 130 Q 235 200 260 260"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />

                {/* Regional Labels inside Map */}
                <text x="60" y="300" fill="#94A3B8" fontSize="10" fontWeight="bold" letterSpacing="1">COSTA</text>
                <text x="145" y="240" fill="#64748B" fontSize="10" fontWeight="bold" letterSpacing="1">SIERRA</text>
                <text x="225" y="160" fill="#94A3B8" fontSize="10" fontWeight="bold" letterSpacing="1">SELVA</text>
              </svg>

              {/* Interactive Point Markers */}
              {filteredPoints.map((pt) => {
                const isSelected = activePoint.id === pt.id;
                const markerBg = 
                  pt.type === 'peligro' ? 'bg-amber-500 ring-amber-300' :
                  pt.type === 'proyecto' ? 'bg-[#0284C7] ring-sky-300' :
                  'bg-emerald-500 ring-emerald-300';

                return (
                  <button
                    key={pt.id}
                    onClick={() => setActivePoint(pt)}
                    style={{
                      left: `${pt.coordinates.x}%`,
                      top: `${pt.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    className={`absolute z-10 transition-transform ${isSelected ? 'scale-125' : 'hover:scale-110'}`}
                    aria-label={`Ver ${pt.name}`}
                  >
                    <div className="relative group">
                      <span className={`flex h-4 w-4 rounded-full ring-4 shadow-md ${markerBg} ${isSelected ? 'animate-bounce' : ''}`} />
                      
                      {/* Tooltip on Hover */}
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-slate-900 text-white text-[10px] font-semibold py-1 px-2 rounded whitespace-nowrap z-20 shadow-lg pointer-events-none">
                        {pt.name} ({pt.department})
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Note at bottom of map */}
            <div className="absolute bottom-3 left-4 right-4 text-center">
              <span className="text-[11px] text-slate-400">
                Coordinación y movilización técnica según la ubicación geográfica de tu inversión.
              </span>
            </div>
          </div>

          {/* Right Detail Card (Col 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md space-y-5">
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                activePoint.type === 'peligro' ? 'bg-amber-100 text-amber-800' :
                activePoint.type === 'proyecto' ? 'bg-sky-100 text-sky-800' :
                'bg-emerald-100 text-emerald-800'
              }`}>
                {activePoint.type === 'peligro' ? 'Peligro Natural' :
                 activePoint.type === 'proyecto' ? 'Gestión Ambiental' : 'Especialista en Campo'}
              </span>

              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-semibold">{activePoint.department}</span>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0F2942]">
                {activePoint.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-1">
                Zona de intervención: {activePoint.name}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                Instrumento / Metodología:
              </div>
              <p className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{activePoint.hazardOrInstrument}</span>
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {activePoint.detail}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Acreditación: CENEPRED / SENACE</span>
              <span className="text-emerald-600 font-bold">Expediente Validado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
