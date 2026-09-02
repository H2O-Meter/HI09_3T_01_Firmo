import React from 'react';
import { SCHOOL_INFO } from '../data/historyData';
import { BrandLogo } from './BrandLogo';
import { UserCheck, BookOpen, Shield, Heart, ArrowUp, ShieldAlert, Rocket, Snowflake, Landmark } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A202C] text-white border-t-4 border-[#C9A84C] relative overflow-hidden">
      {/* Decorative Gold Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FD7600] via-[#C9A84C] to-[#016E01]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-white/10">
          {/* Column 1: School Identity & Mandatory Brand Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 inline-block">
              <BrandLogo size="lg" showSubtitle={true} />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Plataforma educacional interativa desenvolvida para as turmas de <strong>9º Ano do Ensino Fundamental II</strong> da <strong>Escola Parque Ipiranga</strong>, integrando análise historiográfica e recursos didáticos visuais.
            </p>

            {/* 4 Professional Symbol Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-xs font-bold border border-white/10">
                <ShieldAlert className="w-3.5 h-3.5 text-[#FD7600]" />
                <span className="text-gray-200">☢️ Nuclear</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-xs font-bold border border-white/10">
                <Rocket className="w-3.5 h-3.5 text-[#016E01]" />
                <span className="text-gray-200">🚀 Espacial</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-xs font-bold border border-white/10">
                <Snowflake className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-gray-200">🧊 Tensão</span>
              </div>
              <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg text-xs font-bold border border-white/10">
                <Landmark className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="text-gray-200">🏛️ Diplomacia</span>
              </div>
            </div>
          </div>

          {/* Column 2: Pedagogical & Curriculum Info */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-editorial text-sm font-bold uppercase tracking-wider text-[#C9A84C]">
              Especificações Curriculares
            </h4>
            <ul className="text-xs text-gray-300 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FD7600] font-bold">•</span>
                <span><strong className="text-white">Segmento:</strong> {SCHOOL_INFO.grade}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FD7600] font-bold">•</span>
                <span><strong className="text-white">Unidade Temática:</strong> {SCHOOL_INFO.chapter} - "{SCHOOL_INFO.topic}"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FD7600] font-bold">•</span>
                <span><strong className="text-white">Subtema:</strong> {SCHOOL_INFO.subtopic}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FD7600] font-bold">•</span>
                <span><strong className="text-white">Habilidades BNCC:</strong> EF09HI28, EF09HI29, EF09HI30</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Docent Responsibility & Author */}
          <div className="md:col-span-3 space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 text-[#C9A84C]">
              <UserCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Corpo Docente Responsável
              </span>
            </div>
            <h4 className="font-editorial text-lg font-black text-white">
              Prof. Anderson Firmo
            </h4>
            <p className="text-[11px] text-gray-300 font-serif italic">
              Professor de História • Escola Parque Ipiranga
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-400">
              <span>Ano Letivo 2026</span>
              <span className="text-[#FD7600] font-bold">Material Homologado</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <span>© {new Date().getFullYear()} Escola Parque Ipiranga • Conteúdo desenvolvido pelo </span>
            <strong className="text-white font-bold">Prof. Anderson Firmo</strong>.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C9A84C] hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
