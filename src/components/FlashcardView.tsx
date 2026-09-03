import React, { useState, useEffect, useMemo } from 'react';
import { ChapterData, FlashcardItem } from '../types';
import {
  Sparkles,
  RotateCw,
  Shuffle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Award,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';

interface FlashcardViewProps {
  chapter: ChapterData;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({ chapter }) => {
  // Extract all available key events from all topics in the chapter
  const allChapterEvents: FlashcardItem[] = useMemo(() => {
    const events: FlashcardItem[] = [];
    chapter.topics.forEach((topic, tIdx) => {
      topic.keyEvents.forEach((eventStr, eIdx) => {
        const colonIndex = eventStr.indexOf(':');
        let headline = eventStr;
        let details = '';

        if (colonIndex !== -1) {
          headline = eventStr.substring(0, colonIndex).trim();
          details = eventStr.substring(colonIndex + 1).trim();
        } else {
          headline = eventStr.trim();
          details = topic.summary;
        }

        events.push({
          id: `${chapter.code}-t${tIdx}-e${eIdx}-${headline.slice(0, 15)}`,
          topicTitle: topic.title,
          topicPeriod: topic.period,
          rawEvent: eventStr,
          headline,
          details: details || topic.summary,
          examBizu: topic.examBizu,
          significance: topic.historicalSignificance,
        });
      });
    });
    return events;
  }, [chapter]);

  // Function to pull 5 random events
  const drawRandomFive = (pool: FlashcardItem[]): FlashcardItem[] => {
    if (pool.length <= 5) return [...pool];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  const [cards, setCards] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [masteryState, setMasteryState] = useState<Record<number, 'mastered' | 'review'>>({});

  // Reset or pull new 5 cards when chapter changes
  useEffect(() => {
    if (allChapterEvents.length > 0) {
      setCards(drawRandomFive(allChapterEvents));
      setCurrentIndex(0);
      setIsFlipped(false);
      setShowHint(false);
      setMasteryState({});
    }
  }, [allChapterEvents]);

  const handleShuffleNew = () => {
    setCards(drawRandomFive(allChapterEvents));
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setMasteryState({});
  };

  const handleResetCurrent = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setMasteryState({});
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      setShowHint(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
      setShowHint(false);
    }
  };

  const handleSelectCardIndex = (index: number) => {
    setCurrentIndex(index);
    setIsFlipped(false);
    setShowHint(false);
  };

  const handleMarkMastery = (status: 'mastered' | 'review') => {
    setMasteryState((prev) => ({
      ...prev,
      [currentIndex]: status,
    }));

    // Auto advance if not on the last card
    if (currentIndex < cards.length - 1) {
      setTimeout(() => {
        handleNext();
      }, 250);
    }
  };

  const handleScrollToQuiz = () => {
    const quizElem = document.getElementById('quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentCard = cards[currentIndex];
  const masteredCount = Object.values(masteryState).filter((v) => v === 'mastered').length;
  const reviewCount = Object.values(masteryState).filter((v) => v === 'review').length;
  const totalReviewed = Object.keys(masteryState).length;
  const isDeckCompleted = cards.length > 0 && totalReviewed === cards.length;

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Nenhum evento histórico encontrado para este capítulo.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6" id="flashcard-interactive-view">
      {/* Top Header / Context & Deck Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FD7600]/10 text-[#FD7600]">
              <Sparkles className="w-3.5 h-3.5" />
              Sorteio Aleatório: 5 Fatos-Chave
            </span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs font-semibold text-gray-600">
              Autoavaliação Rápida Pré-Simulado
            </span>
          </div>
          <h4 className="text-xl font-black text-gray-900 flex items-center gap-2">
            <span>⚡ Flashcards de Fixação: {chapter.title}</span>
          </h4>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShuffleNew}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition-colors shadow-2xs cursor-pointer"
            title="Sortear outros 5 eventos deste capítulo"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#016E01]" />
            <span>Sortear Novos 5</span>
          </button>
          <button
            type="button"
            onClick={handleResetCurrent}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 transition-colors cursor-pointer"
            title="Recomeçar autoavaliação destes 5 cartões"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Indicators */}
      <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Step Indicator Pills */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-500 mr-1">Cartões:</span>
          {cards.map((card, idx) => {
            const status = masteryState[idx];
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={card.id}
                onClick={() => handleSelectCardIndex(idx)}
                className={`relative w-8 h-8 rounded-lg text-xs font-black transition-all flex items-center justify-center cursor-pointer border ${
                  isCurrent
                    ? 'border-[#016E01] bg-[#016E01] text-white ring-2 ring-[#016E01]/20 scale-105 shadow-2xs'
                    : status === 'mastered'
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                    : status === 'review'
                    ? 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                title={`Ir para cartão ${idx + 1}`}
              >
                {idx + 1}
                {status === 'mastered' && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
                )}
                {status === 'review' && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                )}
              </button>
            );
          })}
        </div>

        {/* Live Mastery Stats */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Dominados: <strong>{masteredCount}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-700">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Revisar: <strong>{reviewCount}</strong></span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {currentIndex + 1} de {cards.length}
          </span>
        </div>
      </div>

      {/* Main Flashcard Card Container with Flip Animation */}
      <div className="relative min-h-[360px] perspective-1000">
        <div
          className={`w-full transition-all duration-300 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* ================= CARD FRONT: DESAFIO & PERGUNTA MENTAL ================= */}
          {!isFlipped && (
            <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#016E01]/40 shadow-sm p-6 sm:p-8 flex flex-col justify-between min-h-[360px] transition-all">
              <div>
                {/* Card Tag & Topic Origin */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                    {currentCard.topicTitle} ({currentCard.topicPeriod})
                  </span>
                  <span className="text-xs font-bold text-gray-400 font-mono">
                    Cartão #{currentIndex + 1} de 5
                  </span>
                </div>

                {/* Challenge Prompt */}
                <div className="mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#FD7600]" />
                    Desafio de Memória do 9º Ano:
                  </span>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Você se lembra o contexto, as causas ou o desfecho deste evento histórico?
                  </p>
                </div>

                {/* Event Headline */}
                <div className="my-6 p-6 rounded-xl bg-gradient-to-r from-gray-50 via-amber-50/40 to-emerald-50/30 border border-gray-200/80 text-center">
                  <h5 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug tracking-tight">
                    {currentCard.headline}
                  </h5>
                  <p className="text-xs font-medium text-gray-500 mt-2">
                    Módulo Oficial {chapter.code} • {chapter.title}
                  </p>
                </div>

                {/* Optional Hint Toggle */}
                {showHint ? (
                  <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Dica Pedagógica de Contexto:</strong> Este evento insere-se no subtema "<em>{currentCard.topicTitle}</em>" do período {currentCard.topicPeriod}. Tente lembrar quem foram os líderes ou as consequências imediatas!
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowHint(true)}
                    className="text-xs text-gray-500 hover:text-gray-800 underline underline-offset-2 flex items-center gap-1 cursor-pointer mb-4"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Precisa de uma dica de contexto? Clique aqui</span>
                  </button>
                )}
              </div>

              {/* Action to Flip Card */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-gray-500 italic">
                  Pense na resposta mentalmente antes de conferir o verso
                </span>

                <button
                  type="button"
                  id="btn-flip-card-reveal"
                  onClick={() => setIsFlipped(true)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#016E01] hover:bg-[#015801] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md hover:scale-[1.01]"
                >
                  <RotateCw className="w-4 h-4" />
                  <span>Virar Cartão / Revelar Explicação & Bizu</span>
                </button>
              </div>
            </div>
          )}

          {/* ================= CARD BACK: RESPOSTA, CONTEXTO & BIZU ================= */}
          {isFlipped && (
            <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#016E01] shadow-md p-6 sm:p-8 flex flex-col justify-between min-h-[360px] transition-all">
              <div>
                {/* Top Badge & Return Action */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Gabarito Pedagógico
                    </span>
                    <span className="text-xs text-gray-500">
                      {currentCard.topicTitle}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="text-xs text-gray-500 hover:text-gray-800 flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Voltar à Frente</span>
                  </button>
                </div>

                {/* Event Headline Recall */}
                <h5 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
                  {currentCard.headline}
                </h5>

                {/* Event Full Summary / Explanation */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-2xs mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    O que aconteceu:
                  </span>
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    {currentCard.details}
                  </p>

                  {currentCard.significance && (
                    <div className="mt-3 pt-2.5 border-t border-gray-100 text-xs text-gray-600">
                      <strong className="text-gray-800">Significado Histórico:</strong> {currentCard.significance}
                    </div>
                  )}
                </div>

                {/* Professor Anderson Firmo Exam Bizu Box */}
                <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-300 text-amber-950 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-800 shrink-0">
                    <Lightbulb className="w-5 h-5 text-[#FD7600]" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-2">
                      <span>🎯 Bizu de Prova • Prof. Anderson Firmo</span>
                    </div>
                    <p className="text-xs text-amber-950 mt-1 leading-snug">
                      {currentCard.examBizu}
                    </p>
                  </div>
                </div>
              </div>

              {/* Self-Assessment Buttons */}
              <div className="pt-6 mt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-bold text-gray-500">
                  Como foi seu desempenho neste cartão?
                </span>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    type="button"
                    id="btn-flashcard-review"
                    onClick={() => handleMarkMastery('review')}
                    className={`flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                      masteryState[currentIndex] === 'review'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
                    }`}
                  >
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Preciso Revisar</span>
                  </button>

                  <button
                    type="button"
                    id="btn-flashcard-mastered"
                    onClick={() => handleMarkMastery('mastered')}
                    className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                      masteryState[currentIndex] === 'mastered'
                        ? 'bg-[#016E01] text-white border-[#016E01] shadow-xs'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Dominei o Conteúdo!</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
            currentIndex === 0
              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 shadow-2xs'
          }`}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Cartão Anterior</span>
        </button>

        <span className="text-xs text-gray-500 font-medium hidden sm:inline-block">
          Dica: Use os botões numéricos acima para pular diretamente para qualquer cartão
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === cards.length - 1}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border ${
            currentIndex === cards.length - 1
              ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
              : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 shadow-2xs'
          }`}
        >
          <span>Próximo Cartão</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Completion Banner (When student has reviewed all 5 cards) */}
      {isDeckCompleted && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-2 border-emerald-300 shadow-sm animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-emerald-500 text-white rounded-xl shadow-xs shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-black text-lg text-emerald-950 flex items-center gap-2">
                  <span>Autoavaliação Concluída com Sucesso!</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-200/70 text-emerald-900">
                    {masteredCount} de 5 dominados
                  </span>
                </h5>
                <p className="text-xs text-emerald-900 mt-1 max-w-2xl leading-relaxed">
                  {masteredCount >= 4
                    ? '🎉 Excelente rendimento! Você demonstrou forte domínio dos marcos temporais deste capítulo e está pronto para o Simulado Oficial.'
                    : 'Bom treinamento! Sugerimos dar uma olhada nos cards marcados com "Preciso Revisar" e conferir o Caderno do 9º Ano antes do Simulado.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleShuffleNew}
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-bold text-xs shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Shuffle className="w-4 h-4 text-[#016E01]" />
                <span>Sortear Outros 5 Eventos</span>
              </button>

              <button
                type="button"
                onClick={handleScrollToQuiz}
                className="px-5 py-2.5 rounded-xl bg-[#016E01] hover:bg-[#015801] text-white font-black text-xs shadow-xs flex items-center gap-1.5 transition-all cursor-pointer hover:shadow-md hover:scale-[1.02]"
              >
                <span>Fazer o Simulado BNCC</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
