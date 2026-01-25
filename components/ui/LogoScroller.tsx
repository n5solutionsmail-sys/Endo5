'use client';

import { useState } from 'react';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

interface LogoScrollerProps {
    className?: string;
}

export default function LogoScroller({ className = '' }: LogoScrollerProps) {
    const [hoveredText, setHoveredText] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const logos = [
        { id: 1, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner', image: 'shell.png', alt: 'Shell Award' },
        { id: 2, name: 'H&V NEWS AWARDS 2015 DOMESTIC H&V PRODUCT OF THE YEAR', image: 'hv-news-award.png', alt: 'H&V News Award' },
        { id: 3, name: 'CIBSE BUILDING PERFORMANCE AWARDS 2016 - ENERGY SAVING PRODUCT OF THE YEAR', image: 'cibse-award.png', alt: 'CIBSE Award' },
        { id: 4, name: 'ENERGY EFFICIENCY & HEALTHY HOMES REGIONAL AWARDS 2017 SMALL SCALE PROJECT OF THE YEAR', image: 'energy-efficiency-award.png', alt: 'Energy Efficiency Award' },
    ];

    return (
        <div className={`relative w-full max-w-5xl mx-auto py-8 ${className}`}>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="w-full overflow-hidden">
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

                                    {/* Logo */}
                                    <img
                                        src={`${BASE_PATH}/logos/${logo.image}`}
                                        alt={logo.alt}
                                        className="h-12 w-auto object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Text Display */}
            <div className="h-6 mt-4 flex items-center justify-center">
                <p className={`text-xs font-medium text-slate-600 transition-opacity duration-300 ${hoveredText ? 'opacity-100' : 'opacity-0'}`}>
                    {hoveredText}
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
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll.paused {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
