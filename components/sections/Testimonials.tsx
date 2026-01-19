'use client';

import { useState } from 'react';
import { caseStudies } from '@/data/caseStudies';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextCase = () => {
        setActiveIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevCase = () => {
        setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    const activeCase = caseStudies[activeIndex];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1 rounded-full text-sm font-semibold mb-4">
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
                    {caseStudies.map((study, index) => (
                        <button
                            key={study.id}
                            onClick={() => setActiveIndex(index)}
                            className={`text-left rounded-xl border-2 transition-all duration-300 overflow-hidden flex flex-col ${index === activeIndex
                                ? 'border-[#3b82f6] shadow-lg'
                                : 'border-gray-200 hover:border-[#3b82f6]/60 hover:shadow-md'
                                }`}
                        >
                            {/* Image Section with badge overlay */}
                            <div
                                className="relative h-28 bg-cover bg-center bg-gray-100"
                                style={{ backgroundImage: `url(${study.imagePath})` }}
                            >
                                {/* Building Type Badge - positioned in image */}
                                <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm ${index === activeIndex
                                    ? 'bg-[#3b82f6]/90 text-white'
                                    : 'bg-white/90 text-gray-700'
                                    }`}>
                                    {study.buildingType}
                                </span>
                            </div>

                            {/* Content Section */}
                            <div className={`p-3 flex-1 ${index === activeIndex
                                ? 'bg-[#3b82f6]/10'
                                : 'bg-white'
                                }`}>

                                {/* Title */}
                                <h3 className="font-bold text-gray-900 text-sm mb-0.5 truncate">
                                    {study.title.split('–')[0].trim()}
                                </h3>

                                {/* Location */}
                                <p className="text-xs text-gray-500 truncate mb-1.5">
                                    {study.location}
                                </p>

                                {/* Savings Highlight */}
                                <div className={`text-lg font-bold ${index === activeIndex ? 'text-[#3b82f6]' : 'text-gray-900'
                                    }`}>
                                    {study.savings.percentage}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Active Case Study Detail */}
                <div className="bg-gradient-to-br from-gray-50 to-[#3b82f6]/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-[#3b82f6]/10 text-[#2563eb] px-3 py-1 rounded-full text-sm font-medium">
                                    {activeCase.buildingType}
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
                                href={activeCase.pdfPath}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-colors"
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
                                <div className="w-8 h-8 bg-[#3b82f6]/10 rounded-lg flex items-center justify-center mb-2">
                                    <svg className="w-4 h-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-500">Einsparung</p>
                                <p className="text-lg font-bold text-[#3b82f6]">{activeCase.savings.percentage}</p>
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

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prevCase}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] transition-all"
                        aria-label="Previous case study"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                    ? 'bg-[#3b82f6] w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to case study ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextCase}
                        className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#3b82f6]/10 hover:border-[#3b82f6] transition-all"
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
