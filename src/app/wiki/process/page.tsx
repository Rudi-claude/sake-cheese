import Link from 'next/link';

const steps = [
  {
    step: 1,
    title: '정미 (精米)',
    titleJa: 'せいまい',
    description: '현미의 바깥층을 깎아내는 과정입니다. 바깥층에는 단백질, 지방 등 잡미의 원인이 되는 성분이 있어, 이를 제거할수록 깔끔한 맛의 사케가 됩니다.',
    detail: '정미보합(精米歩合)이란 깎고 남은 쌀의 비율입니다. 예를 들어 정미보합 50%면 쌀의 절반을 깎아낸 것입니다. 다이긴조는 50% 이하, 긴조는 60% 이하로 규정됩니다.',
    emoji: '🌾',
  },
  {
    step: 2,
    title: '세미·침지 (洗米·浸漬)',
    titleJa: 'せんまい·しんせき',
    description: '정미된 쌀을 씻어 쌀겨를 제거하고, 물에 담가 수분을 흡수시킵니다.',
    detail: '고급 사케일수록 초 단위로 침지 시간을 관리합니다. 수분 흡수량이 누룩 만들기와 발효에 큰 영향을 미치기 때문입니다.',
    emoji: '💧',
  },
  {
    step: 3,
    title: '증미 (蒸米)',
    titleJa: 'じょうまい',
    description: '쌀을 쪄서 전분을 알파화시킵니다. 찐 쌀은 누룩용, 효모용, 발효용으로 나뉘어 사용됩니다.',
    detail: '좋은 증미는 겉은 단단하고 속은 부드러운 "외경내유(外硬内軟)" 상태여야 합니다.',
    emoji: '♨️',
  },
  {
    step: 4,
    title: '제국 (製麹)',
    titleJa: 'せいきく',
    description: '찐 쌀에 누룩곰팡이(코지균)를 뿌려 누룩을 만듭니다. 누룩은 쌀의 전분을 당으로 분해하는 역할을 합니다.',
    detail: '사케 양조에서 가장 중요한 단계로, "하루는 누룩, 이틀은 모토, 삼일은 담금(一麹、二酛、三造り)"이라는 말이 있을 정도입니다. 약 48시간 동안 온도와 습도를 세밀하게 조절합니다.',
    emoji: '🍄',
  },
  {
    step: 5,
    title: '슈보 (酒母/酛)',
    titleJa: 'しゅぼ/もと',
    description: '효모를 대량으로 배양하는 단계입니다. 누룩, 찐 쌀, 물, 효모를 혼합하여 발효의 씨앗이 되는 슈보(술밑)를 만듭니다.',
    detail: '소쿠조(速醸)는 유산을 첨가하여 빠르게 만드는 방법이고, 키모토(生酛)/야마하이(山廃)는 자연의 유산균을 활용하여 만드는 전통적인 방법입니다. 야마하이는 더 복잡하고 깊은 맛이 특징입니다.',
    emoji: '🧫',
  },
  {
    step: 6,
    title: '담금 (仕込み)',
    titleJa: 'しこみ',
    description: '슈보에 누룩, 찐 쌀, 물을 3단계에 걸쳐 추가합니다(산단지코미). 이 과정에서 병행복발효가 일어납니다.',
    detail: '"병행복발효(並行複発酵)"는 사케만의 독특한 발효 방식입니다. 누룩이 전분을 당으로 바꾸는 당화와, 효모가 당을 알코올로 바꾸는 발효가 동시에 진행됩니다. 이 덕분에 사케는 양조주 중 가장 높은 알코올 도수(약 20%)를 달성할 수 있습니다.',
    emoji: '🫗',
  },
  {
    step: 7,
    title: '상조 (上槽)',
    titleJa: 'じょうそう',
    description: '발효가 끝난 모로미(醪)를 짜서 술과 술지게미(사케카스)로 분리합니다.',
    detail: '압착 방식에 따라 맛이 달라집니다. 후쿠로쓰리(袋吊り)는 자루에 담아 자연 낙하시키는 최고급 방식이고, 야부타(薮田)는 기계로 압착하는 일반적인 방식입니다.',
    emoji: '🧴',
  },
  {
    step: 8,
    title: '여과·화입·저장 (濾過·火入れ·貯蔵)',
    titleJa: 'ろか·ひいれ·ちょぞう',
    description: '불순물을 걸러내고, 60~65도로 가열하여 살균한 뒤 숙성시킵니다.',
    detail: '화입을 하지 않은 것이 나마자케(生酒), 한 번만 한 것이 나마쵸조(生貯蔵) 또는 나마즈메(生詰め)입니다. 보통 6개월~1년 정도 숙성시켜 맛을 안정시킵니다.',
    emoji: '🔥',
  },
  {
    step: 9,
    title: '병입·출하 (瓶詰め·出荷)',
    titleJa: 'びんづめ·しゅっか',
    description: '가수(물 추가)하여 알코올 도수를 15~16도로 조절한 후 병에 담아 출하합니다.',
    detail: '원주(原酒)는 가수하지 않은 것으로 알코올 도수가 17~20도로 높습니다. 최근에는 저알코올 사케(8~12도)도 인기입니다.',
    emoji: '🍶',
  },
];

export default function ProcessPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/wiki" className="text-amber-600 hover:underline">사케 위키</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">사케 제조 과정</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">사케 제조 과정</h1>
      <p className="text-gray-600 mb-10">쌀 한 톨에서 한 잔의 사케가 되기까지, 9단계의 여정을 따라가 봅니다.</p>

      <div className="relative">
        {/* 타임라인 라인 */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200 hidden md:block" />

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.step} className="relative flex gap-6">
              {/* 스텝 넘버 */}
              <div className="flex-shrink-0 w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10 shadow-lg">
                {s.emoji}
              </div>

              {/* 콘텐츠 */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                    Step {s.step}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
                  <span className="text-sm text-gray-400">{s.titleJa}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{s.description}</p>
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
