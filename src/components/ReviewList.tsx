import { Review } from '@/types';
import StarRating from './StarRating';

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>아직 리뷰가 없습니다.</p>
        <p className="text-sm mt-1">첫 번째 리뷰를 작성해보세요!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 text-xs font-medium">
                  {review.user_id?.slice(0, 1).toUpperCase() || '?'}
                </span>
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {review.user_id?.slice(0, 8) || '익명'}
              </span>
              <StarRating rating={review.rating} readonly size="sm" />
            </div>
            <span className="text-sm text-gray-500">
              {new Date(review.created_at).toLocaleDateString('ko-KR')}
            </span>
          </div>
          {review.comment && (
            <p className="text-gray-700">{review.comment}</p>
          )}
        </div>
      ))}
    </div>
  );
}
