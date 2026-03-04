'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        id: '01',
        q: 'Warum wird die Einsparung mit bis zu 15 % angegeben?',
        a: 'Das mögliche Potential der Einsparung ist abhängig von der jeweiligen Bauart des vorhandenen Systems. Die zu erwartenden Einsparungen für mit EndoCool dosierten, konstant laufenden Kühlsystemen, wie z.B. Rechenzentren, liegt zwischen 4% und 8%. Die Einsparungen bei modulierenden Komfortkühlsystemen, die bedarfsgesteuert sind, wie z.B. Hotelklimaanlagen, liegen bei bis zu 15%.',
    },
    {
        id: '02',
        q: 'Welche Vorteile hat der Einsatz von EndoCool®?',
        a: 'EndoCool® verbessert die Wärmeübertragung in Kaltwassersystemen deutlich. Chiller erreichen die Solltemperatur schneller, laufen kürzer und im effizienteren Teillastbereich. Das senkt den Energieverbrauch, schont die Kompressoren und verlängert die Anlagenlebensdauer – ohne jeglichen Umbau.',
    },
    {
        id: '03',
        q: 'Funktioniert EndoCool® in jedem Kühlsystem?',
        a: 'EndoCool® ist für alle wassergeführten Kaltwasser-Kreisläufe geeignet – von Klimaanlagen und Rechenzentren bis hin zu Prozesskühlanlagen. Das Additiv ist mit sämtlichen gängigen Systemwerkstoffen und Frostschutzmitteln kompatibel.',
    },
    {
        id: '04',
        q: 'Wie lange wirkt EndoCool®?',
        a: 'EndoCool® ist dauerhaft wirksam und muss unter normalen Betriebsbedingungen nicht erneuert werden. Eine einmalige Dosierung reicht in der Regel für die gesamte Betriebslaufzeit des Systems.',
    },
    {
        id: '05',
        q: 'Ist EndoCool® einfach zu installieren?',
        a: 'Ja. EndoCool® wird direkt in den bestehenden Kaltwasserkreislauf dosiert – ohne Betriebsunterbrechung, ohne Umbaumaßnahmen und ohne Spezialwerkzeug. Die Installation dauert in der Regel weniger als eine Stunde.',
    },
    {
        id: '06',
        q: 'Ist EndoCool® korrosiv?',
        a: 'Nein. EndoCool® ist nicht korrosiv und greift weder Metalle noch Dichtungen oder Kunststoffkomponenten an. Das Additiv schützt das System sogar vor Ablagerungen und Korrosion.',
    },
    {
        id: '07',
        q: 'Ist EndoCool® ein Gefahrenstoff?',
        a: 'Nein. EndoCool® ist kein Gefahrenstoff im Sinne der geltenden Chemikalienverordnungen. Es sind keine besonderen Schutzmaßnahmen bei der Handhabung erforderlich.',
    },
    {
        id: '08',
        q: 'Ist EndoCool® organisch?',
        a: 'Ja. EndoCool® basiert auf einer organischen Formulierung, ist biologisch abbaubar und umweltverträglich. Es enthält keine schädlichen Schwermetalle oder synthetischen Biozide.',
    },
];

export default function EndoCoolFAQ() {
    const [openId, setOpenId] = useState<string>('01');

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-14 pb-8 bg-white relative overflow-hidden">
            <div className="container-custom">

                {/* Header — identical pattern to Problem.tsx */}
                <motion.div
                    className="max-w-2xl mx-auto text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-cyan-50 text-cyan-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                        Fragen rund um EndoCool®
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
                                    <span className={`text-base font-semibold leading-snug transition-colors duration-150 ${isOpen ? 'text-[#06b6d4]' : 'text-gray-900 group-hover:text-gray-700'}`}>
                                        {item.q}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.18 }}
                                        className={`shrink-0 transition-colors duration-150 ${isOpen ? 'text-[#06b6d4]' : 'text-gray-300 group-hover:text-gray-400'}`}
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
                        className="text-[#06b6d4] font-medium hover:underline underline-offset-2 transition-all"
                    >
                        Beratung via Videokonferenz buchen →
                    </button>
                </motion.p>

            </div>
        </section>
    );
}
