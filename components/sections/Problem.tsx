'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const problems = [
    {
        id: '01',
        title: 'Explodierende Kosten',
        desc: 'Energiepreise haben sich vervielfacht. Jede Ineffizienz kostet Sie heute doppelt so viel wie früher.',
        stat: 'Kostenfalle #1'
    },
    {
        id: '02',
        title: 'Versteckte Verschwendung',
        desc: '90% aller Heizsysteme laufen ineffizient. Sie zahlen für Energie, die gar nicht als Wärme ankommt.',
        stat: 'Versteckter Verlust'
    },
    {
        id: '03',
        title: 'Teure Alternativen',
        desc: 'Neue Heizungsanlagen oder Dämmung kosten oft fünfstellige Summen und amortisieren sich erst nach Jahrzehnten – wenn überhaupt.',
        stat: 'Hohes Invest'
    }
];

export default function Problem() {
    const [index, setIndex] = useState(0);
    const words = ["einfacher", "flüssiger", "schneller", "rentabler", "logischer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                
                {/* Minimal Header */}
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                        Die Realität
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        Heizkosten explodieren. <br />
                        <span className="block mt-2 text-2xl md:text-3xl font-medium text-gray-500">
                            Und Ihr Gebäude zahlt den Preis für ineffiziente Wärmeübertragung.
                        </span>
                    </h2>

                </motion.div>

                {/* Technical Grid */}
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {problems.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Subtle Number Watermark */}
                            <div className="absolute top-0 right-4 text-8xl font-bold text-gray-50/80 -z-0 pointer-events-none select-none group-hover:text-red-50/50 transition-colors duration-500">
                                {item.id}
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-xs font-mono text-red-600 mb-4 tracking-wider uppercase opacity-80 decoration-0 font-bold">
                                        {item.stat}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                                
                                {/* Geometric accent */}
                                <div className="mt-8 w-12 h-1 bg-gray-100 group-hover:bg-red-500 rounded-full transition-colors duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bridge to Solution */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="text-lg text-gray-900 font-semibold mb-2 leading-relaxed flex items-center justify-center gap-1.5">
                        <span>Die Lösung ist</span>
                        <div className="relative w-[90px] h-[1.5em] text-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 font-bold text-blue-600 flex items-center justify-center"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <span>als gedacht.</span>
                    </div>
                    
                    <motion.div 
                        className="flex justify-center"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
