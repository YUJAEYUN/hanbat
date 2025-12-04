import React from 'react';
import Link from 'next/link';
import { results, ResultType } from '@/lib/results';
import ResultCard from '@/components/ResultCard';
import ShareButtons from '@/components/ShareButtons';
import { notFound } from 'next/navigation';
import { Lightbulb, Check } from 'lucide-react';

interface PageProps {
    params: Promise<{ type: string }>;
}

export default async function ResultPage({ params }: PageProps) {
    const { type } = await params;
    const result = results[type as ResultType];

    if (!result) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-md mx-auto space-y-8">
                <ResultCard result={result} />

                <ShareButtons />

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 space-y-6 text-center">
                    {/* ... */}

                    <div className="space-y-3">
                        <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-500" />
                            썸타임 팀의 솔직한 이야기
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed text-left">
                            안녕하세요, 저는 썸타임 서비스를 만들고 있는 <strong>한밭대 컴공과 학생</strong>이에요.<br /><br />
                            저희가 썸타임을 시작한 이유는 하나에요. 대학생들에게 진정으로 의미 있는 관계의 시작을 돕는 것이죠.<br /><br />
                            저희는 여러분이 썸타임에서 평생 머무르길 바라지 않아요.
                            오히려 여기서 좋은 사람을 만나 <strong>빨리 앱을 지우고 떠나시는 게</strong> 저희의 목표랍니다.<br /><br />
                            "왜 대화가 안 이어질까?", "왜 매칭이 안 될까?"<br />
                            여러분의 이런 고민들을 해결하기 위해, 저희는 알고리즘 뒤에 숨지 않고
                            <strong>'왜 이 사람과 매칭되었는지'</strong> 투명하게 알려드리려 노력하고 있어요.
                        </p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-xl text-sm text-gray-700 space-y-2 text-left">
                        <p className="font-bold text-pink-600 mb-2">썸타임이 약속하는 것</p>
                        <p className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> 화려한 마케팅보다 <strong>진솔한 소통</strong>을 할게요.</p>
                        <p className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> 단순 매칭보다 <strong>대화의 시작</strong>을 도울게요.</p>
                        <p className="flex items-center gap-2"><Check className="w-4 h-4 text-pink-500" /> 여러분의 목소리를 <strong>기술적 문제</strong>로 보고 해결할게요.</p>
                    </div>

                    <a
                        href="https://sometime.im"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-pink-500 text-white rounded-xl 
                       font-bold shadow-lg shadow-pink-200
                       hover:bg-pink-600 transition-colors"
                    >
                        진짜 인연 만나러 가기
                        <span className="block text-xs font-normal opacity-90 mt-1">
                        </span>
                    </a>

                    <div className="text-xs text-gray-400">
                    </div>
                </div>

                <div className="text-center pb-10">
                    <Link
                        href="/start"
                        className="text-gray-400 text-sm underline hover:text-gray-600"
                    >
                        테스트 다시하기
                    </Link>
                </div>
            </div>
        </main>
    );
}
