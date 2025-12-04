import React from 'react';
import { Option } from '@/lib/questions';

interface QuestionCardProps {
    question: string;
    options: Option[];
    onSelect: (value: number) => void;
}

export default function QuestionCard({
    question,
    options,
    onSelect,
}: QuestionCardProps) {
    return (
        <div className="space-y-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                {question}
            </h2>

            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelect(option.value)}
                        className="w-full p-4 text-left rounded-xl 
                       bg-white border-2 border-gray-100
                       hover:border-pink-200 hover:bg-pink-50 
                       active:scale-[0.98]
                       transition-all duration-200
                       text-gray-700 font-medium"
                    >
                        <span className="inline-block w-6 font-bold text-pink-400 mr-2">
                            {String.fromCharCode(97 + option.value)})
                        </span>
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
