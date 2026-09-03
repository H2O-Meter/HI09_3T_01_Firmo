import React, { useState } from 'react';
import { ChapterData } from '../types';
import { BookOpen, Calendar, CheckCircle2, ChevronDown, ChevronUp, Sparkles, AlertCircle, Quote } from 'lucide-react';

interface ChapterDetailViewProps {
  chapter: ChapterData;
}

export const ChapterDetailView: React.FC<ChapterDetailViewProps> = ({ chapter }) => {
  const [openTopicId, setOpenTopicId] = useState<string | null>(chapter.topics[0]?.id || null);

  const toggleTopic = (id: string) => {
    setOpenTopicId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="chapter-detail-view" className="py-12 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Presentation Banner */}
        <div className="bg-gradient-to-r from-[#016E01] to-[#014D01] text-white rounded-3xl p-8 mb-8 shadow-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FD7600] text-white font-mono font-black text-xs px-2.5 py-1 rounded-md">
                MÓDULO {chapter.code}
              </span>
              <span className="text-white/80 text-xs font-semibold">
                {chapter.period}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
              {chapter.title}
            </h2>

            <p className="text-[#C9A84C] font-semibold text-sm sm:text-base mb-4">
              {chapter.theme}
            </p>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {chapter.overview}
            </p>
          </div>

          {/* Chapter Pedagogical Analogy Card */}
          <div className="mt-6 pt-6 border-t border-white/20 bg-white/10 backdrop-blur-xs rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#C9A84C] shrink-0 mt-1" />
              <div>
                <div className="text-xs uppercase tracking-wider font-extrabold text-[#C9A84C] mb-0.5">
                  Analogia Pedagógica Obrigatória: {chapter.analogy.title}
                </div>
                <p className="text-white font-medium text-xs sm:text-sm italic mb-1">
                  "{chapter.analogy.quote}"
                </p>
                <p className="text-white/80 text-xs leading-relaxed">
                  <strong>Por que essa comparação funciona:</strong> {chapter.analogy.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtopics Listing (Strictly in the Order of the Annex!) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#016E01]" />
              Subtópicos Oficiais do Capítulo ({chapter.topics.length} temas)
            </h3>
            <span className="text-xs text-gray-500">
              Ordem estrita da ementa escolar
            </span>
          </div>

          <div className="space-y-4">
            {chapter.topics.map((topic, index) => {
              const isOpen = openTopicId === topic.id;
              return (
                <div
                  key={topic.id}
                  id={`topic-card-${topic.id}`}
                  className={`bg-white rounded-2xl border transition-all shadow-xs ${
                    isOpen
                      ? 'border-[#016E01] ring-1 ring-[#016E01]/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#016E01]/10 text-[#016E01] font-black text-xs flex items-center justify-center shrink-0">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-extrabold text-base text-gray-900 group-hover:text-[#016E01]">
                          {topic.title}
                        </h4>
                        <span className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          {topic.period}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-400 hidden sm:inline">
                        {isOpen ? 'Recolher' : 'Ver Detalhes'}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#016E01]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 border-t border-gray-100 text-sm">
                      {/* Summary */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {topic.summary}
                      </p>

                      {/* Key Events Checklist */}
                      <div className="bg-gray-50 rounded-xl p-4 mb-4">
                        <span className="text-xs font-black uppercase tracking-wider text-gray-600 block mb-2">
                          Fatos Históricos Determinantes:
                        </span>
                        <ul className="space-y-2">
                          {topic.keyEvents.map((evt, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800">
                              <CheckCircle2 className="w-4 h-4 text-[#016E01] shrink-0 mt-0.5" />
                              <span>{evt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Historical Significance & Exam Bizu */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5 text-xs text-blue-950">
                          <strong className="block font-black text-blue-900 uppercase tracking-wider mb-1">
                            🏛️ Significado Histórico:
                          </strong>
                          {topic.historicalSignificance}
                        </div>

                        <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-3.5 text-xs text-amber-950">
                          <strong className="block font-black text-amber-900 uppercase tracking-wider mb-1">
                            📌 BIZU DO PROF. ANDERSON FIRMO:
                          </strong>
                          {topic.examBizu}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
