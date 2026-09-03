export interface HistoricalIndicator {
  value: string;
  label: string;
  historicalContext: string;
  modernConnection: string;
}

export interface PedagogicalMetaphor {
  number: number;
  title: string;
  quote: string;
  concept: string;
  pedagogicalLesson: string;
}

export interface ComparativeBlockRow {
  aspect: string;
  capitalistBlock: string;
  socialistBlock: string;
}

export interface StrategicTimelineItem {
  year: string;
  title: string;
  description: string;
  impact: string;
}

export interface GuideSectionItem {
  number: string;
  title: string;
  category: 'Capa' | 'Contexto' | 'Estatísticas' | 'Cotidiano' | 'Analogias' | 'Conflitos' | 'Espaço' | 'Teorias' | 'Desfecho' | 'Atividades';
  lead: string;
  bulletPoints: string[];
  quote?: {
    text: string;
    author: string;
    source: string;
  };
  keyConcepts: string;
  reflectionQuestion?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface BNCCQuestion {
  questionNumber: number;
  prompt: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
    isCorrect: boolean;
  }[];
  justification: string;
  bnccSkill: string;
}

// 1. OS 4 GRANDES INDICADORES HISTÓRICOS
export const COLD_WAR_INDICATORS: HistoricalIndicator[] = [
  {
    value: '70.000+',
    label: 'Ogivas Nucleares no Auge (1986)',
    historicalContext:
      'No auge da corrida armamentista nos anos 1980, EUA e URSS acumulavam juntos mais de 70.000 ogivas atômicas e termonucleares ativas, suficientes para aniquilar a biosfera do planeta mais de 10 vezes consecutivas.',
    modernConnection:
      'Hoje: Os tratados de desarmamento (SALT, INF, START) reduziram o arsenal mundial para cerca de 12.500 ogivas, mas a ameaça nuclear voltou ao debate geopolítico contemporâneo.',
  },
  {
    value: '46 Anos',
    label: 'Duração do Conflito (1945–1991)',
    historicalContext:
      'Quase meio século de confronto contínuo entre duas superpotências globais, dividindo o mundo em blocos antagônicos, gerando guerras por procuração na Ásia, África e América Latina, e disputas na espionagem.',
    modernConnection:
      'Hoje: As alianças e tensões da Guerra Fria moldaram o mundo multipolar atual, a expansão da OTAN e os alinhamentos diplomáticos no Conselho de Segurança da ONU.',
  },
  {
    value: '28 Anos',
    label: 'O Muro de Berlim (1961–1989)',
    historicalContext:
      'A capital alemã foi dividida por 155 km de concreto armado, cerca eletrificada, 302 torres de vigilância e a infame "Faixa da Morte" (Todesstreifen) com ordem de atirar para matar (Schießbefehl) em desertores.',
    modernConnection:
      'Hoje: A queda do Muro de Berlim em 9 de novembro de 1989 tornou-se o maior símbolo internacional da conquista da liberdade e do fim das barreiras totalitárias.',
  },
  {
    value: '13 Dias',
    label: 'A Crise dos Mísseis em Cuba (1962)',
    historicalContext:
      'Em outubro de 1962, a descoberta de mísseis nucleares soviéticos em Cuba colocou os EUA em DEFCON 2 e a humanidade a meros minutos de uma Terceira Guerra Mundial nuclear irreversível.',
    modernConnection:
      'Hoje: Como lição do impasse, foi criado o "Telefone Vermelho" (linha de comunicação direta entre Washington e Moscou) para evitar catástrofes nucleares por mal-entendidos.',
  },
];

// 2. AS 3 METÁFORAS / ANALOGIAS PEDAGÓGICAS OBRIGATÓRIAS
export const COLD_WAR_METAPHORS: PedagogicalMetaphor[] = [
  {
    number: 1,
    title: "O Grande Xadrez Bipolar (Origens e Alianças)",
    quote: "A Guerra Fria foi um jogo de xadrez global onde os reis nunca se tocaram, mas sacrificaram peões em todos os continentes.",
    concept:
      "Pense na Guerra Fria como um tabuleiro colossal de xadrez: EUA e URSS eram os dois grandes mestres que controlavam cada movimento. Como sabiam que um confronto corporal direto entre eles destruiria o salão inteiro (o planeta), eles jamais permitiram que suas tropas regulares se enfrentassem abertamente. Em vez disso, movimentavam 'peões', 'torres' e 'cavalos' através de alianças (OTAN x Pacto de Varsóvia), financiamento de ditaduras e guerras indiretas em países periféricos.",
    pedagogicalLesson:
      "Lição Pedagógica: Compreender por que o conflito foi chamado de 'Fria' — ausência de confronto armado direto entre as superpotências devido à dissuasão nuclear, deslocando a violência para guerras por procuração.",
  },
  {
    number: 2,
    title: "O Carrinho de Choque Nuclear & A Doutrina MAD",
    quote: "Se você e seu rival estão em uma sala cheia de gasolina até a cintura, não importa quem tem mais caixas de fósforos: acender uma significa a morte de ambos.",
    concept:
      "Imagine dois motoristas pilotando carrinhos de bate-bate repletos de dinamite. Nenhum dos dois pode acelerar contra o outro porque o menor impacto detonará as duas cargas simultaneamente. Essa foi a lógica da Destruição Mútua Assegurada (MAD - Mutually Assured Destruction): o acúmulo desproporcional de dezenas de milhares de bombas atômicas funcionou, paradoxalmente, como uma garantia de não-agressão mútua, pois o primeiro a atacar sofreria um contra-ataque devastador.",
    pedagogicalLesson:
      "Lição Pedagógica: Entender o mecanismo da 'Paz Armada' e da dissuasão nuclear: como o medo da aniquilação total evitou a eclosão da Terceira Guerra Mundial.",
  },
  {
    number: 3,
    title: "A Roleta Russa de 13 Dias (A Crise dos Mísseis de 1962)",
    quote: "Estivemos cara a cara, de olhos nos olhos, e o outro sujeito acabou de piscar.",
    concept:
      "Durante os 13 dias de outubro de 1962, o planeta Terra esteve preso em uma partida de roleta russa com o tambor do revólver praticamente cheio. Com a instalação de mísseis balísticos nucleares soviéticos a apenas 140 km da Flórida e o bloqueio naval americano, qualquer disparo acidental de um avião U-2 ou ordem de um submarino soviético isolado teria desencadeado a extinção de centenas de milhões de vidas humanas em poucas horas.",
    pedagogicalLesson:
      "Lição Pedagógica: Analisar a fragilidade da diplomacia de crise e o papel de figuras individuais (como JFK, Nikita Kruschev e o oficial soviético Vasili Arkhipov) na preservação da sobrevivência da civilização.",
  },
];

