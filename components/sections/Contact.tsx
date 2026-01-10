'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Kontakt
                    </span>
                    <h2 className="mb-6">
                        Kostenlose Beratung <span className="gradient-text">vereinbaren</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Lassen Sie uns gemeinsam Ihr Einsparpotenzial berechnen.
                        Die Erstberatung ist 100% kostenlos und unverbindlich.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Schreiben Sie uns
                        </h3>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Vielen Dank!</h4>
                                <p className="text-gray-600">
                                    Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn btn-outline mt-6"
                                >
                                    Neue Nachricht
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="Max Mustermann"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            E-Mail *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input"
                                            placeholder="max@example.de"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="+49 123 456789"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Unternehmen / Gebäudeart
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="input"
                                            placeholder="z.B. Mehrfamilienhaus"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Ihre Nachricht
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="input resize-none"
                                        placeholder="Beschreiben Sie kurz Ihr Gebäude und Ihre aktuellen Heizkosten..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                            </svg>
                                            Wird gesendet...
                                        </>
                                    ) : (
                                        <>
                                            Nachricht senden
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    Mit dem Absenden stimmen Sie unserer{' '}
                                    <a href="/datenschutz" className="text-green-600 hover:underline">
                                        Datenschutzerklärung
                                    </a>{' '}
                                    zu.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Calendar Embed & Contact Info */}
                    <div className="space-y-6">
                        {/* Calendar Placeholder */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Termin direkt buchen
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Wählen Sie einen passenden Termin für Ihre kostenlose Beratung:
                            </p>

                            {/* Cal.com Embed Placeholder */}
                            <div className="bg-gray-100 rounded-2xl p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 mb-2">Kalender-Integration</p>
                                <p className="text-sm text-gray-400">
                                    Cal.com wird hier eingebettet
                                </p>
                                {/* 
                  TODO: Replace with Cal.com embed:
                  <Cal calLink="your-username/consultation" />
                */}
                            </div>
                        </div>

                        {/* Direct Contact */}
                        <div className="bg-green-600 text-white rounded-2xl p-6">
                            <h4 className="font-semibold text-lg mb-4">Direkt erreichen:</h4>
                            <div className="space-y-4">
                                <a href="tel:+4940123456789" className="flex items-center gap-3 hover:text-green-200 transition-colors">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">+49 40 123 456 789</span>
                                </a>
                                <a href="mailto:info@term5.de" className="flex items-center gap-3 hover:text-green-200 transition-colors">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="font-medium">info@term5.de</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
