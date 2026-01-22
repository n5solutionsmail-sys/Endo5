'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const problems = [
    { title: 'Langsame Erwärmung', desc: 'System braucht lange, bis die gewünschte Temperatur erreicht ist.' },
    { title: 'Geringe Wärmeabgabe', desc: 'Heizkörper geben weniger Wärme an den Raum ab als möglich.' },
    { title: 'Hohe Abgasverluste', desc: 'Wertvolle Energie geht ungenutzt über den Schornstein verloren.' },
    { title: 'Häufige Kesselstarts', desc: 'Ständiges Ein- und Ausschalten erhöht Verschleiß und Verbrauch.' },
];

const solutions = [
    { title: 'Schneller warm', desc: 'Verbessertes Blasensiedeverhalten erwärmt das System schneller.' },
    { title: 'Mehr Wärmeabgabe', desc: 'Größere thermische Kontaktfläche erhöht die Raumerwärmung.' },
    { title: 'Wärmerückgewinnung', desc: 'Kühlerer Rücklauf steigert Kondensation – weniger Abgasverluste.' },
    { title: 'Längere Heizzyklen', desc: 'Weniger Kesselstarts bedeuten weniger Verschleiß.' },
];

export default function Solution() {
    const [isAfter, setIsAfter] = useState(false);

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="solution" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">EndoTherm® einfach erklärt</h2>
                    <p className="text-gray-600 mt-1">Ein Additiv für Ihr Heizwasser – verbessert die Wärmeübertragung.</p>
                </motion.div>

                {/* Toggle Buttons */}
                <div className="flex justify-center gap-2 mb-8">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${!isAfter
                            ? 'bg-gray-800 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        VORHER
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${isAfter
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        NACH EndoTherm®
                    </button>
                </div>

                {/* Image + Content Side by Side */}
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch mb-10 max-w-6xl mx-auto">
                    {/* Image - Bigger with crossfade */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                        {/* Both images stacked, opacity transition creates crossfade */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/heating-before.png"
                                alt="Vorher"
                                fill
                                className={`object-contain transition-opacity duration-500 ${isAfter ? 'opacity-0' : 'opacity-100'}`}
                                priority
                            />
                        </div>
                        <div className="absolute inset-0">
                            <Image
                                src="/images/heating-after.png"
                                alt="Nach EndoTherm"
                                fill
                                className={`object-contain transition-opacity duration-500 ${isAfter ? 'opacity-100' : 'opacity-0'}`}
                                priority
                            />
                        </div>
                    </div>

                    {/* Content List - Same height as image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isAfter ? 'solutions' : 'problems'}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-between gap-3"
                        >
                            {(isAfter ? solutions : problems).map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start gap-3 rounded-lg p-4 border transition-all flex-1 ${isAfter
                                        ? 'bg-blue-50/50 border-blue-100'
                                        : 'bg-red-50/30 border-red-100'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isAfter ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-500'
                                        }`}>
                                        {isAfter ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold text-sm ${isAfter ? 'text-blue-900' : 'text-red-800'}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-sm ${isAfter ? 'text-blue-700/70' : 'text-red-600/60'}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-500 text-sm mb-4">
                        <span className="font-medium text-gray-700">Ergebnis:</span> Bis zu 15% weniger Heizkosten – ohne Umbau, große Investition oder Betriebsunterbrechung.
                    </p>
                    <button onClick={scrollToContact} className="btn btn-primary text-sm px-6 py-2.5">
                        Einsparpotential berechnen
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
