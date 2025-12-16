"use client";

import { motion } from "framer-motion";

export const RatingRing = ({ rating }: { rating: number }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const progress = (rating / 5) * circumference;

    return (
        <div className="relative flex items-center justify-center w-12 h-12">
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="transparent"
                    className="text-white/20"
                />
                <motion.circle
                    cx="24"
                    cy="24"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    className="text-white"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: circumference - progress }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </svg>
            <span className="absolute text-[10px] font-bold font-sans">
                {rating}
            </span>
        </div>
    );
};
