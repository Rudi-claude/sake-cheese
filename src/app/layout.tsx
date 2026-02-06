import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사케치즈 - 일본 지역별 사케 아카이브",
  description: "일본 47개 현의 사케를 탐험하고, 나만의 리뷰를 기록하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <AuthProvider>
          <Header />

          {/* 메인 콘텐츠 */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm">
                사케치즈 - 일본 사케 아카이빙 프로젝트
              </p>
              <p className="text-xs mt-2">
                Made with love for sake lovers
              </p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
