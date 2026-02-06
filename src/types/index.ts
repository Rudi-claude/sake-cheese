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
  polishing_rate: number | null;
  sweetness: number | null;
  smv: number | null;
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
