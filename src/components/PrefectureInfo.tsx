import Link from 'next/link';
import { Prefecture } from '@/types';
import { regionColors } from '@/data/prefectures';

interface PrefectureInfoProps {
  prefecture: Prefecture | null;
  sakeCount?: number;
}

export default function PrefectureInfo({ prefecture, sakeCount }: PrefectureInfoProps) {
  if (!prefecture) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center text-gray-500">
          <div className="text-6xl mb-4">🗾</div>
          <p className="text-lg font-medium">지도에서 현을 선택하세요</p>
          <p className="text-sm mt-2">클릭하면 해당 지역의 사케를 볼 수 있습니다</p>
        </div>
      </div>
    );
  }

  const regionColor = regionColors[prefecture.region];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
          style={{ backgroundColor: regionColor }}
        >
          {prefecture.name_ko.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">{prefecture.name_ko}</h2>
          <p className="text-gray-500">{prefecture.name_ja}</p>
          <div className="mt-2">
            <span
              className="inline-block text-sm px-2 py-1 rounded"
              style={{
                backgroundColor: `${regionColor}20`,
                color: regionColor,
              }}
            >
              {prefecture.region}
            </span>
          </div>
        </div>
      </div>

      {sakeCount !== undefined && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-gray-600">
            등록된 사케: <span className="font-bold text-amber-600">{sakeCount}개</span>
          </p>
        </div>
      )}

      <Link
        href={`/prefecture/${prefecture.id}`}
        className="mt-4 block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-3 rounded-lg font-medium transition-colors"
      >
        사케 목록 보기
      </Link>
    </div>
  );
}
