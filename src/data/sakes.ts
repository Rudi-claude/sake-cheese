import { Sake } from '@/types';

// 더미 사케 데이터 (Supabase 연동 전 사용)
export const allSakes: Sake[] = [
  // 니가타
  { id: '1', name_ko: '고시노칸바이', name_ja: '越乃寒梅', prefecture_id: 'niigata', brewery: '이시모토 주조', type: '준마이긴조', description: '니가타를 대표하는 담백하고 깔끔한 사케. 차갑게 마시면 과일향이 은은하게 퍼집니다.', image_url: 'https://sakelv.com/wp-content/uploads/2023/02/product01_001-209x300.jpg', avg_rating: 4.5 },
  { id: '2', name_ko: '핫카이산', name_ja: '八海山', prefecture_id: 'niigata', brewery: '핫카이산 주조', type: '준마이다이긴조', description: '깨끗한 맛과 부드러운 목넘김이 특징. 음식과 함께 즐기기 좋습니다.', image_url: 'https://www.hakkaisan.co.jp/wp-content/uploads/2024/05/seisyu_720ml_-347x800.jpg', avg_rating: 4.3 },
  { id: '3', name_ko: '구보타 만쥬', name_ja: '久保田 萬寿', prefecture_id: 'niigata', brewery: '아사히 주조', type: '준마이다이긴조', description: '니가타 사케의 정수. 화려한 향과 깊은 맛의 조화가 일품입니다.', image_url: 'https://www.asahi-shuzo.co.jp/_src/89168428/kubota_manjyu_main.jpg', avg_rating: 4.7 },

  // 야마가타
  { id: '4', name_ko: '쥬욘다이', name_ja: '十四代', prefecture_id: 'yamagata', brewery: '타카기 주조', type: '준마이다이긴조', description: '환상의 사케로 불리는 명품. 과일향이 풍부하고 감미로운 맛이 특징입니다.', image_url: 'https://www.saketime.jp/img/brand/review/241/thum_5c6a1ea11561fa9ddd09ca6f41980956.jpg', avg_rating: 4.9 },
  { id: '5', name_ko: '데와자쿠라', name_ja: '出羽桜', prefecture_id: 'yamagata', brewery: '데와자쿠라 주조', type: '긴조', description: '체리와 같은 과일향이 특징. 가성비 좋은 사케로 유명합니다.', image_url: 'https://www.dewazakura.co.jp/item/img/oka-2-main.png', avg_rating: 4.2 },

  // 아키타
  { id: '6', name_ko: '아라마사', name_ja: '新政', prefecture_id: 'akita', brewery: '아라마사 주조', type: '준마이', description: '전통 양조법을 고수하는 혁신적인 사케. 산미가 있어 와인처럼 즐길 수 있습니다.', image_url: 'https://www.saketime.jp/img/brand/review/113/thum_1d267feb45194a8866d669f117da5773.jpg', avg_rating: 4.6 },
  { id: '7', name_ko: '유키노보샤', name_ja: '雪の茅舎', prefecture_id: 'akita', brewery: '사이야 주조', type: '준마이긴조', description: '눈처럼 깨끗하고 부드러운 맛. 자연의 힘만으로 양조합니다.', image_url: 'https://www.yukinobosha.jp/wordpress/wp-content/uploads/2022/12/jungin72.jpg', avg_rating: 4.4 },

  // 후쿠시마
  { id: '8', name_ko: '히로키', name_ja: '飛露喜', prefecture_id: 'fukushima', brewery: '히로키 주조', type: '준마이긴조', description: '투명감 있는 맛과 은은한 향이 특징.', image_url: 'https://thesakemerchantbkk.com/wp-content/uploads/2025/02/Hiroki-Junmai-Daiginjo.png', avg_rating: 4.5 },

  // 효고
  { id: '9', name_ko: '기쿠마사무네', name_ja: '菊正宗', prefecture_id: 'hyogo', brewery: '기쿠마사무네 주조', type: '혼조조', description: '400년 전통의 나다 대표 사케. 드라이하고 깔끔한 맛이 특징입니다.', image_url: 'https://www.kikumasamune.com/img/product/junmaidaiginjyou.png', avg_rating: 4.0 },
  { id: '10', name_ko: '하쿠쓰루', name_ja: '白鶴', prefecture_id: 'hyogo', brewery: '하쿠쓰루 주조', type: '준마이', description: '나다의 대표 브랜드. 균형 잡힌 맛으로 다양한 음식과 어울립니다.', image_url: 'https://saketaro.com/cdn/shop/files/hakutsuru-junmai-sake-1800ml-481092.jpg?v=1718175012', avg_rating: 3.9 },

  // 교토
  { id: '11', name_ko: '겟게이칸', name_ja: '月桂冠', prefecture_id: 'kyoto', brewery: '겟게이칸', type: '준마이', description: '후시미의 명수로 빚은 전통 사케. 부드럽고 깔끔한 맛입니다.', image_url: 'https://us.gekkeikan.com/wp-content/uploads/2025/02/TOKUBETSU-FRONT.png', avg_rating: 3.8 },

  // 야마구치
  { id: '12', name_ko: '닷사이', name_ja: '獺祭', prefecture_id: 'yamaguchi', brewery: '아사히 주조', type: '준마이다이긴조', description: '야마다니시키 쌀을 정미율 23%까지 깎아 만든 프리미엄 사케.', image_url: 'https://dassai.com/us/files/dassai45.jpg', avg_rating: 4.8 },
  { id: '13', name_ko: '닷사이 45', name_ja: '獺祭 45', prefecture_id: 'yamaguchi', brewery: '아사히 주조', type: '준마이다이긴조', description: '정미율 45%의 닷사이 엔트리 모델. 가성비 좋은 프리미엄 사케.', image_url: 'https://dassai.com/us/files/dassai45.jpg', avg_rating: 4.5 },

  // 히로시마
  { id: '14', name_ko: '카모츠루', name_ja: '賀茂鶴', prefecture_id: 'hiroshima', brewery: '카모츠루 주조', type: '다이긴조', description: '히로시마의 연수로 만든 부드러운 사케.', image_url: 'https://www.kamotsuru.jp/en/wp-content/uploads/2023/01/tokusei-gold-kamotsuru-831x1024.jpg', avg_rating: 4.3 },

  // 이시카와
  { id: '15', name_ko: '덴구마이', name_ja: '天狗舞', prefecture_id: 'ishikawa', brewery: '샤타 주조', type: '준마이', description: '야마하이 양조법으로 만든 깊은 맛의 사케.', image_url: 'https://www.tengumai.co.jp/contents/wp-content/uploads/2017/10/tokubetsujunmai_common_s.jpg', avg_rating: 4.2 },

  // 시즈오카
  { id: '16', name_ko: '이소지만', name_ja: '磯自慢', prefecture_id: 'shizuoka', brewery: '이소지만 주조', type: '준마이다이긴조', description: '시즈오카의 맑은 물로 만든 섬세한 사케.', image_url: 'https://sakelv.com/wp-content/uploads/2023/01/item_v01-300x221.jpg', avg_rating: 4.6 },

  // 나가노
  { id: '17', name_ko: '마스미', name_ja: '真澄', prefecture_id: 'nagano', brewery: '미야사카 주조', type: '준마이긴조', description: '알프스의 맑은 물로 만든 프리미엄 사케. 7호 효모의 발상지.', image_url: 'https://www.masumi.co.jp/en/wp/wp-content/themes/masumi/img/product/nanago.jpg', avg_rating: 4.4 },

  // 사이타마
  { id: '18', name_ko: '신카메', name_ja: '神亀', prefecture_id: 'saitama', brewery: '신카메 주조', type: '준마이', description: '순수 준마이만 만드는 고집있는 양조장.', image_url: 'https://umamimart.com/cdn/shop/products/shinkame.jpg?v=1510187011', avg_rating: 4.3 },

  // 아오모리
  { id: '19', name_ko: '다사이', name_ja: '田酒', prefecture_id: 'aomori', brewery: '니시다 주조', type: '준마이다이긴조', description: '쌀의 맛을 극대화한 사케. 구하기 어려운 명주.', image_url: 'https://cestlasake.com/wp-content/uploads/Sake-Bottle-Denshu-Tokubetsu-Junmai.png', avg_rating: 4.7 },

  // 미야기
  { id: '20', name_ko: '우라카스미', name_ja: '浦霞', prefecture_id: 'miyagi', brewery: '사우라 주조', type: '준마이긴조', description: '미야기를 대표하는 담백하고 깔끔한 사케.', image_url: 'https://www.urakasumi.com/en/wp-content/uploads/2021/03/201_bottle.png', avg_rating: 4.1 },

  // 홋카이도
  { id: '21', name_ko: '오토코야마', name_ja: '男山', prefecture_id: 'hokkaido', brewery: '오토코야마 주조', type: '준마이다이긴조', description: '홋카이도의 맑은 물과 쌀로 만든 명주.', image_url: 'https://www.tippsysake.com/cdn/shop/files/otokoyama-tokubetsu-junmai-1200.jpg?v=1733785723', avg_rating: 4.2 },

  // 도쿄
  { id: '22', name_ko: '사와노쓰루', name_ja: '澤乃井', prefecture_id: 'tokyo', brewery: '오자와 주조', type: '준마이', description: '도쿄 오쿠타마의 명수로 빚은 사케.', image_url: 'https://www.sawanoi-sake.com/cms/wp-content/uploads/2023/08/sake_junmaidaiginjo1800.jpg', avg_rating: 4.0 },

  // 오사카
  { id: '23', name_ko: '아키시카', name_ja: '秋鹿', prefecture_id: 'osaka', brewery: '아키시카 주조', type: '준마이긴조', description: '오사카 북부에서 만드는 자연 농법 사케.', image_url: 'https://angelsatelemons.com/cdn/shop/products/IMG_7205.jpg?v=1590111014', avg_rating: 4.3 },

  // 후쿠이
  { id: '24', name_ko: '쿠로류', name_ja: '黒龍', prefecture_id: 'fukui', brewery: '쿠로류 주조', type: '준마이긴조', description: '1804년 창업의 후쿠이현 명문 주조장. 깊고 우아한 맛이 특징이며, 일본 다이긴조 붐을 이끈 선구적 사케입니다.', image_url: null, avg_rating: 4.5 },
  { id: '36', name_ko: '본', name_ja: '梵', prefecture_id: 'fukui', brewery: '가토 기치헤이 상점', type: '준마이다이긴조', description: '산스크리트어로 "순수한 진리"를 뜻하는 후쿠이현의 명주. 100개국 이상에 수출되며, 장기숙성으로 유명합니다.', image_url: null, avg_rating: 4.3 },

  // 고치
  { id: '25', name_ko: '스이게이', name_ja: '酔鯨', prefecture_id: 'kochi', brewery: '스이게이 주조', type: '준마이긴조', description: '고치현의 대표 사케로, 깔끔하고 드라이한 맛이 특징. 해산물 요리와 환상적인 궁합을 자랑합니다.', image_url: null, avg_rating: 4.2 },

  // 이와테
  { id: '26', name_ko: '난부비진', name_ja: '南部美人', prefecture_id: 'iwate', brewery: '난부비진', type: '준마이긴조', description: '이와테현의 명주로, 5대에 걸쳐 양조해온 전통. 우아하고 깨끗한 맛으로 국제적 평가가 높습니다.', image_url: null, avg_rating: 4.3 },

  // 사가
  { id: '27', name_ko: '나베시마', name_ja: '鍋島', prefecture_id: 'saga', brewery: '후쿠치요 주조', type: '준마이긴조', description: 'IWC 챔피언 사케를 수상한 사가현의 실력파. 과일향이 풍부하고 깔끔한 뒷맛이 특징입니다.', image_url: null, avg_rating: 4.5 },
  { id: '48', name_ko: '아마부키', name_ja: '天吹', prefecture_id: 'saga', brewery: '아마부키 주조', type: '준마이긴조', description: '꽃에서 채취한 "꽃 효모"로 빚는 독특한 사케. 화사하고 향긋한 맛으로 젊은 층에게 인기입니다.', image_url: null, avg_rating: 4.1 },
  { id: '52', name_ko: '시치다', name_ja: '七田', prefecture_id: 'saga', brewery: '텐잔 주조', type: '준마이', description: '사가현산 쌀의 감칠맛을 극대화한 특약점 한정 사케. 차분한 향과 깔끔한 뒷맛이 매력적입니다.', image_url: null, avg_rating: 4.3 },

  // 히로시마
  { id: '28', name_ko: '우고노쓰키', name_ja: '雨後の月', prefecture_id: 'hiroshima', brewery: '아이하라 주조', type: '준마이다이긴조', description: '히로시마현 쿠레시의 명주. 초연수를 사용한 섬세하고 우아한 긴조향이 특징입니다.', image_url: null, avg_rating: 4.6 },
  { id: '51', name_ko: '타케쓰루', name_ja: '竹鶴', prefecture_id: 'hiroshima', brewery: '타케쓰루 주조', type: '준마이', description: '일본 위스키의 아버지 "맛산"의 생가. 키모토 양조법으로 감칠맛이 깊은 순미주만 생산합니다.', image_url: null, avg_rating: 4.2 },

  // 아이치
  { id: '29', name_ko: '카모시비토 쿠헤이지', name_ja: '醸し人九平次', prefecture_id: 'aichi', brewery: '만조 양조', type: '준마이다이긴조', description: '프랑스 미쉐린 레스토랑에도 납품되는 명주. 와인처럼 세련된 산미와 깊은 맛이 특징입니다.', image_url: null, avg_rating: 4.5 },

  // 후쿠시마
  { id: '30', name_ko: '샤라쿠', name_ja: '写楽', prefecture_id: 'fukushima', brewery: '미야이즈미 메이조', type: '준마이긴조', description: '"환상의 술"로 불리는 후쿠시마의 명주. 과일향이 풍부하고 균형 잡힌 맛으로 전국적인 인기를 얻고 있습니다.', image_url: null, avg_rating: 4.6 },
  { id: '50', name_ko: '다이시치', name_ja: '大七', prefecture_id: 'fukushima', brewery: '다이시치 주조', type: '준마이', description: '전통 키모토 양조법의 최고봉. G8 정상회담 만찬주로 선정된 바 있는 명주입니다.', image_url: null, avg_rating: 4.3 },

  // 미에
  { id: '31', name_ko: '지콘', name_ja: '而今', prefecture_id: 'mie', brewery: '기야쇼 주조', type: '준마이긴조', description: '"지금 이 순간을 살자"는 의미를 담은 프리미엄 사케. 달콤하고 과일향이 풍부한 맛이 특징입니다.', image_url: null, avg_rating: 4.7 },
  { id: '32', name_ko: '사쿠', name_ja: '作', prefecture_id: 'mie', brewery: '시미즈세이자부로 상점', type: '준마이다이긴조', description: '2016년 G7 이세시마 정상회담 건배주로 선정되어 세계적 명성을 얻은 사케입니다.', image_url: null, avg_rating: 4.4 },

  // 사이타마
  { id: '33', name_ko: '하나아비', name_ja: '花陽浴', prefecture_id: 'saitama', brewery: '난요 양조', type: '준마이다이긴조', description: '3명이 빚는 극소량 생산 사케. 파인애플 같은 트로피컬 과일향과 주시한 감칠맛이 특징입니다.', image_url: null, avg_rating: 4.7 },

  // 미야기
  { id: '34', name_ko: '이치노쿠라', name_ja: '一ノ蔵', prefecture_id: 'miyagi', brewery: '이치노쿠라', type: '혼조조', description: '미야기현 4개 양조장이 합병하여 탄생한 사케. 카라구치가 전국적으로 유명합니다.', image_url: null, avg_rating: 4.1 },
  { id: '40', name_ko: '히다카미', name_ja: '日高見', prefecture_id: 'miyagi', brewery: '히라코 주조', type: '준마이', description: '"생선을 먹을 때는 히다카미"라는 콘셉트. 해산물과 최고의 궁합을 자랑하는 식중주입니다.', image_url: null, avg_rating: 4.3 },
  { id: '44', name_ko: '하쿠라쿠세이', name_ja: '伯楽星', prefecture_id: 'miyagi', brewery: '니이자와 양조점', type: '준마이긴조', description: 'IWC 올해의 사케 양조장 수상. "궁극의 식중주"를 콘셉트로 한 깔끔한 사케입니다.', image_url: null, avg_rating: 4.4 },

  // 나라
  { id: '35', name_ko: '하루시카', name_ja: '春鹿', prefecture_id: 'nara', brewery: '이마니시 세이베에 상점', type: '준마이', description: '나라시의 유서 깊은 양조장. 10개국 이상에 수출되며 깔끔하면서도 부드러운 맛이 특징입니다.', image_url: null, avg_rating: 4.0 },

  // 니가타
  { id: '37', name_ko: '키쿠스이', name_ja: '菊水', prefecture_id: 'niigata', brewery: '키쿠스이 주조', type: '혼조조', description: '일본 최초의 상업용 나마자케 "후나구치"를 출시한 혁신적 양조장입니다.', image_url: null, avg_rating: 3.9 },
  { id: '39', name_ko: '조젠미즈노고토시', name_ja: '上善如水', prefecture_id: 'niigata', brewery: '시라타키 주조', type: '준마이긴조', description: '노자의 "상선여수"에서 이름을 딴 사케. 깨끗하고 부드러운 맛이 초보자에게도 추천됩니다.', image_url: null, avg_rating: 4.0 },

  // 효고
  { id: '38', name_ko: '니혼사카리', name_ja: '日本盛', prefecture_id: 'hyogo', brewery: '니혼사카리', type: '준마이긴조', description: '1913년부터 일본 황실에 납품해온 나다 지역의 전통 있는 사케입니다.', image_url: null, avg_rating: 3.8 },
  { id: '53', name_ko: '반슈잇콘', name_ja: '播州一献', prefecture_id: 'hyogo', brewery: '산요하이 주조', type: '준마이긴조', description: '반슈 지역의 야마다니시키를 사용하며, 폐광 저장고에서 숙성하는 독특한 방식이 특징입니다.', image_url: null, avg_rating: 4.2 },

  // 에히메
  { id: '41', name_ko: '이시즈치', name_ja: '石鎚', prefecture_id: 'ehime', brewery: '이시즈치 주조', type: '준마이긴조', description: '일본 100대 명수 "우치누키"로 빚는 사케. 균형 잡힌 산미와 깔끔한 맛이 특징입니다.', image_url: null, avg_rating: 4.2 },

  // 교토
  { id: '42', name_ko: '쓰키노카쓰라', name_ja: '月の桂', prefecture_id: 'kyoto', brewery: '마스다 토쿠베에 상점', type: '준마이다이긴조', description: '1675년 창업한 교토 후시미의 가장 오래된 양조장. 일본 최초의 스파클링 니고리자케를 발명했습니다.', image_url: null, avg_rating: 4.1 },

  // 도치기
  { id: '43', name_ko: '호오비덴', name_ja: '鳳凰美田', prefecture_id: 'tochigi', brewery: '고바야시 주조', type: '준마이다이긴조', description: '"봉황"과 "아름다운 논"을 뜻하는 이름답게 화려한 향과 세련된 맛이 특징입니다.', image_url: null, avg_rating: 4.5 },
  { id: '46', name_ko: '센킨', name_ja: '仙禽', prefecture_id: 'tochigi', brewery: '센킨', type: '준마이', description: '와인 소믈리에 출신 당주가 이끄는 혁신적 양조장. 자연 효모와 유기농 쌀만 사용합니다.', image_url: null, avg_rating: 4.4 },

  // 야마구치
  { id: '45', name_ko: '텐비', name_ja: '天美', prefecture_id: 'yamaguchi', brewery: '조슈 주조', type: '준마이긴조', description: '2020년 탄생한 신예 사케. 여성 도지가 빚는 신선하고 과일향이 풍부한 맛이 특징입니다.', image_url: null, avg_rating: 4.4 },

  // 기후
  { id: '47', name_ko: '미치사카리', name_ja: '三千盛', prefecture_id: 'gifu', brewery: '미치사카리', type: '준마이다이긴조', description: '1771년 창업한 기후현의 초드라이 사케 명가. 스시집과 레스토랑에서 사랑받는 사케입니다.', image_url: null, avg_rating: 4.1 },

  // 시마네
  { id: '49', name_ko: '리하쿠', name_ja: '李白', prefecture_id: 'shimane', brewery: '리하쿠 주조', type: '준마이', description: '당나라 시인 이백의 이름을 딴 사케. 풍미 깊고 전통적인 맛이 특징입니다.', image_url: null, avg_rating: 4.0 },

  // 와카야마
  { id: '54', name_ko: '킷도', name_ja: '紀土', prefecture_id: 'wakayama', brewery: '헤이와 주조', type: '준마이긴조', description: 'IWC 올해의 양조장을 2년 연속 수상한 실력파. 순수하고 깨끗한 맛이 특징입니다.', image_url: null, avg_rating: 4.3 },

  // 이시카와
  { id: '55', name_ko: '테도리가와', name_ja: '手取川', prefecture_id: 'ishikawa', brewery: '요시다 주조점', type: '준마이', description: '야마하이 양조 전문 양조장. 전통 양조법과 테루아를 추구하는 사케입니다.', image_url: null, avg_rating: 4.2 },

  // 도야마
  { id: '56', name_ko: '타테야마', name_ja: '立山', prefecture_id: 'toyama', brewery: '타테야마 주조', type: '혼조조', description: '도야마현 최대 주조사. 10년간 전국 신주 감평회에서 10회 금상을 수상했습니다.', image_url: null, avg_rating: 4.0 },
];

// 사케 검색/필터 함수
export function searchSakes(query: string): Sake[] {
  const lowerQuery = query.toLowerCase();
  return allSakes.filter(
    sake =>
      sake.name_ko.toLowerCase().includes(lowerQuery) ||
      sake.name_ja.toLowerCase().includes(lowerQuery) ||
      sake.brewery.toLowerCase().includes(lowerQuery)
  );
}

export function filterSakesByPrefecture(prefectureId: string): Sake[] {
  return allSakes.filter(sake => sake.prefecture_id === prefectureId);
}

export function filterSakesByType(type: string): Sake[] {
  return allSakes.filter(sake => sake.type === type);
}

export function getSakeById(id: string): Sake | undefined {
  return allSakes.find(sake => sake.id === id);
}

export const sakeTypes = [
  '준마이',
  '준마이긴조',
  '준마이다이긴조',
  '혼조조',
  '긴조',
  '다이긴조',
  '후츠슈',
  '니고리자케',
  '스파클링',
  '기타',
];
