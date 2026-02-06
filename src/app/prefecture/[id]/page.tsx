import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPrefectureById, regionColors } from '@/data/prefectures';
import { allSakes, filterSakesByPrefecture } from '@/data/sakes';
import SakeCard from '@/components/SakeCard';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PrefecturePage({ params }: PageProps) {
  const { id } = await params;
  const prefecture = getPrefectureById(id);

  if (!prefecture) {
    notFound();
  }

  // 해당 현의 사케 필터링
  const sakes = filterSakesByPrefecture(id);
  const regionColor = regionColors[prefecture.region];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 브레드크럼 */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-amber-600 hover:underline">홈</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/sake" className="text-amber-600 hover:underline">사케 목록</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">{prefecture.name_ko}</span>
      </nav>

      {/* 현 헤더 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center text-white text-3xl font-bold"
            style={{ backgroundColor: regionColor }}
          >
            {prefecture.name_ko.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{prefecture.name_ko}</h1>
            <p className="text-xl text-gray-500">{prefecture.name_ja}</p>
            <span
              className="inline-block mt-2 text-sm px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${regionColor}20`,
                color: regionColor,
              }}
            >
              {prefecture.region} 지역
            </span>
          </div>
        </div>
      </div>

      {/* 사케 목록 */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {prefecture.name_ko}의 사케
          <span className="ml-2 text-amber-600">({sakes.length})</span>
        </h2>
        <Link
          href="/sake/new"
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          사케 등록
        </Link>
      </div>

      {sakes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sakes.map((sake) => (
            <SakeCard key={sake.id} sake={sake} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">🍶</div>
          <p className="text-xl text-gray-600 mb-2">
            아직 등록된 사케가 없습니다
          </p>
          <p className="text-gray-500 mb-6">
            {prefecture.name_ko}의 사케를 알고 계신가요? 등록해주세요!
          </p>
          <Link
            href="/sake/new"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            사케 등록하기
          </Link>
        </div>
      )}
    </div>
  );
}

// 메타데이터 생성
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const prefecture = getPrefectureById(id);

  if (!prefecture) {
    return { title: '현을 찾을 수 없습니다' };
  }

  return {
    title: `${prefecture.name_ko} 사케 - 사케치즈`,
    description: `${prefecture.name_ko}(${prefecture.name_ja})의 대표 사케를 탐험해보세요.`,
  };
}
