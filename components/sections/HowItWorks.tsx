'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, useInView } from 'framer-motion';

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.9"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // ... (lines 19-90)

                    {/* Central Line - Active Animation with fade */}
                    <motion.div
                        className="absolute left-[20px] lg:left-1/2 top-0 w-1 lg:-translate-x-1/2 rounded-full origin-top"
                        style={{ 
                            height: "100%", 
                            scaleY,
                            background: 'linear-gradient(to bottom, #21a454 0%, #21a454 95%, transparent 100%)'
                        }}
                    />

    const steps = [
        {
            number: '01',
            title: 'Kostenlose Beratung',
            description: 'Wir analysieren Ihr Heizsystem und berechnen Ihr individuelles Einsparpotenzial – unverbindlich und kostenlos.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            duration: '30 Minuten',
        },
        {
            number: '02',
            title: 'Installation',
            description: 'Ein Fachbetrieb fügt EndoTherm® Ihrem Heizwasser zu – im laufenden Betrieb, ohne Unterbrechung oder Umbau.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            duration: '1-2 Stunden',
        },
        {
            number: '03',
            title: 'Sofort sparen',
            description: 'Ab dem ersten Tag profitieren Sie von reduzierten Heizkosten. Die Wirkung hält über 10 Jahre an.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            duration: 'Dauerhaft',
        },
    ];

    return (
        <section id="how-it-works" className="section-padding bg-white overflow-hidden" ref={containerRef}>
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-[#21a454]/10 text-[#1a8a45] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            Der Prozess
                        </span>
                        <h2 className="mb-6">
                            So einfach <span className="gradient-text">funktioniert's</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Von der Beratung bis zur Einsparung – in nur drei einfachen Schritten
                            zu niedrigeren Heizkosten.
                        </p>
                    </motion.div>
                </div>

                {/* Roadmap Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line - Background with fade out at bottom */}
                    <div 
                        className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-1 lg:-translate-x-1/2 rounded-full"
                        style={{
                            background: 'linear-gradient(to bottom, #e5e7eb 0%, #e5e7eb 95%, transparent 100%)'
                        }}
                    />

                    {/* Central Line - Active Animation with fade */}
                    <motion.div
                        className="absolute left-[20px] lg:left-1/2 top-0 w-1 lg:-translate-x-1/2 rounded-full origin-top"
                        style={{ 
                            height: "100%", 
                            scaleY,
                            background: 'linear-gradient(to bottom, #21a454 0%, #21a454 95%, transparent 100%)'
                        }}
                    />

                    {/* Steps */}
                    <div className="relative z-10">
                        {steps.map((step, index) => (
                            <HowItWorksItem
                                key={index}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                                icon={step.icon}
                                duration={step.duration}
                                alignment={index % 2 === 0 ? 'left' : 'right'}
                            />
                        ))}
                    </div>
                </div>

                {/* Clean CTA Section - Enhanced with more visual appeal */}
                <motion.div 
                    className="max-w-2xl mx-auto text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {/* Success Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/80 text-[#1a8a45] px-5 py-2.5 rounded-full text-sm font-medium mb-8 shadow-sm border border-[#21a454]/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Kein Risiko, keine Verpflichtung
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Bereit für den ersten Schritt?
                    </h3>
                    <p className="text-lg text-gray-600 mb-10">
                        Die Erstberatung ist <span className="text-[#21a454] font-semibold">100% kostenlos</span>.
                    </p>

                    <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="
                            btn btn-primary gap-3 px-10 py-5 text-lg font-bold
                            rounded-2xl
                            hover:-translate-y-1
                            transition-all duration-300
                        "
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Kostenlose Beratung anfragen
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

function OldHowItWorksItem_Removed_Reference_Only() { } // Keeping file structure clean creates clearer diffs

function HowItWorksItem({
    number,
    title,
    description,
    icon,
    duration,
    alignment
}: {
    number: string,
    title: string,
    description: string,
    icon: React.ReactNode,
    duration: string,
    alignment: 'left' | 'right'
}) {
    return (
        <div className={`relative flex items-center justify-between mb-24 last:mb-0 ${alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Content Box */}
            <motion.div
                className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${alignment === 'left' ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}
                initial={{ opacity: 0, x: alignment === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className={`flex items-center gap-4 mb-4 ${alignment === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                        <div className="w-12 h-12 bg-[#21a454]/10 rounded-xl flex items-center justify-center text-[#21a454] group-hover:bg-[#21a454] group-hover:text-white transition-colors duration-300 shrink-0">
                            {icon}
                        </div>
                        <div>
                            <div className={`text-sm font-bold text-[#21a454] mb-1 ${alignment === 'left' ? 'lg:text-right' : ''}`}>SCHRITT {number}</div>
                            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className={`inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full ${alignment === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                        <svg className="w-4 h-4 text-[#21a454]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-500">{duration}</span>
                    </div>
                </div>
            </motion.div>

            {/* Center Dot */}
            <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                    className="w-12 h-12 bg-white rounded-full border-4 border-green-100 flex items-center justify-center z-10 shadow-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                    <div className="w-4 h-4 bg-[#21a454] rounded-full" />
                </motion.div>
            </div>

            {/* Empty Space for Grid */}
            <div className="hidden lg:block w-[45%]" />
        </div>
    );
}

