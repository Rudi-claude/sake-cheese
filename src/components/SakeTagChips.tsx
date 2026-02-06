'use client';

interface SakeTagChipsProps {
  tags: string[];
  style?: string;
  polishingRate?: string;
  riceVariety?: string;
  abv?: string;
}

export default function SakeTagChips({ tags, style, polishingRate, riceVariety, abv }: SakeTagChipsProps) {
  const metaTags: { label: string; value: string; color: string }[] = [];

  if (style) metaTags.push({ label: '스타일', value: style, color: 'bg-purple-100 text-purple-800' });
  if (polishingRate) metaTags.push({ label: '정미율', value: polishingRate, color: 'bg-blue-100 text-blue-800' });
  if (riceVariety) metaTags.push({ label: '원료미', value: riceVariety, color: 'bg-green-100 text-green-800' });
  if (abv) metaTags.push({ label: 'ABV', value: abv, color: 'bg-red-100 text-red-800' });

  return (
    <div className="space-y-3">
      {/* 메타 태그 */}
      {metaTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {metaTags.map((tag) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${tag.color}`}
            >
              <span className="opacity-70">{tag.label}</span>
              <span className="font-semibold">{tag.value}</span>
            </span>
          ))}
        </div>
      )}

      {/* 특징 태그 */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
