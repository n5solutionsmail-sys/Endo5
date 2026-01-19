'use client';

import { motion } from 'framer-motion';

export default function Problem() {
    return (
        <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

            {/* Soft Gradient Orbs for depth */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header - Empathetic */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        Die Herausforderung
                    </span>
                    <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold text-gray-900">
                        Heizkosten belasten.
                        <span className="block mt-2 text-gray-500">Wir verstehen das.</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Die steigenden Energiepreise sind frustrierend. Aber es gibt Wege,
                        die Kontrolle zurückzugewinnen – ohne große Investitionen.
                    </p>
                </motion.div>

                {/* Flowing Timeline Cards */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative">

                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -translate-y-1/2 z-0" />

                        {/* Card 1 - Rising Costs (shortest) */}
                        <motion.div
                            className="relative z-10 lg:mt-16"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 h-full group">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Steigende Preise
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Gas, Öl und Strom werden teurer. Die CO₂-Steuer steigt jährlich.
                                    Ein Trend, der anhält.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                    Seit 2020: +40% Energiekosten
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 - Inefficiency (medium) */}
                        <motion.div
                            className="relative z-10 lg:mt-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 h-full group">
                                <div className="w-14 h-14 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Versteckte Ineffizienz
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Die meisten Heizungen arbeiten unter ihrem Potential.
                                    Wärme geht verloren, ohne dass es auffällt.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                    90% der Anlagen sind ineffizient
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 - Barrier (tallest) */}
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-blue-100/30 transition-all duration-500 h-full group">
                                <div className="w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Hohe Hürden
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Sanierungen kosten 30.000€+ und bedeuten monatelange Baustellen.
                                    Für viele keine Option.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
                                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                    Durchschnittliche Wartezeit: 6+ Monate
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Hopeful Transition */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <p className="text-lg text-gray-500 mb-2">Aber...</p>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                        Es gibt einen <span className="text-blue-600">besseren Weg</span>.
                    </p>
                    <div className="mt-8">
                        <svg className="w-6 h-10 mx-auto text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
