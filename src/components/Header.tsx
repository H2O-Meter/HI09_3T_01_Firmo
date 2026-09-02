import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BookOpen, Award, Layers, Clock, ShieldAlert, Sparkles, Menu, X, Printer, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenStudyGuide: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isPresentationMode: boolean;
  setIsPresentationMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenStudyGuide,
  activeSection,
  setActiveSection,
  isPresentationMode,
  setIsPresentationMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ShieldAlert, badge: '4 Marcos' },
    { id: 'timeline', label: 'Linha do Tempo', icon: Clock, badge: '1945–1991' },
    { id: 'analogias', label: '3 Analogias', icon: Sparkles, badge: 'Obrigatórias' },
    { id: 'blocos', label: 'EUA x URSS', icon: Layers, badge: 'Ideologias' },
    { id: 'conflitos', label: 'Conflitos & Espaço', icon: BookOpen, badge: 'Proxy' },
    { id: 'quiz', label: 'Quiz 9º Ano', icon: Award, badge: 'Fixação' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-[#FBFBFB]/95 backdrop-blur-md border-b border-[#C9A84C]/30 shadow-xs transition-all"
    >
      {/* Top Banner with Teacher Identification */}
      <div className="bg-[#016E01] text-white py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#FD7600] animate-pulse"></span>
            <span>Ensino Fundamental II • 9º Ano • Capítulo A5</span>
            <span className="hidden sm:inline text-white/60">|</span>
            <span className="hidden sm:inline font-bold text-[#C9A84C]">História Contemporânea</span>
          </div>

          <div className="flex items-center gap-2 font-bold tracking-wide">
            <UserCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span className="text-[#FBFBFB]">Docente Responsável:</span>
            <span className="bg-[#FD7600] text-white px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-extrabold shadow-xs">
              Prof. Anderson Firmo
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center group">
            <BrandLogo size="md" />
          </a>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#016E01] text-white shadow-xs'
                    : 'text-[#1A202C] hover:bg-[#FD7600]/10 hover:text-[#FD7600]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C9A84C]' : 'text-current'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-presentation-mode"
            onClick={() => setIsPresentationMode(!isPresentationMode)}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
              isPresentationMode
                ? 'bg-[#FD7600] text-white border-[#FD7600] shadow-xs'
                : 'bg-white text-[#1A202C] border-gray-300 hover:border-[#FD7600] hover:text-[#FD7600]'
            }`}
            title="Alternar Modo Lousa / Apresentação"
          >
            <span>{isPresentationMode ? 'Modo Normal' : 'Modo Aula'}</span>
          </button>

          <button
            id="btn-study-guide"
            onClick={onOpenStudyGuide}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#FD7600] text-white hover:bg-[#e06900] shadow-xs hover:shadow-md transition-all cursor-pointer border border-[#C9A84C]/40"
          >
            <Printer className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">Guia de Estudos</span>
            <span className="sm:hidden">Guia</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1A202C] hover:bg-gray-100 cursor-pointer"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FD7600]" /> : <Menu className="w-6 h-6 text-[#016E01]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg text-left text-xs font-bold ${
                    isActive
                      ? 'bg-[#016E01] text-white'
                      : 'bg-gray-50 text-[#1A202C] hover:bg-orange-50 hover:text-[#FD7600]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#C9A84C]" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>Escola Parque Ipiranga</span>
            <span className="text-[#016E01] font-bold">Prof. Anderson Firmo</span>
          </div>
        </div>
      )}
    </header>
  );
};
