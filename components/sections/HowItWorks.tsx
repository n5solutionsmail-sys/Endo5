export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Kostenlose Beratung',
            description: 'Wir analysieren Ihr Heizsystem und berechnen Ihr individuelles Einsparpotenzial – unverbindlich und kostenlos.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            duration: '30 Minuten',
        },
        {
            number: '02',
            title: 'Installation',
            description: 'Ein Fachbetrieb fügt EndoTherm® Ihrem Heizwasser zu – im laufenden Betrieb, ohne Unterbrechung oder Umbau.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            duration: '1-2 Stunden',
        },
        {
            number: '03',
            title: 'Sofort sparen',
            description: 'Ab dem ersten Tag profitieren Sie von reduzierten Heizkosten. Die Wirkung hält über 10 Jahre an.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            duration: 'Dauerhaft',
        },
    ];

    return (
        <section id="how-it-works" className="section-padding bg-gradient-dark text-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Der Prozess
                    </span>
                    <h2 className="text-white mb-6">
                        So einfach funktioniert&apos;s
                    </h2>
                    <p className="text-xl text-gray-300">
                        Von der Beratung bis zur Einsparung – in nur drei einfachen Schritten
                        zu niedrigeren Heizkosten.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-green-500/0 z-0 -translate-x-1/2"></div>
                            )}

                            {/* Step Card */}
                            <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                                {/* Step Number */}
                                <div className="absolute -top-4 left-8 bg-green-500 text-white px-4 py-1 rounded-full font-bold text-sm">
                                    Schritt {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {step.description}
                                </p>

                                {/* Duration Badge */}
                                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-300">{step.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 bg-green-500/20 border border-green-500/30 rounded-2xl px-6 py-4">
                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-left">
                            <p className="font-semibold text-white">Kein Risiko, keine Verpflichtung</p>
                            <p className="text-sm text-gray-300">Die Erstberatung ist 100% kostenlos und unverbindlich</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
