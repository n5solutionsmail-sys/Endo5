'use client';

import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import { products } from '@/data/products';
import type { ProductId } from '@/data/products';

function LazyImage({ imagePath, className, children }: {
    imagePath: string;
    className: string;
    children?: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { rootMargin: '200px' });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className={className} style={visible ? { backgroundImage: `url(${imagePath})` } : {}}>
            {children}
        </div>
    );
}

interface TestimonialsProps {
    productId?: ProductId;
}

export default function Testimonials({ productId = 'endotherm' }: TestimonialsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const filteredStudies = useMemo(() => {
        return caseStudies.filter((s) => s.product === productId);
    }, [productId]);

    const go = useCallback((dir: 1 | -1) => {
        setDirection(dir);
        setActiveIndex((prev) => (prev + dir + filteredStudies.length) % filteredStudies.length);
    }, [filteredStudies.length]);

    const activeCase = filteredStudies[activeIndex];
    const activeColor = activeCase ? products[activeCase.product].color : '#3b82f6';
    const activeColorDark = activeCase ? products[activeCase.product].colorDark : '#2563eb';

    if (!activeCase) return null;

    return (
        <section id="testimonials" className="section-padding bg-white">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                        style={{ backgroundColor: `${activeColor}12`, color: activeColorDark }}
                    >
                        Fallstudien
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="mb-4"
                    >
                        Ergebnisse aus <span className="gradient-text">echten Projekten</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500"
                    >
                        Entdecken Sie, wie unsere Kunden messbare Einsparungen erzielen.
                    </motion.p>
                </div>

                {/* Card */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation arrows — OUTSIDE the card, always visible */}
                    <button
                        onClick={() => go(-1)}
                        className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:shadow-md transition-all"
                        aria-label="Vorherige Fallstudie"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => go(1)}
                        className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-300 hover:shadow-md transition-all"
                        aria-label="Nächste Fallstudie"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeCase.id}
                            initial={{ opacity: 0, x: direction * 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction * -40 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        >
                            <div className="rounded-2xl border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_24px_rgba(0,0,0,0.05)] overflow-hidden lg:h-[420px]">
                                <div className="grid lg:grid-cols-2 h-full">
                                    {/* Image side */}
                                    <LazyImage
                                        imagePath={activeCase.imagePath}
                                        className="relative bg-cover bg-center bg-gray-100 h-56 sm:h-64 lg:h-full"
                                    >
                                        {/* Subtle overall scrim */}
                                        <div className="absolute inset-0 bg-black/10" />
                                        {/* Strong dark Übergang at bottom for text */}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

                                        {/* Top badges */}
                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                            <span
                                                className="px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-sm"
                                                style={{ backgroundColor: `${activeColor}DD`, color: '#ffffff' }}
                                            >
                                                {activeCase.product === 'endotherm' ? 'EndoTherm®' : 'EndoCool®'}
                                            </span>
                                            <span className="px-3 py-1.5 rounded-lg text-sm font-semibold bg-white/20 backdrop-blur-sm" style={{ color: '#ffffff' }}>
                                                {activeCase.buildingType}
                                            </span>
                                        </div>

                                        {/* Hero stat — white text on the dark gradient */}
                                        <div className="absolute bottom-4 left-5" style={{ color: 'white' }}>
                                            <span className="block text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>Energieeinsparung</span>
                                            <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-none tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]" style={{ color: '#ffffff' }}>
                                                {activeCase.savings.percentage}
                                            </span>
                                        </div>
                                    </LazyImage>

                                    {/* Content side */}
                                    <div className="p-5 sm:p-6 lg:p-7 flex flex-col lg:overflow-y-auto">
                                        <div className="mb-4">
                                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-snug mb-1.5">
                                                {activeCase.title}
                                            </h3>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {activeCase.location}
                                                </span>
                                                <span>·</span>
                                                <span>{activeCase.installDate}</span>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            <div className="rounded-lg bg-gray-50 px-3.5 py-3">
                                                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Finanziell gespart</p>
                                                <p className="text-sm lg:text-base font-bold text-gray-900">{activeCase.savings.financial}</p>
                                            </div>
                                            <div className="rounded-lg bg-gray-50 px-3.5 py-3">
                                                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">CO₂-Reduktion</p>
                                                <p className="text-sm lg:text-base font-bold text-gray-900">{activeCase.savings.co2}</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-gray-500 leading-relaxed mb-5 lg:mb-6 line-clamp-3 lg:line-clamp-3">
                                            {activeCase.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                                            <a
                                                href={activeCase.pdfPath}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                                                style={{ backgroundColor: activeColor, boxShadow: `0 2px 8px ${activeColor}25` }}
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Fallstudie (PDF)
                                            </a>

                                            {/* Mobile nav (inline) + dots for all */}
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => go(-1)}
                                                    className="lg:hidden w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                                                    aria-label="Vorherige Fallstudie"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>

                                                {/* Dots */}
                                                <div className="flex gap-1.5">
                                                    {filteredStudies.map((_, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => { setDirection(i > activeIndex ? 1 : -1); setActiveIndex(i); }}
                                                            className="rounded-full transition-all duration-300"
                                                            style={{
                                                                width: i === activeIndex ? '1.5rem' : '0.5rem',
                                                                height: '0.5rem',
                                                                backgroundColor: i === activeIndex ? activeColor : '#d1d5db',
                                                            }}
                                                            aria-label={`Fallstudie ${i + 1}`}
                                                        />
                                                    ))}
                                                </div>

                                                <button
                                                    onClick={() => go(1)}
                                                    className="lg:hidden w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                                                    aria-label="Nächste Fallstudie"
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
