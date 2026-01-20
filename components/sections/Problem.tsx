'use client';

import { motion } from 'framer-motion';

const problems = [
    { icon: '📈', label: 'Steigende Preise', detail: '+40% seit 2020' },
    { icon: '🔧', label: 'Versteckte Ineffizienz', detail: '90% der Anlagen' },
    { icon: '🚧', label: 'Hohe Umbaukosten', detail: '30.000€+ & Monate' },
];

export default function Problem() {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Header */}
                    <span className="inline-block bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                        Die Herausforderung
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Heizkosten belasten. <span className="text-gray-400">Wir verstehen das.</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                        Energiepreise steigen, Sanierungen sind teuer – aber es gibt einen besseren Weg.
                    </p>

                    {/* Compact Problem Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {problems.map((problem, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-full px-5 py-3"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                                <span className="text-xl">{problem.icon}</span>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900 text-sm">{problem.label}</p>
                                    <p className="text-xs text-gray-500">{problem.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Transition */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-xl font-semibold text-gray-800">
                            Es gibt einen <span className="text-blue-600">besseren Weg</span>.
                        </p>
                        <svg className="w-5 h-8 mx-auto mt-4 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
