import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/historyData';
import { Award, CheckCircle, XCircle, RotateCcw, Sparkles, BookOpen, Lightbulb } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isAllAnswered = answeredCount === QUIZ_QUESTIONS.length;
  const score = calculateScore();

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <section id="quiz" className="py-12 bg-white border-b border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#016E01]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD7600]">
                Avaliação Formativa & Fixação de Conteúdo
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C]">
              SIMULADO DO 9º ANO: <span className="text-[#016E01]">Guerra Fria</span>
            </h2>
            <p className="text-sm font-serif italic text-[#1A202C]/80 mt-1">
              6 questões essenciais do Capítulo A5 • Curadoria: Prof. Anderson Firmo
            </p>
          </div>

          {/* Progress & Submit Status */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-gray-500 block">Respondidas</span>
              <span className="font-mono text-sm font-bold text-[#1A202C]">
                {answeredCount} de {QUIZ_QUESTIONS.length}
              </span>
            </div>

            {!showResults ? (
              <button
                id="btn-submit-quiz"
                onClick={() => setShowResults(true)}
                disabled={answeredCount === 0}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  answeredCount > 0
                    ? 'bg-[#FD7600] text-white hover:bg-[#e06900] shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Conferir Gabarito
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#1A202C] text-white hover:bg-black transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Refazer Simulado</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Banner when Submitted */}
        {showResults && (
          <div
            className={`p-6 rounded-2xl mb-8 border-2 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in duration-300 ${
              score >= 5
                ? 'bg-emerald-50 border-emerald-500 text-emerald-950'
                : score >= 3
                ? 'bg-amber-50 border-amber-500 text-amber-950'
                : 'bg-red-50 border-red-500 text-red-950'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl shadow-inner ${
                  score >= 5
                    ? 'bg-emerald-600 text-white'
                    : score >= 3
                    ? 'bg-amber-600 text-white'
                    : 'bg-red-600 text-white'
                }`}
              >
                {score}/{QUIZ_QUESTIONS.length}
              </div>
              <div>
                <h4 className="font-editorial text-xl font-black">
                  {score === 6
                    ? 'Excelente! Domínio Completo do Capítulo A5!'
                    : score >= 4
                    ? 'Muito Bom! Conhecimento Sólido da Bipolaridade.'
                    : 'Bom Esforço! Revise os conceitos com o Guia de Estudos.'}
                </h4>
                <p className="text-xs font-medium opacity-90 mt-0.5">
                  Aproveitamento: {Math.round((score / QUIZ_QUESTIONS.length) * 100)}% • Feedback pedagógico disponível abaixo em cada questão.
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider block opacity-70">
                Professor Corretor
              </span>
              <strong className="text-xs text-[#016E01] font-bold">
                Prof. Anderson Firmo
              </strong>
            </div>
          </div>
        )}

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {QUIZ_QUESTIONS.map((q, qIndex) => {
            const selectedOption = userAnswers[q.id];
            const isAnswered = selectedOption !== undefined;
            const isCorrect = selectedOption === q.correctIndex;

            return (
              <div
                key={q.id}
                id={`quiz-card-${q.id}`}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  showResults
                    ? isCorrect
                      ? 'bg-emerald-50/40 border-emerald-400'
                      : 'bg-red-50/40 border-red-400'
                    : 'bg-[#FBFBFB] border-gray-200 shadow-2xs hover:border-[#C9A84C]'
                }`}
              >
                {/* Question Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-[#1A202C] text-[#C9A84C] font-mono text-xs font-bold">
                    Questão {qIndex + 1}
                  </span>
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    {q.pedagogicalNote}
                  </span>
                </div>

                <h4 className="font-editorial font-bold text-sm sm:text-base text-[#1A202C] mb-4 leading-snug">
                  {q.question}
                </h4>

                {/* Options */}
                <div className="space-y-2 mb-4">
                  {q.options.map((option, optIndex) => {
                    const isSelected = selectedOption === optIndex;
                    const isRealCorrect = q.correctIndex === optIndex;

                    let buttonClass = 'bg-white border-gray-200 text-gray-800 hover:bg-orange-50/60';
                    if (!showResults && isSelected) {
                      buttonClass = 'bg-[#FD7600] text-white border-[#FD7600] font-semibold';
                    } else if (showResults) {
                      if (isRealCorrect) {
                        buttonClass = 'bg-emerald-600 text-white border-emerald-700 font-bold';
                      } else if (isSelected && !isRealCorrect) {
                        buttonClass = 'bg-red-600 text-white border-red-700 line-through';
                      } else {
                        buttonClass = 'bg-white/60 text-gray-400 border-gray-200 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleSelectOption(q.id, optIndex)}
                        disabled={showResults}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-start gap-2.5 cursor-pointer ${buttonClass}`}
                      >
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border border-current shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIndex)}
                        </span>
                        <span className="leading-snug">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on Show Results */}
                {showResults && (
                  <div className="p-3.5 rounded-lg bg-white border border-gray-300 text-xs mt-3 shadow-2xs">
                    <div className="flex items-center gap-1.5 font-bold mb-1 text-[#016E01]">
                      <Lightbulb className="w-3.5 h-3.5 text-[#FD7600]" />
                      <span>Comentário do Professor Anderson Firmo:</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{q.explanation}</p>
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
