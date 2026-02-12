'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import type { ProductId } from '@/data/products';

interface SolutionProps {
    productId?: ProductId;
}

export default function Solution({ productId = 'endotherm' }: SolutionProps) {
    const [isAfter, setIsAfter] = useState(true);
    const product = products[productId];

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="solution" className="py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{product.solutionTitle}</h2>
                    <p className="text-gray-600 mt-1">{product.solutionSubtitle}</p>
                </motion.div>

                {/* Before/After Toggle */}
                <div className="flex justify-center gap-2 mb-8">
                    <button
                        onClick={() => setIsAfter(false)}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${!isAfter
                            ? 'bg-gray-800 text-white shadow-md'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        VORHER
                    </button>
                    <button
                        onClick={() => setIsAfter(true)}
                        className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all"
                        style={{
                            backgroundColor: isAfter ? product.color : undefined,
                            color: isAfter ? 'white' : '#4b5563',
                            boxShadow: isAfter ? '0 4px 6px -1px rgba(0,0,0,0.1)' : undefined,
                            ...(isAfter ? {} : { backgroundColor: '#f3f4f6' }),
                        }}
                    >
                        NACH {product.name}
                    </button>
                </div>

                {/* Image + Content Side by Side */}
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-stretch mb-10 max-w-6xl mx-auto">
                    {/* Image - Crossfade */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${productId}-${isAfter}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={isAfter ? product.afterImage : product.beforeImage}
                                    alt={isAfter ? `Nach ${product.name}` : 'Vorher'}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Content List */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${productId}-${isAfter}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-between gap-3"
                        >
                            {(isAfter ? product.solutions : product.problems).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-lg p-4 border transition-all flex-1"
                                    style={{
                                        backgroundColor: isAfter
                                            ? product.colorBgSubtle
                                            : 'rgba(254, 242, 242, 0.3)',
                                        borderColor: isAfter
                                            ? `${product.color}20`
                                            : 'rgba(254, 202, 202, 1)',
                                    }}
                                >
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{
                                            backgroundColor: isAfter
                                                ? `${product.color}20`
                                                : 'rgba(254, 226, 226, 1)',
                                            color: isAfter ? product.color : '#ef4444',
                                        }}
                                    >
                                        {isAfter ? (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold text-sm ${isAfter ? 'text-gray-900' : 'text-red-800'}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-sm ${isAfter ? 'text-gray-600' : 'text-red-600/60'}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-gray-500 text-sm mb-4">
                        <span className="font-medium text-gray-700">Ergebnis:</span> {product.resultText}
                    </p>
                    <button onClick={scrollToContact} className="btn btn-primary text-sm px-6 py-2.5">
                        Einsparpotential berechnen
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
