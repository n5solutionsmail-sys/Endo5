import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        if (typeof window !== 'undefined') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">T5</span>
                            </div>
                            <span className="font-bold text-xl">Term5</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Heizkosten senken, ohne Umbau. Bis zu 15% sparen mit EndoTherm® –
                            der smarten Lösung für Ihr Heizsystem.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#solution" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Lösung
                                </Link>
                            </li>
                            <li>
                                <Link href="#benefits" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Vorteile
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">
                                    So funktioniert&apos;s
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Preise
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="text-gray-400 hover:text-green-400 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@term5.de" className="hover:text-green-400 transition-colors">
                                    info@term5.de
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+4940123456789" className="hover:text-green-400 transition-colors">
                                    +49 40 123 456 789
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/impressum" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz" className="text-gray-400 hover:text-green-400 transition-colors">
                                    Datenschutz
                                </Link>
                            </li>
                            <li>
                                <Link href="/agb" className="text-gray-400 hover:text-green-400 transition-colors">
                                    AGB
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Term5. Alle Rechte vorbehalten.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Powered by EndoTherm® Technology
                    </p>
                </div>
            </div>
        </footer>
    );
}
