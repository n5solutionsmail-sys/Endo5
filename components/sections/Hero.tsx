'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 138;

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentFrame, setCurrentFrame] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to frame index (1-181)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload all frames
    useEffect(() => {
        let loaded = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                if (loaded === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            img.src = `/hero-frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
        }
    }, []);

    // Update current frame on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const frame = Math.min(Math.max(Math.floor(latest), 1), FRAME_COUNT);
        setCurrentFrame(frame);
    });

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSolution = () => {
        const element = document.querySelector('#solution');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Shared text shadow for elevation
    const shadow = '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)';

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-white">
                {/* Background Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Loading state */}
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                            <div className="text-gray-400 flex flex-col items-center gap-3">
                                <div className="w-10 h-10 border-2 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
                                <span className="text-sm">{Math.round((loadedCount / FRAME_COUNT) * 100)}%</span>
                            </div>
                        </div>
                    )}

                    {/* Animation frame */}
                    <img
                        src={`/hero-frames/ezgif-frame-${String(currentFrame).padStart(3, '0')}.jpg`}
                        alt=""
                        className="max-w-none h-full object-contain"
                        style={{ opacity: isLoaded ? 1 : 0 }}
                    />
                </div>

                {/* WHITE OVERLAY - LEFT */}
                <div
                    className="absolute top-0 bottom-0 left-0 bg-white z-20"
                    style={{ width: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))' }}
                />

                {/* WHITE OVERLAY - RIGHT */}
                <div
                    className="absolute top-0 bottom-0 right-0 bg-white z-20"
                    style={{ width: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))' }}
                />

                {/* DARK OVERLAY - slight darkening for text readability */}
                <div
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                        zIndex: 21,
                        left: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                        right: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                        background: 'rgba(0,0,0,0.2)',
                    }}
                />

                {/* Content Layer */}
                <div className="relative z-30 h-full flex items-center pt-20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Main Headline - FORCED WHITE */}
                            <h1 style={{ color: '#ffffff', textShadow: shadow }} className="mb-6">
                                Heizkosten senken.
                                <br />
                                <span style={{ color: '#FACC15', textShadow: shadow }}>Ohne Umbau.</span>
                            </h1>

                            {/* Subheadline - FORCED WHITE */}
                            <p
                                className="text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
                                style={{ color: '#ffffff', textShadow: shadow }}
                            >
                                Bis zu <strong style={{ color: '#ffffff' }}>15% weniger Heizkosten</strong> mit EndoTherm®
                                <br />
                                einfach dem Heizwasser zugeben, fertig.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button
                                    onClick={scrollToContact}
                                    className="btn text-lg px-10 py-4 font-semibold"
                                    style={{ backgroundColor: '#FACC15', color: '#1a1a2e', boxShadow: '0 4px 14px rgba(0,0,0,0.25)' }}
                                >
                                    Kostenlose Beratung
                                </button>
                                <button
                                    onClick={scrollToSolution}
                                    className="btn text-lg px-10 py-4 hover:bg-white transition-colors"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#1f2937', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
                                >
                                    Mehr erfahren
                                </button>
                            </div>

                            {/* Stats Row - ALL WHITE */}
                            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow: shadow }}>15%</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow: shadow }}>Ersparnis</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow: shadow }}>10+</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow: shadow }}>Jahre Wirkung</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow: shadow }}>0</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow: shadow }}>Umbauarbeiten</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'rgba(255,255,255,0.6)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                        <div className="w-1.5 h-3 rounded-full mt-2 animate-bounce" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
