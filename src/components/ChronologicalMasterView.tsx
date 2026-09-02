import React, { useState } from 'react';
import { CHRONOLOGICAL_PHASES } from '../data/chronologicalPhasesData';
import { BLOCS_DATA } from '../data/historyData';
import { ChronologicalPhase } from '../types';
import {
  Clock,
  Calendar,
  ShieldAlert,
  Rocket,
  Snowflake,
  Landmark,
  ChevronRight,
  ChevronLeft,
  Award,
  Sparkles,
  MapPin,
  Users,
  CheckCircle2,
  Info,
  Layers,
  ArrowRight,
  Flame,
  Zap,
  Crown,
  AlertTriangle,
  ExternalLink,
} from 'lucide-react';

export const ChronologicalMasterView: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [selectedMilestone, setSelectedMilestone] = useState<{
    phaseIndex: number;
    milestoneIndex: number;
  } | null>(null);

  const activePhase: ChronologicalPhase = CHRONOLOGICAL_PHASES[activePhaseIndex];

  // Helper for category badge
  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'nuclear':
        return {
          bg: 'bg-red-500/10 text-red-600 border-red-300',
          icon: <ShieldAlert className="w-3.5 h-3.5" />,
          label: 'Nuclear & MAD',
        };
      case 'espacial':
        return {
          bg: 'bg-green-500/10 text-[#016E01] border-green-300',
          icon: <Rocket className="w-3.5 h-3.5" />,
          label: 'Corrida Espacial',
        };
      case 'conflito':
        return {
          bg: 'bg-amber-500/10 text-amber-700 border-amber-300',
          icon: <Snowflake className="w-3.5 h-3.5" />,
          label: 'Guerra por Procuração',
        };
      case 'desfecho':
        return {
          bg: 'bg-purple-500/10 text-purple-700 border-purple-300',
          icon: <Sparkles className="w-3.5 h-3.5" />,
          label: 'Marco Histórico',
        };
      default:
        return {
          bg: 'bg-blue-500/10 text-blue-700 border-blue-300',
          icon: <Landmark className="w-3.5 h-3.5" />,
          label: 'Ordem Geopolítica',
        };
    }
  };

  return (
    <section id="cronologia-completa" className="py-10 bg-white border-b-2 border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Pure Chronological Focus */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD7600] animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#016E01]">
                Jornada Histórica Contínua (1945 → 1991)
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C] tracking-tight">
              A GUERRA FRIA EM <span className="text-[#FD7600]">ORDEM CRONOLÓGICA</span>
            </h2>
            <p className="text-sm font-serif italic text-gray-600 mt-1 max-w-2xl">
              Navegue pelas 5 fases sequenciais que definiram o século XX. Todos os conflitos, corridas tecnológicas e analogias no seu exato momento histórico.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex items-center gap-2 bg-[#FBFBFB] p-2 rounded-xl border border-gray-200 text-xs shadow-xs">
            <div className="px-2.5 py-1 bg-[#1A202C] text-white rounded-lg font-black">
              5 Grandes Fases
            </div>
            <div className="px-2.5 py-1 bg-[#016E01]/10 text-[#016E01] rounded-lg font-black">
              46 Anos de História
            </div>
          </div>
        </div>

        {/* 1. Interactive Phase Selector Bar (5 Chronological Eras) */}
        <div className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {CHRONOLOGICAL_PHASES.map((phase, idx) => {
              const isSelected = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  id={`btn-phase-${idx + 1}`}
                  onClick={() => {
                    setActivePhaseIndex(idx);
                    setSelectedMilestone(null);
                  }}
                  className={`p-3 rounded-2xl text-left transition-all duration-200 flex flex-col justify-between cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-[#1A202C] text-white border-[#C9A84C] shadow-lg scale-[1.02] ring-2 ring-[#FD7600]/30'
                      : 'bg-[#FBFBFB] text-[#1A202C] border-gray-200 hover:border-[#FD7600] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-[#FD7600] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      Fase {phase.phaseNumber}
                    </span>
                    <span className="text-base">{phase.emoji}</span>
                  </div>

                  <div>
                    <span
                      className={`block text-xs sm:text-sm font-black tracking-tight ${
                        isSelected ? 'text-[#C9A84C]' : 'text-[#016E01]'
                      }`}
                    >
                      {phase.period}
                    </span>
                    <span
                      className={`block text-xs font-bold truncate ${
                        isSelected ? 'text-gray-200' : 'text-gray-800'
                      }`}
                      title={phase.title}
                    >
                      {phase.title.split('&')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Current Active Phase Hero Card (Chronological Era Context) */}
        <div className="bg-gradient-to-br from-[#1A202C] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-6 sm:p-8 border-3 border-[#C9A84C] shadow-2xl mb-10 relative overflow-hidden">
          {/* Subtle Watermark Era Number */}
          <div className="absolute right-4 -bottom-6 text-white/5 font-black text-9xl pointer-events-none select-none">
            0{activePhase.phaseNumber}
          </div>

          <div className="relative z-10">
            {/* Top Eyebrow Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#FD7600] text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-xs">
                  FASE {activePhase.phaseNumber} • {activePhase.period}
                </span>
                <span className="px-3 py-1 bg-white/10 text-gray-200 font-bold text-xs rounded-lg border border-white/10">
                  {activePhase.tensionLabel}
                </span>
              </div>

              {/* DEFCON Meter */}
              <div className="flex items-center gap-2 bg-black/40 px-3 py-1 rounded-xl border border-white/10 text-xs">
                <span className="text-gray-400 font-bold uppercase text-[10px]">Nível DEFCON:</span>
                <span className="font-black text-[#FD7600] bg-white/10 px-2 py-0.5 rounded">
                  {activePhase.defconLevel}
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
              {activePhase.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 font-serif italic mb-6 max-w-3xl">
              "{activePhase.subtitle}"
            </p>

            {/* Quick Strategic Data Bar (Leaders & Warheads at that era) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs">
              {/* Leaders */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#C9A84C] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-black block">
                    Líderes do Período:
                  </span>
                  <span className="text-white font-bold block">
                    🇺🇸 {activePhase.leaders.us}
                  </span>
                  <span className="text-gray-300 font-medium block">
                    🇷🇺 {activePhase.leaders.ussr}
                  </span>
                </div>
              </div>

              {/* Nuclear Arsenals at that phase */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-[#FD7600] shrink-0" />
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-black block">
                    Arsenais no Período:
                  </span>
                  <span className="text-blue-300 font-bold block">
                    EUA: {activePhase.nuclearWarheadsUS.toLocaleString()} ogivas
                  </span>
                  <span className="text-red-300 font-bold block">
                    URSS: {activePhase.nuclearWarheadsUSSR.toLocaleString()} ogivas
                  </span>
                </div>
              </div>

              {/* Pedagogical Focus for 9th Grade */}
              <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-3">
                <Award className="w-5 h-5 text-[#016E01] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#C9A84C] uppercase font-black block">
                    Foco de Prova (9º Ano):
                  </span>
                  <span className="text-gray-200 text-[11px] leading-tight block">
                    {activePhase.examFocus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Chronological Step-by-Step Events of this Phase */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg sm:text-xl font-black text-[#1A202C] flex items-center gap-2 font-display">
              <Clock className="w-5 h-5 text-[#FD7600]" />
              <span>Acontecimentos Cronológicos da Fase {activePhase.phaseNumber}</span>
            </h4>
            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {activePhase.milestones.length} Marcos Sequenciais
            </span>
          </div>

          <div className="space-y-4">
            {activePhase.milestones.map((m, mIdx) => {
              const badge = getCategoryBadge(m.category);
              const isSelected =
                selectedMilestone?.phaseIndex === activePhaseIndex &&
                selectedMilestone?.milestoneIndex === mIdx;

              return (
                <div
                  key={m.year + m.title}
                  id={`milestone-${m.year}`}
                  className={`p-5 sm:p-6 rounded-2xl border-2 transition-all duration-200 bg-white ${
                    isSelected
                      ? 'border-[#FD7600] shadow-lg ring-2 ring-[#FD7600]/20'
                      : 'border-gray-200 hover:border-[#C9A84C]/80 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {/* Year Node Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-[#1A202C] text-[#C9A84C] flex flex-col items-center justify-center shrink-0 border-2 border-[#C9A84C] shadow-sm">
                        <span className="text-xs font-black leading-none">{m.year}</span>
                        <span className="text-base leading-none mt-1">{m.emoji}</span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-md border ${badge.bg}`}
                          >
                            {badge.icon}
                            <span>{m.categoryLabel}</span>
                          </span>
                          {m.dateDetail && (
                            <span className="text-xs font-semibold text-gray-500">
                              • {m.dateDetail}
                            </span>
                          )}
                        </div>
                        <h5 className="text-base sm:text-lg font-black text-[#1A202C] leading-snug">
                          {m.title}
                        </h5>
                      </div>
                    </div>

                    {m.location && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200 shrink-0 self-start">
                        <MapPin className="w-3.5 h-3.5 text-[#FD7600]" />
                        <span>{m.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 pl-0 sm:pl-17">
                    {m.description}
                  </p>

                  {/* Bullet points of significance */}
                  <div className="pl-0 sm:pl-17 grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    {m.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 bg-[#FBFBFB] p-2.5 rounded-xl border border-gray-100 text-xs text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#016E01] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Teacher's Exam Tip for 9th Grade */}
                  <div className="pl-0 sm:pl-17">
                    <div className="bg-[#FD7600]/10 p-3 rounded-xl border border-[#FD7600]/30 flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#FD7600] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#1A202C]">
                        <strong className="text-[#FD7600] font-bold uppercase tracking-wider block mb-0.5">
                          Anotação do Prof. Anderson Firmo para a Prova:
                        </strong>
                        {m.examTip}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Chronologically Integrated Analogy (When applicable in this Phase) */}
        {activePhase.integratedAnalogy && (
          <div className="mb-12 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-transparent p-6 sm:p-8 rounded-3xl border-2 border-[#C9A84C] shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FD7600] text-white rounded-lg text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Analogia Pedagógica da Fase {activePhase.phaseNumber}</span>
                </div>
                <h4 className="font-editorial text-2xl sm:text-3xl font-black text-[#1A202C]">
                  {activePhase.integratedAnalogy.title}
                </h4>
                <p className="text-sm font-serif italic text-gray-700 leading-relaxed">
                  {activePhase.integratedAnalogy.quote}
                </p>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed pt-1">
                  {activePhase.integratedAnalogy.explanation}
                </p>
              </div>

              {/* Analogy Mechanism Cards */}
              <div className="bg-white p-5 rounded-2xl border border-[#C9A84C]/50 shadow-md space-y-2 lg:w-96 shrink-0">
                <span className="text-xs font-black uppercase tracking-wider text-[#016E01] block pb-1 border-b border-gray-100">
                  Como funciona no 9º Ano:
                </span>
                {activePhase.integratedAnalogy.howItWorked.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FD7600] mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. Chronologically Integrated Proxy Conflicts or Space Race (When present in this phase) */}
        {activePhase.conflicts && activePhase.conflicts.length > 0 && (
          <div className="mb-12">
            <h4 className="text-lg sm:text-xl font-black text-[#1A202C] mb-4 flex items-center gap-2">
              <Snowflake className="w-5 h-5 text-red-600" />
              <span>Conflitos por Procuração & Crises Regionais desta Fase</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activePhase.conflicts.map((c) => (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl bg-[#FBFBFB] border-2 border-gray-200 hover:border-[#FD7600] transition-all shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black uppercase text-[#016E01] bg-green-50 px-2.5 py-0.5 rounded border border-green-200">
                      {c.period}
                    </span>
                    <span className="text-xs font-bold text-gray-500">{c.location}</span>
                  </div>
                  <h5 className="text-base font-black text-[#1A202C] mb-1">{c.name}</h5>
                  <p className="text-xs text-gray-700 leading-relaxed mb-3">{c.summary}</p>

                  <div className="bg-white p-3 rounded-xl border border-gray-200 text-xs">
                    <strong className="text-[#FD7600] font-bold block mb-0.5">
                      Por que foi uma Guerra Indireta?
                    </strong>
                    <span className="text-gray-600">{c.whyIndirect}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Chronologically Integrated Space Race Steps */}
        {activePhase.spaceMilestones && activePhase.spaceMilestones.length > 0 && (
          <div className="mb-12 bg-[#1A202C] text-white p-6 sm:p-8 rounded-3xl border-3 border-[#C9A84C]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Rocket className="w-6 h-6 text-[#016E01]" />
                <h4 className="font-editorial text-xl sm:text-2xl font-black text-white">
                  A Corrida Espacial na Fase {activePhase.phaseNumber} ({activePhase.period})
                </h4>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C]">
                Tecnologia Aeroespacial
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activePhase.spaceMilestones.map((sm, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FD7600] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-[#C9A84C] bg-white/10 px-2 py-0.5 rounded">
                      Ano {sm.year}
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        sm.winner === 'urss'
                          ? 'bg-red-900/60 text-red-200'
                          : sm.winner === 'eua'
                          ? 'bg-blue-900/60 text-blue-200'
                          : 'bg-green-900/60 text-green-200'
                      }`}
                    >
                      {sm.winnerName}
                    </span>
                  </div>
                  <h5 className="text-base font-black text-white mb-1">{sm.title}</h5>
                  <p className="text-xs text-gray-300 mb-2">{sm.achievement}</p>
                  <div className="text-[11px] text-gray-400 border-t border-white/10 pt-2">
                    <strong className="text-gray-200">Impacto Geopolítico:</strong> {sm.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. Bottom Navigation Between Chronological Phases */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-gray-200">
          <button
            onClick={() => {
              if (activePhaseIndex > 0) {
                setActivePhaseIndex(activePhaseIndex - 1);
                window.scrollTo({ top: document.getElementById('cronologia-completa')?.offsetTop || 0, behavior: 'smooth' });
              }
            }}
            disabled={activePhaseIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activePhaseIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400'
                : 'bg-white border-2 border-gray-300 text-[#1A202C] hover:border-[#FD7600] hover:text-[#FD7600]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Fase Anterior</span>
          </button>

          <div className="flex items-center gap-1">
            {CHRONOLOGICAL_PHASES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhaseIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  activePhaseIndex === idx
                    ? 'w-8 bg-[#FD7600]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={`Ir para Fase ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (activePhaseIndex < CHRONOLOGICAL_PHASES.length - 1) {
                setActivePhaseIndex(activePhaseIndex + 1);
                window.scrollTo({ top: document.getElementById('cronologia-completa')?.offsetTop || 0, behavior: 'smooth' });
              }
            }}
            disabled={activePhaseIndex === CHRONOLOGICAL_PHASES.length - 1}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activePhaseIndex === CHRONOLOGICAL_PHASES.length - 1
                ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400'
                : 'bg-[#016E01] text-white hover:bg-[#015201] shadow-md border border-[#C9A84C]'
            }`}
          >
            <span>Próxima Fase ({activePhaseIndex + 2 <= 5 ? `Fase ${activePhaseIndex + 2}` : 'Fim'})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
