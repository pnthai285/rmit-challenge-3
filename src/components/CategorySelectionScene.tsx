import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { categories } from '../data/scenario';

interface CategorySelectionSceneProps {
  onSelectCategory: (categoryId: string) => void;
  onBack: () => void;
}

export function CategorySelectionScene({ onSelectCategory, onBack }: CategorySelectionSceneProps) {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Chọn Chuyên Đề
          </h1>
          <p className="text-blue-200 text-lg">
            Mỗi chuyên đề tập trung vào một chiến thuật tâm lý lừa đảo khác nhau
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelectCategory(category.id)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="p-8">
                {/* Icon */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-base mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Psychology Tactic */}
                <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50">
                  <p className="text-xs text-slate-400 mb-1">Chiến thuật tâm lý:</p>
                  <p className="text-sm text-yellow-300 font-medium">
                    {category.psychologyTactic}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6"
        >
          <h3 className="text-white font-semibold mb-3 text-lg">📚 Về 4 chuyên đề:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300 text-sm">
            <div>
              <p className="font-medium text-blue-300 mb-1">🎭 Lừa đảo Giả mạo</p>
              <p>Giả danh người thân, cơ quan, tổ chức để lừa đảo</p>
            </div>
            <div>
              <p className="font-medium text-green-300 mb-1">💰 Cạm bẫy "Việc nhẹ Lương cao"</p>
              <p>Lôi kéo đầu tư, việc làm với lợi nhuận hấp dẫn</p>
            </div>
            <div>
              <p className="font-medium text-pink-300 mb-1">💔 Cạm bẫy Tình cảm & Lòng tin</p>
              <p>Xây dựng mối quan hệ để lợi dụng tình cảm</p>
            </div>
            <div>
              <p className="font-medium text-purple-300 mb-1">🛍️ Lừa đảo Giao dịch & Dịch vụ</p>
              <p>Lừa đảo trong mua sắm, vay tiền, dịch vụ online</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
