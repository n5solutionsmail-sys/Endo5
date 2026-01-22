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
        <section className="bg-slate-50 py-10 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-slate-300/30 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            {/* Floating darker accent */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"
                animate={{
                    x: [0, 150, 0],
                    y: [0, -100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
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
