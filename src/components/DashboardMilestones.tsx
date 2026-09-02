import React, { useState } from 'react';
import { DASHBOARD_DATA } from '../data/historyData';
import { DashboardMilestone } from '../types';
import { ShieldAlert, Users, Zap, CheckCircle2, Award, Flame, BarChart3, AlertOctagon } from 'lucide-react';

export const DashboardMilestones: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<1945 | 1962 | 1989 | 1991>(1962);

  const activeMilestone = DASHBOARD_DATA.find((m) => m.year === selectedYear) || DASHBOARD_DATA[1];

  // Helper for DEFCON color
  const getDefconBadge = (defcon: number) => {
    switch (defcon) {
      case 2:
        return {
          bg: 'bg-red-600 text-white animate-pulse',
          border: 'border-red-700',
          label: 'DEFCON 2 (ALERTA MÁXIMO NUCLEAR)',
          desc: 'Guerra Termonuclear Iminente - Prontidão das Forças em 15 minutos.',
        };
      case 4:
        return {
          bg: 'bg-amber-500 text-white',
          border: 'border-amber-600',
          label: 'DEFCON 4 (TENSÃO EM ASCENSÃO)',
          desc: 'Vigilância da Inteligência e Divisão de Zonas Estratégicas.',
        };
      case 5:
      default:
        return {
          bg: 'bg-emerald-600 text-white',
          border: 'border-emerald-700',
          label: 'DEFCON 5 (DESCOMPRESSÃO DIPLOMÁTICA)',
          desc: 'Prontidão de Paz / Fim dos Tratados Bipolares Ativos.',
        };
    }
  };

  const defconInfo = getDefconBadge(activeMilestone.defconLevel);

  return (
    <section id="dashboard" className="py-12 bg-[#FBFBFB] border-b border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD7600]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#016E01]">
                Painel Analítico de 4 Grandes Marcos
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C]">
              DADOS DO DASHBOARD: <span className="text-[#FD7600]">1945, 1962, 1989, 1991</span>
            </h2>
            <p className="text-sm font-serif italic text-[#1A202C]/80 mt-1">
              A evolução do Equilíbrio do Terror, dos estoques nucleares e das doutrinas políticas • Prof. Anderson Firmo
            </p>
          </div>

          {/* Quick Year Selector Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#1A202C] rounded-lg border border-[#C9A84C]/40 shadow-xs">
            {([1945, 1962, 1989, 1991] as const).map((year) => {
              const isSelected = selectedYear === year;
              return (
                <button
                  key={year}
                  id={`btn-dash-year-${year}`}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3.5 py-2 rounded-md font-editorial text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#FD7600] text-white shadow-md scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{year}</span>
                  <span className="text-xs">
                    {year === 1945 ? '🏛️' : year === 1962 ? '☢️' : year === 1989 ? '🧊' : '🚀'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Milestone Identity & High-Level Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Year Spotlight Card */}
            <div className="bg-[#1A202C] text-white p-6 rounded-xl border-t-4 border-[#FD7600] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 text-white/5 font-editorial font-black text-8xl pointer-events-none select-none">
                {activeMilestone.year}
              </div>

              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="px-3 py-1 rounded bg-[#FD7600] text-white font-black text-sm uppercase tracking-widest">
                  Ano {activeMilestone.year}
                </span>
                <span className="text-3xl">{activeMilestone.emoji}</span>
              </div>

              <h3 className="font-editorial text-2xl font-bold text-white mb-1.5 relative z-10">
                {activeMilestone.title}
              </h3>
              <p className="text-xs text-[#C9A84C] font-serif italic mb-4 relative z-10">
                "{activeMilestone.tagline}"
              </p>

              {/* DEFCON Level Badge */}
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 mb-4 relative z-10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#FD7600]" />
                    Índice de Prontidão Tática
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${defconInfo.bg}`}>
                    {defconInfo.label}
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-tight">
                  {defconInfo.desc}
                </p>
              </div>

              {/* Leaders on Stage */}
              <div className="border-t border-white/10 pt-3 relative z-10">
                <p className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  Líderes no Poder
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#1E3A8A]/40 border border-[#3B82F6]/30">
                    <span className="text-[9px] text-[#93C5FD] block uppercase font-bold">EUA</span>
                    <strong className="text-white font-medium">{activeMilestone.keyLeaders.us}</strong>
                  </div>
                  <div className="p-2 rounded bg-[#991B1B]/40 border border-[#EF4444]/30">
                    <span className="text-[9px] text-[#FCA5A5] block uppercase font-bold">URSS</span>
                    <strong className="text-white font-medium">{activeMilestone.keyLeaders.ussr}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick 9th Grade Concept Box */}
            <div className="bg-white p-5 rounded-xl border-2 border-[#016E01] shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#016E01]" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#016E01]">
                  Foco para Provas & Simulados
                </h4>
              </div>
              <p className="text-xs text-[#1A202C] leading-relaxed">
                {activeMilestone.historicalSignificance}
              </p>
            </div>
          </div>

          {/* Right Column: Comparative Metrics, Arsenal Bars & Historical Points */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Nuclear Arsenal Comparison Section */}
            <div className="bg-white p-6 rounded-xl border-2 border-[#C9A84C]/40 shadow-xs">
              <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-gray-200 gap-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#FD7600]" />
                  <h4 className="font-editorial font-black text-lg text-[#1A202C]">
                    Estimativa de Ogivas Nucleares Ativas ({activeMilestone.year})
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#FD7600] bg-orange-50 px-2.5 py-1 rounded border border-[#FD7600]/20">
                  Doutrina MAD: Destruição Mútua Assegurada
                </span>
              </div>

              {/* Arsenal Visual Comparison Bars */}
              <div className="space-y-4 mb-4">
                {/* USA Bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span className="flex items-center gap-1.5 text-blue-900">
                      <span className="w-3 h-3 rounded-xs bg-[#1E3A8A]"></span>
                      ESTADOS UNIDOS (EUA)
                    </span>
                    <span className="font-mono text-sm text-[#1E3A8A]">
                      {activeMilestone.nuclearWarheadsUS.toLocaleString('pt-BR')} ogivas
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.max(
                          2,
                          Math.min(100, (activeMilestone.nuclearWarheadsUS / 38000) * 100)
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* USSR Bar */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span className="flex items-center gap-1.5 text-red-900">
                      <span className="w-3 h-3 rounded-xs bg-[#991B1B]"></span>
                      UNIÃO SOVIÉTICA (URSS)
                    </span>
                    <span className="font-mono text-sm text-[#991B1B]">
                      {activeMilestone.nuclearWarheadsUSSR.toLocaleString('pt-BR')} ogivas
                    </span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-800 rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.max(
                          2,
                          Math.min(100, (activeMilestone.nuclearWarheadsUSSR / 38000) * 100)
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#FBFBFB] rounded-lg border border-gray-200 text-xs text-gray-700 flex items-start gap-2">
                <AlertOctagon className="w-4 h-4 text-[#FD7600] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1A202C]">Leitura Histórica do Arsenal: </strong>
                  {activeMilestone.year === 1945 &&
                    'Os EUA detinham o monopólio nuclear após os bombardeios de Hiroshima e Nagasaki. A URSS ainda não possuía a bomba (conquistada em 1949).'}
                  {activeMilestone.year === 1962 &&
                    'Embora os EUA tivessem maior volume total, a proximidade dos mísseis soviéticos em Cuba anulava o tempo de reação dos radares de Washington.'}
                  {activeMilestone.year === 1989 &&
                    'A URSS acumulou o maior número absoluto de ogivas da história (mais de 37 mil), mas sua economia entrou em colapso financeiro insustentável.'}
                  {activeMilestone.year === 1991 &&
                    'Com a dissolução da URSS, o imenso arsenal soviético foi herdado pela Federação Russa mediante tratados de não proliferação (Tratado de Lisboa).'}
                </div>
              </div>
            </div>

            {/* Key Takeaways & Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#016E01] mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#FD7600]" />
                  Doutrina & Conjuntura
                </h4>
                <p className="text-xs text-[#1A202C] font-semibold mb-2">
                  {activeMilestone.mainDoctrine}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {activeMilestone.geopoliticalState}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#FD7600] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#016E01]" />
                  Fatos-Chave do Marco
                </h4>
                <ul className="space-y-1.5">
                  {activeMilestone.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-xs text-[#1A202C]/85 flex items-start gap-1.5">
                      <span className="text-[#016E01] font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