// 3. QUADRO COMPARATIVO DOS DOIS GRANDES BLOCOS
export const COLD_WAR_COMPARISON_TABLE: ComparativeBlockRow[] = [
  {
    aspect: 'Líder Hegemônico & Bloco',
    capitalistBlock: '🇺🇸 Estados Unidos da América (Bloco Ocidental / Capitalista)',
    socialistBlock: '🇷🇺 União das Repúblicas Socialistas Soviéticas (Bloco Oriental / Socialista)',
  },
  {
    aspect: 'Sistema Econômico & Propriedade',
    capitalistBlock: 'Capitalismo de mercado, livre iniciativa, propriedade privada dos meios de produção, busca pelo lucro individual e oferta/procura.',
    socialistBlock: 'Economia planificada estatal (Planos Quinquenais), estatização total dos meios de produção, ausência de empresas privadas e controle estatal de preços.',
  },
  {
    aspect: 'Regime Político & Ideologia',
    capitalistBlock: 'Democracia representativa liberal, pluripartidarismo, liberdade de imprensa, direitos individuais e contenção do avanço socialista.',
    socialistBlock: 'Socialismo de Estado, regime de partido único (Partido Comunista - PCUS), centralismo democrático, censura estatal e ateísmo científico oficial.',
  },
  {
    aspect: 'Doutrina de Política Externa',
    capitalistBlock: 'Doutrina Truman (1947): Política de Contenção (Containment) para impedir o avanço geopolítico da influência soviética no globo.',
    socialistBlock: 'Doutrina Jdanov / Kominform (1947): Divisão do mundo em dois campos (imperialista antidemocrático x anti-imperialista democrático) e apoio à revolução mundial.',
  },
  {
    aspect: 'Plano de Integração Econômica',
    capitalistBlock: 'Plano Marshall (1947): Injeção massiva de mais de US$ 13 bilhões para reconstruir a infraestrutura e a economia da Europa Ocidental arruinada.',
    socialistBlock: 'COMECON (1949): Conselho de Assistência Econômica Mútua para coordenar a produção industrial e energética dos países satélites do Leste Europeu.',
  },
  {
    aspect: 'Aliança Militar Defensiva',
    capitalistBlock: 'OTAN - Organização do Tratado do Atlântico Norte (1949): Defesa militar coletiva mútua (Artigo 5º: ataque a um membro é ataque a todos).',
    socialistBlock: 'Pacto de Varsóvia (1955): Aliança militar conjunta entre a URSS e os países socialistas do Leste Europeu sob comando unificado em Moscou.',
  },
  {
    aspect: 'Agência de Inteligência & Espionagem',
    capitalistBlock: 'CIA (Central Intelligence Agency): Operações secretas, espionagem aérea (aviões U-2), escutas e apoio a golpes de Estado pró-Ocidente.',
    socialistBlock: 'KGB (Comitê de Segurança do Estado): Rede internacional de inteligência, contraespionagem, vigilância interna e infiltração no Ocidente.',
  },
  {
    aspect: 'Método de Ação nas Guerras Indiretas',
    capitalistBlock: 'Financiamento a governos aliados, fornecimento de armas modernas, treinamento de forças anticomunistas e intervenção militar direta (Coreia, Vietnã).',
    socialistBlock: 'Envio de instrutores militares, fornecimento de caças MiG e fuzis AK-47 para movimentos de libertação nacional e guerrilhas socialistas.',
  },
];

