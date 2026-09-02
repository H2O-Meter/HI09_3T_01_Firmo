import React, { useState } from 'react';
import { DASHBOARD_DATA } from '../data/historyData';
import { DashboardMilestone } from '../types';
import { ShieldAlert, Flame, Users, BookOpen, AlertOctagon, TrendingUp, CheckCircle2 } from 'lucide-react';

export const DashboardSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<1945 | 1962 | 1989 | 1991>(1962);

  const currentData: DashboardMilestone =
    DASHBOARD_DATA.find((d) => d.year === selectedYear) || DASHBOARD_DATA[1];

  const getDefconColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-red-600 text-white border-red-800 animate-pulse';
      case 2:
        return 'bg-red-500 text-white border-red-700 animate-bounce';
      case 3:
        return 'bg-amber-500 text-white border-amber-600';
      case 4:
        return 'bg-yellow-500 text-black border-yellow-600';
      case 5:
      default:
        return 'bg-green-600 text-white border-green-700';
    }
  };

  return (
    <section id="dashboard" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FD7600] mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>Dados de Inteligência & Painel Geopolítico</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            Dashboard dos 4 Marcos Estratégicos
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Compare o nível de prontidão militar, arsenais nucleares e correlação de forças nos 4 momentos decisivos da Guerra Fria (1945, 1962, 1989, 1991).
          </p>
        </div>

        {/* Emojis Mandatory Badge */}
        <div className="mt-4 md:mt-0 flex items-center gap-3 bg-[#1A202C] px-4 py-2 rounded-xl text-white shadow-md border border-[#C9A84C]/40">
          <span className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold">Simbolismos:</span>
          <div className="flex items-center gap-2 text-lg">
            <span title="Energia Nuclear / Armamento">☢️</span>
            <span title="Corrida Espacial / Mísseis">🚀</span>
            <span title="Guerra Fria / Tensão Gelada">🧊</span>
            <span title="Instituições / Diplomacia">🏛️</span>
          </div>
        </div>
      </div>

      {/* Year Selection Tabs (1945, 1962, 1989, 1991) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {DASHBOARD_DATA.map((item) => {
          const isSelected = selectedYear === item.year;
          return (
            <button
              key={item.year}
              id={`dash-tab-${item.year}`}
              onClick={() => setSelectedYear(item.year)}
              className={`relative flex flex-col p-4 rounded-xl border-2 transition-all cursor-pointer text-left ${
                isSelected
                  ? 'bg-[#1A202C] text-white border-[#FD7600] shadow-xl scale-[1.02]'
                  : 'bg-white text-[#1A202C] border-gray-200 hover:border-[#C9A84C] hover:bg-orange-50/40'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span
                  className={`text-2xl sm:text-3xl font-black font-display ${
                    isSelected ? 'text-[#FD7600]' : 'text-[#016E01]'
                  }`}
                >
                  {item.year}
                </span>
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider line-clamp-1 ${isSelected ? 'text-[#C9A84C]' : 'text-gray-600'}`}>
                {item.title}
              </span>
              <span className="text-[11px] opacity-75 line-clamp-1 mt-0.5">
                {item.tagline}
              </span>

              {isSelected && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A202C] border-r-2 border-b-2 border-[#FD7600] transform rotate-45"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Milestone Card & Metrics */}
      <div className="bg-white rounded-2xl border-2 border-[#C9A84C] p-6 sm:p-8 shadow-xl">
        {/* Top Highlight Banner */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#FD7600] text-white font-black text-sm rounded-lg shadow-xs">
                Ano de Análise: {currentData.year}
              </span>
              <span className="text-xs font-bold text-[#016E01] bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                {currentData.tagline}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1A202C] mt-2 font-display flex items-center gap-2">
              <span>{currentData.title}</span>
              <span>{currentData.emoji}</span>
            </h3>
          </div>

          {/* DEFCON Indicator */}
          <div className="flex items-center gap-3 bg-[#1A202C] text-white p-3 rounded-xl border border-gray-700 shadow-md">
            <AlertOctagon className="w-6 h-6 text-[#FD7600]" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-bold">
                Alerta de Guerra (Escala DEFCON)
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`px-2 py-0.5 text-xs font-black rounded ${getDefconColor(currentData.defconLevel)}`}>
                  DEFCON {currentData.defconLevel}
                </span>
                <span className="text-xs font-medium text-gray-200 truncate max-w-[200px]">
                  {currentData.tensionLabel}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          {/* Nuclear Stockpile USA */}
          <div className="p-4 rounded-xl bg-blue-50/70 border-2 border-blue-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-blue-900 mb-2">
              <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700"></span>
                EUA • Ogivas Nucleares
              </span>
              <span className="text-lg">🇺🇸 ☢️</span>
            </div>
            <div className="text-3xl font-black text-blue-950 font-display">
              {currentData.nuclearWarheadsUS.toLocaleString('pt-BR')}
              <span className="text-xs font-normal text-blue-800 ml-1.5 font-sans">ogivas ativas</span>
            </div>
            <div className="mt-2 text-[11px] text-blue-800/80 font-medium">
              Presidente: <strong className="text-blue-950">{currentData.keyLeaders.us}</strong>
            </div>
          </div>

          {/* Nuclear Stockpile USSR */}
          <div className="p-4 rounded-xl bg-red-50/70 border-2 border-red-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-red-900 mb-2">
              <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-700"></span>
                URSS • Ogivas Nucleares
              </span>
              <span className="text-lg">🚩 ☢️</span>
            </div>
            <div className="text-3xl font-black text-red-950 font-display">
              {currentData.nuclearWarheadsUSSR.toLocaleString('pt-BR')}
              <span className="text-xs font-normal text-red-800 ml-1.5 font-sans">ogivas ativas</span>
            </div>
            <div className="mt-2 text-[11px] text-red-800/80 font-medium">
              Líder Soviético: <strong className="text-red-950">{currentData.keyLeaders.ussr}</strong>
            </div>
          </div>

          {/* Geopolitical Strategy & Doctrine */}
          <div className="p-4 rounded-xl bg-amber-50/70 border-2 border-[#C9A84C]/50 flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#FD7600]" />
                Doutrina Predominante
              </span>
              <span className="text-lg">🏛️</span>
            </div>
            <div className="text-sm font-bold text-amber-950 leading-snug">
              {currentData.mainDoctrine}
            </div>
            <div className="mt-2 text-[11px] text-amber-900/80 font-medium">
              Equilíbrio Estratégico: <strong className="text-amber-950">Bipolaridade</strong>
            </div>
          </div>
        </div>

        {/* Narrative & Points for Exam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#016E01] flex items-center gap-1.5 mb-2">
              <BookOpen className="w-4 h-4" />
              Significado Histórico & Contexto Geopolítico
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
              {currentData.historicalSignificance}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FD7600] flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              Pontos-Chave para a Prova do 9º Ano
            </h4>
            <ul className="space-y-2">
              {currentData.bulletPoints.map((pt, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-gray-800 flex items-start gap-2 bg-orange-50/50 p-2.5 rounded-lg border border-orange-100">
                  <span className="font-bold text-[#FD7600]">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
