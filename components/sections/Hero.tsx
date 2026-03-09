'use client';

import { motion } from 'framer-motion';

interface HeroProps {
    product?: 'endotherm' | 'endocool';
}

export default function Hero({ product = 'endotherm' }: HeroProps) {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isEndoCool = product === 'endocool';
    const productImage = isEndoCool ? '/images/hero-product.webp' : '/images/hero-product-2.webp';
    const productAlt = isEndoCool ? 'EndoCool Produkt' : 'EndoTherm Produkt';
    const accentColor = isEndoCool ? '#22d3ee' : '#cc2e14';

    const stagger = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };


    const fadeScale = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
        },
    };

    const trustBadges = isEndoCool
        ? ['Bis zu 15% Einsparung', 'Kühl- & Klimaanlagen', '5 Min. Anwendung']
        : ['Bis zu 15% Einsparung', 'Heizung & Kühlung', '5 Min. Anwendung'];

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/A_forest_with_2k_202601202046.webp"
                    alt="Forest background"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-24">
                <div className="w-full px-5 sm:px-6 lg:px-16 xl:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">

                            {/* Left: Content */}
                            <motion.div
                                className="flex-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 sm:gap-6"
                                variants={stagger}
                                initial="hidden"
                                animate="visible"
                            >
                                {/* Headline */}
                                <motion.h1
                                    className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold tracking-tight"
                                    style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                                    variants={fadeUp}
                                >
                                    {isEndoCool ? 'Kühlkosten' : 'Energiekosten'} senken.
                                    <br />
                                    <span className="mt-1 block">
                                        Einfach und effektiv mit{' '}
                                        <span style={{ color: accentColor }}>{isEndoCool ? 'EndoCool' : 'EndoTherm'}</span>
                                    </span>
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.p
                                    className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
                                    style={{ color: 'rgba(255,255,255,0.8)', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
                                    variants={fadeUp}
                                >
                                    {isEndoCool
                                        ? 'Steigern Sie die Effizienz Ihrer Kühl- und Klimaanlagen und senken Sie Ihre Stromkosten um bis zu 15%.'
                                        : 'Steigern Sie die Effizienz Ihrer Heizungsanlage und reduzieren Sie Ihre Energiekosten nachhaltig um bis zu 15%.'}
                                </motion.p>

                                {/* Mobile product image — shown between text and badges */}
                                <motion.div
                                    className="flex lg:hidden justify-center py-2"
                                    variants={fadeScale}
                                >
                                    <img
                                        src={productImage}
                                        alt={productAlt}
                                        className="w-48 sm:w-56 object-contain drop-shadow-2xl"
                                        style={{ maxHeight: '280px' }}
                                        loading="eager"
                                    />
                                </motion.div>

                                {/* Trust Badges */}
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                                    {trustBadges.map((label, i) => (
                                        <motion.span
                                            key={label}
                                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-medium"
                                            style={{
                                                background: 'rgba(255,255,255,0.1)',
                                                color: 'rgba(255,255,255,0.9)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                            }}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                                        >
                                            <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4ade80' }} fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {label}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
                                    <motion.button
                                        onClick={scrollToContact}
                                        className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                        style={{
                                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                                            color: '#ffffff',
                                            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4), 0 1px 3px rgba(0,0,0,0.1)',
                                        }}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.67, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                                    >
                                        Kostenlose Beratung
                                    </motion.button>
                                    <motion.button
                                        onClick={() => {
                                            const element = document.querySelector('#problem');
                                            if (element) element.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto px-8 py-3.5 text-[15px] font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                        style={{
                                            background: 'rgba(255,255,255,0.12)',
                                            color: '#ffffff',
                                            backdropFilter: 'blur(12px)',
                                            WebkitBackdropFilter: 'blur(12px)',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                        }}
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.67, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                                    >
                                        Mehr erfahren
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Right: Product image — desktop only */}
                            <motion.div
                                className="hidden lg:flex flex-shrink-0 items-center justify-center"
                                variants={fadeScale}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="relative">
                                    {/* Subtle glow behind product */}
                                    <div
                                        className="absolute inset-0 rounded-full blur-3xl opacity-20"
                                        style={{ background: accentColor, transform: 'scale(0.8)' }}
                                    />
                                    <img
                                        src={productImage}
                                        alt={productAlt}
                                        className={isEndoCool
                                            ? 'relative w-64 xl:w-80 object-contain drop-shadow-2xl'
                                            : 'relative w-72 xl:w-96 object-contain drop-shadow-2xl'
                                        }
                                        style={{ maxHeight: isEndoCool ? '500px' : '580px' }}
                                        loading="eager"
                                    />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <button
                    onClick={() => {
                        const element = document.querySelector('#problem');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex flex-col items-center gap-2 cursor-pointer"
                    aria-label="Scroll down"
                >
                    <div
                        className="w-6 h-9 rounded-full flex justify-center"
                        style={{ border: '2px solid rgba(255,255,255,0.3)' }}
                    >
                        <motion.div
                            className="w-1 h-2 rounded-full mt-2"
                            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
                        />
                    </div>
                </button>
            </motion.div>
        </section>
    );
}
