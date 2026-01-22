'use client';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

export default function Hero() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProblem = () => {
        const element = document.querySelector('#problem');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const textShadow = '0 1px 2px rgba(0,0,0,0.3)';

    return (
        <section className="relative min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={`${BASE_PATH}/A_forest_with_2k_202601202046.jpeg`}
                    alt="Forest background"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.55) 100%)',
                    }}
                />
            </div>



            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center pt-20">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">

                        {/* Headline - 2 lines max */}
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            style={{ color: '#ffffff', textShadow }}
                        >
                            Heizkosten senken.
                            <br />
                            <span className="text-blue-400">Mit EndoTherm.</span>
                        </h1>

                        {/* Subtext - 2 lines max */}
                        <p
                            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
                            style={{ color: 'rgba(255,255,255,0.95)', textShadow }}
                        >
                            EndoTherm steigert die Effizienz Ihrer Heizung und senkt
                            <br />
                            Ihre Energiekosten um bis zu 15%, einfach und preiswert.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
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
                                Alle Heizsysteme
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={scrollToContact}
                                className="px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                                style={{
                                    backgroundColor: '#3b82f6',
                                    color: '#ffffff',
                                }}
                            >
                                Kostenlose Beratung
                            </button>
                            <button
                                onClick={scrollToProblem}
                                className="px-8 py-4 text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#1f2937',
                                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                                }}
                            >
                                Mehr erfahren
                            </button>
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
