
import React from 'react';

export default function DatenschutzPage() {
  return (
    <main className="container-custom py-24 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Datenschutz</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Allgemeine Hinweise</h2>
        <p className="mb-4">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie den nachfolgenden Abschnitten dieser Datenschutzerklärung.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Datenerfassung auf dieser Website</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie im Abschnitt 
              „Hinweis zur verantwortlichen Stelle“.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. über ein Kontaktformular, 
              per E-Mail oder bei der Terminvereinbarung. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Wofür nutzen wir Ihre Daten?</h3>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten dienen der Bearbeitung von Anfragen und der Anbahnung von Geschäftsbeziehungen.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Welche Rechte haben Sie?</h3>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              sowie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hinweis zur verantwortlichen Stelle</h2>
        <p className="mb-2">Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p className="font-semibold">N5 Innovation UG</p>
        <p>Gartenstraße 17</p>
        <p>85764 Oberschleißheim</p>
        <p>Deutschland</p>
        <p className="mt-2">E-Mail: <a href="mailto:office@endo5.de" className="text-blue-600 hover:underline">office@endo5.de</a></p>
        <p>Telefon: +49 151 10688578</p>
        <p className="mt-4 text-sm text-gray-600">
          Verantwortliche Stelle ist die juristische Person, die über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hosting</h2>
        <p className="mb-4">
          Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf unserer Website erfasst Vercel verschiedene Logfiles 
          (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs).
        </p>
        <p>
          Die Nutzung des Hostings erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren 
          und effizienten Bereitstellung unserer Website).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Server-Logfiles</h2>
        <p className="mb-4">
          Der Hostinganbieter erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles. Dies sind insbesondere:
        </p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>IP-Adresse</li>
          <li>Browsertyp und Browserversion</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p>Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontaktformular / Kontaktaufnahme</h2>
        <p className="mb-4">
          Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive der daraus hervorgehenden 
          personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Inhalt der Anfrage) zum Zwecke der Bearbeitung bei uns gespeichert.
        </p>
        <p className="mb-2">Die Verarbeitung erfolgt auf Grundlage von:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terminvereinbarung (Kalender)</h2>
        <p>
          Wenn Sie über unsere Website einen Termin vereinbaren, verarbeiten wir die von Ihnen angegebenen Daten 
          (z. B. Name, E-Mail-Adresse, gewünschter Termin) zur Organisation und Durchführung des Gesprächs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Videokonferenzen</h2>
        <p className="mb-4">
          Für die Kommunikation mit Kunden und Interessenten nutzen wir Microsoft Teams. 
          Dabei werden personenbezogene Daten verarbeitet (z. B. Name, E-Mail-Adresse, IP-Adresse, Meeting-Metadaten).
        </p>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rechtsgrundlagen der Datenverarbeitung</h2>
        <p className="mb-2">Die Verarbeitung personenbezogener Daten erfolgt auf folgenden Rechtsgrundlagen:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
          <li>Art. 6 Abs. 1 lit. b DSGVO – Vertrag / vorvertragliche Maßnahmen</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Speicherdauer</h2>
        <p className="mb-4">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist.
        </p>
        <p>Gesetzliche Aufbewahrungspflichten bleiben unberührt.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Empfänger von personenbezogenen Daten</h2>
        <p className="mb-2">Personenbezogene Daten werden nur dann an Dritte weitergegeben, wenn:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>dies zur Vertragserfüllung erforderlich ist</li>
          <li>eine gesetzliche Verpflichtung besteht</li>
          <li>ein berechtigtes Interesse vorliegt</li>
          <li>oder eine Einwilligung erteilt wurde</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rechte der betroffenen Personen</h2>
        <p className="mb-2">Sie haben das Recht auf:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Auskunft</li>
          <li>Berichtigung</li>
          <li>Löschung</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Widerspruch gegen die Verarbeitung</li>
        </ul>
        <p>Ein Widerruf einer Einwilligung ist jederzeit möglich.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beschwerderecht</h2>
        <p>
          Ihnen steht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. 
          Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
        </p>
      </section>
    </main>
  );
}
