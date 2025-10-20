import { ScenarioStep } from '../types/game';

export const scenario: ScenarioStep[] = [
  {
    speaker: 'Mai',
    text: 'An ơi, đang làm gì đó?'
  },
  {
    speaker: 'Mai',
    text: 'Tớ đang có việc gấp quá mà tài khoản bị lỗi, cho tớ mượn tạm 500k được không? Tối tớ trả lại ngay.'
  },
  {
    speaker: 'Mai',
    text: 'Cậu chuyển vào link này giúp tớ nhé, đừng chuyển vào STK cũ. Thanks cậu nhiều! [http://nhan-tien-nhanh.xyz/MOMO-NHAN-500K]'
  },
  {
    speaker: 'An',
    text: '...',
    choices: [
      { text: 'Ok, chuyển liền đây.', scoreEffect: -100 },
      { text: 'Sao link lạ vậy? Cậu gọi điện cho tớ xác nhận đi.', scoreEffect: 0 },
      { text: 'Hỏi vay tiền mà không gọi, chắc chắn là lừa đảo rồi.', scoreEffect: 10 }
    ]
  }
];
