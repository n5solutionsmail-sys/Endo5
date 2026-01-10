export default function Benefits() {
    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Bis zu 15% sparen',
            description: 'Reduzieren Sie Ihre Heizkosten sofort und dauerhaft. Bei 20.000€ Heizkosten = 3.000€ Ersparnis pro Jahr.',
            highlight: '3.000€+ pro Jahr',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Schnelle Amortisation',
            description: 'Ihre Investition zahlt sich in nur 12-24 Monaten aus. Danach profitieren Sie Jahr für Jahr.',
            highlight: '12-24 Monate',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            title: '10+ Jahre Wirkung',
            description: 'Einmal installiert, wirkt EndoTherm® über ein Jahrzehnt ohne Effizienzverlust. Das ist nachhaltige Einsparung.',
            highlight: 'Einmal zahlen, lang profitieren',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: 'Keine Umbauarbeiten',
            description: 'EndoTherm® wird einfach dem bestehenden Heizwasser zugefügt. Kein Lärm, kein Schmutz, kein Stress.',
            highlight: 'Einfach & sauber',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: '15% BAFA-Förderung',
            description: 'Der Staat fördert Ihre Investition mit 15%. Das senkt Ihre Kosten und beschleunigt die Amortisation.',
            highlight: 'Geschenk vom Staat',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Sofortige Wirkung',
            description: 'Keine Wartezeit: EndoTherm® wirkt ab dem ersten Tag und Sie sparen sofort bei jeder Heizstunde.',
            highlight: 'Ab Tag 1',
        },
    ];

    return (
        <section id="benefits" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Ihre Vorteile
                    </span>
                    <h2 className="mb-6">
                        Warum sich EndoTherm® <span className="gradient-text">für Sie lohnt</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Mehr Geld in der Tasche, weniger Sorgen bei der Nebenkostenabrechnung.
                        Das sind die Vorteile, die für sich sprechen.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                {benefit.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {benefit.description}
                            </p>

                            {/* Highlight Badge */}
                            <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                {benefit.highlight}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-center text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        Das Ergebnis: Mehr Geld für die wichtigen Dinge im Leben
                    </h3>
                    <p className="text-green-100 text-lg max-w-2xl mx-auto mb-6">
                        Statt Geld für ineffizientes Heizen zu verbrennen, haben Sie mehr Budget
                        für Familie, Urlaub oder Ihre Altersvorsorge.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <p className="text-4xl font-bold">30.000€+</p>
                            <p className="text-green-200 text-sm">Ersparnis über 10 Jahre</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold">15%</p>
                            <p className="text-green-200 text-sm">Staatliche Förderung</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold">0</p>
                            <p className="text-green-200 text-sm">Umbauarbeiten nötig</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
