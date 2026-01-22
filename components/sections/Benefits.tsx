'use client';

import { motion } from 'framer-motion';

const stats = [
    {
        label: 'Heizkosten senken',
        value: '-15%',
        sub: 'Sofort ab Installation'
    },
    {
        label: 'Amortisation',
        value: 'Ø 18',
        unit: 'Monate',
        sub: 'Schneller als jede Dämmung'
    },
    {
        label: 'Installation',
        value: '0',
        unit: 'h',
        sub: 'Downtime im Betrieb'
    },
    {
        label: 'Systemkompatibilität',
        value: '100%',
        sub: 'Für alle wassergeführten Systeme'
    }
];

export default function Benefits() {
    return (
        <section className="bg-slate-50 py-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-2 flex items-baseline justify-center gap-1">
                                <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                    {stat.value}
                                </span>
                                {stat.unit && (
                                    <span className="text-lg md:text-xl font-medium text-slate-500">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>
                            <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                                {stat.label}
                            </div>
                            <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                                {stat.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
