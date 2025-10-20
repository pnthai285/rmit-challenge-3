# Berserker - Thử Thách An Ninh Mạng

Game giáo dục tương tác giúp người chơi học cách nhận diện và phòng tránh các hình thức lừa đảo trực tuyến.

## 🎮 Giới thiệu

Berserker là một game trình duyệt giúp người chơi trải nghiệm các tình huống lừa đảo thực tế và học cách ứng phó đúng đắn. Game có 4 chuyên đề chính với 5 kịch bản chi tiết:

### 📚 Chuyên đề

1. **🎭 Lừa đảo Giả mạo** - Giả danh người thân, cơ quan chức năng
2. **💰 Cạm bẫy "Việc nhẹ Lương cao"** - Lừa đảo đầu tư, việc làm
3. **💔 Cạm bẫy Tình cảm & Lòng tin** - Bẫy tình online
4. **🛍️ Lừa đảo Giao dịch & Dịch vụ** - Mua sắm, dịch vụ giả mạo

## 🚀 Yêu cầu

- Node.js 18+ và npm
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)

## 📦 Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd rmit-challenge-3

# Cài đặt dependencies
npm install
```

## 🎯 Chạy game

### Development Mode
```bash
npm run dev
```
Game sẽ chạy tại: http://localhost:5173/

### Build cho Production
```bash
npm run build
```
File build sẽ được tạo trong thư mục `dist/`

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy

Game có thể deploy lên bất kỳ static hosting nào:

- **Vercel**: Kéo thả thư mục `dist` hoặc connect với GitHub
- **Netlify**: Drag & drop thư mục `dist`
- **GitHub Pages**: Push thư mục `dist` lên branch `gh-pages`
- **Firebase Hosting**: `firebase deploy`

## 🛠️ Công nghệ sử dụng

### Front-end Only (100% Browser-based)
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Không sử dụng
- ❌ Không có backend
- ❌ Không có database
- ❌ Không cần API keys
- ❌ Không cần setup môi trường

## 📁 Cấu trúc Project

```
rmit-challenge-3/
├── src/
│   ├── components/          # React components
│   │   ├── MenuScene.tsx
│   │   ├── CategorySelectionScene.tsx
│   │   ├── ScenarioSelectionScene.tsx
│   │   ├── PlayScene.tsx
│   │   └── GameOverScene.tsx
│   ├── data/
│   │   └── scenario.ts      # Dữ liệu kịch bản game
│   ├── types/
│   │   └── game.ts          # TypeScript types
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── package.json
└── vite.config.ts
```

## 🎨 Tính năng

- ✅ Multi-branch scenarios với nhiều kết cục
- ✅ 4 chuyên đề với 5 kịch bản chi tiết
- ✅ Hệ thống điểm số động
- ✅ Bài học sau mỗi lựa chọn
- ✅ Giao diện đẹp mắt với animations
- ✅ Responsive design
- ✅ Không cần đăng nhập
- ✅ Không cần kết nối internet sau khi load

## 📝 License

MIT License

## 👥 Tác giả

RMIT Challenge 3 Team
