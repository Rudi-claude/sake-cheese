'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './AuthModal';

export default function Header() {
  const { user, loading, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="사케치즈" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-gray-900">사케치즈</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
                지도
              </Link>
              <Link href="/sake" className="text-gray-600 hover:text-amber-600 transition-colors">
                사케 목록
              </Link>
              <Link href="/wiki" className="text-gray-600 hover:text-amber-600 transition-colors">
                사케 위키
              </Link>

              {loading ? (
                <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-lg" />
              ) : user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 text-gray-700 hover:text-amber-600"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-medium">
                        {user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm text-gray-500 truncate">{user.email}</p>
                      </div>
                      <Link
                        href="/my"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        마이페이지
                      </Link>
                      <Link
                        href="/sake/new"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                        onClick={() => setShowUserMenu(false)}
                      >
                        사케 등록
                      </Link>
                      <button
                        onClick={() => {
                          signOut();
                          setShowUserMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                      >
                        로그아웃
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  로그인
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
}
