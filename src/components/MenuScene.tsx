import { motion } from 'framer-motion';
import { Shield, Play } from 'lucide-react';

interface MenuSceneProps {
  onStartGame: () => void;
}

export function MenuScene({ onStartGame }: MenuSceneProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 rounded-full shadow-2xl">
            <Shield className="w-24 h-24 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-7xl font-bold text-white mb-4 tracking-tight"
        >
          Berserker
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-blue-200 mb-12"
        >
          Thử Thách An Ninh Mạng
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartGame}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto"
        >
          <Play className="w-6 h-6" />
          Chơi Ngay
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-slate-400 text-sm"
        >
          Học cách nhận diện lừa đảo trực tuyến qua trò chơi tương tác
        </motion.div>
      </motion.div>
    </div>
  );
}
