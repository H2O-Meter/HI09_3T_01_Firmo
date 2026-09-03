import React, { useState } from 'react';
import {
  Theater,
  Users,
  MessageSquare,
  Scale,
  Sparkles,
  BookOpen,
  Award,
  ChevronRight,
  ChevronLeft,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Radio,
  FileText,
  RotateCcw,
  Compass,
} from 'lucide-react';

interface DramaCharacter {
  id: string;
  name: string;
  role: string;
  faction: 'eua' | 'urss' | 'brasil' | 'chile' | 'alemanha' | 'neutro';
  factionLabel: string;
  factionColor: string;
  actorArchetype: string;
  coreMotivation: string;
  keyQuote: string;
  avatarIcon: string;
}

interface DramaDialogue {
  id: number;
  speakerId: string;
  speakerName: string;
  stageDirection?: string;
  text: string;
  mood: 'tenso' | 'grave' | 'resoluto' | 'emocionado' | 'frio';
}

interface DecisionChoice {
  id: 'historical' | 'alternative_hard' | 'alternative_soft';
  title: string;
  subtitle: string;
  historicalAction: boolean;
  consequences: string;
  whatIfAnalysis: string;
  teacherBizu: string;
}

interface HistoricalPlay {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  period: string;
  curriculumModule: string;
  bnccSkill: string;
  settingDescription: string;
  characters: DramaCharacter[];
  acts: {
    actNumber: number;
    actTitle: string;
    atmosphere: string;
    dialogues: DramaDialogue[];
  }[];
  dilemma: {
    title: string;
    protagonist: string;
    context: string;
    question: string;
    choices: DecisionChoice[];
  };
  classroomGuide: {
    suggestedRoles: string[];
    performanceTips: string;
    reflectionPrompts: string[];
  };
}