// 4. CRONOLOGIA HISTÓRICA ESTRATÉGICA (1945 a 1991)
export const STRATEGIC_TIMELINE: StrategicTimelineItem[] = [
  {
    year: '1945',
    title: 'Conferências de Yalta e Potsdam, Bombas Atômicas & Criação da ONU',
    description:
      'Os Três Grandes (Roosevelt/Truman, Churchill/Attlee e Stalin) reúnem-se para planejar o pós-guerra, decidindo a partilha da Alemanha e de Berlim em 4 zonas de ocupação. Em agosto, os EUA detonam bombas atômicas em Hiroshima e Nagasaki, inaugurando a Era Nuclear. Em outubro, é fundada a Organização das Nações Unidas (ONU).',
    impact:
      '🎯 Impacto: Fim da Segunda Guerra Mundial com a Europa destruída e emergência de duas superpotências hegemônicas com arsenais nucleares.',
  },
  {
    year: '1946',
    title: 'O Discurso da "Cortina de Ferro" de Winston Churchill',
    description:
      'Em Fulton (EUA), o ex-primeiro-ministro britânico Winston Churchill pronuncia a célebre frase: "De Stettin, no Báltico, a Trieste, no Adriático, uma cortina de ferro desceu sobre o continente", denunciando a subjugação do Leste Europeu sob a órbita de Stalin.',
    impact:
      '🎯 Impacto: Cristalização simbólica da divisão irreversível da Europa em dois blocos ideológicos fechados.',
  },
  {
    year: '1947',
    title: 'Doutrina Truman & Plano Marshall (Contenção e Reconstrução)',
    description:
      'O presidente Harry Truman declara ajuda militar e financeira à Grécia e à Turquia para conter o avanço comunista (Doutrina Truman). Meses depois, o general George Marshall anuncia o Plano Marshall com empréstimos a juros baixos e doações para reconstruir a indústria e cidades da Europa Ocidental.',
    impact:
      '🎯 Impacto: Estabelecimento formal da política americana de contenção global e recuperação acelerada do capitalismo europeu.',
  },
  {
    year: '1947',
    title: 'Doutrina Jdanov & Criação do Kominform',
    description:
      'Em resposta ao Plano Marshall, o ideólogo soviético Andrei Jdanov formula a tese dos "dois campos". A URSS funda o Kominform (Escritório de Informação dos Partidos Comunistas) para coordenar a linha política e expurgar dissidências na Europa Oriental.',
    impact:
      '🎯 Impacto: Fechamento ideológico do bloco soviético e controle rígido de Moscou sobre os partidos comunistas satélites.',
  },
  {
    year: '1948–1949',
    title: 'O Bloqueio de Berlim & A Histórica Ponte Aérea',
    description:
      'Em retaliação à criação da nova moeda ocidental (Deutsche Mark), Stalin fecha todas as ferrovias, estradas e canais de acesso a Berlim Ocidental. Os EUA e a Grã-Bretanha respondem com uma ponte aérea monumental que realizou mais de 278.000 voos em 11 meses, transportando comida, carvão e remédios até Stalin recuar.',
    impact:
      '🎯 Impacto: Primeira grande crise da Guerra Fria e divisão formal da Alemanha em dois países: RFA (Alemanha Ocidental) e RDA (Alemanha Oriental).',
  },
  {
    year: '1949',
    title: 'Criação da OTAN, COMECON, 1ª Bomba Atômica Soviética & Revolução Chinesa',
    description:
      'Em abril, 12 nações ocidentais assinam o tratado da OTAN em Washington. Em janeiro, nasce o COMECON em Moscou. Em agosto, a URSS detona a bomba RDS-1 no Cazaquistão, quebrando o monopólio americano. Em outubro, Mao Tsé-Tung proclama a República Popular da China após vencer a guerra civil.',
    impact:
      '🎯 Impacto: Equilíbrio do terror atômico, consolidação dos blocos militares e gigantesca expansão territorial do comunismo na Ásia.',
  },
  {
    year: '1950–1953',
    title: 'A Guerra da Coreia: O Primeiro Choque Armado Indireto',
    description:
      'Com o aval de Stalin, tropas da Coreia do Norte comunista invadem a Coreia do Sul. A ONU e os EUA enviam tropas comandadas pelo general MacArthur; a China de Mao intervém com centenas de milhares de "voluntários". Após 3 anos de combates e mais de 3 milhões de mortos, é assinado o Armistício de Panmunjom.',
    impact:
      '🎯 Impacto: Manutenção definitiva da divisão da península coreana no Paralelo 38º e consolidação da Guerra Fria na Ásia.',
  },
  {
    year: '1953',
    title: 'Morte de Stalin, Desestalinização & Coexistência Pacífica',
    description:
      'A morte de Josef Stalin em março de 1953 abre caminho para a ascensão de Nikita Kruschev, que no XX Congresso do PCUS (1956) lê o Relatório Secreto denunciando os crimes e o culto à personalidade de Stalin, propondo a política de "Coexistência Pacífica" e competição econômica/científica.',
    impact:
      '🎯 Impacto: Alívio temporário das tensões, reformas internas na URSS e abertura de espaço para o início da corrida tecnológica espacial.',
  },
  {
    year: '1955',
    title: 'Criação do Pacto de Varsóvia & Conferência de Bandung',
    description:
      'Em resposta à integração da Alemanha Ocidental (RFA) à OTAN, a URSS e 7 países do Leste Europeu formalizam o Pacto de Varsóvia. No mesmo ano, líderes de 29 países da Ásia e África reúnem-se na Indonésia (Conferência de Bandung) fundando o Movimento dos Países Não-Alinhados (Terceiro Mundo).',
    impact:
      '🎯 Impacto: Institucionalização militar da cortina de ferro e nascimento de uma terceira via diplomática anticolonialista.',
  },
  {
    year: '1956',
    title: 'Revolução Húngara & Crise do Canal de Suez',
    description:
      'Populares e estudantes húngaros exigem reformas democráticas e a saída do Pacto de Varsóvia. Tropas e tanques soviéticos invadem Budapeste e esmagam a insurreição. Simultaneamente, Grã-Bretanha, França e Israel atacam o Egito no Canal de Suez, sendo obrigados a recuar sob pressão conjunta de EUA e URSS.',
    impact:
      '🎯 Impacto: Demonstração de que a URSS não toleraria deserções em seu bloco e consagração definitiva dos EUA e URSS como as únicas superpotências globais.',
  },
  {
    year: '1957',
    title: 'O Início da Corrida Espacial: Sputnik 1 e a Cadela Laika',
    description:
      'Em 4 de outubro de 1957, a União Soviética lança o Sputnik 1, primeiro satélite artificial em órbita da Terra. Semanas depois, o Sputnik 2 envia a cadela Laika, o primeiro ser vivo no espaço. O evento causa pânico militar nos EUA ("Crise do Sputnik") pela percepção de que foguetes soviéticos poderiam lançar ogivas intercontinentais.',
    impact:
      '🎯 Impacto: Criação da NASA (1958) pelos EUA e transferência da disputa de prestígio ideológico para a exploração do cosmos.',
  },
  {
    year: '1959',
    title: 'A Revolução Cubana: O Socialismo Chega às Américas',
    description:
      'Guerrilheiros liderados por Fidel Castro, Raúl Castro e Che Guevara tomam Havana e derrubam o ditador pró-americano Fulgêncio Batista. Diante das sanções e embargos dos EUA, Cuba nacionaliza empresas estrangeiras, declara o caráter socialista da revolução e firma aliança militar com a URSS.',
    impact:
      '🎯 Impacto: Primeira presença de um país aliado à União Soviética a apenas 140 km do litoral continental dos Estados Unidos.',
  },
  {
    year: '1961',
    title: 'Yuri Gagarin, Baía dos Porcos & A Construção do Muro de Berlim',
    description:
      'Em abril, o cosmonauta soviético Yuri Gagarin torna-se o primeiro humano no espaço a bordo da Vostok 1 ("A Terra é azul!"). No mesmo mês, fracassa a invasão da Baía dos Porcos por exilados armados pela CIA. Em agosto, para conter a fuga de 3 milhões de cidadãos para o lado capitalista, a Alemanha Oriental ergue o Muro de Berlim.',
    impact:
      '🎯 Impacto: Triunfo soviético no espaço, humilhação diplomática de Kennedy e divisão de concreto e arame farpado em Berlim.',
  },
  {
    year: '1962',
    title: 'A Crise dos Mísseis em Cuba: Os 13 Dias em DEFCON 2',
    description:
      'Fotografias aéreas de aviões espiões U-2 revelam a instalação de bases de mísseis balísticos nucleares soviéticos R-12 em Cuba. O presidente John F. Kennedy impõe uma quarentena naval à ilha e eleva as forças militares para DEFCON 2. O mundo vive 13 dias de pânico absoluto até Kruschev ordenar o retorno dos navios em troca da promessa de não-invasão de Cuba e da retirada secreta de mísseis americanos da Turquia.',
    impact:
      '🎯 Impacto: O clímax do perigo nuclear na história, levando à criação do Telefone Vermelho e à assinatura do Tratado de Interdição Parcial de Testes Nucleares (1963).',
  },
  {
    year: '1964–1975',
    title: 'A Guerra do Vietnã: Guerra na Selva e Consciência Global',
    description:
      'Após o Incidente do Golfo de Tonquim (1964), os EUA enviam mais de 500.000 soldados para defender o Vietnã do Sul contra a guerrilha vietcong e o exército do Vietnã do Norte (abastecido por armas soviéticas e chinesas). O uso de napalm, Agente Laranja e as transmissões televisivas mobilizam protestos pacifistas de massa.',
    impact:
      '🎯 Impacto: Em 1975 ocorre a Queda de Saigon; o Vietnã é unificado sob o regime socialista no maior revés político e militar da história dos Estados Unidos.',
  },
  {
    year: '1968',
    title: 'A Primavera de Praga & A Doutrina Brejnev',
    description:
      'Na Tchecoslováquia, o líder Alexander Dubček promove reformas liberalizantes conhecidas como "Socialismo com Rosto Humano" (fim da censura, liberdade sindical). Em agosto, 500.000 soldados do Pacto de Varsóvia invadem Praga para esmagar as reformas, inaugurando a Doutrina Brejnev de soberania limitada dos países satélites.',
    impact:
      '🎯 Impacto: Reafirmação do controle autoritário soviético e desilusão de intelectuais de esquerda ocidentais com o modelo de Moscou.',
  },
  {
    year: '1969',
    title: 'Missão Apollo 11: O Homem Pisa na Lua',
    description:
      'Em 20 de julho de 1969, o módulo lunar Eagle pousa no Mar da Tranquilidade. Neil Armstrong e Buzz Aldrin tornam-se os primeiros seres humanos a caminhar na superfície lunar diante de mais de 600 milhões de telespectadores, pronunciando a frase histórica: "Um pequeno passo para o homem, um salto gigante para a humanidade".',
    impact:
      '🎯 Impacto: Vitória simbólica e tecnológica dos Estados Unidos na Corrida Espacial, cumprindo a promessa de Kennedy.',
  },
  {
    year: '1972',
    title: 'A Détente, Visita de Nixon à China & Tratados SALT I',
    description:
      'O presidente Richard Nixon visita a China comunista e se reúne com Mao Tsé-Tung ("Diplomacia do Ping-Pong"), explorando a ruptura sino-soviética. Em seguida, viaja a Moscou e assina com Leonid Brejnev o tratado SALT I (Strategic Arms Limitation Talks), limitando o número de mísseis balísticos e lançadores.',
    impact:
      '🎯 Impacto: Início do período da Détente (distensão diplomática) e reconhecimento do equilíbrio estratégico entre as superpotências.',
  },
  {
    year: '1975',
    title: 'Missão Conjunta Apollo-Soyuz & Acordos de Helsinque',
    description:
      'Em julho de 1975, uma nave americana Apollo e uma nave soviética Soyuz acoplam-se no espaço; astronautas americanos e cosmonautas soviéticos apertam as mãos em órbita. No mesmo ano, 35 países assinam a Ata de Helsinque, reconhecendo as fronteiras europeias do pós-guerra e princípios de direitos humanos.',
    impact:
      '🎯 Impacto: Ápice da distensão diplomática e fim da fase beligerante da corrida espacial.',
  },
  {
    year: '1979',
    title: 'Invasão Soviética do Afeganistão (Fim da Détente)',
    description:
      'Tropas da URSS invadem o Afeganistão para sustentar um governo comunista aliado contra a insurreição de guerrilheiros islâmicos (mujahidin). Os EUA, através da CIA, financiam e armam os rebeldes com mísseis antiaéreos Stinger. O conflito de 10 anos torna-se conhecido como o "Vietnã da União Soviética".',
    impact:
      '🎯 Impacto: Fim definitivo da Détente, boicote liderado pelos EUA aos Jogos Olímpicos de Moscou em 1980 e sangria econômica soviética.',
  },
  {
    year: '1983',
    title: 'A "Guerra nas Estrelas" (SDI) & A Retórica de Ronald Reagan',
    description:
      'O presidente americano Ronald Reagan qualifica a URSS como o "Império do Mal" e anuncia a Iniciativa de Defesa Estratégica (SDI / Star Wars), um bilionário escudo espacial com satélites e armas laser para interceptar mísseis soviéticos em pleno voo.',
    impact:
      '🎯 Impacto: Forçou a liderança soviética a reconhecer sua incapacidade financeira e tecnológica de acompanhar uma nova rodada armamentista.',
  },
  {
    year: '1985–1986',
    title: 'Gorbachev Assume a URSS: Glasnost, Perestroika & Chernobyl',
    description:
      'Mikhail Gorbachev assume o comando do PCUS e implementa duas reformas estruturais: Glasnost (transparência política e liberdade de imprensa) e Perestroika (reestruturação econômica). Em abril de 1986, a explosão do reator 4 da usina de Chernobyl escancara a obsolescência tecnológica e a necessidade de abertura.',
    impact:
      '🎯 Impacto: Fim do monopólio da verdade oficial, conscientização pública dos problemas do sistema e desmoronamento do medo civil.',
  },
  {
    year: '1987',
    title: 'Assinatura do Histórico Tratado INF',
    description:
      'Em Washington, Ronald Reagan e Mikhail Gorbachev assinam o Tratado de Forças Nucleares de Alcance Intermediário (INF), concordando em eliminar completamente uma classe inteira de mísseis balísticos e de cruzeiro com alcance de 500 a 5.500 km.',
    impact:
      '🎯 Impacto: Primeiro tratado da história a prever a destruição real de armamentos nucleares, e não apenas limites de fabricação.',
  },
  {
    year: '1989',
    title: 'A Queda do Muro de Berlim & O Colapso do Bloco do Leste (9 de Novembro)',
    description:
      'Após meses de protestos pacíficos e a recusa de Gorbachev em enviar tanques para intervir no Leste, a Alemanha Oriental anuncia a liberação de viagens. Na noite de 9 de novembro de 1989, dezenas de milhares de cidadãos sobem no Muro de Berlim e iniciam sua demolição com marretas e picaretas.',
    impact:
      '🎯 Impacto: O acontecimento mais emblemático do século XX, desintegrando em semanas os governos comunistas da Polônia, Hungria, Romênia e Tchecoslováquia.',
  },
  {
    year: '1990',
    title: 'A Reunificação da Alemanha (3 de Outubro)',
    description:
      'Menos de 11 meses após a queda do muro, a República Democrática Alemã (RDA) é formalmente extinta e seus territórios são absorvidos pela República Federal da Alemanha (RFA), unificando a nação alemã sob um modelo democrático e capitalista.',
    impact:
      '🎯 Impacto: Restauração da soberania alemã no coração da Europa e alteração definitiva do mapa geopolítico continental.',
  },
  {
    year: '1991',
    title: 'Dissolução Formal da URSS e Fim Oficial da Guerra Fria (25 de Dezembro)',
    description:
      'Após a extinção do Pacto de Varsóvia e uma tentativa fracassada de golpe por conservadores da linha-dura do PCUS em agosto, os presidentes da Rússia (Boris Yeltsin), Ucrânia e Bielorrússia assinam o Tratado de Belavezha. Em 25 de dezembro de 1991, Gorbachev renuncia em cadeia nacional e a bandeira soviética é arriada do Kremlin.',
    impact:
      '🎯 Impacto: A URSS fragmenta-se em 15 repúblicas soberanas independentes; encerra-se formalmente o período da Guerra Fria e a ordem mundial bipolar.',
  },
];

