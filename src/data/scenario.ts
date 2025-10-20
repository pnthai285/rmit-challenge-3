import { Scenario, ScenarioCategory } from '../types/game';

// Định nghĩa các chuyên đề
export const categories: ScenarioCategory[] = [
  {
    id: 'impersonation',
    name: 'Lừa đảo Giả mạo',
    description: 'Kẻ xấu giả danh người thân, cơ quan chức năng hoặc tổ chức uy tín',
    psychologyTactic: 'Lợi dụng uy tín, sự tin tưởng, hoặc nỗi sợ hãi',
    icon: '🎭'
  },
  {
    id: 'easy-money',
    name: 'Cạm bẫy "Việc nhẹ Lương cao"',
    description: 'Lời mời hấp dẫn về việc làm, đầu tư, trúng thưởng với lợi nhuận cao',
    psychologyTactic: 'Đánh vào lòng tham, mong muốn kiếm tiền nhanh',
    icon: '💰'
  },
  {
    id: 'emotional-trust',
    name: 'Cạm bẫy Tình cảm & Lòng tin',
    description: 'Xây dựng mối quan hệ để lợi dụng cảm xúc và lòng trắc ẩn',
    psychologyTactic: 'Lợi dụng sự cô đơn, lòng trắc ẩn, và tình cảm',
    icon: '💔'
  },
  {
    id: 'transaction-service',
    name: 'Lừa đảo Giao dịch & Dịch vụ',
    description: 'Lừa đảo trong mua sắm, vay tiền, và các dịch vụ trực tuyến',
    psychologyTactic: 'Lợi dụng nhu cầu mua sắm, vay tiền hoặc dịch vụ',
    icon: '🛍️'
  }
];

