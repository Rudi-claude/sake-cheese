import Link from 'next/link';
import { Sake } from '@/types';
import StarRating from './StarRating';

interface SakeCardProps {
  sake: Sake;
  showPrefecture?: boolean;
}

export default function SakeCard({ sake, showPrefecture = false }: SakeCardProps) {
  return (
    <Link href={`/sake/${sake.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-100">
        {/* 이미지 영역 */}
        <div className="aspect-square bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
          {sake.image_url ? (
            <img
              src={sake.image_url}
              alt={sake.name_ko}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl">🍶</div>
          )}
        </div>

        {/* 정보 영역 */}
        <div className="space-y-2">
          <div>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">
              {sake.name_ko}
            </h3>
            <p className="text-sm text-gray-500">{sake.name_ja}</p>
          </div>

          <p className="text-sm text-gray-600">{sake.brewery}</p>

          <div className="flex items-center justify-between">
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
              {sake.type}
            </span>
            {sake.avg_rating && (
              <div className="flex items-center gap-1">
                <StarRating rating={Math.round(sake.avg_rating)} readonly size="sm" />
                <span className="text-sm text-gray-600">
                  {sake.avg_rating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
