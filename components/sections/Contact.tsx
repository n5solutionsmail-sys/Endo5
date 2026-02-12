'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "beratung" });
            cal("ui", {
                "theme": "light",
                "cssVarsPerTheme": {
                    "light": {
                        "cal-brand": "#3b82f6",
                        "cal-brand-emphasis": "#2563eb",
                        "cal-brand-text": "#ffffff",
                        "cal-text": "#1f2937",
                        "cal-text-emphasis": "#111827",
                        "cal-border": "#e5e7eb",
                        "cal-border-emphasis": "#d1d5db",
                        "cal-bg": "#ffffff",
                        "cal-bg-emphasis": "#f9fafb",
                    },
                    "dark": {
                        "cal-brand": "#3b82f6",
                        "cal-brand-emphasis": "#2563eb",
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
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Ihr Weg zur Energieeffizienz
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                        Jetzt <span className="gradient-text">Beratungstermin</span> vereinbaren
                    </h2>

                    {/* Steps as pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                            <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Unverbindliche Erstberatung
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                            <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Individuelle Einsparanalyse
                        </span>
                        <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                            <svg className="w-4 h-4 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Maßgeschneiderte Lösung
                        </span>
                    </div>

                    <p className="text-xl text-gray-600">
                        Wir analysieren Ihr Einsparpotenzial für Heizung und Kühlung komplett kostenlos.
                    </p>
                </motion.div>

                {/* Cal.com Full Width Embed */}
                <motion.div
                    className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                </motion.div>
            </div>
        </section>
    );
}
