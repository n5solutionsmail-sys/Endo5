'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';
import { products } from '@/data/products';
import type { ProductId } from '@/data/products';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

interface TestimonialsProps {
    productId?: ProductId;
}

export default function Testimonials({ productId = 'endotherm' }: TestimonialsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const filteredStudies = useMemo(() => {
        return caseStudies.filter((s) => s.product === productId);
    }, [productId]);

    const nextCase = () => {
        setActiveIndex((prev) => (prev + 1) % filteredStudies.length);
    };

    const prevCase = () => {
        setActiveIndex((prev) => (prev - 1 + filteredStudies.length) % filteredStudies.length);
    };

    const activeCase = filteredStudies[activeIndex];
    const activeColor = activeCase ? products[activeCase.product].color : '#3b82f6';

    if (!activeCase) return null;

    return (
        <section id="testimonials" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1 rounded-full text-sm font-semibold mb-4"
                        style={{
                            backgroundColor: `${activeColor}15`,
                            color: activeColor,
                        }}
                    >
                        Fallstudien
                    </span>
                    <h2 className="mb-6">
                        Echte Ergebnisse aus <span className="gradient-text">echten Projekten</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Entdecken Sie, wie unsere Kunden messbare Einsparungen erzielen.
                    </p>
                </div>

                {/* Case Study Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                    {filteredStudies.map((study, index) => {
                        const studyColor = products[study.product].color;
                        return (
                            <button
                                key={study.id}
                                onClick={() => setActiveIndex(index)}
                                className={`text-left rounded-xl border-2 transition-all duration-300 overflow-hidden flex flex-col ${index === activeIndex
                                    ? 'shadow-lg'
                                    : 'border-gray-200 hover:shadow-md'
                                    }`}
                                style={{
                                    borderColor: index === activeIndex ? studyColor : undefined,
                                }}
                            >
                                {/* Image Section with badge overlay */}
                                <div
                                    className="relative h-28 bg-cover bg-center bg-gray-100"
                                    style={{ backgroundImage: `url(${BASE_PATH}${study.imagePath})` }}
                                >
                                    {/* Product Badge */}
                                    <span
                                        className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                                        style={{ backgroundColor: studyColor }}
                                    >
                                        {study.product === 'endotherm' ? 'Heizung' : 'Kühlung'}
                                    </span>
                                    {/* Building Type Badge */}
                                    <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm ${index === activeIndex
                                        ? 'text-white'
                                        : 'bg-white/90 text-gray-700'
                                        }`}
                                        style={{
                                            backgroundColor: index === activeIndex ? `${studyColor}E6` : undefined,
                                        }}
                                    >
                                        {study.buildingType}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className={`p-3 flex-1 ${index === activeIndex ? '' : 'bg-white'}`}
                                    style={{
                                        backgroundColor: index === activeIndex ? `${studyColor}15` : undefined,
                                    }}
                                >
                                    <h3 className="font-bold text-gray-900 text-sm mb-0.5 truncate">
                                        {study.title.split('–')[0].trim()}
                                    </h3>
                                    <p className="text-xs text-gray-500 truncate mb-1.5">
                                        {study.location}
                                    </p>
                                    <div className="text-lg font-bold"
                                        style={{ color: index === activeIndex ? studyColor : '#111827' }}
                                    >
                                        {study.savings.percentage}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Active Case Study Detail */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCase.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                            style={{
                                background: `linear-gradient(to bottom right, #f9fafb, ${activeColor}08)`,
                            }}
                        >
                            {/* Background decoration */}
                            <div
                                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                                style={{ backgroundColor: activeColor }}
                            />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                                {/* Left: Details */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-sm font-medium"
                                            style={{
                                                backgroundColor: `${activeColor}15`,
                                                color: activeColor,
                                            }}
                                        >
                                            {activeCase.buildingType}
                                        </span>
                                        <span
                                            className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                            style={{ backgroundColor: activeColor }}
                                        >
                                            {activeCase.product === 'endotherm' ? 'EndoTherm®' : 'EndoCool®'}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            Installiert {activeCase.installDate}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                        {activeCase.title}
                                    </h3>
                                    <p className="text-gray-500 flex items-center gap-2 mb-6">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {activeCase.location}
                                    </p>

                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {activeCase.description}
                                    </p>

                                    {/* Download Button */}
                                    <a
                                        href={`${BASE_PATH}${activeCase.pdfPath}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                                        style={{ backgroundColor: activeColor }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Fallstudie herunterladen (PDF)
                                    </a>
                                </div>

                                {/* Right: Stats Cards */}
                                <div className="grid grid-cols-3 gap-3">
                                    {/* Percentage Savings */}
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                                            style={{ backgroundColor: `${activeColor}15` }}
                                        >
                                            <svg className="w-4 h-4" style={{ color: activeColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500">Einsparung</p>
                                        <p className="text-lg font-bold" style={{ color: activeColor }}>{activeCase.savings.percentage}</p>
                                    </div>

                                    {/* Financial Savings */}
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500">Finanziell</p>
                                        <p className="text-sm font-bold text-gray-900">{activeCase.savings.financial}</p>
                                    </div>

                                    {/* CO2 Savings */}
                                    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                                        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-2">
                                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500">CO₂ gespart</p>
                                        <p className="text-sm font-bold text-gray-900">{activeCase.savings.co2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevCase}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-all"
                        aria-label="Previous case study"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {filteredStudies.map((study, index) => {
                            const dotColor = products[study.product].color;
                            return (
                                <button
                                    key={study.id}
                                    onClick={() => setActiveIndex(index)}
                                    className="h-3 rounded-full transition-all"
                                    style={{
                                        width: index === activeIndex ? '2rem' : '0.75rem',
                                        backgroundColor: index === activeIndex ? dotColor : '#d1d5db',
                                    }}
                                    aria-label={`Go to case study ${index + 1}`}
                                />
                            );
                        })}
                    </div>

                    <button
                        onClick={nextCase}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-all"
                        aria-label="Next case study"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
