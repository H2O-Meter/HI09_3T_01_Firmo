export type ChapterCode = 'A5' | 'A6' | 'B5' | 'B6' | 'A7' | 'A8' | 'B7' | 'B8';

export type StudyMode = 'handwritten' | 'stickNotes' | 'mindmap' | 'comic' | 'infographic' | 'flashcard';

export interface FlashcardItem {
  id: string;
  topicTitle: string;
  topicPeriod: string;
  rawEvent: string;
  headline: string;
  details: string;
  examBizu: string;
  significance: string;
}

export interface CurriculumTopic {
  id: string;
  title: string;
  period: string;
  keyEvents: string[];
  summary: string;
  historicalSignificance: string;
  examBizu: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  type: 'root' | 'cause' | 'event' | 'figure' | 'consequence';
  description?: string;
  children?: MindMapNode[];
}

export interface StickyNoteItem {
  id: string;
  color: 'yellow' | 'pink' | 'blue' | 'green';
  tag: string;
  title: string;
  content: string;
  examAlert?: string;
}

export interface HandwrittenNoteItem {
  id: string;
  title: string;
  notebookDate: string;
  professorAnnotation: string;
  studentNotes: string[];
  highlightKeywords: string[];
  marginDrawNote: string;
  bizuPrompt: string;
}

export interface ComicPanel {
  id: string;
  panelNumber: number;
  characterA: { name: string; speech: string; role: string };
  characterB: { name: string; speech: string; role: string };
  historicalContext: string;
  punchlineOrLesson: string;
}

export interface InfographicMetric {
  label: string;
  value: string;
  context: string;
  comparison: string;
  trend?: 'up' | 'down' | 'warning' | 'neutral';
}

export interface ChapterData {
  code: ChapterCode;
  title: string;
  period: string;
  theme: string;
  overview: string;
  topics: CurriculumTopic[];
  analogy: {
    title: string;
    quote: string;
    explanation: string;
    pedagogicalLesson: string;
  };
  handwrittenNote: HandwrittenNoteItem;
  stickyNotes: StickyNoteItem[];
  mindMap: MindMapNode;
  comicStrip: {
    title: string;
    panels: ComicPanel[];
  };
  infographics: {
    headline: string;
    metrics: InfographicMetric[];
    comparisonGrid?: {
      colA: { title: string; items: string[] };
      colB: { title: string; items: string[] };
    };
  };
}

export interface ExerciseQuestion {
  id: number;
  chapterCode: ChapterCode;
  prompt: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctLetter: 'A' | 'B' | 'C' | 'D';
  justification: string;
  bnccSkill: string;
}

// Legacy interfaces for existing interactive components
export type EpochYear = 1945 | 1949 | 1959 | 1961 | 1962 | 1975 | 1989 | 1991 | number;

export interface TimelineEvent {
  year: EpochYear;
  title: string;
  description?: string;
  category: string;
  bloc?: 'eua' | 'urss' | 'ambos' | string;
  impact?: string;
  examRelevance?: string;
  categoryLabel?: string;
  emoji?: string;
  fullDesc?: string;
  shortDesc?: string;
  location?: string;
  actors?: string[];
  examTip?: string;
  [key: string]: any;
}

export interface DashboardMilestone {
  year?: number;
  title?: string;
  subtitle?: string;
  theme?: string;
  statNumber?: string;
  statLabel?: string;
  details?: string[];
  historicalImpact?: string;
  didacticBizu?: string;
  tagline?: string;
  defconLevel?: number;
  emoji?: string;
  keyLeaders?: any;
  historicalSignificance?: string;
  nuclearWarheadsUS?: number;
  nuclearWarheadsUSSR?: number;
  mainDoctrine?: string;
  geopoliticalState?: string;
  bulletPoints?: string[];
  tensionLabel?: string;
  [key: string]: any;
}

export interface ChronologicalPhase {
  id?: string;
  phaseNumber?: number;
  romanNumeral?: string;
  name?: string;
  period?: string;
  coreDilemma?: string;
  didacticSummary?: string;
  keyEvents?: string[];
  ideologicalDynamics?: {
    usaAction: string;
    ussrAction: string;
  };
  checkpointBadge?: string;
  examBizu?: string;
  title?: string;
  subtitle?: string;
  integratedAnalogy?: any;
  conflicts?: any[];
  spaceMilestones?: any[];
  accentColor?: string;
  [key: string]: any;
}

export interface ConflictCase {
  id?: string;
  name?: string;
  years?: string;
  period?: string;
  region?: string;
  type?: string;
  context?: string;
  casualtiesOrScale?: string;
  resolution?: string;
  examInsight?: string;
  whyIndirect?: string;
  outcome?: string;
  location?: string;
  iconEmoji?: string;
  belligerents?: any;
  summary?: string;
  [key: string]: any;
}

export interface AnalogyItem {
  id?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
  explanation?: string;
  historicalConnection?: string;
  classroomExercise?: string;
  concept?: string;
  shortName?: string;
  emoji?: string;
  [key: string]: any;
}

export interface BlocDetail {
  id?: string;
  name?: string;
  side?: 'capitalista' | 'socialista' | string;
  superpower?: string;
  leader?: string;
  economicDoctrine?: string;
  militaryAlliance?: any;
  economicPlan?: any;
  intelligenceAgency?: any;
  coreValues?: string[];
  symbolicPhrase?: string;
  [key: string]: any;
}

export interface QuizQuestion {
  id?: number;
  prompt?: string;
  question?: string;
  options?: any[];
  correctLetter?: string;
  correctAnswer?: number;
  correctIndex?: number;
  justification?: string;
  bnccSkill?: string;
  [key: string]: any;
}


