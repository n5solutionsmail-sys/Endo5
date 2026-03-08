'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: '01',
        q: 'Wie funktioniert EndoTherm?',
        a: 'EndoTherm reduziert die Oberflächenspannung des Heizungswassers um bis zu 60 %. Dadurch verbessert sich die thermische Kopplung zwischen Wasser und Wärmetauscherflächen erheblich. Heizkörper erreichen die Solltemperatur schneller, die Brennerlaufzeiten verkürzen sich und der Kessel arbeitet häufiger im effizienten Teillastbereich – ohne bauliche Veränderungen am System.',
    },
    {
        id: '02',
        q: 'In welchen Heizungsanlagen kann EndoTherm eingesetzt werden?',
        a: 'EndoTherm ist für alle wassergeführten Heizsysteme geeignet – unabhängig vom Energieträger. Das umfasst Gas- und Ölkessel, Pelletheizungen, Wärmepumpen sowie Fernwärmeanschlüsse. Auch in Kombination mit Fußbodenheizungen und klassischen Heizkörpern funktioniert EndoTherm zuverlässig.',
    },
    {
        id: '03',
        q: 'Wie viel Energie kann mit EndoTherm eingespart werden?',
        a: 'Die nachgewiesenen Einsparungen liegen typischerweise zwischen 10 % und 15 %, je nach Anlagentyp und Nutzungsverhalten. Diese Werte wurden in hunderten unabhängigen Fallstudien und Monitorings bestätigt – unter anderem von Wohnungsbaugesellschaften, Hotels und kommunalen Einrichtungen.',
    },
    {
        id: '04',
        q: 'Wie lange wirkt EndoTherm?',
        a: 'EndoTherm ist bei einer Dosierung von 1:100 mindestens 10 Jahre lang wirksam. Die Wirkung kann jederzeit mittels Tensiometertest überprüft werden. Unter normalen Betriebsbedingungen ist keine Nachdosierung erforderlich.',
    },
    {
        id: '05',
        q: 'Wie wird EndoTherm eingefüllt?',
        a: 'Die Installation erfolgt über das KFE-Ventil der Heizungsanlage mit einer einfachen Hand- oder Elektropumpe. Es sind keine baulichen Veränderungen nötig und der gesamte Vorgang dauert in der Regel weniger als eine Stunde – ohne Betriebsunterbrechung.',
    },
    {
        id: '06',
        q: 'Kann EndoTherm Schäden an der Heizungsanlage verursachen?',
        a: 'Nein. In keinem dokumentierten Einsatzfall wurden Schäden an Heizungsanlagen festgestellt. EndoTherm ist konform mit den Normen VDI 2035, ÖNORM H 5195 und SWKI BT 102-01. Das Produkt greift weder Metalle, Dichtungen noch Kunststoffkomponenten an.',
    },
    {
        id: '07',
        q: 'Ist eine Wasseranalyse vorher nötig?',
        a: 'Für größere Anlagen wird eine Wasseranalyse empfohlen, um die Wasserqualität vor der Dosierung zu prüfen. So lassen sich eventuelle Auffälligkeiten wie erhöhte Leitfähigkeit oder pH-Abweichungen vorab erkennen und berücksichtigen.',
    },
    {
        id: '08',
        q: 'Wie werden die Einsparungen nachgewiesen?',
        a: 'Die Einsparungen werden nach dem IPMVP-Verfahren (International Performance Measurement and Verification Protocol) ermittelt. Dabei wird eine Regressionsanalyse auf Basis der Heizgradtage durchgeführt, um den tatsächlichen Verbrauch mit dem erwarteten Verbrauch ohne EndoTherm zu vergleichen.',
    },
];

export default function EndoThermFAQ() {
    const [openId, setOpenId] = useState<string>('01');

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-14 pb-8 bg-white relative overflow-hidden">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-[#3b82f6]/10 text-[#2563eb] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                        Fragen rund um EndoTherm
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-gray-500 leading-snug">
                        Hier haben wir Ihnen die häufig gestellten Fragen aufgelistet, damit Sie die Antworten schnell einsehen können.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto border-t border-gray-100">
                    {faqs.map((item, i) => {
                        const isOpen = openId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                className="border-b border-gray-100"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                                    className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                                >
                                    <span className={`text-base font-semibold leading-snug transition-colors duration-150 ${isOpen ? 'text-[#2563eb]' : 'text-gray-900 group-hover:text-gray-700'}`}>
                                        {item.q}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.18 }}
                                        className={`shrink-0 transition-colors duration-150 ${isOpen ? 'text-[#2563eb]' : 'text-gray-300 group-hover:text-gray-400'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-500 text-sm leading-relaxed font-medium pb-5 pr-10">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.p
                    className="mt-8 text-center text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    Noch Fragen?{' '}
                    <button
                        onClick={scrollToContact}
                        className="text-[#2563eb] font-medium hover:underline underline-offset-2 transition-all"
                    >
                        Beratung via Videokonferenz buchen →
                    </button>
                </motion.p>

            </div>
        </section>
    );
}
