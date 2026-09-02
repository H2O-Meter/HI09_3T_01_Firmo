import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/historyData';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, BookCheck, HelpCircle } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const score = calculateScore();

  return (
    <section id="quiz" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#016E01] mb-1">
            <Award className="w-4 h-4" />
            <span>Avaliação Formativa & Fixação de Conteúdo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            Quiz Oficial • Capítulo A5 (9º Ano)
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Teste seus conhecimentos sobre armas, ideologias, as 3 grandes analogias e os marcos da Guerra Fria elaborados pelo Prof. Anderson Firmo.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="px-3.5 py-1.5 bg-white border-2 border-[#C9A84C] rounded-xl text-xs font-bold text-[#1A202C] shadow-xs">
            Respondidas: <strong className="text-[#FD7600]">{answeredCount}</strong> de {QUIZ_QUESTIONS.length}
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, qIndex) => {
          const userAnswer = selectedAnswers[q.id];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = isAnswered && userAnswer === q.correctIndex;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-2xl border-2 p-6 transition-all shadow-md ${
                showResults
                  ? isCorrect
                    ? 'border-[#016E01] bg-green-50/20'
                    : 'border-red-400 bg-red-50/20'
                  : isAnswered
                  ? 'border-[#FD7600]'
                  : 'border-gray-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#1A202C] text-[#C9A84C] flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                    0{qIndex + 1}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1A202C] leading-snug">
                      {q.question}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#016E01] block mt-0.5">
                      {q.pedagogicalNote}
                    </span>
                  </div>
                </div>

                {showResults && (
                  <div className="shrink-0">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-black text-[#016E01] bg-green-100 px-2.5 py-1 rounded-lg">
                        <CheckCircle2 className="w-4 h-4" /> Correto
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-black text-red-700 bg-red-100 px-2.5 py-1 rounded-lg">
                        <XCircle className="w-4 h-4" /> Incorreto
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 gap-2.5 my-3">
                {q.options.map((option, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  const isRightOption = optIdx === q.correctIndex;

                  let optionStyle = 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-orange-50/50 hover:border-[#FD7600]';

                  if (showResults) {
                    if (isRightOption) {
                      optionStyle = 'bg-green-100 border-[#016E01] text-green-950 font-bold';
                    } else if (isSelected && !isRightOption) {
                      optionStyle = 'bg-red-100 border-red-500 text-red-950';
                    } else {
                      optionStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-[#1A202C] border-[#FD7600] text-white font-semibold shadow-xs';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      disabled={showResults}
                      className={`w-full flex items-start gap-3 p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm transition-all cursor-pointer ${optionStyle}`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-[#FD7600] text-white border-[#FD7600]'
                            : 'bg-white text-gray-600 border-gray-300'
                        }`}
                      >
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Pedagogical Explanation when results are shown */}
              {showResults && (
                <div className="mt-4 p-3.5 rounded-xl bg-white border border-gray-300 text-xs text-gray-700 leading-relaxed animate-in fade-in">
                  <strong className="text-[#FD7600] font-bold block mb-1">
                    Comentário Pedagógico (Prof. Anderson Firmo):
                  </strong>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Controls & Score Card */}
      <div className="mt-8 bg-[#1A202C] rounded-3xl p-6 sm:p-8 border-3 border-[#C9A84C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <div className="text-xs font-black uppercase tracking-widest text-[#C9A84C] mb-1">
            Escola Parque Ipiranga • Simulado 9º Ano
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-display text-white">
            {showResults
              ? `Resultado: ${score} de ${QUIZ_QUESTIONS.length} acertos (${Math.round(
                  (score / QUIZ_QUESTIONS.length) * 100
                )}%)`
              : 'Conclua suas respostas para verificar seu desempenho'}
          </h3>
          <p className="text-xs text-gray-300 mt-1 max-w-lg">
            {showResults
              ? score >= 5
                ? 'Excelente domínio dos conceitos de Guerra Fria, bipolaridade e analogias!'
                : 'Bom esforço! Recomendamos revisar a Linha do Tempo e a seção das 3 Analogias.'
              : 'Clique no botão ao lado para corrigir automaticamente o simulado.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={answeredCount === 0}
              className="px-6 py-3 bg-[#FD7600] hover:bg-[#e06900] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-black rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <BookCheck className="w-4 h-4" />
              <span>Corrigir Simulado</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-[#016E01] hover:bg-[#015201] text-white text-sm font-black rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Questões</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
