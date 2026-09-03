import React from 'react';
import { ChapterCode } from '../types';
import { allChapters } from '../data/curriculumData';
import { Calendar, Compass, ShieldAlert, Award } from 'lucide-react';

interface CurriculumNavigatorProps {
  activeChapter: ChapterCode;
  onSelectChapter: (code: ChapterCode) => void;
}

export const CurriculumNavigator: React.FC<CurriculumNavigatorProps> = ({
  activeChapter,
  onSelectChapter,
}) => {
  return (
    <section id="curriculum-navigator" className="w-full bg-white border-b border-[#C9A84C]/30 py-4 shadow-xs sticky top-26 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#FD7600]" />
            <h2 className="text-sm font-black uppercase tracking-wider text-[#016E01]">
              Estrutura Curricular Completa • 8 Módulos Oficiais
            </h2>
            <span className="hidden sm:inline-block bg-[#016E01]/10 text-[#016E01] text-[11px] px-2 py-0.5 rounded-full font-bold">
              Ordem do Anexo & Cronológica (1945–2026)
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5 text-[#016E01]" />
            <span>Selecione o capítulo para navegar pelos conteúdos e modos:</span>
          </div>
        </div>

        {/* 8 Chapters Button Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {allChapters.map((ch, idx) => {
            const isSelected = activeChapter === ch.code;
            return (
              <button
                key={ch.code}
                id={`btn-chapter-${ch.code}`}
                onClick={() => onSelectChapter(ch.code)}
                className={`relative p-2.5 rounded-xl text-left transition-all border cursor-pointer group ${
                  isSelected
                    ? 'bg-[#016E01] text-white border-[#016E01] shadow-md ring-2 ring-[#FD7600]/50 scale-[1.02]'
                    : 'bg-[#FBFBFB] hover:bg-white text-[#1A202C] border-gray-200 hover:border-[#FD7600]/40 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-black text-xs px-1.5 py-0.5 rounded font-mono ${
                      isSelected
                        ? 'bg-[#FD7600] text-white'
                        : 'bg-gray-200 text-gray-800 group-hover:bg-[#FD7600] group-hover:text-white transition-colors'
                    }`}
                  >
                    {ch.code}
                  </span>
                  <span
                    className={`text-[10px] font-bold ${
                      isSelected ? 'text-[#C9A84C]' : 'text-gray-400'
                    }`}
                  >
                    #{idx + 1}
                  </span>
                </div>

                <div
                  className={`font-bold text-xs line-clamp-1 leading-snug ${
                    isSelected ? 'text-white' : 'text-gray-900 group-hover:text-[#016E01]'
                  }`}
                  title={ch.title}
                >
                  {ch.title}
                </div>

                <div
                  className={`text-[10px] mt-0.5 ${
                    isSelected ? 'text-white/80' : 'text-gray-500'
                  }`}
                >
                  {ch.period}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
