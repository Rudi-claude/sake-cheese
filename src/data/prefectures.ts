import { Prefecture, Region } from '@/types';

export const prefectures: Prefecture[] = [
  // 홋카이도
  { id: 'hokkaido', name_ko: '홋카이도', name_ja: '北海道', region: '홋카이도' },

  // 도호쿠 (6현)
  { id: 'aomori', name_ko: '아오모리', name_ja: '青森県', region: '도호쿠' },
  { id: 'iwate', name_ko: '이와테', name_ja: '岩手県', region: '도호쿠' },
  { id: 'miyagi', name_ko: '미야기', name_ja: '宮城県', region: '도호쿠' },
  { id: 'akita', name_ko: '아키타', name_ja: '秋田県', region: '도호쿠' },
  { id: 'yamagata', name_ko: '야마가타', name_ja: '山形県', region: '도호쿠' },
  { id: 'fukushima', name_ko: '후쿠시마', name_ja: '福島県', region: '도호쿠' },

  // 간토 (7현)
  { id: 'ibaraki', name_ko: '이바라키', name_ja: '茨城県', region: '간토' },
  { id: 'tochigi', name_ko: '도치기', name_ja: '栃木県', region: '간토' },
  { id: 'gunma', name_ko: '군마', name_ja: '群馬県', region: '간토' },
  { id: 'saitama', name_ko: '사이타마', name_ja: '埼玉県', region: '간토' },
  { id: 'chiba', name_ko: '치바', name_ja: '千葉県', region: '간토' },
  { id: 'tokyo', name_ko: '도쿄', name_ja: '東京都', region: '간토' },
  { id: 'kanagawa', name_ko: '가나가와', name_ja: '神奈川県', region: '간토' },

  // 주부 (9현)
  { id: 'niigata', name_ko: '니가타', name_ja: '新潟県', region: '주부' },
  { id: 'toyama', name_ko: '도야마', name_ja: '富山県', region: '주부' },
  { id: 'ishikawa', name_ko: '이시카와', name_ja: '石川県', region: '주부' },
  { id: 'fukui', name_ko: '후쿠이', name_ja: '福井県', region: '주부' },
  { id: 'yamanashi', name_ko: '야마나시', name_ja: '山梨県', region: '주부' },
  { id: 'nagano', name_ko: '나가노', name_ja: '長野県', region: '주부' },
  { id: 'gifu', name_ko: '기후', name_ja: '岐阜県', region: '주부' },
  { id: 'shizuoka', name_ko: '시즈오카', name_ja: '静岡県', region: '주부' },
  { id: 'aichi', name_ko: '아이치', name_ja: '愛知県', region: '주부' },

  // 긴키 (7현)
  { id: 'mie', name_ko: '미에', name_ja: '三重県', region: '긴키' },
  { id: 'shiga', name_ko: '시가', name_ja: '滋賀県', region: '긴키' },
  { id: 'kyoto', name_ko: '교토', name_ja: '京都府', region: '긴키' },
  { id: 'osaka', name_ko: '오사카', name_ja: '大阪府', region: '긴키' },
  { id: 'hyogo', name_ko: '효고', name_ja: '兵庫県', region: '긴키' },
  { id: 'nara', name_ko: '나라', name_ja: '奈良県', region: '긴키' },
  { id: 'wakayama', name_ko: '와카야마', name_ja: '和歌山県', region: '긴키' },

  // 주고쿠 (5현)
  { id: 'tottori', name_ko: '돗토리', name_ja: '鳥取県', region: '주고쿠' },
  { id: 'shimane', name_ko: '시마네', name_ja: '島根県', region: '주고쿠' },
  { id: 'okayama', name_ko: '오카야마', name_ja: '岡山県', region: '주고쿠' },
  { id: 'hiroshima', name_ko: '히로시마', name_ja: '広島県', region: '주고쿠' },
  { id: 'yamaguchi', name_ko: '야마구치', name_ja: '山口県', region: '주고쿠' },

  // 시코쿠 (4현)
  { id: 'tokushima', name_ko: '도쿠시마', name_ja: '徳島県', region: '시코쿠' },
  { id: 'kagawa', name_ko: '가가와', name_ja: '香川県', region: '시코쿠' },
  { id: 'ehime', name_ko: '에히메', name_ja: '愛媛県', region: '시코쿠' },
  { id: 'kochi', name_ko: '고치', name_ja: '高知県', region: '시코쿠' },

  // 규슈 (8현)
  { id: 'fukuoka', name_ko: '후쿠오카', name_ja: '福岡県', region: '규슈' },
  { id: 'saga', name_ko: '사가', name_ja: '佐賀県', region: '규슈' },
  { id: 'nagasaki', name_ko: '나가사키', name_ja: '長崎県', region: '규슈' },
  { id: 'kumamoto', name_ko: '구마모토', name_ja: '熊本県', region: '규슈' },
  { id: 'oita', name_ko: '오이타', name_ja: '大分県', region: '규슈' },
  { id: 'miyazaki', name_ko: '미야자키', name_ja: '宮崎県', region: '규슈' },
  { id: 'kagoshima', name_ko: '가고시마', name_ja: '鹿児島県', region: '규슈' },
  { id: 'okinawa', name_ko: '오키나와', name_ja: '沖縄県', region: '규슈' },
];

// ID로 현 찾기
export function getPrefectureById(id: string): Prefecture | undefined {
  return prefectures.find(p => p.id === id);
}

// 지역별 현 목록
export function getPrefecturesByRegion(region: Region): Prefecture[] {
  return prefectures.filter(p => p.region === region);
}

// 지역 목록
export const regions: Region[] = [
  '홋카이도',
  '도호쿠',
  '간토',
  '주부',
  '긴키',
  '주고쿠',
  '시코쿠',
  '규슈',
];

// 지역별 색상
export const regionColors: Record<Region, string> = {
  '홋카이도': '#a8dadc',
  '도호쿠': '#457b9d',
  '간토': '#e63946',
  '주부': '#f4a261',
  '긴키': '#2a9d8f',
  '주고쿠': '#e9c46a',
  '시코쿠': '#9b5de5',
  '규슈': '#f72585',
};
