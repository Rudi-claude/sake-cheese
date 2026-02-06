import Link from 'next/link';

const wikiCategories = [
  {
    id: 'process',
    emoji: '🏭',
    title: '사케 제조 과정',
    description: '쌀에서 술이 되기까지, 사케가 만들어지는 전 과정을 알아봅니다.',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 'terms',
    emoji: '📖',
    title: '사케 용어 사전',
    description: '정미보합, 아마카라, 일본주도 등 사케를 이해하는 핵심 용어들.',
    color: 'from-rose-400 to-rose-600',
  },
  {
    id: 'bottles',
    emoji: '🍶',
    title: '사케 병 규격',
    description: '욘고빙, 시고빙, 잇쇼빙 등 사케 병 크기와 용량 가이드.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'storage',
    emoji: '❄️',
    title: '사케 보관 방법',
    description: '맛있는 사케를 오래 즐기기 위한 보관 및 관리 팁.',
    color: 'from-teal-400 to-teal-600',
  },
  {
    id: 'beginners',
    emoji: '🌸',
    title: '사케 입문 가이드',
    description: '사케 뉴비를 위한 기초 상식과 추천 사케, 마시는 방법.',
    color: 'from-purple-400 to-purple-600',
  },
];

export default function WikiPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">사케 위키</h1>
        <p className="text-lg text-gray-600">
          사케에 대한 모든 것을 알아보세요
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wikiCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/wiki/${cat.id}`}
            className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className={`bg-gradient-to-br ${cat.color} p-6 text-white`}>
              <span className="text-5xl block mb-2">{cat.emoji}</span>
              <h2 className="text-xl font-bold">{cat.title}</h2>
            </div>
            <div className="p-5">
              <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
              <span className="inline-block mt-3 text-amber-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                자세히 보기 &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