// 5. ROTEIRO DIDÁTICO DAS 25 SEÇÕES DETALHADAS
export const GUIDE_25_SECTIONS: GuideSectionItem[] = [
  {
    number: '01',
    title: 'Capa Oficial & Identificação Acadêmica',
    category: 'Capa',
    lead: 'Abertura oficial do material didático estruturado para o 9º Ano do Ensino Fundamental II sob a regência do Prof. Anderson Firmo na Escola Parque Ipiranga.',
    bulletPoints: [
      'Bem-vindo ao Capítulo A5 de História do 9º Ano. Neste material didático investigaremos a Guerra Fria (1945–1991), o confronto mais longo e perigoso da história contemporânea.',
      'Analise com rigor as fontes primárias, as estatísticas nucleares e os esquemas visuais para compreender como a disputa ideológica entre capitalismo e socialismo moldou a geopolítica do mundo em que vivemos.',
    ],
    quote: {
      text: 'A história da humanidade não é feita apenas de datas e reis, mas das mãos anônimas que ergueram as cidades e giraram os motores do mundo.',
      author: 'Prof. Anderson Firmo',
      source: 'Orientação Didática - Escola Parque Ipiranga',
    },
    keyConcepts: 'Tema: A Guerra Fria e a Bipolarização Mundial • Subtema: O mundo dividido em blocos ideológicos e a iminência do conflito nuclear • Metodologia: Cronologia contínua, matrizes conceituais e analogias pedagógicas.',
  },
  {
    number: '02',
    title: 'O Cenário Pós-1945: Yalta, Potsdam e a Partilha da Europa',
    category: 'Contexto',
    lead: 'O colapso da aliança antifascista da Segunda Guerra Mundial e o nascimento da ordem bipolar.',
    bulletPoints: [
      'Em 1945, com a derrota da Alemanha nazista e do Japão imperial, os antigos aliados (EUA, URSS e Reino Unido) reuniram-se nas Conferências de Yalta (Crimeia) e Potsdam (Alemanha) para reorganizar as fronteiras do planeta.',
      'A Alemanha e sua capital, Berlim, foram fatiadas em quatro zonas de ocupação militar (americana, britânica, francesa e soviética). Enquanto os EUA emergiam intocados territorialmente e detentores exclusivos da bomba atômica, a URSS ostentava o maior exército terrestre do mundo (o Exército Vermelho) ocupando todo o Leste Europeu.',
    ],
    quote: {
      text: 'Agora tenho o poder de destruir cidades inteiras em um único instante.',
      author: 'Harry S. Truman',
      source: 'Diário Pessoal após o teste Trinity (1945)',
    },
    keyConcepts: 'Partilha em 4 zonas • Conferências de Yalta e Potsdam • Monopólio atômico inicial dos EUA • Exército Vermelho ocupando o Leste Europeu.',
  },
  {
    number: '03',
    title: 'Painel de Indicadores Históricos da Guerra Fria',
    category: 'Estatísticas',
    lead: 'As quatro métricas fundamentais que revelam a escala planetária e o custo humano da bipolaridade.',
    bulletPoints: [
      'Para dimensionar o impacto da Guerra Fria no 9º Ano, é imprescindível examinar a frieza dos números reais acumulados entre 1945 e 1991.',
      'A corrida armamentista nuclear consumiu trilhões de dólares enquanto centenas de milhões de cidadãos viviam sob censura ou sob a ameaça cotidiana de alarmes nucleares.',
    ],
    keyConcepts: '70.000 Ogivas Nucleares • 46 Anos de Conflito Global • 28 Anos do Muro de Berlim • 13 Dias em DEFCON 2.',
    reflectionQuestion: 'Como você imagina que seria sua rotina escolar se tivesse que participar semanalmente de simulações de abrigo contra bombardeios nucleares como as crianças dos anos 1950 e 1960 faziam?',
  },
  {
    number: '04',
    title: 'A Cortina de Ferro e a Ruptura Diplomática (1946–1947)',
    category: 'Contexto',
    lead: 'A denúncia de Churchill em Fulton e o início da retórica de isolamento geopolítico.',
    bulletPoints: [
      'Em março de 1946, em visita aos Estados Unidos, Winston Churchill utilizou a metáfora da "Cortina de Ferro" para descrever a fronteira impenetrável que a URSS estava erguendo para isolar a Polônia, Romênia, Bulgária, Hungria e Alemanha Oriental do restante do continente.',
      'A metáfora tornou-se o conceito central para definir a separação física, econômica e ideológica entre as democracias liberais do Ocidente e as repúblicas populares do Leste.',
    ],
    quote: {
      text: 'De Stettin, no Báltico, a Trieste, no Adriático, uma cortina de ferro desceu sobre o continente.',
      author: 'Winston Churchill',
      source: 'Discurso em Fulton, Missouri (1946)',
    },
    keyConcepts: 'Cortina de Ferro • Isolamento da Europa Oriental • Ruptura diplomática • Satelitização do Leste.',
  },
  {
    number: '05',
    title: 'Doutrina Truman e Plano Marshall vs Doutrina Jdanov',
    category: 'Teorias',
    lead: 'As estratégias de contenção financeira do capitalismo versus o fechamento ideológico do Kominform.',
    bulletPoints: [
      'Em março de 1947, o presidente Harry Truman discursou ao Congresso solicitando ajuda militar para a Grécia e Turquia, formalizando a Doutrina Truman: a missão dos EUA de conter o comunismo em qualquer parte do planeta.',
      'Em junho de 1947, foi lançado o Plano Marshall, um gigantesco pacote de ajuda financeira (mais de US$ 13 bilhões) que recuperou a infraestrutura ocidental e impediu o avanço eleitoral de partidos socialistas na França e Itália.',
      'A resposta soviética foi a Doutrina Jdanov e a criação do Kominform em setembro de 1947, unificando a linha política de todos os partidos comunistas sob a cartilha de Moscou.',
    ],
    keyConcepts: 'Doutrina Truman (Contenção) • Plano Marshall (Ajuda Financeira) • Doutrina Jdanov • Kominform.',
  },
  {
    number: '06',
    title: 'O Bloqueio de Berlim e a Ponte Aérea (1948–1949)',
    category: 'Conflitos',
    lead: 'A primeira grande prova de força no coração da Alemanha e a divisão em dois Estados.',
    bulletPoints: [
      'Em junho de 1948, quando os aliados ocidentais unificaram suas zonas e criaram a moeda Deutsche Mark, Stalin ordenou o corte total de todas as rodovias, ferrovias e canais que abasteciam os 2,2 milhões de habitantes de Berlim Ocidental.',
      'Em vez de recuar ou entrar em combate terrestre, os EUA e o Reino Unido organizaram a "Operação Vittles": aviões decolavam a cada 90 segundos pousando nos aeroportos de Tempelhof e Gatow, entregando mais de 2,3 milhões de toneladas de suprimentos ao longo de 11 meses.',
      'Derrotado logisticamente, Stalin suspendeu o bloqueio em maio de 1949. O episódio selou a partilha oficial da Alemanha em RFA (Ocidental) e RDA (Oriental).',
    ],
    keyConcepts: 'Bloqueio terrestre de Stalin • Ponte aérea com 278 mil voos • Criação da RFA (Bonn) e RDA (Berlim Oriental).',
  },
  {
    number: '07',
    title: 'A Formação dos Blocos Militares: OTAN (1949) e Pacto de Varsóvia (1955)',
    category: 'Teorias',
    lead: 'A institucionalização militar da bipolaridade e as cláusulas de defesa mútua coletiva.',
    bulletPoints: [
      'Em abril de 1949, 12 países ocidentais liderados pelos EUA fundaram a OTAN (Organização do Tratado do Atlântico Norte). O ponto nevrálgico era o Artigo 5º: qualquer agressão armada contra um membro na Europa ou América do Norte seria considerada um ataque contra todos.',
      'Em 1955, logo após a Alemanha Ocidental ingressar na OTAN, a União Soviética reuniu 7 nações socialistas (Albânia, Bulgária, Tchecoslováquia, Hungria, Polônia, Romênia e RDA) e assinou o Pacto de Varsóvia, estabelecendo um comando militar centralizado sob generais soviéticos.',
    ],
    keyConcepts: 'OTAN e o Artigo 5º • Pacto de Varsóvia • Reavaliação da segurança coletiva • Remilitarização da Alemanha.',
  },
  {
    number: '08',
    title: 'A Quebra do Monopólio Atômico e a Revolução Chinesa (1949)',
    category: 'Contexto',
    lead: 'O ano crucial em que a URSS detonou sua primeira ogiva e a Ásia tornou-se comunista.',
    bulletPoints: [
      'Em 29 de agosto de 1949, a URSS realizou seu primeiro teste nuclear bem-sucedido (a bomba RDS-1 / "Primeiro Raio") no Cazaquistão, auxiliada por sua rede de espionagem infiltrada no Projeto Manhattan. O monopólio atômico dos EUA durou apenas 4 anos.',
      'Em 1º de outubro de 1949, após derrotar os nacionalistas do Kuomintang, Mao Tsé-Tung proclamou a República Popular da China na Praça da Paz Celestial em Pequim, aliando o país mais populoso do mundo ao bloco socialista.',
    ],
    keyConcepts: 'Bomba soviética RDS-1 • Quebra do monopólio atômico • Vitória de Mao Tsé-Tung na China • Expansão comunista na Ásia.',
  },
  {
    number: '09',
    title: 'Analogia Obrigatória 1: O Grande Xadrez Bipolar',
    category: 'Analogias',
    lead: 'O conflito global sem contato físico direto entre os líderes supremos.',
    bulletPoints: [
      'Para compreender a essência da Guerra Fria no 9º Ano, visualize duas superpotências sentadas diante de um imenso tabuleiro de xadrez mundial.',
      'Os dois reis (Washington e Moscou) sabem que se colidirem de frente a partida é cancelada e a mesa queima. Por isso, movem peões (nações do Terceiro Mundo) e cavalos (espiões) nas bordas do tabuleiro.',
    ],
    quote: {
      text: 'A diplomacia da Guerra Fria é a arte de levar o conflito até a beira do abismo sem nunca pular nele.',
      author: 'John Foster Dulles',
      source: 'Secretário de Estado dos EUA (1956)',
    },
    keyConcepts: 'Disputa indireta • Guerras por procuração • Alianças defensivas • Espionagem como instrumento de pressão.',
  },
  {
    number: '10',
    title: 'A Guerra da Coreia: O Primeiro Conflito Indireto (1950–1953)',
    category: 'Conflitos',
    lead: 'O choque armado no Paralelo 38º e a confirmação prática da guerra por procuração.',
    bulletPoints: [
      'Em junho de 1950, tropas da Coreia do Norte comunista (lideradas por Kim Il-sung e com blindados soviéticos) cruzaram a linha divisória e invadiram a Coreia do Sul.',
      'Os EUA lideraram uma coalizão militar autorizada pela ONU para rechaçar a invasão. Quando as forças ocidentais aproximaram-se do Rio Yalu na fronteira chinesa, a China de Mao lançou centenas de milhares de soldados no combate.',
      'Após três anos de violentos bombardeios e 3 milhões de baixas civis e militares, o conflito terminou exatamente onde começou: no Armistício de Panmunjom (1953), congelando a fronteira no Paralelo 38º até hoje.',
    ],
    keyConcepts: 'Invasão no Paralelo 38º • Intervenção da ONU/EUA • Apoio da URSS e da China • Armistício de Panmunjom.',
  },
  {
    number: '11',
    title: 'A Morte de Stalin, Desestalinização e a Coexistência Pacífica (1953–1956)',
    category: 'Contexto',
    lead: 'O fim da era stalinista, o Relatório Secreto de Kruschev e a nova abordagem diplomática.',
    bulletPoints: [
      'A morte de Josef Stalin em março de 1953 alterou a dinâmica interna da União Soviética. Nikita Kruschev assumiu a Secretaria-Geral do PCUS e promoveu uma reestruturação profunda.',
      'Em fevereiro de 1956, no histórico XX Congresso do Partido Comunista, Kruschev apresentou o "Relatório Secreto", denunciando as purgas violentas, as execuções ilegais e o culto à personalidade construído por Stalin.',
      'Kruschev propôs ao Ocidente a tese da "Coexistência Pacífica": a ideia de que capitalismo e socialismo deveriam competir através de resultados econômicos, avanços científicos e bem-estar social, evitando guerras mundiais.',
    ],
    keyConcepts: 'Morte de Stalin (1953) • Relatório Secreto de Kruschev (1956) • Desestalinização • Tese da Coexistência Pacífica.',
  },
  {
    number: '12',
    title: 'A Conferência de Bandung e os Países Não-Alinhados (1955)',
    category: 'Contexto',
    lead: 'A recusa do Terceiro Mundo em submeter-se à tutela das duas superpotências.',
    bulletPoints: [
      'Em abril de 1955, representantes de 29 nações recém-independentes da Ásia e da África reuniram-se em Bandung, na Indonésia, liderados por Sukarno (Indonésia), Nehru (Índia), Nasser (Egito) e Tito (Iugoslávia).',
      'A conferência condenou o colonialismo, o racismo e a política de blocos militares, criando o conceito de "Terceiro Mundo" e lançando as bases do Movimento dos Países Não-Alinhados: nações que buscavam autonomia soberana sem se curvar nem a Washington nem a Moscou.',
    ],
    keyConcepts: 'Conferência de Bandung (1955) • Movimento dos Não-Alinhados • Surgimento do Terceiro Mundo • Anticolonialismo.',
  },
  {
    number: '13',
    title: 'O Início da Corrida Espacial: Sputnik e Laika (1957)',
    category: 'Espaço',
    lead: 'A conquista do cosmos como a maior vitrine de superioridade científica e militar da história.',
    bulletPoints: [
      'Em 4 de outubro de 1957, os cientistas soviéticos liderados por Sergei Korolev lançaram o Sputnik 1, a primeira esfera metálica com transmissores de rádio a orbitar o planeta Terra.',
      'Um mês depois, a URSS enviou a cadela Laika a bordo do Sputnik 2. O feito causou a "Crise do Sputnik" nos Estados Unidos: o medo público e militar de que foguetes capazes de colocar satélites em órbita pudessem despejar ogivas nucleares sobre qualquer cidade americana em 30 minutos.',
      'Em reação imediata, o presidente Eisenhower assinou a criação da NASA em 1958 e quadruplicou os investimentos federais em matemática, física e engenharia.',
    ],
    keyConcepts: 'Sputnik 1 (1º Satélite) • Cadela Laika (Sputnik 2) • Crise do Sputnik nos EUA • Fundação da NASA (1958).',
  },
  {
    number: '14',
    title: 'A Revolução Cubana e o Socialismo nas Américas (1959)',
    category: 'Conflitos',
    lead: 'A derrubada de Batista e o estabelecimento de uma base socialista a 140 km da Flórida.',
    bulletPoints: [
      'Em 1º de janeiro de 1959, os guerrilheiros do Movimento 26 de Julho, liderados por Fidel Castro e Ernesto Che Guevara, expulsaram o ditador Fulgêncio Batista de Cuba após anos de luta na Sierra Maestra.',
      'O novo governo realizou a reforma agrária e nacionalizou refinarias, usinas de açúcar e bancos americanos. Diante das sanções e do corte de importação de açúcar pelos EUA, Cuba firmou acordos comerciais com a URSS e declarou abertamente seu alinhamento marxista-leninista.',
    ],
    keyConcepts: 'Revolução Cubana de 1959 • Fidel Castro e Che Guevara • Nacionalizações • Alinhamento com a URSS nas Américas.',
  },
  {
    number: '15',
    title: 'O Muro de Berlim e a Divisão de Concreto (1961)',
    category: 'Contexto',
    lead: 'A construção da barreira física de 155 km que estancou a fuga de cérebros da Alemanha Oriental.',
    bulletPoints: [
      'Entre 1949 e 1961, mais de 2,7 milhões de cidadãos da Alemanha Oriental (a maioria jovens, engenheiros, médicos e professores) fugiram para a Alemanha Ocidental aproveitando a fronteira aberta em Berlim.',
      'Na madrugada de 13 de agosto de 1961, o líder da RDA Walter Ulbricht ordenou o fechamento da fronteira com arame farpado e tropas. Em poucos dias, o arame foi substituído por muros de concreto de 3,60 metros de altura com 155 km de extensão.',
      'Surgia a temida "Faixa da Morte" (Todesstreifen) com valas antitanque, holofotes, cerca eletrificada e ordens explícitas para os guardas atirarem para matar em qualquer tentativa de fuga (mais de 140 pessoas morreram no local).',
    ],
    keyConcepts: 'Fuga de cérebros para Berlim Ocidental • Construção em 13 de agosto de 1961 • A Faixa da Morte • Schießbefehl (Ordem de atirar).',
  },
  {
    number: '16',
    title: 'Analogia Obrigatória 2: O Carrinho de Choque Nuclear & Doutrina MAD',
    category: 'Analogias',
    lead: 'A garantia mútua de autodestruição que gerou a paz armada entre as superpotências.',
    bulletPoints: [
      'Pense em dois motoristas trancados em uma pista com carrinhos cheios de pólvora. Se um deles tentar bater no outro, ambos voarão pelos ares.',
      'A doutrina MAD (Destruição Mútua Assegurada) transformou o arsenal atômico em uma arma de dissuasão: o objetivo de ter 30.000 ogivas não era usá-las, mas garantir que o adversário soubesse que seria completamente destruído se disparasse primeiro.',
    ],
    quote: {
      text: 'Uma guerra nuclear não pode ser vencida e nunca deve ser travada.',
      author: 'Declaração Conjunta Reagan-Gorbachev',
      source: 'Cúpula de Genebra (1985)',
    },
    keyConcepts: 'Doutrina MAD • Dissuasão nuclear • Equilíbrio do terror • Sobrevivência mútua.',
  },
  {
    number: '17',
    title: 'A Crise dos Mísseis de Cuba: Os 13 Dias em DEFCON 2 (1962)',
    category: 'Conflitos',
    lead: 'O momento em que a humanidade esteve mais próxima da aniquilação nuclear total.',
    bulletPoints: [
      'Em 14 de outubro de 1962, aviões espiões americanos U-2 fotografaram rampas de lançamento de mísseis nucleares soviéticos de médio alcance sendo construídas em San Cristóbal, Cuba.',
      'Kennedy recusou o conselho de generais para bombardear a ilha e decretou uma "quarentena naval" (bloqueio marítimo). As forças armadas dos EUA foram colocadas em DEFCON 2 pela única vez na história.',
      'Durante 13 dias de agonia global, navios soviéticos com ogivas rumaram em direção à linha de bloqueio americano. No clímax da crise, no submarino soviético B-59 cercado por contratorpedeiros americanos, o oficial Vasili Arkhipov recusou autorizar o disparo de um torpedo nuclear.',
      'O acordo final: Kruschev retirou os mísseis de Cuba; Kennedy comprometeu-se publicamente a não invadir Cuba e removeu secretamente mísseis Jupiter americanos instalados na Turquia.',
    ],
    keyConcepts: 'Aviões U-2 e fotos secretas • Quarentena naval de Kennedy • DEFCON 2 • Heroísmo de Vasili Arkhipov • Criação do Telefone Vermelho.',
  },
  {
    number: '18',
    title: 'A Guerra do Vietnã: Guerra na Selva e Impacto Cultural (1964–1975)',
    category: 'Conflitos',
    lead: 'A guerra televisionada que traumatizou a sociedade americana e unificou o Vietnã.',
    bulletPoints: [
      'Após o Incidente do Golfo de Tonquim em 1964, o presidente Lyndon Johnson ampliou massivamente a presença militar americana no Vietnã para impedir o "Efeito Dominó" do comunismo no Sudeste Asiático.',
      'As tropas americanas enfrentaram uma guerra de guerrilha brutal conduzida pelos vietcongs na selva e a rede de túneis de Cu Chi. O uso de bombardeios massivos, desfolhantes químicos (Agente Laranja) e napalm provocou revolta popular mundial.',
      'A Ofensiva do Tet em 1968 provou que os EUA não poderiam vencer a guerra. Em 1973, os EUA assinaram os Acordos de Paz de Paris e retiraram suas tropas. Em abril de 1975, a tomada de Saigon pelo Vietnã do Norte concluiu a unificação do país.',
    ],
    keyConcepts: 'Teoria do Dominó • Túneis vietcongs e guerra de guerrilha • Agente Laranja e Napalm • Queda de Saigon (1975).',
  },
  {
    number: '19',
    title: 'A Corrida à Lua: Apollo 11 e a Vitória Simbólica dos EUA (1969)',
    category: 'Espaço',
    lead: 'O ápice da competição tecnológica e a consagração do programa lunar americano.',
    bulletPoints: [
      'Em 1961, o presidente John F. Kennedy havia prometido que os EUA colocariam um homem na Lua antes do fim da década. O programa Apollo consumiu mais de 400.000 trabalhadores e 4% de todo o orçamento federal americano.',
      'Em 20 de julho de 1969, a bordo do módulo lunar Eagle da Apollo 11, Neil Armstrong desceu a escada e pisou no solo lunar, acompanhado por Buzz Aldrin, enquanto Michael Collins mantinha o módulo de comando em órbita.',
      'O pouso na Lua foi transmitido ao vivo para 600 milhões de pessoas, marcando a vitória definitiva dos Estados Unidos na etapa de maior visibilidade da Corrida Espacial.',
    ],
    quote: {
      text: 'Um pequeno passo para o homem, um salto gigante para a humanidade.',
      author: 'Neil Armstrong',
      source: 'Superfície Lunar (20 de julho de 1969)',
    },
    keyConcepts: 'Programa Apollo • Missão Apollo 11 • Neil Armstrong e Buzz Aldrin • Vitória simbólica dos EUA no espaço.',
  },
  {
    number: '20',
    title: 'A Détente e os Tratados SALT I (1970–1979)',
    category: 'Teorias',
    lead: 'O período de alívio diplomático e a contenção formal dos arsenais balísticos.',
    bulletPoints: [
      'Na década de 1970, liderados por Richard Nixon e Henry Kissinger nos EUA e Leonid Brejnev na URSS, os governos adotaram a política de Détente (distensão).',
      'Em 1972, Nixon realizou uma visita histórica a Pequim e a Moscou, assinando os acordos SALT I, que congelavam o número de lançadores de mísseis balísticos intercontinentais.',
      'Em 1975, a colaboração atingiu o ápice com o aperto de mãos no espaço entre a nave americana Apollo e a soviética Soyuz, além da assinatura dos Acordos de Helsinque.',
    ],
    keyConcepts: 'Política de Détente • Diplomacia Triangular de Nixon • Tratados SALT I • Missão conjunta Apollo-Soyuz (1975).',
  },
  {
    number: '21',
    title: 'A Invasão Soviética do Afeganistão e a Segunda Guerra Fria (1979)',
    category: 'Conflitos',
    lead: 'O atoleiro militar de Moscou e o fim repentino da distensão diplomática.',
    bulletPoints: [
      'Em dezembro de 1979, o exército soviético invadiu o Afeganistão para impedir a derrubada de um regime comunista aliado por facções islâmicas rebeldes.',
      'A invasão gerou condenação internacional unânime. Os EUA, sob Jimmy Carter e depois Ronald Reagan, forneceram bilhões em armas e treinamento aos rebeldes mujahidin através da Operação Cyclone da CIA.',
      'O conflito durou 10 anos, custou a vida de 15.000 soldados soviéticos e centenas de milhares de afegãos, drenou a economia da URSS e sepultou de vez a Détente.',
    ],
    keyConcepts: 'Invasão em dezembro de 1979 • O "Vietnã da URSS" • Apoio da CIA aos mujahidin • Boicote às Olimpíadas de Moscou (1980).',
  },
  {
    number: '22',
    title: 'Ronald Reagan, Guerra nas Estrelas e a Pressão Tecnológica (1983)',
    category: 'Teorias',
    lead: 'A escalada armamentista dos anos 80 e a impossibilidade econômica soviética de competir.',
    bulletPoints: [
      'Ronald Reagan assumiu a presidência dos EUA em 1981 com uma postura agressiva contra Moscou, batizando a URSS de "Império do Mal" e aumentando o orçamento militar para níveis recordes.',
      'Em 1983, Reagan anunciou o programa SDI (Iniciativa de Defesa Estratégica / Star Wars), visando construir uma rede de satélites com raios laser capazes de interceptar ogivas soviéticas no espaço.',
      'Embora o SDI fosse tecnologicamente inviável na época, a perspectiva de uma nova corrida militar computorizada apavorou a liderança soviética, que já não tinha recursos financeiros para investir em supercomputadores.',
    ],
    keyConcepts: 'Governo Ronald Reagan • Doutrina do "Império do Mal" • SDI / Star Wars • Esgotamento do orçamento soviético.',
  },
  {
    number: '23',
    title: 'Gorbachev: Glasnost, Perestroika e o Desastre de Chernobyl (1985–1987)',
    category: 'Desfecho',
    lead: 'A tentativa corajosa de salvar o socialismo que acabou acelerando o desmoronamento da URSS.',
    bulletPoints: [
      'Em 1985, o jovem e reformista Mikhail Gorbachev assumiu o comando da União Soviética, encontrando um país estagnado, com corrupção generalizada, escassez de alimentos e filas nos mercados.',
      'Gorbachev lançou dois programas históricos: a Perestroika (Reestruturação econômica, permitindo pequenas empresas privadas e descentralização) e a Glasnost (Transparência política, permitindo liberdade de expressão e fim da censura).',
      'Em abril de 1986, o acidente no reator nuclear de Chernobyl (Ucrânia) evidenciou as mentiras da burocracia estatal e forçou a aceleração da transparência. Em 1987, Gorbachev e Reagan assinaram o Tratado INF, destruindo milhares de mísseis nucleares.',
    ],
    keyConcepts: 'Mikhail Gorbachev (1985) • Glasnost (Transparência) • Perestroika (Reestruturação) • Chernobyl (1986) • Tratado INF (1987).',
  },
  {
    number: '24',
    title: 'A Queda do Muro de Berlim (1989) e o Fim da URSS (1991)',
    category: 'Desfecho',
    lead: 'O clímax da liberdade no Leste Europeu e a dissolução pacífica da superpotência soviética.',
    bulletPoints: [
      'Em 1989, Gorbachev anunciou a revogação da Doutrina Brejnev: a URSS não usaria mais o exército para manter governos comunistas no Leste. Uma onda revolucionária pacífica varreu a Polônia, Hungria e Tchecoslováquia.',
      'Na noite de 9 de novembro de 1989, o porta-voz da Alemanha Oriental Günter Schabowski declarou por engano que as fronteiras estavam abertas imediatamente. Centenas de milhares de berlinenses correram para o Muro e derrubaram seus blocos com ferramentas manuais.',
      'A Alemanha foi reunificada em outubro de 1990. Em 25 de dezembro de 1991, após a renúncia de Gorbachev e a declaração de independência das 15 repúblicas, a bandeira vermelha da foice e martelo foi arriada do Kremlin, pondo fim oficial à Guerra Fria.',
    ],
    keyConcepts: 'Queda do Muro de Berlim (9 nov 1989) • Reunificação Alemã (1990) • Renúncia de Gorbachev • Dissolução da URSS em 25 dez 1991.',
  },
  {
    number: '25',
    title: 'Síntese de Aprendizagem, Glossário & Rodapé Oficial',
    category: 'Atividades',
    lead: 'Resumo executivo do capítulo, glossário de termos históricos e chancela institucional da Escola Parque Ipiranga.',
    bulletPoints: [
      'Chegamos ao fim da nossa jornada pela Guerra Fria (1945–1991). Vimos como o medo da aniquilação nuclear forçou o mundo a viver sob o equilíbrio do terror e como a busca por liberdade derrubou as barreiras totalitárias.',
      'Consulte o glossário de apoio sempre que precisar revisar termos fundamentais para as provas do 9º Ano e vestibulares. Bom estudo e até o próximo capítulo!',
    ],
    quote: {
      text: 'Conhecer a Guerra Fria é compreender como o equilíbrio entre o medo e a diplomacia evitou o fim do nosso mundo.',
      author: 'Prof. Anderson Firmo',
      source: 'Escola Parque Ipiranga - 2026',
    },
    keyConcepts: 'Síntese geral • Domínio dos conceitos da BNCC • Valorização da paz e dos direitos humanos.',
  },
];

