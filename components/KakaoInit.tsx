'use client';

import { useEffect } from 'react';

export default function KakaoInit() {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Kakao) {
            const Kakao = (window as any).Kakao;
            if (!Kakao.isInitialized() && process.env.NEXT_PUBLIC_KAKAO_API_KEY) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        }
    }, []);

    return null;
}
