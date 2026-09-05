import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Search, Tag, X } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/mockData';
import { BlogArticle } from '../types';

export const BlogAndKnowledgeSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [readingArticle, setReadingArticle] = useState<BlogArticle | null>(null);

  const tags = ['all', 'Normativa', 'Riesgos', 'Instrumentos', 'Modelamiento', 'SIG', 'Gestión'];

  const filteredArticles = BLOG_ARTICLES.filter(art => {
    const matchesTag = selectedTag === 'all' || art.tags.includes(selectedTag);
    const matchesSearch = 
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-100/70 px-3.5 py-1 rounded-full mb-3">
            <BookOpen className="w-4 h-4" />
            <span>RG CONOCIMIENTO · CENTRO TÉCNICO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2942] tracking-tight">
            Artículos Técnicos y Guías Especializadas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Publicaciones técnicas con enfoque práctico, actualizadas conforme a las normativas ambientales y de gestión del riesgo de desastres en el Perú.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Tags */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider mr-1">Temas:</span>
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTag(t)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedTag === t
                    ? 'bg-[#0F2942] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t === 'all' ? 'Todos' : t}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar artículo..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0284C7]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-1">
                    {article.tags.slice(0, 2).map((tg, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[11px] font-bold bg-white/95 text-slate-800 shadow-sm">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Por: <strong className="text-slate-700">{article.author}</strong>
                </span>
                <button
                  onClick={() => setReadingArticle(article)}
                  className="font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                >
                  <span>Leer Artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal: Lectura de Artículo Completo */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Cerrar artículo"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-sky-50 text-[#0284C7]">
                  {readingArticle.tags.join(' · ')}
                </span>
                <span className="text-xs text-slate-400">Lectura de {readingArticle.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 mb-2">
                {readingArticle.title}
              </h2>

              <div className="text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100 flex items-center gap-4">
                <span>Autor: <strong>{readingArticle.author}</strong></span>
                <span>Publicado: {readingArticle.date}</span>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="font-medium text-slate-800 text-base leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {readingArticle.excerpt}
                </p>

                <p>
                  En el contexto del marco regulatorio peruano, el desarrollo ordenado de proyectos de inversión demanda una rigurosa concordancia entre los objetivos productivos y la preservación ambiental. Las entidades fiscalizadoras como el OEFA y el SENACE han fortalecido sus criterios de revisión técnico-documental, haciendo indispensable que los titulares de proyectos sustenten de forma auditable cada variable.
                </p>

                <h3 className="font-heading font-bold text-base text-slate-900 pt-2">
                  Criterios Técnicos y Buenas Prácticas Recomendadas
                </h3>

                <p>
                  1. <strong>Identificación temprana del sector competente:</strong> Antes de formular términos de referencia, se debe confirmar si la competencia rectora recae en Ministerios sectoriales (MINEM, PRODUCE, MTC, MIDAGRI) o en Gobiernos Regionales según las facultades transferidas.
                </p>

                <p>
                  2. <strong>Levantamiento de campo con rigor metodológico:</strong> Las estaciones de monitoreo, toma de muestras de suelo o modelamientos de caudal deben cumplir con protocolos oficiales y laboratorios acreditados por INACAL.
                </p>

                <p>
                  3. <strong>Integración de la gestión del riesgo:</strong> Ningún estudio ambiental está completo sin dimensionar la resiliencia de la infraestructura ante sismos, huaycos o precipitaciones extremas conforme al SINAGERD.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">¿Requieres asistencia técnica en este tema?</span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-5 py-2.5 bg-[#0F2942] text-white text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
