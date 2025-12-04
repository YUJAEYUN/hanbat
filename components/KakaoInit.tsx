'use client';

import Script from 'next/script';

export default function KakaoInit() {
    return (
        <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
            strategy="afterInteractive"
            onLoad={() => {
                if (typeof window !== 'undefined' && (window as any).Kakao) {
                    const Kakao = (window as any).Kakao;
                    if (!Kakao.isInitialized() && process.env.NEXT_PUBLIC_KAKAO_API_KEY) {
                        Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
                    }
                }
            }}
        />
    );
}
