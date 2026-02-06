'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPrefectureById, regionColors } from '@/data/prefectures';
import { allSakes, getSakeById } from '@/data/sakes';
import { getSakeDetailById } from '@/data/sake-details';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import StarRating from '@/components/StarRating';
import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';
import SakeTagChips from '@/components/SakeTagChips';
import SakeDetailSpecs from '@/components/SakeDetailSpecs';
import { Review } from '@/types';

// 더미 리뷰 데이터
const dummyReviews: Record<string, Review[]> = {
  '1': [
    { id: 'r1', sake_id: '1', user_id: 'u1', rating: 5, comment: '정말 깔끔하고 맛있어요! 처음 마셔봤는데 사케의 매력에 빠졌습니다.', created_at: '2024-01-15T10:00:00Z' },
    { id: 'r2', sake_id: '1', user_id: 'u2', rating: 4, comment: '음식이랑 같이 먹으니 더 맛있네요. 추천합니다.', created_at: '2024-01-10T15:30:00Z' },
  ],
  '4': [
    { id: 'r3', sake_id: '4', user_id: 'u3', rating: 5, comment: '드디어 마셔봤습니다! 정말 환상적인 맛이에요.', created_at: '2024-02-01T20:00:00Z' },
  ],
  '11': [
    { id: 'r4', sake_id: '11', user_id: 'u1', rating: 5, comment: '닷사이 23은 정말 부드러워요. 특별한 날에 딱!', created_at: '2024-01-20T19:00:00Z' },
    { id: 'r5', sake_id: '11', user_id: 'u4', rating: 4, comment: '가격이 좀 있지만 그만한 가치가 있습니다.', created_at: '2024-01-18T12:00:00Z' },
  ],
  '12': [
    { id: 'r6', sake_id: '12', user_id: 'u1', rating: 5, comment: '닷사이의 진수를 느낄 수 있는 최고급 라인.', created_at: '2024-01-25T18:00:00Z' },
  ],
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SakePage({ params }: PageProps) {
  const { id } = use(params);
  const { user } = useAuth();

  const sake = getSakeById(id) || allSakes.find(s => s.id === id);
  const sakeDetail = getSakeDetailById(id);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReviews();
  }, [id]);

  const loadReviews = async () => {
    setLoading(true);
    try {
      // Supabase에서 리뷰 가져오기 시도
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('sake_id', id)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        setReviews(data);
      } else {
        // Supabase 데이터 없으면 더미 데이터 사용
        setReviews(dummyReviews[id] || []);
      }
    } catch (err) {
      // 에러 시 더미 데이터 사용
      setReviews(dummyReviews[id] || []);
    } finally {
      setLoading(false);
    }
  };

  if (!sake) {
    notFound();
  }

  const prefecture = getPrefectureById(sake.prefecture_id);
  const regionColor = prefecture ? regionColors[prefecture.region] : '#6b7280';

  const handleReviewSubmit = async (rating: number, comment: string) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert({
          sake_id: sake.id,
          user_id: user.id,
          rating,
          comment,
        })
        .select()
        .single();

      if (error) throw error;

      if (data) {
        setReviews([data, ...reviews]);
      }
    } catch (err) {
      console.error('Error submitting review:', err);
      // 에러 시 로컬에만 추가
      const newReview: Review = {
        id: `r${Date.now()}`,
        sake_id: sake.id,
        user_id: user.id,
        rating,
        comment,
        created_at: new Date().toISOString(),
      };
      setReviews([newReview, ...reviews]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 브레드크럼 */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-amber-600 hover:underline">홈</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/sake" className="text-amber-600 hover:underline">사케 목록</Link>
        <span className="mx-2 text-gray-400">/</span>
        {prefecture && (
          <>
            <Link href={`/prefecture/${prefecture.id}`} className="text-amber-600 hover:underline">
              {prefecture.name_ko}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </>
        )}
        <span className="text-gray-600">{sake.name_ko}</span>
      </nav>

      {/* 사케 정보 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          {/* 이미지 영역 */}
          <div className="md:w-1/3 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center p-8">
            {sake.image_url ? (
              <img
                src={sake.image_url}
                alt={sake.name_ko}
                className="max-h-64 object-contain"
              />
            ) : (
              <div className="text-9xl">🍶</div>
            )}
          </div>

          {/* 정보 영역 */}
          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{sake.name_ko}</h1>
              <p className="text-xl text-gray-500">{sake.name_ja}</p>
            </div>

            {sake.avg_rating && (
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={Math.round(sake.avg_rating)} readonly />
                <span className="text-lg font-bold text-amber-600">
                  {sake.avg_rating.toFixed(1)}
                </span>
                <span className="text-gray-500">({reviews.length}개 리뷰)</span>
              </div>
            )}

            {/* 태그 칩 */}
            {sakeDetail && (
              <div className="mb-4">
                <SakeTagChips
                  tags={sakeDetail.characteristics}
                  style={sakeDetail.style}
                  polishingRate={sakeDetail.polishing_rate_detail}
                  riceVariety={sakeDetail.rice_variety}
                  abv={sakeDetail.abv}
                />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">양조장</p>
                <p className="font-medium text-gray-900">{sake.brewery}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">종류</p>
                <span className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
                  {sake.type}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">생산지</p>
                {prefecture && (
                  <Link
                    href={`/prefecture/${prefecture.id}`}
                    className="font-medium hover:text-amber-600 transition-colors"
                    style={{ color: regionColor }}
                  >
                    {prefecture.name_ko} ({prefecture.name_ja})
                  </Link>
                )}
              </div>
              {sake.polishing_rate && (
                <div>
                  <p className="text-sm text-gray-500">정미보합</p>
                  <p className="font-medium text-gray-900">{sake.polishing_rate}%</p>
                </div>
              )}
              {sake.sweetness != null && (
                <div>
                  <p className="text-sm text-gray-500">아마카라</p>
                  <p className="font-medium text-gray-900">
                    {sake.sweetness === -2 ? '매우 달콤' : sake.sweetness === -1 ? '달콤' : sake.sweetness === 0 ? '중간' : sake.sweetness === 1 ? '드라이' : '매우 드라이'}
                  </p>
                </div>
              )}
              {sake.smv != null && (
                <div>
                  <p className="text-sm text-gray-500">일본주도 (SMV)</p>
                  <p className="font-medium text-gray-900">{sake.smv > 0 ? `+${sake.smv}` : sake.smv}</p>
                </div>
              )}
            </div>

            {/* 상세 정보가 없는 경우 기존 설명 표시 */}
            {!sakeDetail && sake.description && (
              <div>
                <p className="text-sm text-gray-500 mb-2">설명</p>
                <p className="text-gray-700 leading-relaxed">{sake.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 상세 스펙 섹션 */}
      {sakeDetail && (
        <div className="mb-8">
          <SakeDetailSpecs detail={sakeDetail} />
        </div>
      )}

      {/* 리뷰 섹션 */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* 리뷰 작성 */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">리뷰 작성</h2>
          <ReviewForm
            sakeId={sake.id}
            onSubmit={handleReviewSubmit}
            isLoggedIn={!!user}
          />
        </div>

        {/* 리뷰 목록 */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            리뷰 ({reviews.length})
          </h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto" />
            </div>
          ) : (
            <ReviewList reviews={reviews} />
          )}
        </div>
      </div>
    </div>
  );
}
