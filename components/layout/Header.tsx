'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { label: 'Lösung', href: '#solution' },
    { label: 'Vorteile', href: '#benefits' },
    { label: 'So funktioniert\'s', href: '#how-it-works' },
];

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Transition after scrolling past ~100px (adjustable)
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? 'py-3 bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/5'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="w-full px-6 sm:px-8 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div
                        className="relative transition-all duration-500 h-20"
                    >
                        <Image
                            src={`${BASE_PATH}/n5-logo.png`}
                            alt="N5 Logo"
                            width={220}
                            height={88}
                            className={`h-full w-auto transition-all duration-500 ${isScrolled ? '' : 'brightness-0 invert drop-shadow-lg'
                                }`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`relative px-5 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 rounded-full group ${isScrolled
                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {item.label}
                            <span
                                className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4 ${isScrolled ? 'bg-blue-500' : 'bg-white'
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className={`relative inline-flex items-center gap-2 px-6 py-2.5 font-semibold text-sm rounded-full transition-all duration-300 overflow-hidden group ${isScrolled
                            ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                            : 'bg-white text-gray-900 hover:bg-white/90 shadow-lg shadow-black/10'
                            }`}
                    >
                        <span className="relative z-10">Kostenlose Beratung</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 ${isScrolled ? 'text-white' : 'text-gray-900'
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${isScrolled
                        ? 'text-gray-700 hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                        />
                        <span
                            className={`w-full h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                } ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`}
                        />
                        <span
                            className={`w-full h-0.5 rounded-full transition-all duration-300 origin-center ${isScrolled ? 'bg-gray-700' : 'bg-white'
                                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out overflow-hidden ${isMobileMenuOpen
                    ? 'max-h-[400px] opacity-100'
                    : 'max-h-0 opacity-0'
                    }`}
            >
                <div
                    className={`mx-4 mt-2 p-4 rounded-2xl backdrop-blur-xl shadow-2xl ${isScrolled
                        ? 'bg-white/95 border border-gray-200'
                        : 'bg-black/40 border border-white/10'
                        }`}
                >
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isScrolled
                                    ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                    : 'text-white/90 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-2 mt-2 border-t border-gray-200/20">
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-600"
                            >
                                Kostenlose Beratung
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
