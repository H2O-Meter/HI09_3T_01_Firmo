import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/historyData';
import { BrandLogo } from './BrandLogo';
import {
  ShieldAlert,
  Rocket,
  Snowflake,
  Landmark,
  ChevronDown,
  Globe2,
  Compass,
  Eye,
  Crosshair,
  MapPin,
  CheckCircle2,
  Info,
  Radio,
  Flame,
  Award,
  Layers,
  Sparkles,
} from 'lucide-react';

interface HeroImpactSectionProps {
  onExploreClick: () => void;
}

export const HeroImpactSection: React.FC<HeroImpactSectionProps> = ({ onExploreClick }) => {
  // Scenario Focus Mode (A: Standoff 1961, B: Death Strip Anatomy, C: Fall 1989)
  const [activeScenario, setActiveScenario] = useState<'standoff' | 'wall' | 'fall'>('standoff');
  const [selectedHotspot, setSelectedHotspot] = useState<number>(1);

  // Hotspots definitions for clarity
  const scenarioData = {
    standoff: {
      title: 'O Impasse dos Tanques em Checkpoint Charlie (Outubro de 1961)',
      subtitle: 'Friedrichstraße, Berlim • O momento em que a 3ª Guerra Mundial esteve a 100 metros de começar.',
      tag: 'Tensão Máxima • DEFCON 2',
      tagColor: 'bg-red-600 text-white',
      hotspots: [
        {
          id: 1,
          title: 'Blindados M48 Patton (EUA)',
          coord: 'left-[22%] top-[55%]',
          badge: 'Bloco EUA',
          badgeColor: 'bg-blue-600 text-white',
          desc: '10 tanques norte-americanos posicionados com motores ligados e munição real a postos para garantir o direito de livre circulação dos diplomatas ocidentais.',
          examTip: 'O impasse durou 16 horas até Kennedy e Kruschev acordarem um recuo simultâneo tanque por tanque.',
        },
        {
          id: 2,
          title: 'A Linha de Demarcação (Fronteira Fria)',
          coord: 'left-[50%] top-[45%]',
          badge: 'Ponto Zero',
          badgeColor: 'bg-[#FD7600] text-white',
          desc: 'A exata linha de asfalto onde o Setor Americano encontrava o Setor Soviético. Nenhuma das tropas podia cruzar sem autorização prévia sob risco de guerra total.',
          examTip: 'A famosa placa dizia: "YOU ARE LEAVING THE AMERICAN SECTOR" em 4 idiomas.',
        },
        {
          id: 3,
          title: 'Blindados T-54 Soviéticos (URSS)',
          coord: 'left-[78%] top-[55%]',
          badge: 'Bloco URSS',
          badgeColor: 'bg-red-700 text-white',
          desc: '10 tanques soviéticos da Guarda Vermelha posicionados em resposta imediata, com ordens expressas de Moscou para não permitir o avanço ocidental.',
          examTip: 'Demonstra a Doutrina de Dissuasão: a exibição de força para evitar o ataque inimigo sem disparar.',
        },
        {
          id: 4,
          title: 'Torre de Observação e Escuta (Stasi)',
          coord: 'left-[88%] top-[25%]',
          badge: 'Espionagem',
          badgeColor: 'bg-gray-800 text-white',
          desc: 'Postos de vigilância armada e inteligência soviética monitorando 24 horas por dia qualquer tentativa de fuga de alemães orientais para o Ocidente.',
          examTip: 'O Muro foi erguido pela RDA principalmente para estancar a fuga de cérebros (médicos, engenheiros) para Berlim Ocidental.',
        },
      ],
    },
    wall: {
      title: 'A Anatomia do Muro de Berlim e a Faixa da Morte (1961–1989)',
      subtitle: 'Mais de 155 km de extensão isolando a ilha capitalista de Berlim Ocidental.',
      tag: 'Estrutura de Concreto',
      tagColor: 'bg-[#FD7600] text-white',
      hotspots: [
        {
          id: 1,
          title: 'Muro Ocidental com Grafites',
          coord: 'left-[20%] top-[50%]',
          badge: 'Lado Ocidental',
          badgeColor: 'bg-blue-600 text-white',
          desc: 'Placas de concreto de 3,6m de altura com tubo cilíndrico superior para impedir cordas e ganchos. No lado ocidental, tornou-se tela livre de arte, protesto e apelos à paz.',
          examTip: 'O tubo superior de amianto/concreto redondo impedia qualquer ponto de apoio para escalada.',
        },
        {
          id: 2,
          title: 'A Faixa da Morte (Todesstreifen)',
          coord: 'left-[50%] top-[50%]',
          badge: 'Zona Neutra',
          badgeColor: 'bg-amber-600 text-white',
          desc: 'Área com areia fofa para registrar pegadas, refletores potentes, cerca elétrica, tapetes de pregos ("grama de Stalin") e cães de guarda treinados.',
          examTip: 'Guardas da RDA tinham ordem expressa de atirar para matar (Schießbefehl) em desertores.',
        },
        {
          id: 3,
          title: 'Torres com Soldados de Fronteira (Grenztruppen)',
          coord: 'left-[80%] top-[30%]',
          badge: 'Lado Oriental',
          badgeColor: 'bg-red-700 text-white',
          desc: '302 torres de vigilância armada com metralhadoras pesadas e holofotes móveis cruzados durante toda a madrugada.',
          examTip: 'Cerca de 140 pessoas morreram oficialmente tentando cruzar o Muro entre 1961 e 1989.',
        },
      ],
    },
    fall: {
      title: 'A Queda do Muro e a Ruptura da Cortina de Ferro (09/11/1989)',
      subtitle: 'O colapso da barreira física que simbolizou o esgotamento do modelo soviético.',
      tag: 'Marco Histórico',
      tagColor: 'bg-[#016E01] text-white',
      hotspots: [
        {
          id: 1,
          title: 'Posto de Bornholmer Straße',
          coord: 'left-[25%] top-[50%]',
          badge: 'Ponto da Abertura',
          badgeColor: 'bg-[#016E01] text-white',
          desc: 'O primeiro ponto de fronteira onde os guardas, sem ordens claras de Berlim Oriental, cederam à pressão de milhares de civis e abriram as cancelas.',
          examTip: 'A declaração ao vivo de Günter Schabowski afirmando que as viagens estavam liberadas "imediatamente" desencadeou a multidão.',
        },
        {
          id: 2,
          title: 'Os Mauerspechte (Pica-paus do Muro)',
          coord: 'left-[50%] top-[40%]',
          badge: 'Ação Cidadã',
          badgeColor: 'bg-[#FD7600] text-white',
          desc: 'População de ambos os lados subindo no topo do Muro com martelos, cinzéis e marretas para demolir o símbolo da divisão mundial.',
          examTip: 'Em menos de um ano (outubro de 1990), a Alemanha realizava sua reunificação formal sob liderança de Helmut Kohl.',
        },
        {
          id: 3,
          title: 'Fim Simbólico da Guerra Fria',
          coord: 'left-[75%] top-[50%]',
          badge: 'Geopolítica Global',
          badgeColor: 'bg-[#1A202C] text-white',
          desc: 'A queda em Berlim provocou um efeito dominó de abertura em toda a Europa Oriental (Polônia, Hungria, Romênia, Tchecoslováquia).',
          examTip: 'Dois anos depois (1991), a própria URSS se dissolvia oficialmente, encerrando o mundo bipolar.',
        },
      ],
    },
  };

  const currentScenario = scenarioData[activeScenario];
  const activeSpot =
    currentScenario.hotspots.find((h) => h.id === selectedHotspot) || currentScenario.hotspots[0];

  return (
    <section id="hero" className="relative pt-6 pb-12 overflow-hidden border-b-2 border-[#C9A84C]/30 bg-[#FBFBFB]">
      {/* Background Subtle Watermark */}
      <div className="absolute top-12 right-0 pointer-events-none select-none opacity-[0.02] text-[#1A202C] font-black text-[180px] leading-none -z-0">
        1945-1991
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow Bar with Compulsory Brand Logo */}
        <div className="flex flex-wrap items-center justify-between border-b border-[#1A202C]/15 pb-4 mb-6 gap-3">
          {/* Official Brand Logo */}
          <div className="flex items-center gap-3">
            <BrandLogo size="md" />
            <div className="flex flex-col border-l-2 border-[#C9A84C]/40 pl-3">
              <span className="text-xs font-black text-[#016E01] uppercase tracking-wider">
                {SCHOOL_INFO.grade}
              </span>
              <span className="text-[11px] font-semibold text-gray-600">
                História Geral & Contemporânea
              </span>
            </div>
          </div>

          {/* Teacher Badge */}
          <div className="flex items-center gap-2 bg-[#1A202C] px-3.5 py-1.5 rounded-xl border border-[#C9A84C]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FD7600] animate-pulse"></span>
            <span className="text-[11px] font-bold text-[#C9A84C] uppercase tracking-widest">
              Curadoria Pedagógica:
            </span>
            <span className="text-xs font-black text-white">Prof. Anderson Firmo</span>
          </div>
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Left Column: Editorial Headline & Presentation */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#016E01]/10 text-[#016E01] border-l-4 border-[#016E01] text-xs font-extrabold tracking-wider uppercase mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>{SCHOOL_INFO.chapter} • Bipolaridade Mundial</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-black text-[#1A202C] tracking-tight leading-[0.95] mb-4">
                A GUERRA <span className="text-[#FD7600]">FRIA</span>
              </h1>

              <div className="border-l-4 border-[#C9A84C] pl-4 py-1.5 mb-5 bg-white shadow-xs rounded-r-xl border-y border-r border-gray-100">
                <h2 className="text-base sm:text-lg font-serif italic font-medium text-[#1A202C] leading-snug">
                  "{SCHOOL_INFO.subtopic}"
                </h2>
                <p className="text-[11px] text-[#016E01] font-bold mt-1 uppercase tracking-wider">
                  Conteúdo Estruturado para o 9º Ano • Escola Parque Ipiranga
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#1A202C]/85 leading-relaxed mb-6">
                Durante quase meio século, o planeta viveu sob a iminência de um conflito nuclear total. Entre 1945 e 1991, 
                <strong className="text-[#1A202C]"> Estados Unidos (Bloco Ocidental)</strong> e 
                <strong className="text-[#1A202C]"> União Soviética (Bloco Oriental)</strong> disputaram a hegemonia global 
                através da diplomacia, espionagem, propaganda e corridas armamentista e espacial.
              </p>

              {/* 4 Modern Luxury Icon Badges (Simbolismos Obrigatórios) */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FD7600]" />
                    Os 4 Pilares Simbólicos Obrigatórios
                  </span>
                  <span className="text-[10px] font-bold text-[#016E01] bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    Capítulo A5
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {/* 1. Nuclear / Armas */}
                  <div className="p-3 rounded-xl bg-white border-2 border-amber-200/80 shadow-xs hover:border-[#FD7600] transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 text-[#FD7600] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black text-[#1A202C] uppercase tracking-tight">Nuclear</span>
                      <span className="text-sm">☢️</span>
                    </div>
                    <span className="text-[10px] text-gray-500 block leading-tight">
                      MAD & 70k Ogivas
                    </span>
                  </div>

                  {/* 2. Corrida Espacial */}
                  <div className="p-3 rounded-xl bg-white border-2 border-green-200/80 shadow-xs hover:border-[#016E01] transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 text-[#016E01] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black text-[#1A202C] uppercase tracking-tight">Espaço</span>
                      <span className="text-sm">🚀</span>
                    </div>
                    <span className="text-[10px] text-gray-500 block leading-tight">
                      Sputnik à Apollo
                    </span>
                  </div>

                  {/* 3. Tensão Bipolar / Muro */}
                  <div className="p-3 rounded-xl bg-white border-2 border-blue-200/80 shadow-xs hover:border-blue-600 transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Snowflake className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black text-[#1A202C] uppercase tracking-tight">Tensão</span>
                      <span className="text-sm">🧊</span>
                    </div>
                    <span className="text-[10px] text-gray-500 block leading-tight">
                      Muro & Berlim
                    </span>
                  </div>

                  {/* 4. Diplomacia & Doutrinas */}
                  <div className="p-3 rounded-xl bg-white border-2 border-[#C9A84C]/50 shadow-xs hover:border-[#C9A84C] transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black text-[#1A202C] uppercase tracking-tight">Diplomacia</span>
                      <span className="text-sm">🏛️</span>
                    </div>
                    <span className="text-[10px] text-gray-500 block leading-tight">
                      Yalta & Blocos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                id="btn-hero-explore"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#016E01] text-white font-bold text-sm rounded-xl hover:bg-[#015201] shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#C9A84C]"
              >
                <span>Navegar pelo Painel & Linha do Tempo</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                <Globe2 className="w-4 h-4 text-[#FD7600]" />
                <span>Alinhado às diretrizes da BNCC (EF09HI18)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reimagined, Professional, Crystal-Clear Historical Impact Theater */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A202C] text-white rounded-2xl overflow-hidden shadow-2xl border-3 border-[#C9A84C] flex flex-col justify-between">
              {/* Top Command Bar */}
              <div className="bg-gradient-to-r from-[#1A202C] via-[#016E01] to-[#FD7600] px-4 py-3 flex items-center justify-between text-xs border-b border-[#C9A84C]/40">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#FD7600]" />
                  <span className="font-extrabold tracking-wider uppercase text-white">
                    Teatro de Impacto Histórico
                  </span>
                </div>
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${currentScenario.tagColor}`}>
                  {currentScenario.tag}
                </span>
              </div>

              {/* Scenario Interactive Switcher Tabs */}
              <div className="grid grid-cols-3 bg-black/40 p-1.5 border-b border-gray-700 gap-1 text-xs">
                <button
                  onClick={() => {
                    setActiveScenario('standoff');
                    setSelectedHotspot(1);
                  }}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    activeScenario === 'standoff'
                      ? 'bg-[#FD7600] text-white shadow-xs'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>1961: Impasse</span>
                  <span className="text-xs">⚔️</span>
                </button>

                <button
                  onClick={() => {
                    setActiveScenario('wall');
                    setSelectedHotspot(1);
                  }}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    activeScenario === 'wall'
                      ? 'bg-[#FD7600] text-white shadow-xs'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Anatomia do Muro</span>
                  <span className="text-xs">🧱</span>
                </button>

                <button
                  onClick={() => {
                    setActiveScenario('fall');
                    setSelectedHotspot(1);
                  }}
                  className={`py-2 px-2 rounded-lg font-bold transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 cursor-pointer ${
                    activeScenario === 'fall'
                      ? 'bg-[#FD7600] text-white shadow-xs'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>1989: A Queda</span>
                  <span className="text-xs">🕊️</span>
                </button>
              </div>

              {/* Graphical Scenario Interactive Stage (16:9 Aspect) */}
              <div className="relative aspect-[16/9] w-full bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#020617] overflow-hidden select-none p-4">
                {/* Tactical Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                {/* Left Sector Indicator (US / Western) */}
                <div className="absolute left-3 top-3 bg-blue-950/80 border border-blue-500/40 text-blue-200 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm z-10">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Setor Ocidental (EUA/OTAN)</span>
                </div>

                {/* Right Sector Indicator (USSR / Eastern) */}
                <div className="absolute right-3 top-3 bg-red-950/80 border border-red-500/40 text-red-200 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm z-10">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span>Setor Oriental (URSS/Pacto)</span>
                </div>

                {/* Central Dividing Border Line (Checkpoint Charlie / Wall Line) */}
                <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-1 bg-gradient-to-b from-amber-400 via-[#FD7600] to-red-500 border-x border-black/40 z-0"></div>

                {/* Interactive Hotspot Pins */}
                {currentScenario.hotspots.map((spot) => {
                  const isSelected = selectedHotspot === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setSelectedHotspot(spot.id)}
                      className={`absolute ${spot.coord} -translate-x-1/2 -translate-y-1/2 z-20 group flex flex-col items-center cursor-pointer transition-all duration-300`}
                    >
                      {/* Animated Ping Ring */}
                      <div className="relative">
                        {isSelected && (
                          <span className="absolute -inset-2 rounded-full bg-[#FD7600] animate-ping opacity-75"></span>
                        )}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs shadow-xl border-2 transition-transform ${
                            isSelected
                              ? 'bg-[#FD7600] text-white border-white scale-125 ring-4 ring-[#FD7600]/40'
                              : 'bg-[#1A202C] text-[#C9A84C] border-[#C9A84C] group-hover:scale-110 group-hover:bg-[#016E01] group-hover:text-white'
                          }`}
                        >
                          {spot.id}
                        </div>
                      </div>

                      {/* Floating Tooltip Label */}
                      <span
                        className={`mt-1.5 px-2 py-0.5 rounded text-[10px] font-extrabold whitespace-nowrap shadow-md transition-all ${
                          isSelected
                            ? 'bg-white text-[#1A202C]'
                            : 'bg-black/70 text-gray-200 group-hover:bg-white group-hover:text-[#1A202C]'
                        }`}
                      >
                        {spot.title}
                      </span>
                    </button>
                  );
                })}

                {/* Center Warning Overlay */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-[10px] text-gray-300 border border-white/10 flex items-center gap-1.5 pointer-events-none">
                  <Crosshair className="w-3 h-3 text-[#FD7600]" />
                  <span>Clique nos marcadores (1, 2, 3) para inspecionar</span>
                </div>
              </div>

              {/* Inspector Detail Box for Selected Hotspot */}
              <div className="p-4 sm:p-5 bg-[#1A202C] border-t border-gray-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FD7600] text-white flex items-center justify-center text-xs font-black">
                      {activeSpot.id}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-white font-display">
                      {activeSpot.title}
                    </h4>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase ${activeSpot.badgeColor}`}>
                    {activeSpot.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-3">
                  {activeSpot.desc}
                </p>

                {/* Teacher's Focus Note */}
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-gray-300">
                    <strong className="text-[#C9A84C] font-bold block mb-0.5 uppercase tracking-wide">
                      Atenção para a Prova do 9º Ano:
                    </strong>
                    {activeSpot.examTip}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
