'use client';

import { useState } from 'react';
import JapanMap from '@/components/JapanMap';
import PrefectureInfo from '@/components/PrefectureInfo';
import { Prefecture } from '@/types';

export default function Home() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<Prefecture | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 히어로 섹션 */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          일본 사케 여행
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          일본 47개 현의 다양한 사케를 탐험해보세요.
          각 지역의 특색 있는 사케를 발견하고, 나만의 리뷰를 기록할 수 있습니다.
        </p>
      </div>

      {/* 지도 + 사이드 패널 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 지도 영역 */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4">
          <JapanMap
            onPrefectureHover={setSelectedPrefecture}
            selectedPrefecture={selectedPrefecture?.id}
          />
        </div>

        {/* 사이드 패널 */}
        <div className="lg:col-span-1">
          <PrefectureInfo prefecture={selectedPrefecture} />

          {/* 안내 카드 */}
          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h3 className="font-bold text-amber-800 mb-2">사용 방법</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>- 지도에서 관심 있는 현을 클릭하세요</li>
              <li>- 해당 지역의 대표 사케를 확인할 수 있습니다</li>
              <li>- 사케를 선택해 상세 정보와 리뷰를 확인하세요</li>
              <li>- 로그인하면 나만의 리뷰를 작성할 수 있습니다</li>
            </ul>
          </div>

          {/* 지역별 통계 */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-gray-900 mb-3">지역별 현황</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-gray-50 rounded p-2 text-center">
                <p className="text-2xl font-bold text-amber-600">47</p>
                <p className="text-gray-600">현</p>
              </div>
              <div className="bg-gray-50 rounded p-2 text-center">
                <p className="text-2xl font-bold text-amber-600">20+</p>
                <p className="text-gray-600">사케</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
