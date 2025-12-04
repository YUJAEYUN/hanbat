'use client';

import React from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { questions } from '@/lib/questions';
import QuestionCard from '@/components/QuestionCard';
import Progress from '@/components/Progress';
import { calculateType } from '@/lib/calculator';

export default function QuestionPage() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    // Get current question ID from URL
    const id = Number(params.id);
    const questionIndex = id - 1;
    const question = questions[questionIndex];

    // Get accumulated answers from URL
    const answersString = searchParams.get('answers') || '';
    const previousAnswers = answersString ? answersString.split(',').map(Number) : [];

    const handleSelect = (value: number) => {
        // Accumulate answers
        const newAnswers = [...previousAnswers, value];

        // Check if it's the last question
        if (id === 10) {
            // Calculate result
            const resultType = calculateType(newAnswers);
            // Redirect to result page
            router.push(`/result/${resultType}`);
        } else {
            // Go to next question with updated answers
            const nextId = id + 1;
            router.push(`/question/${nextId}?answers=${newAnswers.join(',')}`);
        }
    };

    if (!question) {
        return <div>Question not found</div>;
    }

    return (
        <main className="min-h-screen bg-white flex flex-col p-6">
            <div className="w-full max-w-md mx-auto space-y-8 pt-10">
                <div className="space-y-4">
                    <button
                        onClick={() => router.back()}
                        className="text-gray-400 hover:text-gray-600 text-sm font-medium"
                    >
                        ← 뒤로가기
                    </button>
                    <Progress current={id} total={10} />
                </div>

                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <QuestionCard
                        question={question.text}
                        options={question.options}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
        </main>
    );
}
