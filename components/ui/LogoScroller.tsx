'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { awards } from '@/data/awards';

interface LogoScrollerProps {
    className?: string;
}

export default function LogoScroller({ className = '' }: LogoScrollerProps) {
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (hoveredText) return;

        const interval = setInterval(() => {
            setIsFading(true);
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % awards.length);
                setIsFading(false);
            }, 300);
        }, 3000);

        return () => {
            clearInterval(interval);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [hoveredText]);

    const displayText = hoveredText || awards[currentIndex].name;

    return (
        <div className={`relative w-full max-w-6xl mx-auto py-4 px-4 ${className}`}>

            {/* Title Pill */}
            <div className="flex justify-center mb-4">
                <span className="inline-block px-5 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-full">
                    Mehrfach ausgezeichnete Endo-Technologie
                </span>
            </div>

            {/* Awards Carousel Container */}
            <div className="relative">
                {/* Gradient Overlays for Fade Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

                {/* Scrolling track */}
                <div className="w-full overflow-hidden py-2">
                    <div
                        className={`flex items-center gap-16 animate-scroll ${isPaused ? 'paused' : ''}`}
                        style={{ width: 'max-content' }}
                    >
                        {[...Array(6)].map((_, setIndex) => (
                            <div key={setIndex} className="flex items-center gap-16 shrink-0">
                                {awards.map((award) => (
                                    <div
                                        key={`${setIndex}-${award.id}`}
                                        className="group relative flex flex-col items-center justify-center"
                                        onMouseEnter={() => {
                                            setHoveredText(award.name);
                                            setIsPaused(true);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredText(null);
                                            setIsPaused(false);
                                        }}
                                    >
                                        <Link href={`/auszeichnungen/${award.slug}`} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={`/logos/${award.image}`}
                                                alt={award.alt}
                                                className="h-14 w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Award Description */}
            <div className="h-8 mt-3 flex items-center justify-center">
                <p
                    className={`text-xs font-medium text-slate-500 text-center whitespace-nowrap transition-opacity duration-300 ${isFading && !hoveredText ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {displayText}
                </p>
            </div>

            {/* Link to studies page */}
            <div className="text-center mt-2">
                <Link
                    href="/studien-und-belege"
                    className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                    Empirische Studien und Belege →
                </Link>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 35s linear infinite;
                }
                .animate-scroll.paused {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
