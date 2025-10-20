export interface ScenarioChoice {
  text: string;
  scoreEffect: number;
}

export interface ScenarioStep {
  speaker: 'Mai' | 'An' | 'Hacker' | 'Bank' | 'System' | 'Police' | 'Stranger' | 'Friend' | 'Recruiter' | 'Lover' | 'Charity';
  text: string;
  choices?: ScenarioChoice[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Khó';
  steps: ScenarioStep[];
  icon: string;
  category: string;
}

export interface ScenarioCategory {
  id: string;
  name: string;
  description: string;
  psychologyTactic: string;
  icon: string;
}

export type GameScene = 'menu' | 'category-selection' | 'scenario-selection' | 'play' | 'gameover';

export interface GameState {
  scene: GameScene;
  currentStep: number;
  playerScore: number;
  playerName: string;
  selectedChoice: string;
  selectedScenario?: string;
  selectedCategory?: string;
}
