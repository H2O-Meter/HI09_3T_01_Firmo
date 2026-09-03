import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  BookOpen,
  Sparkles,
  RotateCcw,
  ChevronUp,
  ChevronDown,
  Compass,
  Theater,
  HelpCircle,
  Trophy,
  X,
} from 'lucide-react';
import { allChapters } from '../data/curriculumData';
import { ChapterCode } from '../types';

interface StudyMasteryTrackerProps {
  currentChapterCode: ChapterCode;
  onNavigateToChapter: (code: ChapterCode) => void;
  onNavigateToQuiz: () => void;
  onNavigateToTheater: () => void;
}

interface UserProgress {
  visitedChapters: string[];
  solvedDilemmas: string[];
  quizCompleted: boolean;
  masteredFlashcardsCount: number;
}

const STORAGE_KEY = 'escola_parque_student_progress_v1';

export const StudyMasteryTracker: React.FC<StudyMasteryTrackerProps> = ({
  currentChapterCode,
  onNavigateToChapter,
  onNavigateToQuiz,
  onNavigateToTheater,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return {
      visitedChapters: ['A5'],
      solvedDilemmas: [],
      quizCompleted: false,
      masteredFlashcardsCount: 0,
    };
  });

  // Track chapter visit
  useEffect(() => {
    if (!progress.visitedChapters.includes(currentChapterCode)) {
      setProgress((prev) => {
        const updated = {
          ...prev,
          visitedChapters: [...prev.visitedChapters, currentChapterCode],
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (_) {}
        return updated;
      });
    }
  }, [currentChapterCode]);

  // Calculate percentage:
  // 8 chapters = 50%
  // 4 dilemmas = 25%
  // quiz = 25%
  const chaptersRatio = progress.visitedChapters.length / allChapters.length;
  const dilemmasRatio = Math.min(progress.solvedDilemmas.length / 4, 1);
  const quizRatio = progress.quizCompleted ? 1 : 0;
  const totalPercentage = Math.round(chaptersRatio * 50 + dilemmasRatio * 25 + quizRatio * 25);

  const resetProgress = () => {
    if (window.confirm('Deseja reiniciar seu histórico de progresso do 9º ano?')) {
      const initial: UserProgress = {
        visitedChapters: [currentChapterCode],
        solvedDilemmas: [],
        quizCompleted: false,
        masteredFlashcardsCount: 0,
      };
      setProgress(initial);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    }
  };

  return (
    <>
      {/* Floating Bottom HUD Pill */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 text-white hover:bg-slate-900 border border-slate-700/80 shadow-xl backdrop-blur-md cursor-pointer transition-all hover:scale-105 group"
          title="Ver Meu Progresso de Estudos (9º Ano)"
          aria-expanded={isOpen}
        >
          {/* Circular Progress Ring */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg className="w-6 h-6 transform -rotate-90">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-slate-700"
                fill="transparent"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-[#FD7600] transition-all duration-500"
                fill="transparent"
                strokeDasharray={62.8}
                strokeDashoffset={62.8 - (62.8 * totalPercentage) / 100}
              />
            </svg>
            <span className="absolute text-[8px] font-extrabold text-white">
              {totalPercentage}%
            </span>
          </div>

          <div className="text-left hidden sm:block">
            <div className="text-[11px] font-extrabold leading-tight text-white flex items-center gap-1">
              <span>Meu Progresso</span>
              <Trophy className="w-3 h-3 text-[#C9A84C]" />
            </div>
            <div className="text-[10px] text-slate-300 font-medium">
              {progress.visitedChapters.length} de {allChapters.length} módulos explorados
            </div>
          </div>

          <div className="p-1 rounded-full bg-slate-800 text-slate-300 group-hover:text-white">
            {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </div>
        </button>
      </div>

      {/* Expanded Progress Drawer / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#FD7600] text-white">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base leading-tight">Painel de Maestria do Aluno</h3>
                  <p className="text-xs text-slate-300">
                    História do 9º Ano • Prof. Anderson Firmo
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 space-y-5 max-h-[75vh] overflow-y-auto">
              {/* Overall Progress Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Ementa Concluída
                  </span>
                  <div className="text-3xl font-black text-slate-900 mt-0.5">
                    {totalPercentage}%
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {totalPercentage >= 80
                      ? 'Excelente rendimento! Você está pronto para os simulados e avaliações.'
                      : 'Continue navegando pelos módulos para consolidar seu repertório.'}
                  </p>
                </div>
                <div className="shrink-0 w-20 h-20 relative flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-slate-200"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-[#016E01] transition-all duration-700"
                      fill="transparent"
                      strokeDasharray={201}
                      strokeDashoffset={201 - (201 * totalPercentage) / 100}
                    />
                  </svg>
                  <span className="absolute text-sm font-extrabold text-slate-800">
                    {totalPercentage}%
                  </span>
                </div>
              </div>

              {/* Modules Checklist */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#016E01]" />
                    <span>8 Módulos da Ementa (A5 a B8)</span>
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {progress.visitedChapters.length} / {allChapters.length}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {allChapters.map((ch) => {
                    const isVisited = progress.visitedChapters.includes(ch.code);
                    const isCurrent = currentChapterCode === ch.code;
                    return (
                      <button
                        key={ch.code}
                        onClick={() => {
                          onNavigateToChapter(ch.code);
                          setIsOpen(false);
                        }}
                        className={`p-2 rounded-xl text-center border transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#FD7600] text-white border-[#FD7600] shadow-xs'
                            : isVisited
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
                            : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-black">{ch.code}</div>
                        <div className="text-[10px] truncate">
                          {isVisited ? 'Explorado' : 'Pendente'}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions / Milestones */}
              <div className="space-y-2.5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FD7600]" />
                  <span>Atividades Interativas Recomendadas</span>
                </div>

                <div
                  onClick={() => {
                    onNavigateToTheater();
                    setIsOpen(false);
                  }}
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-[#FD7600] hover:bg-orange-50/50 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-red-100 text-red-700">
                      <Theater className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Teatro Histórico & Gabinete de Decisões
                      </div>
                      <div className="text-[11px] text-slate-500">
                        4 peças cênicas curriculares com dilemas estratégicos
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#FD7600]">Jogar</span>
                </div>

                <div
                  onClick={() => {
                    onNavigateToQuiz();
                    setIsOpen(false);
                  }}
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-[#016E01] hover:bg-emerald-50/50 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-100 text-[#016E01]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Simulado Oficial BNCC
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Questões no padrão vestibular sem respostas prontas
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#016E01]">Fazer</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <button
                onClick={resetProgress}
                className="flex items-center gap-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Zerar Progresso</span>
              </button>
              <span className="font-semibold text-slate-700">Escola Parque Ipiranga</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
