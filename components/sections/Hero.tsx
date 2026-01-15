'use client';

export default function Hero() {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToSolution = () => {
        const element = document.querySelector('#solution');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center bg-white pt-20">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center py-16 lg:py-24">
                    {/* Main Headline */}
                    <h1 className="text-gray-900 mb-6">
                        Heizkosten senken.
                        <br />
                        <span className="gradient-text">Ohne Umbau.</span>
                    </h1>

                    {/* Subheadline - simple and clear */}
                    <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Bis zu <strong className="text-gray-900">15% weniger Heizkosten</strong> mit EndoTherm®
                        <br />
                        einfach dem Heizwasser zugeben, fertig.
                    </p>

                    {/* Single Primary CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button onClick={scrollToContact} className="btn btn-primary text-lg px-10 py-4">
                            Kostenlose Beratung
                        </button>
                        <button onClick={scrollToSolution} className="btn btn-ghost text-lg px-10 py-4">
                            Mehr erfahren
                        </button>
                    </div>

                    {/* Simple Stats Row */}
                    <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                        <div className="text-center">
                            <p className="text-4xl lg:text-5xl font-bold text-green-600">15%</p>
                            <p className="text-gray-500 mt-1">Ersparnis</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl lg:text-5xl font-bold text-gray-900">10+</p>
                            <p className="text-gray-500 mt-1">Jahre Wirkung</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl lg:text-5xl font-bold text-gray-900">0</p>
                            <p className="text-gray-500 mt-1">Umbauarbeiten</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}
