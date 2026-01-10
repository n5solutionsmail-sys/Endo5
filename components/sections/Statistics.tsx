'use client';

import { useEffect, useState, useRef } from 'react';

interface StatProps {
    value: number;
    suffix: string;
    label: string;
    prefix?: string;
}

function AnimatedStat({ value, suffix, label, prefix = '' }: StatProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

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
    }, [isVisible, value]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {prefix}{count}{suffix}
            </p>
            <p className="text-green-300 text-lg">{label}</p>
        </div>
    );
}

export default function Statistics() {
    const stats = [
        { value: 15, suffix: '%', label: 'Durchschnittliche Einsparung', prefix: '' },
        { value: 10, suffix: '+', label: 'Jahre Wirkungsdauer', prefix: '' },
        { value: 60, suffix: '%', label: 'Bessere Wärmeübertragung', prefix: '' },
        { value: 24, suffix: '', label: 'Monate max. Amortisation', prefix: '' },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-white mb-4">Zahlen, die überzeugen</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Keine leeren Versprechen – diese Zahlen basieren auf realen Messungen
                        und unabhängigen Studien.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <AnimatedStat
                            key={index}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            prefix={stat.prefix}
                        />
                    ))}
                </div>

                {/* Trust Message */}
                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Wissenschaftlich bestätigt durch unabhängige Forschungseinrichtungen
                    </p>
                </div>
            </div>
        </section>
    );
}
