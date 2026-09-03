import React, { useState } from 'react';
import { curriculumQuestions } from '../data/questionsData';
import { ChapterCode, ExerciseQuestion } from '../types';
import { Award, CheckCircle2, XCircle, RotateCcw, HelpCircle, Eye, EyeOff, BookCheck } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('TODOS');
  const [userAnswers, setUserAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({});
  const [revealedAll, setRevealedAll] = useState(false);

  const filteredQuestions = selectedFilter === 'TODOS'
    ? curriculumQuestions
    : curriculumQuestions.filter((q) => q.chapterCode === selectedFilter);

  const handleSelectOption = (questionId: number, letter: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
  };

  const handleToggleFeedback = (questionId: number) => {
    setShowFeedback((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowFeedback({});
    setRevealedAll(false);
  };

  const handleRevealAll = () => {
    const allRevealed: Record<number, boolean> = {};
    filteredQuestions.forEach((q) => {
      allRevealed[q.id] = true;
    });
    setShowFeedback(allRevealed);
    setRevealedAll(true);
  };

  // Calculate score
  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = filteredQuestions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctLetter ? acc + 1 : acc;
  }, 0);

  return (
    <section id="quiz" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#016E01]/10 text-[#016E01] text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-[#FD7600]" />
              Simulado Oficial do 9º Ano • Resolução Sem Spoiler
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              Banco de Questões BNCC (Exercícios Práticos)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              As respostas estão ocultas para você testar seus conhecimentos. Resolva as questões e confira o gabarito comentado ao final.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Limpar Respostas
            </button>

            <button
              onClick={handleRevealAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#016E01] hover:bg-[#015401] text-white transition-colors cursor-pointer shadow-xs"
            >
              <BookCheck className="w-3.5 h-3.5" />
              {revealedAll ? 'Gabarito Aberto' : 'Conferir Todo o Gabarito'}
            </button>
          </div>
        </div>

        {/* Chapter Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {['TODOS', 'A5', 'A6', 'B5', 'B6', 'A7', 'A8', 'B7', 'B8'].map((code) => (
            <button
              key={code}
              onClick={() => setSelectedFilter(code)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedFilter === code
                  ? 'bg-[#FD7600] text-white shadow-xs'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {code === 'TODOS' ? 'Todas as Questões' : `Módulo ${code}`}
            </button>
          ))}
        </div>

        {/* Stats Counter if student answered */}
        {totalAnswered > 0 && (
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 mb-6 flex items-center justify-between">
            <div className="text-xs sm:text-sm text-amber-950">
              Você respondeu <strong>{totalAnswered}</strong> de <strong>{filteredQuestions.length}</strong> questões.
              {revealedAll && (
                <span className="ml-2 font-black text-[#016E01]">
                  Acertos: {correctCount} / {filteredQuestions.length} ({Math.round((correctCount / filteredQuestions.length) * 100)}%)
                </span>
              )}
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, qIndex) => {
            const selectedOpt = userAnswers[q.id];
            const isRevealed = showFeedback[q.id] || revealedAll;
            const isCorrect = selectedOpt === q.correctLetter;

            return (
              <div
                key={q.id}
                id={`question-item-${q.id}`}
                className="bg-[#FBFBFB] rounded-2xl border border-gray-200 p-6 shadow-xs"
              >
                {/* Question Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-[#016E01] text-white text-[11px] font-black px-2.5 py-0.5 rounded font-mono">
                    QUESTÃO {qIndex + 1} • {q.chapterCode}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    BNCC 9º Ano
                  </span>
                </div>

                {/* Prompt */}
                <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed mb-4">
                  {q.prompt}
                </p>

                {/* Options (Clean for student testing!) */}
                <div className="space-y-2.5 mb-4">
                  {q.options.map((opt) => {
                    const isOptionSelected = selectedOpt === opt.letter;
                    const isOptionCorrect = opt.letter === q.correctLetter;

                    let optionStyle = 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200';
                    if (isOptionSelected) {
                      optionStyle = 'bg-blue-50 border-blue-500 text-blue-900 font-medium ring-1 ring-blue-500';
                    }

                    if (isRevealed) {
                      if (isOptionCorrect) {
                        optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-2 ring-emerald-500';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optionStyle = 'bg-rose-50 border-rose-500 text-rose-900 font-normal line-through opacity-70';
                      }
                    }

                    return (
                      <button
                        key={opt.letter}
                        onClick={() => handleSelectOption(q.id, opt.letter)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer text-xs sm:text-sm ${optionStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 ${
                          isOptionSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {opt.letter}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Footer: Check Solution Button & Explanation */}
                <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    onClick={() => handleToggleFeedback(q.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#016E01] hover:text-[#015401] cursor-pointer"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-4 h-4" />
                        Ocultar Resolução Comentada
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" />
                        Conferir Resolução & Habilidade BNCC
                      </>
                    )}
                  </button>

                  {selectedOpt && (
                    <span className="text-xs text-gray-500">
                      Sua resposta marcada: <strong>Opção [{selectedOpt}]</strong>
                    </span>
                  )}
                </div>

                {/* Detailed Feedback (Shown only when requested!) */}
                {isRevealed && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 font-black text-emerald-900 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Gabarito Oficial: Opção [{q.correctLetter}]</span>
                    </div>

                    <p className="text-gray-800 leading-relaxed mb-2">
                      <strong>Justificativa Histórica:</strong> {q.justification}
                    </p>

                    <div className="pt-2 border-t border-emerald-200 text-[11px] text-emerald-800 font-mono">
                      <strong>Habilidade BNCC:</strong> {q.bnccSkill}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