// 6. GLOSSÁRIO DE CONCEITOS HISTÓRICOS
export const COLD_WAR_GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Bipolaridade',
    definition: 'Ordem geopolítica mundial dominada por dois polos de poder antagônicos e hegemônicos (EUA e URSS) entre 1945 e 1991.',
  },
  {
    term: 'Cortina de Ferro',
    definition: 'Expressão celebrizada por Winston Churchill para designar a barreira política, ideológica e militar que dividiu a Europa Ocidental capitalista do Leste Europeu socialista.',
  },
  {
    term: 'Doutrina Truman',
    definition: 'Política externa dos EUA anunciada em 1947 com a meta de conter a expansão do comunismo no mundo, fornecendo apoio financeiro e militar a regimes aliados.',
  },
  {
    term: 'Plano Marshall',
    definition: 'Plano econômico americano de 1947 que injetou mais de 13 bilhões de dólares para reconstruir as economias arruinadas dos países da Europa Ocidental.',
  },
  {
    term: 'COMECON',
    definition: 'Conselho de Assistência Econômica Mútua criado pela URSS em 1949 para integrar o comércio e a produção industrial dos países do bloco socialista.',
  },
  {
    term: 'OTAN (Organização do Tratado do Atlântico Norte)',
    definition: 'Aliança militar ocidental criada em 1949 baseada no princípio de defesa coletiva mútua (Artigo 5º) contra qualquer agressão externa.',
  },
  {
    term: 'Pacto de Varsóvia',
    definition: 'Tratado militar de defesa conjunta firmado em 1955 pela União Soviética e sete países socialistas do Leste Europeu em resposta à entrada da RFA na OTAN.',
  },
  {
    term: 'Guerra por Procuração (Proxy War)',
    definition: 'Conflito armado regional em que duas superpotências apoiam e armam lados opostos sem combaterem diretamente entre si (ex: Guerras da Coreia e do Vietnã).',
  },
  {
    term: 'Doutrina MAD (Destruição Mútua Assegurada)',
    definition: 'Conceito militar que postula que o uso de armas nucleares por uma das potências resultaria na destruição aniquiladora total de ambos os lados.',
  },
  {
    term: 'Coexistência Pacífica',
    definition: 'Diretriz diplomática proposta por Nikita Kruschev nos anos 1950 pregando que capitalismo e socialismo deveriam competir de forma econômica e tecnológica sem guerra direta.',
  },
  {
    term: 'Telefone Vermelho (Linha Vermelha)',
    definition: 'Canal de teletipo e comunicação direta criptografada instalado entre a Casa Branca e o Kremlin após a Crise dos Mísseis de 1962 para prevenir guerras acidentais.',
  },
  {
    term: 'Glasnost (Transparência)',
    definition: 'Política de abertura política, liberdade de expressão e fim da censura na URSS implementada por Mikhail Gorbachev a partir de 1985.',
  },
  {
    term: 'Perestroika (Reestruturação)',
    definition: 'Programa de reformas econômicas de Gorbachev que introduziu descentralização administrativa, combate à corrupção e elementos de livre iniciativa na URSS.',
  },
  {
    term: 'Schießbefehl (Ordem de Fogo)',
    definition: 'Instrução militar formal das forças da Alemanha Oriental para atirar sumariamente contra qualquer cidadão que tentasse transpor ilegalmente a fronteira ou o Muro de Berlim.',
  },
];

