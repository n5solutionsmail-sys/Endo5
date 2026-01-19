'use client';

import { TrendingUp, AlertTriangle, Hammer, Clock } from 'lucide-react';

export default function Problem() {
    return (
        <section className="relative section-padding overflow-hidden bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-6 shadow-sm">
                        Das Problem
                    </span>
                    <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold text-gray-900">
                        Heizkosten explodieren. <br />
                        <span className="block mt-2">Ohne Aussicht auf Besserung.</span>
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Die Energiepreise kennen nur eine Richtung. Wer jetzt nicht handelt,
                        zahlt jeden Tag drauf.
                    </p>
                </div>

                {/* Problem Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">

                    {/* Featured Card - Costs */}
                    <div className="lg:col-span-6 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover-lift group">
                        <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <TrendingUp className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Die Kostenfalle
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Gas, Öl und Fernwärme werden immer teurer. Die CO₂-Bepreisung steigt jährlich.
                            Ein Ende der Preisspirale ist nicht in Sicht.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <span>Steigende CO₂-Steuer</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <span>Unsichere Weltmarktlage</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <span>Steigende Netzentgelte</span>
                            </li>
                        </ul>
                    </div>

                    {/* Secondary Cards Grid */}
                    <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">

                        {/* Inefficient Heating */}
                        <div className="sm:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ineffiziente Technik</h3>
                                    <p className="text-gray-600">
                                        90% aller Heizungsanlagen laufen ineffizient. Wasser transportiert die Wärme schlechter als möglich – ein physikalisches Problem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Expensive Renovation */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                <Hammer className="w-6 h-6 text-gray-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Teure Sanierung</h3>
                            <p className="text-gray-600 text-sm">
                                Eine neue Wärmepumpe oder Dämmung? Kostet schnell 30.000€+ und bedeutet Baustelle.
                            </p>
                        </div>

                        {/* Time Ticking */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-gray-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Die Zeit läuft</h3>
                            <p className="text-gray-600 text-sm">
                                Jeder Winter ohne Optimierung verbrennt bares Geld, das Sie nie wiedersehen.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

