import React, { useEffect, useState } from 'react';
import { allChapters } from '../data/curriculumData';
import { curriculumQuestions } from '../data/questionsData';
import { generateColdWarPDF } from '../utils/pdfGenerator';
import { BrandLogo } from './BrandLogo';
import {
  X,
  Printer,
  Download,
  Loader2,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Award,
  Layers,
  Calendar,
  Shield,
  HelpCircle,
  Eye,
  EyeOff,
  UserCheck,
} from 'lucide-react';
import { ChapterCode } from '../types';

interface StudyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({ isOpen, onClose }) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [modalTab, setModalTab] = useState<'conteudo' | 'questoes' | 'gabarito'>('conteudo');
  const [selectedChapterCode, setSelectedChapterCode] = useState<ChapterCode>('A5');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    try {
      setIsGeneratingPdf(true);
      generateColdWarPDF();
    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      window.print();
    } finally {
      setTimeout(() => setIsGeneratingPdf(false), 1000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const currentChapter = allChapters.find((c) => c.code === selectedChapterCode) || allChapters[0];

  return (
    <div
      id="study-guide-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in"
    >
      <div className="bg-[#FBFBFB] w-full max-w-5xl rounded-2xl shadow-2xl border-4 border-[#016E01] overflow-hidden my-2 sm:my-6 max-h-[94vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none print:my-0 print:p-0">
        
        {/* Control Bar (Hidden in Print) */}
        <div className="bg-[#1A202C] text-white px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between border-b-2 border-[#C9A84C] shrink-0 no-print">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#FD7600]" />
            <div>
              <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">
                Material Didático Oficial • 9º Ano
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                Guia de Estudos Completo: A5 a B8 (1945–2026)
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-print-guide"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            <button
              id="btn-download-pdf"
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#016E01] hover:bg-[#015401] text-white transition-colors shadow-xs cursor-pointer disabled:opacity-50"
            >
              {isGeneratingPdf ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{isGeneratingPdf ? 'Gerando...' : 'Baixar PDF Oficial'}</span>
            </button>

            <button
              id="btn-close-modal"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Sub-Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0 no-print">
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setModalTab('conteudo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                modalTab === 'conteudo'
                  ? 'bg-white text-[#016E01] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📖 Conteúdo por Módulo
            </button>
            <button
              onClick={() => setModalTab('questoes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                modalTab === 'questoes'
                  ? 'bg-white text-[#FD7600] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ✏️ Questões BNCC (Sem Resposta)
            </button>
            <button
              onClick={() => setModalTab('gabarito')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                modalTab === 'gabarito'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🔑 Gabarito Comentado (Final)
            </button>
          </div>

          {modalTab === 'conteudo' && (
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
              {allChapters.map((ch) => (
                <button
                  key={ch.code}
                  onClick={() => setSelectedChapterCode(ch.code)}
                  className={`px-2.5 py-1 rounded-md text-xs font-black font-mono transition-all cursor-pointer ${
                    selectedChapterCode === ch.code
                      ? 'bg-[#016E01] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {ch.code}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 space-y-8 bg-white print:p-0 print:overflow-visible">
          
          {/* Institutional Document Header */}
          <div className="border-4 border-[#016E01] p-6 rounded-2xl bg-[#FBFBFB] relative">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b-2 border-[#016E01]/30">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <BrandLogo size="lg" />
              </div>

              <div className="text-center sm:text-right">
                <span className="bg-[#FD7600] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1 shadow-xs">
                  Prof. Anderson Firmo
                </span>
                <div className="text-xs text-gray-500 font-semibold">
                  Ensino Fundamental II • 9º Ano
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <h1 className="text-xl sm:text-2xl font-black text-[#016E01] uppercase tracking-tight">
                Guia de Estudos Integral da História Contemporânea
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                Ementa Completa: A5 (Guerra Fria) até B8 (Nova República no Século XXI) • Ordem Cronológica
              </p>
            </div>

            {/* Student fill-in info */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-300 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-700">
              <div><strong>Nome:</strong> ___________________________________</div>
              <div><strong>Turma:</strong> 9º Ano _____</div>
              <div><strong>Data:</strong> ___/___/2026</div>
            </div>
          </div>

          {/* TAB 1: CONTEÚDO DOS MÓDULOS */}
          {modalTab === 'conteudo' && (
            <div className="space-y-6">
              <div className="bg-[#FEF3C7]/70 border-l-4 border-[#FD7600] p-4 rounded-r-xl">
                <div className="flex items-center gap-2 font-black text-amber-900 text-sm">
                  <Sparkles className="w-4 h-4 text-[#FD7600]" />
                  <span>Módulo Selecionado: {currentChapter.code} - {currentChapter.title} ({currentChapter.period})</span>
                </div>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                  {currentChapter.overview}
                </p>
              </div>

              {/* Subtopics Checklist */}
              <div className="space-y-4">
                <h4 className="font-extrabold text-base text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#016E01]" />
                  Subtópicos e Fatos Históricos do Módulo {currentChapter.code}:
                </h4>

                {currentChapter.topics.map((t, idx) => (
                  <div key={t.id} className="p-4 rounded-xl border border-gray-200 bg-[#FBFBFB]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-black text-sm text-[#016E01]">
                        {idx + 1}. {t.title}
                      </span>
                      <span className="text-[11px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {t.period}
                      </span>
                    </div>

                    <p className="text-xs text-gray-700 leading-relaxed mb-3">
                      {t.summary}
                    </p>

                    <div className="bg-white p-3 rounded-lg border border-gray-100 text-xs mb-2">
                      <strong className="text-gray-800 block mb-1">Acontecimentos Relevantes:</strong>
                      <ul className="space-y-1 text-gray-600">
                        {t.keyEvents.map((evt, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#016E01] font-bold">•</span>
                            <span>{evt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                      <strong>📌 DICA DE PROVA DO PROF. ANDERSON:</strong> {t.examBizu}
                    </div>
                  </div>
                ))}
              </div>

              {/* Analogy Box */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="text-xs font-black uppercase tracking-wider text-[#016E01] block mb-1">
                  💡 Metáfora Didática para Fixação: {currentChapter.analogy.title}
                </span>
                <p className="text-xs text-gray-800 italic mb-2">
                  "{currentChapter.analogy.quote}"
                </p>
                <p className="text-xs text-gray-600">
                  {currentChapter.analogy.explanation}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: BANCO DE QUESTÕES (SEM AS RESPOSTAS!) */}
          {modalTab === 'questoes' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
                <h4 className="font-black text-sm text-blue-900">
                  📝 Instruções do Simulado para o Estudante (Sem Spoiler de Resposta):
                </h4>
                <p className="text-xs text-blue-950 mt-1 leading-relaxed">
                  Resolva as 16 questões do simulado marcando suas opções. Nenhuma resposta está pré-selecionada. Após finalizar seus estudos, consulte a aba <strong>"Gabarito Comentado"</strong> para verificar sua pontuação e explicações pedagógicas.
                </p>
              </div>

              {curriculumQuestions.map((q, qIndex) => (
                <div key={q.id} className="p-5 rounded-2xl border border-gray-200 bg-[#FBFBFB]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#016E01] text-white text-xs font-black px-2 py-0.5 rounded font-mono">
                      QUESTÃO {qIndex + 1} • {q.chapterCode}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Espaço para Resposta
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-gray-900 leading-relaxed mb-4">
                    {q.prompt}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt) => (
                      <div
                        key={opt.letter}
                        className="p-3 rounded-xl border border-gray-200 bg-white flex items-start gap-3 text-xs sm:text-sm text-gray-800"
                      >
                        <span className="w-6 h-6 rounded-md bg-gray-100 font-bold text-xs flex items-center justify-center shrink-0 text-gray-700">
                          {opt.letter}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: GABARITO COMENTADO (AO FINAL) */}
          {modalTab === 'gabarito' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl">
                <h4 className="font-black text-sm text-amber-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  Gabarito Oficial Comentado • Prof. Anderson Firmo
                </h4>
                <p className="text-xs text-amber-950 mt-1">
                  Confira a resolução detalhada, justificativa histórica e habilidade BNCC correspondente a cada questão.
                </p>
              </div>

              {curriculumQuestions.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm">
                  <div className="flex items-center justify-between font-black text-gray-900 mb-1">
                    <span className="text-[#016E01]">
                      Questão {idx + 1} ({q.chapterCode})
                    </span>
                    <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded font-black">
                      Alternativa Correta: [ {q.correctLetter} ]
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                    <strong>Justificativa Histórica:</strong> {q.justification}
                  </p>

                  <div className="text-[11px] text-gray-500 font-mono pt-2 border-t border-gray-100">
                    <strong>Competência BNCC:</strong> {q.bnccSkill}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
