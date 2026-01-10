'use client';

import { useState } from 'react';

const faqItems = [
    {
        question: 'Wie viel kann ich wirklich sparen?',
        answer: 'Die Einsparung liegt typischerweise zwischen 10-15% Ihrer Heizkosten. Bei einem durchschnittlichen Gebäude mit 20.000€ Heizkosten pro Jahr bedeutet das 2.000-3.000€ Ersparnis – jedes Jahr, über 10+ Jahre. Der genaue Wert hängt von Ihrem Heizsystem und der Gebäudeart ab.',
    },
    {
        question: 'Ist EndoTherm® für mein Heizsystem geeignet?',
        answer: 'Ja, EndoTherm® ist für alle wassergeführten, geschlossenen Heizkreisläufe geeignet – unabhängig vom Alter oder Typ der Heizung. Ob Gas, Öl, Wärmepumpe oder Fernwärme: Solange Wasser als Wärmeträger verwendet wird, funktioniert EndoTherm®.',
    },
    {
        question: 'Wie schnell amortisiert sich die Investition?',
        answer: 'In den meisten Fällen amortisiert sich EndoTherm® innerhalb von 12-24 Monaten. Mit der BAFA-Förderung (15%) geht es noch schneller. Danach sparen Sie Jahr für Jahr bares Geld.',
    },
    {
        question: 'Wie lange hält die Wirkung an?',
        answer: 'Unabhängige Studien bestätigen eine Wirkungsdauer von mindestens 10 Jahren – ohne Effizienzverluste. Das bedeutet: Eine einmalige Investition, über ein Jahrzehnt Einsparungen.',
    },
    {
        question: 'Wie läuft die Installation ab?',
        answer: 'Die Installation ist denkbar einfach: Ein Fachbetrieb fügt EndoTherm® dem Heizwasser zu – im laufenden Betrieb, ohne Unterbrechung. Die Dosierung: 1 Liter pro 100 Liter Heizwasser. Das dauert in der Regel nur 1-2 Stunden.',
    },
    {
        question: 'Ist EndoTherm® sicher und umweltfreundlich?',
        answer: 'Absolut. EndoTherm® ist 100% organisch, nicht korrosiv und VDI 2035 kompatibel. Es schadet weder Ihrer Heizungsanlage noch der Umwelt. Die Produktion verursacht nur 1,16 kg CO₂ pro Liter – das wird bereits am ersten Nutzungstag ausgeglichen.',
    },
    {
        question: 'Gibt es staatliche Förderungen?',
        answer: 'Ja! Das BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle) fördert EndoTherm® mit 15% der Investitionskosten. Das reduziert Ihre Ausgaben und beschleunigt die Amortisation deutlich.',
    },
    {
        question: 'Wie kann ich einen Beratungstermin vereinbaren?',
        answer: 'Ganz einfach: Nutzen Sie unser Kontaktformular unten auf dieser Seite oder buchen Sie direkt einen Termin in unserem Kalender. Die Erstberatung ist 100% kostenlos und unverbindlich.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        FAQ
                    </span>
                    <h2 className="mb-6">
                        Häufig gestellte <span className="gradient-text">Fragen</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Hier finden Sie Antworten auf die wichtigsten Fragen rund um EndoTherm®
                        und Ihre potenzielle Ersparnis.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 last:border-b-0"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors pr-4">
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-green-500 rotate-180' : 'group-hover:bg-green-100'
                                    }`}>
                                    <svg
                                        className={`w-5 h-5 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-600'
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl max-w-3xl mx-auto">
                    <p className="text-gray-700 mb-2">
                        Haben Sie weitere Fragen?
                    </p>
                    <p className="text-gray-900 font-semibold text-lg mb-4">
                        Wir beraten Sie gerne persönlich und unverbindlich.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Jetzt Kontakt aufnehmen
                    </a>
                </div>
            </div>
        </section>
    );
}
