import React, { useState } from 'react';
import { PROXY_CONFLICTS, SPACE_RACE_STEPS } from '../data/historyData';
import { ConflictCase } from '../types';
import { Rocket, Flame, MapPin, Globe, Shield, ChevronRight, Award, Compass, Sparkles } from 'lucide-react';

export const ConflictsAndSpace: React.FC = () => {
  const [selectedConflictId, setSelectedConflictId] = useState<string>('vietna');
  const [activeSubTab, setActiveSubTab] = useState<'conflitos' | 'espacial' | 'distensao'>('conflitos');

  const activeConflict =
    PROXY_CONFLICTS.find((c) => c.id === selectedConflictId) || PROXY_CONFLICTS[1];

  return (
    <section id="conflitos" className="py-12 bg-[#FBFBFB] border-b border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD7600]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#016E01]">
                Conflitos Regionais & Supremacia Tecnológica
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C]">
              GUERRAS POR PROCURAÇÃO & <span className="text-[#016E01]">CORRIDA ESPACIAL</span>
            </h2>
            <p className="text-sm font-serif italic text-[#1A202C]/80 mt-1">
              Coreia, Vietnã, Cuba, Sputnik, Apollo 11 e a Distensão (Détente) • Prof. Anderson Firmo
            </p>
          </div>

          {/* Sub-tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#C9A84C]/40 rounded-lg shadow-xs">
            <button
              onClick={() => setActiveSubTab('conflitos')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeSubTab === 'conflitos'
                  ? 'bg-[#1A202C] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>🧊 Guerras por Procuração</span>
            </button>
            <button
              onClick={() => setActiveSubTab('espacial')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeSubTab === 'espacial'
                  ? 'bg-[#FD7600] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>🚀 Corrida Espacial</span>
            </button>
            <button
              onClick={() => setActiveSubTab('distensao')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                activeSubTab === 'distensao'
                  ? 'bg-[#016E01] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>🏛️ Détente & Fim</span>
            </button>
          </div>
        </div>

        {/* View 1: Guerras por Procuração */}
        {activeSubTab === 'conflitos' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Conflict Selectors */}
            <div className="lg:col-span-4 space-y-3">
              {PROXY_CONFLICTS.map((conflict) => {
                const isSelected = selectedConflictId === conflict.id;
                return (
                  <button
                    key={conflict.id}
                    id={`btn-conflict-${conflict.id}`}
                    onClick={() => setSelectedConflictId(conflict.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all border-2 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#FD7600] shadow-md ring-2 ring-[#FD7600]/20'
                        : 'bg-white/70 border-gray-200 hover:border-[#C9A84C] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{conflict.iconEmoji}</span>
                      <div>
                        <h4 className="font-editorial font-bold text-sm text-[#1A202C]">
                          {conflict.name}
                        </h4>
                        <span className="text-[11px] font-bold text-[#016E01]">
                          {conflict.period}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${isSelected ? 'text-[#FD7600] translate-x-1' : 'text-gray-300'}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Conflict Dossier */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#C9A84C]/50 shadow-md">
              <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-gray-200 gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{activeConflict.iconEmoji}</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FD7600]">
                      Estudo de Caso • 9º Ano
                    </span>
                    <h3 className="font-editorial text-2xl font-black text-[#1A202C]">
                      {activeConflict.name} ({activeConflict.period})
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-md border">
                  <MapPin className="w-3.5 h-3.5 text-[#016E01]" />
                  <span>{activeConflict.location}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-gray-800">
                <div className="p-3.5 bg-gray-50 rounded-lg border border-gray-200">
                  <strong className="text-[#1A202C] block uppercase font-bold text-[10px] mb-1">
                    Beligerantes & Alianças
                  </strong>
                  <p>{activeConflict.belligerents}</p>
                </div>

                <div className="p-3.5 bg-white rounded-lg border-l-4 border-[#016E01] shadow-2xs">
                  <strong className="text-[#016E01] block uppercase font-bold text-[10px] mb-1">
                    Resumo do Conflito
                  </strong>
                  <p className="leading-relaxed text-gray-700">{activeConflict.summary}</p>
                </div>

                <div className="p-3.5 bg-orange-50/80 rounded-lg border-l-4 border-[#FD7600]">
                  <strong className="text-[#FD7600] block uppercase font-bold text-[10px] mb-1">
                    Por que foi uma "Guerra por Procuração" (Proxy War)?
                  </strong>
                  <p className="leading-relaxed text-gray-800">{activeConflict.whyIndirect}</p>
                </div>

                <div className="p-3.5 bg-[#1A202C] text-white rounded-lg">
                  <strong className="text-[#C9A84C] block uppercase font-bold text-[10px] mb-1">
                    Desfecho & Legado Geopolítico
                  </strong>
                  <p className="leading-relaxed text-gray-200">{activeConflict.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Corrida Espacial */}
        {activeSubTab === 'espacial' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#1A202C] via-[#016E01] to-[#1A202C] text-white p-6 rounded-2xl border-2 border-[#C9A84C] shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">
                  A Fronteira Cósmica da Guerra Fria
                </span>
                <h3 className="font-editorial text-2xl font-black text-white mt-1">
                  Da Órbita Terrestre ao Solo Lunar (1957 – 1975)
                </h3>
                <p className="text-xs text-gray-200 mt-1 max-w-2xl font-serif italic">
                  Conquistar o espaço não era apenas um feito científico, mas a demonstração de que a tecnologia de foguetes podia disparar ogivas nucleares em qualquer ponto do globo em menos de 30 minutos.
                </p>
              </div>
              <div className="text-5xl">🚀</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SPACE_RACE_STEPS.map((step, idx) => {
                const isUrss = step.winner === 'urss';
                const isEua = step.winner === 'eua';
                return (
                  <div
                    key={idx}
                    className={`bg-white p-5 rounded-xl border-2 shadow-xs flex flex-col justify-between ${
                      isUrss
                        ? 'border-red-600/60 hover:border-red-700'
                        : isEua
                        ? 'border-blue-600/60 hover:border-blue-700'
                        : 'border-[#016E01]/60 hover:border-[#016E01]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-editorial font-black text-base text-[#1A202C]">
                          {step.year}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            isUrss
                              ? 'bg-red-100 text-red-800'
                              : isEua
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {step.winnerName}
                        </span>
                      </div>

                      <h4 className="font-editorial font-bold text-sm text-[#1A202C] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                        {step.achievement}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-lg">
                      <strong className="text-[#1A202C] block mb-0.5">Impacto Estratégico:</strong>
                      {step.significance}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* View 3: Détente, Queda do Muro e Dissolução */}
        {activeSubTab === 'distensao' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-[#C9A84C] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🕊️</span>
                  <h4 className="font-editorial font-bold text-base text-[#1A202C]">
                    1. A Distensão (Détente & SALT)
                  </h4>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Durante as décadas de 1970, liderados por Richard Nixon e Leonid Brejnev, as superpotências assinaram os Tratados SALT I e SALT II (Tratados de Limitação de Armas Estratégicas).
                </p>
                <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 border border-amber-200">
                  <strong>Objetivo:</strong> Congelar o número de lançadores de mísseis balísticos e evitar a bancarrota econômica por gastos militares exorbitantes.
                </div>
              </div>
              <span className="mt-4 text-[10px] font-bold text-[#C9A84C] uppercase">
                Período: 1969 – 1979
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-[#016E01] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🧊</span>
                  <h4 className="font-editorial font-bold text-base text-[#1A202C]">
                    2. Queda do Muro de Berlim (1989)
                  </h4>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Em 9 de novembro de 1989, após meses de protestos pacíficos e a recusa de Gorbachev em usar tanques soviéticos, o muro foi demolido pelos cidadãos de Berlim.
                </p>
                <div className="p-3 bg-green-50 rounded-lg text-xs text-[#016E01] border border-green-200">
                  <strong>Significado:</strong> Fim físico e simbólico da Cortina de Ferro e início da reunificação pacífica da Alemanha (outubro de 1990).
                </div>
              </div>
              <span className="mt-4 text-[10px] font-bold text-[#016E01] uppercase">
                9 de Novembro de 1989
              </span>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-[#FD7600] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏛️</span>
                  <h4 className="font-editorial font-bold text-base text-[#1A202C]">
                    3. Dissolução da URSS (1991)
                  </h4>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  As reformas da Perestroika (abertura econômica) e Glasnost (transparência política) aceleraram os movimentos nacionalistas nas repúblicas. A URSS foi formalmente extinta em 25 de dezembro de 1991.
                </p>
                <div className="p-3 bg-orange-50 rounded-lg text-xs text-[#FD7600] border border-orange-200">
                  <strong>Conclusão:</strong> Encerramento oficial da Guerra Fria e emergência dos EUA como única superpotência global (Nova Ordem Mundial).
                </div>
              </div>
              <span className="mt-4 text-[10px] font-bold text-[#FD7600] uppercase">
                25 de Dezembro de 1991
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
