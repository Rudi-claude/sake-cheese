import Link from 'next/link';

const bottles = [
  {
    name: '잇쇼빙 (一升瓶)',
    reading: 'いっしょうびん',
    volume: '1,800ml (1.8L)',
    description: '가장 전통적인 사케 병 규격. "잇쇼(一升)"는 일본의 부피 단위로 약 1.8리터입니다.',
    usage: '이자카야, 요정, 양조장 직판에서 주로 사용. 사케를 많이 마시는 분이나 가게에서 구매합니다.',
    price: '보통 욘고빙의 2배 가격이지만, ml당 단가는 더 저렴합니다.',
    emoji: '🏺',
    height: 'h-48',
  },
  {
    name: '욘고빙 (四合瓶)',
    reading: 'よんごうびん',
    volume: '720ml',
    description: '가장 대중적인 사케 병 규격. "욘고(四合)"는 잇쇼의 4/10를 의미합니다.',
    usage: '가정에서 즐기기에 적당한 크기. 와인 병(750ml)과 비슷한 용량입니다.',
    price: '사케 입문자에게 추천하는 가장 일반적인 크기입니다.',
    emoji: '🍶',
    height: 'h-40',
  },
  {
    name: '산고빙 (三合瓶)',
    reading: 'さんごうびん',
    volume: '540ml',
    description: '"산고(三合)"는 잇쇼의 3/10를 의미합니다. 욘고빙보다 조금 작은 크기입니다.',
    usage: '2~3명이 한 번에 마시기 좋은 양. 일부 프리미엄 사케에서 사용됩니다.',
    price: '프리미엄 사케나 한정 양조 사케에서 자주 볼 수 있는 규격.',
    emoji: '🫗',
    height: 'h-36',
  },
  {
    name: '니고빙 (二合瓶)',
    reading: 'にごうびん',
    volume: '360ml',
    description: '"니고(二合)"는 잇쇼의 2/10를 의미합니다. 1~2명이 즐기기에 적당합니다.',
    usage: '혼술용이나 여러 종류를 조금씩 시음할 때 적합합니다.',
    price: '다양한 사케를 경험하고 싶은 입문자에게 추천.',
    emoji: '🥃',
    height: 'h-32',
  },
  {
    name: '이치고빙 (一合瓶)',
    reading: 'いちごうびん',
    volume: '180ml',
    description: '"이치고(一合)"는 잇쇼의 1/10를 의미합니다. 오쵸시(お銚子) 1개 분량입니다.',
    usage: '편의점이나 기차역에서 판매하는 소용량 사케. 부담 없이 한 잔 즐기기 좋습니다.',
    price: '시음용, 선물용, 여행 중 가볍게 즐기기 좋은 크기.',
    emoji: '🧴',
    height: 'h-24',
  },
];

const units = [
  { name: '잇쇼 (一升)', value: '1,800ml', go: '10합' },
  { name: '고고 (五合)', value: '900ml', go: '5합' },
  { name: '욘고 (四合)', value: '720ml', go: '4합' },
  { name: '산고 (三合)', value: '540ml', go: '3합' },
  { name: '니고 (二合)', value: '360ml', go: '2합' },
  { name: '이치고 (一合)', value: '180ml', go: '1합' },
];

export default function BottlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/wiki" className="text-amber-600 hover:underline">사케 위키</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">사케 병 규격</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">사케 병 규격</h1>
      <p className="text-gray-600 mb-10">사케 병의 다양한 크기와 용량을 알아봅니다.</p>

      {/* 병 크기 비교 비주얼 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">병 크기 비교</h2>
        <div className="flex items-end justify-center gap-6 md:gap-10">
          {bottles.map((b) => (
            <div key={b.name} className="text-center">
              <div className={`${b.height} w-10 md:w-14 bg-gradient-to-t from-amber-200 to-amber-50 rounded-t-lg border-2 border-amber-300 mx-auto flex items-center justify-center`}>
                <span className="text-xl md:text-2xl">{b.emoji}</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-gray-700 mt-2">{b.volume}</p>
              <p className="text-xs text-gray-500 hidden md:block">{b.name.split(' (')[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 상세 설명 */}
      <div className="space-y-6 mb-12">
        {bottles.map((b) => (
          <div key={b.name} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <span className="text-4xl">{b.emoji}</span>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{b.name}</h3>
                  <span className="text-sm text-gray-400">{b.reading}</span>
                  <span className="bg-amber-100 text-amber-700 text-sm px-2 py-0.5 rounded-full font-medium">
                    {b.volume}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{b.description}</p>
                <p className="text-gray-600 text-sm mb-1">{b.usage}</p>
                <p className="text-amber-700 text-sm font-medium">{b.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 단위 환산표 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">일본 사케 단위 환산표</h2>
        <p className="text-gray-600 text-sm mb-4">
          &quot;합(合, ごう)&quot;은 일본의 부피 단위로, 1합 = 약 180ml입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-tl-lg">단위</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">용량</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-tr-lg">합 환산</th>
              </tr>
            </thead>
            <tbody>
              {units.map((u, i) => (
                <tr key={u.name} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-900">{u.name}</td>
                  <td className="px-4 py-3 text-gray-700">{u.value}</td>
                  <td className="px-4 py-3 text-gray-700">{u.go}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