// Định nghĩa các kịch bản
export const scenarios: Scenario[] = [
  // ==================== CHUYÊN ĐỀ 1: LỪA ĐẢO GIẢ MẠO ====================
  {
    id: 'friend-account-hack',
    title: 'Người thân & Bạn bè',
    description: 'Chiếm đoạt tài khoản Zalo/Facebook để vay tiền',
    difficulty: 'Dễ',
    icon: '👥',
    category: 'impersonation',
    steps: [
      {
        speaker: 'Mai',
        text: 'An ơi, đang làm gì đó?'
      },
      {
        speaker: 'Mai',
        text: 'Tớ đang có việc gấp quá mà tài khoản ngân hàng bị lỗi, cho tớ mượn tạm 500k được không? Tối nay tớ trả lại ngay.'
      },
      {
        speaker: 'Mai',
        text: 'Cậu chuyển vào link này giúp tớ nhé, đừng chuyển vào STK cũ. Thanks cậu nhiều!\n\n[http://nhan-tien-nhanh.xyz/MOMO-500K]'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'OK, chuyển liền đây. Bạn thân mà.', scoreEffect: -100 },
          { text: 'Sao link lạ vậy? Cậu gọi điện cho tớ xác nhận đi.', scoreEffect: 10 },
          { text: 'Hỏi vay tiền mà không gọi điện, chắc chắn tài khoản bị hack rồi!', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'fake-police',
    title: 'Cơ quan chức năng',
    description: 'Giả danh công an thông báo liên quan vụ án',
    difficulty: 'Trung bình',
    icon: '👮',
    category: 'impersonation',
    steps: [
      {
        speaker: 'System',
        text: '📞 Cuộc gọi đến từ: 0692-XXX-XXX'
      },
      {
        speaker: 'Police',
        text: 'Anh/chị nghe máy! Đây là Phòng Cảnh sát điều tra tội phạm công nghệ cao, Công an TP.HCM.'
      },
      {
        speaker: 'Police',
        text: 'Tài khoản ngân hàng của anh/chị có liên quan đến một đường dây rửa tiền quốc tế. Hiện chúng tôi đang điều tra.'
      },
      {
        speaker: 'Police',
        text: 'Để chứng minh anh/chị không liên quan, vui lòng chuyển toàn bộ tiền trong tài khoản vào TÀI KHOẢN BẢO VỆ của Ngân hàng Nhà nước. Chúng tôi sẽ gửi link ngay.'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Hoảng sợ! Làm ngay theo hướng dẫn để chứng minh mình vô tội.', scoreEffect: -100 },
          { text: 'Yêu cầu họ cung cấp giấy tờ chứng minh danh tính và số điện thoại của đơn vị.', scoreEffect: 5 },
          { text: 'Cúp máy ngay! Công an không bao giờ gọi điện yêu cầu chuyển tiền.', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'fake-bank',
    title: 'Thương hiệu & Tổ chức',
    description: 'Giả mạo ngân hàng, nhà mạng qua SMS/Email',
    difficulty: 'Trung bình',
    icon: '🏦',
    category: 'impersonation',
    steps: [
      {
        speaker: 'System',
        text: '📱 SMS từ: VCB-BANK'
      },
      {
        speaker: 'Bank',
        text: 'Kính gửi Quý khách,\n\nTài khoản của bạn đang có giao dịch bất thường. Vui lòng ĐĂNG NHẬP ngay để xác thực trong vòng 2 giờ, nếu không tài khoản sẽ bị KHÓA vĩnh viễn.'
      },
      {
        speaker: 'Bank',
        text: 'Link xác thực: https://vcbbank-verify.com/xac-thuc\n\nTrân trọng,\nVCBank Security Team'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Click vào link và đăng nhập ngay để tránh bị khóa tài khoản.', scoreEffect: -100 },
          { text: 'Mở app ngân hàng chính thức hoặc gọi tổng đài để kiểm tra.', scoreEffect: 10 },
          { text: 'Xóa tin nhắn! Ngân hàng không bao giờ gửi link qua SMS yêu cầu đăng nhập.', scoreEffect: 10 }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 2: CẠM BẪY "VIỆC NHẸ LƯƠNG CAO" ====================
  {
    id: 'online-collaborator',
    title: 'Cộng tác viên Online',
    description: 'Làm CTV cho sàn TMĐT, đặt đơn hàng ảo nhận hoa hồng',
    difficulty: 'Trung bình',
    icon: '💼',
    category: 'easy-money',
    steps: [
      {
        speaker: 'System',
        text: '📧 Email từ: recruitment@shopee-jobs.com'
      },
      {
        speaker: 'Recruiter',
        text: 'Tuyển dụng Cộng tác viên Online cho Shopee\n\n✅ Công việc: Đặt đơn hàng ảo, tăng lượt đánh giá\n✅ Thu nhập: 3-10 triệu/tháng\n✅ Làm việc tại nhà, tự do thời gian'
      },
      {
        speaker: 'Recruiter',
        text: 'Để bắt đầu:\n1. Nạp 500k vào hệ thống\n2. Đặt 5 đơn hàng thử (hệ thống hoàn tiền + hoa hồng 10%)\n3. Nhận nhiệm vụ lớn hơn với hoa hồng cao hơn'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Tuyệt vời! Nạp tiền ngay để bắt đầu kiếm thêm thu nhập.', scoreEffect: -100 },
          { text: 'Tìm hiểu kỹ về công ty này trên mạng trước khi quyết định.', scoreEffect: 5 },
          { text: 'Công việc chính thống không yêu cầu nạp tiền trước. Đây là lừa đảo!', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'investment-scam',
    title: 'Đầu tư Siêu lợi nhuận',
    description: 'Sàn đầu tư Forex, tiền ảo với lợi nhuận khủng',
    difficulty: 'Khó',
    icon: '📈',
    category: 'easy-money',
    steps: [
      {
        speaker: 'System',
        text: '💬 Tin nhắn Telegram từ: @CryptoMaster_VN'
      },
      {
        speaker: 'Hacker',
        text: 'Chào bạn! Mình là chuyên gia đầu tư crypto. Thấy bạn có tiềm năng nên muốn chia sẻ cơ hội.'
      },
      {
        speaker: 'Hacker',
        text: 'Sàn đầu tư BINANCE PREMIUM của mình đang có chương trình:\n\n💎 Nạp 10 triệu → Lãi 3-5%/ngày\n💎 Cam kết hoàn vốn 100%\n💎 Rút tiền bất cứ lúc nào\n\nNhiều người đã kiếm được hàng trăm triệu!'
      },
      {
        speaker: 'Hacker',
        text: '[Ảnh chụp màn hình lợi nhuận khủng]\n\nLink đăng ký: binance-premium.co'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Cơ hội tuyệt vời! Đăng ký và nạp tiền ngay.', scoreEffect: -100 },
          { text: 'Yêu cầu giấy phép kinh doanh và tìm hiểu về sàn trước.', scoreEffect: 8 },
          { text: 'Lãi 3-5%/ngày là phi thực tế. Đây chắc chắn là lừa đảo đa cấp!', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'lottery-scam',
    title: 'Trúng thưởng & Quà tặng',
    description: 'Thông báo trúng giải, yêu cầu nộp phí để nhận',
    difficulty: 'Dễ',
    icon: '🎁',
    category: 'easy-money',
    steps: [
      {
        speaker: 'System',
        text: '📱 SMS từ: VIETTEL-KHUYENMAI'
      },
      {
        speaker: 'System',
        text: '🎉 CHÚC MỪNG! 🎉\n\nSố điện thoại của bạn đã may mắn TRÚNG GIẢI NHẤ T chương trình khuyến mại Viettel 2025!'
      },
      {
        speaker: 'System',
        text: 'Giải thưởng: 1 XE SH MODE trị giá 50 TRIỆU ĐỒNG\n\nĐể nhận giải, vui lòng:\n1. Chuyển phí xử lý hồ sơ: 2.000.000đ\n2. Truy cập: viettel-promotion.com\n\nHạn nhận thưởng: 24h'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Quá may mắn! Chuyển phí ngay để nhận xe.', scoreEffect: -100 },
          { text: 'Gọi tổng đài Viettel chính thức để xác minh thông tin.', scoreEffect: 10 },
          { text: 'Giải thật không bao giờ yêu cầu nộp phí. Đây là lừa đảo!', scoreEffect: 10 }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 3: CẠM BẪY TÌNH CẢM & LÒNG TIN ====================
  {
    id: 'romance-scam',
    title: 'Bẫy tình Online',
    description: 'Làm quen online, xây dựng tình cảm rồi lừa tiền',
    difficulty: 'Khó',
    icon: '💕',
    category: 'emotional-trust',
    steps: [
      {
        speaker: 'System',
        text: '💬 Đã trò chuyện với John Miller (USA) được 3 tháng...'
      },
      {
        speaker: 'Lover',
        text: 'Em yêu ơi, anh có tin buồn...'
      },
      {
        speaker: 'Lover',
        text: 'Mẹ anh bị tai nạn nghiêm trọng ở Việt Nam khi đi công tác. Bệnh viện yêu cầu đặt cọc 100 triệu mới chịu phẫu thuật.'
      },
      {
        speaker: 'Lover',
        text: 'Anh đang ở Mỹ, chuyển tiền quốc tế mất 3-5 ngày. Em có thể giúp anh ứng trước không? Anh hứa sẽ gấp đôi trả lại em.\n\n[Ảnh bệnh viện, giấy tờ y tế]'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Người yêu gặp khó khăn, phải giúp ngay! Chuyển tiền luôn.', scoreEffect: -100 },
          { text: 'Yêu cầu gọi video call và xác minh thông tin bệnh viện.', scoreEffect: 8 },
          { text: 'Đây là chiêu bẫy tình kinh điển. Ngắt liên lạc ngay!', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'fake-charity',
    title: 'Kêu gọi Từ thiện Giả mạo',
    description: 'Dựng câu chuyện thương tâm để kêu gọi quyên góp',
    difficulty: 'Trung bình',
    icon: '🙏',
    category: 'emotional-trust',
    steps: [
      {
        speaker: 'System',
        text: '📱 Tin nhắn được chia sẻ rộng rãi trên Facebook...'
      },
      {
        speaker: 'Charity',
        text: '💔 KÊU GỌI GIÚP ĐỠ KHẨN CẤP 💔\n\nBé Nguyễn Văn A (5 tuổi) ở Đắk Lắk bị ung thư máu giai đoạn cuối. Gia đình nghèo, không đủ tiền điều trị.'
      },
      {
        speaker: 'Charity',
        text: 'Chi phí điều trị: 500 triệu\nĐã quyên góp được: 50 triệu\n\n🙏 Mọi đóng góp xin gửi về:\nSTK: 0123456789 - Nguyễn Văn B\nMoMo: 0987654321\n\n[Hình ảnh bé gái gầy yếu trên giường bệnh]'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Thương quá! Chuyển tiền ngay để giúp bé.', scoreEffect: -100 },
          { text: 'Tìm kiếm thông tin về trường hợp này, kiểm tra tính xác thực.', scoreEffect: 10 },
          { text: 'Chỉ ủng hộ qua các tổ chức từ thiện uy tín, minh bạch.', scoreEffect: 10 }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 4: LỪA ĐẢO GIAO DỊCH & DỊCH VỤ ====================
  {
    id: 'fake-shop',
    title: 'Mua sắm Online',
    description: 'Shop bán hàng giá rẻ, nhận tiền rồi chặn liên lạc',
    difficulty: 'Dễ',
    icon: '🛒',
    category: 'transaction-service',
    steps: [
      {
        speaker: 'System',
        text: '📱 Quảng cáo Facebook: "🔥 SALE SỐC - THANH LÝ GẤP 🔥"'
      },
      {
        speaker: 'Hacker',
        text: 'iPhone 15 Pro Max 256GB\n\n💥 Giá gốc: 30.000.000đ\n💥 Giá sale: 8.000.000đ\n\nHàng xách tay từ Mỹ, fullbox, bảo hành 12 tháng.\n\nChỉ còn 5 máy cuối cùng! Ai nhanh tay nhất!'
      },
      {
        speaker: 'Hacker',
        text: 'Liên hệ ngay: Zalo 0999999999\n\n⚠️ Chỉ nhận CHUYỂN KHOẢN TRƯỚC\n⚠️ KHÔNG NHẬN COD\n\nShop uy tín 5⭐ (120 reviews)'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Giá quá tốt! Chuyển khoản ngay trước khi hết hàng.', scoreEffect: -100 },
          { text: 'Kiểm tra thông tin shop, yêu cầu xem giấy tờ, gặp mặt trực tiếp.', scoreEffect: 8 },
          { text: 'Giá rẻ phi lý, không nhận COD = Lừa đảo! Bỏ qua ngay.', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'loan-shark',
    title: 'Tín dụng đen & Cho vay Online',
    description: 'App vay tiền nhanh, đánh cắp thông tin cá nhân',
    difficulty: 'Trung bình',
    icon: '💳',
    category: 'transaction-service',
    steps: [
      {
        speaker: 'System',
        text: '📱 Quảng cáo trên TikTok, YouTube...'
      },
      {
        speaker: 'Hacker',
        text: '💰 VAY TIỀN SIÊU TỐC 💰\n\n✅ Giải ngân trong 5 phút\n✅ KHÔNG CẦN thế chấp\n✅ KHÔNG CẦN chứng minh thu nhập\n✅ KHÔNG kiểm tra nợ xấu'
      },
      {
        speaker: 'Hacker',
        text: 'Tải app "VayNhanh247" ngay!\n\nChỉ cần:\n- CMND/CCCD\n- Cho phép truy cập Danh bạ\n- Cho phép truy cập Thư viện ảnh\n\nVay 1-30 triệu, lãi suất CHỈ 0.3%/ngày'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Cần tiền gấp! Tải app và cấp quyền ngay.', scoreEffect: -100 },
          { text: 'Kiểm tra app có giấy phép của Ngân hàng Nhà nước không.', scoreEffect: 8 },
          { text: 'Lãi suất 0.3%/ngày = 109%/năm! Đây là tín dụng đen, tuyệt đối tránh xa!', scoreEffect: 10 }
        ]
      }
    ]
  },
  {
    id: 'malware-scam',
    title: 'Cài đặt Phần mềm Độc hại',
    description: 'Dụ cài app lạ, crack, extension để đánh cắp dữ liệu',
    difficulty: 'Khó',
    icon: '🦠',
    category: 'transaction-service',
    steps: [
      {
        speaker: 'System',
        text: '💻 Bạn đang tìm cách tải phần mềm Adobe Photoshop...'
      },
      {
        speaker: 'System',
        text: 'Tìm thấy trang web: photoshop-free-download.com'
      },
      {
        speaker: 'Hacker',
        text: '🎨 PHOTOSHOP 2025 FULL CRACK\n\n✨ Bản quyền vĩnh viễn\n✨ Kích hoạt 1 click\n✨ Đầy đủ tính năng\n\nDownload ngay: [DOWNLOAD_NOW.exe]\n\n⭐⭐⭐⭐⭐ (2,540 lượt tải)'
      },
      {
        speaker: 'System',
        text: '⚠️ Windows Defender: File này có thể gây hại cho thiết bị của bạn.\n\n[Cho phép] [Chặn]'
      },
      {
        speaker: 'An',
        text: '...',
        choices: [
          { text: 'Click "Cho phép" và cài đặt. Nhiều người tải rồi, chắc an toàn.', scoreEffect: -100 },
          { text: 'Tìm hiểu thêm về trang web này và tìm nguồn khác uy tín hơn.', scoreEffect: 5 },
          { text: 'Tuyệt đối KHÔNG tải phần mềm crack! Mua bản quyền hoặc dùng bản free.', scoreEffect: 10 }
        ]
      }
    ]
  }
];

// Export scenario đầu tiên để tương thích ngược
export const scenario = scenarios[0].steps;
