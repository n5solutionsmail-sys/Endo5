'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Solution() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="solution" className="pt-24 pb-8 bg-white relative overflow-hidden">
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            Die Lösung
                        </span>
                        <h2 className="mb-6 text-center">
                            <span className="block">EndoTherm®</span>
                            <span className="block mt-2 text-gray-500 text-3xl md:text-4xl font-semibold">Sofort sparen, ohne Umbau</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Keine Sanierung, keine komplexen Systeme. Einfach effizienter heizen.
                        </p>
                    </motion.div>
                </div>

                {/* Main Content Area - Staggered Focus */}
                <div className="relative max-w-6xl mx-auto mb-16 pt-10">

                    {/* Cards Grid with Anchored Adlibs */}
                    <div className="grid md:grid-cols-3 gap-8 items-start relative z-10 pt-8">
                        {/* Column 1 */}
                        <div className="relative">
                            {/* Tag: Top Left of Card 1 */}
                            <div className="hidden lg:block">
                                <AdlibTag
                                    text="Keine Betriebsunterbrechung"
                                    className="absolute -top-6 -left-2 rotate-[-4deg] z-20"
                                    delay={0.2}
                                />
                            </div>
                            <FeatureCard
                                title="Optimierte Wärme"
                                description="Reduziert die Oberflächenspannung des Wassers um 60% für besseren Wärmetransport."
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                }
                                delay={0}
                            />
                        </div>

                        {/* Column 2 */}
                        <div className="relative mt-8 md:mt-0"> {/* Mobile spacing */}
                            {/* Tag: Top Right of Card 2 */}
                            <div className="hidden lg:block">
                                <AdlibTag
                                    text="100% organisch"
                                    className="absolute -top-5 -right-4 rotate-[3deg] z-20 bg-[#3b82f6]/10 border-[#3b82f6]/20 text-[#2563eb]"
                                    delay={0.5}
                                />
                            </div>
                            <FeatureCard
                                title="Schnellere Aufheizzeit"
                                description="Räume werden schneller warm. Die Heizung läuft kürzer und spart Energie."
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                delay={0.2}
                                isHighlight={true}
                            />
                            {/* Tag: Bottom Left of Card 2 */}
                            <div className="hidden lg:block">
                                <AdlibTag
                                    text="10 Jahre Garantie"
                                    className="absolute -bottom-5 -left-4 rotate-[-2deg] z-20"
                                    delay={0.7}
                                />
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="relative">
                            {/* Tag: Top Right of Card 3 */}
                            <div className="hidden lg:block">
                                <AdlibTag
                                    text="TÜV-geprüft"
                                    className="absolute -top-8 right-4 rotate-[6deg] z-20"
                                    delay={0.9}
                                />
                            </div>
                            <FeatureCard
                                title="Bis zu 15% weniger Kosten"
                                description="Sofortige Wirkung, die dauerhaft anhält. Ohne Risiko und bauliche Veränderungen."
                                icon={
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                }
                                delay={0.4}
                            />
                        </div>
                    </div>

                    {/* Mobile Adlibs (Visible only on small screens below grid) */}
                    <div className="lg:hidden flex flex-wrap gap-3 justify-center mt-12">
                        <span className="bg-[#3b82f6]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold">Keine Betriebsunterbrechung</span>
                        <span className="bg-[#3b82f6]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold">100% organisch</span>
                        <span className="bg-[#3b82f6]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold">10 Jahre Garantie</span>
                        <span className="bg-[#3b82f6]/10 text-[#2563eb] px-4 py-2 rounded-full text-sm font-semibold">TÜV-geprüft</span>
                    </div>

                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <button onClick={scrollToContact} className="btn btn-primary text-lg px-10 py-4 transition-all hover:-translate-y-1">
                        Jetzt Einsparpotential berechnen
                    </button>
                    <p className="mt-4 text-sm text-gray-400">Dauerhaft • Wartungsfrei • Rentabel</p>
                </motion.div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description, icon, delay, isHighlight = false }: { title: string, description: string, icon: React.ReactNode, delay: number, isHighlight?: boolean }) {
    return (
        <motion.div
            className={`p-8 rounded-3xl border transition-all h-full ${isHighlight
                ? 'bg-white border-[#3b82f6]/20 shadow-xl shadow-[#3b82f6]/5 ring-1 ring-[#3b82f6]/10'
                : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-100 hover:shadow-lg'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${isHighlight ? 'bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30' : 'bg-white text-[#3b82f6] shadow-sm'}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </motion.div>
    );
}

function AdlibTag({ text, className, delay }: { text: string, className: string, delay: number }) {
    return (
        <motion.div
            className={`bg-white text-gray-800 px-6 py-3 rounded-2xl font-bold shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 text-sm whitespace-nowrap cursor-default transition-transform duration-200 hover:scale-105 ${className}`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                delay
            }}
        >
            {text}
        </motion.div>
    );
}
