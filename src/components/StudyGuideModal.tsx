import React, { useEffect } from 'react';
import { SCHOOL_INFO, MANDATORY_ANALOGIES, BLOCS_DATA } from '../data/historyData';
import { CHRONOLOGICAL_PHASES } from '../data/chronologicalPhasesData';
import { BrandLogo } from './BrandLogo';
import { X, Printer, BookOpen, Sparkles, Shield, UserCheck, Calendar, CheckCircle2, Layers, Award } from 'lucide-react';

interface StudyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({ isOpen, onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      id="study-guide-modal-backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in"
    >
      <div className="bg-[#FBFBFB] w-full max-w-4xl rounded-2xl shadow-2xl border-4 border-[#C9A84C] overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none">
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="bg-[#1A202C] text-white p-4 sm:p-5 flex items-center justify-between border-b-2 border-[#C9A84C] shrink-0 no-print">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Guia de Estudos Cronológico • Capítulo A5</span>
              </h3>
              <p className="text-xs text-[#C9A84C]">
                Escola Parque Ipiranga • 9º Ano • Prof. Anderson Firmo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-print-guide"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FD7600] text-white text-xs font-bold hover:bg-[#e06900] transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Salvar PDF</span>
            </button>

            <button
              id="btn-close-modal"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1A202C] bg-white print:p-0 print:overflow-visible">
          {/* Printable School Header */}
          <div className="border-b-2 border-[#1A202C] pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
              <div>
                <h1 className="font-display text-xl font-black text-[#1A202C]">
                  ESCOLA PARQUE IPIRANGA
                </h1>
                <p className="text-xs font-bold text-[#016E01] uppercase tracking-wider">
                  História Contemporânea • {SCHOOL_INFO.grade}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-200">
              <span className="text-[11px] font-bold text-[#FD7600] uppercase block">
                {SCHOOL_INFO.chapter}
              </span>
              <span className="text-sm font-serif font-black text-[#1A202C] block">
                {SCHOOL_INFO.topic}
              </span>
              <span className="text-xs font-bold text-[#016E01] block">
                Docente: Prof. Anderson Firmo
              </span>
            </div>
          </div>

          {/* Subtopic Banner */}
          <div className="p-4 bg-orange-50 border-l-4 border-[#FD7600] rounded-r-xl">
            <h2 className="font-serif italic text-base font-bold text-[#1A202C]">
              "{SCHOOL_INFO.subtopic}"
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Roteiro de Revisão Completo Estruturado em 5 Fases Cronológicas (1945 a 1991).
            </p>
          </div>

          {/* 1. Síntese Cronológica das 5 Fases */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-base text-[#016E01] flex items-center gap-2 border-b pb-1">
              <span>📅</span> 1. As 5 Fases Cronológicas da Guerra Fria (1945–1991)
            </h3>

            <div className="space-y-3">
              {CHRONOLOGICAL_PHASES.map((phase) => (
                <div
                  key={phase.id}
                  className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-xs text-[#FD7600] uppercase tracking-wider">
                      Fase {phase.phaseNumber} ({phase.period})
                    </span>
                    <span className="text-xs font-bold text-gray-600 bg-white px-2 py-0.5 rounded border">
                      {phase.tensionLabel}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1A202C]">{phase.title}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">{phase.summary}</p>
                  <div className="text-[11px] text-[#016E01] font-bold">
                    • Destaques: {phase.milestones.map((m) => `${m.year} (${m.title.split('&')[0].trim()})`).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. As 3 Analogias Obrigatórias na Ordem Histórica */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-[#FD7600] flex items-center gap-2 border-b pb-1">
              <span>♟️</span> 2. As 3 Analogias Conceituais Obrigatórias
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {MANDATORY_ANALOGIES.map((a) => (
                <div key={a.id} className="p-3.5 rounded-xl border border-[#C9A84C]/60 bg-amber-50/30">
                  <div className="text-lg mb-1">{a.emoji}</div>
                  <h4 className="font-bold text-xs text-[#1A202C] mb-1">{a.shortName}</h4>
                  <p className="text-[11px] text-gray-700 leading-snug mb-2">{a.concept}</p>
                  <div className="text-[10px] text-[#016E01] font-semibold bg-white p-2 rounded border border-gray-200">
                    {a.classroomConnection}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Comparativo Estrutural dos Blocos */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-[#1A202C] flex items-center gap-2 border-b pb-1">
              <span>⚖️</span> 3. Quadro Comparativo dos Dois Blocos
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Capitalista */}
              <div className="p-4 rounded-xl border-2 border-blue-200 bg-blue-50/40 space-y-2">
                <span className="text-xs font-black text-blue-900 uppercase">
                  🇺🇸 Bloco Ocidental (Capitalista)
                </span>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>Doutrina:</strong> Doutrina Truman (Contenção)</li>
                  <li><strong>Plano Econômico:</strong> Plano Marshall (1947)</li>
                  <li><strong>Aliança Militar:</strong> OTAN (1949)</li>
                  <li><strong>Inteligência:</strong> CIA</li>
                  <li><strong>Ideologia:</strong> Democracia liberal e livre mercado</li>
                </ul>
              </div>

              {/* Socialista */}
              <div className="p-4 rounded-xl border-2 border-red-200 bg-red-50/40 space-y-2">
                <span className="text-xs font-black text-red-900 uppercase">
                  🇷🇺 Bloco Oriental (Socialista)
                </span>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>Doutrina:</strong> Doutrina Jdanov / Kominform</li>
                  <li><strong>Plano Econômico:</strong> COMECON (1949)</li>
                  <li><strong>Aliança Militar:</strong> Pacto de Varsóvia (1955)</li>
                  <li><strong>Inteligência:</strong> KGB</li>
                  <li><strong>Ideologia:</strong> Socialismo e economia planificada</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Student Review Checklist */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300">
            <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#016E01]" />
              Checklist de Fixação para o 9º Ano:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>Por que a guerra foi chamada de "Fria" (MAD).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>Significado do Plano Marshall vs COMECON.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>A Crise dos Mísseis de 1962 (os 13 dias).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>Muro de Berlim (1961) e sua Queda (1989).</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>A analogia do Carrinho de Choque Nuclear.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#016E01]" />
                <span>Glasnost e Perestroika no fim da URSS (1991).</span>
              </div>
            </div>
          </div>

          {/* Printable Signature & Validation */}
          <div className="pt-4 border-t-2 border-gray-300 flex items-center justify-between text-xs text-gray-500">
            <span>Escola Parque Ipiranga • Material de História Homologado</span>
            <span className="font-bold text-[#016E01]">Prof. Anderson Firmo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
