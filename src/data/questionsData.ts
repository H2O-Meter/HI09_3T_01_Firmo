import { ExerciseQuestion } from '../types';

export const curriculumQuestions: ExerciseQuestion[] = [
  // --- A5: A GUERRA FRIA ---
  {
    id: 1,
    chapterCode: 'A5',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) A respeito da Doutrina Truman (1947) e do Plano Marshall, analise a principal articulação estratégica adotada pelo governo dos Estados Unidos no início da Guerra Fria:',
    options: [
      { letter: 'A', text: 'Estabeleceu a invasão militar imediata dos países do Leste Europeu para desmantelar a presença soviética na Polônia e Hungria.' },
      { letter: 'B', text: 'Combinou a ideologia de contenção ao comunismo no discurso político com vultosa ajuda financeira para a reconstrução capitalista da Europa Ocidental.' },
      { letter: 'C', text: 'Propôs o desarmamento nuclear mútuo e a extinção de alianças militares na Europa sob mediação direta da ONU.' },
      { letter: 'D', text: 'Financiou a revolução socialista chinesa para isolar a União Soviética no cenário asiático.' }
    ],
    correctLetter: 'B',
    justification: 'A Doutrina Truman formulou a política de contenção da expansão comunista no plano político-militar, enquanto o Plano Marshall forneceu os bilhões de dólares necessários para recuperar as economias da Europa Ocidental, evitando que o caos social levasse à vitória de partidos comunistas locais.',
    bnccSkill: 'EF09HI28: Identificar e analisar os aspectos da Guerra Fria, seus principais conflitos e as tensões geopolíticas no mundo bipolar.'
  },
  {
    id: 2,
    chapterCode: 'A5',
    prompt: '(Escola Parque Ipiranga / 9º Ano) Em outubro de 1962, a Crise dos Mísseis colocou a humanidade na iminência de um conflito atômico terminal. Esse episódio histórico foi provocado:',
    options: [
      { letter: 'A', text: 'Pela detecção de bases secretas soviéticas de lançamento de mísseis nucleares na ilha de Cuba, a cerca de 150 km do litoral dos EUA.' },
      { letter: 'B', text: 'Pelo envio de tropas da OTAN para reconquistar a cidade de Berlim Oriental após a construção do muro.' },
      { letter: 'C', text: 'Pela invasão das tropas do general MacArthur na Coreia do Norte além do Paralelo 38°.' },
      { letter: 'D', text: 'Pela assinatura do Pacto de Varsóvia entre Cuba e a República Democrática Alemã.' }
    ],
    correctLetter: 'A',
    justification: 'Após a fracassada invasão da Baía dos Porcos patrocinada pela CIA, Fidel Castro aceitou a instalação de mísseis nucleares soviéticos em Cuba. Os aviões-espiões U-2 dos EUA fotografaram as bases, gerando o bloqueio naval imposto por John F. Kennedy.',
    bnccSkill: 'EF09HI28: Analisar a dinâmica do equilíbrio do terror e a proliferação nuclear na Guerra Fria.'
  },

  // --- A6: DITADURAS CIVIS-MILITARES NA AMÉRICA LATINA ---
  {
    id: 3,
    chapterCode: 'A6',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) A Operação Condor, formalizada na década de 1970 no Cone Sul, consistiu em:',
    options: [
      { letter: 'A', text: 'Um programa de ajuda econômica e empréstimos subsidiados entre as nações do Mercosul para combater a pobreza extrema.' },
      { letter: 'B', text: 'Uma rede clandestina transnacional de cooperação militar e de inteligência entre ditaduras sul-americanas para perseguir, sequestrar e assassinar opositores políticos além de suas fronteiras.' },
      { letter: 'C', text: 'Uma ofensiva guerrilheira de esquerda com apoio de Cuba para derrubar os generais do Paraguai e da Argentina.' },
      { letter: 'D', text: 'Um plano da ONU para garantir o asilo diplomático e a segurança de refugiados políticos nos consulados europeus.' }
    ],
    correctLetter: 'B',
    justification: 'A Operação Condor reuniu as polícias secretas e Forças Armadas de Chile, Argentina, Brasil, Uruguai, Paraguai e Bolívia, permitindo a eliminação de ativistas em qualquer país membro, com apoio logístico e tecnológico da CIA. Provas documentais foram confirmadas pelos "Arquivos do Terror" em 1992.',
    bnccSkill: 'EF09HI18: Descrever e analisar as experiências ditatoriais na América Latina, seus métodos de repressão e as violações aos direitos humanos.'
  },
  {
    id: 4,
    chapterCode: 'A6',
    prompt: '(Escola Parque Ipiranga / 9º Ano) As "Mães e Avós da Praça de Maio" tornaram-se um símbolo mundial de coragem e resistência civil na Argentina ao:',
    options: [
      { letter: 'A', text: 'Apoiarem a invasão das Ilhas Malvinas pelo general Leopoldo Galtieri em 1982.' },
      { letter: 'B', text: 'Desafiarem o terror do regime militar argentino marchando semanalmente em frente à Casa Rosada com lenços brancos, exigindo notícias dos filhos desaparecidos e netos sequestrados.' },
      { letter: 'C', text: 'Fundarem um partido político armado para combater nas montanhas dos Andes contra o general Videla.' },
      { letter: 'D', text: 'Articularem com os Chicago Boys a desregulamentação da economia argentina.' }
    ],
    correctLetter: 'B',
    justification: 'Iniciada em 1977 por um pequeno grupo de mães lideradas por Azucena Villaflor, a caminhada em círculos na Praça de Maio tornou visíveis os 30 mil desaparecidos da ditadura argentina e denunciou o roubo sistemático de bebês de presas políticas.',
    bnccSkill: 'EF09HI18: Identificar formas de resistência democrática e movimentos de defesa dos direitos humanos sob regimes autoritários.'
  },

  // --- B5: PERÍODO LIBERAL-DEMOCRÁTICO BRASILEIRO ---
  {
    id: 5,
    chapterCode: 'B5',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) Durante o mandato presidencial de Juscelino Kubitschek (1956-1961), o Plano de Metas sintetizado no lema "50 anos de progresso em 5 anos de governo" caracterizou-se por:',
    options: [
      { letter: 'A', text: 'Estatizar todas as indústrias de bens de consumo e proibir a entrada de capital multinacional estrangeiro.' },
      { letter: 'B', text: 'Concentrar investimentos estatais em energia e transportes, estimular multinacionais automobilísticas e construir a nova capital federal, Brasília, gerando endividamento e inflação futura.' },
      { letter: 'C', text: 'Priorizar a reforma agrária radical e o corte rigoroso de todos os gastos públicos com infraestrutura.' },
      { letter: 'D', text: 'Manter a capital federal no Rio de Janeiro e congelar os preços de todos os produtos do varejo.' }
    ],
    correctLetter: 'B',
    justification: 'JK aplicou o tripé econômico (Estado na infraestrutura pesada, multinacionais no setor automobilístico e eletrodomésticos, e empresariado nacional nos bens intermediários). A construção de Brasília integrou o interior, mas aumentou a dívida externa e a inflação.',
    bnccSkill: 'EF09HI17: Discutir os processos de modernização, industrialização e urbanização no Brasil entre 1945 e 1964.'
  },
  {
    id: 6,
    chapterCode: 'B5',
    prompt: '(Escola Parque Ipiranga / 9º Ano) O presidente João Goulart (Jango) propôs as chamadas "Reformas de Base" entre 1961 e 1964. Essas reformas tinham como principal objetivo:',
    options: [
      { letter: 'A', text: 'Restaurar a monarquia parlamentarista e abolir o salário mínimo no território nacional.' },
      { letter: 'B', text: 'Modernizar as estruturas arcaicas do país através da reforma agrária, tributária, educacional e eleitoral (voto dos analfabetos), combatendo a histórica desigualdade social.' },
      { letter: 'C', text: 'Adotar imediatamente o modelo soviético de coletivização forçada e fechar as igrejas católicas.' },
      { letter: 'D', text: 'Entregar a exploração exclusiva do petróleo da Petrobras para empresas privadas norte-americanas.' }
    ],
    correctLetter: 'B',
    justification: 'As Reformas de Base buscavam desconcentrar a renda e a posse da terra no Brasil. Setores conservadores, a elite agrária, a UDN e os militares instrumentalizaram o medo do comunismo para articular o golpe civil-militar de 1964.',
    bnccSkill: 'EF09HI19: Identificar as causas e o contexto político, social e econômico que culminaram no golpe civil-militar de 1964.'
  },

  // --- B6: O BRASIL APÓS 1964: A DITADURA MILITAR ---
  {
    id: 7,
    chapterCode: 'B6',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) O Ato Institucional nº 5 (AI-5), baixado pelo general Costa e Silva em 13 de dezembro de 1968, é considerado o mais autoritário da ditadura militar brasileira porque:',
    options: [
      { letter: 'A', text: 'Concedeu anistia ampla, geral e irrestrita a todos os presos políticos e convocou eleições presidenciais diretas.' },
      { letter: 'B', text: 'Concedeu plenos poderes ao presidente para fechar o Congresso, intervir nos estados, cassar mandatos, instituir a censura prévia e suspender o direito de Habeas Corpus para crimes políticos.' },
      { letter: 'C', text: 'Criou o pluripartidarismo irrestrito e autorizou greves operárias no ABC Paulista.' },
      { letter: 'D', text: 'Limitou o poder das Forças Armadas e subordinou o Ministério do Exército ao Supremo Tribunal Federal.' }
    ],
    correctLetter: 'B',
    justification: 'O AI-5 inaugurou os "Anos de Chumbo". Ao extinguir o habeas corpus e dar poderes absolutos ao Executivo sem controle judicial, permitiu que a repressão clandestina e a tortura no DOI-CODI e no DEOPS se tornassem práticas de Estado sistemáticas.',
    bnccSkill: 'EF09HI20: Caracterizar as fases da ditadura militar brasileira, compreendendo os mecanismos de repressão e censura dos Atos Institucionais.'
  },
  {
    id: 8,
    chapterCode: 'B6',
    prompt: '(Escola Parque Ipiranga / 9º Ano) Em 1984, milhões de cidadãos brasileiros vestidos de amarelo foram às praças na campanha das "Diretas Já". O objetivo central dessa mobilização histórica era:',
    options: [
      { letter: 'A', text: 'Aprovar a Emenda Constitucional Dante de Oliveira, permitindo que o próximo presidente da República fosse escolhido pelo voto direto e secreto do povo.' },
      { letter: 'B', text: 'Exigir a prorrogação do mandato do general João Figueiredo por mais dez anos.' },
      { letter: 'C', text: 'Proibir a circulação de jornais de oposição e fechar os sindicatos de trabalhadores do país.' },
      { letter: 'D', text: 'Impedir a eleição indireta de Tancredo Neves através de um boicote total às urnas.' }
    ],
    correctLetter: 'A',
    justification: 'A campanha das Diretas Já reuniu artistas, partidos de oposição, operários e estudantes para aprovar a Emenda Dante de Oliveira. Embora a emenda tenha obtido a maioria dos votos dos parlamentares presentes, faltaram 22 votos para os 2/3 exigidos, levando a eleição presidencial ao Colégio Eleitoral em 1985.',
    bnccSkill: 'EF09HI21: Analisar os movimentos sociais e a transição da ditadura para a democracia no Brasil (Diretas Já e fim do regime).'
  },

  // --- A7: MOVIMENTOS SOCIAIS E CULTURAIS DO SÉCULO XX ---
  {
    id: 9,
    chapterCode: 'A7',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) A Conferência de Bandung, realizada na Indonésia em 1955, reuniu líderes de 29 nações da Ásia e da África. Essa conferência teve papel fundamental ao:',
    options: [
      { letter: 'A', text: 'Firmar uma aliança militar com a OTAN para conter o avanço soviético na Ásia Central.' },
      { letter: 'B', text: 'Condenar o colonialismo imperialista e fundar as bases do Movimento dos Países Não-Alinhados (o chamado Terceiro Mundo) perante a bipolaridade da Guerra Fria.' },
      { letter: 'C', text: 'Aprovar a anexação definitiva da Índia e do Vietnã pelo império colonial britânico.' },
      { letter: 'D', text: 'Determinar a criação do Estado de Israel e a expulsão dos palestinos da Faixa de Gaza.' }
    ],
    correctLetter: 'B',
    justification: 'Bandung expressou a voz dos povos recém-independentes da África e da Ásia. Líderes como Nehru (Índia), Sukarno (Indonésia) e Nasser (Egito) proclamaram o repúdio ao racismo, ao imperialismo e à submissão a Washington ou a Moscou.',
    bnccSkill: 'EF09HI30: Analisar o processo de descolonização na África e na Ásia e as tensões geopolíticas no pós-guerra.'
  },
  {
    id: 10,
    chapterCode: 'A7',
    prompt: '(Escola Parque Ipiranga / 9º Ano) O sistema do Apartheid na África do Sul (1948-1994) e o Movimento pelos Direitos Civis nos EUA na década de 1960 tiveram em comum:',
    options: [
      { letter: 'A', text: 'A aceitação voluntária da segregação racial pacífica pela maioria da população negra.' },
      { letter: 'B', text: 'A luta de resistência popular contra legislações estatais racistas que negavam direitos civis, políticos e de cidadania à população negra, personificada por líderes como Nelson Mandela e Martin Luther King Jr.' },
      { letter: 'C', text: 'O apoio irrestrito dos governos metropolitas europeus à manutenção de privilégios para a minoria branca.' },
      { letter: 'D', text: 'A vitória rápida sem prisões, atentados ou mortes de militantes antirracistas.' }
    ],
    correctLetter: 'B',
    justification: 'Tanto nos EUA das leis de Jim Crow quanto na África do Sul do Apartheid, a discriminação racial era lei oficial de Estado. Ambos os movimentos exigiram sacrifício, coragem e mobilização de massas para derrubar a segregação.',
    bnccSkill: 'EF09HI31: Analisar os movimentos pelos direitos civis, a luta antirracista e os impactos do Apartheid na história mundial.'
  },

  // --- A8: A REDEFINIÇÃO DA ORDEM MUNDIAL NOS ANOS DE 1990 ---
  {
    id: 11,
    chapterCode: 'A8',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) A expressão "Nova Ordem Mundial", utilizada a partir do início da década de 1990 com o colapso da União Soviética, expressa:' ,
    options: [
      { letter: 'A', text: 'A restauração do império colonial britânico e francês sobre a Ásia.' },
      { letter: 'B', text: 'O fim da bipolaridade Leste-Oeste, a globalização econômica, a difusão do ideário neoliberal do Consenso de Washington e a emergência de múltiplos polos de poder econômico.' },
      { letter: 'C', text: 'A vitória do comunismo mundial e a extinção de moedas capitalistas e do comércio global.' },
      { letter: 'D', text: 'O isolamento total dos Estados Unidos e a recusa da intervenção diplomática em guerras estrangeiras.' }
    ],
    correctLetter: 'B',
    justification: 'A Nova Ordem Mundial substituiu a lógica ideológica da Guerra Fria pela integração dos mercados globalizados, circulação rápida de dados e capitais, mas também por novas tensões regionais e a posterior ascensão dos polos multipolares (como a China e os BRICS).',
    bnccSkill: 'EF09HI32: Analisar as transformações econômicas e geopolíticas provocadas pela Nova Ordem Mundial e a globalização.'
  },
  {
    id: 12,
    chapterCode: 'A8',
    prompt: '(Escola Parque Ipiranga / 9º Ano) Na virada do século XX para o século XXI, a América Latina vivenciou a chamada "Onda Rosa" (Pink Tide), que se caracterizou por:',
    options: [
      { letter: 'A', text: 'A imposição de novas ditaduras militares lideradas por generais da Doutrina de Segurança Nacional.' },
      { letter: 'B', text: 'A eleição democrática de uma série de governos progressistas e de centro-esquerda que priorizaram programas de combate à pobreza e integração regional autônoma, favorecidos pelo ciclo de alta das commodities.' },
      { letter: 'C', text: 'A adesão compulsória de todos os países latino-americanos à ALCA proposta por Washington.' },
      { letter: 'D', text: 'A privatização de todos os serviços de saúde e educação em países como Venezuela, Bolívia e Brasil.' }
    ],
    correctLetter: 'B',
    justification: 'Líderes como Chávez, Lula, Kirchner, Evo Morales e Rafael Correa governaram sob a esteira da expansão do comércio com a China, investindo os dividendos das commodities em políticas de redução da desigualdade social e fundando fóruns como a UNASUL.',
    bnccSkill: 'EF09HI33: Discutir as dinâmicas políticas contemporâneas na América Latina e os ciclos de alternância de governos.'
  },

  // --- B7: A NOVA REPÚBLICA: SÉCULO XX ---
  {
    id: 13,
    chapterCode: 'B7',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) A Constituição de 1988 foi apelidada pelo deputado Ulysses Guimarães de "Constituição Cidadã" devido a:',
    options: [
      { letter: 'A', text: 'Ter sido outorgada pelos generais militares sem a participação de parlamentares civis.' },
      { letter: 'B', text: 'Seu amplo catálogo de garantias fundamentais, direitos trabalhistas e sociais, consagração do SUS, demarcação de terras indígenas e tipificação do racismo como crime inafiançável e imprescritível.' },
      { letter: 'C', text: 'Ter determinado o confisco obrigatório das cadernetas de poupança de todos os cidadãos brasileiros.' },
      { letter: 'D', text: 'Ter proibido a existência de partidos de oposição e de sindicatos livres no país.' }
    ],
    correctLetter: 'B',
    justification: 'A Constituição de 1988 reconstruiu as bases do Estado Democrático de Direito no Brasil, incorporando reivindicações históricas dos movimentos negros, indígenas, sindicais, de mulheres e sanitários.',
    bnccSkill: 'EF09HI22: Analisar o processo de redemocratização e a importância da Constituição de 1988 na garantia dos direitos individuais e sociais.'
  },
  {
    id: 14,
    chapterCode: 'B7',
    prompt: '(Escola Parque Ipiranga / 9º Ano) O Plano Real, implementado em 1994 durante o governo do presidente Itamar Franco, obteve sucesso histórico no controle da hiperinflação brasileira porque:',
    options: [
      { letter: 'A', text: 'Congelou sumariamente todos os preços dos supermercados e prendeu gerentes de lojas comerciais.' },
      { letter: 'B', text: 'Utilizou a URV (Unidade Real de Valor) como moeda de transição psicológica para sincronizar os preços relativos da economia antes do lançamento do Real, sem quebra de contratos.' },
      { letter: 'C', text: 'Confiscou todas as contas bancárias da população por 18 meses consecutivos.' },
      { letter: 'D', text: 'Substituiu a moeda brasileira pelo dólar norte-americano como única moeda com curso legal no país.' }
    ],
    correctLetter: 'B',
    justification: 'Ao contrário dos planos Cruzado e Collor, o Plano Real não adotou congelamento compulsório de preços. A URV serviu de índice de conversão diária que desarmou a inércia inflacionária, permitindo a circulação sustentável do Real em 1º de julho de 1994.',
    bnccSkill: 'EF09HI23: Identificar e caracterizar as crises inflacionárias dos anos 1980 e o papel do Plano Real na estabilização monetária.'
  },

  // --- B8: A NOVA REPÚBLICA: SÉCULO XXI ---
  {
    id: 15,
    chapterCode: 'B8',
    prompt: '(Escola Parque Ipiranga / Prof. Anderson Firmo) As Jornadas de Junho de 2013 marcaram a história recente do Brasil contemporâneo por:',
    options: [
      { letter: 'A', text: 'Terem sido organizadas exclusivamente pelas Forças Armadas para restabelecer o AI-5.' },
      { letter: 'B', text: 'Iniciarem como manifestações contra o aumento das tarifas de transporte público e se transformarem em uma onda massiva de protestos de rua por saúde, educação ("padrão FIFA") e contra a corrupção política.' },
      { letter: 'C', text: 'Exigirem a revogação do Plano Real e a volta da inflação descontrolada.' },
      { letter: 'D', text: 'Terem sido convocadas pela FIFA para comemorar os preparativos da Copa do Mundo.' }
    ],
    correctLetter: 'B',
    justification: 'Convocadas inicialmente pelo Movimento Passe Livre em São Paulo, as passeatas multiplicaram-se por centenas de cidades com a adesão de milhões de cidadãos mobilizados por redes sociais, inaugurando uma nova fase de ativismo e polarização no país.',
    bnccSkill: 'EF09HI24: Compreender os impactos das manifestações sociais contemporâneas e a atuação das redes digitais na cidadania.'
  },
  {
    id: 16,
    chapterCode: 'B8',
    prompt: '(Escola Parque Ipiranga / 9º Ano) Em 2023, o Congresso Nacional aprovou a Reforma Tributária sobre o consumo (PEC 45/2019). Essa reforma tem como objetivo central:',
    options: [
      { letter: 'A', text: 'Aumentar a inflação mensal e proibir o uso de cartão de crédito no comércio.' },
      { letter: 'B', text: 'Unificar tributos fragmentados (PIS, Cofins, IPI, ICMS e ISS) em um modelo de IVA (Imposto sobre Valor Agregado) dual, simplificando o sistema tributário e garantindo maior transparência ao consumidor.' },
      { letter: 'C', text: 'Extinguir o Sistema Único de Saúde (SUS) e fechar as universidades públicas.' },
      { letter: 'D', text: 'Voltar ao padrão ouro do século XIX para fixar o valor do Real.' }
    ],
    correctLetter: 'B',
    justification: 'A reforma tributária substitui cinco impostos cumulativos por dois novos (CBS federal e IBS estadual/municipal), criando o IVA dual para modernizar a economia e evitar a guerra fiscal entre os estados brasileiros.',
    bnccSkill: 'EF09HI24: Analisar debates socioeconômicos e reformas estruturais contemporâneas na sociedade brasileira.'
  }
];
