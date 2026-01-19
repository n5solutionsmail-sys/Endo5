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
                        "cal-brand": "#21a454",
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
                        calLink="endo5"
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
            </div>
        </section>
    );
}
