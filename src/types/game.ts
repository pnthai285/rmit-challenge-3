export interface ScenarioChoice {
  text: string;
  scoreEffect: number;
}

export interface ScenarioStep {
  speaker: 'Mai' | 'An';
  text: string;
  choices?: ScenarioChoice[];
}

export type GameScene = 'menu' | 'play' | 'gameover';

export interface GameState {
  scene: GameScene;
  currentStep: number;
  playerScore: number;
  playerName: string;
  selectedChoice: string;
}
