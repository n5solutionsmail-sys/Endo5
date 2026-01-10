'use client';

import { useState } from 'react';

const testimonials = [
    {
        quote: 'Wir waren skeptisch, aber die Zahlen sprechen für sich. Unsere Heizkosten sind um 18% gesunken – das sind über 4.500€ pro Jahr, die wir jetzt anderweitig investieren können.',
        author: 'Michael Schneider',
        role: 'Geschäftsführer, Mittelständischer Betrieb',
        savings: '4.500€/Jahr',
        rating: 5,
    },
    {
        quote: 'Die Installation dauerte keine 2 Stunden. Keine Unterbrechung, kein Dreck, einfach fertig. Und die Einsparung bei der nächsten Abrechnung war sofort sichtbar.',
        author: 'Sandra Müller',
        role: 'Hausverwalterin, 12 Wohneinheiten',
        savings: '2.800€/Jahr',
        rating: 5,
    },
    {
        quote: 'Endlich eine Lösung, die funktioniert, ohne dass wir unser altes Gebäude komplett sanieren müssen. Die BAFA-Förderung hat die Investition noch attraktiver gemacht.',
        author: 'Dr. Thomas Weber',
        role: 'Schulleiter, Grundschule',
        savings: '6.200€/Jahr',
        rating: 5,
    },
    {
        quote: 'Nach 3 Wintern kann ich bestätigen: Die Einsparung bleibt konstant. Beste Investition, die wir für unser Mehrfamilienhaus getätigt haben.',
        author: 'Familie Bergmann',
        role: 'Eigentümer, Mehrfamilienhaus',
        savings: '3.100€/Jahr',
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Kundenstimmen
                    </span>
                    <h2 className="mb-6">
                        Was unsere Kunden <span className="gradient-text">über uns sagen</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Echte Erfahrungen von echten Kunden – mit echten Einsparungen.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Main Testimonial */}
                    <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-green-200">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6 relative z-10">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium mb-8 relative z-10">
                            &ldquo;{testimonials[activeIndex].quote}&rdquo;
                        </blockquote>

                        {/* Author & Savings */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <p className="font-bold text-gray-900">{testimonials[activeIndex].author}</p>
                                <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                            </div>
                            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl">
                                <p className="text-sm text-green-600">Ersparnis</p>
                                <p className="font-bold text-lg">{testimonials[activeIndex].savings}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-green-50 hover:border-green-500 transition-all"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === activeIndex
                                            ? 'bg-green-500 w-8'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-green-50 hover:border-green-500 transition-all"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
