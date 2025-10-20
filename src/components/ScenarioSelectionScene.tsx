import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { scenarios, categories } from '../data/scenario';
import { Scenario } from '../types/game';

interface ScenarioSelectionSceneProps {
  categoryId: string;
  onSelectScenario: (scenarioId: string) => void;
  onBack: () => void;
}

export function ScenarioSelectionScene({ categoryId, onSelectScenario, onBack }: ScenarioSelectionSceneProps) {
  // Lọc các kịch bản theo category
  const filteredScenarios = scenarios.filter(s => s.category === categoryId);
  const category = categories.find(c => c.id === categoryId);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Dễ':
        return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'Trung bình':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'Khó':
        return 'bg-red-500/20 text-red-300 border-red-500/50';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </button>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">{category?.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {category?.name}
              </h1>
              <p className="text-blue-200 text-lg mt-2">
                {category?.description}
              </p>
            </div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mt-4">
            <p className="text-yellow-300 text-sm">
              <span className="font-semibold">Chiến thuật tâm lý:</span> {category?.psychologyTactic}
            </p>
          </div>
        </motion.div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScenarios.map((scenario: Scenario, index: number) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Icon */}
                <div className="text-5xl mb-4">{scenario.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {scenario.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 min-h-[48px]">
                  {scenario.description}
                </p>

                {/* Difficulty Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(
                      scenario.difficulty
                    )}`}
                  >
                    {scenario.difficulty}
                  </span>
                  <span className="text-slate-400 text-xs">
                    {scenario.steps.length} bước
                  </span>
                </div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectScenario(scenario.id)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Chơi Ngay
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
        >
          <h3 className="text-white font-semibold mb-2">💡 Mẹo chơi game:</h3>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• Đọc kỹ từng tình huống và tìm các dấu hiệu bất thường</li>
            <li>• Lựa chọn phản ứng phù hợp nhất với tình huống lừa đảo</li>
            <li>• Điểm số cao hơn = Bạn nhận diện lừa đảo tốt hơn</li>
            <li>• Thử tất cả các kịch bản để học nhiều kiểu lừa đảo khác nhau</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
