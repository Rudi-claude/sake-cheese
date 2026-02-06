// 현(도도부현) 타입
export interface Prefecture {
  id: string;
  name_ko: string;
  name_ja: string;
  region: Region;
}

// 지역 구분
export type Region =
  | '홋카이도'
  | '도호쿠'
  | '간토'
  | '주부'
  | '긴키'
  | '주고쿠'
  | '시코쿠'
  | '규슈';

// 사케 종류
export type SakeType =
  | '준마이'
  | '준마이긴조'
  | '준마이다이긴조'
  | '혼조조'
  | '긴조'
  | '다이긴조'
  | '후츠슈'
  | '니고리자케'
  | '스파클링'
  | '기타';

// 사케 타입
export interface Sake {
  id: string;
  name_ko: string;
  name_ja: string;
  prefecture_id: string;
  brewery: string;
  type: SakeType;
  description: string;
  image_url: string | null;
  avg_rating: number | null;
  polishing_rate?: number | null;
  sweetness?: number | null;
  smv?: number | null;
  created_at?: string;
}

// 리뷰 타입
export interface Review {
  id: string;
  sake_id: string;
  user_id: string;
  rating: number; // 1-5
  comment: string;
  created_at: string;
}

// 사케 with 현 정보
export interface SakeWithPrefecture extends Sake {
  prefecture: Prefecture;
}

// 리뷰 with 유저 정보
export interface ReviewWithUser extends Review {
  user_email?: string;
}

// 현별 통계
export interface PrefectureStats {
  prefecture_id: string;
  sake_count: number;
  avg_rating: number | null;
}

// 맛/향 프로필
export interface FlavorProfile {
  aroma: string[];       // 향 키워드 (예: '사과', '바나나', '쌀')
  taste: string[];       // 맛 키워드 (예: '드라이', '감칠맛', '산미')
  finish: string;        // 여운 설명
  body: '라이트' | '미디엄' | '풀';
  temperature: string[]; // 추천 온도 (예: '냉주', '상온', '데운술')
}

// 음식 페어링
export interface FoodPairing {
  category: string;      // 카테고리 (예: '해산물', '육류')
  items: string[];       // 구체적 음식
  description?: string;  // 페어링 설명
}

// 양조장 상세
export interface BreweryDetail {
  name_ko: string;
  name_ja: string;
  founded?: string;      // 설립연도
  location: string;      // 소재지
  philosophy?: string;   // 양조 철학
  water_source?: string; // 사용 수원
  toji?: string;         // 도지(양조 책임자) 유파
}

// 사케 상세 정보
export interface SakeDetail {
  sake_id: string;
  style?: string;              // 스타일 (예: '탄려', '농순', '경쾌')
  abv?: string;                // 알코올 도수
  rice_variety?: string;       // 원료미
  polishing_rate_detail?: string; // 정미율 상세
  characteristics: string[];   // 주요 특징 키워드
  storage: string;             // 보관법
  detailed_description: string;// 상세 설명
  flavor_profile: FlavorProfile;
  food_pairings: FoodPairing[];
  brewery_detail: BreweryDetail;
}
