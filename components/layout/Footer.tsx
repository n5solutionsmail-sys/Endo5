import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white overflow-hidden mt-16">
            <div className="container-custom pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-5">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">T5</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900">Term5</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Heizkosten senken, ohne Umbau. Bis zu 15% sparen mit EndoTherm® –
                            der smarten Lösung für Ihr Heizsystem.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#solution" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    Lösung
                                </Link>
                            </li>
                            <li>
                                <Link href="#benefits" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    Vorteile
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    So funktioniert&apos;s
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    Preise
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Kontakt</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:info@term5.de" className="text-gray-500 hover:text-green-600 transition-colors text-sm inline-flex items-center gap-1.5">
                                    info@term5.de
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+4940123456789" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    +49 40 123 456 789
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">Hamburg, Deutschland</span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Rechtliches</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/impressum" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    Datenschutz
                                </Link>
                            </li>
                            <li>
                                <Link href="/agb" className="text-gray-500 hover:text-green-600 transition-colors text-sm">
                                    AGB
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Term5. Alle Rechte vorbehalten.
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-1.5">
                        Mit <span className="text-red-500">❤️</span> entwickelt
                    </p>
                </div>
            </div>

            {/* Large Faded Brand Name */}
            <div className="relative select-none pointer-events-none overflow-hidden h-24 md:h-32 lg:h-40">
                <div
                    className="absolute inset-x-0 text-center font-black tracking-tight leading-none whitespace-nowrap"
                    style={{
                        fontSize: 'clamp(100px, 18vw, 250px)',
                        color: 'transparent',
                        backgroundImage: 'linear-gradient(to bottom, rgba(209,213,219,0.6) 0%, rgba(255,255,255,0) 70%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        top: '-10%',
                    }}
                >
                    TERM5
                </div>
            </div>
        </footer>
    );
}
