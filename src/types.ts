export type EpochYear = 1945 | 1949 | 1959 | 1962 | 1975 | 1989 | 1991;

export interface DashboardMilestone {
  year: 1945 | 1962 | 1989 | 1991;
  title: string;
  tagline: string;
  defconLevel: number; // 1 to 5
  tensionLabel: string;
  nuclearWarheadsUS: number;
  nuclearWarheadsUSSR: number;
  mainDoctrine: string;
  keyLeaders: { us: string; ussr: string };
  geopoliticalState: string;
  historicalSignificance: string;
  emoji: string;
  bulletPoints: string[];
}

export interface TimelineEvent {
  year: EpochYear;
  title: string;
  category: 'politica' | 'nuclear' | 'conflito' | 'espacial' | 'desfecho';
  categoryLabel: string;
  emoji: '☢️' | '🚀' | '🧊' | '🏛️';
  shortDesc: string;
  fullDesc: string;
  impact: string;
  examTip: string; // Dica para o 9º Ano
  actors: string[];
  location: string;
}

export interface AnalogyItem {
  id: 'xadrez' | 'carrinho_choque' | 'roleta_russa';
  title: string;
  concept: string;
  shortName: string;
  emoji: string;
  iconName: string;
  quote: string;
  explanation: string;
  howItWorked: string[];
  classroomConnection: string;
  accentColor: string;
}

export interface BlocDetail {
  id: 'capitalista' | 'socialista';
  name: string;
  leader: string;
  leaderFullName: string;
  ideology: string;
  economicPlan: { name: string; year: string; desc: string };
  militaryAlliance: { name: string; year: string; desc: string };
  intelligenceAgency: { name: string; role: string };
  politicalSystem: string;
  economicSystem: string;
  symbolColor: string;
  borderClass: string;
  bgLight: string;
  keyFeatures: string[];
  propagandaFocus: string;
}

export interface ConflictCase {
  id: string;
  name: string;
  period: string;
  location: string;
  belligerents: string;
  summary: string;
  whyIndirect: string;
  outcome: string;
  iconEmoji: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  pedagogicalNote: string;
}
