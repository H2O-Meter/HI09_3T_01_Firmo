import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroImpactSection } from './components/HeroImpactSection';
import { HistoricalDramaTheater } from './components/HistoricalDramaTheater';
import { CurriculumNavigator } from './components/CurriculumNavigator';
import { StudyModesTabs } from './components/StudyModesTabs';
import { ChapterDetailView } from './components/ChapterDetailView';
import { AnalogiesMasterSection } from './components/AnalogiesMasterSection';
import { ChronologicalMasterView } from './components/ChronologicalMasterView';
import { DashboardMilestones } from './components/DashboardMilestones';
import { TimelineInteractive } from './components/TimelineInteractive';
import { BlocsComparison } from './components/BlocsComparison';
import { ConflictsAndSpace } from './components/ConflictsAndSpace';
import { QuizSection } from './components/QuizSection';
import { StudyGuideModal } from './components/StudyGuideModal';
import { CommandPalette } from './components/CommandPalette';
import { StudyMasteryTracker } from './components/StudyMasteryTracker';
import { Footer } from './components/Footer';
import { ChapterCode, StudyMode } from './types';
import { allChapters, getChapterByCode } from './data/curriculumData';

export default function App() {
  const [activeSection, setActiveSection] = useState('curriculum-navigator');
  const [isStudyGuideOpen, setIsStudyGuideOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // Curriculum State (8 Official Modules: A5, A6, B5, B6, A7, A8, B7, B8)
  const [selectedChapterCode, setSelectedChapterCode] = useState<ChapterCode>('A5');
  const [activeStudyMode, setActiveStudyMode] = useState<StudyMode>('handwritten');

  const selectedChapter = getChapterByCode(selectedChapterCode);

  // Scroll Spy for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'curriculum-navigator',
        'study-modes-section',
        'chapter-detail-view',
        'analogias-master',
        'timeline',
        'quiz',
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const nav = document.getElementById('curriculum-navigator');
    if (nav) {
      nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectChapter = (code: ChapterCode) => {
    setSelectedChapterCode(code);
    const detailView = document.getElementById('study-modes-section');
    if (detailView) {
      detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#FBFBFB] text-[#1A202C] flex flex-col selection:bg-[#FD7600] selection:text-white ${
        isPresentationMode ? 'text-lg' : 'text-base'
      }`}
    >
      {/* Main Header with Branding & Prof. Anderson Firmo */}
      <Header
        onOpenStudyGuide={() => setIsStudyGuideOpen(true)}
        onOpenSearch={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isPresentationMode={isPresentationMode}
        setIsPresentationMode={setIsPresentationMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cover / Hero / Checkpoint Charlie Visual & Tactical Theater */}
        <HeroImpactSection onExploreClick={handleExploreClick} />

        {/* NEW THEATER MODEL: TEATRO DE DRAMATIZAÇÃO HISTÓRICA & SALA DE DECISÕES */}
        <HistoricalDramaTheater />

        {/* 1. CURRICULUM NAVIGATOR (8 Official Modules: A5, A6, B5, B6, A7, A8, B7, B8) */}
        <CurriculumNavigator
          activeChapter={selectedChapterCode}
          onSelectChapter={handleSelectChapter}
        />

        {/* 2. STUDY MODES TABS [/handwritten , /stick notes , /mindmap , /comic, /inforgraphic] */}
        <StudyModesTabs
          chapter={selectedChapter}
          activeMode={activeStudyMode}
          onSelectMode={setActiveStudyMode}
        />

        {/* 3. CHAPTER SUBTOPICS DETAIL (Strict Annex Order) */}
        <ChapterDetailView chapter={selectedChapter} />

        {/* 4. MASTER ANALOGIES SECTION (Pedagogical Metaphors across the 8 Modules) */}
        <AnalogiesMasterSection />

        {/* 5. HISTORICAL PROGRESSION & MILESTONES (1945 -> 1991 -> 2026) */}
        <ChronologicalMasterView />
        <TimelineInteractive />
        <BlocsComparison />
        <ConflictsAndSpace />

        {/* 6. SIMULADO 9º ANO BNCC (Sem Respostas Pre-Marcadas / Gabarito no Final) */}
        <QuizSection />
      </main>

      {/* Main Footer */}
      <Footer />

      {/* Comprehensive Printable / Downloadable Study Guide Modal */}
      <StudyGuideModal
        isOpen={isStudyGuideOpen}
        onClose={() => setIsStudyGuideOpen(false)}
      />

      {/* Modern Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectChapter={handleSelectChapter}
        onSelectStudyMode={(mode) => {
          setActiveStudyMode(mode);
          const detailView = document.getElementById('study-modes-section');
          detailView?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenStudyGuide={() => setIsStudyGuideOpen(true)}
      />

      {/* Student Learning Mastery Tracker & HUD */}
      <StudyMasteryTracker
        currentChapterCode={selectedChapterCode}
        onNavigateToChapter={handleSelectChapter}
        onNavigateToQuiz={() => {
          const quizEl = document.getElementById('quiz');
          quizEl?.scrollIntoView({ behavior: 'smooth' });
        }}
        onNavigateToTheater={() => {
          const theaterEl = document.getElementById('historical-theater-model');
          theaterEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </div>
  );
}
