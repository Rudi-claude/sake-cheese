import { Sake } from '@/types';

// 더미 사케 데이터 (Supabase 연동 전 사용)
export const allSakes: Sake[] = [
  // 니가타
  { id: '1', name_ko: '고시노칸바이', name_ja: '越乃寒梅', prefecture_id: 'niigata', brewery: '이시모토 주조', type: '준마이긴조', description: '니가타를 대표하는 담백하고 깔끔한 사케. 차갑게 마시면 과일향이 은은하게 퍼집니다.', image_url: null, avg_rating: 4.5 },
  { id: '2', name_ko: '핫카이산', name_ja: '八海山', prefecture_id: 'niigata', brewery: '핫카이산 주조', type: '준마이다이긴조', description: '깨끗한 맛과 부드러운 목넘김이 특징. 음식과 함께 즐기기 좋습니다.', image_url: null, avg_rating: 4.3 },
  { id: '3', name_ko: '구보타 만쥬', name_ja: '久保田 萬寿', prefecture_id: 'niigata', brewery: '아사히 주조', type: '준마이다이긴조', description: '니가타 사케의 정수. 화려한 향과 깊은 맛의 조화가 일품입니다.', image_url: null, avg_rating: 4.7 },

  // 야마가타
  { id: '4', name_ko: '쥬욘다이', name_ja: '十四代', prefecture_id: 'yamagata', brewery: '타카기 주조', type: '준마이다이긴조', description: '환상의 사케로 불리는 명품. 과일향이 풍부하고 감미로운 맛이 특징입니다.', image_url: null, avg_rating: 4.9 },
  { id: '5', name_ko: '데와자쿠라', name_ja: '出羽桜', prefecture_id: 'yamagata', brewery: '데와자쿠라 주조', type: '긴조', description: '체리와 같은 과일향이 특징. 가성비 좋은 사케로 유명합니다.', image_url: null, avg_rating: 4.2 },

  // 아키타
  { id: '6', name_ko: '아라마사', name_ja: '新政', prefecture_id: 'akita', brewery: '아라마사 주조', type: '준마이', description: '전통 양조법을 고수하는 혁신적인 사케. 산미가 있어 와인처럼 즐길 수 있습니다.', image_url: null, avg_rating: 4.6 },
  { id: '7', name_ko: '유키노보샤', name_ja: '雪の茅舎', prefecture_id: 'akita', brewery: '사이야 주조', type: '준마이긴조', description: '눈처럼 깨끗하고 부드러운 맛. 자연의 힘만으로 양조합니다.', image_url: null, avg_rating: 4.4 },

  // 후쿠시마
  { id: '8', name_ko: '히로키', name_ja: '飛露喜', prefecture_id: 'fukushima', brewery: '히로키 주조', type: '준마이긴조', description: '투명감 있는 맛과 은은한 향이 특징.', image_url: null, avg_rating: 4.5 },

  // 효고
  { id: '9', name_ko: '기쿠마사무네', name_ja: '菊正宗', prefecture_id: 'hyogo', brewery: '기쿠마사무네 주조', type: '혼조조', description: '400년 전통의 나다 대표 사케. 드라이하고 깔끔한 맛이 특징입니다.', image_url: null, avg_rating: 4.0 },
  { id: '10', name_ko: '하쿠쓰루', name_ja: '白鶴', prefecture_id: 'hyogo', brewery: '하쿠쓰루 주조', type: '준마이', description: '나다의 대표 브랜드. 균형 잡힌 맛으로 다양한 음식과 어울립니다.', image_url: null, avg_rating: 3.9 },

  // 교토
  { id: '11', name_ko: '겟게이칸', name_ja: '月桂冠', prefecture_id: 'kyoto', brewery: '겟게이칸', type: '준마이', description: '후시미의 명수로 빚은 전통 사케. 부드럽고 깔끔한 맛입니다.', image_url: null, avg_rating: 3.8 },

  // 야마구치
  { id: '12', name_ko: '닷사이', name_ja: '獺祭', prefecture_id: 'yamaguchi', brewery: '아사히 주조', type: '준마이다이긴조', description: '야마다니시키 쌀을 정미율 23%까지 깎아 만든 프리미엄 사케.', image_url: null, avg_rating: 4.8 },
  { id: '13', name_ko: '닷사이 45', name_ja: '獺祭 45', prefecture_id: 'yamaguchi', brewery: '아사히 주조', type: '준마이다이긴조', description: '정미율 45%의 닷사이 엔트리 모델. 가성비 좋은 프리미엄 사케.', image_url: null, avg_rating: 4.5 },

  // 히로시마
  { id: '14', name_ko: '카모츠루', name_ja: '賀茂鶴', prefecture_id: 'hiroshima', brewery: '카모츠루 주조', type: '다이긴조', description: '히로시마의 연수로 만든 부드러운 사케.', image_url: null, avg_rating: 4.3 },

  // 이시카와
  { id: '15', name_ko: '덴구마이', name_ja: '天狗舞', prefecture_id: 'ishikawa', brewery: '샤타 주조', type: '준마이', description: '야마하이 양조법으로 만든 깊은 맛의 사케.', image_url: null, avg_rating: 4.2 },

  // 시즈오카
  { id: '16', name_ko: '이소지만', name_ja: '磯自慢', prefecture_id: 'shizuoka', brewery: '이소지만 주조', type: '준마이다이긴조', description: '시즈오카의 맑은 물로 만든 섬세한 사케.', image_url: null, avg_rating: 4.6 },

  // 나가노
  { id: '17', name_ko: '마스미', name_ja: '真澄', prefecture_id: 'nagano', brewery: '미야사카 주조', type: '준마이긴조', description: '알프스의 맑은 물로 만든 프리미엄 사케. 7호 효모의 발상지.', image_url: null, avg_rating: 4.4 },

  // 사이타마
  { id: '18', name_ko: '신카메', name_ja: '神亀', prefecture_id: 'saitama', brewery: '신카메 주조', type: '준마이', description: '순수 준마이만 만드는 고집있는 양조장.', image_url: null, avg_rating: 4.3 },

  // 아오모리
  { id: '19', name_ko: '다사이', name_ja: '田酒', prefecture_id: 'aomori', brewery: '니시다 주조', type: '준마이다이긴조', description: '쌀의 맛을 극대화한 사케. 구하기 어려운 명주.', image_url: null, avg_rating: 4.7 },

  // 미야기
  { id: '20', name_ko: '우라카스미', name_ja: '浦霞', prefecture_id: 'miyagi', brewery: '사우라 주조', type: '준마이긴조', description: '미야기를 대표하는 담백하고 깔끔한 사케.', image_url: null, avg_rating: 4.1 },

  // 홋카이도
  { id: '21', name_ko: '오토코야마', name_ja: '男山', prefecture_id: 'hokkaido', brewery: '오토코야마 주조', type: '준마이다이긴조', description: '홋카이도의 맑은 물과 쌀로 만든 명주.', image_url: null, avg_rating: 4.2 },

  // 도쿄
  { id: '22', name_ko: '사와노쓰루', name_ja: '澤乃井', prefecture_id: 'tokyo', brewery: '오자와 주조', type: '준마이', description: '도쿄 오쿠타마의 명수로 빚은 사케.', image_url: null, avg_rating: 4.0 },

  // 오사카
  { id: '23', name_ko: '아키시카', name_ja: '秋鹿', prefecture_id: 'osaka', brewery: '아키시카 주조', type: '준마이긴조', description: '오사카 북부에서 만드는 자연 농법 사케.', image_url: null, avg_rating: 4.3 },
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
