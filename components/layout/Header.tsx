'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { label: 'Lösung', href: '#solution' },
    { label: 'Vorteile', href: '#benefits' },
    { label: 'So funktioniert\'s', href: '#how-it-works' },
    { label: 'Preise', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-border ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/N5_Logo.png"
                        alt="N5 Logo"
                        width={100}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="btn btn-primary"
                    >
                        Kostenlose Beratung
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <nav className="container-custom py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="text-gray-700 hover:text-green-600 font-medium py-2"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="btn btn-primary w-full text-center mt-2"
                        >
                            Kostenlose Beratung
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
