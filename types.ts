export interface Aksara {
  char: string; // The Javanese character
  latin: string; // The latin representation (e.g., "Ha")
  description?: string;
  type: 'nglegena' | 'pasangan' | 'sandhangan';
}

export interface Sandhangan {
  name: string;
  char: string;
  position: string;
  function: string;
  example: string;
  exampleLatin: string;
}

export interface AiWordExample {
  word: string;
  script: string;
  meaning: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export enum AppRoute {
  HOME = 'home',
  NGLEGENA = 'nglegena',
  PASANGAN = 'pasangan',
  SANDHANGAN = 'sandhangan',
  AI_EXAMPLES = 'ai-examples',
  QUIZ = 'quiz',
  ABOUT = 'about',
}