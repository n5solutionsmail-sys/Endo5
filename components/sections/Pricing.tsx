'use client';

import { useState } from 'react';

export default function Pricing() {
    const [heatingCosts, setHeatingCosts] = useState(20000);
    const savingsPercent = 15;
    const annualSavings = Math.round(heatingCosts * (savingsPercent / 100));
    const tenYearSavings = annualSavings * 10;

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="pricing" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Ihr Einsparpotenzial
                    </span>
                    <h2 className="mb-6">
                        Eine Investition, die sich <span className="gradient-text">selbst bezahlt</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Berechnen Sie Ihr individuelles Einsparpotenzial – schnell und unverbindlich.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Calculator */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            💰 Ihr persönlicher Sparrechner
                        </h3>

                        {/* Slider */}
                        <div className="mb-8">
                            <label className="block text-gray-700 font-medium mb-4">
                                Ihre jährlichen Heizkosten:
                            </label>
                            <div className="relative">
                                <input
                                    type="range"
                                    min="5000"
                                    max="100000"
                                    step="1000"
                                    value={heatingCosts}
                                    onChange={(e) => setHeatingCosts(Number(e.target.value))}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                    <span>5.000€</span>
                                    <span>100.000€</span>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-4xl font-bold text-gray-900">
                                    {heatingCosts.toLocaleString('de-DE')}€
                                </span>
                                <span className="text-gray-500 ml-2">/ Jahr</span>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-4">
                            <div className="bg-green-50 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-600">Jährliche Ersparnis</span>
                                    <span className="text-sm bg-green-200 text-green-800 px-2 py-0.5 rounded-full">
                                        {savingsPercent}%
                                    </span>
                                </div>
                                <p className="text-3xl font-bold text-green-600">
                                    {annualSavings.toLocaleString('de-DE')}€
                                    <span className="text-lg font-normal text-gray-500 ml-2">pro Jahr</span>
                                </p>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-6">
                                <p className="text-gray-600 mb-1">Ersparnis über 10 Jahre</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {tenYearSavings.toLocaleString('de-DE')}€
                                </p>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-6">
                                <p className="text-orange-700 mb-1">+ 15% BAFA-Förderung möglich</p>
                                <p className="text-sm text-orange-600">
                                    Reduziert Ihre Investitionskosten zusätzlich
                                </p>
                            </div>
                        </div>

                        <button onClick={scrollToContact} className="btn btn-primary w-full mt-8">
                            Individuelle Berechnung anfordern
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Example Calculation */}
                    <div>
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                📊 Beispielrechnung: Verwaltungsgebäude
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Beheizte Fläche</span>
                                    <span className="font-semibold">1.000 m²</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Jährliche Heizkosten</span>
                                    <span className="font-semibold">15.000€</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Einsparung (25%)</span>
                                    <span className="font-semibold text-green-600">3.750€ / Jahr</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Investitionskosten</span>
                                    <span className="font-semibold">ca. 11.500€</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">BAFA-Förderung (15%)</span>
                                    <span className="font-semibold text-green-600">-1.725€</span>
                                </div>
                                <div className="flex justify-between py-3 bg-green-50 rounded-xl px-4 -mx-4">
                                    <span className="font-bold text-gray-900">Effektive Investition</span>
                                    <span className="font-bold text-green-600">9.775€</span>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
                                <p className="text-gray-700 text-sm">
                                    <strong>Amortisation:</strong> 9.775€ ÷ 3.750€ = <strong className="text-green-600">ca. 2,5 Jahre</strong>
                                </p>
                                <p className="text-gray-500 text-sm mt-2">
                                    Danach: Jährlich 3.750€+ Ersparnis – dauerhaft!
                                </p>
                            </div>
                        </div>

                        {/* Trust Points */}
                        <div className="bg-green-600 text-white rounded-2xl p-6">
                            <h4 className="font-semibold mb-4">Das bedeutet für Sie:</h4>
                            <ul className="space-y-2 text-green-100">
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    In 2-3 Jahren verdient sich die Investition selbst
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Über 10 Jahre: 30.000€+ Ersparnis
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Staatliche Förderung senkt Ihre Kosten
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
