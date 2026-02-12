'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';
import type { ProductId } from '@/data/products';

interface BenefitsProps {
    productId?: ProductId;
}

export default function Benefits({ productId = 'endotherm' }: BenefitsProps) {
    const product = products[productId];

    return (
        <section id="benefits" className="bg-slate-50 py-10 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full blur-3xl"
                style={{
                    backgroundColor: productId === 'endotherm'
                        ? 'rgba(191, 219, 254, 0.3)'
                        : 'rgba(165, 243, 252, 0.3)',
                }}
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
            {/* Floating accent */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl"
                style={{
                    backgroundColor: productId === 'endotherm'
                        ? 'rgba(147, 197, 253, 0.2)'
                        : 'rgba(103, 232, 249, 0.2)',
                }}
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
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Physikalische Effizienzsteigerung
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {productId === 'endotherm'
                            ? 'Ein innovatives Additiv, das dem Heizwasser beigemischt wird. Dadurch senken Sie Ihre Energiekosten massiv und reduzieren den CO₂-Ausstoß nachhaltig.'
                            : 'Ein innovatives Additiv für Kaltwasser-Kreisläufe. Dadurch senken Sie Ihre Kühlkosten massiv und reduzieren den Energieverbrauch Ihrer Kälteanlagen.'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
                    {product.stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-2 flex items-baseline justify-center gap-1">
                                <span className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight transition-colors duration-300"
                                    style={{ '--hover-color': product.color } as React.CSSProperties}
                                >
                                    {stat.value}
                                </span>
                                {stat.unit && (
                                    <span className="text-lg md:text-xl font-medium text-slate-500">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>
                            <div
                                className="text-sm font-bold uppercase tracking-wider mb-2"
                                style={{ color: product.color }}
                            >
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
