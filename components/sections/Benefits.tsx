'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Animated Stat Component ---
function AnimatedNumber({ value, suffix, prefix = '', trigger }: { value: number, suffix: string, prefix?: string, trigger: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setCount(Math.min(Math.round(stepValue * currentStep), value));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [trigger, value]);

    return (
        <span className="tabular-nums">
            {prefix}{count}{suffix}
        </span>
    );
}

// --- Main Component ---
export default function Benefits() {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const benefits = [
        {
            id: 1,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            statValue: 15,
            statSuffix: '%',
            statPrefix: 'Bis zu ',
            title: 'Heizkosten sparen',
            description: 'Reduzieren Sie Ihre Heizkosten sofort und dauerhaft.',
        },
        {
            id: 2,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            statValue: 24,
            statSuffix: ' Monate',
            statPrefix: 'Max. ',
            title: 'Schnelle Amortisation',
            description: 'Ihre Investition zahlt sich in kürzester Zeit aus.',
        },
        {
            id: 3,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            statValue: 10,
            statSuffix: '+ Jahre',
            statPrefix: '',
            title: 'Volle Wirkung',
            description: 'Wirkt ohne Effizienzverlust über lange Zeit.',
        },
        {
            id: 4,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            statValue: 0,
            statSuffix: '',
            statPrefix: '',
            title: 'Umbauarbeiten',
            description: 'Kein Lärm, kein Schmutz. Einfache Zugabe.',
        },
        {
            id: 5,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            statValue: 100,
            statSuffix: '%',
            statPrefix: '',
            title: 'Garantierte Qualität',
            description: 'Wissenschaftlich getestet und zertifiziert.',
        },
        {
            id: 6,
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            statValue: 1,
            statSuffix: '. Tag',
            statPrefix: 'Ab ',
            title: 'Sofortige Wirkung',
            description: 'Keine Wartezeit: EndoTherm® wirkt sofort.',
        }
    ];

    return (
        <section id="benefits" className="section-padding bg-white relative overflow-hidden" ref={containerRef}>
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            Zahlen & Fakten
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Warum sich EndoTherm® <span className="text-blue-600">für Sie lohnt</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Harte Fakten statt leerer Versprechen.
                        </p>
                    </motion.div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Icon Bubble */}
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                {benefit.icon}
                            </div>

                            {/* Big Number Stat */}
                            <div className="mb-2">
                                <p className="text-3xl font-bold text-gray-900 tracking-tight">
                                    <AnimatedNumber
                                        value={benefit.statValue}
                                        suffix={benefit.statSuffix}
                                        prefix={benefit.statPrefix}
                                        trigger={isInView}
                                    />
                                </p>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
