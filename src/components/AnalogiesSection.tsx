import React, { useState } from 'react';
import { MANDATORY_ANALOGIES } from '../data/historyData';
import { Sparkles, Crown, Zap, AlertTriangle, BookOpen, Quote, CheckCircle2 } from 'lucide-react';

export const AnalogiesSection: React.FC = () => {
  const [activeAnalogyId, setActiveAnalogyId] = useState<'xadrez' | 'carrinho_choque' | 'roleta_russa'>('xadrez');

  const currentAnalogy =
    MANDATORY_ANALOGIES.find((a) => a.id === activeAnalogyId) || MANDATORY_ANALOGIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'xadrez':
        return <Crown className="w-5 h-5 text-[#FD7600]" />;
      case 'carrinho_choque':
        return <Zap className="w-5 h-5 text-[#016E01]" />;
      case 'roleta_russa':
      default:
        return <AlertTriangle className="w-5 h-5 text-[#C9A84C]" />;
    }
  };

  return (
    <section id="analogias" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FD7600] mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Recursos Didáticos de Compreensão</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            As 3 Grandes Analogias Obrigatórias
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Metáforas visuais e conceituais desenvolvidas pelo Prof. Anderson Firmo para decifrar a lógica da Guerra Fria no 9º Ano.
          </p>
        </div>

        {/* Badge */}
        <div className="mt-4 md:mt-0 px-3 py-1.5 bg-[#FD7600]/10 border border-[#FD7600]/30 rounded-xl text-xs font-extrabold text-[#FD7600]">
          3 Modelos Mentais Essenciais
        </div>
      </div>

      {/* 3 Analogies Nav Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {MANDATORY_ANALOGIES.map((item) => {
          const isSelected = activeAnalogyId === item.id;
          return (
            <button
              key={item.id}
              id={`analogy-card-${item.id}`}
              onClick={() => setActiveAnalogyId(item.id)}
              className={`flex flex-col p-5 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                isSelected
                  ? 'bg-[#1A202C] text-white border-[#FD7600] shadow-xl scale-[1.02]'
                  : 'bg-white text-[#1A202C] border-gray-200 hover:border-[#C9A84C] hover:bg-orange-50/30'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-3xl">{item.emoji}</span>
                <span
                  className={`p-2 rounded-xl ${
                    isSelected ? 'bg-white/10' : 'bg-gray-100'
                  }`}
                >
                  {getIcon(item.id)}
                </span>
              </div>

              <span
                className={`text-xs font-black uppercase tracking-wider ${
                  isSelected ? 'text-[#C9A84C]' : 'text-[#016E01]'
                }`}
              >
                {item.concept}
              </span>

              <h3 className="text-lg font-black font-display mt-1 leading-snug">
                {item.shortName}
              </h3>

              <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${isSelected ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.quote}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Analogy Full Feature Deep Dive */}
      <div className="bg-white rounded-3xl border-3 border-[#C9A84C] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Background Accent Watermark */}
        <div className="absolute right-4 -bottom-8 text-9xl select-none opacity-5 pointer-events-none font-display">
          {currentAnalogy.emoji}
        </div>

        {/* Top Header & Quote */}
        <div className="pb-6 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-3xl">{currentAnalogy.emoji}</span>
            <span className="px-3 py-1 bg-[#FD7600] text-white text-xs font-black uppercase tracking-wider rounded-lg">
              Analogia Obrigatória
            </span>
            <span className="text-xs font-bold text-[#016E01] bg-green-50 px-3 py-1 rounded-lg border border-green-200">
              {currentAnalogy.concept}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#1A202C] font-display mt-2">
            {currentAnalogy.title}
          </h3>

          <div className="mt-4 p-4 rounded-xl bg-orange-50/80 border-l-4 border-[#FD7600] flex items-start gap-3">
            <Quote className="w-5 h-5 text-[#FD7600] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base font-serif italic text-gray-800 font-medium">
              {currentAnalogy.quote}
            </p>
          </div>
        </div>

        {/* Detailed Mechanics & Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#016E01] flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Explicação Histórica & Conceitual
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {currentAnalogy.explanation}
            </p>

            <div className="pt-2">
              <h5 className="text-xs font-black uppercase tracking-widest text-[#1A202C] mb-3">
                Como essa lógica operava na prática:
              </h5>
              <div className="space-y-2.5">
                {currentAnalogy.howItWorked.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FD7600] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Classroom Connection / Exam Synthesis (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#1A202C] text-white rounded-2xl p-6 border-2 border-[#C9A84C]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-700 mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">
                  Aplicação Pedagógica
                </span>
                <span className="text-xs font-bold bg-[#016E01] text-white px-2 py-0.5 rounded">
                  9º Ano
                </span>
              </div>

              <h4 className="text-base font-bold text-white mb-2">
                Conexão com a Sala de Aula:
              </h4>

              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                {currentAnalogy.classroomConnection}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between text-xs">
              <div className="text-gray-400">
                Prof. <strong className="text-white">Anderson Firmo</strong>
              </div>
              <div className="font-extrabold text-[#FD7600]">
                Escola Parque Ipiranga
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
