'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        setIsSubmitted(true);
        setEmail('');
    };

    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                        Bleiben Sie informiert
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Erhalten Sie exklusive Tipps zum Energiesparen und aktuelle Informationen
                        über Fördermöglichkeiten direkt in Ihr Postfach.
                    </p>

                    {isSubmitted ? (
                        <div className="bg-white/20 backdrop-blur rounded-2xl p-6 max-w-md mx-auto">
                            <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-white font-semibold">Vielen Dank für Ihre Anmeldung!</p>
                            <p className="text-blue-100 text-sm mt-2">
                                Sie erhalten in Kürze eine Bestätigungs-E-Mail.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Ihre E-Mail-Adresse"
                                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                            >
                                Anmelden
                            </button>
                        </form>
                    )}

                    <p className="text-blue-200 text-sm mt-6">
                        Kein Spam. Jederzeit abmelden. Ihre Daten sind sicher.
                    </p>
                </div>
            </div>
        </section>
    );
}
