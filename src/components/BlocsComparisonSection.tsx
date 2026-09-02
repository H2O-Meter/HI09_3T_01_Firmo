import React, { useState } from 'react';
import { BLOCS_DATA } from '../data/historyData';
import { Layers, Shield, DollarSign, Eye, Globe2, Check, ArrowRight } from 'lucide-react';

export const BlocsComparisonSection: React.FC = () => {
  const [selectedBloc, setSelectedBloc] = useState<'both' | 'capitalista' | 'socialista'>('both');

  const { capitalista, socialista } = BLOCS_DATA;

  return (
    <section id="blocos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#016E01] mb-1">
            <Layers className="w-4 h-4" />
            <span>Mundo Bipolar • Doutrinas & Alianças</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            A Bipolaridade: Capitalismo vs Socialismo
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            A Cortina de Ferro institucionalizada: Plano Marshall x COMECON, OTAN x Pacto de Varsóvia e a disputa ideológica global.
          </p>
        </div>

        {/* Filter View Selector */}
        <div className="mt-4 md:mt-0 flex items-center bg-white p-1 rounded-xl border border-gray-300 shadow-xs">
          <button
            onClick={() => setSelectedBloc('both')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              selectedBloc === 'both' ? 'bg-[#1A202C] text-white shadow-xs' : 'text-gray-600 hover:text-black'
            }`}
          >
            Lado a Lado
          </button>
          <button
            onClick={() => setSelectedBloc('capitalista')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              selectedBloc === 'capitalista' ? 'bg-[#1E3A8A] text-white shadow-xs' : 'text-gray-600 hover:text-blue-900'
            }`}
          >
            🇺🇸 Bloco EUA
          </button>
          <button
            onClick={() => setSelectedBloc('socialista')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              selectedBloc === 'socialista' ? 'bg-[#991B1B] text-white shadow-xs' : 'text-gray-600 hover:text-red-900'
            }`}
          >
            🚩 Bloco URSS
          </button>
        </div>
      </div>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bloco Capitalista (EUA) */}
        {(selectedBloc === 'both' || selectedBloc === 'capitalista') && (
          <div className="bg-white rounded-3xl border-3 border-blue-600 p-6 sm:p-8 shadow-xl relative flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md">
                    🇺🇸
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-700">
                      Superpotência Ocidental
                    </span>
                    <h3 className="text-xl font-black text-blue-950 font-display">
                      {capitalista.name}
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-lg border border-blue-200">
                  Líder: {capitalista.leader}
                </span>
              </div>

              {/* Ideology Badge */}
              <div className="my-4 p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs">
                <strong className="text-blue-900 block uppercase tracking-wider font-extrabold mb-0.5">
                  Ideologia Central:
                </strong>
                <span className="text-blue-950 font-semibold">{capitalista.ideology}</span>
              </div>

              {/* Economic & Military Pillars */}
              <div className="space-y-4 my-4">
                {/* Economic Plan */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-[#FD7600] uppercase tracking-wider mb-1">
                    <DollarSign className="w-4 h-4" />
                    Plano Econômico: {capitalista.economicPlan.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {capitalista.economicPlan.desc}
                  </p>
                </div>

                {/* Military Alliance */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-blue-800 uppercase tracking-wider mb-1">
                    <Shield className="w-4 h-4" />
                    Aliança Militar: {capitalista.militaryAlliance.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {capitalista.militaryAlliance.desc}
                  </p>
                </div>

                {/* Intelligence Agency */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-[#016E01] uppercase tracking-wider mb-1">
                    <Eye className="w-4 h-4" />
                    Agência de Inteligência: {capitalista.intelligenceAgency.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {capitalista.intelligenceAgency.role}
                  </p>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 mb-2">
                  Características Estruturais:
                </h4>
                <ul className="space-y-2">
                  {capitalista.keyFeatures.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Propaganda Slogan */}
            <div className="mt-6 pt-3 border-t border-blue-100 text-xs text-blue-900 bg-blue-50/50 p-3 rounded-xl italic">
              <strong>Foco da Propaganda:</strong> "{capitalista.propagandaFocus}"
            </div>
          </div>
        )}

        {/* Bloco Socialista (URSS) */}
        {(selectedBloc === 'both' || selectedBloc === 'socialista') && (
          <div className="bg-white rounded-3xl border-3 border-red-600 p-6 sm:p-8 shadow-xl relative flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-900 text-white flex items-center justify-center font-black text-xl shadow-md">
                    🚩
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-700">
                      Superpotência Oriental
                    </span>
                    <h3 className="text-xl font-black text-red-950 font-display">
                      {socialista.name}
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 bg-red-50 text-red-700 font-bold text-xs rounded-lg border border-red-200">
                  Líder: {socialista.leader}
                </span>
              </div>

              {/* Ideology Badge */}
              <div className="my-4 p-3 bg-red-50/70 rounded-xl border border-red-200 text-xs">
                <strong className="text-red-900 block uppercase tracking-wider font-extrabold mb-0.5">
                  Ideologia Central:
                </strong>
                <span className="text-red-950 font-semibold">{socialista.ideology}</span>
              </div>

              {/* Economic & Military Pillars */}
              <div className="space-y-4 my-4">
                {/* Economic Plan */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-[#FD7600] uppercase tracking-wider mb-1">
                    <DollarSign className="w-4 h-4" />
                    Plano Econômico: {socialista.economicPlan.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {socialista.economicPlan.desc}
                  </p>
                </div>

                {/* Military Alliance */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-red-800 uppercase tracking-wider mb-1">
                    <Shield className="w-4 h-4" />
                    Aliança Militar: {socialista.militaryAlliance.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {socialista.militaryAlliance.desc}
                  </p>
                </div>

                {/* Intelligence Agency */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-xs font-black text-[#016E01] uppercase tracking-wider mb-1">
                    <Eye className="w-4 h-4" />
                    Agência de Inteligência: {socialista.intelligenceAgency.name}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {socialista.intelligenceAgency.role}
                  </p>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-xs font-black uppercase tracking-wider text-gray-700 mb-2">
                  Características Estruturais:
                </h4>
                <ul className="space-y-2">
                  {socialista.keyFeatures.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Propaganda Slogan */}
            <div className="mt-6 pt-3 border-t border-red-100 text-xs text-red-900 bg-red-50/50 p-3 rounded-xl italic">
              <strong>Foco da Propaganda:</strong> "{socialista.propagandaFocus}"
            </div>
          </div>
        )}
      </div>

      {/* Summary Pedagogical Card */}
      <div className="mt-8 bg-[#1A202C] text-white p-6 rounded-2xl border-2 border-[#C9A84C] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#016E01] text-white text-2xl font-black">
            🏛️
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider">
              Síntese para o 9º Ano • Prof. Anderson Firmo
            </h4>
            <p className="text-xs text-gray-300 mt-0.5 max-w-2xl">
              A bipolaridade não era apenas bélica: tratava-se de dois projetos civilizatórios completos que disputavam cada recanto do planeta através da economia, da cultura, do esporte e da tecnologia.
            </p>
          </div>
        </div>

        <div className="px-4 py-2 bg-[#FD7600] text-white rounded-xl text-xs font-black tracking-wider uppercase shrink-0 shadow-md">
          Capítulo A5
        </div>
      </div>
    </section>
  );
};
