'use client';

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

    const textShadow = '0 1px 2px rgba(0,0,0,0.3)';

    const isEndoCool = product === 'endocool';
    const productImage = isEndoCool ? '/images/hero-product.webp' : '/images/hero-product-2.webp';
    const productAlt = isEndoCool ? 'EndoCool Produkt' : 'EndoTherm Produkt';

    return (
        <section className="relative min-h-screen">
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
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.55) 100%)',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-20">
                <div className="w-full px-4 sm:px-6 lg:px-16 xl:px-24">
                    <div className="max-w-7xl mx-auto">

                        {/* Top row: headline left, image right */}
                        <div className="flex flex-row items-center gap-4">

                            {/* Left: Headline + subtext */}
                            <div className="flex-1 min-w-0">
                                <h1
                                    className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 whitespace-nowrap"
                                    style={{ color: '#ffffff', textShadow }}
                                >
                                    Energiekosten senken.
                                    <br />
                                    Einfach und <span style={{ color: isEndoCool ? '#22d3ee' : '#cc2e14' }}>effektiv.</span>
                                </h1>

                                <p
                                    className="text-lg sm:text-xl leading-relaxed max-w-xl"
                                    style={{ color: 'rgba(255,255,255,0.95)', textShadow }}
                                >
                                    {isEndoCool ? (
                                        <>
                                            Unser Additiv steigert die Effizienz Ihrer
                                            <br className="hidden sm:block" />
                                            Kühlsysteme und senkt Ihre Energiekosten um bis zu 15%.
                                        </>
                                    ) : (
                                        <>
                                            Unser Additiv steigert die Effizienz Ihrer
                                            <br className="hidden sm:block" />
                                            Heizsysteme und senkt Ihre Energiekosten um bis zu 15%.
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* Right: product image */}
                            <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
                                <img
                                    src={productImage}
                                    alt={productAlt}
                                    className={isEndoCool ? 'w-60 xl:w-[260px] object-contain drop-shadow-2xl' : 'w-72 xl:w-[360px] object-contain drop-shadow-2xl'}
                                    style={{ mixBlendMode: 'screen', maxHeight: isEndoCool ? '480px' : '600px', transform: isEndoCool ? 'rotate(8deg) translateX(-40px)' : 'rotate(8deg)', transformOrigin: 'bottom center' }}
                                    loading="eager"
                                />
                            </div>
                        </div>

                        {/* Bottom row: badges + buttons — centered across full width */}
                        <div className="mt-16 flex flex-col items-center gap-5">
                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <span
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ background: 'rgba(0,0,0,0.3)', color: 'white', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    10+ Jahre Wirkung
                                </span>
                                <span
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ background: 'rgba(0,0,0,0.3)', color: 'white', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Heizung &amp; Kühlung
                                </span>
                                <span
                                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                                    style={{ background: 'rgba(0,0,0,0.3)', color: 'white', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    5 Min. Anwendung
                                </span>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={scrollToContact}
                                    className="px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                                    style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                                >
                                    Kostenlose Beratung
                                </button>
                                <button
                                    onClick={() => {
                                        const element = document.querySelector('#problem');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                                    style={{ backgroundColor: '#ffffff', color: '#1f2937', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                                >
                                    Mehr erfahren
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div
                    className="w-6 h-9 rounded-full flex justify-center"
                    style={{ border: '2px solid rgba(255,255,255,0.4)' }}
                >
                    <div
                        className="w-1 h-2 rounded-full mt-2"
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            animation: 'scrollPulse 2s ease-in-out infinite',
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes scrollPulse {
                    0%, 100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    50% {
                        opacity: 0.3;
                        transform: translateY(6px);
                    }
                }
            `}</style>
        </section>
    );
}
