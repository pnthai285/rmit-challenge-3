import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RotateCcw, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase, GameScore } from '../lib/supabase';

interface GameOverSceneProps {
  finalScore: number;
  choiceMade: string;
  lessonTitle?: string;
  lessonText?: string;
  onPlayAgain: () => void;
}

export function GameOverScene({ finalScore, choiceMade, lessonTitle, lessonText, onPlayAgain }: GameOverSceneProps) {
  const [playerName, setPlayerName] = useState('');
  const [scoreSaved, setScoreSaved] = useState(false);
  const [topScores, setTopScores] = useState<GameScore[]>([]);

  useEffect(() => {
    loadTopScores();
  }, []);

  const loadTopScores = async () => {
    const { data, error } = await supabase
      .from('game_scores')
      .select('*')
      .order('score', { ascending: false })
      .limit(5);

    if (!error && data) {
      setTopScores(data);
    }
  };

  const saveScore = async () => {
    if (!playerName.trim()) {
      alert('Vui lòng nhập tên của bạn!');
      return;
    }

    const { error } = await supabase
      .from('game_scores')
      .insert([
        {
          player_name: playerName.trim(),
          score: finalScore,
          choice_made: choiceMade
        }
      ]);

    if (!error) {
      setScoreSaved(true);
      loadTopScores();
    }
  };

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
        className="w-full max-w-4xl"
      >
        <div className="grid md:grid-cols-2 gap-6">
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

            {!scoreSaved ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <input
                  type="text"
                  placeholder="Nhập tên của bạn..."
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-xl border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={20}
                />
                <button
                  onClick={saveScore}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300"
                >
                  Lưu Điểm
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500 rounded-xl p-4 text-center text-green-400"
              >
                ✓ Điểm đã được lưu!
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPlayAgain}
              className="w-full mt-4 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Chơi Lại
            </motion.button>
          </div>

          {/* Leaderboard Card */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-3 rounded-full">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Top 5 Cao Thủ</h3>
            </div>

            <div className="space-y-3">
              {topScores.length === 0 ? (
                <p className="text-slate-400 text-center py-8">Chưa có điểm số nào</p>
              ) : (
                topScores.map((score, index) => (
                  <motion.div
                    key={score.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-slate-700/50 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          index === 0
                            ? 'bg-yellow-500 text-yellow-900'
                            : index === 1
                            ? 'bg-slate-400 text-slate-900'
                            : index === 2
                            ? 'bg-amber-700 text-amber-100'
                            : 'bg-slate-600 text-slate-300'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{score.player_name}</p>
                        <p className="text-xs text-slate-400">
                          {new Date(score.created_at).toLocaleDateString('vi-VN')}
                        </p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{score.score}</div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
