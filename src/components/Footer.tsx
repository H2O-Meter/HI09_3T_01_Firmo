import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BookOpen, Award, Sparkles, Shield, Heart, UserCheck, School } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#1A202C] text-white border-t-4 border-[#C9A84C] pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
          {/* Col 1: Brand & School Details (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size="md" />
            </div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              Material pedagógico digital estruturado para o <strong>9º Ano do Ensino Fundamental II</strong>. Capítulo A5 &mdash; <em>A Guerra Fria: O mundo dividido: armas, ideologias e o equilíbrio do terror.</em>
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C9A84C] font-bold">
              <span>☢️ Armas</span> &bull; <span>🚀 Espaço</span> &bull; <span>🧊 Tensão</span> &bull; <span>🏛️ Diplomacia</span>
            </div>
          </div>

          {/* Col 2: Academic Metadata & Teacher Identification (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FD7600]">
              <UserCheck className="w-4 h-4" />
              <span>Corpo Docente & Coordenação</span>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                Professor Titular de História:
              </div>
              <div className="text-lg font-black text-white font-display mt-0.5">
                Prof. Anderson Firmo
              </div>
              <div className="text-xs text-[#016E01] font-bold mt-1 bg-green-500/10 px-2.5 py-1 rounded inline-block border border-green-500/20">
                Escola Parque Ipiranga
              </div>
            </div>
          </div>

          {/* Col 3: Quick Pedagogical Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#C9A84C]">
              Módulos Didáticos
            </div>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li>
                <a href="#dashboard" className="hover:text-[#FD7600] transition-colors flex items-center gap-1.5">
                  <span>&bull;</span> Dashboard dos 4 Marcos (1945–1991)
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#FD7600] transition-colors flex items-center gap-1.5">
                  <span>&bull;</span> Linha do Tempo (7 Anos-Chave)
                </a>
              </li>
              <li>
                <a href="#analogias" className="hover:text-[#FD7600] transition-colors flex items-center gap-1.5">
                  <span>&bull;</span> As 3 Grandes Analogias
                </a>
              </li>
              <li>
                <a href="#blocos" className="hover:text-[#FD7600] transition-colors flex items-center gap-1.5">
                  <span>&bull;</span> Capitalismo x Socialismo
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-[#FD7600] transition-colors flex items-center gap-1.5">
                  <span>&bull;</span> Simulado Avaliativo do 9º Ano
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Identification */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} <strong>Escola Parque Ipiranga</strong> &bull; Todos os direitos pedagógicos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido para a disciplina de História do</span>
            <strong className="text-white font-bold">Prof. Anderson Firmo</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
