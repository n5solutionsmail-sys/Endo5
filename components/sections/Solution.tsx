'use client';

import { motion } from 'framer-motion';

const benefits = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Schneller warm',
        description: 'Das Wasser im System erwärmt sich schneller durch verbessertes Blasensiedeverhalten.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
        title: 'Mehr Wärmeabgabe',
        description: 'Die vergrößerte thermische Kontaktfläche erhöht die Wärmeabgabe in den Raum. Zieltemperatur wird schneller erreicht.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        title: 'Wärme zurückgewinnen',
        description: 'Geringere Rücklauftemperatur führt zu mehr Kondensation im Kessel. Weniger Abgasverluste, mehr latente Wärme.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Längere Heizzyklen',
        description: 'Die Temperatur wird länger gehalten. Weniger Kesselstarts bedeuten weniger Verschleiß und Energieverbrauch.',
    },
];

export default function Solution() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="solution" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        So funktioniert's
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        EndoTherm® einfach erklärt
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ein Additiv für Ihr Heizwasser – verbessert die Wärmeübertragung im gesamten System.
                    </p>
                </motion.div>

                {/* Benefits Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                {benefit.icon}
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

                {/* Summary + CTA */}
                <motion.div
                    className="text-center max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="text-gray-500 mb-6">
                        <span className="font-medium text-gray-700">Ergebnis:</span> Bis zu 15% weniger Heizkosten – ohne Umbau, ohne Betriebsunterbrechung.
                    </p>
                    <button onClick={scrollToContact} className="btn btn-primary text-base px-8 py-3 transition-all hover:-translate-y-0.5">
                        Jetzt Einsparpotential berechnen
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
