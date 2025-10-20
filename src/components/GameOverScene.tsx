import { motion } from 'framer-motion';
import { RotateCcw, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface GameOverSceneProps {
  finalScore: number;
  choiceMade?: string;
  lessonTitle?: string;
  lessonText?: string;
  onPlayAgain: () => void;
}

export function GameOverScene({ finalScore, lessonTitle, lessonText, onPlayAgain }: GameOverSceneProps) {

  const getResultInfo = () => {
    if (finalScore <= 0) {
      return {
        icon: AlertTriangle,
        color: 'text-red-400',
        bgColor: 'from-red-600 to-rose-600',
        title: 'Cẩn Thận!',
        message: 'Bạn đã mất tất cả! Hãy cẩn thận hơn với lừa đảo trực tuyến.'
      };
    } else if (finalScore === 100) {
      return {
        icon: TrendingUp,
        color: 'text-yellow-400',
        bgColor: 'from-yellow-600 to-orange-600',
        title: 'Khá Tốt',
        message: 'Bạn đã từ chối chuyển tiền nhưng nên tích cực xác minh hơn.'
      };
    } else {
      return {
        icon: CheckCircle,
        color: 'text-green-400',
        bgColor: 'from-green-600 to-emerald-600',
        title: 'Xuất Sắc!',
        message: 'Bạn đã nhận diện được lừa đảo! Tiếp tục giữ vững cảnh giác.'
      };
    }
  };

  const result = getResultInfo();
  const ResultIcon = result.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* Result Card */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-slate-700">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="flex justify-center mb-6"
            >
              <div className={`bg-gradient-to-br ${result.bgColor} p-6 rounded-full`}>
                <ResultIcon className="w-16 h-16 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-white text-center mb-2"
            >
              {lessonTitle || result.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center mb-6"
            >
              <span className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {finalScore}
              </span>
              <p className="text-slate-400 mt-2">điểm</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 text-center mb-8 leading-relaxed"
            >
              {lessonText || result.message}
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlayAgain}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-6 h-6" />
              Chơi Lại
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center text-slate-400 text-sm"
            >
              💡 Mẹo: Thử các kịch bản khác để học thêm về các dạng lừa đảo!
            </motion.div>
          </div>
      </motion.div>
    </div>
  );
}
