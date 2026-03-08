export interface Award {
  id: number;
  slug: string;
  name: string;
  badge: string;
  year: string;
  color: string;
  image: string;
  heroImage: string;
  alt: string;
  subtitle: string;
  paragraphs: string[];
  quote: { text: string; author: string };
}

export const awards: Award[] = [
  {
    id: 1,
    slug: 'hv-news-award',
    name: 'H&V News Awards 2015 — Nachhaltiges Haushaltsprodukt des Jahres',
    badge: 'H&V News Awards',
    year: '2015',
    color: '#8b5cf6',
    image: 'hv-news-award.webp',
    heroImage: '/auszeichnungen/h&v.jpeg',
    alt: 'H&V News Award',
    subtitle: 'Endo Enterprises freut sich über die Auszeichnung von H&V News für EndoTherm als „Domestic Sustainable Product of the year (Nachhaltiges Haushaltsprodukt des Jahres)"',
    paragraphs: [
      'Das Endo-Team holt den Award für „Das Produkt des Jahres 2015" bei den H&V News Awards ab.',
      'Mehr als 200 Teilnehmer wurden von Fachleuten aus der Branche in über 20 Kategorien bewertet. Das Endo-Team war im Grosvenor House Hotel in London, um die prestigeträchtige Auszeichnung vor 1200 Gästen in Empfang zu nehmen.',
      'Die H&V News Awards sind die am meisten angesehenen und begehrten Auszeichnungen für die Gebäudetechnikbranche. In ihrem 21. Jahr bieten die Awards der Branche Anerkennung und unvergleichliche Kontaktmöglichkeiten. Angekündigt von Dennis Flower (Redakteur der H&V News) und präsentiert von Bill Turnbull (BBC) wurde EndoTherm als ein „wirklich außergewöhnliches Produkt ausgezeichnet, von dem erwartet wird, dass es einen großen Einfluss auf den Energieverbrauch in häuslichen und gewerblichen Heizsystemen haben wird".',
      'Der ausgezeichnete Einsatz von EndoTherm wurde auf der Grundlage umfangreicher Fallstudien und dreijähriger Labortests beurteilt, die eine Einsparung von bis zu 15 % der Energiekosten für jedes wassergeführte Heizsystem belegen.',
    ],
    quote: {
      text: 'Dies ist ein stolzer Moment für unser innovatives Unternehmen, das viel Zeit und Aufwand investiert hat, um zu beweisen, wie diese aufregende Wissenschaft die Heizungsindustrie verändern kann. Wir haben in den kommenden Monaten verschiedene Produkteinführungen geplant, die alle auf der Technologie von EndoTherm basieren.',
      author: 'David Taylor, CEO von Endo Enterprises',
    },
  },
  {
    id: 2,
    slug: 'cibse-award',
    name: 'CIBSE Building Performance Awards 2016 — Energiesparprodukt des Jahres',
    badge: 'CIBSE Awards',
    year: '2016',
    color: '#3b82f6',
    image: 'cibse-award.webp',
    heroImage: '/auszeichnungen/CIBSE-Award.jpg',
    alt: 'CIBSE Award',
    subtitle: 'EndoTherm gewinnt bei den CIBSE Building Performance Awards 2016 die Auszeichnung „Energy Saving Product of the Year"',
    paragraphs: [
      'Die Building Performance Awards gelten als eine der bekanntesten und prestigeträchtigsten Auszeichnungen des CIBSE (Chartered Institute of Building Services Engineers) und betonen die Wichtigkeit der Verbesserung der Gebäudeeffizienz, die sie als eine der wichtigsten Herausforderungen für die Industrie bezeichnen.',
      'Die Kategorie „Energiesparendes Produkt des Jahres" spiegelte die Bedeutung der Energieeffizienz mit 5 sehr unterschiedlichen, aber gleichermaßen innovativen Ideen wider, die es in die engere Auswahl geschafft haben. Alle sind eine Anerkennung für ihre jeweiligen Unternehmen und unterstreichen die Stärke der Innovation auf dem britischen Markt.',
    ],
    quote: {
      text: 'Alle Zahlen rund um das energiesparende Heizungsadditiv EndoTherm von Endo Enterprises sind besonders beeindruckend. Es wurde unabhängig nachgewiesen, dass es 15 % der Heizkosten einspart, und es ist zu 100 % organisch, was ihm einen außergewöhnlich niedrigen CO2-Fußabdruck verleiht. EndoTherm ist einfach nachzurüsten und hat das Potenzial, Millionen zu sparen.',
      author: 'CIBSE Jury',
    },
  },
  {
    id: 3,
    slug: 'energy-efficiency-award',
    name: 'Energy Efficiency & Healthy Homes Awards 2017 — Produkt des Jahres',
    badge: 'Energy Efficiency Awards',
    year: '2017',
    color: '#10b981',
    image: 'energy-efficiency-award.webp',
    heroImage: '/auszeichnungen/EE-HH-2017-Special-Commendation-Hero-Image.jpg',
    alt: 'Energy Efficiency Award',
    subtitle: 'EndoTherm erhält bei den National Energy Efficiency & Healthy Homes Awards 2017 eine besondere Auszeichnung für das „Produkt des Jahres"',
    paragraphs: [
      'Das Heizungs-Additiv EndoTherm hatte bereits bei den North West Regional Energy Efficiency & Healthy Homes Awards 2017 in der Kategorie „Small Scale Project of the Year (unter £ 250.000)" gewonnen und das Endo-Team war hocherfreut, diesen Erfolg auf nationaler Ebene gegen einige der effektivsten Energiesparprodukte Großbritanniens fortzusetzen.',
      'Die National Energy Efficiency & Healthy Homes Awards wurden im Juli 2015 nach politischen Weichenstellungen durch die Regierung im Bereich Energieeffizienz eingeführt. Das Ziel der Auszeichnungen ist die öffentliche Anerkennung der hervorragenden Arbeit, die der Energieeffizienzsektor leistet.',
      'EndoTherm war stolz darauf, in drei hart umkämpften Kategorien — Produkt des Jahres, Lieferant des Jahres und Kleinprojekt des Jahres — als Finalist gelistet zu sein.',
    ],
    quote: {
      text: 'Die Anerkennungen, die EndoTherm bisher erhalten hat, sind Meilensteine auf unserem Weg der Entwicklung von Innovationen und der Antrieb, die Erwartungen an die Leistung kontinuierlich zu übertreffen.',
      author: 'Benjamin Sallon, Geschäftsführer von Endo Enterprises',
    },
  },
  {
    id: 4,
    slug: 'shell-springboard',
    name: 'Shell Springboard 2018 — Regionaler Gewinner',
    badge: 'Shell Springboard',
    year: '2018',
    color: '#e31937',
    image: 'shell.png',
    heroImage: '/auszeichnungen/EndoTherm-Shell-Springboard-Regional-Winner.jpg',
    alt: 'Shell Springboard Award',
    subtitle: 'EndoTherm als regionaler Gewinner des Shell Springboard 2018 ausgezeichnet — innovative, CO2-arme Geschäftsideen',
    paragraphs: [
      'Auf der von Shell ausgerichteten Springboard-Veranstaltung in Aberdeen wurde EndoTherm als regionaler Gewinner des Shell Springboard 2018 ausgezeichnet, mit dem sechs in Großbritannien ansässige kleine bis mittlere Unternehmen (KMU) mit innovativen, CO2-armen Geschäftsideen geehrt werden.',
      'EndoTherm ist ein kostengünstiger, hochwirksamer Energiesparzusatz, der in jedes wassergeführte Heizungssystem — ob gewerblich oder privat — eingebracht werden kann und den Energieverbrauch um bis zu 15 % senkt, wodurch die Energiekosten und Treibhausgasemissionen reduziert werden.',
      'Endo Enterprises (UK) wurde 2013 gegründet, um EndoTherm, ein einzigartiges, zum Patent angemeldetes Produkt, herzustellen und zu verkaufen. Mit niedrigen Installationskosten, keinen Systemausfallzeiten, geringem Kapitalaufwand und einer Wirksamkeit von 5 Jahren beträgt die Amortisationszeit von EndoTherm weniger als ein Jahr und die gesamte CO2-Einsparung für nur eine Hausinstallation über 5 Tonnen.',
      'Die regionalen Gewinner erhalten ein Preisgeld von £ 40.000. Das Shell Springboard Finale findet im Mai statt, bei dem die sechs Finalisten um weitere £ 110.000 Preisgeld wetteifern.',
    ],
    quote: {
      text: 'Ein regionaler Gewinner des Shell Springboard zu sein, ist eine große Ehre für unser kleines Unternehmen. Wir wissen, dass EndoTherm ein fantastisches Produkt ist, und wir freuen uns, dass es von der Jury für seine Innovation und seine Energieeinsparmöglichkeiten gewürdigt wurde.',
      author: 'Ben Sallon, Geschäftsführer',
    },
  },
];
