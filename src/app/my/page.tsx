'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Sake, Review } from '@/types';
import StarRating from '@/components/StarRating';
import SakeCard from '@/components/SakeCard';

// 더미 데이터 (Supabase 연동 전)
import { allSakes } from '@/data/sakes';

interface ReviewWithSake extends Review {
  sake?: Sake;
}

export default function MyPage() {
  const { user, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'reviews' | 'sakes'>('reviews');
  const [myReviews, setMyReviews] = useState<ReviewWithSake[]>([]);
  const [mySakes, setMySakes] = useState<Sake[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadMyData();
    }
  }, [user]);

  const loadMyData = async () => {
    setLoading(true);
    try {
      // Supabase에서 내 리뷰 가져오기
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('reviews')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (!reviewsError && reviewsData) {
        // 리뷰에 사케 정보 연결 (더미 데이터 사용)
        const reviewsWithSake = reviewsData.map(review => ({
          ...review,
          sake: allSakes.find(s => s.id === review.sake_id),
        }));
        setMyReviews(reviewsWithSake);
      }

      // Supabase에서 내가 등록한 사케 가져오기
      const { data: sakesData, error: sakesError } = await supabase
        .from('sakes')
        .select('*')
        .eq('created_by', user?.id)
        .order('created_at', { ascending: false });

      if (!sakesError && sakesData) {
        setMySakes(sakesData);
      }
    } catch (err) {
      console.error('Error loading my data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!confirm('리뷰를 삭제하시겠습니까?')) return;

    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', reviewId);

      if (!error) {
        setMyReviews(myReviews.filter(r => r.id !== reviewId));
      }
    } catch (err) {
      console.error('Error deleting review:', err);
    }
  };

  if (authLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
          <div className="w-48 h-6 bg-gray-200 rounded mx-auto" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h1>
        <p className="text-gray-600 mb-6">마이페이지를 보려면 먼저 로그인해주세요.</p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 프로필 헤더 */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-amber-600">
              {user.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">마이페이지</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-amber-600">{myReviews.length}</p>
            <p className="text-gray-600">작성한 리뷰</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-amber-600">{mySakes.length}</p>
            <p className="text-gray-600">등록한 사케</p>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'reviews'
              ? 'text-amber-600 border-b-2 border-amber-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          내 리뷰 ({myReviews.length})
        </button>
        <button
          onClick={() => setActiveTab('sakes')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'sakes'
              ? 'text-amber-600 border-b-2 border-amber-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          등록한 사케 ({mySakes.length})
        </button>
      </div>

      {/* 콘텐츠 */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto" />
        </div>
      ) : activeTab === 'reviews' ? (
        // 내 리뷰 목록
        myReviews.length > 0 ? (
          <div className="space-y-4">
            {myReviews.map(review => (
              <div key={review.id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {review.sake && (
                      <Link
                        href={`/sake/${review.sake.id}`}
                        className="font-bold text-gray-900 hover:text-amber-600"
                      >
                        {review.sake.name_ko}
                        <span className="text-gray-500 font-normal ml-2">
                          {review.sake.name_ja}
                        </span>
                      </Link>
                    )}
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={review.rating} readonly size="sm" />
                      <span className="text-sm text-gray-500">
                        {new Date(review.created_at).toLocaleDateString('ko-KR')}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-gray-700 mt-2">{review.comment}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteReview(review.id)}
                    className="text-gray-400 hover:text-red-500 p-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">✍️</div>
            <p className="text-xl text-gray-600 mb-2">아직 작성한 리뷰가 없습니다</p>
            <p className="text-gray-500 mb-6">사케를 마셔보고 리뷰를 남겨보세요!</p>
            <Link
              href="/sake"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              사케 둘러보기
            </Link>
          </div>
        )
      ) : (
        // 등록한 사케 목록
        mySakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mySakes.map(sake => (
              <SakeCard key={sake.id} sake={sake} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="text-6xl mb-4">🍶</div>
            <p className="text-xl text-gray-600 mb-2">아직 등록한 사케가 없습니다</p>
            <p className="text-gray-500 mb-6">새로운 사케를 발견하셨나요? 등록해보세요!</p>
            <Link
              href="/sake/new"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              사케 등록하기
            </Link>
          </div>
        )
      )}
    </div>
  );
}
