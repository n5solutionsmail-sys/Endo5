'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "beratung" });
            cal("ui", {
                "theme": "light",
                "cssVarsPerTheme": {
                    "light": {
                        "cal-brand": "#16a34a",
                        "cal-brand-emphasis": "#15803d",
                        "cal-brand-text": "#ffffff",
                        "cal-text": "#1f2937",
                        "cal-text-emphasis": "#111827",
                        "cal-border": "#e5e7eb",
                        "cal-border-emphasis": "#d1d5db",
                        "cal-bg": "#ffffff",
                        "cal-bg-emphasis": "#f9fafb",
                    },
                    "dark": {
                        "cal-brand": "#22c55e",
                        "cal-brand-emphasis": "#16a34a",
                        "cal-brand-text": "#ffffff",
                    }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return (
        <section id="contact" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Termin buchen
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Bereit für ein Gespräch?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Wählen Sie einen passenden Termin für Ihre kostenlose Beratung.
                    </p>
                </div>

                {/* Cal.com Full Width Embed */}
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
                    <Cal
                        namespace="beratung"
                        calLink="n5-solutions-c1pqr0"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "scroll",
                            minHeight: "600px"
                        }}
                        config={{
                            layout: "month_view",
                            theme: "light"
                        }}
                    />
                </div>

                {/* Direct Contact Info */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
                    <a href="tel:+4940123456789" className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <span className="font-medium">+49 40 123 456 789</span>
                    </a>
                    <a href="mailto:info@term5.de" className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="font-medium">info@term5.de</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
