'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
    { label: 'Lösung', href: '#benefits' },
    { label: 'So funktioniert\'s', href: '#solution' },
    { label: 'Fallstudien', href: '#testimonials' },
];

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const productsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
                setIsProductsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            setIsProductsOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                ? 'py-2 bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/5'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="w-full px-6 sm:px-8 lg:px-12 flex items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center group mr-8">
                    <div
                        className={`relative transition-all duration-500 ${isScrolled ? 'h-14' : 'h-20'}`}
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
                <nav className="hidden lg:flex items-center gap-1 mr-auto">
                    {/* Produkte Dropdown */}
                    <div ref={productsRef} className="relative">
                        <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className={`relative px-5 py-2.5 font-medium text-sm tracking-wide transition-all duration-300 rounded-full group flex items-center gap-1 ${isScrolled
                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            Produkte
                            <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${isProductsOpen
                                ? 'opacity-100 translate-y-0 pointer-events-auto'
                                : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}
                        >
                            <div className="p-2">
                                <Link
                                    href="/"
                                    onClick={() => setIsProductsOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-gray-900">EndoTherm®</div>
                                        <div className="text-xs text-gray-500">Heizkosten senken</div>
                                    </div>
                                </Link>
                                <Link
                                    href="/cool"
                                    onClick={() => setIsProductsOpen(false)}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-gray-900">EndoCool®</div>
                                        <div className="text-xs text-gray-500">Kühlkosten senken</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

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
                    className={`ml-auto lg:hidden p-2.5 rounded-full transition-all duration-300 ${isScrolled
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
                    ? 'max-h-[500px] opacity-100'
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
                        {/* Produkte Section */}
                        <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${isScrolled ? 'text-gray-400' : 'text-white/50'}`}>
                            Produkte
                        </div>
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${isScrolled
                                ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            EndoTherm® – Heizung
                        </Link>
                        <Link
                            href="/cool"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${isScrolled
                                ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                                : 'text-white/90 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            <span className="w-2 h-2 rounded-full bg-cyan-500" />
                            EndoCool® – Kühlung
                        </Link>

                        <div className={`my-1 border-t ${isScrolled ? 'border-gray-200/50' : 'border-white/10'}`} />

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
