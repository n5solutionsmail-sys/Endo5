import type { ProductId } from './products';

export interface CaseStudy {
    id: string;
    product: ProductId;
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
    // EndoTherm case studies
    {
        id: 'hallein',
        product: 'endotherm',
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
        product: 'endotherm',
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
        product: 'endotherm',
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
        product: 'endotherm',
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
    // EndoCool case studies
    {
        id: 'kaerntnermilch',
        product: 'endocool',
        title: 'Kärntnermilch – Molkerei-Kühlung',
        location: 'Spittal an der Drau, Österreich',
        buildingType: 'Industriekühlung',
        savings: {
            percentage: '12,3%',
            financial: '18.400 €',
            co2: '9.200 kg CO₂e',
        },
        installDate: 'Juni 2023',
        description: 'Die Kärntnermilch-Molkerei setzt EndoCool in ihrer industriellen Kaltwasseranlage ein. Die Prozesskühlung für die Milchverarbeitung konnte über 12 Monate um 12,3% effizienter gestaltet werden.',
        pdfPath: '/fallstudien/EC-Fallstudie-Kaerntnermilch.pdf',
        imagePath: '/case-studies/kaerntnermilch.png',
    },
    {
        id: 'dubai-tower',
        product: 'endocool',
        title: 'Commercial Tower – Gebäudekühlung',
        location: 'Dubai, VAE',
        buildingType: 'Bürogebäude',
        savings: {
            percentage: '14,7%',
            financial: '42.000 €',
            co2: '24.500 kg CO₂e',
        },
        installDate: 'März 2023',
        description: 'Ein 35-stöckiges Bürogebäude in Dubai installierte EndoCool in seinem zentralen Kaltwasser-Kreislauf. Die Kühllast konnte bei gleichbleibendem Komfort um 14,7% reduziert werden – trotz Außentemperaturen von über 45 °C.',
        pdfPath: '/fallstudien/EC-Fallstudie-Dubai-Tower.pdf',
        imagePath: '/case-studies/dubai-tower.png',
    },
    {
        id: 'sofitel-mumbai',
        product: 'endocool',
        title: 'Sofitel Mumbai – Hotelkühlung',
        location: 'Mumbai, Indien',
        buildingType: 'Hotel',
        savings: {
            percentage: '11,8%',
            financial: '28.600 €',
            co2: '15.300 kg CO₂e',
        },
        installDate: 'Januar 2024',
        description: 'Das 5-Sterne-Hotel Sofitel Mumbai BKC setzte EndoCool in seiner zentralen Klimaanlage ein. Über 10 Monate wurden die Kühlkosten um 11,8% gesenkt – bei gleichbleibendem Gästekomfort in 302 Zimmern.',
        pdfPath: '/fallstudien/EC-Fallstudie-Sofitel-Mumbai.pdf',
        imagePath: '/case-studies/sofitel-mumbai.png',
    },
    {
        id: 'financial-campus',
        product: 'endocool',
        title: 'Financial Campus – Rechenzentrum',
        location: 'London, Vereinigtes Königreich',
        buildingType: 'Rechenzentrum',
        savings: {
            percentage: '13,2%',
            financial: '67.500 €',
            co2: '31.200 kg CO₂e',
        },
        installDate: 'August 2023',
        description: 'Ein großer Finanzdienstleister in London installierte EndoCool in der Kühlung seines Rechenzentrums. Die Serverkühlung konnte um 13,2% effizienter gestaltet werden – ein kritischer Faktor bei den hohen Wärmelasten moderner IT-Infrastruktur.',
        pdfPath: '/fallstudien/EC-Fallstudie-Financial-Campus.pdf',
        imagePath: '/case-studies/financial-campus.png',
    },
];
