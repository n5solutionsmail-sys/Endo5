'use client';

import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'Sofortige Entlastung',
        desc: 'EndoTherm wirkt ab Tag 1. Sie reduzieren Ihre Heizkosten um bis zu 15% – ohne Ihr Verhalten zu ändern.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        )
    },
    {
        title: 'Einfache Nachrüstung',
        desc: 'Keine Baustelle, kein Stillstand. EndoTherm wird einfach dem Heizwasser beigemischt. Fertig.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        )
    },
    {
        title: 'High-Tech Investition',
        desc: 'Der ROI liegt oft unter einem Jahr. Eine der profitabelsten Energieeffizienz-Maßnahmen am Markt.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: 'Bestätigte Wirkung',
        desc: 'Vom Fraunhofer Institut verifiziert und tausendfach in der Praxis bewiesen.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    }
];

export default function Benefits() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* Header - Sticky Left for Desktop */}
                    <motion.div 
                        className="lg:w-1/3 lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                            Die Lösung
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            Senken Sie Ihre Kosten. <span className="text-blue-600">Sofort.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                            Vergessen Sie teure Sanierungen. EndoTherm® macht Ihr bestehendes System effizienter – 
                            einfach, physikalisch, bewiesen.
                        </p>
                    </motion.div>

                    {/* Benefits Grid - Bento Style */}
                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
                        {benefits.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
