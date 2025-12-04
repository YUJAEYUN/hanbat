
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function StartPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="space-y-6 flex flex-col items-center">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                        <Image
                            src="/start-hero.png"
                            alt="Campus Couple"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                            한밭대생<br />
                            연애 유형 테스트
                        </h1>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            "우리는 어떤 연애를 꿈꾸고 있을까요?"<br />
                            <span className="text-sm text-gray-500 font-normal">
                                학생 개발팀이 만든, 가장 솔직한 마음 테스트
                            </span>
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 text-left border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3 text-gray-700">
                        <Check className="text-pink-500 w-5 h-5" />
                        10개 질문으로 알아보는 나의 스타일
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Check className="text-pink-500 w-5 h-5" />
                        개인정보는 1도 수집하지 않아요
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <Check className="text-pink-500 w-5 h-5" />
                        친구들에게 공유하고 서로 알아가보세요
                    </div>
                </div>

                <Link
                    href="/question/1"
                    className="block w-full py-4 bg-pink-500 text-white rounded-xl 
                     font-bold text-lg shadow-lg shadow-pink-200
                     hover:bg-pink-600 hover:scale-[1.02] 
                     active:scale-[0.98] transition-all"
                >
                    시작하기
                </Link>

                <p className="text-xs text-gray-400 mt-8">
                    Made by 한밭대 썸타임 팀
                </p>
            </div>
        </main>
    );
}
