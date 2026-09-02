import { ChronologicalPhase } from '../types';
import { MANDATORY_ANALOGIES, BLOCS_DATA, PROXY_CONFLICTS, SPACE_RACE_STEPS } from './historyData';

export const CHRONOLOGICAL_PHASES: ChronologicalPhase[] = [
  {
    id: 'fase1',
    phaseNumber: 1,
    period: '1945 – 1949',
    title: 'As Origens da Bipolaridade & A Formação dos Blocos',
    subtitle: 'Do fim da Segunda Guerra Mundial à quebra do monopólio atômico dos EUA.',
    accentColor: '#1E3A8A',
    themeClass: 'from-blue-900/10 to-transparent border-blue-900/30',
    defconLevel: 4,
    tensionLabel: 'Tensão Emergente (Cortina de Ferro)',
    emoji: '🏛️',
    nuclearWarheadsUS: 2, // 1945
    nuclearWarheadsUSSR: 0,
    leaders: { us: 'Harry S. Truman', ussr: 'Josef Stalin' },
    summary:
      'Com a rendição da Alemanha e do Japão em 1945, a aliança temporária entre EUA e URSS ruiu. A Europa foi dividida em zonas de influência, consolidando dois modelos antagônicos: o capitalismo liberal e o socialismo soviético.',
    milestones: [
      {
        year: 1945,
        dateDetail: 'Fevereiro a Agosto de 1945',
        title: 'Conferências de Yalta e Potsdam & As Bombas Atômicas',
        category: 'politica',
        categoryLabel: 'Ordem Geopolítica',
        emoji: '🏛️',
        description:
          'Os "Três Grandes" (EUA, URSS e Reino Unido) reuniram-se para redesenhar as fronteiras europeias, partilhar a Alemanha e Berlim em 4 zonas e criar a Organização das Nações Unidas (ONU). Em agosto, os EUA detonam bombas atômicas em Hiroshima e Nagasaki.',
        details: [
          'Partilha da Alemanha em quatro zonas de ocupação: americana, britânica, francesa e soviética.',
          'Criação da ONU em São Francisco para mediar disputas internacionais.',
          'Início do monopólio atômico norte-americano, despertando desconfiança em Moscou.',
        ],
        examTip:
          'Para a prova: A Guerra Fria não começou com uma declaração formal de guerra, mas com a divisão tácita de esferas de influência no pós-guerra!',
        location: 'Yalta (Crimeia), Potsdam (Alemanha) e Japão',
        keyActors: ['Harry Truman', 'Josef Stalin', 'Winston Churchill'],
      },
      {
        year: 1946,
        dateDetail: 'Março de 1946',
        title: 'O Discurso da "Cortina de Ferro" (Winston Churchill)',
        category: 'politica',
        categoryLabel: 'Disputa Ideológica',
        emoji: '🧊',
        description:
          'Em Fulton (Missouri), Churchill alertou que uma "Cortina de Ferro desceu sobre o continente europeu", de Stettin no Báltico a Trieste no Adriático, separando as nações livres do domínio soviético.',
        details: [
          'Consagração do termo metafórico mais famoso da Guerra Fria.',
          'Stalin respondeu acusando Churchill de ser um instigador de guerra imperialista.',
        ],
        examTip:
          'A "Cortina de Ferro" não era um muro físico em 1946, mas a linha de fronteira política e militar entre o Leste e o Oeste.',
        location: 'Fulton, Missouri (EUA)',
        keyActors: ['Winston Churchill', 'Josef Stalin'],
      },
      {
        year: 1947,
        dateDetail: 'Março a Junho de 1947',
        title: 'Doutrina Truman & Plano Marshall (Resposta dos EUA)',
        category: 'politica',
        categoryLabel: 'Doutrinas Econômicas',
        emoji: '🏛️',
        description:
          'Truman declarou que os EUA apoiariam qualquer povo livre resistindo à subjugação comunista (política de contenção). Em seguida, o Plano Marshall injetou mais de US$ 13 bilhões para reconstruir a Europa Ocidental.',
        details: [
          'Ajuda financeira em massa para reerguer a indústria, agricultura e infraestrutura europeia.',
          'Objetivo estratégico: impedir que o desespero e a fome levassem os eleitores a votar em partidos comunistas.',
          'A URSS rejeitou o plano e proibiu os países do Leste Europeu de receber a ajuda financeira americana.',
        ],
        examTip:
          'Doutrina Truman = Contenção militar e política. Plano Marshall = Braço econômico da contenção.',
        location: 'Washington D.C. e capitais da Europa Ocidental',
        keyActors: ['Harry Truman', 'George Marshall', 'Andrei Jdanov'],
      },
      {
        year: 1948,
        dateDetail: 'Junho de 1948 a Maio de 1949',
        title: 'O Bloqueio de Berlim e a Ponte Aérea',
        category: 'conflito',
        categoryLabel: 'Primeira Grande Crise',
        emoji: '🧊',
        description:
          'Stalin bloqueou todos os acessos terrestres e fluviais a Berlim Ocidental (que ficava encravada na Alemanha Oriental soviética). Os EUA e aliados responderam com a maior ponte aérea da história, transportando suprimentos por 11 meses.',
        details: [
          'Mais de 278 mil voos transportando carvão, comida e remédios para 2 milhões de civis.',
          'Stalin recuou e encerrou o bloqueio em maio de 1949 sem disparar um tiro.',
          'Resultou na divisão formal da Alemanha em RFA (Ocidental, capitalista) e RDA (Oriental, socialista).',
        ],
        examTip:
          'O Bloqueio de Berlim foi o primeiro grande teste da determinação ocidental contra o avanço soviético.',
        location: 'Berlim, Alemanha',
        keyActors: ['Josef Stalin', 'General Lucius Clay', 'Ernst Reuter'],
      },
      {
        year: 1949,
        dateDetail: 'Abril a Outubro de 1949',
        title: 'Criação da OTAN, Bomba Atômica da URSS & Revolução Chinesa',
        category: 'nuclear',
        categoryLabel: 'Bipolaridade Consolidada',
        emoji: '☢️',
        description:
          'O ano da consolidação militar absoluta: 12 nações fundam a OTAN; a URSS quebra o monopólio nuclear detonando a bomba RDS-1; e Mao Tsé-Tung proclama a China comunista.',
        details: [
          'Criação da OTAN (Organização do Tratado do Atlântico Norte) sob cláusula de defesa mútua (Artigo 5º).',
          'A URSS fundou o COMECON para integrar a economia dos países do Leste.',
          'O teste nuclear soviético de agosto de 1949 inaugurou formalmente a corrida armamentista.',
          'Com a China socialista, o comunismo expandiu-se com força descomunal para a Ásia.',
        ],
        examTip:
          'Em 1949 o monopólio atômico dos EUA acabou. A partir daqui, qualquer guerra direta entre eles causaria destruição global!',
        location: 'Washington D.C., Semipalatinsk (Cazaquistão) e Pequim',
        keyActors: ['Igor Kurchatov', 'Harry Truman', 'Mao Tsé-Tung'],
      },
    ],
    integratedAnalogy: MANDATORY_ANALOGIES[0], // Xadrez
    blocComparison: {
      usaConcept: {
        name: 'Doutrina Truman, Plano Marshall & OTAN',
        desc: 'Democracia representativa, livre iniciativa, Dólar como lastro mundial e aliança de defesa ocidental.',
      },
      ussrConcept: {
        name: 'Doutrina Jdanov, COMECON & Kominform',
        desc: 'Unipartidarismo comunista, estatização da economia, planejamento central e defesa contra o imperialismo.',
      },
    },
    keyTakeaways: [
      'A Guerra Fria originou-se das desconfianças do pós-Segunda Guerra (1945).',
      'A Doutrina Truman e o Plano Marshall moldaram o bloco ocidental capitalista.',
      'O teste nuclear da URSS em 1949 e a criação da OTAN oficializaram o mundo bipolar.',
    ],
    examFocus:
      'Compreender a divisão em dois blocos (EUA x URSS), o Plano Marshall vs COMECON e o significado da Cortina de Ferro.',
  },
  {
    id: 'fase2',
    phaseNumber: 2,
    period: '1950 – 1959',
    title: 'A Expansão Global, O Pacto de Varsóvia & O Início da Corrida Espacial',
    subtitle: 'A Guerra da Coreia, a morte de Stalin, alianças militares e o primeiro satélite em órbita.',
    accentColor: '#016E01',
    themeClass: 'from-green-900/10 to-transparent border-green-900/30',
    defconLevel: 3,
    tensionLabel: 'Conflitos Periféricos & Corrida Tecnológica',
    emoji: '🚀',
    nuclearWarheadsUS: 18000,
    nuclearWarheadsUSSR: 1600,
    leaders: { us: 'Dwight D. Eisenhower', ussr: 'Nikita Kruschev' },
    summary:
      'A década de 1950 levou o confronto para a Ásia e o espaço sideral. A Guerra da Coreia consagrou as "guerras por procuração", enquanto o Pacto de Varsóvia (1955) completou a arquitetura militar bipolar. Em 1957, o Sputnik chocou o Ocidente.',
    milestones: [
      {
        year: 1950,
        dateDetail: '1950 – 1953',
        title: 'Guerra da Coreia (O Primeiro Choque Bélico Indireto)',
        category: 'conflito',
        categoryLabel: 'Guerra por Procuração',
        emoji: '🧊',
        description:
          'A Coreia do Norte (com apoio de Stalin e armamento soviético) invadiu a Coreia do Sul. Os EUA intervieram com mandato da ONU, e a China entrou com centenas de milhares de combatentes.',
        details: [
          'Primeiro confronto armado onde jatos a jato combateram nos céus (F-86 Sabre vs MiG-15).',
          'Mais de 3 milhões de mortos entre militares e civis.',
          'Terminou em 1953 com o Armistício de Panmunjom, mantendo a divisão no Paralelo 38º até os dias de hoje.',
        ],
        examTip:
          'A Coreia é o exemplo clássico de Guerra por Procuração: as superpotências armaram os lados opostos sem guerrearem diretamente.',
        location: 'Península Coreana (Paralelo 38º)',
        keyActors: ['Kim Il-sung', 'Syngman Rhee', 'General Douglas MacArthur', 'Mao Tsé-Tung'],
      },
      {
        year: 1953,
        dateDetail: 'Março de 1953',
        title: 'Morte de Stalin e a "Coexistência Pacífica"',
        category: 'politica',
        categoryLabel: 'Transição Soviética',
        emoji: '🏛️',
        description:
          'A morte de Josef Stalin abriu caminho para Nikita Kruschev, que denunciou os crimes stalinistas (Desestalinização) no XX Congresso do PCUS e propôs uma "Coexistência Pacífica" competitiva com o Ocidente.',
        details: [
          'Kruschev defendia que o socialismo venceria o capitalismo através da superioridade científica e econômica, não pela guerra atômica.',
          'Eisenhower assumiu a presidência dos EUA mantendo a dissuasão nuclear maciça.',
        ],
        examTip:
          'Coexistência Pacífica não significava o fim da rivalidade, mas a transferência do embate para a propaganda, esporte e espaço!',
        location: 'Moscou (Kremlin)',
        keyActors: ['Nikita Kruschev', 'Dwight D. Eisenhower'],
      },
      {
        year: 1955,
        dateDetail: 'Maio de 1955',
        title: 'Criação do Pacto de Varsóvia',
        category: 'politica',
        categoryLabel: 'Aliança Militar Socialista',
        emoji: '🏛️',
        description:
          'Em resposta direta à entrada e remilitarização da Alemanha Ocidental (RFA) na OTAN, a URSS e 7 países do Leste Europeu assinaram o Pacto de Varsóvia.',
        details: [
          'Aliança militar sob o comando supremo de generais do Exército Vermelho.',
          'Membros: URSS, Polônia, Alemanha Oriental (RDA), Tchecoslováquia, Hungria, Romênia, Bulgária e Albânia.',
          'Serviu também como instrumento de intervenção soviética para esmagar revoltas internas no bloco (ex: Hungria em 1956).',
        ],
        examTip:
          'OTAN (1949) e Pacto de Varsóvia (1955) eram os dois braços armados do mundo bipolar.',
        location: 'Varsóvia, Polônia',
        keyActors: ['Nikita Kruschev', 'Líderes do Leste Europeu'],
      },
      {
        year: 1957,
        dateDetail: 'Outubro e Novembro de 1957',
        title: 'O Início da Corrida Espacial: Sputnik 1 e Laika',
        category: 'espacial',
        categoryLabel: 'Corrida Espacial',
        emoji: '🚀',
        description:
          'A URSS colocou em órbita o primeiro satélite artificial da história (Sputnik 1), emitindo bipes que podiam ser ouvidos no mundo todo. Um mês depois, enviou o primeiro ser vivo ao espaço, a cadela Laika no Sputnik 2.',
        details: [
          'Gerou a "Crise do Sputnik" nos EUA: pânico de que os foguetes soviéticos pudessem lançar bombas atômicas sobre solo americano.',
          'Levou à fundação da NASA em 1958 pelo governo norte-americano.',
        ],
        examTip:
          'A Corrida Espacial era a vitrine da Corrida Armamentista: quem dominava foguetes espaciais dominava mísseis balísticos intercontinentais (ICBMs).',
        location: 'Cosmódromo de Baikonur (Cazaquistão)',
        keyActors: ['Sergei Korolev (Pai do programa espacial soviético)', 'Dwight Eisenhower'],
      },
      {
        year: 1959,
        dateDetail: 'Janeiro de 1959',
        title: 'A Revolução Cubana',
        category: 'conflito',
        categoryLabel: 'Revolução no Caribe',
        emoji: '🧊',
        description:
          'Guerrilheiros liderados por Fidel Castro, Che Guevara e Camilo Cienfuegos derrubaram a ditadura pró-americana de Fulgêncio Batista em Cuba.',
        details: [
          'Cuba era considerada o "quintal" dos EUA, com cassinos e refinarias sob controle americano.',
          'A hostilidade econômica dos EUA aproximou Cuba de Moscou, transformando-a no primeiro país socialista das Américas.',
        ],
        examTip:
          'A Revolução Cubana de 1959 foi a semente direta da Crise dos Mísseis de 1962.',
        location: 'Sierra Maestra e Havana, Cuba',
        keyActors: ['Fidel Castro', 'Ernesto Che Guevara', 'Fulgêncio Batista'],
      },
    ],
    conflicts: [PROXY_CONFLICTS[0], PROXY_CONFLICTS[2]], // Coreia e Cuba
    spaceMilestones: [SPACE_RACE_STEPS[0], SPACE_RACE_STEPS[1]],
    keyTakeaways: [
      'A Guerra da Coreia (1950–1953) inaugurou o padrão de guerras indiretas.',
      'O Pacto de Varsóvia (1955) completou o contraponto militar à OTAN.',
      'O Sputnik (1957) inaugurou a Corrida Espacial sob liderança pioneira soviética.',
    ],
    examFocus:
      'Identificar o impacto da Guerra da Coreia, o Pacto de Varsóvia e como o Sputnik deu início à corrida tecnológica.',
  },
  {
    id: 'fase3',
    phaseNumber: 3,
    period: '1960 – 1969',
    title: 'O Auge da Tensão, O Muro de Berlim & A Crise dos Mísseis',
    subtitle: 'Os anos mais perigosos da história humana: o Muro, os 13 dias de Cuba e a chegada à Lua.',
    accentColor: '#FD7600',
    themeClass: 'from-orange-900/10 to-transparent border-orange-900/30',
    defconLevel: 2,
    tensionLabel: 'Perigo Máximo de Guerra Nuclear (DEFCON 2)',
    emoji: '☢️',
    nuclearWarheadsUS: 27100, // 1962
    nuclearWarheadsUSSR: 3300,
    leaders: { us: 'John F. Kennedy / L. B. Johnson', ussr: 'Nikita Kruschev / Leonid Brejnev' },
    summary:
      'A década de 1960 viu a construção do Muro de Berlim (1961) e o momento em que a 3ª Guerra Mundial esteve a minutos de ocorrer na Crise dos Mísseis em Cuba (1962). O período encerrou-se com a consagração da corrida à Lua pela Apollo 11 (1969).',
    milestones: [
      {
        year: 1961,
        dateDetail: 'Abril a Agosto de 1961',
        title: 'Yuri Gagarin no Espaço, Baía dos Porcos & O Muro de Berlim',
        category: 'desfecho',
        categoryLabel: 'Triunfos & Concretização',
        emoji: '🚀',
        description:
          'Em abril, Yuri Gagarin torna-se o 1º humano no espaço. No mesmo mês, a CIA fracassa na Invasão da Baía dos Porcos em Cuba. Em agosto, a Alemanha Oriental ergue o Muro de Berlim para estancar a fuga de civis para o Ocidente.',
        details: [
          'Gagarin: "A Terra é azul!". Um choque de orgulho nacional para a União Soviética.',
          'Em outubro de 1961, tanques dos EUA e da URSS enfrentaram-se no Checkpoint Charlie a 100 metros de distância.',
          'O Muro cercou Berlim Ocidental com 155 km de concreto, cerca elétrica e torres de tiro.',
        ],
        examTip:
          'O Muro de Berlim foi o símbolo de concreto da Cortina de Ferro: separou famílias por 28 anos (1961 a 1989).',
        location: 'Moscou, Cuba e Berlim',
        keyActors: ['Yuri Gagarin', 'John F. Kennedy', 'Nikita Kruschev', 'Walter Ulbricht'],
      },
      {
        year: 1962,
        dateDetail: 'Outubro de 1962 (13 Dias)',
        title: 'A Crise dos Mísseis em Cuba (O Ápice do Perigo Nuclear)',
        category: 'nuclear',
        categoryLabel: 'Crise Nuclear Máxima',
        emoji: '☢️',
        description:
          'Aviões espiões U-2 descobriram mísseis balísticos nucleares soviéticos em Cuba. Kennedy ordenou um bloqueio naval à ilha. Por 13 dias, o mundo viveu sob DEFCON 2, à beira do holocausto atômico.',
        details: [
          'Os mísseis podiam destruir Washington e Nova York em menos de 15 minutos.',
          'O oficial soviético Vasili Arkhipov recusou-se a disparar um torpedo nuclear de um submarino cercado, salvando a humanidade.',
          'Acordo de desfecho: Kruschev retirou os mísseis; Kennedy prometeu não invadir Cuba e retirou secretamente mísseis da Turquia.',
        ],
        examTip:
          'Esta crise gerou a criação do "Telefone Vermelho" (linha direta Washington-Moscou) e do Tratado de Proibição de Testes Nucleares.',
        location: 'Mar do Caribe / Washington / Moscou',
        keyActors: ['John F. Kennedy', 'Nikita Kruschev', 'Fidel Castro', 'Vasili Arkhipov'],
      },
      {
        year: 1964,
        dateDetail: '1964 – 1968',
        title: 'Escalação da Guerra do Vietnã & A Primavera de Praga (1968)',
        category: 'conflito',
        categoryLabel: 'Guerrilhas e Dissidências',
        emoji: '🧊',
        description:
          'Os EUA aumentaram sua presença no Vietnã para mais de 500 mil soldados após o Incidente do Golfo de Tonquim (1964). Em 1968, tanques do Pacto de Varsóvia invadiram Praga para esmagar as reformas do "Socialismo com Rosto Humano" de Alexander Dubček.',
        details: [
          'A Ofensiva do Tet (1968) no Vietnã chocou os EUA e ampliou os protestos pacifistas de jovens e hippies.',
          'A Doutrina Brejnev estabeleceu que a URSS tinha o direito de intervir militarmente em qualquer país socialista que ameaçasse romper com o bloco.',
        ],
        examTip:
          'A Primavera de Praga mostrou que a URSS não admitia liberdades democráticas ou reformas dentro do seu bloco de influência.',
        location: 'Vietnã e Praga (Tchecoslováquia)',
        keyActors: ['Lyndon B. Johnson', 'Leonid Brejnev', 'Alexander Dubček', 'Ho Chi Minh'],
      },
      {
        year: 1969,
        dateDetail: '20 de Julho de 1969',
        title: 'Apollo 11: A Chegada do Homem à Lua',
        category: 'espacial',
        categoryLabel: 'Vitória Lunar dos EUA',
        emoji: '🚀',
        description:
          'Neil Armstrong e Buzz Aldrin tornaram-se os primeiros seres humanos a caminhar sobre a superfície lunar no módulo Eagle da missão Apollo 11, cumprindo a promessa de Kennedy.',
        details: [
          '"Um pequeno passo para o homem, um salto gigante para a humanidade."',
          'Transmitido ao vivo pela televisão para mais de 650 milhões de pessoas em todo o planeta.',
          'Consagrou a virada tecnológica dos EUA na reta final da corrida espacial.',
        ],
        examTip:
          'A conquista da Lua representou o clímax da corrida espacial entre o capitalismo e o socialismo.',
        location: 'Mar da Tranquilidade (Lua) e Centro Espacial Kennedy (Flórida)',
        keyActors: ['Neil Armstrong', 'Buzz Aldrin', 'Michael Collins', 'Richard Nixon'],
      },
    ],
    integratedAnalogy: MANDATORY_ANALOGIES[2], // Roleta Russa
    conflicts: [PROXY_CONFLICTS[3]], // Crise dos Mísseis
    spaceMilestones: [SPACE_RACE_STEPS[2], SPACE_RACE_STEPS[3]], // Gagarin & Apollo 11
    keyTakeaways: [
      'O Muro de Berlim (1961) dividiu fisicamente a Europa por quase três décadas.',
      'A Crise dos Mísseis (1962) foi o ápice do risco nuclear na história humana.',
      'A chegada do homem à Lua (1969) encerrou a disputa espacial com vitória simbólica dos EUA.',
    ],
    examFocus:
      'A anatomia do Muro de Berlim, os 13 dias da Crise dos Mísseis de Cuba e a analogia da Roleta Russa.',
  },
  {
    id: 'fase4',
    phaseNumber: 4,
    period: '1970 – 1979',
    title: 'A Détente (Distensão), O Fim do Vietnã & A Doutrina MAD',
    subtitle: 'Acordos de desarmamento, a derrota americana na selva e a invasão do Afeganistão.',
    accentColor: '#C9A84C',
    themeClass: 'from-amber-900/10 to-transparent border-amber-900/30',
    defconLevel: 4,
    tensionLabel: 'Distensão Diplomática & Esgotamento Bélico',
    emoji: '🏛️',
    nuclearWarheadsUS: 26000,
    nuclearWarheadsUSSR: 28000,
    leaders: { us: 'Richard Nixon / Jimmy Carter', ussr: 'Leonid Brejnev' },
    summary:
      'Os anos 70 foram marcados pela Détente (descompressão das tensões), assinaturas dos tratados SALT de controle de ogivas e cooperação espacial. Em 1975, os EUA saíram derrotados do Vietnã. Mas em 1979, a invasão soviética do Afeganistão reabriu o confronto.',
    milestones: [
      {
        year: 1972,
        dateDetail: 'Maio de 1972',
        title: 'Tratado SALT I & A Diplomacia do Ping-Pong',
        category: 'politica',
        categoryLabel: 'Controle de Armas',
        emoji: '🏛️',
        description:
          'Nixon visitou Pequim (rompendo o isolamento chinês) e foi a Moscou assinar com Brejnev o primeiro Tratado de Limitação de Armas Estratégicas (SALT I) e o Tratado Antimísseis Balísticos (ABM).',
        details: [
          'Primeiro acordo internacional congelando o número de lançadores de mísseis nucleares das superpotências.',
          'Consagração da política de "Détente" conduzida pelo diplomata americano Henry Kissinger.',
        ],
        examTip:
          'A Détente provou que o medo da destruição mútua (MAD) forçou as potências a sentar à mesa de negociações.',
        location: 'Moscou e Pequim',
        keyActors: ['Richard Nixon', 'Leonid Brejnev', 'Henry Kissinger', 'Chou En-lai'],
      },
      {
        year: 1975,
        dateDetail: 'Abril e Julho de 1975',
        title: 'Queda de Saigon (Fim do Vietnã) & Missão Apollo-Soyuz',
        category: 'conflito',
        categoryLabel: 'Derrota dos EUA e Paz Espacial',
        emoji: '🚀',
        description:
          'Em abril, as tropas do Vietnã do Norte e dos vietcongs tomaram Saigon, derrotando os EUA e unificando o país sob o socialismo. Em julho, as naves Apollo e Soyuz acoplaram no espaço, e seus tripulantes apertaram as mãos em órbita.',
        details: [
          'A Guerra do Vietnã foi a maior derrota militar e política da história dos EUA no século XX.',
          'A foto de helicópteros retirando civis e diplomatas do telhado da embaixada em Saigon tornou-se histórica.',
          'A missão Apollo-Soyuz marcou o encerramento da Corrida Espacial competitiva e o início da cooperação científica.',
        ],
        examTip:
          'O Vietnã provou que superioridade atômica não garantia vitória em guerras de guerrilha em florestas tropicais.',
        location: 'Saigon (Vietnã) e Órbita Terrestre',
        keyActors: ['Gerald Ford', 'General Vo Nguyen Giap', 'Alexei Leonov', 'Thomas Stafford'],
      },
      {
        year: 1979,
        dateDetail: 'Dezembro de 1979',
        title: 'Invasão Soviética do Afeganistão (O "Vietnã da URSS")',
        category: 'conflito',
        categoryLabel: 'Fim da Détente',
        emoji: '🧊',
        description:
          'A URSS invadiu o Afeganistão para apoiar um governo comunista acuado por rebeldes islâmicos (mujahidin). A guerra durou 10 anos, gerou pesadas perdas para Moscou e encerrou a fase da Détente.',
        details: [
          'Os EUA financiaram e armaram os mujahidin afegãos com mísseis antiaéreos Stinger através da CIA.',
          'Os EUA boicotaram os Jogos Olímpicos de Moscou em 1980 em protesto.',
          'A guerra sangrou a economia e a moral soviética por uma década.',
        ],
        examTip:
          'O Afeganistão é chamado de "o Vietnã soviético" pelo alto custo humano e financeiro sem vitória militar.',
        location: 'Cabul e montanhas do Afeganistão',
        keyActors: ['Leonid Brejnev', 'Jimmy Carter', 'Rebeldes Mujahidin'],
      },
    ],
    integratedAnalogy: MANDATORY_ANALOGIES[1], // Carrinho de Choque
    conflicts: [PROXY_CONFLICTS[1]], // Vietnã
    spaceMilestones: [SPACE_RACE_STEPS[4]], // Apollo-Soyuz
    keyTakeaways: [
      'A Détente permitiu os primeiros acordos reais de desarmamento nuclear (SALT).',
      'A derrota dos EUA no Vietnã (1975) causou profundo trauma político e moral.',
      'A analogia do Carrinho de Choque resume o acúmulo de armas pela Doutrina MAD.',
      'A invasão do Afeganistão em 1979 reabriu as hostilidades no cenário internacional.',
    ],
    examFocus:
      'Entender o conceito de Détente, os impactos da Guerra do Vietnã e a analogia do Carrinho de Choque Nuclear (MAD).',
  },
  {
    id: 'fase5',
    phaseNumber: 5,
    period: '1980 – 1991',
    title: 'A Nova Guerra Fria, As Reformas de Gorbachev & O Fim da URSS',
    subtitle: 'Da "Guerra nas Estrelas" de Reagan à Queda do Muro de Berlim e a dissolução da União Soviética.',
    accentColor: '#991B1B',
    themeClass: 'from-red-900/10 to-transparent border-red-900/30',
    defconLevel: 5,
    tensionLabel: 'Colapso dos Regimes Satélites & Fim da Bipolaridade',
    emoji: '🧊',
    nuclearWarheadsUS: 22000,
    nuclearWarheadsUSSR: 37000,
    leaders: { us: 'Ronald Reagan / George H. W. Bush', ussr: 'Mikhail Gorbachev / Boris Yeltsin' },
    summary:
      'Nos anos 80, Reagan aumentou os gastos militares dos EUA. Mikhail Gorbachev assumiu a URSS em crise profunda e propôs a Glasnost (abertura política) e a Perestroika (reforma econômica). As reformas culminaram na Queda do Muro de Berlim (1989) e na extinção da URSS em 1991.',
    milestones: [
      {
        year: 1983,
        dateDetail: '1980 – 1983',
        title: 'A "Guerra nas Estrelas" (SDI) e a Retórica do Império do Mal',
        category: 'nuclear',
        categoryLabel: 'Pressão Militar Máxima',
        emoji: '☢️',
        description:
          'Ronald Reagan chamou a URSS de "Império do Mal" e anunciou a Iniciativa de Defesa Estratégica (SDI / "Guerra nas Estrelas"): um escudo espacial com satélites e lasers para destruir mísseis balísticos no ar.',
        details: [
          'A economia soviética, já estagnada, não conseguiu acompanhar os custos trilionários dessa nova corrida tecnológica.',
          'A URSS boicotou as Olimpíadas de Los Angeles em 1984 em retaliação a 1980.',
        ],
        examTip:
          'A corrida armamentista acelerada por Reagan forçou a URSS a reconhecer a inviabilidade financeira do confronto.',
        location: 'Washington D.C.',
        keyActors: ['Ronald Reagan', 'Iuri Andropov', 'Konstantin Chernenko'],
      },
      {
        year: 1985,
        dateDetail: 'Março de 1985 a 1987',
        title: 'Mikhail Gorbachev: Glasnost & Perestroika',
        category: 'politica',
        categoryLabel: 'Reformas Estruturais',
        emoji: '🏛️',
        description:
          'Gorbachev assumiu a URSS com a missão de modernizar o socialismo. Lançou a Glasnost (liberdade de imprensa e transparência política) e a Perestroika (abertura econômica à iniciativa privada controlada).',
        details: [
          'Assinatura do Tratado INF (1987) com Reagan, eliminando uma classe inteira de mísseis nucleares na Europa.',
          'Gorbachev anunciou a renúncia à Doutrina Brejnev: os países do Leste podiam escolher seu próprio caminho ("Doutrina Sinatra").',
        ],
        examTip:
          'Memorize para a prova: Glasnost = Abertura política e fim da censura; Perestroika = Reestruturação da economia.',
        location: 'Moscou e Reykjavik (Islândia)',
        keyActors: ['Mikhail Gorbachev', 'Ronald Reagan'],
      },
      {
        year: 1989,
        dateDetail: '9 de Novembro de 1989',
        title: 'A Queda do Muro de Berlim e o Efeito Dominó no Leste',
        category: 'desfecho',
        categoryLabel: 'Ruptura Histórica Suprema',
        emoji: '🧊',
        description:
          'Após meses de protestos pacíficos e abertura de fronteiras na Hungria, o porta-voz da RDA anunciou acidentalmente a liberação imediata de viagens. Milhares de cidadãos correram para o Muro e iniciaram sua demolição.',
        details: [
          'O Muro ruiu sem resistência dos soldados de fronteira.',
          'Queda pacífica de governos comunistas na Polônia (Solidariedade), Hungria, Tchecoslováquia (Revolução de Veludo) e Romênia.',
          'Em 3 de outubro de 1990, a Alemanha foi oficialmente reunificada.',
        ],
        examTip:
          'A Queda do Muro de Berlim é considerada pelos historiadores o fim simbólico da Guerra Fria.',
        location: 'Berlim, Alemanha',
        keyActors: ['Cidadãos de Berlim', 'Helmut Kohl', 'Mikhail Gorbachev', 'Günter Schabowski'],
      },
      {
        year: 1991,
        dateDetail: 'Agosto a 25 de Dezembro de 1991',
        title: 'Dissolução da União Soviética e Fim Formal da Guerra Fria',
        category: 'desfecho',
        categoryLabel: 'Fim de uma Era',
        emoji: '🏛️',
        description:
          'Em agosto de 1991, militares da linha-dura tentaram um golpe contra Gorbachev, mas foram derrotados pelo povo liderado por Boris Yeltsin. Em 25 de dezembro de 1991, a URSS foi dissolvida e a bandeira soviética foi arriada do Kremlin.',
        details: [
          'A URSS fragmentou-se em 15 repúblicas soberanas independentes (Rússia, Ucrânia, Belarus, Cazaquistão, etc.).',
          'Encerramento do Pacto de Varsóvia e transição para a Nova Ordem Mundial (hegemonia unipolar dos EUA).',
          'Fim do confronto bipolar que durou de 1945 a 1991 (46 anos).',
        ],
        examTip:
          'A Guerra Fria durou exatamente de 1945 (pós-2ª Guerra) a 1991 (dissolução da URSS).',
        location: 'Moscou (Kremlin), Rússia',
        keyActors: ['Mikhail Gorbachev', 'Boris Yeltsin', 'George H. W. Bush'],
      },
    ],
    keyTakeaways: [
      'Reagan intensificou a pressão tecnológica com a "Guerra nas Estrelas" (SDI).',
      'Gorbachev tentou salvar o socialismo com a Glasnost e a Perestroika, mas acelerou a abertura.',
      'A Queda do Muro de Berlim (1989) e a Dissolução da URSS (1991) encerraram a Guerra Fria.',
    ],
    examFocus:
      'Os significados de Glasnost e Perestroika, a Queda do Muro de Berlim e as consequências do fim da URSS em 1991.',
  },
];
