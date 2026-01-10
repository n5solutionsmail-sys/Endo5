'use client';

export default function Solution() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="solution" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Die Lösung
                    </span>
                    <h2 className="mb-6">
                        EndoTherm® – <span className="gradient-text">Sofort sparen</span>, ohne Umbau
                    </h2>
                    <p className="text-xl text-gray-600">
                        Ein innovatives Heizungsadditiv, das Ihre Heizkosten sofort senkt.
                        Keine Sanierung, keine Betriebsunterbrechung – einfach mehr Geld in der Tasche.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Visual */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12">
                            {/* Product Visualization */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-gray-500 text-sm">Ihre Heizkosten</p>
                                        <p className="text-3xl font-bold text-gray-400 line-through">20.000€</p>
                                    </div>
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                    <div>
                                        <p className="text-gray-500 text-sm">Mit EndoTherm®</p>
                                        <p className="text-3xl font-bold text-green-600">17.000€</p>
                                    </div>
                                </div>
                                <div className="bg-green-100 rounded-xl p-4 text-center">
                                    <p className="text-green-800 font-bold text-lg">Sie sparen: 3.000€ pro Jahr</p>
                                </div>
                            </div>

                            {/* Key Points */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">1 Liter pro 100 Liter Heizwasser</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">60% verbesserte Wärmeübertragung</p>
                                </div>
                                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-medium text-gray-800">10+ Jahre garantierte Wirkung</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                            <p className="font-bold">VDI 2035 zertifiziert</p>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Wie funktioniert EndoTherm®?
                        </h3>

                        <div className="space-y-6 mb-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Optimierte Wärmeübertragung</h4>
                                    <p className="text-gray-600">
                                        EndoTherm® reduziert die Oberflächenspannung des Heizwassers um über 60%.
                                        Das Wasser transportiert die Wärme deutlich effizienter.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Schnellere Aufheizzeit</h4>
                                    <p className="text-gray-600">
                                        Ihre Räume erreichen die gewünschte Temperatur schneller.
                                        Die Heizung läuft kürzer – und verbraucht weniger Energie.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Bis zu 15% weniger Heizkosten</h4>
                                    <p className="text-gray-600">
                                        Das Ergebnis: Sie heizen genauso warm wie vorher,
                                        aber zahlen deutlich weniger dafür. Sofort und dauerhaft.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Points */}
                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <p className="font-semibold text-gray-900 mb-3">Das Wichtigste:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Keine Betriebsunterbrechung
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Keine Umbauarbeiten nötig
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    100% organisch und nicht korrosiv
                                </li>
                                <li className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    15% staatliche BAFA-Förderung möglich
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <button onClick={scrollToContact} className="btn btn-primary w-full sm:w-auto">
                            Jetzt kostenlos beraten lassen
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
