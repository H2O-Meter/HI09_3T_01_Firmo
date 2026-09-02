import React, { useState } from 'react';
import { Eye, Info, ShieldAlert, Sparkles, MapPin, Maximize2 } from 'lucide-react';

export const BerlinWallArtwork: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [showAnnotationModal, setShowAnnotationModal] = useState(false);

  const hotspots = [
    {
      id: 'east',
      title: 'Setor Oriental (URSS / RDA)',
      desc: 'Tanques soviéticos T-54/55 posicionados e patrulhas armadas da Stasi. Zona de segurança militar e proibição de travessia.',
      x: '18%',
      y: '68%',
      color: '#991B1B',
    },
    {
      id: 'wall',
      title: 'O Muro de Berlim (1961–1989)',
      desc: '155 km de concreto armado e arame farpado cindindo a cidade. No lado ocidental, tornou-se tela de grafites e protesto.',
      x: '50%',
      y: '55%',
      color: '#C9A84C',
    },
    {
      id: 'west',
      title: 'Setor Ocidental (EUA / RFA)',
      desc: 'Soldados norte-americanos e aliados no Checkpoint Charlie, com veículos militares M48 Patton em prontidão contínua.',
      x: '82%',
      y: '68%',
      color: '#1E3A8A',
    },
    {
      id: 'sky',
      title: 'Céu de Tensão Máxima',
      desc: 'Nuvens carregadas e holofotes de vigilância: o clima psicológico de uma guerra que podia eclodir a qualquer momento.',
      x: '50%',
      y: '18%',
      color: '#FD7600',
    },
  ];

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A84C] bg-[#1A202C] shadow-2xl group">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-16/9 overflow-hidden select-none">
        {/* Sky Background with Atmospheric Clouds & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#0f172a]">
          {/* Cloud layers */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200 via-slate-600 to-transparent"></div>
          {/* Searchlight beams */}
          <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-amber-100/20 to-transparent transform -rotate-12 blur-sm origin-top"></div>
          <div className="absolute top-0 right-1/3 w-40 h-full bg-gradient-to-b from-amber-100/15 to-transparent transform rotate-18 blur-md origin-top"></div>
        </div>

        {/* Vector Landscape Scene: Berlin Cold War Tension */}
        <svg
          viewBox="0 0 1200 675"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#182232" />
              <stop offset="50%" stopColor="#3b4856" />
              <stop offset="100%" stopColor="#252f3d" />
            </linearGradient>

            <linearGradient id="wallTexture" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="48%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#475569" />
              <stop offset="52%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="sovietGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e1b18" />
              <stop offset="100%" stopColor="#3a2a28" />
            </linearGradient>

            <linearGradient id="usGround" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            <filter id="wallGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Distant Berlin Skyline Silhouette */}
          <path
            d="M0 380 L60 380 L60 340 L120 340 L120 380 L220 380 L250 310 L280 380 L400 380 L420 330 L450 330 L470 380 L600 380 L600 300 L620 300 L640 380 L750 380 L780 350 L840 350 L870 380 L980 380 L1020 320 L1050 320 L1080 380 L1200 380 L1200 675 L0 675 Z"
            fill="#111827"
            opacity="0.75"
          />

          {/* Ground Sectors */}
          {/* East Side Ground */}
          <polygon points="0,420 570,430 550,675 0,675" fill="url(#sovietGround)" />
          {/* West Side Ground */}
          <polygon points="630,430 1200,420 1200,675 650,675" fill="url(#usGround)" />

          {/* Watchtower on East Sector */}
          <g transform="translate(220, 240)">
            <rect x="0" y="40" width="36" height="150" fill="#1f2937" />
            <rect x="-10" y="10" width="56" height="35" fill="#374151" rx="2" />
            <line x1="2" y1="20" x2="34" y2="20" stroke="#fef08a" strokeWidth="3" opacity="0.8" />
            <polygon points="18,10 0,0 36,0" fill="#111827" />
            {/* Searchlight cone from tower */}
            <polygon points="18,25 -80,240 120,240" fill="#fef08a" opacity="0.12" />
          </g>

          {/* Soviet Heavy Tank (T-54/55) on the Left */}
          <g transform="translate(80, 430)">
            {/* Tracks */}
            <rect x="20" y="80" width="220" height="35" rx="15" fill="#18181b" stroke="#3f3f46" strokeWidth="3" />
            <circle cx="50" cy="98" r="12" fill="#27272a" />
            <circle cx="85" cy="98" r="12" fill="#27272a" />
            <circle cx="120" cy="98" r="12" fill="#27272a" />
            <circle cx="155" cy="98" r="12" fill="#27272a" />
            <circle cx="190" cy="98" r="12" fill="#27272a" />
            <circle cx="218" cy="98" r="8" fill="#52525b" />
            {/* Hull */}
            <polygon points="10,80 40,40 220,40 245,80" fill="#2e3b2e" stroke="#1c261c" strokeWidth="2" />
            {/* Turret */}
            <ellipse cx="120" cy="35" rx="55" ry="22" fill="#384938" stroke="#1c261c" strokeWidth="2" />
            {/* Cannon pointing right toward the wall */}
            <rect x="150" y="28" width="130" height="10" fill="#1c261c" rx="2" />
            <rect x="270" y="25" width="15" height="16" fill="#18181b" rx="2" />
            {/* Red Star Emblem */}
            <polygon
              points="120,22 123,30 131,30 125,35 127,43 120,38 113,43 115,35 109,30 117,30"
              fill="#dc2626"
            />
            {/* Soviet Guard Soldier Silhouette */}
            <circle cx="275" cy="85" r="7" fill="#1c261c" />
            <path d="M268 93 L282 93 L286 130 L264 130 Z" fill="#2e3b2e" />
            <line x1="282" y1="95" x2="295" y2="125" stroke="#18181b" strokeWidth="3" />
          </g>

          {/* American Patrol & Armor (M48 Patton & Checkpoint) on the Right */}
          <g transform="translate(860, 430)">
            {/* US Armor Tracks */}
            <rect x="20" y="80" width="220" height="35" rx="15" fill="#0f172a" stroke="#334155" strokeWidth="3" />
            <circle cx="50" cy="98" r="12" fill="#1e293b" />
            <circle cx="85" cy="98" r="12" fill="#1e293b" />
            <circle cx="120" cy="98" r="12" fill="#1e293b" />
            <circle cx="155" cy="98" r="12" fill="#1e293b" />
            <circle cx="190" cy="98" r="12" fill="#1e293b" />
            {/* Hull */}
            <polygon points="15,80 45,45 225,45 245,80" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            {/* Turret */}
            <ellipse cx="140" cy="40" rx="55" ry="24" fill="#475569" stroke="#0f172a" strokeWidth="2" />
            {/* Cannon pointing left toward the wall */}
            <rect x="-20" y="32" width="130" height="10" fill="#0f172a" rx="2" />
            {/* White Star US Army Emblem */}
            <polygon
              points="140,28 143,36 151,36 145,41 147,49 140,44 133,49 135,41 129,36 137,36"
              fill="#ffffff"
            />
            {/* US Soldiers Silhouette */}
            <circle cx="-10" cy="85" r="7" fill="#1e293b" />
            <path d="M-18 93 L-2 93 L2 130 L-22 130 Z" fill="#334155" />
            <line x1="-15" y1="95" x2="-30" y2="120" stroke="#0f172a" strokeWidth="3" />
          </g>

          {/* THE BERLIN WALL (Center Monolith with concrete slabs & Graffiti) */}
          <g filter="url(#wallGlow)">
            {/* Wall shadow */}
            <polygon points="530,360 670,360 690,675 510,675" fill="#090d16" opacity="0.6" />
            {/* Main Concrete Wall Structure */}
            <polygon points="560,320 640,320 655,675 545,675" fill="url(#wallTexture)" />
            {/* Wall Top Round Pipe Guard (Grenzmauer 75 design) */}
            <ellipse cx="600" cy="320" rx="46" ry="10" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />

            {/* Vertical Segment Lines of Concrete Panels */}
            <line x1="570" y1="330" x2="560" y2="675" stroke="#334155" strokeWidth="2" opacity="0.6" />
            <line x1="600" y1="330" x2="600" y2="675" stroke="#1e293b" strokeWidth="2.5" opacity="0.7" />
            <line x1="630" y1="330" x2="640" y2="675" stroke="#334155" strokeWidth="2" opacity="0.6" />

            {/* West Side Graffiti (Bold expressive typography) */}
            {/* "FREIHEIT" (Liberty) in Orange & Gold */}
            <text
              x="620"
              y="450"
              fontFamily="'Outfit', sans-serif"
              fontWeight="900"
              fontSize="28"
              fill="#FD7600"
              stroke="#1A202C"
              strokeWidth="1.5"
              transform="rotate(90 620 450)"
            >
              FREIHEIT
            </text>

            {/* Peace Symbol on Wall */}
            <g transform="translate(605, 520) scale(0.6)">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#016E01" strokeWidth="4" />
              <line x1="20" y1="2" x2="20" y2="38" stroke="#016E01" strokeWidth="4" />
              <line x1="20" y1="20" x2="7" y2="33" stroke="#016E01" strokeWidth="4" />
              <line x1="20" y1="20" x2="33" y2="33" stroke="#016E01" strokeWidth="4" />
            </g>

            {/* "1961 - 1989" in Gold */}
            <text
              x="625"
              y="590"
              fontFamily="monospace"
              fontWeight="700"
              fontSize="16"
              fill="#C9A84C"
              transform="rotate(90 625 590)"
            >
              1961—1989
            </text>

            {/* Spray paint splashes and drips */}
            <circle cx="615" cy="380" r="6" fill="#38bdf8" />
            <circle cx="628" cy="405" r="4" fill="#f43f5e" />
            <circle cx="612" cy="500" r="5" fill="#facc15" />

            {/* Barbed Wire on top */}
            <path
              d="M540 310 Q 570 300, 600 310 T 660 310"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2.5"
            />
            <line x1="560" y1="302" x2="570" y2="318" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="590" y1="302" x2="600" y2="318" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="620" y1="302" x2="630" y2="318" stroke="#cbd5e1" strokeWidth="2" />
          </g>

          {/* Atmosphere Fog & Vignette overlay */}
          <rect x="0" y="620" width="1200" height="55" fill="url(#usGround)" opacity="0.4" />
        </svg>

        {/* Dynamic Interactive Hotspots */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
            style={{ left: spot.x, top: spot.y }}
          >
            <button
              id={`hotspot-${spot.id}`}
              onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
              className="relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-transform hover:scale-125 cursor-pointer focus:outline-hidden"
              style={{ backgroundColor: spot.color }}
              title={spot.title}
            >
              <span className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: spot.color }}></span>
              <Info className="w-4 h-4 text-white relative z-10" />
            </button>

            {/* Popup Tooltip */}
            {activeHotspot === spot.id && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border-2 border-[#C9A84C] text-[#1A202C] text-xs z-40 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between font-extrabold text-[#FD7600] pb-1 border-b border-gray-100">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {spot.title}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }}
                    className="text-gray-400 hover:text-gray-700 font-bold"
                  >
                    ✕
                  </button>
                </div>
                <p className="mt-1.5 text-gray-700 leading-relaxed">{spot.desc}</p>
              </div>
            )}
          </div>
        ))}

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg border border-[#C9A84C]/50 text-white text-xs">
          <ShieldAlert className="w-4 h-4 text-[#FD7600]" />
          <span className="font-bold tracking-wider uppercase text-[11px] text-[#C9A84C]">
            Reconstitui&ccedil;&atilde;o Hist&oacute;rica &bull; 16:9 4K
          </span>
        </div>

        {/* Bottom Dramatic Narrative Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="max-w-2xl">
            <span className="text-[#C9A84C] font-mono text-[11px] font-bold uppercase tracking-widest block mb-1">
              Imagem de Impacto Sugerida • Berlim em Tensão Máxima
            </span>
            <h4 className="text-white text-base sm:text-lg font-bold font-display leading-snug">
              Muro de Berlim: Tanques Soviéticos, Soldados Americanos e o Grafite da Liberdade
            </h4>
            <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-relaxed hidden sm:block">
              Céu cinzento e nuvens carregadas: o símbolo palpável de um mundo cindido entre duas superpotências armadas com milhares de ogivas nucleares.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowAnnotationModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#016E01] hover:bg-[#015201] text-white text-xs font-bold rounded-lg border border-[#C9A84C]/40 shadow-md transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span>Ver Análise Visual</span>
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {showAnnotationModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FBFBFB] border-4 border-[#C9A84C] rounded-2xl max-w-lg w-full p-6 text-[#1A202C] shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b pb-3 border-gray-200">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-[#FD7600] text-white">
                  <Sparkles className="w-4 h-4" />
                </span>
                <h3 className="text-base font-black uppercase text-[#1A202C]">
                  Análise Iconográfica (Prof. Anderson Firmo)
                </h3>
              </div>
              <button
                onClick={() => setShowAnnotationModal(false)}
                className="text-gray-400 hover:text-gray-800 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-gray-700">
              <div className="p-3 bg-red-50 border-l-4 border-red-700 rounded-r-lg">
                <strong className="text-red-900 block font-bold">1. Setor Oriental (Leste Soviético):</strong>
                A RDA e a URSS isolaram Berlim Ocidental a partir de agosto de 1961 para conter a emigração em massa para o lado capitalista.
              </div>
              <div className="p-3 bg-blue-50 border-l-4 border-blue-700 rounded-r-lg">
                <strong className="text-blue-900 block font-bold">2. Setor Ocidental (Oeste Aliado):</strong>
                Representava uma "ilha de capitalismo" cercada pela Alemanha Oriental comunista, vigiada por tropas dos EUA, França e Grã-Bretanha.
              </div>
              <div className="p-3 bg-orange-50 border-l-4 border-[#FD7600] rounded-r-lg">
                <strong className="text-[#FD7600] block font-bold">3. Os Grafites no Muro:</strong>
                No lado ocidental, a população transformou o concreto cinzento em protesto artístico internacional com pedidos de liberdade ("Freiheit") e paz mundial.
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setShowAnnotationModal(false)}
                className="px-4 py-2 bg-[#016E01] text-white text-xs font-bold rounded-lg hover:bg-[#015201] cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
