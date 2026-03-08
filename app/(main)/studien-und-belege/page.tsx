'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const studies = [
  {
    id: '01',
    badge: 'Produktbewertung',
    color: '#3b82f6',
    source: 'BOSCH',
    title: 'Produktbewertung „BOSCH"',
    paragraphs: [
      'Bosch Thermotechnik — einer der weltweit führenden Hersteller von Heizsystemen — hat EndoTherm® umfassend getestet und bewertet. Die Bewertung bestätigt, dass EndoTherm® sicher in Verbindung mit Bosch-Heizsystemen eingesetzt werden kann und keine negativen Auswirkungen auf die Heizungskomponenten hat.',
      'Die Produktbewertung hebt hervor, dass EndoTherm® die Oberflächenspannung des Heizungswassers reduziert und dadurch eine effizientere Wärmeübertragung ermöglicht. Bosch bestätigt, dass der Einsatz von EndoTherm® die Garantiebedingungen ihrer Heizsysteme nicht beeinträchtigt.',
    ],
    pdfHref: '/studien/Produktbewertung_Endotherm_01-07-2024.pdf',
    pdfLabel: 'Produktbewertung herunterladen (PDF, 140 KB)',
  },
  {
    id: '02',
    badge: 'Peer Review',
    color: '#8b5cf6',
    source: 'TU Kaiserslautern',
    title: 'Peer Review — TU Kaiserslautern',
    paragraphs: [
      'Die Technische Universität Kaiserslautern hat EndoTherm® in einer unabhängigen wissenschaftlichen Begutachtung (Peer Review) untersucht. Die Zusammenfassung bestätigt die Wirksamkeit des Produkts bei der Reduktion der Oberflächenspannung von Heizungswasser und die daraus resultierende Verbesserung der Wärmeübertragung.',
    ],
    pdfHref: '/studien/Peer-Review-EndoTherm_TU-Kaiserslautern-Zusammenfassung.pdf',
    pdfLabel: 'Peer Review herunterladen (PDF, 712 KB)',
  },
  {
    id: '03',
    badge: 'Stellungnahme',
    color: '#f59e0b',
    source: 'Verbraucherzentrale',
    title: 'Stellungnahme der Verbraucherzentrale',
    paragraphs: [
      'Die Verbraucherzentrale hat sich mit Heizungsadditiven wie EndoTherm® befasst und deren Wirkungsweise bewertet. Die Stellungnahme bestätigt, dass Produkte, die die Oberflächenspannung des Heizungswassers reduzieren, grundsätzlich zu einer verbesserten Wärmeübertragung beitragen können.',
      'Besonders hervorgehoben wird, dass EndoTherm® als eines der wenigen Produkte in dieser Kategorie über unabhängige Prüfzertifikate und nachweisbare Ergebnisse aus Praxistests verfügt.',
    ],
    pdfHref: '/studien/Stellungnahme_Verbraucherzentrale_2.pdf',
    pdfLabel: 'Stellungnahme herunterladen (PDF, 210 KB)',
  },
];

export default function StudienUndBelegePage() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.04)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Wissenschaftliche Evidenz
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Empirische Studien und Belege
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            Unabhängige Bewertungen und Fallstudien belegen die Wirksamkeit
            von EndoTherm® in der Praxis.
          </p>
        </motion.div>

        {/* Study Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
              style={{
                ['--card-color' as string]: study.color,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Watermark Number */}
              <div
                className="absolute top-0 right-4 text-8xl font-bold pointer-events-none select-none transition-colors duration-500"
                style={{ color: `${study.color}08` }}
              >
                {study.id}
              </div>

              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${study.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Badge + Source */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: `${study.color}15`,
                      color: study.color,
                    }}
                  >
                    {study.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-400 tracking-wider uppercase">
                    {study.source}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {study.title}
                </h2>

                {/* Description */}
                <div className="space-y-3 text-gray-600 leading-relaxed mb-6">
                  {study.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {/* Download Button */}
                <a
                  href={study.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${study.color}, ${study.color}dd)`,
                    boxShadow: `0 4px 14px ${study.color}25`,
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {study.pdfLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
