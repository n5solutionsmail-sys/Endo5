import Link from 'next/link';
import Image from 'next/image';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white overflow-hidden mt-16">
            <div className="container-custom pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-5">
                            <Image
                                src={`${BASE_PATH}/n5-logo.png`}
                                alt="N5 Logo"
                                width={160}
                                height={64}
                                className="h-14 w-auto"
                            />
                        </div>
                        <div className="max-w-xs">
                            <p className="text-gray-900 font-bold mb-2">
                                Energiekosten senken – Heizung & Kühlung.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                EndoTherm® und EndoCool® steigern die Effizienz Ihrer Heiz- und Kühlsysteme
                                und senken Ihre Energiekosten um bis zu 15%.
                            </p>
                        </div>
                    </div>

                    {/* Produkte */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Produkte</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                                    EndoTherm® – Heizung
                                </Link>
                            </li>
                            <li>
                                <Link href="/cool" className="text-gray-500 hover:text-cyan-600 transition-colors text-sm">
                                    EndoCool® – Kühlung
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#benefits" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                                    Lösung
                                </Link>
                            </li>
                            <li>
                                <Link href="#solution" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                                    So funktioniert&apos;s
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                                    Fallstudien
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Kontakt</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:office@endo5.de" className="text-gray-500 hover:text-blue-600 transition-colors text-sm inline-flex items-center gap-1.5">
                                    office@endo5.de
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 text-sm">München, Deutschland</span>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/endo5-energy/?viewAsMember=true"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm inline-flex items-center gap-1.5"
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-5">Rechtliches</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/impressum"
                                    target="_blank"
                                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                                >
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/datenschutz"
                                    target="_blank"
                                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                                >
                                    Datenschutz
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 mt-16 pt-8">
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
                    ENDO5
                </div>
            </div>
        </footer>
    );
}
