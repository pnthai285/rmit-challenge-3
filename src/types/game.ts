export interface ScenarioChoice {
  text: string;
  scoreEffect: number;
  nextStep?: number; // ID của bước tiếp theo (nếu có nhánh)
  isGameOver?: boolean; // True nếu lựa chọn này kết thúc game
  lessonTitle?: string; // Tiêu đề bài học khi kết thúc
  lessonText?: string; // Nội dung bài học khi kết thúc
}

export interface ScenarioStep {
  id: number; // ID duy nhất của step
  speaker: 'Mai' | 'An' | 'Hacker' | 'Bank' | 'System' | 'Police' | 'Stranger' | 'Friend' | 'Recruiter' | 'Lover' | 'Charity' | 'Alex' | 'Customs' | 'SMS';
  text: string;
  choices?: ScenarioChoice[];
  autoProgress?: boolean; // Tự động chuyển sang bước tiếp mà không cần lựa chọn
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
