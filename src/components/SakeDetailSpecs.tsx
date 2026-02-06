'use client';

import { SakeDetail } from '@/types';
import ExpandableSection from './ExpandableSection';

interface SakeDetailSpecsProps {
  detail: SakeDetail;
}

export default function SakeDetailSpecs({ detail }: SakeDetailSpecsProps) {
  const { flavor_profile, food_pairings, brewery_detail } = detail;

  return (
    <div className="space-y-4">
      {/* 기본 스펙 */}
      <ExpandableSection title="상세 설명" defaultOpen>
        <p className="text-gray-700 leading-relaxed">{detail.detailed_description}</p>
        {detail.storage && (
          <div className="mt-3 flex items-start gap-2 text-sm text-gray-600 bg-amber-50 rounded-lg p-3">
            <span className="shrink-0 text-lg">🧊</span>
            <div>
              <span className="font-medium text-gray-800">보관법: </span>
              {detail.storage}
            </div>
          </div>
        )}
      </ExpandableSection>

      {/* 맛/향 프로필 */}
      <ExpandableSection title="맛 / 향 프로필">
        <div className="space-y-4">
          {/* 바디감 */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-600 w-16 shrink-0">바디</span>
            <div className="flex-1 flex items-center gap-1">
              {(['라이트', '미디엄', '풀'] as const).map((level) => (
                <div
                  key={level}
                  className={`flex-1 h-2.5 rounded-full ${
                    level === flavor_profile.body
                      ? 'bg-amber-500'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-amber-700 font-medium w-16 text-right">{flavor_profile.body}</span>
          </div>

          {/* 향 */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">향</p>
            <div className="flex flex-wrap gap-1.5">
              {flavor_profile.aroma.map((a) => (
                <span key={a} className="px-2.5 py-1 bg-pink-50 text-pink-700 border border-pink-200 rounded-full text-xs">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* 맛 */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">맛</p>
            <div className="flex flex-wrap gap-1.5">
              {flavor_profile.taste.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 여운 */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">여운</p>
            <p className="text-sm text-gray-700">{flavor_profile.finish}</p>
          </div>

          {/* 추천 온도 */}
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">추천 음용 온도</p>
            <div className="flex flex-wrap gap-1.5">
              {flavor_profile.temperature.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-full text-xs">
                  🌡️ {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* 음식 페어링 */}
      <ExpandableSection title="음식 페어링">
        <div className="space-y-4">
          {food_pairings.map((pairing) => (
            <div key={pairing.category}>
              <p className="text-sm font-semibold text-gray-800 mb-1.5">{pairing.category}</p>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {pairing.items.map((item) => (
                  <span key={item} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs">
                    {item}
                  </span>
                ))}
              </div>
              {pairing.description && (
                <p className="text-xs text-gray-500 mt-1">{pairing.description}</p>
              )}
            </div>
          ))}
        </div>
      </ExpandableSection>

      {/* 양조장 정보 */}
      <ExpandableSection title="양조장 정보">
        <div className="space-y-3">
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{brewery_detail.name_ko}</h4>
            <p className="text-sm text-gray-500">{brewery_detail.name_ja}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {brewery_detail.founded && (
              <div>
                <p className="text-gray-500">설립</p>
                <p className="font-medium text-gray-800">{brewery_detail.founded}</p>
              </div>
            )}
            <div>
              <p className="text-gray-500">소재지</p>
              <p className="font-medium text-gray-800">{brewery_detail.location}</p>
            </div>
            {brewery_detail.water_source && (
              <div>
                <p className="text-gray-500">수원</p>
                <p className="font-medium text-gray-800">{brewery_detail.water_source}</p>
              </div>
            )}
            {brewery_detail.toji && (
              <div>
                <p className="text-gray-500">도지 유파</p>
                <p className="font-medium text-gray-800">{brewery_detail.toji}</p>
              </div>
            )}
          </div>

          {brewery_detail.philosophy && (
            <div className="bg-stone-50 rounded-lg p-3 mt-2">
              <p className="text-xs text-gray-500 mb-1">양조 철학</p>
              <p className="text-sm text-gray-700 italic leading-relaxed">&ldquo;{brewery_detail.philosophy}&rdquo;</p>
            </div>
          )}
        </div>
      </ExpandableSection>
    </div>
  );
}
