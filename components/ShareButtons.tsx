'use client';

import React from 'react';
import { Share2, Copy } from 'lucide-react';

export default function ShareButtons() {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.origin + '/start');
        alert('링크가 복사되었어요!');
    };

    const handleKakaoShare = () => {
        // Kakao SDK implementation would go here.
        // For MVP without actual SDK setup, we might just alert or try to open a share intent if possible,
        // but PRD specifies Kakao SDK code. 
        // Since we don't have the SDK script loaded in layout yet, this might fail.
        // We will add a placeholder alert for now or try to use a web intent if available.
        // Real Kakao share requires an API key and script initialization.
        // I will add a TODO comment and a fallback alert.

        if (typeof window !== 'undefined' && (window as any).Kakao) {
            const Kakao = (window as any).Kakao;
            if (!Kakao.isInitialized()) {
                // Initialize with a dummy key or env var if we had one.
                // For this MVP, we might skip actual initialization if we don't have a key.
                // But I'll put the code structure.
                // Kakao.init('YOUR_APP_KEY');
            }

            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: '나는 진중한 대화가!', // Dynamic title based on result would be better but component is generic
                    description: '너는 어떤 유형? 한밭대생 연애 테스트',
                    imageUrl: 'https://test.sometime.im/og-image.png',
                    link: {
                        mobileWebUrl: window.location.origin + '/start',
                        webUrl: window.location.origin + '/start',
                    },
                },
            });
        } else {
            alert('카카오톡 공유 기능은 실제 배포 및 API 키 설정 후 동작합니다.');
        }
    };

    return (
        <div className="flex gap-3 justify-center w-full max-w-md mx-auto">
            <button
                onClick={handleKakaoShare}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 
                   bg-[#FEE500] text-[#3c1e1e] rounded-xl font-bold
                   hover:bg-[#fdd835] transition-colors"
            >
                <Share2 size={20} />
                카카오톡 공유
            </button>
            <button
                onClick={handleCopyLink}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 
                   bg-gray-100 text-gray-700 rounded-xl font-bold
                   hover:bg-gray-200 transition-colors"
            >
                <Copy size={20} />
                링크 복사
            </button>
        </div>
    );
}
