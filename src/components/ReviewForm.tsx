'use client';

import { useState } from 'react';
import StarRating from './StarRating';

interface ReviewFormProps {
  sakeId: string;
  onSubmit: (rating: number, comment: string) => Promise<void>;
  isLoggedIn: boolean;
}

export default function ReviewForm({ sakeId, onSubmit, isLoggedIn }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (rating === 0) {
      setError('별점을 선택해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(rating, comment);
      setRating(0);
      setComment('');
    } catch (err) {
      setError('리뷰 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-4">리뷰를 작성하려면 로그인이 필요합니다.</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors">
          로그인하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">리뷰 작성</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          별점
        </label>
        <StarRating rating={rating} onRatingChange={setRating} size="lg" />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          한줄평
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="이 사케에 대한 감상을 남겨주세요..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
          rows={3}
          maxLength={200}
        />
        <p className="text-xs text-gray-500 mt-1">{comment.length}/200</p>
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting || rating === 0}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors"
      >
        {isSubmitting ? '등록 중...' : '리뷰 등록'}
      </button>
    </form>
  );
}
