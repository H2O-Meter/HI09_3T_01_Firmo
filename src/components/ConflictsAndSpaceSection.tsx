import React, { useState } from 'react';
import { PROXY_CONFLICTS, SPACE_RACE_STEPS } from '../data/historyData';
import { Rocket, ShieldAlert, Globe, Compass, ArrowRight, Award, Zap, CheckCircle2 } from 'lucide-react';

export const ConflictsAndSpaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conflitos' | 'espacial' | 'distensao'>('conflitos');
  const [selectedConflict, setSelectedConflict] = useState<string>('coreia');

  const currentConflict =
    PROXY_CONFLICTS.find((c) => c.id === selectedConflict) || PROXY_CONFLICTS[0];

  return (
    <section id="conflitos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FD7600] mb-1">
            <Rocket className="w-4 h-4" />
            <span>Guerras por Procuração & A Conquista do Cosmos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            Conflitos Indiretos & Corrida Espacial
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Quando as superpotências não podiam se chocar diretamente, duelavam nas selvas da Ásia, nas ilhas do Caribe e na órbita da Terra.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="mt-4 md:mt-0 flex items-center bg-white p-1 rounded-xl border border-gray-300 shadow-xs">
          <button
            onClick={() => setActiveTab('conflitos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'conflitos' ? 'bg-[#FD7600] text-white shadow-xs' : 'text-gray-600 hover:text-black'
            }`}
          >
            🧊 Conflitos & Crises
          </button>
          <button
            onClick={() => setActiveTab('espacial')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'espacial' ? 'bg-[#016E01] text-white shadow-xs' : 'text-gray-600 hover:text-green-800'
            }`}
          >
            🚀 Corrida Espacial
          </button>
          <button
            onClick={() => setActiveTab('distensao')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              activeTab === 'distensao' ? 'bg-[#1A202C] text-white shadow-xs' : 'text-gray-600 hover:text-black'
            }`}
          >
            🏛️ Distensão (Détente)
          </button>
        </div>
      </div>

      {/* Tab 1: Conflitos Regionais (Coreia, Vietnã, Cuba, Crise dos Mísseis) */}
      {activeTab === 'conflitos' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Conflict Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PROXY_CONFLICTS.map((conf) => {
              const isSelected = selectedConflict === conf.id;
              return (
                <button
                  key={conf.id}
                  onClick={() => setSelectedConflict(conf.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A202C] text-white border-[#FD7600] shadow-lg scale-[1.02]'
                      : 'bg-white text-[#1A202C] border-gray-200 hover:border-[#C9A84C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xl">{conf.iconEmoji}</span>
                    <span className="text-[10px] font-mono font-bold text-[#C9A84C]">
                      {conf.period}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold font-display line-clamp-1">
                    {conf.name}
                  </h4>
                  <span className="text-[11px] opacity-75 line-clamp-1 mt-0.5">
                    {conf.location}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Conflict Detailed Card */}
          <div className="bg-white rounded-3xl border-3 border-[#C9A84C] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentConflict.iconEmoji}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1A202C] font-display">
                    {currentConflict.name}
                  </h3>
                  <span className="text-xs font-bold text-[#FD7600]">
                    {currentConflict.period} &bull; {currentConflict.location}
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold rounded-lg border border-gray-300 self-start sm:self-auto">
                Guerra por Procuração (Proxy War)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">
                    Beligerantes & Forças em Jogo:
                  </h5>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    {currentConflict.belligerents}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-black uppercase tracking-wider text-[#016E01] mb-1">
                    Resumo do Conflito:
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentConflict.summary}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="bg-orange-50/80 border-2 border-orange-200 rounded-2xl p-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-[#FD7600] flex items-center gap-1.5 mb-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    Por que foi uma Guerra Indireta?
                  </h5>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {currentConflict.whyIndirect}
                  </p>
                </div>

                <div className="bg-green-50/80 border-2 border-green-200 rounded-2xl p-4">
                  <h5 className="text-xs font-black uppercase tracking-wider text-[#016E01] flex items-center gap-1.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Desfecho & Legado:
                  </h5>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {currentConflict.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Corrida Espacial (Sputnik, Laika, Gagarin, Apollo 11, Apollo-Soyuz) */}
      {activeTab === 'espacial' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl border-3 border-[#016E01] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#016E01] text-white flex items-center justify-center text-2xl shadow-md">
                  🚀
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#FD7600]">
                    Prestígio Científico & Propagandístico
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1A202C] font-display">
                    A Corrida Espacial: Do Sputnik à Lua
                  </h3>
                </div>
              </div>

              <span className="hidden sm:inline px-3 py-1 bg-[#FD7600] text-white text-xs font-black rounded-lg">
                1957 a 1975
              </span>
            </div>

            {/* Timeline Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {SPACE_RACE_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border-2 flex flex-col justify-between ${
                    step.winner === 'urss'
                      ? 'bg-red-50/60 border-red-200'
                      : step.winner === 'eua'
                      ? 'bg-blue-50/60 border-blue-200'
                      : 'bg-amber-50/60 border-[#C9A84C]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-black text-[#1A202C] bg-white px-2 py-0.5 rounded shadow-xs border">
                        {step.year}
                      </span>
                      <span className="text-xs font-bold">
                        {step.winner === 'urss' ? '🚩 URSS' : step.winner === 'eua' ? '🇺🇸 EUA' : '🤝 COOP'}
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-[#1A202C] font-display mb-1">
                      {step.title}
                    </h4>

                    <p className="text-xs text-gray-700 leading-snug">
                      {step.achievement}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-black/10 text-[11px] text-gray-600 italic">
                    <strong>Impacto:</strong> {step.significance}
                  </div>
                </div>
              ))}
            </div>

            {/* Space Race Takeaway */}
            <div className="mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 leading-relaxed">
              <strong className="text-[#016E01] font-bold">Conexão Estratégica para a Prova:</strong> A corrida espacial estava diretamente atrelada ao desenvolvimento de <em>Mísseis Balísticos Intercontinentais (ICBMs)</em>. Foguetes capazes de colocar um satélite ou um ser humano em órbita eram os mesmos capazes de transportar ogivas nucleares a qualquer cidade do planeta.
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Distensão (Détente, SALT, Diplomacia) */}
      {activeTab === 'distensao' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl border-3 border-[#C9A84C] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-200 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#1A202C] text-white flex items-center justify-center text-2xl shadow-md">
                🏛️
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#016E01]">
                  Anos 1970 • O Alívio Temporário
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#1A202C] font-display">
                  A Distensão (Détente) e os Tratados SALT
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-orange-50/70 border border-orange-200">
                <h4 className="text-sm font-black text-[#FD7600] uppercase tracking-wider mb-2">
                  Tratados SALT I e SALT II
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  <em>Strategic Arms Limitation Talks</em>: Acordos diplomáticos históricos entre Richard Nixon e Leonid Brezhnev para congelar o número de lançadores de mísseis balísticos e limitar sistemas antimísseis (Tratado ABM).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-green-50/70 border border-green-200">
                <h4 className="text-sm font-black text-[#016E01] uppercase tracking-wider mb-2">
                  Acordos de Helsinque (1975)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Reconhecimento das fronteiras europeias pós-guerra e compromisso mútuo de respeito aos direitos humanos, autodeterminação dos povos e cooperação científica e econômica entre os blocos.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-[#C9A84C]">
                <h4 className="text-sm font-black text-[#C9A84C] uppercase tracking-wider mb-2">
                  O "Telefone Vermelho"
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Canal de comunicação direta (teletipo criptografado) instalado entre a Casa Branca e o Kremlin logo após a Crise dos Mísseis de 1962 para evitar guerras nucleares acidentais por falhas de inteligência.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
