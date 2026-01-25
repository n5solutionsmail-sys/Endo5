'use client';

import { useState } from 'react';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

interface LogoScrollerProps {
    className?: string;
}

export default function LogoScroller({ className = '' }: LogoScrollerProps) {
    const [hoveredText, setHoveredText] = useState<string | null>(null);

    const logos = [
        { id: 1, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
        { id: 2, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
        { id: 3, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
        { id: 4, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
        { id: 5, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
        { id: 6, name: 'Shell Springboard 2018 Low Carbon Innovation Regionaler Gewinner' },
    ];

    return (
        <div className={`relative w-full max-w-5xl mx-auto py-8 ${className}`}>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="w-full overflow-hidden">
                <div
                    className="flex items-center gap-16 animate-scroll hover:pause"
                    style={{ width: 'max-content' }}
                >
                    {/* Triple set to ensure no gaps ever on wide screens */}
                    {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-16 shrink-0">
                            {logos.map((logo) => (
                                <div
                                    key={`${setIndex}-${logo.id}`}
                                    className="group relative flex flex-col items-center justify-center"
                                    onMouseEnter={() => setHoveredText(logo.name)}
                                    onMouseLeave={() => setHoveredText(null)}
                                >

                                    {/* Logo */}
                                    <img
                                        src={`${BASE_PATH}/logos/shell.png`}
                                        alt="Shell Award"
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
                        transform: translateX(-33.333%);
                    }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
