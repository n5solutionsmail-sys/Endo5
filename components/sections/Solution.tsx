'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Solution() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="solution" className="section-padding bg-white overflow-hidden" ref={containerRef}>
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            Die Lösung
                        </span>
                        <h2 className="mb-6">
                            EndoTherm® – <span className="gradient-text">Sofort sparen</span>, ohne Umbau
                        </h2>
                        <p className="text-xl text-gray-600">
                            Keine Sanierung, keine Betriebsunterbrechung – der intelligente Weg zu weniger Heizkosten.
                        </p>
                    </motion.div>
                </div>

                {/* Roadmap Container */}
                <div className="relative max-w-4xl mx-auto pb-20">
                    {/* Central Line - Background */}
                    <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-1 bg-gray-100 lg:-translate-x-1/2 rounded-full" />

                    {/* Central Line - Active Animation */}
                    <motion.div
                        className="absolute left-[20px] lg:left-1/2 top-0 w-1 bg-gradient-to-b from-green-500 to-green-300 lg:-translate-x-1/2 rounded-full origin-top"
                        style={{ height: "100%", scaleY }}
                    />

                    {/* Step 1 */}
                    <RoadmapItem
                        number="1"
                        title="Optimierte Wärmeübertragung"
                        description="EndoTherm® reduziert die Oberflächenspannung des Heizwassers um über 60%. Das Wasser benetzt die Rohre besser und transportiert die Wärme deutlich effizienter."
                        alignment="left"
                    />

                    {/* Step 2 */}
                    <RoadmapItem
                        number="2"
                        title="Schnellere Aufheizzeit"
                        description="Ihre Räume erreichen die gewünschte Temperatur schneller. Die Heizung muss weniger arbeiten, läuft kürzer und verbraucht dadurch spürbar weniger Energie."
                        alignment="right"
                    />

                    {/* Step 3 */}
                    <RoadmapItem
                        number="3"
                        title="Bis zu 15% weniger Heizkosten"
                        description="Das Ergebnis: Sie heizen genauso warm wie vorher, aber zahlen deutlich weniger dafür. Die Wirkung tritt sofort ein und hält dauerhaft an."
                        alignment="left"
                        isLast={true}
                    />
                </div>

                {/* Trust Points & CTA */}
                <motion.div
                    className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-8">Alles auf einen Blick</h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="font-semibold">Keine Betriebsunterbrechung</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <p className="font-semibold">100% organisch</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="font-semibold">Staatlich gefördert</p>
                        </div>
                    </div>

                    <button onClick={scrollToContact} className="btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                        Jetzt Einsparpotential berechnen
                    </button>
                    <p className="mt-4 text-sm text-gray-500">Unverbindlich & kostenlos</p>
                </motion.div>
            </div>
        </section>
    );
}

function RoadmapItem({ number, title, description, alignment, isLast = false }: { number: string, title: string, description: string, alignment: 'left' | 'right', isLast?: boolean }) {
    return (
        <div className={`relative flex items-center justify-between mb-24 last:mb-0 ${alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            {/* Content Box */}
            <motion.div
                className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${alignment === 'left' ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}
                initial={{ opacity: 0, x: alignment === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3 lg:block">
                        <span className="lg:hidden inline-flex w-8 h-8 rounded-full bg-green-100 text-green-600 items-center justify-center text-sm">{number}</span>
                        {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>
            </motion.div>

            {/* Center Dot */}
            <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                    className="w-12 h-12 bg-white rounded-full border-4 border-green-100 flex items-center justify-center z-10 shadow-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                >
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                </motion.div>
            </div>

            {/* Empty Space for Grid */}
            <div className="hidden lg:block w-[45%]" />
        </div>
    );
}
