import Link from 'next/link';

const storageTips = [
  {
    title: '온도 관리',
    emoji: '🌡️',
    rules: [
      { label: '나마자케 (생주)', temp: '반드시 5도 이하 냉장 보관', icon: '🧊' },
      { label: '긴조/다이긴조', temp: '냉장 보관 권장 (5~10도)', icon: '❄️' },
      { label: '준마이/혼조조', temp: '서늘한 곳 (15도 이하)', icon: '🌬️' },
      { label: '야마하이/키모토', temp: '상온 가능하나 서늘한 곳 권장', icon: '🏠' },
    ],
    tip: '사케의 가장 큰 적은 온도입니다. 특히 나마자케는 냉장 필수! 일반 사케도 높은 온도에 오래 두면 히네카(老香)라는 불쾌한 숙성취가 날 수 있습니다.',
  },
  {
    title: '빛 차단',
    emoji: '🌑',
    rules: [
      { label: '직사광선', temp: '절대 피할 것', icon: '☀️' },
      { label: '형광등', temp: '장시간 노출 피할 것', icon: '💡' },
      { label: '갈색 병', temp: '투명 병보다 빛 차단 효과 있음', icon: '🍾' },
      { label: '보관 장소', temp: '어두운 곳이나 신문지로 감싸기', icon: '📰' },
    ],
    tip: '자외선은 사케를 변질시키는 주요 원인입니다. 불과 몇 시간의 직사광선 노출로도 "닛코슈(日光臭)"라는 불쾌한 냄새가 생길 수 있습니다. 투명 병 사케는 특히 주의하세요.',
  },
  {
    title: '개봉 후 관리',
    emoji: '🔓',
    rules: [
      { label: '나마자케', temp: '개봉 후 2~3일 이내 소비', icon: '⏰' },
      { label: '긴조/다이긴조', temp: '개봉 후 1~2주 이내', icon: '📅' },
      { label: '준마이/혼조조', temp: '개봉 후 2~4주 이내', icon: '🗓️' },
      { label: '야마하이/키모토', temp: '개봉 후 1개월 이상 가능', icon: '📆' },
    ],
    tip: '개봉 후에는 공기와 접촉하여 산화가 진행됩니다. 마개를 꼭 닫고 냉장 보관하세요. 단, 야마하이나 숙성주는 개봉 후 오히려 맛이 열리기도 합니다.',
  },
  {
    title: '보관 자세',
    emoji: '📐',
    rules: [
      { label: '세로 보관', temp: '기본 권장 (공기 접촉면 최소화)', icon: '↕️' },
      { label: '가로 보관', temp: '가능하나 마개 소재 확인 필요', icon: '↔️' },
      { label: '와인 셀러', temp: '온도/습도 관리에 이상적', icon: '🍷' },
      { label: '냉장고 위치', temp: '문 쪽보다 안쪽 (온도 변화 적음)', icon: '🚪' },
    ],
    tip: '와인과 달리 사케는 세로 보관이 기본입니다. 금속 마개의 경우 가로로 눕히면 부식될 수 있습니다. 와인 셀러가 있다면 5~10도 설정으로 사케 보관에 활용할 수 있습니다.',
  },
];

const seasonalTips = [
  { season: '봄', emoji: '🌸', tip: '하나미자케(花見酒)! 꽃구경에는 가볍고 화사한 긴조가 잘 어울립니다.' },
  { season: '여름', emoji: '🏖️', tip: '차갑게 칠링한 나마자케나 스파클링 사케로 더위를 날려보세요.' },
  { season: '가을', emoji: '🍁', tip: '히야오로시(冷卸)의 계절! 봄에 담가 여름을 넘긴 숙성 사케가 출시됩니다.' },
  { season: '겨울', emoji: '❄️', tip: '아츠캉(熱燗, 데운 사케)으로 몸을 녹여보세요. 준마이나 혼조조가 적합합니다.' },
];

export default function StoragePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/wiki" className="text-amber-600 hover:underline">사케 위키</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">사케 보관 방법</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">사케 보관 방법</h1>
      <p className="text-gray-600 mb-10">맛있는 사케를 더 오래 즐기기 위한 보관 가이드입니다.</p>

      {/* 핵심 규칙 */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">보관의 3대 원칙</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <span className="text-3xl block mb-2">🌡️</span>
            <p className="font-bold text-gray-900">저온</p>
            <p className="text-sm text-gray-600">서늘하게</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <span className="text-3xl block mb-2">🌑</span>
            <p className="font-bold text-gray-900">암소</p>
            <p className="text-sm text-gray-600">어둡게</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <span className="text-3xl block mb-2">↕️</span>
            <p className="font-bold text-gray-900">세로</p>
            <p className="text-sm text-gray-600">세워서</p>
          </div>
        </div>
      </div>

      {/* 상세 가이드 */}
      <div className="space-y-8 mb-12">
        {storageTips.map((section) => (
          <div key={section.title} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-gray-900 text-white px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{section.emoji}</span>
              <h2 className="text-lg font-bold">{section.title}</h2>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {section.rules.map((rule) => (
                  <div key={rule.label} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <span className="text-xl">{rule.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{rule.label}</p>
                      <p className="text-gray-600 text-xs">{rule.temp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 leading-relaxed">{section.tip}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 계절별 팁 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">계절별 사케 즐기기</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {seasonalTips.map((s) => (
            <div key={s.season} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-3xl">{s.emoji}</span>
              <div>
                <p className="font-bold text-gray-900">{s.season}</p>
                <p className="text-sm text-gray-600">{s.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
