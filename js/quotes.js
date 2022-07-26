const quotes = [
  {
    quote: "때론 기회를 놓치는 것이 기회일 수 있다.",
    author: "영화<벤자민 버튼의 시간은 거꾸로 간다>",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라",
    author: "제임스 딘",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸은 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모나건",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
    author: "사무엘 존슨",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다",
    author: "찰리 채플린",
  },
  {
    quote: "먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임",
  },
  {
    quote: "행복은 습관이다 그것을 몸에 지녀라",
    author: "허버드",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스 다윈",
  },
  {
    quote: "나만이 내 인생을 바꿀 수 있다 아무도 날 대신해 줄 수 없다",
    author: "캐롤 버넷",
  },
  {
    quote:
      "이미 끝나버린 일을 후회하기보다는 하고 싶었던 일들을 하지 못한 것을 후회하라",
    author: "탈무드",
  },
  {
    quote:
      "고난의 시기에 동요하지 않는 것, 이건은 진정 칭찬받을 만한 뛰어난 인물의 증거이다",
    author: "베토벤",
  },
  {
    quote: "작은 기회로부터 종종 위대한 업적이 시작된다",
    author: "데모스테네스",
  },
  {
    quote: "세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다",
    author: "헬렌 켈러",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다",
    author: "메이벨 뉴컴버",
  },
  {
    quote:
      "원하는 것을 얻기 위한 첫 번째 단게는 내가 무엇을 원하는지 결정하는 것이다",
    author: "벤스타인",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
