
import React from 'react';
import Image from 'next/image';
import { Result } from '@/lib/results';
import { Sparkles, Lightbulb, BarChart, Dot } from 'lucide-react';

interface ResultCardProps {
    result: Result;
}

export default function ResultCard({ result }: ResultCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md mx-auto text-center space-y-6">
            <div className="space-y-4 flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-md">
                    <Image
                        src={result.image}
                        alt={result.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {result.title}
                    </h1>
                    <p className="text-pink-500 font-medium">{result.subtitle}</p>
                </div>
            </div>

            <div className="space-y-4 text-left bg-pink-50 p-6 rounded-xl">
                {result.description.map((desc, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed">
                        {desc}
                    </p>
                ))}
            </div>

            <div className="space-y-3 text-left">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    잘 맞는 유형
                </h3>
                <div className="flex flex-wrap gap-2">
                    {result.compatibility.map((type) => (
                        <span key={type} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                            {type}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-3 text-left">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                    연애 팁
                </h3>
                <ul className="space-y-2">
                    {result.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Dot className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-gray-500 mb-2 flex items-center gap-2">
                        <BarChart className="w-4 h-4" />
                        한밭대 통계
                    </h3>
                    <p className="text-gray-900 font-bold">
                        전체 응답자 중 {result.stats.percentage}% ({result.stats.count}명)
                    </p>
                    <p className="text-sm text-pink-500 mt-1">
                        한밭대에서 {result.stats.rank}번째로 많은 유형!
                    </p>
                </div>
            </div>
        </div>
    );
}