// 7. QUESTÕES DE FIXAÇÃO E SIMULADO OFICIAL (BNCC EF09HI01 a EF09HI04)
export const BNCC_QUESTIONS: BNCCQuestion[] = [
  {
    questionNumber: 1,
    prompt:
      'Por que o confronto geopolítico entre os Estados Unidos e a União Soviética (1945–1991) foi denominado historicamente como "Guerra Fria"?',
    options: [
      {
        letter: 'A',
        text: 'Porque os combates armados principais ocorreram exclusivamente nas regiões polares do Ártico e da Antártida.',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'Porque nunca houve um confronto militar direto e aberto entre os exércitos de EUA e URSS devido ao risco da Destruição Mútua Assegurada (MAD) pelo arsenal nuclear.',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'Porque as duas superpotências assinaram a paz definitiva em 1945 e desmantelaram completamente seus exércitos.',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'Porque o conflito se limitou a competições esportivas nas Olimpíadas de Inverno sem qualquer disputa ideológica.',
        isCorrect: false,
      },
    ],
    justification:
      'A posse mútua de arsenais atômicos e termonucleares criou o estado de "Paz Armada": atacar diretamente o rival significaria suicídio nacional pela resposta nuclear inevitável.',
    bnccSkill: 'EF09HI01 - Compreender as origens, os conceitos e as dinâmicas de poder da Guerra Fria na ordem internacional.',
  },
  {
    questionNumber: 2,
    prompt:
      'Na analogia pedagógica obrigatória do "Grande Xadrez Bipolar", como se explica a ausência de choque direto entre os "Reis" (EUA e URSS)?',
    options: [
      {
        letter: 'A',
        text: 'Os reis nunca lutavam porque eram aliados secretos que partilhavam o controle do comércio de petróleo mundial.',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'As superpotências evitavam colidir suas forças regulares diretamente e disputavam influência movimentando "peões" (países periféricos) através de guerras por procuração e espionagem.',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'A ONU proibiu por lei a fabricação de aviões e tanques de guerra após o ano de 1945.',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'Nenhuma das superpotências possuía tecnologia para transportar tropas para fora de seus próprios continentes.',
        isCorrect: false,
      },
    ],
    justification:
      'A metáfora do xadrez ilustra perfeitamente como os dois centros hegemônicos travaram a disputa por meio de satélites geopolíticos, alianças militares e guerras regionais (Coreia, Vietnã, Afeganistão).',
    bnccSkill: 'EF09HI02 - Caracterizar os blocos ideológicos e a lógica das guerras por procuração (proxy wars) na Ásia, África e América Latina.',
  },
  {
    questionNumber: 3,
    prompt:
      'Qual foi o principal fator que levou à construção do Muro de Berlim pelo governo da Alemanha Oriental (RDA) em agosto de 1961?',
    options: [
      {
        letter: 'A',
        text: 'Proteger a população de Berlim Oriental contra uma epidemia de peste bubônica que assolava a Europa.',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'Estancar a fuga em massa de mão de obra qualificada e jovens (cerca de 2,7 milhões de pessoas) que emigravam de Berlim Oriental para o lado capitalista.',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'Delimitar a área de pouso para as naves espaciais da missão soviética Vostok de Yuri Gagarin.',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'Criar uma muralha militar para invadir a França e a Grã-Bretanha durante o inverno de 1961.',
        isCorrect: false,
      },
    ],
    justification:
      'A emigração contínua e a "fuga de cérebros" para o setor ocidental ameaçavam colapsar a economia e a imagem política da Alemanha Oriental socialista, motivando a construção da barreira física.',
    bnccSkill: 'EF09HI03 - Identificar os marcos da divisão europeia e o papel simbólico e material do Muro de Berlim durante a Guerra Fria.',
  },
  {
    questionNumber: 4,
    prompt:
      'Durante a Crise dos Mísseis em Cuba (outubro de 1962), qual foi o desfecho acordado entre os líderes John F. Kennedy e Nikita Kruschev para afastar o perigo nuclear?',
    options: [
      {
        letter: 'A',
        text: 'Os EUA bombardearam Havana e a URSS detonou uma bomba atômica sobre a cidade de Miami.',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'A URSS retirou as instalações de mísseis nucleares de Cuba em troca do compromisso público dos EUA de não invadirem a ilha e da retirada secreta de mísseis americanos da Turquia.',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'Cuba foi comprada pelos soviéticos e transformada na décima sexta república da URSS.',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'A ONU assumiu o controle militar total dos territórios de Cuba, dos EUA e da União Soviética.',
        isCorrect: false,
      },
    ],
    justification:
      'A solução diplomática negociada evitou o holocausto atômico mediante concessões mútuas e deu origem ao "Telefone Vermelho" para comunicação imediata entre as superpotências.',
    bnccSkill: 'EF09HI04 - Analisar as crises de alto risco bélico, a diplomacia nuclear e os mecanismos de resolução de conflitos internacionais.',
  },
  {
    questionNumber: 5,
    prompt:
      'Quais foram as duas diretrizes fundamentais lançadas por Mikhail Gorbachev a partir de 1985 que precipitaram o fim da União Soviética e da Guerra Fria?',
    options: [
      {
        letter: 'A',
        text: 'O Plano Marshall e a Doutrina Truman.',
        isCorrect: false,
      },
      {
        letter: 'B',
        text: 'A Glasnost (transparência política e liberdade de expressão) e a Perestroika (reestruturação econômica com descentralização).',
        isCorrect: true,
      },
      {
        letter: 'C',
        text: 'A Lei de Cercamento dos Campos e o Laissez-Faire liberal.',
        isCorrect: false,
      },
      {
        letter: 'D',
        text: 'O Pacto de Varsóvia e a construção do Muro de Berlim.',
        isCorrect: false,
      },
    ],
    justification:
      'A Glasnost e a Perestroika visavam modernizar o socialismo, mas abriram espaço para o questionamento público do regime, o nacionalismo nas repúblicas e o colapso pacífico do bloco em 1989–1991.',
    bnccSkill: 'EF09HI04 - Avaliar o impacto das reformas de Gorbachev, a queda do Muro de Berlim e o processo de dissolução da União Soviética.',
  },
];