export const HistoricalDramaTheater: React.FC = () => {
  const plays: HistoricalPlay[] = [
    {
      id: 'cuba-1962',
      code: 'PEÇA 1',
      title: 'Os 13 Dias de Outubro: O Gabinete de Guerra',
      subtitle: 'A Crise dos Mísseis de Cuba e o momento mais próximo do apocalipse nuclear.',
      period: '16 a 28 de Outubro de 1962',
      curriculumModule: 'Módulo A5: A Guerra Fria',
      bnccSkill: 'EF09HI18 • O Equilíbrio do Terror e a Doutrina de Destruição Mútua Assegurada (MAD)',
      settingDescription:
        'Salão Oval da Casa Branca, Washington D.C., iluminado por lâmpadas noturnas. Mapas do Caribe e fotografias ampliadas tiradas por aviões espiões U-2 cobrem a mesa de reuniões do ExComm.',
      characters: [
        {
          id: 'jfk',
          name: 'John F. Kennedy',
          role: 'Presidente dos Estados Unidos',
          faction: 'eua',
          factionLabel: 'EUA • Casa Branca',
          factionColor: 'bg-blue-600 text-white',
          actorArchetype: 'Líder jovem sob pressão avassaladora de generais linha-dura.',
          coreMotivation: 'Evitar o confronto nuclear global sem parecer fraco diante do eleitorado e de Moscou.',
          keyQuote: '"Um ataque surpresa contra Cuba colocaria os EUA no mesmo papel do Japão em Pearl Harbor. Não farei isso."',
          avatarIcon: '🇺🇸',
        },
        {
          id: 'lemay',
          name: 'Gen. Curtis LeMay',
          role: 'Chefe do Estado-Maior da Força Aérea dos EUA',
          faction: 'eua',
          factionLabel: 'Pentágono • Linha-Dura',
          factionColor: 'bg-indigo-900 text-white',
          actorArchetype: 'Militar veterano e implacável defensor do bombardeio preventivo total.',
          coreMotivation: 'Destruir todos os mísseis soviéticos em Cuba antes que estejam operacionais.',
          keyQuote: '"Bloqueio naval não resolve nada, senhor Presidente! Temos que entrar lá e destruir tudo antes do café da manhã!"',
          avatarIcon: '🎖️',
        },
        {
          id: 'khrushchev',
          name: 'Nikita Kruschev',
          role: 'Primeiro-Secretário do Partido Comunista da URSS',
          faction: 'urss',
          factionLabel: 'URSS • Kremlin',
          factionColor: 'bg-red-700 text-white',
          actorArchetype: 'Estrategista impetuoso, mas consciente do risco do fim da civilização.',
          coreMotivation: 'Proteger Cuba de uma nova invasão americana e equilibrar a presença dos mísseis Júpiter dos EUA na Turquia.',
          keyQuote: '"Nós e vocês não devemos puxar as extremidades da corda onde amarraram o nó da guerra."',
          avatarIcon: '☭',
        },
        {
          id: 'arkhipov',
          name: 'Vassili Arkhipov',
          role: 'Comandante da Brigada de Submarinos Soviéticos (B-59)',
          faction: 'urss',
          factionLabel: 'Mar do Caribe • Frota Vermelha',
          factionColor: 'bg-amber-700 text-white',
          actorArchetype: 'Oficial sereno a centenas de metros sob a água, recusando-se a ceder ao pânico.',
          coreMotivation: 'Impedir o lançamento do torpedo nuclear com ogiva atômica em meio a ataques de cargas de profundidade.',
          keyQuote: '"Não autorizo o disparo da ogiva nuclear. Subiremos à superfície e identificaremos a nossa bandeira."',
          avatarIcon: '⚓',
        },
      ],
      acts: [
        {
          actNumber: 1,
          actTitle: 'Ato I: As Fotografias do U-2 no Salão Oval',
          atmosphere: 'Madrugada fria de outubro. O choque da constatação de que ogivas nucleares estão a 150 km da Flórida.',
          dialogues: [
            {
              id: 1,
              speakerId: 'lemay',
              speakerName: 'Gen. Curtis LeMay',
              stageDirection: 'Batendo com o punho fechado sobre as fotos de satélite espalhadas na mesa',
              text: 'Senhor Presidente, as fotos não mentem. São plataformas de lançamento de mísseis soviéticos R-12 em San Cristóbal. Se não lançarmos um ataque aéreo maciço nas próximas 48 horas, o território americano estará sob a mira direta de Moscou!',
              mood: 'tenso',
            },
            {
              id: 2,
              speakerId: 'jfk',
              speakerName: 'John F. Kennedy',
              stageDirection: 'Olhando fixamente pela janela em direção ao jardim da Casa Branca',
              text: 'E o que acontece, General, se bombardeamos Cuba e os oficiais soviéticos no solo retaliarem disparando os mísseis restantes contra Miami ou Washington? Ou pior: se invadirem Berlim Ocidental na manhã seguinte?',
              mood: 'grave',
            },
            {
              id: 3,
              speakerId: 'lemay',
              speakerName: 'Gen. Curtis LeMay',
              stageDirection: 'Com expressão inflexível e queixo erguido',
              text: 'Eles não farão nada se mostrarmos força! Eles só respeitam o poder das armas!',
              mood: 'resoluto',
            },
            {
              id: 4,
              speakerId: 'jfk',
              speakerName: 'John F. Kennedy',
              stageDirection: 'Voltando-se para o gabinete com voz comedida e firme',
              text: 'Eles farão exatamente o que nós faríamos se nos encurralassem. Não iniciaremos um ataque de surpresa. Estabeleceremos uma linha de quarentena naval no Caribe. Daremos a Kruschev tempo e espaço diplomático para recuar com dignidade.',
              mood: 'resoluto',
            },
          ],
        },
        {
          actNumber: 2,
          actTitle: 'Ato II: O Sábado Negro e o Submarino B-59',
          atmosphere: '27 de Outubro de 1962. O avião U-2 é abatido sobre Cuba. No fundo do oceano, a temperatura no submarino B-59 passa de 50°C.',
          dialogues: [
            {
              id: 5,
              speakerId: 'arkhipov',
              speakerName: 'Vassili Arkhipov',
              stageDirection: 'Limpando o suor da testa em meio ao alarme sonoro ensurdecedor de cargas de profundidade',
              text: 'Capitão Savitsky, abaixe a chave de lançamento! Nós estamos sem contato com o comando central de Moscou há quatro dias. Não temos ordem expressa do Kremlin para deflagrar um ataque nuclear!',
              mood: 'tenso',
            },
            {
              id: 6,
              speakerId: 'arkhipov',
              speakerName: 'Vassili Arkhipov',
              stageDirection: 'Colocando-se fisicamente entre o oficial de armas e o console da ogiva atômica',
              text: 'Estas cargas de sinalização lançadas pelos destróieres dos EUA são para nos forçar a emergir, não para nos afundar. Se dispararmos este torpedo de 10 quilotons agora, nós mataremos milhões de civis e iniciaremos o fim do mundo. Eu veto o lançamento. Emersão imediata!',
              mood: 'emocionado',
            },
          ],
        },
        {
          actNumber: 3,
          actTitle: 'Ato III: O Telegrama Decisivo de Moscou',
          atmosphere: 'Gabinete do Kremlin. Nikita Kruschev dita o telegrama secreto que evitará a catástrofe.',
          dialogues: [
            {
              id: 7,
              speakerId: 'khrushchev',
              speakerName: 'Nikita Kruschev',
              stageDirection: 'Ditando com voz pausada para o teletipo da embaixada soviética',
              text: 'Caro Presidente Kennedy. Nós e vocês agora não devemos puxar as pontas da corda na qual amarraram o nó da guerra. Se vocês derem garantias de que não invadirão Cuba e retirarem seus mísseis da Turquia, nós desmontaremos e levaremos de volta todas as armas ofensivas.',
              mood: 'grave',
            },
            {
              id: 8,
              speakerId: 'jfk',
              speakerName: 'John F. Kennedy',
              stageDirection: 'Assinando o acordo confidencial transmitido via canal diplomático secreto',
              text: 'Aceitamos os termos. O mundo esteve perto demais do precipício. Amanhã mesmo instalaremos uma linha de comunicação direta e imediata entre o Salão Oval e o Kremlin. Nunca mais dependeremos de telegramas atrasados quando o destino da Terra estiver em jogo.',
              mood: 'resoluto',
            },
          ],
        },
      ],
      dilemma: {
        title: 'Gabinete de Crise: A Escolha de Kennedy',
        protagonist: 'Você assume o papel de John F. Kennedy no ExComm em 22 de Outubro de 1962.',
        context:
          'Os chefes das Forças Armadas exigem a Operação Scabbard: 500 surtidas de caças bombardeando todos os silos cubanos, seguido por invasão de 120 mil fuzileiros navais.',
        question: 'Qual decisão estratégica você decreta diante da nação em rede nacional?',
        choices: [
          {
            id: 'historical',
            title: 'Opção A: Quarentena Naval com Acordo Secreto da Turquia (Decisão Histórica)',
            subtitle: 'Bloqueio seletivo da frota soviética e negociação diplomática confidencial.',
            historicalAction: true,
            consequences:
              'Sucesso diplomático extraordinário. Kruschev recuou os navios; os mísseis foram desmantelados sob fiscalização da ONU; e em sigilo, os EUA retiraram os mísseis Júpiter da Turquia meses depois.',
            whatIfAnalysis:
              'Ao não encurralar Kruschev militarmente, Kennedy ofereceu uma saída honrosa ao adversário, consagrando o princípio de que na Era Nuclear não existem vencedores em um primeiro ataque.',
            teacherBizu:
              'Atenção para o Simulado: A crise consolidou a Doutrina de Destruição Mútua Assegurada (MAD) e resultou na criação do famoso "Telefone Vermelho" entre Washington e Moscou.',
          },
          {
            id: 'alternative_hard',
            title: 'Opção B: Ataque Aéreo Preventivo Total e Invasão Armada',
            subtitle: 'Bombardeio surpresa de todos os silos e derrubada imediata de Fidel Castro.',
            historicalAction: false,
            consequences:
              'Catástrofe calculada. Documentos soviéticos revelados após 1991 provaram que os comandantes soviéticos no solo já tinham ogivas táticas FKR operacionais e autorização de lançamento local.',
            whatIfAnalysis:
              'Um ataque aéreo norte-americano teria provocado o lançamento imediato de dezenas de ogivas nucleares contra Miami e a frota da Flórida, seguido por um ataque soviético de represália sobre Berlim Ocidental e a Europa.',
            teacherBizu:
              'Simulações do Pentágono revelaram mais tarde que um bombardeio preventivo teria causado mais de 100 milhões de mortes nos primeiros 3 dias.',
          },
        ],
      },
      classroomGuide: {
        suggestedRoles: [
          'Aluno 1: John F. Kennedy (postura firme, voz comedida)',
          'Aluno 2: General Curtis LeMay (voz autoritária e enfática)',
          'Aluno 3: Nikita Kruschev (voz enérgica, tom de estadista)',
          'Aluno 4: Vassili Arkhipov (tom sereno e heroico)',
          'Aluno 5: Narrador / Cronista Histórico da Sala',
        ],
        performanceTips:
          'Utilize a mesa do professor como o gabinete do Salão Oval. Os alunos devem ler as falas com entonação dramática, respeitando as rubricas de palco.',
        reflectionPrompts: [
          'Por que a Doutrina Truman e o equilíbrio de forças impediram que a Guerra Fria se tornasse quente no confronto direto?',
          'Qual é o papel da diplomacia e da recusa individual de ordens injustas para a preservação da paz mundial?',
        ],
      },
    },
    {
      id: 'comicio-central-1964',
      code: 'PEÇA 2',
      title: 'O Pátio das Reformas: O Comício da Central do Brasil',
      subtitle: 'O dia em que João Goulart decretou as Reformas de Base perante 150 mil trabalhadores.',
      period: '13 de Março de 1964',
      curriculumModule: 'Módulo B5: O Período Liberal-Democrático (1945–1964)',
      bnccSkill: 'EF09HI05 • As Reformas de Base, a polarização ideológica e o golpe civil-militar de 1964.',
      settingDescription:
        'Palanque montado na Praça da República, em frente à Estação Central do Brasil, Rio de Janeiro. Uma maré humana empunha bandeiras e cartazes exigindo Reforma Agrária e controle da remessa de lucros.',
      characters: [
        {
          id: 'jango',
          name: 'João Goulart (Jango)',
          role: 'Presidente Constitucional da República do Brasil',
          faction: 'brasil',
          factionLabel: 'Governo Federal • PTB',
          factionColor: 'bg-emerald-700 text-white',
          actorArchetype: 'Líder trabalhista reformista que escolheu avançar com as Reformas de Base.',
          coreMotivation: 'Superar o subdesenvolvimento histórico brasileiro através de justiça social e acesso à terra.',
          keyQuote: '"Democracia para poucos não é democracia! Não temos medo do povo. Não há força capaz de impedir a caminhada das reformas!"',
          avatarIcon: '🇧🇷',
        },
        {
          id: 'maria-thereza',
          name: 'Maria Thereza Goulart',
          role: 'Primeira-Dama do Brasil',
          faction: 'brasil',
          factionLabel: 'Presidência • Sociedade',
          factionColor: 'bg-teal-700 text-white',
          actorArchetype: 'Companheira leal e atenta à tensão militar crescente nos bastidores da capital.',
          coreMotivation: 'Apoiar o marido perante a classe trabalhadora, ciente das ameaças de ruptura institucional.',
          keyQuote: '"João, olhe para esse povo. Eles confiam em você, mas os quartéis estão tramando nas sombras."',
          avatarIcon: '👩',
        },
        {
          id: 'lider-campones',
          name: 'Representante das Ligas Camponesas',
          role: 'Líder dos Trabalhadores Rurais do Nordeste',
          faction: 'brasil',
          factionLabel: 'Movimento Social • Campo',
          factionColor: 'bg-amber-800 text-white',
          actorArchetype: 'Trabalhador rural calejado pela seca e pelo latifúndio improdutivo.',
          coreMotivation: 'Conquistar a desapropriação de terras improdutivas para quem nela vive e trabalha.',
          keyQuote: '"Reforma agrária na lei ou na marra! O povo da roça não aguenta mais ser escravo sem terra!"',
          avatarIcon: '🌾',
        },
        {
          id: 'opositor-esg',
          name: 'Porta-Voz da Oposição Conservadora (UDN/ESG)',
          role: 'Deputado e Estrategista da Doutrina de Segurança Nacional',
          faction: 'neutro',
          factionLabel: 'Oposição • UDN / ESG',
          factionColor: 'bg-slate-800 text-white',
          actorArchetype: 'Ideólogo anticomunista articulando apoio militar e empresarial ao golpe.',
          coreMotivation: 'Impedir a qualquer custo o que chamavam de "república sindicalista" alinhada a Cuba e Moscou.',
          keyQuote: '"Goulart rasgou a Constituição! Convoco a família e os generais para a Marcha com Deus pela Liberdade!"',
          avatarIcon: '🏛️',
        },
      ],
      acts: [
        {
          actNumber: 1,
          actTitle: 'Ato I: O Chamado das Massas na Central',
          atmosphere: 'Tarde sufocante no Rio de Janeiro. Trens abarrotados de operários e camponeses desembarcam aos milhares.',
          dialogues: [
            {
              id: 9,
              speakerId: 'lider-campones',
              speakerName: 'Líder Camponês',
              stageDirection: 'Agitando a bandeira verde-amarela com calos nas mãos',
              text: 'Presidente Jango! O Congresso Nacional engavetou todas as leis que ajudam os pobres. Os coronéis mandam na terra e pagam com migalhas. Assine o decreto! O povo está aqui para lhe dar sustento!',
              mood: 'emocionado',
            },
            {
              id: 10,
              speakerId: 'jango',
              speakerName: 'João Goulart',
              stageDirection: 'Aproximando-se do microfone da Rádio Nacional sob estrondosa salva de palmas',
              text: 'Trabalhadores do Brasil! Não há força capaz de dobrar a vontade soberana desta nação. Não queremos a violência, mas não permitiremos que o latifúndio improdutivo continue condenando milhões de brasileiros à fome e ao analfabetismo!',
              mood: 'resoluto',
            },
          ],
        },
        {
          actNumber: 2,
          actTitle: 'Ato II: A Assinatura dos Decretos de Base',
          atmosphere: 'O silêncio absoluto toma conta da multidão enquanto Jango ergue a caneta oficial.',
          dialogues: [
            {
              id: 11,
              speakerId: 'jango',
              speakerName: 'João Goulart',
              stageDirection: 'Exibindo a folha do Diário Oficial assinada para a multidão',
              text: 'Assino neste instante dois decretos históricos! O primeiro desapropria as terras improdutivas que margeiam ferrovias e rodovias federais para assentamento camponês. O segundo encampou as refinarias de petróleo particulares em benefício da Petrobras!',
              mood: 'emocionado',
            },
            {
              id: 12,
              speakerId: 'opositor-esg',
              speakerName: 'Porta-Voz da Oposição',
              stageDirection: 'Em transmissão de rádio particular nos estúdios da Zona Sul carioca',
              text: 'O Presidente cometeu o ato final de traição contra a ordem e a propriedade privada! Ele quer impor uma ditadura sindicalista aos moldes cubanos. A resposta da sociedade civil organizada e das Forças Armadas virá nas ruas!',
              mood: 'tenso',
            },
          ],
        },
      ],
      dilemma: {
        title: 'Gabinete do Catete: A Encruzilhada de Jango',
        protagonist: 'Você assume o papel de João Goulart em março de 1964.',
        context:
          'O Congresso dominado pelo PSD-UDN bloqueou as Reformas de Base. Grupos militares conspiravam abertamente com apoio financeiro do IPES/IBAD e da Embaixada dos EUA (Operação Brother Sam).',
        question: 'Qual rumo você adota perante a iminente crise política?',
        choices: [
          {
            id: 'historical',
            title: 'Opção A: Radicalizar com o Apoio Popular e Decretar as Reformas (Decisão Histórica)',
            subtitle: 'Mobilizar as massas operárias e sindicais e peitar a oposição conservadora.',
            historicalAction: true,
            consequences:
              'A assinatura dos decretos acirrou a reação das elites e da classe média, que organizaram a "Marcha da Família com Deus pela Liberdade" em São Paulo e deflagraram o golpe civil-militar em 31 de março de 1964.',
            whatIfAnalysis:
              'Para evitar uma guerra civil sangrenta entre brasileiros (uma vez que os EUA já preparavam apoio logístico à rebelião), Jango recusou o confronto armado e partiu para o exílio no Uruguai.',
            teacherBizu:
              'Cai muito em prova: O Comício da Central não foi a causa do golpe, mas sim o pretexto catalisador explorado pelos conspiradores civis e militares.',
          },
          {
            id: 'alternative_soft',
            title: 'Opção B: Capitular perante a Oposição e Abandonar as Reformas de Base',
            subtitle: 'Retirar os decretos agrários para tentar concluir o mandato até 1965.',
            historicalAction: false,
            consequences:
              'Desilusão da base trabalhadora e perda de sustentação política de ambos os lados. Historiadores apontam que a conspiração golpista já estava articulada e avançaria mesmo com o recuo presidencial.',
            whatIfAnalysis:
              'Sem apoio popular e sem a confiança das elites econômicas, o governo se tornaria uma casca vazia, abrindo caminho para uma intervenção militar ainda mais prematura.',
            teacherBizu:
              'A polarização da Guerra Fria tornava inviável a posição de centro: a Doutrina de Segurança Nacional via qualquer reforma social como infiltração comunista.',
          },
        ],
      },
      classroomGuide: {
        suggestedRoles: [
          'Aluno 1: João Goulart (discurso enérgico e emotivo)',
          'Aluno 2: Maria Thereza Goulart (olhar preocupado e altivo)',
          'Aluno 3: Líder Camponês (postura combativa)',
          'Aluno 4: Deputado da UDN (tom alarmista e grave)',
          'Alunos 5 a 10: Multidão da Central gritando palavras de ordem',
        ],
        performanceTips:
          'Estimule a turma a simular o coro da multidão ("Re-for-ma A-grá-ria!"), contrastando com a indignação dos opositores nos jornais da época.',
        reflectionPrompts: [
          'Por que a posse da terra no Brasil sempre foi um tema de intensa disputa política e social?',
          'Como o contexto externo da Guerra Fria influenciou a leitura conspiratória das reformas sociais no Brasil?',
        ],
      },
    },
    {
      id: 'chile-allende-1973',
      code: 'PEÇA 3',
      title: 'A Última Trincheira: O Adeus em La Moneda',
      subtitle: 'O bombardeio ao palácio presidencial chileno e a defesa incondicional da via democrática.',
      period: '11 de Setembro de 1973',
      curriculumModule: 'Módulo A6: Ditaduras Civis-Militares na América Latina',
      bnccSkill: 'EF09HI19 • Os golpes militares na América do Sul, a Doutrina de Segurança Nacional e a Operação Condor.',
      settingDescription:
        'Palácio Presidencial de La Moneda, Santiago do Chile. Fumaça de bombas, janelas estilhaçadas e o som ensurdecedor de caças a jato Hawker Hunter mergulhando sobre o teto do palácio.',
      characters: [
        {
          id: 'allende',
          name: 'Salvador Allende',
          role: 'Presidente Eleito do Chile (Unidade Popular)',
          faction: 'chile',
          factionLabel: 'Governo Constitucional • Chile',
          factionColor: 'bg-rose-700 text-white',
          actorArchetype: 'Primeiro marxista eleito democraticamente no Ocidente, fiel aos seus princípios até a morte.',
          coreMotivation: 'Manter a honra da presidência constitucional e transmitir uma mensagem de esperança para as futuras gerações.',
          keyQuote: '"Trabalhadores do meu país: tenho fé no Chile e no seu destino. Mais cedo ou mais tarde, de novo se abrirão as grandes alamedas!"',
          avatarIcon: '🇨🇱',
        },
        {
          id: 'pinochet-radio',
          name: 'General Augusto Pinochet (Áudio Militar)',
          role: 'Comandante-em-Chefe do Exército e Líder da Junta Golpista',
          faction: 'neutro',
          factionLabel: 'Junta Militar Golpista',
          factionColor: 'bg-zinc-800 text-white',
          actorArchetype: 'General traidor que jurara lealdade dias antes e agora comanda a repressão sem piedade.',
          coreMotivation: 'Erradicar o socialismo no Chile e impor uma ditadura militar com apoio financeiro e de inteligência da CIA.',
          keyQuote: '"Ofereçam a ele um avião... e durante o voo, façam o avião cair. Matem todos."',
          avatarIcon: '🪖',
        },
        {
          id: 'radialista',
          name: 'Locutora da Rádio Magallanes',
          role: 'Jornalista Independente em Transmissão Clandestina',
          faction: 'chile',
          factionLabel: 'Imprensa Livre • Resistência',
          factionColor: 'bg-amber-600 text-white',
          actorArchetype: 'Voz da verdade no momento em que as antenas de transmissão são metralhadas.',
          coreMotivation: 'Garantir que as últimas palavras de Allende cheguem aos lares e fábricas de todo o continente.',
          keyQuote: '"Atenção, Chile! La Moneda está sob bombardeio. Falamos direto do gabinete do Presidente!"',
          avatarIcon: '🎙️',
        },
      ],
      acts: [
        {
          actNumber: 1,
          actTitle: 'Ato I: O Ultimato dos Caças',
          atmosphere: '10h da manhã em Santiago. Tanques cercam o palácio e caças sobrevoam rasante.',
          dialogues: [
            {
              id: 13,
              speakerId: 'pinochet-radio',
              speakerName: 'General Pinochet (Via Rádio Militar)',
              stageDirection: 'Voz transmitida por rádio militar de campanha com ruído estático',
              text: 'Allende tem 15 minutos para assinar a renúncia incondicional. Se não sair com as mãos na cabeça, destruiremos o palácio até os alicerces.',
              mood: 'frio',
            },
            {
              id: 14,
              speakerId: 'allende',
              speakerName: 'Salvador Allende',
              stageDirection: 'Empunhando o fuzil que lhe dera Fidel Castro e vestindo terno e capacete civil',
              text: 'Diga à Junta Militar que o Presidente eleito pelo povo não se rende e não sobe em avião de traidores! Minha renúncia eles terão somente com a minha vida.',
              mood: 'resoluto',
            },
          ],
        },
        {
          actNumber: 2,
          actTitle: 'Ato II: O Discurso das Grandes Alamedas',
          atmosphere: 'O palácio arde em chamas. Allende pega o fone da Rádio Magallanes para falar pela última vez à nação.',
          dialogues: [
            {
              id: 15,
              speakerId: 'radialista',
              speakerName: 'Locutora da Rádio Magallanes',
              stageDirection: 'Segurando os cabos do transmissor sob tiros na rua',
              text: 'Presidente, o sinal da rádio está caindo! A senhora Força Aérea bombardeou nossos transmissores na montanha. Temos menos de dois minutos no ar!',
              mood: 'tenso',
            },
            {
              id: 16,
              speakerId: 'allende',
              speakerName: 'Salvador Allende',
              stageDirection: 'Voz pausada, serena, quase poética, ecoando nas rádios de todo o país',
              text: 'Certamente esta será a última oportunidade em que posso me dirigir a vocês. O capital estrangeiro e o fascismo tramaram contra o Chile. Não tenho amargura, mas sim decepção. Saibam vocês que, muito mais cedo do que tarde, de novo se abrirão as grandes alamedas por onde passará o homem livre para construir uma sociedade melhor!',
              mood: 'emocionado',
            },
          ],
        },
      ],
      dilemma: {
        title: 'O Julgamento Histórico do Golpe de 1973',
        protagonist: 'Você analisa o papel da CIA e das Forças Armadas no Golpe do Chile.',
        context:
          'Documentos desclassificados dos EUA confirmaram que a Operação FUBELT financiou greves patronais, jornais golpistas e treinou generais na Escola das Américas.',
        question: 'Qual é o impacto fundamental deste acontecimento para a compreensão da Guerra Fria na América Latina?',
        choices: [
          {
            id: 'historical',
            title: 'Opção A: A Incompatibilidade da Guerra Fria com a Via Democrática Reformista (Fato Histórico)',
            subtitle: 'A Doutrina de Segurança Nacional dos EUA não admitia reformas sociais no seu "quintal".',
            historicalAction: true,
            consequences:
              'Início de 17 anos da sangrenta ditadura de Pinochet, com mais de 3 mil mortos e desaparecidos, tortura sistemática no Estádio Nacional e implementação do modelo ultraliberal da Escola de Chicago.',
            whatIfAnalysis:
              'O caso chileno demonstrou aos movimentos progressistas mundiais que a via eleitoral pacífica enfrentaria sabotagem violenta caso desafiasse os interesses das multinacionais e a hegemonia de Washington.',
            teacherBizu:
              'Tema obrigatório no 9º Ano: A Operação Condor conectou a ditadura chilena com as do Brasil, Argentina, Uruguai e Paraguai para assassinar opositores além-fronteiras.',
          },
          {
            id: 'alternative_hard',
            title: 'Opção B: Visão revisionista de que foi uma mera briga política interna',
            subtitle: 'Desconsiderar o financiamento externo e a geopolítica bipolar.',
            historicalAction: false,
            consequences:
              'Erro conceitual grave em avaliações escolares. Desconsidera toneladas de documentos oficiais do governo Nixon e de Henry Kissinger comprovando o planejamento deliberado do estrangulamento da economia chilena.',
            whatIfAnalysis:
              'Kissinger declarou abertamente: "Não vejo por que deveríamos deixar um país se tornar marxista apenas pela irresponsabilidade de seu próprio povo."',
            teacherBizu:
              'Lembre-se sempre da frase "Lembrar para não esquecer" e dos Arquivos do Terror revelados no Paraguai em 1992.',
          },
        ],
      },
      classroomGuide: {
        suggestedRoles: [
          'Aluno 1: Salvador Allende (interpretação serena e altiva)',
          'Aluno 2: Voz de Pinochet no rádio (frio e impessoal)',
          'Aluno 3: Locutora da Rádio Magallanes (voz acelerada, ofegante)',
          'Aluno 4: Narrador explicando os efeitos sonoros de bombardeio',
        ],
        performanceTips:
          'A leitura do discurso final de Allende deve ser feita com solenidade. Coloque um efeito de ruído de rádio antigo ou batidas abafadas imitando bombardeio.',
        reflectionPrompts: [
          'Qual a importância da memória histórica e da busca por verdade e justiça para as vítimas das ditaduras latino-americanas?',
          'O que significa a metáfora das "grandes alamedas" mencionada por Salvador Allende?',
        ],
      },
    },
    {
      id: 'muro-queda-1989',
      code: 'PEÇA 4',
      title: 'A Noite da Cancela Aberta: Bornholmer Straße',
      subtitle: 'O colapso da Cortina de Ferro e a queda do Muro de Berlim pela desobediência pacífica.',
      period: '09 de Novembro de 1989',
      curriculumModule: 'Módulo A5 e A8: A Redefinição da Ordem Mundial',
      bnccSkill: 'EF09HI20 • A queda do Muro de Berlim, a crise do socialismo real e o fim da Guerra Fria.',
      settingDescription:
        'Posto de Controle de Bornholmer Straße, entre Berlim Oriental e Ocidental. O ar gelado de novembro é cortado pelos gritos de milhares de cidadãos alemães exigindo a travessia pacífica.',
      characters: [
        {
          id: 'jager',
          name: 'Tenente-Coronel Harald Jäger',
          role: 'Comandante de Turno da Guarda de Fronteira da RDA',
          faction: 'alemanha',
          factionLabel: 'Guarda da RDA • Berlim Oriental',
          factionColor: 'bg-emerald-900 text-white',
          actorArchetype: 'Oficial comunista disciplinado colocado diante da decisão mais terrível de sua vida.',
          coreMotivation: 'Evitar um massacre de civis desarmados mesmo sem ter ordens de seus superiores em Berlim Oriental.',
          keyQuote: '"Se eu mandar atirar, haverá um banho de sangue com centenas de mulheres e crianças. Eu não serei o carrasco do meu povo. Abram a cancela!"',
          avatarIcon: '🛂',
        },
        {
          id: 'schabowski',
          name: 'Günter Schabowski',
          role: 'Porta-Voz do Politburo da Alemanha Oriental',
          faction: 'alemanha',
          factionLabel: 'Governo RDA • Coletiva ao Vivo',
          factionColor: 'bg-red-800 text-white',
          actorArchetype: 'Burocrata cansado cometendo sem querer o erro histórico mais famoso do século XX.',
          coreMotivation: 'Tentar conter a crise migratória anunciando regras confusas que saíram de controle.',
          keyQuote: '"Até onde sei... entra em vigor imediatamente, sem demora!"',
          avatarIcon: '📋',
        },
        {
          id: 'cidada-berlim',
          name: 'Ingrid Becker',
          role: 'Moradora de Berlim Oriental',
          faction: 'alemanha',
          factionLabel: 'Povo Alemão • Cidadania',
          factionColor: 'bg-amber-600 text-white',
          actorArchetype: 'Jovem separada de parentes há 28 anos pela cerca de concreto e arame farpado.',
          coreMotivation: 'Abraçar os primos do lado ocidental e reconquistar a liberdade de circulação.',
          keyQuote: '"Abram o portão! Nós somos um só povo! Wir sind das Volk!"',
          avatarIcon: '🇩🇪',
        },
      ],
      acts: [
        {
          actNumber: 1,
          actTitle: 'Ato I: A Coletiva de Imprensa e a Gafe Histórica',
          atmosphere: '18h53 em Berlim Oriental. Transmissão internacional ao vivo em preto e branco.',
          dialogues: [
            {
              id: 17,
              speakerId: 'schabowski',
              speakerName: 'Günter Schabowski',
              stageDirection: 'Ajeitando os óculos e folheando um papel rascunhado que mal compreendia',
              text: 'Decidimos que os cidadãos da República Democrática Alemã poderão viajar ao exterior sem comprovar necessidades familiares excepcionais.',
              mood: 'grave',
            },
            {
              id: 18,
              speakerId: 'cidada-berlim',
              speakerName: 'Jornalista na Plateia',
              stageDirection: 'Erguendo o microfone em polvorosa',
              text: 'Herr Schabowski! A partir de quando essa nova regulamentação de viagens entra em vigor?!',
              mood: 'tenso',
            },
            {
              id: 19,
              speakerId: 'schabowski',
              speakerName: 'Günter Schabowski',
              stageDirection: 'Dando de ombros, hesitando por dois segundos diante das câmeras de todo o planeta',
              text: 'Pelo que eu sei... entra em vigor imediatamente. Sem demora.',
              mood: 'frio',
            },
          ],
        },
        {
          actNumber: 2,
          actTitle: 'Ato II: O Pânico em Bornholmer Straße',
          atmosphere: '22h45. Cerca de 20 mil pessoas cercam o posto de controle gritando "Abram o portão!".',
          dialogues: [
            {
              id: 20,
              speakerId: 'jager',
              speakerName: 'Tenente-Coronel Harald Jäger',
              stageDirection: 'Com o telefone militar no ouvido, gritando exasperado para o comando central',
              text: 'Alô, Comando Central?! Aqui é Bornholmer! Nós temos 20 mil civis espremidos contra a cerca. Eles ouviram a TV! O que nós fazemos?! Vocês querem que a gente atire?! Respondão!',
              mood: 'tenso',
            },
            {
              id: 21,
              speakerId: 'jager',
              speakerName: 'Tenente-Coronel Harald Jäger',
              stageDirection: 'Ouvindo apenas silêncio e burocratas desligando o telefone na sua cara',
              text: 'Eles desligaram na minha cara... Estão todos bêbados ou com medo da multidão. Nós estamos sozinhos aqui.',
              mood: 'grave',
            },
            {
              id: 22,
              speakerId: 'cidada-berlim',
              speakerName: 'Ingrid Becker',
              stageDirection: 'Com lágrimas nos olhos, pressionando as palmas das mãos contra o vidro do posto',
              text: 'Por favor, camarada guarda... Não atire em nós. Minha mãe mora em Kreuzberg há 28 anos e nunca conheceu meus filhos. Deixe-nos passar!',
              mood: 'emocionado',
            },
            {
              id: 23,
              speakerId: 'jager',
              speakerName: 'Tenente-Coronel Harald Jäger',
              stageDirection: 'Olhando para os seus próprios soldados apavorados e guardando a pistola no coldre',
              text: 'Cessar ordem de tiro! Guardem os fuzis. Homens: ergam a cancela agora mesmo. Deixem o povo passar!',
              mood: 'resoluto',
            },
          ],
        },
      ],
      dilemma: {
        title: 'O Posto de Bornholmer: A Decisão de Harald Jäger',
        protagonist: 'Você assume o papel do oficial de fronteira da RDA na noite de 9 de novembro de 1989.',
        context:
          'O regulamento militar formal ordenava o Schießbefehl (ordem expressa de atirar em caso de invasão de fronteira). Uma multidão incontrolável pressiona a cerca.',
        question: 'Qual atitude você adota diante de milhares de civis?',
        choices: [
          {
            id: 'historical',
            title: 'Opção A: Desobedecer a Ordem Militar e Abrir a Cancela Pacificamente (Decisão Histórica)',
            subtitle: 'Recusar a violência e permitir a passagem livre dos alemães orientais.',
            historicalAction: true,
            consequences:
              'A multidão cruzou a fronteira em festa delirante. Guardas e civis se abraçaram com champanhe. Em horas, outros postos seguiram o exemplo e o Muro foi derrubado a marretadas sem disparar um único tiro.',
            whatIfAnalysis:
              'A coragem moral de um único oficial de fronteira evitou o que poderia ter sido o maior massacre urbano da Europa pós-guerra e acelerou a reunificação alemã em menos de um ano.',
            teacherBizu:
              'Cai no Simulado do 9º Ano: A queda do Muro em 1989 foi o símbolo máximo da decadência e do fim da União Soviética (oficialmente dissolvida em dezembro de 1991).',
          },
          {
            id: 'alternative_hard',
            title: 'Opção B: Cumprir a Ordem e Abrir Fogo com Metralhadoras Pesadas',
            subtitle: 'Defender a soberania do posto de fronteira com munição real.',
            historicalAction: false,
            consequences:
              'Centenas de mortos na calçada, revolta armada generalizada em Berlim Oriental e risco iminente de intervenção dos tanques soviéticos estacionados na Alemanha Oriental (como ocorrera na Praça da Paz Celestial em Pequim meses antes).',
            whatIfAnalysis:
              'O modelo soviético sob Gorbachev já havia renunciado à Doutrina Brejnev (não interviria militarmente para salvar governos satélites). Um massacre isolado precipitaria uma guerra civil alemã catastrófica.',
            teacherBizu:
              'Gorbachev advertira os líderes da RDA semanas antes: "Quem chega tarde demais é punido pela própria vida."',
          },
        ],
      },
      classroomGuide: {
        suggestedRoles: [
          'Aluno 1: Tenente-Coronel Harald Jäger (tensão extrema e alívio final)',
          'Aluno 2: Günter Schabowski (despreocupado no início, confuso no final)',
          'Aluno 3: Ingrid Becker (voz comovente representando a população)',
          'Aluno 4 a 8: Coral da turma gritando "Wir sind das Volk!" (Nós somos o povo!)',
        ],
        performanceTips:
          'Crie uma linha de fita adesiva no chão da sala de aula representando o Muro. Quando Jäger dá a ordem, os alunos cruzam a linha e se abraçam em comemoração.',
        reflectionPrompts: [
          'Como a recusa da violência por indivíduos comuns pode alterar os rumos da história mundial?',
          'O que a queda do Muro de Berlim representou para o fim do mundo bipolar da Guerra Fria?',
        ],
      },
    },
  ];

  const [activePlayId, setActivePlayId] = useState<string>('cuba-1962');
  const [activeTab, setActiveTab] = useState<'stage' | 'characters' | 'dilemma' | 'guide'>('stage');
  const [activeActIndex, setActiveActIndex] = useState<number>(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  const currentPlay = plays.find((p) => p.id === activePlayId) || plays[0];
  const currentAct = currentPlay.acts[activeActIndex] || currentPlay.acts[0];

  const handleSelectPlay = (id: string) => {
    setActivePlayId(id);
    setActiveActIndex(0);
    setSelectedChoiceId(null);
  };

  return (
    <section
      id="historical-theater-model"
      className="py-12 bg-[#0F172A] text-white border-y-4 border-[#C9A84C]/40 relative overflow-hidden"
    >
      {/* Visual Theater Spotlight Background FX */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FD7600]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#016E01]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#F5E6B8] text-xs font-bold uppercase tracking-wider mb-3">
            <Theater className="w-4 h-4 text-[#FD7600]" />
            <span>Novo Modelo Pedagógico • Teatro Histórico Cênico & Gabinete de Decisões</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-editorial tracking-tight">
            TEATRO DE DRAMATIZAÇÃO HISTÓRICA
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2 font-medium">
            Vivencie os momentos cruciais do currículo do 9º Ano através de diálogos documentados,
            personagens em conflito cênico e decisões estratégicas reais da história mundial.
          </p>
        </div>

        {/* Play Selection Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {plays.map((play) => {
            const isSelected = play.id === currentPlay.id;
            return (
              <button
                key={play.id}
                onClick={() => handleSelectPlay(play.id)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#1E293B] to-[#334155] border-[#FD7600] shadow-lg ring-2 ring-[#FD7600]/30'
                    : 'bg-[#1E293B]/60 hover:bg-[#1E293B] border-gray-700/80 text-gray-400 hover:text-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#FD7600] text-white' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {play.code}
                    </span>
                    <span className="text-xs">{play.characters[0]?.avatarIcon}</span>
                  </div>
                  <h4
                    className={`text-xs sm:text-sm font-bold leading-snug line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {play.title}
                  </h4>
                </div>
                <span className="text-[11px] text-[#C9A84C] mt-2 font-mono">{play.period}</span>
              </button>
            );
          })}
        </div>

        {/* Main Theater Stage Card */}
        <div className="bg-[#1E293B] rounded-2xl border-2 border-[#C9A84C]/50 shadow-2xl overflow-hidden">
          {/* Top Marquee Bar */}
          <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] p-4 sm:p-6 border-b border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C9A84C] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FD7600]" />
                <span>{currentPlay.curriculumModule}</span>
                <span>•</span>
                <span>{currentPlay.period}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                <span>{currentPlay.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">{currentPlay.subtitle}</p>
            </div>

            {/* Mode Switcher Tabs inside Play */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#0F172A] p-1.5 rounded-xl border border-gray-700 text-xs font-bold">
              <button
                onClick={() => setActiveTab('stage')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'stage'
                    ? 'bg-[#016E01] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Roteiro & Palco</span>
              </button>
              <button
                onClick={() => setActiveTab('characters')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'characters'
                    ? 'bg-[#016E01] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Elenco ({currentPlay.characters.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('dilemma')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'dilemma'
                    ? 'bg-[#FD7600] text-white shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Gabinete de Decisão</span>
              </button>
              <button
                onClick={() => setActiveTab('guide')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'guide'
                    ? 'bg-[#C9A84C] text-[#0F172A] shadow-xs'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ensaio em Sala</span>
              </button>
            </div>
          </div>

          {/* TAB 1: ROTEIRO & PALCO CÊNICO */}
          {activeTab === 'stage' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Setting Description Banner */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-gray-700/80 text-xs text-gray-300 flex items-start gap-2.5">
                <Radio className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Cenário & Ambientação Teatral:</strong>
                  {currentPlay.settingDescription}
                </div>
              </div>

              {/* Act Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <span className="text-xs font-bold text-gray-400 whitespace-nowrap">Atos Cênicos:</span>
                {currentPlay.acts.map((act, idx) => {
                  const isCurrentAct = idx === activeActIndex;
                  return (
                    <button
                      key={act.actNumber}
                      onClick={() => setActiveActIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                        isCurrentAct
                          ? 'bg-[#FD7600] text-white border-[#FD7600] shadow-xs'
                          : 'bg-[#0F172A] text-gray-400 hover:text-white border-gray-700'
                      }`}
                    >
                      {act.actTitle}
                    </button>
                  );
                })}
              </div>

              {/* Act Title & Atmosphere */}
              <div className="border-l-4 border-[#C9A84C] pl-4 py-1">
                <h4 className="text-lg font-black text-white">{currentAct.actTitle}</h4>
                <p className="text-xs text-[#C9A84C] italic mt-0.5">{currentAct.atmosphere}</p>
              </div>

              {/* Dramatized Dialogues List */}
              <div className="space-y-4">
                {currentAct.dialogues.map((dialogue) => {
                  const character = currentPlay.characters.find((c) => c.id === dialogue.speakerId);
                  return (
                    <div
                      key={dialogue.id}
                      className="p-4 rounded-xl bg-black/30 border border-gray-700/70 hover:border-gray-600 transition-colors"
                    >
                      {/* Character Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-base">{character?.avatarIcon || '🎭'}</span>
                          <span className="text-sm font-black text-white">{dialogue.speakerName}</span>
                          {character && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded ${character.factionColor}`}
                            >
                              {character.role}
                            </span>
                          )}
                        </div>

                        {dialogue.mood && (
                          <span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-800/80 px-2 py-0.5 rounded">
                            Tom: {dialogue.mood}
                          </span>
                        )}
                      </div>

                      {/* Stage Direction (Rubrica de Palco) */}
                      {dialogue.stageDirection && (
                        <p className="text-xs text-[#C9A84C]/90 italic font-mono mb-2 bg-[#0F172A]/80 px-2.5 py-1 rounded border border-gray-800">
                          [{dialogue.stageDirection}]
                        </p>
                      )}

                      {/* Dialogue Line */}
                      <p className="text-sm sm:text-base text-gray-100 font-medium leading-relaxed pl-2 border-l-2 border-[#FD7600]/40">
                        "{dialogue.text}"
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Act Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                <button
                  onClick={() => setActiveActIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeActIndex === 0}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer ${
                    activeActIndex === 0
                      ? 'text-gray-600 cursor-not-allowed'
                      : 'text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Ato Anterior</span>
                </button>

                <button
                  onClick={() => setActiveTab('dilemma')}
                  className="px-4 py-2 rounded-xl bg-[#FD7600] hover:bg-[#e06800] text-white text-xs font-black flex items-center gap-1.5 shadow-sm transition-transform hover:scale-105 cursor-pointer"
                >
                  <span>Ir para o Dilema Decisório desta Peça</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() =>
                    setActiveActIndex((prev) => Math.min(currentPlay.acts.length - 1, prev + 1))
                  }
                  disabled={activeActIndex === currentPlay.acts.length - 1}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer ${
                    activeActIndex === currentPlay.acts.length - 1
                      ? 'text-gray-600 cursor-not-allowed'
                      : 'text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <span>Próximo Ato</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ELENCO & DRAMATIS PERSONAE */}
          {activeTab === 'characters' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#C9A84C]" />
                    <span>Dramatis Personae (Elenco Histórico)</span>
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Conheça os atores históricos, suas motivações ideológicas e o papel que exerceram no palco dos acontecimentos.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentPlay.characters.map((char) => (
                  <div
                    key={char.id}
                    className="p-5 rounded-xl bg-black/40 border border-gray-700 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl p-2 bg-gray-800 rounded-xl">{char.avatarIcon}</span>
                          <div>
                            <h5 className="text-base font-black text-white">{char.name}</h5>
                            <span className="text-xs text-gray-400 block">{char.role}</span>
                          </div>
                        </div>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${char.factionColor}`}>
                          {char.factionLabel}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                          <strong className="text-[#C9A84C] block mb-0.5 uppercase tracking-wide text-[10px]">
                            Perfil Cênico & Psicológico:
                          </strong>
                          <span className="text-gray-200">{char.actorArchetype}</span>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                          <strong className="text-emerald-400 block mb-0.5 uppercase tracking-wide text-[10px]">
                            Motivação Central:
                          </strong>
                          <span className="text-gray-200">{char.coreMotivation}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-800 text-xs italic text-gray-300">
                      <strong className="text-white not-italic block mb-0.5 font-mono text-[10px] text-gray-400">
                        Fala Marcante Documentada:
                      </strong>
                      {char.keyQuote}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GABINETE DE DECISÃO HISTÓRICA */}
          {activeTab === 'dilemma' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              {/* Dilemma Header Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-[#1E293B] to-red-950/50 border-2 border-[#FD7600]/60">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FD7600] uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4" />
                  <span>Dilema Decisório • BNCC 9º Ano</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">{currentPlay.dilemma.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">{currentPlay.dilemma.protagonist}</p>
                <div className="mt-4 p-3 bg-black/40 rounded-xl border border-white/10 text-xs sm:text-sm text-gray-200 font-medium">
                  <strong>O Cenário em Jogo:</strong> {currentPlay.dilemma.context}
                </div>
                <p className="mt-3 text-sm sm:text-base font-black text-amber-300 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{currentPlay.dilemma.question}</span>
                </p>
              </div>

              {/* Choices Buttons */}
              <div className="space-y-4">
                {currentPlay.dilemma.choices.map((choice) => {
                  const isSelected = selectedChoiceId === choice.id;
                  return (
                    <div
                      key={choice.id}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? choice.historicalAction
                            ? 'bg-emerald-950/40 border-emerald-500 ring-2 ring-emerald-500/20'
                            : 'bg-red-950/40 border-red-500 ring-2 ring-red-500/20'
                          : 'bg-black/30 hover:bg-black/50 border-gray-700 hover:border-gray-500'
                      }`}
                      onClick={() => setSelectedChoiceId(choice.id)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h5 className="text-base font-black text-white flex items-center gap-2">
                          <span>{choice.title}</span>
                          {choice.historicalAction && (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-700 text-white">
                              Caminho Real Histórico
                            </span>
                          )}
                        </h5>
                        <button
                          type="button"
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-white text-gray-900'
                              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {isSelected ? 'Decisão Selecionada' : 'Simular Esta Decisão'}
                        </button>
                      </div>
                      <p className="text-xs text-gray-300 mb-3">{choice.subtitle}</p>

                      {/* Revealed Consequences upon selection */}
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-3 text-xs sm:text-sm animate-fade-in">
                          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <strong className="text-white block mb-1 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              O que os registros históricos revelam:
                            </strong>
                            <p className="text-gray-200 leading-relaxed">{choice.consequences}</p>
                          </div>

                          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-200">
                            <strong className="text-amber-300 block mb-1">
                              Análise Contrafactual (What If):
                            </strong>
                            <p className="leading-relaxed">{choice.whatIfAnalysis}</p>
                          </div>

                          <div className="p-3 bg-[#016E01]/20 rounded-xl border border-[#016E01]/40 text-emerald-200">
                            <strong className="text-[#C9A84C] block mb-1 flex items-center gap-1.5">
                              <Award className="w-4 h-4 text-[#C9A84C]" />
                              🎯 Dica de Ouro do Prof. Anderson Firmo:
                            </strong>
                            <p className="leading-relaxed">{choice.teacherBizu}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: GUIA DE ENSAIO ESCOLAR */}
          {activeTab === 'guide' && (
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-black text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#C9A84C]" />
                    <span>Guia de Ensaio Escolar • Teatro em Sala de Aula</span>
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Orientações pedagógicas para os alunos do 9º Ano da Escola Parque Ipiranga encenarem esta peça sob a mediação do Prof. Anderson Firmo.
                  </p>
                </div>
              </div>

              {/* Roles Breakdown */}
              <div className="bg-black/40 p-5 rounded-xl border border-gray-700">
                <h5 className="text-sm font-black text-[#C9A84C] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#FD7600]" />
                  <span>Distribuição Sugerida dos Papéis na Turma:</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                  {currentPlay.classroomGuide.suggestedRoles.map((role, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-gray-800/80 border border-gray-700 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FD7600]"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Performance Tips */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                <h5 className="text-sm font-black text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Dicas Cênicas de Interpretação:</span>
                </h5>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {currentPlay.classroomGuide.performanceTips}
                </p>
              </div>

              {/* Reflection Questions for Post-Play Debate */}
              <div className="bg-amber-950/30 p-5 rounded-xl border border-amber-500/30">
                <h5 className="text-sm font-black text-[#C9A84C] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#FD7600]" />
                  <span>Perguntas para a Roda de Conversa Pós-Apresentação:</span>
                </h5>
                <div className="space-y-2 text-xs sm:text-sm text-gray-200">
                  {currentPlay.classroomGuide.reflectionPrompts.map((prompt, idx) => (
                    <div key={idx} className="p-3 bg-black/40 rounded-lg border border-gray-700 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FD7600] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p>{prompt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Card Footer with BNCC & Teacher Seal */}
          <div className="bg-[#0F172A] px-6 py-4 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-gray-400">
              <Compass className="w-4 h-4 text-[#016E01]" />
              <span className="font-semibold">{currentPlay.bnccSkill}</span>
            </div>

            <div className="flex items-center gap-2 text-[#C9A84C] font-bold">
              <Award className="w-4 h-4 text-[#FD7600]" />
              <span>Metodologia Ativa de Dramatização • Prof. Anderson Firmo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
