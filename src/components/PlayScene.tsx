import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { scenario } from '../data/scenario';
import { ScenarioChoice } from '../types/game';

interface PlaySceneProps {
  onGameOver: (score: number, choice: string) => void;
}

export function PlayScene({ onGameOver }: PlaySceneProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [playerScore, setPlayerScore] = useState(100);

  const currentScenario = scenario[currentStep];
  const isLastStep = currentStep === scenario.length - 1;

  const handleContinue = () => {
    if (currentStep < scenario.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleChoice = (choice: ScenarioChoice) => {
    const newScore = playerScore + choice.scoreEffect;
    setPlayerScore(newScore);
    onGameOver(newScore, choice.text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl"
      >
        {/* Chat Container */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-slate-700">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-full">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Cuộc trò chuyện
              </h2>
              <p className="text-sm text-slate-400">Điểm hiện tại: {playerScore}</p>
            </div>
          </div>

          {/* Message */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <div className={`flex ${currentScenario.speaker === 'An' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    currentScenario.speaker === 'Mai'
                      ? 'bg-slate-700 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  }`}
                >
                  <p className="text-sm font-semibold mb-2 opacity-75">
                    {currentScenario.speaker}
                  </p>
                  <p className="text-base leading-relaxed whitespace-pre-wrap">
                    {currentScenario.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Actions */}
          <div className="space-y-3">
            {currentScenario.choices ? (
              <AnimatePresence>
                {currentScenario.choices.map((choice, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleChoice(choice)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-4 rounded-xl text-left font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {choice.text}
                  </motion.button>
                ))}
              </AnimatePresence>
            ) : (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleContinue}
                disabled={isLastStep}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Tiếp tục
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
