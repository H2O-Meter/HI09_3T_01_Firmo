import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/historyData';
import { TimelineEvent, EpochYear } from '../types';
import { Clock, Calendar, MapPin, Users, Lightbulb, ChevronRight, Filter, BookOpen } from 'lucide-react';

export const TimelineInteractive: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<EpochYear>(1962);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeModalEvent, setActiveModalEvent] = useState<TimelineEvent | null>(null);

  const filteredEvents =
    filterCategory === 'all'
      ? TIMELINE_DATA
      : TIMELINE_DATA.filter((e) => e.category === filterCategory);

  const selectedEvent = TIMELINE_DATA.find((e) => e.year === selectedYear) || TIMELINE_DATA[3];

  return (
    <section id="timeline" className="py-12 bg-white border-b border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#016E01]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD7600]">
                Cronologia Histórica Completa
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C]">
              LINHA DO TEMPO: <span className="text-[#016E01]">1945 a 1991</span>
            </h2>
            <p className="text-sm font-serif italic text-[#1A202C]/80 mt-1">
              Sete momentos decisivos que transformaram a geopolítica mundial • 9º Ano / Prof. Anderson Firmo
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#1A202C] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos (7 Marcos)
            </button>
            <button
              onClick={() => setFilterCategory('nuclear')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filterCategory === 'nuclear'
                  ? 'bg-[#FD7600] text-white shadow-xs'
                  : 'bg-orange-50 text-[#FD7600] hover:bg-orange-100'
              }`}
            >
              <span>☢️ Nuclear</span>
            </button>
            <button
              onClick={() => setFilterCategory('conflito')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filterCategory === 'conflito'
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              <span>🧊 Conflitos</span>
            </button>
            <button
              onClick={() => setFilterCategory('espacial')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                filterCategory === 'espacial'
                  ? 'bg-[#016E01] text-white shadow-xs'
                  : 'bg-green-50 text-[#016E01] hover:bg-green-100'
              }`}
            >
              <span>🚀 Espaço</span>
            </button>
          </div>
        </div>

        {/* Horizontal Visual Timeline Bar (Editorial Stepper) */}
        <div className="bg-[#FBFBFB] p-5 sm:p-6 rounded-2xl border-2 border-[#C9A84C]/40 shadow-xs mb-8 overflow-x-auto">
          <div className="min-w-[650px] flex items-center justify-between relative py-4">
            {/* Connecting Track */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-[#1A202C] via-[#FD7600] to-[#016E01] -translate-y-1/2 z-0 rounded-full"></div>

            {TIMELINE_DATA.map((event, idx) => {
              const isSelected = selectedYear === event.year;
              return (
                <button
                  key={event.year}
                  id={`timeline-node-${event.year}`}
                  onClick={() => setSelectedYear(event.year)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-110' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shadow-md transition-all ${
                      isSelected
                        ? 'bg-[#FD7600] text-white ring-4 ring-[#C9A84C]'
                        : 'bg-white text-[#1A202C] border-2 border-gray-300 group-hover:border-[#FD7600]'
                    }`}
                  >
                    <span>{event.emoji}</span>
                  </div>

                  <span
                    className={`font-editorial font-black text-sm mt-2 ${
                      isSelected ? 'text-[#FD7600]' : 'text-[#1A202C]'
                    }`}
                  >
                    {event.year}
                  </span>

                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mt-0.5 max-w-[80px] text-center truncate">
                    {event.categoryLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Event Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Dossier */}
          <div className="lg:col-span-8 bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#016E01] shadow-md relative">
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-gray-200 gap-2">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-[#016E01] text-white font-editorial font-black text-base rounded-md shadow-xs">
                  {selectedEvent.year}
                </span>
                <span className="text-2xl">{selectedEvent.emoji}</span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FD7600] bg-orange-50 px-2.5 py-1 rounded border border-[#FD7600]/20">
                  {selectedEvent.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#FD7600]" />
                <span>{selectedEvent.location}</span>
              </div>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1A202C] mb-3">
              {selectedEvent.title}
            </h3>

            <p className="text-sm font-medium text-[#1A202C]/90 leading-relaxed mb-4 bg-white p-4 rounded-lg border-l-4 border-[#FD7600] shadow-2xs">
              {selectedEvent.shortDesc}
            </p>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              {selectedEvent.fullDesc}
            </p>

            {/* Impact & Actors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#016E01] mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Impacto Histórico Imediato
                </h5>
                <p className="text-xs text-gray-700 leading-normal">
                  {selectedEvent.impact}
                </p>
              </div>

              <div className="p-3 bg-white rounded-lg border border-gray-200">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#FD7600] mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  Personagens e Agentes Centrais
                </h5>
                <ul className="text-xs text-gray-700 space-y-0.5">
                  {selectedEvent.actors.map((actor, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                      <span>{actor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Teacher's Exam Tips & Quick Navigator */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Pedagogical Note Box */}
            <div className="bg-[#1A202C] text-white p-6 rounded-2xl border-t-4 border-[#C9A84C] shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-[#C9A84C]" />
                <h4 className="font-editorial text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
                  Dica do Prof. Anderson Firmo
                </h4>
              </div>
              <p className="text-xs font-serif italic text-gray-200 leading-relaxed mb-3">
                "{selectedEvent.examTip}"
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
                <span>9º Ano • Ensino Fundamental II</span>
                <span className="text-[#FD7600] font-bold">Escola Parque Ipiranga</span>
              </div>
            </div>

            {/* Quick List of all 7 Years */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
              <h5 className="text-xs font-bold text-[#1A202C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#016E01]" />
                Navegador de Marcos ({TIMELINE_DATA.length})
              </h5>
              <div className="space-y-1">
                {TIMELINE_DATA.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setSelectedYear(item.year)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer ${
                      selectedYear === item.year
                        ? 'bg-[#016E01] text-white font-bold'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-[#FD7600]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.emoji}</span>
                      <span>{item.year}</span>
                    </span>
                    <span className="text-[10px] opacity-80 truncate max-w-[140px]">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
