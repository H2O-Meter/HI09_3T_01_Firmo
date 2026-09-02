import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/historyData';
import { Shield, Sparkles, ChevronDown, Flame, Radio, Globe, Compass } from 'lucide-react';

interface HeroImpactSectionProps {
  onExploreClick: () => void;
}

export const HeroImpactSection: React.FC<HeroImpactSectionProps> = ({ onExploreClick }) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'resumo'>('visual');

  return (
    <section id="hero" className="relative pt-6 pb-12 overflow-hidden border-b-2 border-[#C9A84C]/30 bg-[#FBFBFB]">
      {/* Decorative Editorial Watermark */}
      <div className="absolute top-12 right-0 pointer-events-none select-none opacity-[0.03] text-[#1A202C] font-editorial text-[160px] font-black leading-none -z-0">
        1945-1991
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Eyebrow Bar */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#1A202C]/15 pb-3 mb-6 gap-3">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#FD7600] text-white text-[11px] font-black uppercase tracking-wider rounded-xs">
              ESCOLA PARQUE IPIRANGA
            </span>
            <span className="text-xs font-bold text-[#016E01] uppercase tracking-widest">
              {SCHOOL_INFO.grade}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-serif italic text-[#1A202C]">
            <span className="text-[#C9A84C] font-black uppercase tracking-wider not-italic text-[11px]">
              Material Didático Oficial
            </span>
            <span>•</span>
            <span className="font-bold text-[#016E01]">Prof. Anderson Firmo</span>
          </div>
        </div>

        {/* Main Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Editorial Headline & Pedagogy */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#016E01]/10 text-[#016E01] border-l-4 border-[#016E01] text-xs font-extrabold tracking-wider uppercase mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>{SCHOOL_INFO.chapter}</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-black text-[#1A202C] tracking-tight leading-[0.95] mb-4">
                A GUERRA <span className="text-[#FD7600]">FRIA</span>
              </h1>

              <div className="border-l-4 border-[#C9A84C] pl-4 py-1 mb-6 bg-white/70 shadow-xs rounded-r-md">
                <h2 className="text-lg sm:text-xl font-serif italic font-medium text-[#1A202C] leading-snug">
                  "{SCHOOL_INFO.subtopic}"
                </h2>
                <p className="text-xs text-[#016E01] font-bold mt-1 uppercase tracking-wider">
                  Supervisão e Curadoria Pedagógica: Prof. Anderson Firmo
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#1A202C]/85 leading-relaxed mb-6">
                Durante quase meio século, o planeta viveu sob a iminência de um apocalipse nuclear. Entre 1945 e 1991, 
                <strong className="text-[#1A202C]"> Estados Unidos (Capitalismo)</strong> e 
                <strong className="text-[#1A202C]"> União Soviética (Socialismo)</strong> disputaram a hegemonia global 
                através de alianças militares, guerras por procuração, espionagem de elite e uma corrida espacial sem precedentes.
              </p>

              {/* The 4 Core Emojis Showcase */}
              <div className="grid grid-cols-4 gap-2.5 p-3.5 bg-white border border-[#C9A84C]/40 rounded-lg shadow-xs mb-6">
                <div className="text-center p-2 rounded-md hover:bg-orange-50 transition-colors">
                  <div className="text-2xl mb-1">☢️</div>
                  <span className="text-[11px] font-bold uppercase tracking-tight block text-[#FD7600]">Nuclear</span>
                  <span className="text-[9px] text-gray-500">Arsenal & MAD</span>
                </div>
                <div className="text-center p-2 rounded-md hover:bg-orange-50 transition-colors">
                  <div className="text-2xl mb-1">🚀</div>
                  <span className="text-[11px] font-bold uppercase tracking-tight block text-[#016E01]">Espaço</span>
                  <span className="text-[9px] text-gray-500">Sputnik a Apollo</span>
                </div>
                <div className="text-center p-2 rounded-md hover:bg-orange-50 transition-colors">
                  <div className="text-2xl mb-1">🧊</div>
                  <span className="text-[11px] font-bold uppercase tracking-tight block text-blue-800">Tensão</span>
                  <span className="text-[9px] text-gray-500">Muro & Berlim</span>
                </div>
                <div className="text-center p-2 rounded-md hover:bg-orange-50 transition-colors">
                  <div className="text-2xl mb-1">🏛️</div>
                  <span className="text-[11px] font-bold uppercase tracking-tight block text-[#C9A84C]">Doutrinas</span>
                  <span className="text-[9px] text-gray-500">Yalta & Blocos</span>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#016E01] text-white font-bold text-sm rounded-lg hover:bg-[#015201] shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#C9A84C]"
              >
                <span>Explorar Dashboard & Linha do Tempo</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1A202C]/70">
                <Globe className="w-4 h-4 text-[#FD7600]" />
                <span>Base BNCC 9º Ano</span>
              </div>
            </div>
          </div>

          {/* Right Column: Suggested High-Impact Visual of the Berlin Wall (16:9 Dramatic) */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A202C] text-white rounded-xl overflow-hidden shadow-2xl border-4 border-[#C9A84C] relative">
              {/* Graphic Header / Badge */}
              <div className="bg-gradient-to-r from-[#1A202C] via-[#016E01] to-[#FD7600] px-4 py-2 flex items-center justify-between text-xs border-b border-[#C9A84C]/40">
                <span className="font-extrabold tracking-wider uppercase flex items-center gap-1.5 text-[#FBFBFB]">
                  <Flame className="w-3.5 h-3.5 text-[#FD7600]" />
                  Cenário de Impacto Histórico
                </span>
                <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded">
                  Aspecto 16:9 • Berlim 1961–1989
                </span>
              </div>

              {/* Atmospheric 16:9 Canvas / SVG Composition */}
              <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#2d3748] via-[#1a202c] to-[#0f1319] overflow-hidden group select-none">
                {/* Dramatic Sky & Clouds */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700/20 via-slate-700 to-black"></div>
                
                {/* Searchlight beams */}
                <div className="absolute -top-10 left-1/4 w-32 h-64 bg-yellow-100/10 blur-xl transform -rotate-45 pointer-events-none"></div>
                <div className="absolute -top-10 right-1/4 w-32 h-64 bg-cyan-100/10 blur-xl transform rotate-45 pointer-events-none"></div>

                {/* SVG Visual Composition: Berlin Wall, Tanks & Soldiers Silhouette */}
                <svg
                  className="w-full h-full object-cover"
                  viewBox="0 0 800 450"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Cena dramática do Muro de Berlim com tanques soviéticos e soldados americanos"
                >
                  {/* Horizon & Atmospheric Fog */}
                  <rect y="220" width="800" height="230" fill="#111827" />
                  
                  {/* Soviet Eastern Sector (Right side) - Red Tint */}
                  <rect x="420" y="0" width="380" height="450" fill="#991B1B" fillOpacity="0.08" />
                  
                  {/* Western American Sector (Left side) - Blue Tint */}
                  <rect x="0" y="0" width="380" height="450" fill="#1E3A8A" fillOpacity="0.08" />

                  {/* Guard Tower in Background */}
                  <path d="M380 140 L420 140 L410 260 L390 260 Z" fill="#374151" />
                  <rect x="370" y="110" width="60" height="35" rx="3" fill="#1F2937" stroke="#4B5563" strokeWidth="2" />
                  <circle cx="400" cy="125" r="5" fill="#FDE047" fillOpacity="0.8" />

                  {/* Checkpoint Charlie / Border Barrier Grid */}
                  <line x1="0" y1="260" x2="800" y2="260" stroke="#4B5563" strokeWidth="2" strokeDasharray="6 6" />

                  {/* Soviet T-54 Tank Silhouette (Right) */}
                  <g transform="translate(490, 240)">
                    {/* Tank Body */}
                    <path d="M20 50 L180 50 L200 70 L210 90 L10 90 L0 70 Z" fill="#262E3B" stroke="#FD7600" strokeWidth="1.5" />
                    {/* Turret */}
                    <path d="M50 50 Q100 20 150 50 Z" fill="#1F2937" />
                    {/* Cannon pointing West */}
                    <rect x="-40" y="32" width="100" height="7" fill="#111827" />
                    {/* Red Star on Turret */}
                    <polygon points="100,28 103,37 112,37 105,42 107,51 100,46 93,51 95,42 88,37 97,37" fill="#EF4444" />
                    {/* Tracks */}
                    <rect x="10" y="90" width="195" height="18" rx="8" fill="#0B0F17" stroke="#4B5563" />
                    <circle cx="35" cy="99" r="6" fill="#374151" />
                    <circle cx="70" cy="99" r="6" fill="#374151" />
                    <circle cx="105" cy="99" r="6" fill="#374151" />
                    <circle cx="140" cy="99" r="6" fill="#374151" />
                    <circle cx="175" cy="99" r="6" fill="#374151" />
                    {/* Soviet Soldier Silhouette */}
                    <circle cx="230" cy="40" r="8" fill="#111827" />
                    <path d="M220 48 L240 48 L245 100 L215 100 Z" fill="#1F2937" />
                    {/* Uschanka hat */}
                    <rect x="220" y="32" width="20" height="7" rx="2" fill="#991B1B" />
                    <line x1="240" y1="55" x2="255" y2="35" stroke="#111827" strokeWidth="3" />
                  </g>

                  {/* US Soldier & Guard Post Silhouette (Left) */}
                  <g transform="translate(90, 240)">
                    {/* Guard Booth / Checkpoint */}
                    <rect x="30" y="10" width="80" height="85" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
                    <rect x="25" y="5" width="90" height="10" fill="#0F172A" />
                    <text x="40" y="30" fill="#94A3B8" fontSize="8" fontWeight="bold">US ARMY</text>
                    {/* American Soldier Silhouette */}
                    <circle cx="140" cy="42" r="8" fill="#111827" />
                    <path d="M130 50 L150 50 L155 100 L125 100 Z" fill="#0F172A" />
                    {/* M1 Helmet */}
                    <path d="M130 40 Q140 32 150 40 Z" fill="#15803D" />
                    {/* M16 Rifle Silhouette */}
                    <line x1="145" y1="55" x2="165" y2="85" stroke="#000" strokeWidth="3" />
                    {/* Sandbags */}
                    <rect x="110" y="80" width="50" height="20" rx="4" fill="#78350F" />
                    <rect x="120" y="65" width="40" height="15" rx="3" fill="#92400E" />
                  </g>

                  {/* Central Concrete Berlin Wall */}
                  <g transform="translate(385, 180)">
                    {/* Concrete slabs */}
                    <rect x="0" y="20" width="30" height="220" fill="#9CA3AF" stroke="#4B5563" strokeWidth="2" />
                    <line x1="0" y1="80" x2="30" y2="80" stroke="#6B7280" strokeWidth="1.5" />
                    <line x1="0" y1="140" x2="30" y2="140" stroke="#6B7280" strokeWidth="1.5" />
                    {/* Cylindrical Pipe atop the wall to prevent climbing */}
                    <rect x="-3" y="12" width="36" height="12" rx="6" fill="#D1D5DB" stroke="#4B5563" />
                    
                    {/* Iconic Graffiti on the Western face of the wall */}
                    <text x="-70" y="100" fill="#FD7600" fontSize="14" fontWeight="900" transform="rotate(-90 -70 100)">FREIHEIT!</text>
                    <text x="-55" y="150" fill="#EAB308" fontSize="11" fontWeight="bold" transform="rotate(-90 -55 150)">PEACE 1989</text>
                    <circle cx="-15" cy="70" r="10" fill="#EF4444" fillOpacity="0.4" />
                    <path d="M-22 130 Q-10 120 -5 135" stroke="#38BDF8" strokeWidth="3" fill="none" />
                  </g>

                  {/* Barbed Wire on top */}
                  <path d="M0 240 Q 200 230 400 240 T 800 240" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 5" />
                </svg>

                {/* Dramatic Overlay Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FD7600] animate-ping"></span>
                      <p className="text-white font-serif font-black text-sm sm:text-base tracking-wide text-shadow">
                        O Muro de Berlim (1961–1989): O Front da Bipolaridade
                      </p>
                    </div>
                    <p className="text-gray-300 text-xs mt-0.5 line-clamp-1 sm:line-clamp-2">
                      Tanques soviéticos e soldados norte-americanos separados por poucos metros de concreto em Berlim dividida.
                    </p>
                  </div>
                  <div className="shrink-0 bg-[#FD7600]/90 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-[#C9A84C]">
                    Clima de Tensão Máxima
                  </div>
                </div>
              </div>

              {/* Bottom Quick Context Bar */}
              <div className="p-4 bg-[#1A202C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-[#1E3A8A] border border-white/40"></span>
                    <span>Bloco EUA (Ocidente)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-xs bg-[#991B1B] border border-white/40"></span>
                    <span>Bloco URSS (Oriente)</span>
                  </div>
                </div>
                <div className="text-[#C9A84C] font-semibold text-right text-[11px]">
                  Capítulo A5 • 9º Ano • Prof. Anderson Firmo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
