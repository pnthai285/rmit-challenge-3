import { useState } from 'react';
import { MenuScene } from './components/MenuScene';
import { PlayScene } from './components/PlayScene';
import { GameOverScene } from './components/GameOverScene';
import { GameScene } from './types/game';

function App() {
  const [scene, setScene] = useState<GameScene>('menu');
  const [finalScore, setFinalScore] = useState(0);
  const [choiceMade, setChoiceMade] = useState('');

  const handleStartGame = () => {
    setScene('play');
  };

  const handleGameOver = (score: number, choice: string) => {
    setFinalScore(score);
    setChoiceMade(choice);
    setScene('gameover');
  };

  const handlePlayAgain = () => {
    setScene('menu');
  };

  return (
    <>
      {scene === 'menu' && <MenuScene onStartGame={handleStartGame} />}
      {scene === 'play' && <PlayScene onGameOver={handleGameOver} />}
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
