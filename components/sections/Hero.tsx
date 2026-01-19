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

    // Consistent text shadows - lighter for cleaner look
    const textShadow = '0 1px 4px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.25)';
    const accentShadow = textShadow;

    return (
        <section ref={containerRef} className="relative h-[400vh]">
            {/* Sticky container */}
            <div className="sticky top-0 h-screen overflow-hidden bg-white">
                {/* Background Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Loading state - polished */}
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center z-10">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-blue-400 animate-spin" />
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                    <span>Laden</span>
                                    <span className="tabular-nums">{Math.round((loadedCount / FRAME_COUNT) * 100)}%</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Animation frame */}
                    <img
                        src={`/hero-frames/ezgif-frame-${String(currentFrame).padStart(3, '0')}.jpg`}
                        alt=""
                        className="max-w-none h-full object-contain transition-opacity duration-500"
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

                {/* GRADIENT VIGNETTE OVERLAY - soft, natural depth */}
                <div
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                        zIndex: 21,
                        left: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                        right: 'max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.28) 100%)',
                    }}
                />

                {/* Content Layer */}
                <div className="relative z-30 h-full flex items-center pt-20">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Main Headline - Clean & Minimal */}
                            <h1
                                className="mb-6"
                                style={{ color: '#ffffff', textShadow }}
                            >
                                Heizkosten senken.
                                <br />
                                <span className="relative inline-block">
                                    Ohne Umbau.
                                    {/* Subtle underline accent */}
                                    <span
                                        className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, transparent 100%)',
                                        }}
                                    />
                                </span>
                            </h1>

                            {/* Subheadline - Subtle pill */}
                            <div
                                className="inline-block px-5 py-2.5 rounded-xl mb-12 max-w-xl mx-auto"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                }}
                            >
                                <p
                                    className="text-base lg:text-lg leading-relaxed font-light"
                                    style={{ color: 'rgba(255,255,255,0.95)' }}
                                >
                                    Bis zu <strong className="font-semibold">15% weniger Heizkosten</strong> mit EndoTherm®
                                    <br />
                                    einfach dem Heizwasser zugeben, fertig.
                                </p>
                            </div>

                            {/* CTA Buttons - Solid with larger hover lift */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                                <button
                                    onClick={scrollToContact}
                                    className="btn text-lg px-10 py-4 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: '#3b82f6',
                                        color: '#ffffff',
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                                    }}
                                >
                                    Kostenlose Beratung
                                </button>
                                <button
                                    onClick={scrollToSolution}
                                    className="btn text-lg px-10 py-4 font-medium rounded-xl transition-all duration-300 hover:bg-white hover:-translate-y-1"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        color: '#1f2937',
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    Mehr erfahren
                                </button>
                            </div>

                            {/* Stats Row - Clean, no cards */}
                            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow }}>15%</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow }}>Ersparnis</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow }}>10+</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow }}>Jahre Wirkung</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl lg:text-5xl font-bold" style={{ color: '#ffffff', textShadow }}>0</p>
                                    <p className="mt-1" style={{ color: '#ffffff', textShadow }}>Umbauarbeiten</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Elegant pulse */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
                    <div
                        className="w-6 h-10 rounded-full flex justify-center relative"
                        style={{
                            border: '1.5px solid rgba(255,255,255,0.5)',
                            boxShadow: '0 0 20px rgba(255,255,255,0.08)',
                        }}
                    >
                        <div
                            className="w-1 h-2.5 rounded-full mt-2"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.7)',
                                animation: 'gentlePulse 2s ease-in-out infinite',
                            }}
                        />
                    </div>
                </div>

                {/* Keyframe for gentle pulse animation */}
                <style jsx>{`
                    @keyframes gentlePulse {
                        0%, 100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        50% {
                            opacity: 0.5;
                            transform: translateY(8px);
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}
