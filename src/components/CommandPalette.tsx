import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  Compass,
  Theater,
  BookOpen,
  Sparkles,
  Clock,
  Award,
  PenTool,
  ArrowRight,
  CornerDownLeft,
  X,
  FileText,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { allChapters } from '../data/curriculumData';
import { ChapterCode, StudyMode } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectChapter: (code: ChapterCode) => void;
  onSelectStudyMode: (mode: StudyMode) => void;
  onOpenStudyGuide: () => void;
}

interface PaletteItem {
  id: string;
  category: 'Módulos' | 'Teatro' | 'Modos de Estudo' | 'Conceitos' | 'Ferramentas';
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge?: string;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectChapter,
  onSelectStudyMode,
  onOpenStudyGuide,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('Tudo');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global shortcut to open/close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable items
  const items: PaletteItem[] = useMemo(() => {
    const list: PaletteItem[] = [];

    // 1. Modules (A5 to B8)
    allChapters.forEach((ch) => {
      list.push({
        id: `module-${ch.code}`,
        category: 'Módulos',
        title: `Módulo ${ch.code}: ${ch.title}`,
        subtitle: `${ch.theme} • Período: ${ch.period}`,
        icon: Compass,
        badge: ch.code,
        action: () => {
          onSelectChapter(ch.code);
          onClose();
          const target = document.getElementById('curriculum-navigator');
          target?.scrollIntoView({ behavior: 'smooth' });
        },
      });

      // Subtopics inside module
      ch.topics.forEach((t) => {
        list.push({
          id: `topic-${ch.code}-${t.id}`,
          category: 'Conceitos',
          title: `${t.title} (${ch.code})`,
          subtitle: t.summary.slice(0, 110) + '...',
          icon: BookOpen,
          badge: t.period,
          action: () => {
            onSelectChapter(ch.code);
            onClose();
            const target = document.getElementById('chapter-detail-view');
            target?.scrollIntoView({ behavior: 'smooth' });
          },
        });
      });
    });

    // 2. Dramatized Theater Plays
    const plays = [
      { id: 'play-cuba', title: 'Os 13 Dias de Outubro (Crise dos Mísseis 1962)', subtitle: 'JFK, Curtis LeMay, Nikita Kruschev e Vassili Arkhipov no ápice da tensão nuclear.' },
      { id: 'play-jango', title: 'O Pátio das Reformas (Comício da Central 1964)', subtitle: 'João Goulart, Reformas de Base e a conspiração civil-militar no Brasil.' },
      { id: 'play-allende', title: 'A Última Trincheira: O Adeus em La Moneda (1973)', subtitle: 'Salvador Allende, Augusto Pinochet e o cerco ao palácio presidencial chileno.' },
      { id: 'play-berlin', title: 'A Noite da Cancela Aberta: Bornholmer Straße (1989)', subtitle: 'Günter Schabowski, Harald Jäger e a multidão que derrubou o Muro de Berlim.' },
    ];
    plays.forEach((p) => {
      list.push({
        id: p.id,
        category: 'Teatro',
        title: p.title,
        subtitle: p.subtitle,
        icon: Theater,
        badge: 'Cênico & Decisão',
        action: () => {
          onClose();
          const target = document.getElementById('historical-theater-model');
          target?.scrollIntoView({ behavior: 'smooth' });
        },
      });
    });

    // 3. Study Modes
    const studyModesList: { mode: StudyMode; label: string; sub: string }[] = [
      { mode: 'handwritten', label: 'Manuscrito Escolar', sub: 'Caderno pautado com anotações e carimbos pedagógicos' },
      { mode: 'stickNotes', label: 'Quadro de Post-its', sub: 'Mural visual com sínteses temáticas organizadas' },
      { mode: 'mindmap', label: 'Mapa Mental & Rede', sub: 'Grafo de conexões conceituais com ramificações diretas' },
      { mode: 'comic', label: 'Quadrinhos Históricos', sub: 'Narrativas visuais em tirinhas com balões de fala' },
      { mode: 'infographic', label: 'Infográfico Comparativo', sub: 'Métricas, dados estatísticos e linhas comparativas' },
      { mode: 'flashcard', label: 'Flashcards & Gamificação', sub: 'Cartões interativos com bizus do Prof. Anderson Firmo' },
    ];
    studyModesList.forEach((s) => {
      list.push({
        id: `mode-${s.mode}`,
        category: 'Modos de Estudo',
        title: `Modo: ${s.label}`,
        subtitle: s.sub,
        icon: PenTool,
        badge: 'Formato',
        action: () => {
          onSelectStudyMode(s.mode);
          onClose();
          const target = document.getElementById('study-modes-section');
          target?.scrollIntoView({ behavior: 'smooth' });
        },
      });
    });

    // 4. Tools & Actions
    list.push({
      id: 'tool-simulado',
      category: 'Ferramentas',
      title: 'Simulado BNCC 9º Ano',
      subtitle: 'Banco de questões com gabarito comentado ao final para testar seus conhecimentos.',
      icon: Award,
      badge: 'Avaliação',
      action: () => {
        onClose();
        const target = document.getElementById('quiz');
        target?.scrollIntoView({ behavior: 'smooth' });
      },
    });
    list.push({
      id: 'tool-timeline',
      category: 'Ferramentas',
      title: 'Linha do Tempo Cronológica (1945–2026)',
      subtitle: 'Navegue pelos marcos mundiais e brasileiros da Guerra Fria à atualidade.',
      icon: Clock,
      badge: 'Cronologia',
      action: () => {
        onClose();
        const target = document.getElementById('timeline');
        target?.scrollIntoView({ behavior: 'smooth' });
      },
    });
    list.push({
      id: 'tool-analogias',
      category: 'Ferramentas',
      title: 'Analogias Didáticas do Prof. Anderson',
      subtitle: 'Metáforas modernas (futebol, condomínio, celulares) para fixar conceitos complexos.',
      icon: Sparkles,
      badge: 'Metáforas',
      action: () => {
        onClose();
        const target = document.getElementById('analogias-master');
        target?.scrollIntoView({ behavior: 'smooth' });
      },
    });
    list.push({
      id: 'tool-pdf',
      category: 'Ferramentas',
      title: 'Baixar / Imprimir Guia Completo de Estudos (PDF)',
      subtitle: 'Documento impresso diagramado com todos os 8 módulos da ementa oficial.',
      icon: FileText,
      badge: 'Exportar PDF',
      action: () => {
        onClose();
        onOpenStudyGuide();
      },
    });

    return list;
  }, [onSelectChapter, onSelectStudyMode, onOpenStudyGuide, onClose]);

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'Tudo' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
      );
    });
  }, [items, activeCategory, query]);

  // Keyboard navigation within list
  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const activeEl = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const categories = ['Tudo', 'Módulos', 'Teatro', 'Modos de Estudo', 'Conceitos', 'Ferramentas'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Busca Rápida de Conteúdos"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 bg-slate-50/60">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar módulo (ex: A5, B6), conceito, figura histórica ou modo..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 font-medium focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 mr-2 cursor-pointer"
              title="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-slate-500 bg-slate-200 rounded border border-slate-300">
            ESC
          </kbd>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-white border-b border-slate-100 overflow-x-auto text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#016E01] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-slate-400 shrink-0 pl-2">
            {filteredItems.length} resultado{filteredItems.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 max-h-[50vh]"
        >
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              <p className="font-semibold">Nenhum resultado encontrado para "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Tente buscar por termos como "A5", "Guerra Fria", "Jango", "Muro de Berlim" ou "Simulado".
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-index={index}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-orange-50/80 border-l-4 border-[#FD7600] pl-2.5'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#FD7600] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-400 uppercase font-medium">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center text-slate-400">
                    {isSelected ? (
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#FD7600]">
                        <span>Acessar</span>
                        <CornerDownLeft className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↓</kbd>
              <span>Navegar</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↵</kbd>
              <span>Selecionar</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">ESC</kbd>
              <span>Fechar</span>
            </span>
          </div>
          <div className="text-[#016E01] font-semibold flex items-center gap-1">
            <span>Prof. Anderson Firmo</span>
            <span>• 9º Ano</span>
          </div>
        </div>
      </div>
    </div>
  );
};
