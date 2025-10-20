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

// Định nghĩa các kịch bản chi tiết
export const scenarios: Scenario[] = [
  // ==================== CHUYÊN ĐỀ 1: LỪA ĐẢO GIẢ MẠO ====================
  
  // Tình huống 1.1: Người Bạn Thân Giả Mạo (case_friend)
  {
    id: 'case_friend',
    title: 'Người Bạn Thân Giả Mạo',
    description: 'Kẻ xấu chiếm đoạt tài khoản Facebook của bạn thân',
    difficulty: 'Trung bình',
    icon: '👥',
    category: 'impersonation',
    steps: [
      {
        id: 1,
        speaker: 'Mai',
        text: 'An ơi, nhớ cái áo hôm trước mình đi mua chung không? Tớ mặc đi làm ai cũng khen =)))'
      },
      {
        id: 2,
        speaker: 'An',
        text: '[Đáp lại một cách thân thiện]',
        autoProgress: true
      },
      {
        id: 3,
        speaker: 'Mai',
        text: 'À mà này, tớ đang gặp chút chuyện... tài khoản ngân hàng bị lỗi, cho tớ mượn tạm 500k được không? Tối nay hệ thống hoạt động lại là tớ trả liền.'
      },
      {
        id: 4,
        speaker: 'Mai',
        text: 'Cậu chuyển vào link này giúp tớ nhé, đừng chuyển vào STK cũ. Đây là ví điện tử của đối tác, tớ đang cần thanh toán gấp cho họ. Thanks cậu nhiều!\n\n[http://nhan-tien-nhanh.xyz/MOMO-NHAN-500K]',
        choices: [
          {
            text: 'Ok, chuyển liền đây.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Kẻ lừa đảo thường tạo ra sự khẩn cấp để bạn không có thời gian suy nghĩ. Không bao giờ chuyển tiền qua các đường link lạ.'
          },
          {
            text: 'Sao link lạ vậy? Cậu gọi điện cho tớ xác nhận đi.',
            scoreEffect: 0,
            nextStep: 5
          }
        ]
      },
      {
        id: 5,
        speaker: 'Mai',
        text: 'Ôi máy tớ đang họp, không gọi được. Mà cũng sắp hết pin rồi. Cậu cứ chuyển đi, tin tớ đi mà, gấp lắm rồi!',
        choices: [
          {
            text: 'Thôi được rồi, thấy cậu gấp quá, tớ chuyển tạm.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Kẻ lừa đảo luôn có lý do để từ chối xác minh. Khi bị áp lực, hãy càng phải tỉnh táo.'
          },
          {
            text: 'Không gọi xác nhận thì tớ không chuyển. Bạn bè thật sự sẽ hiểu.',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Bạn đã làm đúng. Xác minh qua một kênh khác (gọi điện, gặp mặt) là nguyên tắc vàng trước mọi yêu cầu về tài chính.'
          }
        ]
      }
    ]
  },

  // Tình huống 1.2: Giả danh Công an (case_police)
  {
    id: 'case_police',
    title: 'Giả danh Công an',
    description: 'Kẻ lừa đảo giả danh công an điều tra vụ án rửa tiền',
    difficulty: 'Khó',
    icon: '👮',
    category: 'impersonation',
    steps: [
      {
        id: 1,
        speaker: 'System',
        text: '📞 Cuộc gọi đến từ: 0692-XXX-XXX'
      },
      {
        id: 2,
        speaker: 'Police',
        text: 'Chào anh/chị An, tôi là Thiếu úy Nguyễn Văn B, gọi từ Cơ quan Cảnh sát Điều tra. Chúng tôi thông báo anh/chị có liên quan đến một chuyên án rửa tiền xuyên quốc gia. Yêu cầu anh/chị hợp tác để làm việc.'
      },
      {
        id: 3,
        speaker: 'Police',
        text: 'Vì tính chất bảo mật của chuyên án, mọi thông tin trao đổi phải được giữ bí mật tuyệt đối, không được tiết lộ cho bất kỳ ai, kể cả người thân.',
        choices: [
          {
            text: 'Vâng, tôi hiểu rồi. Tôi phải làm gì ạ?',
            scoreEffect: 0,
            nextStep: 4
          },
          {
            text: 'Tôi sẽ không làm việc qua điện thoại. Vui lòng gửi giấy triệu tập chính thức về địa chỉ của tôi, hoặc cho tôi địa chỉ trụ sở để tôi lên làm việc trực tiếp.',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Yêu cầu làm việc trực tiếp tại trụ sở là cách hiệu quả nhất để vạch mặt kẻ lừa đảo giả danh cơ quan chức năng.'
          }
        ]
      },
      {
        id: 4,
        speaker: 'Police',
        text: 'Để chứng minh anh/chị trong sạch, chúng tôi cần anh/chị chuyển toàn bộ số tiền trong tài khoản của mình vào một "tài khoản tạm giữ của cơ quan điều tra" để xác minh. Sau 24h, nếu không có vấn đề gì, số tiền sẽ được hoàn lại.',
        choices: [
          {
            text: 'Tôi sẽ chuyển tiền ngay.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Cơ quan chức năng không bao giờ làm việc qua điện thoại và không bao giờ yêu cầu người dân chuyển tiền vào tài khoản cá nhân để xác minh.'
          },
          {
            text: 'Tôi cần thời gian để suy nghĩ.',
            scoreEffect: 0,
            nextStep: 5
          }
        ]
      },
      {
        id: 5,
        speaker: 'Police',
        text: 'Nếu không hợp tác, chúng tôi sẽ ra lệnh bắt tạm giam anh/chị ngay lập tức!',
        choices: [
          {
            text: 'Tôi sợ quá... Tôi sẽ chuyển tiền ngay!',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Đừng để nỗi sợ hãi chi phối. Cơ quan chức năng không bao giờ đe dọa bắt giữ qua điện thoại mà không có giấy tờ hợp lệ.'
          },
          {
            text: 'Tôi sẽ không làm việc qua điện thoại. Hãy gửi giấy triệu tập chính thức!',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Tuyệt vời! Bạn đã giữ vững lập trường dù bị đe dọa. Luôn yêu cầu giấy tờ chính thức khi làm việc với cơ quan nhà nước.'
          }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 2: CẠM BẪY "VIỆC NHẸ LƯƠNG CAO" ====================
  
  // Tình huống 2.1: Cộng tác viên Online (case_job)
  {
    id: 'case_job',
    title: 'Cộng tác viên Online',
    description: 'Lời mời làm CTV đặt đơn hàng ảo với hoa hồng cao',
    difficulty: 'Trung bình',
    icon: '💼',
    category: 'easy-money',
    steps: [
      {
        id: 1,
        speaker: 'System',
        text: '📱 Bạn thấy quảng cáo trên Facebook về việc làm tại nhà với thu nhập cao...'
      },
      {
        id: 2,
        speaker: 'Recruiter',
        text: 'Chào bạn, công việc rất đơn giản. Bạn chỉ cần đặt các đơn hàng trên sàn TMĐT của chúng tôi để tăng tương tác. Mỗi đơn hàng bạn sẽ được hoàn lại tiền gốc + 10% hoa hồng.'
      },
      {
        id: 3,
        speaker: 'Recruiter',
        text: 'Hãy thử với nhiệm vụ đầu tiên nhé. Bạn chuyển 100k để đặt đơn hàng này. Ngay sau khi hoàn thành, bạn sẽ nhận lại 110k.',
        choices: [
          {
            text: 'Ok, tôi thử.',
            scoreEffect: 0,
            nextStep: 4
          },
          {
            text: 'Tôi không muốn bỏ tiền ra trước. Cảm ơn.',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Một quyết định sáng suốt. Không có công việc hợp pháp nào yêu cầu nhân viên phải nộp tiền để được làm việc.'
          }
        ]
      },
      {
        id: 4,
        speaker: 'System',
        text: '💸 Bạn chuyển 100k và thực sự nhận lại 110k!'
      },
      {
        id: 5,
        speaker: 'Recruiter',
        text: 'Chúc mừng bạn! Bây giờ là nhiệm vụ lớn hơn để nhận hoa hồng cao hơn. Hãy chuyển 1 triệu để đặt đơn hàng này, bạn sẽ nhận lại 1 triệu 200k.',
        choices: [
          {
            text: 'Tuyệt vời, tôi tham gia.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Đây là chiêu trò "thả con săn sắt, bắt con cá rô". Kẻ lừa đảo dùng một món lợi nhỏ ban đầu để xây dựng lòng tin trước khi chiếm đoạt số tiền lớn.'
          },
          {
            text: 'Tôi nghĩ 110k là đủ rồi. Tôi sẽ dừng lại.',
            scoreEffect: 10,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Bạn đã nhận ra dấu hiệu của một cái bẫy. Nếu một công việc yêu cầu bạn phải bỏ tiền ra trước, đó gần như chắc chắn là lừa đảo.'
          }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 3: CẠM BẪY TÌNH CẢM & LÒNG TIN ====================
  
  // Tình huống 3.1: Bẫy tình Online (case_romance)
  {
    id: 'case_romance',
    title: 'Bẫy tình Online',
    description: 'Kẻ xấu xây dựng mối quan hệ tình cảm để lừa tiền',
    difficulty: 'Khó',
    icon: '💕',
    category: 'emotional-trust',
    steps: [
      {
        id: 1,
        speaker: 'System',
        text: '💬 Sau một thời gian nói chuyện, bạn đã phát triển mối quan hệ tình cảm với "Alex", kỹ sư dầu khí người Mỹ đang làm việc ngoài giàn khoan...'
      },
      {
        id: 2,
        speaker: 'Alex',
        text: 'Em yêu, anh có một món quà bất ngờ muốn gửi về cho em nhân dịp sinh nhật. Đó là một chiếc iPhone mới nhất, một ít trang sức và 20,000 USD tiền mặt anh để trong hộp. Anh đã gửi qua một công ty vận chuyển đặc biệt rồi.'
      },
      {
        id: 3,
        speaker: 'System',
        text: '📱 Vài ngày sau, bạn nhận được cuộc gọi từ số lạ...'
      },
      {
        id: 4,
        speaker: 'Customs',
        text: 'Chào chị An, chúng tôi từ Cục Hải quan. Chị có một kiện hàng từ ông Alex gửi về. Tuy nhiên, chúng tôi phát hiện bên trong có một lượng lớn ngoại tệ chưa khai báo. Đây là hành vi vi phạm pháp luật. Chị phải nộp một khoản phí 20 triệu VNĐ để "bảo lãnh" và tránh bị truy tố hình sự.',
        choices: [
          {
            text: 'Trời ơi, thật vậy sao? Tôi phải chuyển tiền vào đâu?',
            scoreEffect: 0,
            nextStep: 5
          },
          {
            text: 'Tôi không tin. Hãy cho tôi xem giấy tờ, văn bản chính thức từ Cục Hải quan.',
            scoreEffect: 0,
            nextStep: 8
          }
        ]
      },
      {
        id: 5,
        speaker: 'System',
        text: '💬 Bạn nhắn tin cho Alex trong hoảng loạn...'
      },
      {
        id: 6,
        speaker: 'Alex',
        text: 'Em đừng lo, chỉ là thủ tục thôi. Em cứ đóng tiền cho họ đi, khi nhận được quà em lấy số tiền mặt anh gửi để bù lại là được. Anh đang ở ngoài biển không chuyển tiền được, em giúp anh nhé.',
        choices: [
          {
            text: 'Vâng, để em xoay sở chuyển cho họ.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Đây là một kịch bản lừa đảo "bẫy tình" kinh điển. Kẻ xấu tạo ra một món lợi lớn (quà tặng giá trị) sau đó dựng lên một rắc rối (bị kẹt ở hải quan) để moi tiền.'
          },
          {
            text: 'Em không có đủ tiền. Hay là mình đừng nhận quà nữa anh ạ.',
            scoreEffect: 0,
            nextStep: 7
          }
        ]
      },
      {
        id: 7,
        speaker: 'Alex',
        text: 'Em không thương anh sao? Anh đã mất công chuẩn bị tất cả vì em. Chỉ một chút khó khăn mà em đã bỏ cuộc rồi...',
        choices: [
          {
            text: 'Em xin lỗi... Để em vay mượn chuyển cho anh.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Kẻ lừa đảo đã thành công trong việc thao túng cảm xúc của bạn. Đừng bao giờ để tình cảm chi phối các quyết định tài chính quan trọng.'
          },
          {
            text: 'Nếu anh thật sự thương em, anh sẽ hiểu khó khăn của em. Tôi từ chối!',
            scoreEffect: 15,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Tuyệt vời! Bạn đã không để bị thao túng bởi cảm xúc. Một mối quan hệ thật sự không bao giờ đòi hỏi bạn phải chịu gánh nặng tài chính.'
          }
        ]
      },
      {
        id: 8,
        speaker: 'Customs',
        text: 'Đây là thông tin mật, không thể tiết lộ. Nếu chị không hợp tác, chúng tôi sẽ lập biên bản và chuyển hồ sơ cho công an!',
        choices: [
          {
            text: 'Tôi sợ quá... Thôi được rồi, tôi sẽ chuyển.',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Đừng hoảng sợ trước lời đe dọa. Hãy nhớ rằng, mọi giao dịch với cơ quan nhà nước đều phải có giấy tờ và hóa đơn rõ ràng.'
          },
          {
            text: 'Cứ làm những gì các người phải làm. Tôi sẽ liên hệ trực tiếp với Cục Hải quan để xác minh.',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Bạn đã giữ được sự bình tĩnh và đưa ra quyết định sáng suốt. Luôn luôn kiểm tra thông tin qua các kênh chính thống thay vì tin vào một cuộc gọi/tin nhắn lạ.'
          }
        ]
      }
    ]
  },

  // ==================== CHUYÊN ĐỀ 4: LỪA ĐẢO GIAO DỊCH & DỊCH VỤ ====================
  
  // Tình huống 4.1: Bưu kiện Bị Kẹt (case_package)
  {
    id: 'case_package',
    title: 'Bưu kiện Bị Kẹt',
    description: 'Tin nhắn giả mạo về bưu kiện bị kẹt yêu cầu cập nhật thông tin',
    difficulty: 'Trung bình',
    icon: '📦',
    category: 'transaction-service',
    steps: [
      {
        id: 1,
        speaker: 'System',
        text: '📱 Bạn đang chờ một bưu kiện quan trọng từ người thân ở nước ngoài...'
      },
      {
        id: 2,
        speaker: 'SMS',
        text: '[GiaoHangExpress] Thong bao: Buu kien DH123456XYZ cua ban tu MỸ da ve den VN nhung bi ket tai hai quan do sai dia chi. Vui long truy cap vao [http://giaohangexpress-vn.com] de cap nhat lai thong tin va thanh toan phi 25,000 VND de nhan hang.'
      },
      {
        id: 3,
        speaker: 'System',
        text: '🌐 Bạn nhấp vào link. Trang web hiển thị giao diện rất giống một công ty chuyển phát nhanh lớn, yêu cầu điền thông tin...'
      },
      {
        id: 4,
        speaker: 'System',
        text: '📝 Form yêu cầu:\n- Họ tên, SĐT, Địa chỉ\n- Số thẻ thanh toán\n- Tên chủ thẻ\n- Ngày hết hạn\n- Mã CVV',
        choices: [
          {
            text: 'Điền đầy đủ thông tin thẻ và nhấn "Thanh toán".',
            scoreEffect: -100,
            isGameOver: true,
            lessonTitle: 'Bạn đã thua!',
            lessonText: 'Mục tiêu của kẻ lừa đảo không phải là 25,000 VND. Đó chỉ là cái cớ để bạn nhập thông tin thẻ. Một khi có đủ thông tin, chúng có thể rút toàn bộ tiền của bạn. Không bao giờ nhập mã CVV vào các trang web không đáng tin cậy.'
          },
          {
            text: 'Chỉ điền thông tin cá nhân, không điền thông tin thẻ. Đóng trang web lại.',
            scoreEffect: -20,
            isGameOver: true,
            lessonTitle: 'Chưa an toàn!',
            lessonText: 'Dù không mất tiền, bạn đã để lộ thông tin cá nhân. Những thông tin này sẽ được sử dụng cho các cuộc tấn công trong tương lai. Hãy cẩn trọng với mọi yêu cầu cung cấp thông tin.'
          },
          {
            text: 'Nhận ra URL trang web là giả mạo. Đóng ngay lập tức và không điền bất cứ gì.',
            scoreEffect: 20,
            isGameOver: true,
            lessonTitle: 'Chiến thắng!',
            lessonText: 'Bạn đã thể hiện kỹ năng quan sát tuyệt vời. Luôn kiểm tra kỹ tên miền (URL) của trang web. Các trang giả mạo thường có những chi tiết khác biệt nhỏ (ví dụ: .com-vn, .xyz, hoặc sai một ký tự).'
          }
        ]
      }
    ]
  }
];

// Export scenario đầu tiên để tương thích ngược
export const scenario = scenarios[0].steps;
