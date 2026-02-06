import Link from 'next/link';

const drinkingTemps = [
  { name: '토비키리캉 (飛びきり燗)', temp: '55도 이상', desc: '아주 뜨겁게', emoji: '🔥', suitable: '혼조조, 후츠슈' },
  { name: '아츠캉 (熱燗)', temp: '50도', desc: '뜨겁게', emoji: '♨️', suitable: '준마이, 혼조조' },
  { name: '조캉 (上燗)', temp: '45도', desc: '약간 뜨겁게', emoji: '🌡️', suitable: '준마이, 야마하이' },
  { name: '누루캉 (ぬる燗)', temp: '40도', desc: '미지근하게', emoji: '😌', suitable: '준마이, 준마이긴조' },
  { name: '히토하다캉 (人肌燗)', temp: '35도', desc: '체온 정도', emoji: '🤲', suitable: '준마이긴조' },
  { name: '히야 (冷や)', temp: '상온 (20도)', desc: '상온 그대로', emoji: '🏠', suitable: '대부분의 사케' },
  { name: '스즈히에 (涼冷え)', temp: '15도', desc: '선선하게', emoji: '🌬️', suitable: '긴조, 준마이긴조' },
  { name: '하나히에 (花冷え)', temp: '10도', desc: '꽃피는 추위', emoji: '🌸', suitable: '다이긴조, 긴조' },
  { name: '유키히에 (雪冷え)', temp: '5도', desc: '눈처럼 차갑게', emoji: '❄️', suitable: '나마자케, 다이긴조' },
];

const faqs = [
  {
    q: '사케와 소주는 뭐가 달라요?',
    a: '사케(일본주)는 쌀로 만든 "양조주"로 맥주나 와인과 같은 분류입니다. 소주는 "증류주"로 보드카나 위스키와 같은 분류입니다. 사케는 보통 15~16도, 소주는 25~40도 정도입니다.',
  },
  {
    q: '사케에도 유통기한이 있나요?',
    a: '사케에는 법적 유통기한이 없습니다. 하지만 제조일로부터 1년 이내에 마시는 것을 권장합니다. 나마자케(생주)는 냉장 보관 후 빠르게 소비하세요. 반면 숙성주(코슈)는 수년간 숙성하여 즐기기도 합니다.',
  },
  {
    q: '사케잔이 넘치도록 따라주는 건 뭔가요?',
    a: '"모리키리(盛り切り)"라고 합니다. 잔에 넘칠 정도로 가득 따르는 것은 일본에서 환대와 넉넉함의 표현입니다. 나무 상자(마스) 위에 유리잔을 놓고 넘치게 따르는 것이 일반적입니다.',
  },
  {
    q: '사케는 어떤 안주와 잘 어울려요?',
    a: '사케는 일본 요리는 물론 다양한 음식과 잘 어울립니다. 가벼운 긴조는 회, 초밥과, 바디감 있는 준마이는 구운 고기, 치즈와 잘 맞습니다. "사케치즈"라는 이름처럼 사케와 치즈의 조합도 훌륭합니다!',
  },
  {
    q: '사케를 마실 때 에티켓이 있나요?',
    a: '일본에서는 자기 잔에 직접 따르지 않고 서로 따라주는 것이 예의입니다(오샤쿠, お酌). "캉파이(乾杯)!" 하고 건배한 뒤 마시면 됩니다. 잔이 비면 상대방에게 따라주세요.',
  },
  {
    q: '가격이 비싼 사케가 항상 맛있나요?',
    a: '꼭 그렇지 않습니다. 가격은 정미보합, 양조 방법, 브랜드 가치에 의해 결정됩니다. 후츠슈(보통주)도 맛있는 것이 많고, 자신의 취향에 맞는 사케가 최고의 사케입니다.',
  },
  {
    q: '준마이, 긴조, 다이긴조... 뭐가 좋은 건가요?',
    a: '등급이 아닌 "스타일"로 이해하세요. 준마이는 쌀 맛이 풍부하고, 긴조는 향이 화려하며, 다이긴조는 섬세하고 우아합니다. 입문자라면 준마이긴조부터 시작하는 것을 추천합니다.',
  },
];

const starterSakes = [
  { name: '닷사이 45', type: '준마이다이긴조', reason: '깔끔하고 과일향이 풍부해 입문자에게 최적', difficulty: '쉬움' },
  { name: '핫카이산', type: '준마이다이긴조', reason: '부드럽고 깔끔해서 누구나 좋아하는 맛', difficulty: '쉬움' },
  { name: '구보타 만쥬', type: '준마이다이긴조', reason: '균형 잡힌 맛과 우아한 향', difficulty: '쉬움' },
  { name: '데와자쿠라', type: '긴조', reason: '가성비 좋고 과일향이 은은한 입문용 사케', difficulty: '쉬움' },
  { name: '겟게이칸', type: '준마이', reason: '어디서든 쉽게 구할 수 있고 부담 없는 가격', difficulty: '매우 쉬움' },
  { name: '아라마사', type: '준마이', reason: '와인처럼 산미가 있어 와인 좋아하는 분에게 추천', difficulty: '중간' },
];

export default function BeginnersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/wiki" className="text-amber-600 hover:underline">사케 위키</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">사케 입문 가이드</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">사케 입문 가이드</h1>
      <p className="text-gray-600 mb-10">사케가 처음이라면 여기서 시작하세요!</p>

      {/* 온도별 마시는 법 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">온도별 마시는 법</h2>
        <p className="text-gray-600 mb-6">사케는 5도부터 55도까지, 온도에 따라 전혀 다른 맛을 보여줍니다.</p>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 via-amber-400 to-red-500 h-3" />
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left px-3 py-2 text-sm text-gray-600">이름</th>
                    <th className="text-left px-3 py-2 text-sm text-gray-600">온도</th>
                    <th className="text-left px-3 py-2 text-sm text-gray-600 hidden sm:table-cell">설명</th>
                    <th className="text-left px-3 py-2 text-sm text-gray-600">추천 사케</th>
                  </tr>
                </thead>
                <tbody>
                  {drinkingTemps.map((t, i) => (
                    <tr key={t.name} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-amber-50 transition-colors`}>
                      <td className="px-3 py-2.5">
                        <span className="mr-1">{t.emoji}</span>
                        <span className="text-sm font-medium text-gray-900">{t.name.split(' (')[0]}</span>
                      </td>
                      <td className="px-3 py-2.5 text-sm text-gray-700">{t.temp}</td>
                      <td className="px-3 py-2.5 text-sm text-gray-500 hidden sm:table-cell">{t.desc}</td>
                      <td className="px-3 py-2.5 text-sm text-amber-700">{t.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 입문 추천 사케 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">입문자 추천 사케</h2>
        <p className="text-gray-600 mb-6">처음 사케를 시작한다면 이 사케들부터 도전해보세요.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {starterSakes.map((s) => (
            <div key={s.name} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900">{s.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  s.difficulty === '매우 쉬움' ? 'bg-green-100 text-green-700' :
                  s.difficulty === '쉬움' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {s.difficulty}
                </span>
              </div>
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded mb-2">
                {s.type}
              </span>
              <p className="text-sm text-gray-600">{s.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-5">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-amber-500">Q.</span>
                {faq.q}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
