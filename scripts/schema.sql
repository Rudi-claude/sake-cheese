-- 사케치즈 데이터베이스 스키마
-- Supabase SQL Editor에서 실행하세요

-- 현(도도부현) 테이블
CREATE TABLE IF NOT EXISTS prefectures (
  id TEXT PRIMARY KEY,
  name_ko TEXT NOT NULL,
  name_ja TEXT NOT NULL,
  region TEXT NOT NULL
);

-- 사케 테이블
CREATE TABLE IF NOT EXISTS sakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name_ko TEXT NOT NULL,
  name_ja TEXT NOT NULL,
  prefecture_id TEXT NOT NULL REFERENCES prefectures(id),
  brewery TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  avg_rating FLOAT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 리뷰 테이블
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sake_id UUID NOT NULL REFERENCES sakes(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_sakes_prefecture ON sakes(prefecture_id);
CREATE INDEX IF NOT EXISTS idx_reviews_sake ON reviews(sake_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);

-- RLS (Row Level Security) 정책
ALTER TABLE prefectures ENABLE ROW LEVEL SECURITY;
ALTER TABLE sakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 현과 사케 정보를 볼 수 있음
CREATE POLICY "Anyone can view prefectures" ON prefectures
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view sakes" ON sakes
  FOR SELECT USING (true);

CREATE POLICY "Anyone can view reviews" ON reviews
  FOR SELECT USING (true);

-- 인증된 사용자만 리뷰 작성 가능
CREATE POLICY "Authenticated users can insert reviews" ON reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 자신의 리뷰만 수정/삭제 가능
CREATE POLICY "Users can update own reviews" ON reviews
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews" ON reviews
  FOR DELETE USING (auth.uid() = user_id);

-- 평균 평점 업데이트 함수
CREATE OR REPLACE FUNCTION update_sake_avg_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE sakes
  SET avg_rating = (
    SELECT AVG(rating)::FLOAT
    FROM reviews
    WHERE sake_id = COALESCE(NEW.sake_id, OLD.sake_id)
  )
  WHERE id = COALESCE(NEW.sake_id, OLD.sake_id);
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- 리뷰 변경 시 평균 평점 자동 업데이트 트리거
DROP TRIGGER IF EXISTS trigger_update_sake_rating ON reviews;
CREATE TRIGGER trigger_update_sake_rating
  AFTER INSERT OR UPDATE OR DELETE ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_sake_avg_rating();
