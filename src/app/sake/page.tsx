'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allSakes, sakeTypes } from '@/data/sakes';
import { prefectures } from '@/data/prefectures';
import SakeCard from '@/components/SakeCard';

export default function SakeListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');

  const filteredSakes = useMemo(() => {
    let result = [...allSakes];

    // 검색어 필터
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        sake =>
          sake.name_ko.toLowerCase().includes(query) ||
          sake.name_ja.toLowerCase().includes(query) ||
          sake.brewery.toLowerCase().includes(query)
      );
    }

    // 종류 필터
    if (selectedType) {
      result = result.filter(sake => sake.type === selectedType);
    }

    // 현 필터
    if (selectedPrefecture) {
      result = result.filter(sake => sake.prefecture_id === selectedPrefecture);
    }

    // 정렬
    if (sortBy === 'rating') {
      result.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0));
    } else {
      result.sort((a, b) => a.name_ko.localeCompare(b.name_ko));
    }

    return result;
  }, [searchQuery, selectedType, selectedPrefecture, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">사케 목록</h1>
          <p className="text-gray-600 mt-1">총 {filteredSakes.length}개의 사케</p>
        </div>
        <Link
          href="/sake/new"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          사케 등록
        </Link>
      </div>

      {/* 필터 영역 */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 검색 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">검색</label>
            <input
              type="text"
              placeholder="사케명, 양조장..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* 종류 필터 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">종류</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">전체</option>
              {sakeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* 지역 필터 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">지역</label>
            <select
              value={selectedPrefecture}
              onChange={(e) => setSelectedPrefecture(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">전체</option>
              {prefectures.map(pref => (
                <option key={pref.id} value={pref.id}>{pref.name_ko}</option>
              ))}
            </select>
          </div>

          {/* 정렬 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">정렬</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="rating">평점 높은순</option>
              <option value="name">이름순</option>
            </select>
          </div>
        </div>

        {/* 필터 초기화 */}
        {(searchQuery || selectedType || selectedPrefecture) && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedType('');
              setSelectedPrefecture('');
            }}
            className="mt-4 text-amber-600 hover:underline text-sm"
          >
            필터 초기화
          </button>
        )}
      </div>

      {/* 사케 목록 */}
      {filteredSakes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSakes.map(sake => (
            <SakeCard key={sake.id} sake={sake} showPrefecture />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <div className="text-6xl mb-4">🍶</div>
          <p className="text-xl text-gray-600 mb-2">검색 결과가 없습니다</p>
          <p className="text-gray-500">다른 검색어나 필터를 시도해보세요.</p>
        </div>
      )}
    </div>
  );
}
