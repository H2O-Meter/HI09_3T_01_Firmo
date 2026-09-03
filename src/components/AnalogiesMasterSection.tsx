import React from 'react';
import { allChapters } from '../data/curriculumData';
import { Sparkles, Quote, Compass, BookOpen } from 'lucide-react';

export const AnalogiesMasterSection: React.FC = () => {
  return (
    <section id="analogias-master" className="py-12 bg-[#F3F4F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD7600]/10 text-[#FD7600] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Método Pedagógico • Prof. Anderson Firmo
          </div>
          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
            Analogias & Metáforas para Fixação Definitiva
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Comparações didáticas essenciais para associar os conceitos complexos da História com situações do cotidiano e gabaritar as avaliações.
          </p>
        </div>

        {/* 8 Analogies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {allChapters.map((ch, idx) => (
            <div
              key={ch.code}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#016E01] text-white text-xs font-black px-2 py-0.5 rounded font-mono">
                    {ch.code}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold">
                    {ch.period}
                  </span>
                </div>

                <h3 className="font-extrabold text-sm text-gray-900 mb-1">
                  {ch.analogy.title}
                </h3>

                <div className="bg-[#FEF3C7]/60 border-l-3 border-[#FD7600] p-2.5 rounded-r-lg my-2 text-xs italic text-gray-800">
                  "{ch.analogy.quote}"
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {ch.analogy.explanation}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#016E01] block mb-0.5">
                  💡 Lição Pedagógica:
                </span>
                <p className="text-[11px] text-gray-700 font-medium leading-snug">
                  {ch.analogy.pedagogicalLesson}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
