import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/historyData';
import { TimelineEvent, EpochYear } from '../types';
import { Clock, Filter, MapPin, Users, Lightbulb, ChevronRight, CheckCircle } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<EpochYear>(1962);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os 7 Marcos' },
    { id: 'politica', label: '🏛️ Diplomacia & Blocos' },
    { id: 'nuclear', label: '☢️ Corrida Nuclear' },
    { id: 'conflito', label: '🧊 Conflitos Regionais' },
    { id: 'espacial', label: '🚀 Corrida Espacial' },
    { id: 'desfecho', label: '🏛️ Desfecho Histórico' },
  ];

  const filteredEvents =
    filterCategory === 'all'
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((e) => e.category === filterCategory);

  const activeEvent: TimelineEvent =
    TIMELINE_DATA.find((e) => e.year === selectedYear) || TIMELINE_DATA[0];

  return (
    <section id="timeline" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-[#C9A84C]">
        <div>
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#016E01] mb-1">
            <Clock className="w-4 h-4" />
            <span>Sequência Cronológica Oficial (1945 a 1991)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A202C] font-display">
            Linha do Tempo da Guerra Fria
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-2xl">
            Navegue pelos 7 anos fundamentais definidos para o 9º Ano: 1945, 1949, 1959, 1962, 1975, 1989 e 1991.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-[#016E01] text-white shadow-xs'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#FD7600] hover:text-[#FD7600]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Interactive Timeline Track */}
      <div className="bg-white rounded-2xl border-2 border-[#C9A84C] p-6 sm:p-8 shadow-xl mb-8">
        <div className="relative pb-6 overflow-x-auto">
          {/* Central Connecting Gold Line */}
          <div className="absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-[#FD7600] via-[#C9A84C] to-[#016E01] z-0 rounded-full"></div>

          {/* Timeline Nodes */}
          <div className="flex justify-between items-start min-w-[700px] relative z-10 px-2">
            {TIMELINE_DATA.map((evt) => {
              const isSelected = selectedYear === evt.year;
              return (
                <button
                  key={evt.year}
                  id={`timeline-node-${evt.year}`}
                  onClick={() => setSelectedYear(evt.year)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-hidden"
                >
                  {/* Circle Node */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300 border-4 shadow-md ${
                      isSelected
                        ? 'bg-[#1A202C] text-white border-[#FD7600] scale-125 ring-4 ring-[#FD7600]/30'
                        : 'bg-white text-[#1A202C] border-[#C9A84C] group-hover:scale-110 group-hover:border-[#016E01]'
                    }`}
                  >
                    <span>{evt.emoji}</span>
                  </div>

                  {/* Year Tag */}
                  <span
                    className={`mt-3 text-sm sm:text-base font-black font-display transition-colors ${
                      isSelected ? 'text-[#FD7600]' : 'text-[#1A202C] group-hover:text-[#016E01]'
                    }`}
                  >
                    {evt.year}
                  </span>

                  {/* Short Label */}
                  <span className="text-[10px] uppercase font-bold text-gray-500 max-w-[90px] text-center leading-tight mt-0.5">
                    {evt.categoryLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Timeline Detail Display */}
        <div className="mt-6 pt-6 border-t-2 border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#1A202C] text-[#C9A84C] font-black text-sm rounded-lg font-mono">
                {activeEvent.year}
              </span>
              <span className="px-2.5 py-1 bg-[#016E01]/10 text-[#016E01] text-xs font-black uppercase tracking-wider rounded-md border border-[#016E01]/20">
                {activeEvent.categoryLabel}
              </span>
              <span className="text-xl">{activeEvent.emoji}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#1A202C] font-display">
              {activeEvent.title}
            </h3>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {activeEvent.fullDesc}
            </p>

            {/* Impact & Actors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-orange-50/70 border border-orange-200 rounded-xl p-3.5">
                <div className="text-xs font-black text-[#FD7600] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Impacto Histórico
                </div>
                <p className="text-xs text-gray-800 leading-snug">{activeEvent.impact}</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                <div className="text-xs font-black text-[#016E01] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Local & Principais Atores
                </div>
                <p className="text-xs text-gray-800 leading-snug font-medium">
                  {activeEvent.location} &bull; {activeEvent.actors.join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Teacher's Exam Tip Card (4 cols) */}
          <div className="lg:col-span-4 bg-[#016E01] text-white rounded-2xl p-5 shadow-lg border-2 border-[#C9A84C]">
            <div className="flex items-center gap-2 pb-2 border-b border-white/20 mb-3">
              <Lightbulb className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">
                Dica do Prof. Anderson Firmo
              </span>
            </div>

            <h4 className="text-sm font-bold text-white mb-2">
              Atenção para o Simulado do 9º Ano:
            </h4>

            <p className="text-xs leading-relaxed text-white/95 bg-black/20 p-3 rounded-xl border border-white/10 italic">
              "{activeEvent.examTip}"
            </p>

            <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80">
              <span>Capítulo A5</span>
              <span className="font-bold text-[#C9A84C]">História Contemporânea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
