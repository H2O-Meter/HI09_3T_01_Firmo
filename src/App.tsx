/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BerlinWallArtwork } from './components/BerlinWallArtwork';
import { DashboardSection } from './components/DashboardSection';
import { TimelineSection } from './components/TimelineSection';
import { AnalogiesSection } from './components/AnalogiesSection';
import { BlocsComparisonSection } from './components/BlocsComparisonSection';
import { ConflictsAndSpaceSection } from './components/ConflictsAndSpaceSection';
import { QuizSection } from './components/QuizSection';
import { Footer } from './components/Footer';
import { StudyGuideModal } from './components/StudyGuideModal';
import { BrandLogo } from './components/BrandLogo';
import { SCHOOL_INFO } from './data/historyData';
import { Sparkles, BookOpen, ShieldAlert, Award, ArrowDown, ChevronRight, UserCheck, Flame, Compass } from 'lucide-react';

export default function App() {
  const [isStudyGuideOpen, setIsStudyGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  return (
    <div className={`min-h-screen bg-[#FBFBFB] text-[#1A202C] selection:bg-[#FD7600] selection:text-white flex flex-col font-sans ${isPresentationMode ? 'text-lg' : ''}`}>
      {/* Sticky Top Header */}
      <Header
        onOpenStudyGuide={() => setIsStudyGuideOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isPresentationMode={isPresentationMode}
        setIsPresentationMode={setIsPresentationMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* HERO / CAPA PRINCIPAL COM ESTÉTICA EDITORIAL */}
        <section id="capa" className="relative pt-8 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          {/* Top Academic Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#C9A84C]/40">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-[#016E01] text-white text-xs font-black uppercase tracking-widest rounded-md shadow-xs">
                {SCHOOL_INFO.grade}
              </span>
              <span className="px-3 py-1 bg-[#FD7600] text-white text-xs font-black uppercase tracking-widest rounded-md shadow-xs">
                {SCHOOL_INFO.chapter}
              </span>
            </div>

            {/* Teacher Identification in Hero Cover */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-xl border-2 border-[#C9A84C] shadow-xs">
              <UserCheck className="w-4 h-4 text-[#FD7600]" />
              <span className="text-xs text-gray-500 font-semibold">Professor:</span>
              <span className="text-xs sm:text-sm font-black text-[#016E01] uppercase tracking-wider">
                Prof. Anderson Firmo
              </span>
            </div>
          </div>

          {/* Editorial Grid: Headlines & Impact Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Title & Subtitle (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/70 border border-[#FD7600]/30 text-xs font-bold text-[#FD7600]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>História Contemporânea Mundial (1945–1991)</span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display text-[#FD7600] leading-[0.95] tracking-tight">
                  O MUNDO<br />
                  <span className="text-[#1A202C]">DIVIDIDO</span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-serif italic text-[#016E01] font-semibold mt-2">
                  A Guerra Fria
                </h2>
              </div>

              <div className="border-l-4 border-[#C9A84C] pl-4 py-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                  {SCHOOL_INFO.subtopic}
                </p>
                <span className="block text-xs font-bold text-[#FD7600] mt-1">
                  Aulas e curadoria didática: Prof. Anderson Firmo &bull; Escola Parque Ipiranga
                </span>
              </div>

              {/* Mandatory 4 Emojis Highlight Pills */}
              <div className="grid grid-cols-4 gap-2 pt-2">
                <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center shadow-xs hover:border-[#FD7600] transition-colors">
                  <div className="text-2xl">☢️</div>
                  <span className="text-[10px] uppercase font-bold text-gray-600 block mt-1">Nuclear</span>
                </div>
                <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center shadow-xs hover:border-[#016E01] transition-colors">
                  <div className="text-2xl">🚀</div>
                  <span className="text-[10px] uppercase font-bold text-gray-600 block mt-1">Espacial</span>
                </div>
                <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center shadow-xs hover:border-[#C9A84C] transition-colors">
                  <div className="text-2xl">🧊</div>
                  <span className="text-[10px] uppercase font-bold text-gray-600 block mt-1">Tensão</span>
                </div>
                <div className="bg-white p-3 rounded-xl border-2 border-gray-200 text-center shadow-xs hover:border-[#1A202C] transition-colors">
                  <div className="text-2xl">🏛️</div>
                  <span className="text-[10px] uppercase font-bold text-gray-600 block mt-1">Diplomacia</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#dashboard"
                  onClick={() => setActiveSection('dashboard')}
                  className="px-6 py-3 bg-[#FD7600] hover:bg-[#e06900] text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explorar Dashboard</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setIsStudyGuideOpen(true)}
                  className="px-5 py-3 bg-white hover:bg-gray-50 text-[#016E01] border-2 border-[#016E01] font-bold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Guia de Estudos</span>
                </button>
              </div>
            </div>

            {/* Right Column: Reconstituição Histórica 16:9 do Muro de Berlim (7 cols) */}
            <div className="lg:col-span-7">
              <BerlinWallArtwork />
            </div>
          </div>
        </section>

        {/* 1. DASHBOARD DOS 4 MARCOS (1945, 1962, 1989, 1991) */}
        <DashboardSection />

        {/* 2. LINHA DO TEMPO CRONOLÓGICA (1945, 1949, 1959, 1962, 1975, 1989, 1991) */}
        <TimelineSection />

        {/* 3. AS 3 GRANDES ANALOGIAS OBRIGATÓRIAS */}
        <AnalogiesSection />

        {/* 4. MUNDO BIPOLAR: EUA x URSS (PLANO MARSHALL, COMECON, OTAN, PACTO DE VARSÓVIA) */}
        <BlocsComparisonSection />

        {/* 5. CONFLITOS INDIRETOS & CORRIDA ESPACIAL (COREIA, VIETNÃ, CUBA, SPUTNIK, APOLLO 11) */}
        <ConflictsAndSpaceSection />

        {/* 6. QUIZ FORMATIVO DE FIXAÇÃO DO 9º ANO */}
        <QuizSection />
      </main>

      {/* FOOTER OFICIAL COM BRANDING COMPLETO */}
      <Footer />

      {/* MODAL DE GUIA DE ESTUDOS / IMPRESSÃO */}
      <StudyGuideModal
        isOpen={isStudyGuideOpen}
        onClose={() => setIsStudyGuideOpen(false)}
      />
    </div>
  );
}
