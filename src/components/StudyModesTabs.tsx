import React, { useState } from 'react';
import { ChapterData, StudyMode } from '../types';
import { PenTool, StickyNote, GitFork, MessageSquare, BarChart3, Sparkles, CheckCircle, AlertTriangle, Lightbulb, Share2, Layers } from 'lucide-react';
import { FlashcardView } from './FlashcardView';

interface StudyModesTabsProps {
  chapter: ChapterData;
  activeMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
}

export const StudyModesTabs: React.FC<StudyModesTabsProps> = ({
  chapter,
  activeMode,
  onSelectMode,
}) => {
  const [selectedMindMapNode, setSelectedMindMapNode] = useState<string | null>(null);

  const modesConfig: Array<{
    id: StudyMode;
    label: string;
    slashCmd: string;
    icon: React.ComponentType<{ className?: string }>;
    desc: string;
  }> = [
    {
      id: 'handwritten',
      label: 'Caderno do 9º Ano',
      slashCmd: '/handwritten',
      icon: PenTool,
      desc: 'Anotações em caneta, marca-texto e correções do professor',
    },
    {
      id: 'stickNotes',
      label: 'Post-its & Alertas',
      slashCmd: '/stick notes',
      icon: StickyNote,
      desc: 'Lembretes estratégicos, datas e pegadinhas de prova',
    },
    {
      id: 'mindmap',
      label: 'Mapa Mental',
      slashCmd: '/mindmap',
      icon: GitFork,
      desc: 'Estrutura ramificada: causas, governos e consequências',
    },
    {
      id: 'comic',
      label: 'Tirinha Pedagógica',
      slashCmd: '/comic',
      icon: MessageSquare,
      desc: 'Diálogos ilustrados com síntese histórica e humor crítico',
    },
    {
      id: 'infographic',
      label: 'Infográfico & Dados',
      slashCmd: '/inforgraphic',
      icon: BarChart3,
      desc: 'Métricas, balanços e tabelas comparativas',
    },
    {
      id: 'flashcard',
      label: 'Flashcards de Fixação',
      slashCmd: '/flashcard',
      icon: Layers,
      desc: '5 fatos-chave sorteados para autoavaliação rápida antes do simulado',
    },
  ];

  return (
    <section id="study-modes-section" className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#016E01]/10 text-[#016E01]">
                {chapter.code} • {chapter.period}
              </span>
              <span className="text-gray-400">•</span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Recursos Didáticos de Fixação
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">
              Modos de Estudo Especializados
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">
              Escolha uma forma visual de fixar o conteúdo de <strong>{chapter.title}</strong>
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            {modesConfig.map((m) => {
              const Icon = m.icon;
              const isActive = activeMode === m.id;
              return (
                <button
                  key={m.id}
                  id={`mode-tab-${m.id}`}
                  onClick={() => onSelectMode(m.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#016E01] text-white border-[#016E01] shadow-sm'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FD7600]' : 'text-gray-500'}`} />
                  <span>{m.label}</span>
                  <span className={`text-[10px] font-mono px-1 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {m.slashCmd}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display of Active Mode */}
        <div className="bg-[#FBFBFB] rounded-2xl border border-gray-200 p-6 shadow-xs min-h-[420px]">
          
          {/* ===================== MODE 1: HANDWRITTEN (/handwritten) ===================== */}
          {activeMode === 'handwritten' && (
            <div className="relative bg-[#FFFDF7] rounded-xl p-8 border border-[#E7E2CE] shadow-sm overflow-hidden"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #E8E5DA 31px, #E8E5DA 32px)',
                backgroundAttachment: 'local'
              }}
            >
              {/* Notebook Left Margin Line */}
              <div className="absolute top-0 bottom-0 left-12 w-[2px] bg-red-300 pointer-events-none opacity-70 hidden sm:block"></div>

              {/* Notebook Header Stamp */}
              <div className="sm:pl-10 flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-gray-300/50 mb-6">
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {chapter.handwrittenNote.notebookDate}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mt-1" style={{ fontFamily: "'Patrick Hand', cursive, sans-serif" }}>
                    ✍️ {chapter.handwrittenNote.title}
                  </h4>
                </div>

                {/* Professor's Official Stamp */}
                <div className="rotate-2 bg-red-50 border-2 border-red-500 text-red-700 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider shadow-xs flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Visto Prof. Anderson Firmo</span>
                </div>
              </div>

              {/* Professor Annotation Box */}
              <div className="sm:pl-10 mb-6 bg-[#FEF3C7]/60 border-l-4 border-[#FD7600] p-4 rounded-r-lg">
                <div className="flex items-center gap-2 text-xs font-black text-[#B45309] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#FD7600]" />
                  Anotação do Professor no Caderno:
                </div>
                <p className="text-base text-gray-800 mt-1 italic" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
                  "{chapter.handwrittenNote.professorAnnotation}"
                </p>
              </div>

              {/* Handwritten Student Notes Lines */}
              <div className="sm:pl-10 space-y-3">
                {chapter.handwrittenNote.studentNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <span className="text-blue-600 font-bold text-lg select-none" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
                      {idx + 1}.
                    </span>
                    <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-normal" style={{ fontFamily: "'Caveat', cursive, sans-serif" }}>
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Highlights and Exam Bizu */}
              <div className="sm:pl-10 mt-8 pt-6 border-t border-gray-300/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                    Marca-texto Amarelo (Palavras-Chave):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {chapter.handwrittenNote.highlightKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="bg-[#FEF08A] text-gray-900 font-semibold text-xs px-2.5 py-1 rounded shadow-xs"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 text-blue-900 p-3 rounded-xl text-xs max-w-md">
                  <span className="font-extrabold text-[#016E01] block mb-0.5">📌 BIZU DO PROF. ANDERSON:</span>
                  {chapter.handwrittenNote.bizuPrompt}
                </div>
              </div>
            </div>
          )}

          {/* ===================== MODE 2: STICKY NOTES (/stick notes) ===================== */}
          {activeMode === 'stickNotes' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                  <StickyNote className="w-5 h-5 text-[#FD7600]" />
                  Mural de Post-its & Lembretes Rápidos
                </h4>
                <span className="text-xs text-gray-500">
                  Fixados no quadro de avisos do 9º Ano
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {chapter.stickyNotes.map((note, idx) => {
                  const colorStyles = {
                    yellow: 'bg-[#FEF9C3] border-[#FDE047] text-[#713F12]',
                    pink: 'bg-[#FCE7F3] border-[#F472B6] text-[#831843]',
                    blue: 'bg-[#E0F2FE] border-[#38BDF8] text-[#0369A1]',
                    green: 'bg-[#DCFCE7] border-[#4ADE80] text-[#14532D]',
                  }[note.color];

                  const pinStyles = {
                    yellow: 'bg-red-500',
                    pink: 'bg-purple-600',
                    blue: 'bg-blue-600',
                    green: 'bg-emerald-600',
                  }[note.color];

                  return (
                    <div
                      key={note.id}
                      className={`relative p-5 rounded-xl border shadow-md transition-all hover:scale-[1.02] hover:-rotate-1 ${colorStyles}`}
                      style={{
                        transform: idx % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                      }}
                    >
                      {/* Pushpin at top center */}
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${pinStyles} shadow-sm border border-white`}></div>
                      </div>

                      {/* Tag */}
                      <div className="flex items-center justify-between text-[10px] font-black tracking-wider uppercase opacity-80 mb-2">
                        <span>{note.tag}</span>
                        <span>#{idx + 1}</span>
                      </div>

                      {/* Title */}
                      <h5 className="font-extrabold text-base mb-2 leading-tight">
                        {note.title}
                      </h5>

                      {/* Content */}
                      <p className="text-xs leading-relaxed opacity-95">
                        {note.content}
                      </p>

                      {/* Alert */}
                      {note.examAlert && (
                        <div className="mt-4 pt-2.5 border-t border-black/10 text-[11px] font-medium flex items-start gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-[#FD7600] mt-0.5" />
                          <span><strong>Atenção:</strong> {note.examAlert}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===================== MODE 3: MIND MAP (/mindmap) ===================== */}
          {activeMode === 'mindmap' && (
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <GitFork className="w-5 h-5 text-[#016E01]" />
                    Mapa Mental Estruturado • {chapter.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Clique nos nós para explorar conexões, causas e consequências
                  </p>
                </div>

                <span className="text-xs font-mono bg-white px-2 py-1 rounded border text-gray-600">
                  Esquema Ramificado
                </span>
              </div>

              {/* Central Root Node */}
              <div className="flex justify-center mb-8">
                <div className="bg-[#016E01] text-white px-6 py-4 rounded-2xl shadow-md border-2 border-[#C9A84C] text-center max-w-md">
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#C9A84C] block mb-1">
                    NÓ CENTRAL DO CAPÍTULO
                  </span>
                  <div className="text-lg font-black">{chapter.mindMap.label}</div>
                  <p className="text-xs text-white/80 mt-1">{chapter.mindMap.description}</p>
                </div>
              </div>

              {/* Connecting Lines & Sub-Branches */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {chapter.mindMap.children?.map((branch, bIdx) => {
                  const branchColors = [
                    'border-amber-400 bg-amber-50/50',
                    'border-blue-400 bg-blue-50/50',
                    'border-emerald-400 bg-emerald-50/50',
                    'border-purple-400 bg-purple-50/50',
                  ][bIdx % 4];

                  const badgeColors = [
                    'bg-amber-600',
                    'bg-blue-600',
                    'bg-emerald-600',
                    'bg-purple-600',
                  ][bIdx % 4];

                  return (
                    <div
                      key={branch.id}
                      className={`p-4 rounded-xl border-2 ${branchColors} shadow-xs flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[10px] font-black uppercase tracking-wider text-white px-2 py-0.5 rounded ${badgeColors}`}>
                            Ramo {bIdx + 1}
                          </span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase">
                            {branch.type}
                          </span>
                        </div>

                        <h5 className="font-extrabold text-sm text-gray-900 mb-1">
                          {branch.label}
                        </h5>
                        <p className="text-xs text-gray-600 mb-3">
                          {branch.description}
                        </p>

                        {/* Child Nodes */}
                        <div className="space-y-2 mt-2 pt-2 border-t border-gray-200">
                          {branch.children?.map((child) => (
                            <div
                              key={child.id}
                              onClick={() => setSelectedMindMapNode(child.id)}
                              className={`p-2 rounded-lg text-xs font-medium cursor-pointer transition-all border ${
                                selectedMindMapNode === child.id
                                  ? 'bg-[#016E01] text-white border-[#016E01] shadow-xs'
                                  : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-200'
                              }`}
                            >
                              • {child.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===================== MODE 4: COMIC (/comic) ===================== */}
          {activeMode === 'comic' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-indigo-600" />
                    Tirinha Didática: {chapter.comicStrip.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    História em quadrinhos pedagógica com síntese dos dilemas e personagens
                  </p>
                </div>
                <span className="text-xs bg-indigo-50 text-indigo-700 font-bold px-2 py-1 rounded border border-indigo-200">
                  HQ Educativa • 3 Quadros
                </span>
              </div>

              {/* 3 Comic Panels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {chapter.comicStrip.panels.map((panel) => (
                  <div
                    key={panel.id}
                    className="bg-white rounded-xl border-2 border-gray-800 shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-all"
                  >
                    {/* Panel Header */}
                    <div className="flex items-center justify-between pb-2 border-b-2 border-dashed border-gray-300 mb-3">
                      <span className="bg-black text-white font-mono font-black text-xs px-2 py-0.5 rounded">
                        QUADRO {panel.panelNumber}
                      </span>
                      <span className="text-[10px] font-bold text-gray-500 line-clamp-1">
                        {panel.historicalContext}
                      </span>
                    </div>

                    {/* Speech Bubbles */}
                    <div className="space-y-4 my-2 flex-grow">
                      {/* Character A */}
                      <div className="flex flex-col items-start">
                        <span className="text-[11px] font-bold text-[#016E01] mb-1">
                          👤 {panel.characterA.name} ({panel.characterA.role}):
                        </span>
                        <div className="relative bg-gray-100 text-gray-900 text-xs p-3 rounded-2xl rounded-tl-xs border border-gray-300 max-w-[95%]">
                          "{panel.characterA.speech}"
                        </div>
                      </div>

                      {/* Character B */}
                      <div className="flex flex-col items-end">
                        <span className="text-[11px] font-bold text-[#FD7600] mb-1">
                          👤 {panel.characterB.name} ({panel.characterB.role}):
                        </span>
                        <div className="relative bg-[#FEF3C7] text-gray-900 text-xs p-3 rounded-2xl rounded-tr-xs border border-[#FDE68A] max-w-[95%] text-right">
                          "{panel.characterB.speech}"
                        </div>
                      </div>
                    </div>

                    {/* Punchline / Didactic Lesson */}
                    <div className="mt-4 pt-3 border-t-2 border-gray-800 bg-gray-50 -mx-4 -mb-4 p-3 rounded-b-lg">
                      <div className="text-[10px] font-black uppercase tracking-wider text-gray-500 mb-0.5">
                        💡 Lição Histórica:
                      </div>
                      <p className="text-xs font-semibold text-gray-800 italic">
                        {panel.punchlineOrLesson}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===================== MODE 5: INFOGRAPHIC (/inforgraphic) ===================== */}
          {activeMode === 'infographic' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-emerald-600" />
                    {chapter.infographics.headline}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Números-chave, indicadores quantitativos e análise comparativa
                  </p>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-2 py-1 rounded border border-emerald-200">
                  Dados Históricos
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {chapter.infographics.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
                        {m.label}
                      </span>
                      <div className="text-3xl font-black text-[#016E01] mb-1">
                        {m.value}
                      </div>
                      <p className="text-xs text-gray-700 leading-snug mb-2">
                        {m.context}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                      <strong>Comparação:</strong> {m.comparison}
                    </div>
                  </div>
                ))}
              </div>

              {/* Comparison Grid if available */}
              {chapter.infographics.comparisonGrid && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4">
                    <h5 className="font-black text-sm text-blue-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      {chapter.infographics.comparisonGrid.colA.title}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-blue-950">
                      {chapter.infographics.comparisonGrid.colA.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
                    <h5 className="font-black text-sm text-amber-900 mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                      {chapter.infographics.comparisonGrid.colB.title}
                    </h5>
                    <ul className="space-y-1.5 text-xs text-amber-950">
                      {chapter.infographics.comparisonGrid.colB.items.map((it, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">•</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================== MODE 6: FLASHCARDS (/flashcard) ===================== */}
          {activeMode === 'flashcard' && (
            <FlashcardView chapter={chapter} />
          )}

        </div>
      </div>
    </section>
  );
};
