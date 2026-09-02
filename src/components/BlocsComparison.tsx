import React, { useState } from 'react';
import { BLOCS_DATA } from '../data/historyData';
import { Shield, DollarSign, Globe, Lock, Cpu, Eye, CheckCircle, Split } from 'lucide-react';

export const BlocsComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparativo' | 'marshall_comecon' | 'otan_varsovia'>('comparativo');

  const eua = BLOCS_DATA.capitalista;
  const urss = BLOCS_DATA.socialista;

  return (
    <section id="blocos" className="py-12 bg-white border-b border-[#C9A84C]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#1A202C]/15 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FD7600]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#016E01]">
                A Estrutura da Bipolaridade
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-black text-[#1A202C]">
              EUA x URSS: <span className="text-[#016E01]">O Mundo Bipolar</span>
            </h2>
            <p className="text-sm font-serif italic text-[#1A202C]/80 mt-1">
              Plano Marshall vs COMECON • OTAN vs Pacto de Varsóvia • CIA vs KGB • Prof. Anderson Firmo
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab('comparativo')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'comparativo'
                  ? 'bg-[#1A202C] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Visão Geral dos Blocos
            </button>
            <button
              onClick={() => setActiveTab('marshall_comecon')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'marshall_comecon'
                  ? 'bg-[#FD7600] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Plano Marshall x COMECON
            </button>
            <button
              onClick={() => setActiveTab('otan_varsovia')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'otan_varsovia'
                  ? 'bg-[#016E01] text-white shadow-xs'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              OTAN x Pacto de Varsóvia
            </button>
          </div>
        </div>

        {/* Dynamic Content Views */}
        {activeTab === 'comparativo' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bloco Capitalista (EUA) */}
            <div className="bg-[#F8FAFC] rounded-2xl border-2 border-blue-900 shadow-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-sm shadow-xs">
                      EUA
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-800 uppercase tracking-widest">
                        Bloco Ocidental
                      </span>
                      <h3 className="font-editorial text-xl font-black text-blue-950">
                        {eua.name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 font-bold text-xs">
                    Capitalismo
                  </span>
                </div>

                <div className="space-y-4 text-xs text-gray-800 mb-6">
                  <div className="p-3 bg-white rounded-lg border border-blue-100 shadow-2xs">
                    <strong className="text-blue-900 block uppercase font-bold text-[10px] mb-0.5">
                      Doutrina Ideológica
                    </strong>
                    <p>{eua.ideology}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-blue-100 shadow-2xs">
                    <strong className="text-blue-900 block uppercase font-bold text-[10px] mb-0.5">
                      Braço Econômico: {eua.economicPlan.name}
                    </strong>
                    <p>{eua.economicPlan.desc}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-blue-100 shadow-2xs">
                    <strong className="text-blue-900 block uppercase font-bold text-[10px] mb-0.5">
                      Aliança Militar: {eua.militaryAlliance.name}
                    </strong>
                    <p>{eua.militaryAlliance.desc}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-blue-100 shadow-2xs">
                    <strong className="text-blue-900 block uppercase font-bold text-[10px] mb-0.5">
                      Agência de Inteligência: {eua.intelligenceAgency.name}
                    </strong>
                    <p>{eua.intelligenceAgency.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-900 text-white rounded-xl text-xs">
                <span className="text-blue-300 font-bold uppercase text-[10px] block">
                  Propaganda & Estilo de Vida
                </span>
                <p className="font-serif italic mt-0.5">
                  "{eua.propagandaFocus}"
                </p>
              </div>
            </div>

            {/* Bloco Socialista (URSS) */}
            <div className="bg-[#FEF2F2] rounded-2xl border-2 border-red-900 shadow-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-red-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-900 text-white flex items-center justify-center font-black text-sm shadow-xs">
                      URSS
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest">
                        Bloco Oriental
                      </span>
                      <h3 className="font-editorial text-xl font-black text-red-950">
                        {urss.name}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-red-100 text-red-900 font-bold text-xs">
                    Socialismo
                  </span>
                </div>

                <div className="space-y-4 text-xs text-gray-800 mb-6">
                  <div className="p-3 bg-white rounded-lg border border-red-100 shadow-2xs">
                    <strong className="text-red-900 block uppercase font-bold text-[10px] mb-0.5">
                      Doutrina Ideológica
                    </strong>
                    <p>{urss.ideology}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-red-100 shadow-2xs">
                    <strong className="text-red-900 block uppercase font-bold text-[10px] mb-0.5">
                      Braço Econômico: {urss.economicPlan.name}
                    </strong>
                    <p>{urss.economicPlan.desc}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-red-100 shadow-2xs">
                    <strong className="text-red-900 block uppercase font-bold text-[10px] mb-0.5">
                      Aliança Militar: {urss.militaryAlliance.name}
                    </strong>
                    <p>{urss.militaryAlliance.desc}</p>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-red-100 shadow-2xs">
                    <strong className="text-red-900 block uppercase font-bold text-[10px] mb-0.5">
                      Agência de Inteligência: {urss.intelligenceAgency.name}
                    </strong>
                    <p>{urss.intelligenceAgency.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-red-900 text-white rounded-xl text-xs">
                <span className="text-red-300 font-bold uppercase text-[10px] block">
                  Propaganda & Estilo de Vida
                </span>
                <p className="font-serif italic mt-0.5">
                  "{urss.propagandaFocus}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Plano Marshall x COMECON View */}
        {activeTab === 'marshall_comecon' && (
          <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#FD7600] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
              <DollarSign className="w-6 h-6 text-[#FD7600]" />
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#1A202C]">
                  Duelo Econômico: Plano Marshall (1947) x COMECON (1949)
                </h3>
                <p className="text-xs text-gray-600">
                  Como os dois blocos financiaram suas esferas de influência e reconstruíram a Europa dividida.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-xl border-l-4 border-blue-800 shadow-xs">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest block mb-1">
                  EUA / Bloco Ocidental
                </span>
                <h4 className="font-editorial text-lg font-bold text-blue-950 mb-2">
                  Plano Marshall (European Recovery Program)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Proposto pelo Secretário de Estado George Marshall. Injetou mais de 13 bilhões de dólares em países como Reino Unido, França, Itália e Alemanha Ocidental.
                </p>
                <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
                  <strong>Objetivo Estratégico:</strong> Reconstruir o mercado europeu para exportações americanas e impedir a vitória de partidos comunistas locais.
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border-l-4 border-red-800 shadow-xs">
                <span className="text-xs font-bold text-red-800 uppercase tracking-widest block mb-1">
                  URSS / Bloco Oriental
                </span>
                <h4 className="font-editorial text-lg font-bold text-red-950 mb-2">
                  COMECON (Conselho para Assistência Econômica Mútua)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Criado por Stalin em resposta direta ao Plano Marshall. Proibia os países do Leste Europeu de aceitar dólares americanos e integrava suas economias a Moscou.
                </p>
                <div className="p-3 bg-red-50 rounded-lg text-xs text-red-900">
                  <strong>Objetivo Estratégico:</strong> Manter a fidelidade dos países satélites (Polônia, Hungria, Romênia, RDA) sob a tutela soviética.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed OTAN x Pacto de Varsóvia View */}
        {activeTab === 'otan_varsovia' && (
          <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#016E01] shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200">
              <Shield className="w-6 h-6 text-[#016E01]" />
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#1A202C]">
                  Duelo Militar: OTAN (1949) x Pacto de Varsóvia (1955)
                </h3>
                <p className="text-xs text-gray-600">
                  As duas maiores máquinas de guerra da história frente a frente na Europa Central.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-xl border-l-4 border-blue-800 shadow-xs">
                <span className="text-xs font-bold text-blue-800 uppercase tracking-widest block mb-1">
                  Tratado de Defesa Ocidental
                </span>
                <h4 className="font-editorial text-lg font-bold text-blue-950 mb-2">
                  OTAN (NATO - 1949)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  O Artigo 5º do tratado estabeleceu a cláusula de defesa coletiva: um ataque contra qualquer membro em solo europeu ou americano é considerado um ataque contra todos.
                </p>
                <div className="p-3 bg-blue-50 rounded-lg text-xs text-blue-900">
                  <strong>Membros Fundadores:</strong> EUA, Reino Unido, França, Canadá, Itália, Portugal, Bélgica, Holanda, Luxemburgo, Dinamarca, Noruega e Islândia.
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border-l-4 border-red-800 shadow-xs">
                <span className="text-xs font-bold text-red-800 uppercase tracking-widest block mb-1">
                  Tratado de Defesa Oriental
                </span>
                <h4 className="font-editorial text-lg font-bold text-red-950 mb-2">
                  Pacto de Varsóvia (1955)
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Assinado na capital polonesa logo após a Alemanha Ocidental ser integrada e rearmada dentro da OTAN. Unificava as forças armadas do bloco sob o marechal soviético.
                </p>
                <div className="p-3 bg-red-50 rounded-lg text-xs text-red-900">
                  <strong>Membros:</strong> URSS, Alemanha Oriental (RDA), Polônia, Tchecoslováquia, Hungria, Romênia, Bulgária e Albânia.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
