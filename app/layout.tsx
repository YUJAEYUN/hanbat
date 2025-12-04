import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "한밭대생 연애 유형 테스트",
  description: "나는 어떤 연애 스타일일까? 2분 테스트",
  openGraph: {
    title: "한밭대생 연애 유형 테스트",
    description: "나는 어떤 연애 스타일일까?",
    images: ["/og-image.png"],
  },
};

import Script from 'next/script';
import KakaoInit from '@/components/KakaoInit';

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <KakaoInit />
        {children}
      </body>
    </html>
  );
}
