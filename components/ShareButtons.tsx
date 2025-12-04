'use client';

import React from 'react';
import { Share2, Copy } from 'lucide-react';

export default function ShareButtons() {
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.origin + '/start');
        alert('링크가 복사되었어요!');
    };

    const handleKakaoShare = () => {
        if (typeof window !== 'undefined' && (window as any).Kakao) {
            const Kakao = (window as any).Kakao;

            if (!Kakao.isInitialized()) {
                alert('카카오톡 공유를 위해 API 키 설정이 필요합니다.');
                return;
            }

            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;

            Kakao.Share.sendDefault({
                objectType: 'feed',
                content: {
                    title: '한밭대생 연애 유형 테스트',
                    description: '나는 어떤 연애 스타일일까? 100% 리얼 학생 개발팀이 만든 테스트!',
                    imageUrl: `${baseUrl}/og-image.png`,
                    link: {
                        mobileWebUrl: baseUrl,
                        webUrl: baseUrl,
                    },
                },
                buttons: [
                    {
                        title: '테스트 하러가기',
                        link: {
                            mobileWebUrl: baseUrl,
                            webUrl: baseUrl,
                        },
                    },
                ],
            });
        } else {
            alert('카카오톡 SDK가 로드되지 않았습니다.');
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
