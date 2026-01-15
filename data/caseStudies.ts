export interface CaseStudy {
    id: string;
    title: string;
    location: string;
    buildingType: string;
    savings: {
        percentage: string;
        financial: string;
        co2: string;
    };
    installDate: string;
    description: string;
    pdfPath: string;
    imagePath: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'hallein',
        title: 'Stadt Hallein – Rif Rehhof Grundschule',
        location: 'Hallein, Österreich',
        buildingType: 'Grundschule',
        savings: {
            percentage: '9,53%',
            financial: '1.834,68 €',
            co2: '3.719,63 kg CO₂e',
        },
        installDate: 'März 2024',
        description: 'Hallein, die Bezirkshauptstadt des Tennengaus und zweitgrößte Stadt im Bundesland Salzburg, ist Teilnehmer am e5-Programm „Energieeffiziente Gemeinde". Das Pilotprojekt an der Grundschule Rif Rehhof hat über 15 Monate insgesamt 25.133 kWh eingespart.',
        pdfPath: '/fallstudien/ET-Fallstudie Stadt Hallein - Rif Rehhof Grundschule.pdf',
        imagePath: '/case-studies/hallein.png',
    },
    {
        id: 'wien',
        title: 'Stadt Wien – Bezirksmuseum Floridsdorf',
        location: 'Wien, Österreich',
        buildingType: 'Museum',
        savings: {
            percentage: '11,49%',
            financial: '4.647,58 €',
            co2: '3.718,07 kg CO₂e',
        },
        installDate: 'Januar 2024',
        description: 'Das im Jahr 1900 als Villa errichtete Gebäude beherbergt seit 1960 das Bezirksmuseum Floridsdorf. Die Stadt Wien startete hier ein EndoTherm-Pilotprojekt, das über 15 Monate insgesamt 25.122 kWh einsparte.',
        pdfPath: '/fallstudien/ET-Fallstudie Stadt Wien - Bezirksmuseum Floridsdorf.pdf',
        imagePath: '/case-studies/wien.png',
    },
    {
        id: 'regensburg',
        title: 'Klinikgruppe – Zwei Gebäude',
        location: 'Regensburg, Deutschland',
        buildingType: 'Klinik',
        savings: {
            percentage: '15,91%',
            financial: '4.511 €',
            co2: '11.979 kg CO₂e',
        },
        installDate: 'Oktober 2022',
        description: 'Ein Proof-of-Concept-Pilotprojekt einer Klinikgruppe in Regensburg mit zwei Gebäuden. Über 7 Monate wurden insgesamt 73.947 kWh eingespart, mit einer Amortisationszeit von nur 2 Jahren.',
        pdfPath: '/fallstudien/ET-Fallstudie-Klinikgruppe Regensburg.pdf',
        imagePath: '/case-studies/regensburg.png',
    },
    {
        id: 'whitbread',
        title: 'Whitbread PLC – Konzernweite Installation',
        location: 'Landesweit, Vereinigtes Königreich',
        buildingType: 'Hotels & Gastronomie',
        savings: {
            percentage: '13,89%',
            financial: '9.675.000 kWh (5 Jahre)',
            co2: '1.789.875 kg CO₂e',
        },
        installDate: 'Sep – Dez 2021',
        description: 'Whitbread PLC, Eigentümer von Premier Inn mit über 820 Hotels im Vereinigten Königreich, installierte EndoTherm in 502 Heizungssystemen an 400 Standorten. Das gesamte Projekt wurde in nur 3 Monaten abgeschlossen.',
        pdfPath: '/fallstudien/ET-Fallstudie-Whitbread-PLC-Rollout DE.pdf',
        imagePath: '/case-studies/whitbread.png',
    },
];
