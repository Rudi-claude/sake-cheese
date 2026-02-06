import Link from 'next/link';

const termCategories = [
  {
    category: '스펙 용어',
    terms: [
      {
        term: '정미보합 (精米歩合)',
        reading: 'せいまいぶあい',
        description: '쌀을 깎고 남은 비율. 50%면 절반을 깎아낸 것입니다.',
        example: '다이긴조: 50% 이하 / 긴조: 60% 이하',
        emoji: '🌾',
      },
      {
        term: '일본주도 (日本酒度)',
        reading: 'にほんしゅど',
        description: '사케의 당도를 나타내는 수치. 플러스(+)일수록 드라이(辛口), 마이너스(-)일수록 스위트(甘口)합니다.',
        example: '+5 이상: 매우 드라이 / 0 근처: 중간 / -5 이하: 매우 달콤',
        emoji: '📊',
      },
      {
        term: '아마카라 (甘辛)',
        reading: 'あまから',
        description: '단맛(아마이)과 매운맛/드라이함(카라이)의 정도. 일본주도와 산도를 종합한 실제 맛의 느낌입니다.',
        example: '아마쿠치(甘口) = 달콤 / 카라쿠치(辛口) = 드라이',
        emoji: '🍬',
      },
      {
        term: '산도 (酸度)',
        reading: 'さんど',
        description: '사케에 포함된 유기산의 양. 산도가 높을수록 맛이 진하고, 낮을수록 담백합니다.',
        example: '평균 약 1.2~1.5 정도',
        emoji: '🧪',
      },
      {
        term: '아미노산도 (アミノ酸度)',
        reading: 'アミノさんど',
        description: '아미노산의 양. 높을수록 감칠맛(우마미)이 풍부하고, 낮을수록 깔끔합니다.',
        example: '평균 약 1.0~1.5 정도',
        emoji: '🧬',
      },
      {
        term: '알코올도수 (アルコール度数)',
        reading: 'アルコールどすう',
        description: '사케의 알코올 함량. 일반적으로 15~16도이며, 원주는 17~20도까지 올라갑니다.',
        example: '저알코올: 8~12도 / 일반: 15~16도 / 원주: 17~20도',
        emoji: '🔢',
      },
    ],
  },
  {
    category: '등급 및 종류',
    terms: [
      {
        term: '준마이 (純米)',
        reading: 'じゅんまい',
        description: '쌀, 누룩, 물만으로 만든 순수 쌀 사케. 양조 알코올을 첨가하지 않습니다.',
        example: '쌀의 맛이 풍부하고 바디감이 있는 편',
        emoji: '🍚',
      },
      {
        term: '긴조 (吟醸)',
        reading: 'ぎんじょう',
        description: '정미보합 60% 이하로 깎은 쌀로 저온에서 천천히 발효시킨 사케. 화려한 과일향(긴조카)이 특징입니다.',
        example: '준마이긴조 = 순수쌀 + 긴조 양조법',
        emoji: '✨',
      },
      {
        term: '다이긴조 (大吟醸)',
        reading: 'だいぎんじょう',
        description: '정미보합 50% 이하. 긴조보다 더 정밀하게 깎아 만든 최상급 사케입니다.',
        example: '닷사이 23 = 정미보합 23%의 준마이다이긴조',
        emoji: '💎',
      },
      {
        term: '혼조조 (本醸造)',
        reading: 'ほんじょうぞう',
        description: '소량의 양조 알코올을 첨가하여 향을 끌어내고 맛을 가볍게 만든 사케입니다.',
        example: '가볍고 깔끔한 맛으로 매일 즐기기 좋음',
        emoji: '🏷️',
      },
      {
        term: '후츠슈 (普通酒)',
        reading: 'ふつうしゅ',
        description: '특정명칭에 해당하지 않는 일반 사케. 일본 사케 생산량의 약 60%를 차지합니다.',
        example: '편의점이나 슈퍼에서 가장 흔히 볼 수 있는 사케',
        emoji: '🏪',
      },
      {
        term: '나마자케 (生酒)',
        reading: 'なまざけ',
        description: '화입(가열살균)을 하지 않은 비살균 사케. 신선하고 프레시한 맛이 특징입니다.',
        example: '반드시 냉장 보관 필요!',
        emoji: '🧊',
      },
      {
        term: '니고리자케 (にごり酒)',
        reading: 'にごりざけ',
        description: '거친 망으로 걸러 쌀 입자가 남아 뿌옇게 보이는 사케. 부드럽고 크리미한 맛입니다.',
        example: '막걸리와 비슷한 외관이지만 맛은 완전히 다름',
        emoji: '🥛',
      },
    ],
  },
  {
    category: '양조 용어',
    terms: [
      {
        term: '야마다니시키 (山田錦)',
        reading: 'やまだにしき',
        description: '사케 양조용 쌀의 최고봉. 효고현이 주산지이며 "주조호적미의 왕"으로 불립니다.',
        example: '닷사이, 쥬욘다이 등 유명 사케에 사용',
        emoji: '👑',
      },
      {
        term: '코지 (麹)',
        reading: 'こうじ',
        description: '찐 쌀에 코지균(누룩곰팡이)을 번식시킨 것. 전분을 당으로 분해하는 핵심 역할입니다.',
        example: '사케, 미소, 간장 등 일본 발효식품의 근간',
        emoji: '🍄',
      },
      {
        term: '모로미 (醪)',
        reading: 'もろみ',
        description: '본 담금 후 발효 중인 상태의 술덧. 이것을 짜면 사케가 됩니다.',
        example: '약 2~4주간 발효 진행',
        emoji: '🫧',
      },
      {
        term: '키모토 (生酛)',
        reading: 'きもと',
        description: '자연의 유산균을 활용하는 전통 양조법. 산뜻하면서도 깊은 맛이 특징입니다.',
        example: '손으로 쌀을 으깨는 "야마오로시" 작업 포함',
        emoji: '🏺',
      },
      {
        term: '야마하이 (山廃)',
        reading: 'やまはい',
        description: '"야마오로시 하이시(山卸廃止)"의 줄임말. 키모토에서 쌀을 으깨는 과정을 생략한 방법입니다.',
        example: '키모토보다 진하고 복잡한 맛 경향',
        emoji: '⛰️',
      },
      {
        term: '긴조카 (吟醸香)',
        reading: 'ぎんじょうか',
        description: '긴조 이상의 사케에서 나는 과일 같은 향. 사과, 바나나, 멜론 향이 대표적입니다.',
        example: '저온 발효에서 효모가 만들어내는 에스테르 성분',
        emoji: '🍎',
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/wiki" className="text-amber-600 hover:underline">사케 위키</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">사케 용어 사전</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">사케 용어 사전</h1>
      <p className="text-gray-600 mb-10">사케를 이해하는 데 필요한 핵심 용어들을 정리했습니다.</p>

      {termCategories.map((cat) => (
        <div key={cat.category} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-7 bg-amber-500 rounded-full" />
            {cat.category}
          </h2>

          <div className="space-y-4">
            {cat.terms.map((t) => (
              <div key={t.term} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{t.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{t.term}</h3>
                      <span className="text-sm text-gray-400">{t.reading}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{t.description}</p>
                    <div className="bg-amber-50 rounded-lg px-3 py-2">
                      <p className="text-sm text-amber-800">{t.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
