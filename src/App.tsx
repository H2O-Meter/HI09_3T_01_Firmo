import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroImpactSection } from './components/HeroImpactSection';
import { ChronologicalMasterView } from './components/ChronologicalMasterView';
import { DashboardMilestones } from './components/DashboardMilestones';
import { TimelineInteractive } from './components/TimelineInteractive';
import { AnalogiesSection } from './components/AnalogiesSection';
import { BlocsComparison } from './components/BlocsComparison';
import { ConflictsAndSpace } from './components/ConflictsAndSpace';
import { QuizSection } from './components/QuizSection';
import { StudyGuideModal } from './components/StudyGuideModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('cronologia-completa');
  const [isStudyGuideOpen, setIsStudyGuideOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  // Scroll Spy for section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'cronologia-completa',
        'dashboard',
        'timeline',
        'analogias',
        'blocos',
        'conflitos',
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
    const cronologia = document.getElementById('cronologia-completa');
    if (cronologia) {
      cronologia.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isPresentationMode={isPresentationMode}
        setIsPresentationMode={setIsPresentationMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cover / Hero / High-Impact 16:9 Visual */}
        <HeroImpactSection onExploreClick={handleExploreClick} />

        {/* Chronological Master View: 5 Sequential Eras (1945 -> 1991) */}
        <ChronologicalMasterView />

        {/* Dashboard 4 Milestones: 1945, 1962, 1989, 1991 */}
        <DashboardMilestones />

        {/* 7 Timeline Milestones: 1945, 1949, 1959, 1962, 1975, 1989, 1991 */}
        <TimelineInteractive />

        {/* 3 Mandatory Analogies */}
        <AnalogiesSection />

        {/* Capitalist vs Socialist Blocs */}
        <BlocsComparison />

        {/* Proxy Conflicts & Space Race */}
        <ConflictsAndSpace />

        {/* 9th Grade Interactive Quiz */}
        <QuizSection />
      </main>

      {/* Main Footer with Escola Parque Ipiranga and Prof. Anderson Firmo */}
      <Footer />

      {/* Printable Study Guide Modal */}
      <StudyGuideModal
        isOpen={isStudyGuideOpen}
        onClose={() => setIsStudyGuideOpen(false)}
      />
    </div>
  );
}
