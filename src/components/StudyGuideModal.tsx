import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Printer, X, BookOpen, CheckCircle, Sparkles, Shield, UserCheck } from 'lucide-react';
import { TIMELINE_DATA, MANDATORY_ANALOGIES, BLOCS_DATA } from '../data/historyData';

interface StudyGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyGuideModal: React.FC<StudyGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FBFBFB] border-4 border-[#C9A84C] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl text-[#1A202C] relative my-8 animate-in zoom-in-95">
        {/* Modal Controls (Hidden in Print) */}
        <div className="flex items-center justify-between pb-6 border-b-2 border-gray-200 no-print">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#FD7600] text-white">
              <BookOpen className="w-5 h-5" />
            </span>
            <div>
              <h2 className="text-xl font-black text-[#1A202C] font-display">
                Ficha de Resumo & Guia de Estudos
              </h2>
              <span className="text-xs text-[#016E01] font-bold">
                Capítulo A5 &bull; 9º Ano &bull; Prof. Anderson Firmo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#016E01] text-white rounded-xl text-xs font-bold hover:bg-[#015201] shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-gray-800 hover:bg-gray-100 font-bold transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable Header */}
        <div className="mt-6 mb-8 text-center pb-6 border-b border-gray-300">
          <div className="flex justify-center mb-3">
            <BrandLogo size="lg" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black font-display text-[#1A202C]">
            A GUERRA FRIA: GUIA SINTÉTICO PARA PROVAS
          </h1>
          <p className="text-sm font-semibold text-[#016E01] mt-1">
            O mundo dividido: armas, ideologias e o equilíbrio do terror &bull; 9º Ano
          </p>
          <div className="mt-2 text-xs text-gray-600 font-medium">
            Elaborado por: <strong>Prof. Anderson Firmo</strong> &bull; Escola Parque Ipiranga
          </div>
        </div>

        {/* Section 1: Conceito Central & Emojis */}
        <div className="mb-6 bg-white p-5 rounded-2xl border border-gray-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#FD7600] mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            1. O que foi a Guerra Fria (1945–1991)?
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            Período de intensa rivalidade geopolítica, ideológica, militar e tecnológica entre os <strong>Estados Unidos (Capitalismo)</strong> e a <strong>União Soviética (Socialismo)</strong>. Caracterizou-se pela ausência de confronto armado direto entre as duas superpotências, devido ao medo da Destruição Mútua Assegurada (MAD) provocada pelos arsenais atômicos.
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs font-bold text-gray-600 bg-gray-50 p-2 rounded-lg">
            <span>Simbolismos Essenciais:</span>
            <span>☢️ Nuclear</span>
            <span>🚀 Espacial</span>
            <span>🧊 Bipolaridade Gelada</span>
            <span>🏛️ Diplomacia Institucional</span>
          </div>
        </div>

        {/* Section 2: As 3 Analogias Obrigatórias */}
        <div className="mb-6">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#016E01] mb-3 flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            2. As Três Grandes Analogias Explicativas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {MANDATORY_ANALOGIES.map((a) => (
              <div key={a.id} className="p-4 bg-white rounded-xl border border-gray-200">
                <div className="text-lg mb-1">{a.emoji}</div>
                <h4 className="text-xs font-black text-[#1A202C] font-display">{a.shortName}</h4>
                <p className="text-[11px] text-gray-600 mt-1.5 leading-snug">{a.quote}</p>
                <div className="mt-2 text-[10px] text-[#FD7600] font-bold">{a.classroomConnection}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Linha do Tempo Resumida dos 7 Marcos */}
        <div className="mb-6 bg-white p-5 rounded-2xl border border-gray-200">
          <h3 className="text-xs font-black uppercase tracking-wider text-[#1A202C] mb-3">
            3. Cronologia Obrigatória (7 Marcos):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {TIMELINE_DATA.map((t) => (
              <div key={t.year} className="p-2.5 bg-gray-50 rounded-lg flex items-start gap-2 border border-gray-200">
                <span className="font-mono font-black text-[#016E01] shrink-0">{t.year}:</span>
                <div>
                  <strong className="text-gray-900 block">{t.title}</strong>
                  <span className="text-gray-600 text-[11px]">{t.shortDesc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Comparativo dos Blocos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs">
            <h4 className="font-black text-blue-900 uppercase tracking-wider mb-1">
              🇺🇸 Bloco Capitalista (EUA)
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>&bull; <strong>Plano Econômico:</strong> Plano Marshall (1947)</li>
              <li>&bull; <strong>Aliança Militar:</strong> OTAN (1949)</li>
              <li>&bull; <strong>Inteligência:</strong> CIA</li>
              <li>&bull; <strong>Doutrina:</strong> Doutrina Truman (Contenção)</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50/70 border border-red-200 rounded-xl text-xs">
            <h4 className="font-black text-red-900 uppercase tracking-wider mb-1">
              🚩 Bloco Socialista (URSS)
            </h4>
            <ul className="space-y-1 text-gray-700">
              <li>&bull; <strong>Plano Econômico:</strong> COMECON (1949)</li>
              <li>&bull; <strong>Aliança Militar:</strong> Pacto de Varsóvia (1955)</li>
              <li>&bull; <strong>Inteligência:</strong> KGB</li>
              <li>&bull; <strong>Doutrina:</strong> Doutrina Jdanov / Kominform</li>
            </ul>
          </div>
        </div>

        {/* Footer info in guide */}
        <div className="pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
          Escola Parque Ipiranga &bull; Material Pedagógico Autorizado &bull; Docente: <strong>Prof. Anderson Firmo</strong>
        </div>
      </div>
    </div>
  );
};
