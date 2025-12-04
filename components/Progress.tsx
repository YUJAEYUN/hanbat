import React from 'react';
import { motion } from 'framer-motion';

interface ProgressProps {
    current: number;
    total: number;
}

export default function Progress({ current, total }: ProgressProps) {
    const percentage = (current / total) * 100;

    return (
        <div className="space-y-2 w-full max-w-md mx-auto">
            <div className="flex justify-between text-sm font-medium text-gray-500">
                <span>{total}개 중 {current}번째</span>
                <span>{Math.round(percentage)}%</span>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />
            </div>
        </div>
    );
}
