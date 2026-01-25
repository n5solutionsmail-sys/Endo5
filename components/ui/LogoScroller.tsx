'use client';

import { useState, useEffect } from 'react';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

interface LogoScrollerProps {
    className?: string;
}

export default function LogoScroller({ className = '' }: LogoScrollerProps) {
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const logos = [
        { id: 1, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner', image: 'shell.png', alt: 'Shell Award' },
        { id: 2, name: 'H&V NEWS AWARDS 2015 DOMESTIC H&V PRODUCT OF THE YEAR', image: 'hv-news-award.png', alt: 'H&V News Award' },
        { id: 3, name: 'CIBSE BUILDING PERFORMANCE AWARDS 2016 - ENERGY SAVING PRODUCT OF THE YEAR', image: 'cibse-award.png', alt: 'CIBSE Award' },
        { id: 4, name: 'ENERGY EFFICIENCY & HEALTHY HOMES REGIONAL AWARDS 2017 SMALL SCALE PROJECT OF THE YEAR', image: 'energy-efficiency-award.png', alt: 'Energy Efficiency Award' },
    ];

    // Auto-cycle through descriptions when not hovering
    useEffect(() => {
        if (hoveredText) return; // Don't cycle when hovering

        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % logos.length);
                setIsFading(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [hoveredText, logos.length]);

    // Display text: show hovered text or auto-cycling text
    const displayText = hoveredText || logos[currentIndex].name;

    return (
        <div className={`relative w-full max-w-6xl mx-auto py-4 px-4 ${className}`}>

            {/* Title Pill */}
            <div className="flex justify-center mb-4">
                <span className="inline-block px-5 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    EndoTherm® ist mehrfach ausgezeichnet
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
                        {/* Duplicate the logos multiple times for seamless infinite scroll */}
                        {[...Array(6)].map((_, setIndex) => (
                            <div key={setIndex} className="flex items-center gap-16 shrink-0">
                                {logos.map((logo) => (
                                    <div
                                        key={`${setIndex}-${logo.id}`}
                                        className="group relative flex flex-col items-center justify-center"
                                        onMouseEnter={() => {
                                            setHoveredText(logo.name);
                                            setIsPaused(true);
                                        }}
                                        onMouseLeave={() => {
                                            setHoveredText(null);
                                            setIsPaused(false);
                                        }}
                                    >
                                        {/* Logo - larger size with hover scale */}
                                        <img
                                            src={`${BASE_PATH}/logos/${logo.image}`}
                                            alt={logo.alt}
                                            className="h-14 w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Award Description - Always visible, fades between descriptions */}
            <div className="h-8 mt-3 flex items-center justify-center">
                <p
                    className={`text-xs font-medium text-slate-500 text-center whitespace-nowrap transition-opacity duration-300 ${isFading && !hoveredText ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {displayText}
                </p>
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
