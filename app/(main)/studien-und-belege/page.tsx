import React from 'react';

export default function StudienUndBelegePage() {
  return (
    <main className="container-custom py-24 max-w-4xl mx-auto text-gray-800">
      <div className="text-center mb-16">
        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Wissenschaftliche Evidenz
        </span>
        <h1 className="text-4xl font-bold mb-4">Empirische Studien und Belege</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Unabhängige Bewertungen und Fallstudien belegen die Wirksamkeit von EndoTherm® in der Praxis.
        </p>
      </div>

      {/* Section 1: Bosch Produktbewertung */}
      <section className="mb-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Produktbewertung
          </span>
          <span className="text-gray-500 text-sm">BOSCH</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Produktbewertung „BOSCH"</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Bosch Thermotechnik — einer der weltweit führenden Hersteller von Heizsystemen — hat EndoTherm®
            umfassend getestet und bewertet. Die Bewertung bestätigt, dass EndoTherm® sicher in Verbindung
            mit Bosch-Heizsystemen eingesetzt werden kann und keine negativen Auswirkungen auf die Heizungskomponenten hat.
          </p>
          <p>
            Die Produktbewertung hebt hervor, dass EndoTherm® die Oberflächenspannung des Heizungswassers
            reduziert und dadurch eine effizientere Wärmeübertragung ermöglicht. Bosch bestätigt, dass der
            Einsatz von EndoTherm® die Garantiebedingungen ihrer Heizsysteme nicht beeinträchtigt.
          </p>
        </div>
      </section>

      {/* Section 2: Fallstudie Klinikgruppe Regensburg */}
      <section className="mb-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
            Fallstudie
          </span>
          <span className="text-gray-500 text-sm">Klinikgruppe Regensburg</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Fallstudie Klinikgruppe Regensburg</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Eine unabhängige Fallstudie der Klinikgruppe Regensburg dokumentiert die messbaren
            Energieeinsparungen durch den Einsatz von EndoTherm® in einem großflächigen Klinikgebäude.
            Die Studie umfasst detaillierte Verbrauchsdaten vor und nach der Installation.
          </p>
        </div>
        <div className="mt-6">
          <a
            href="/studien/Produktbewertung_Endotherm_01-07-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Fallstudie herunterladen (PDF, 140 KB)
          </a>
        </div>
      </section>

      {/* Section 3: Stellungnahme Verbraucherzentrale */}
      <section className="mb-12 bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
            Stellungnahme
          </span>
          <span className="text-gray-500 text-sm">Verbraucherzentrale</span>
        </div>
        <h2 className="text-2xl font-bold mb-4">Stellungnahme der Verbraucherzentrale</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Die Verbraucherzentrale hat sich mit Heizungsadditiven wie EndoTherm® befasst und deren
            Wirkungsweise bewertet. Die Stellungnahme bestätigt, dass Produkte, die die Oberflächenspannung
            des Heizungswassers reduzieren, grundsätzlich zu einer verbesserten Wärmeübertragung beitragen können.
          </p>
          <p>
            Besonders hervorgehoben wird, dass EndoTherm® als eines der wenigen Produkte in dieser Kategorie
            über unabhängige Prüfzertifikate und nachweisbare Ergebnisse aus Praxistests verfügt.
          </p>
        </div>
        <div className="mt-6">
          <a
            href="/studien/Stellungnahme_Verbraucherzentrale.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Stellungnahme herunterladen (PDF)
          </a>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center">
        <a
          href="/#testimonials"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
        >
          ← Zurück zu den Fallstudien
        </a>
      </div>
    </main>
  );
}
