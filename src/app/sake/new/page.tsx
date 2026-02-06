'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { prefectures } from '@/data/prefectures';
import { sakeTypes } from '@/data/sakes';
import { supabase } from '@/lib/supabase';

export default function NewSakePage() {
  const router = useRouter();
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name_ko: '',
    name_ja: '',
    prefecture_id: '',
    brewery: '',
    type: '',
    description: '',
    polishing_rate: '',
    sweetness: '',
    smv: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('이미지 크기는 5MB 이하여야 합니다.');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      setError('로그인이 필요합니다.');
      return;
    }

    if (!formData.name_ko || !formData.prefecture_id || !formData.brewery || !formData.type) {
      setError('필수 항목을 모두 입력해주세요.');
      return;
    }

    setLoading(true);

    try {
      let imageUrl = null;

      // 이미지 업로드
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${user.id}/${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('sake-images')
          .upload(fileName, imageFile);

        if (uploadError) {
          console.error('Image upload error:', uploadError);
          // 이미지 업로드 실패해도 사케 등록은 진행
        } else {
          const { data: { publicUrl } } = supabase.storage
            .from('sake-images')
            .getPublicUrl(fileName);
          imageUrl = publicUrl;
        }
      }

      // 사케 등록
      const { error: insertError } = await supabase.from('sakes').insert({
        name_ko: formData.name_ko,
        name_ja: formData.name_ja || null,
        prefecture_id: formData.prefecture_id,
        brewery: formData.brewery,
        type: formData.type,
        description: formData.description || null,
        polishing_rate: formData.polishing_rate ? Number(formData.polishing_rate) : null,
        sweetness: formData.sweetness ? Number(formData.sweetness) : null,
        smv: formData.smv ? Number(formData.smv) : null,
        image_url: imageUrl,
        created_by: user.id,
      });

      if (insertError) {
        throw insertError;
      }

      alert('사케가 등록되었습니다!');
      router.push('/sake');
    } catch (err) {
      console.error('Error:', err);
      setError('등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🔒</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h1>
        <p className="text-gray-600 mb-6">사케를 등록하려면 먼저 로그인해주세요.</p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* 브레드크럼 */}
      <nav className="mb-6 text-sm">
        <Link href="/sake" className="text-amber-600 hover:underline">사케 목록</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600">새 사케 등록</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">새 사케 등록</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이미지 업로드 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            사케 이미지
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-amber-500 transition-colors"
          >
            {imagePreview ? (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-64 mx-auto rounded-lg"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ) : (
              <div>
                <div className="text-4xl mb-2">📷</div>
                <p className="text-gray-600">클릭하여 이미지 업로드</p>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG (최대 5MB)</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* 사케 이름 (한글) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            사케 이름 (한글) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name_ko}
            onChange={(e) => setFormData({ ...formData, name_ko: e.target.value })}
            required
            placeholder="예: 닷사이"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* 사케 이름 (일본어) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            사케 이름 (일본어)
          </label>
          <input
            type="text"
            value={formData.name_ja}
            onChange={(e) => setFormData({ ...formData, name_ja: e.target.value })}
            placeholder="예: 獺祭"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* 지역 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            생산 지역 <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.prefecture_id}
            onChange={(e) => setFormData({ ...formData, prefecture_id: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">지역 선택</option>
            {prefectures.map(pref => (
              <option key={pref.id} value={pref.id}>
                {pref.name_ko} ({pref.name_ja})
              </option>
            ))}
          </select>
        </div>

        {/* 양조장 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            양조장 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.brewery}
            onChange={(e) => setFormData({ ...formData, brewery: e.target.value })}
            required
            placeholder="예: 아사히 주조"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* 종류 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            종류 <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">종류 선택</option>
            {sakeTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* 정미보합 / 아마카라 / 일본주도 */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              정미보합 (%)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={formData.polishing_rate}
              onChange={(e) => setFormData({ ...formData, polishing_rate: e.target.value })}
              placeholder="예: 50"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-1">쌀을 깎은 비율</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              아마카라
            </label>
            <select
              value={formData.sweetness}
              onChange={(e) => setFormData({ ...formData, sweetness: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="">선택</option>
              <option value="-2">매우 달콤</option>
              <option value="-1">달콤</option>
              <option value="0">중간</option>
              <option value="1">드라이</option>
              <option value="2">매우 드라이</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">단맛/쓴맛 정도</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              일본주도 (SMV)
            </label>
            <input
              type="number"
              min="-15"
              max="15"
              value={formData.smv}
              onChange={(e) => setFormData({ ...formData, smv: e.target.value })}
              placeholder="예: +3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-1">+ 드라이 / - 스위트</p>
          </div>
        </div>

        {/* 설명 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            설명
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            placeholder="사케에 대한 설명을 입력하세요..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* 버튼 */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white font-medium py-3 rounded-lg transition-colors"
          >
            {loading ? '등록 중...' : '사케 등록'}
          </button>
          <Link
            href="/sake"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-lg transition-colors text-center"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
