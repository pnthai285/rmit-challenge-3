import { useState } from 'react';
import { MenuScene } from './components/MenuScene';
import { CategorySelectionScene } from './components/CategorySelectionScene';
import { ScenarioSelectionScene } from './components/ScenarioSelectionScene';
import { PlayScene } from './components/PlayScene';
import { GameOverScene } from './components/GameOverScene';
import { GameScene, ScenarioStep } from './types/game';
import { scenarios } from './data/scenario';

function App() {
  const [scene, setScene] = useState<GameScene>('menu');
  const [finalScore, setFinalScore] = useState(0);
  const [choiceMade, setChoiceMade] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<ScenarioStep[]>(scenarios[0].steps);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleStartGame = () => {
    // Chơi nhanh với kịch bản đầu tiên
    setSelectedScenario(scenarios[0].steps);
    setScene('play');
  };

  const handleSelectCategoryScreen = () => {
    setScene('category-selection');
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setScene('scenario-selection');
  };

  const handleSelectScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      setSelectedScenario(scenario.steps);
      setScene('play');
    }
  };

  const handleGameOver = (score: number, choice: string) => {
    setFinalScore(score);
    setChoiceMade(choice);
    setScene('gameover');
  };

  const handlePlayAgain = () => {
    setScene('menu');
  };

  const handleBackToMenu = () => {
    setScene('menu');
  };

  const handleBackToCategory = () => {
    setScene('category-selection');
  };

  return (
    <>
      {scene === 'menu' && (
        <MenuScene 
          onStartGame={handleStartGame}
          onSelectScenario={handleSelectCategoryScreen}
        />
      )}
      {scene === 'category-selection' && (
        <CategorySelectionScene
          onSelectCategory={handleSelectCategory}
          onBack={handleBackToMenu}
        />
      )}
      {scene === 'scenario-selection' && (
        <ScenarioSelectionScene
          categoryId={selectedCategory}
          onSelectScenario={handleSelectScenario}
          onBack={handleBackToCategory}
        />
      )}
      {scene === 'play' && (
        <PlayScene 
          scenario={selectedScenario}
          onGameOver={handleGameOver}
        />
      )}
      {scene === 'gameover' && (
        <GameOverScene
          finalScore={finalScore}
          choiceMade={choiceMade}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </>
  );
}

export default App;
