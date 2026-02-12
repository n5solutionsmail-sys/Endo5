export type ProductId = 'endotherm' | 'endocool';

export interface ProductConfig {
    id: ProductId;
    name: string;
    tagline: string;
    color: string;
    colorDark: string;
    colorLight: string;
    colorBg: string;
    colorBgSubtle: string;
    system: string;
    stats: {
        label: string;
        value: string;
        unit?: string;
        sub: string;
    }[];
    problems: {
        title: string;
        desc: string;
    }[];
    solutions: {
        title: string;
        desc: string;
    }[];
    solutionTitle: string;
    solutionSubtitle: string;
    resultText: string;
    beforeImage: string;
    afterImage: string;
}

export const products: Record<ProductId, ProductConfig> = {
    endotherm: {
        id: 'endotherm',
        name: 'EndoTherm®',
        tagline: 'Heizkosten senken',
        color: '#3b82f6',
        colorDark: '#2563eb',
        colorLight: '#60a5fa',
        colorBg: 'rgba(59, 130, 246, 0.1)',
        colorBgSubtle: 'rgba(59, 130, 246, 0.05)',
        system: 'Heizung',
        stats: [
            {
                label: 'Heizkosten senken',
                value: '-15%',
                sub: 'Sofort ab Installation',
            },
            {
                label: 'Amortisation',
                value: 'Ø 18',
                unit: 'Monate',
                sub: 'Schneller als jede Dämmung',
            },
            {
                label: 'Installation',
                value: '0',
                unit: 'h',
                sub: 'Keine Betriebsunterbrechung',
            },
            {
                label: 'Systemkompatibilität',
                value: '100%',
                sub: 'Für alle wassergeführten Systeme',
            },
        ],
        problems: [
            { title: 'Langsame Erwärmung', desc: 'System braucht lange, bis die gewünschte Temperatur erreicht ist.' },
            { title: 'Geringe Wärmeabgabe', desc: 'Heizkörper geben weniger Wärme an den Raum ab als möglich.' },
            { title: 'Hohe Abgasverluste', desc: 'Wertvolle Energie geht ungenutzt über den Schornstein verloren.' },
            { title: 'Häufige Kesselstarts', desc: 'Ständiges Ein- und Ausschalten erhöht Verschleiß und Verbrauch.' },
        ],
        solutions: [
            { title: 'Schneller warm', desc: 'Verbessertes Blasensiedeverhalten erwärmt das System schneller.' },
            { title: 'Mehr Wärmeabgabe', desc: 'Größere thermische Kontaktfläche erhöht die Raumerwärmung.' },
            { title: 'Wärmerückgewinnung', desc: 'Kühlerer Rücklauf steigert Kondensation – weniger Abgasverluste.' },
            { title: 'Längere Heizzyklen', desc: 'Weniger Kesselstarts bedeuten weniger Verschleiß.' },
        ],
        solutionTitle: 'EndoTherm® einfach erklärt',
        solutionSubtitle: 'Ein Additiv für Ihr Heizwasser – verbessert die Wärmeübertragung.',
        resultText: 'Bis zu 15% weniger Heizkosten – ohne Umbau, große Investition oder Betriebsunterbrechung.',
        beforeImage: '/images/heating-before.png',
        afterImage: '/images/heating-after.png',
    },
    endocool: {
        id: 'endocool',
        name: 'EndoCool®',
        tagline: 'Kühlkosten senken',
        color: '#06b6d4',
        colorDark: '#0891b2',
        colorLight: '#22d3ee',
        colorBg: 'rgba(6, 182, 212, 0.1)',
        colorBgSubtle: 'rgba(6, 182, 212, 0.05)',
        system: 'Kühlung',
        stats: [
            {
                label: 'Kühlkosten senken',
                value: '-15%',
                sub: 'Sofort ab Installation',
            },
            {
                label: 'Amortisation',
                value: 'Ø 12',
                unit: 'Monate',
                sub: 'Schneller ROI als klassische Sanierung',
            },
            {
                label: 'Installation',
                value: '0',
                unit: 'h',
                sub: 'Keine Betriebsunterbrechung',
            },
            {
                label: 'Systemkompatibilität',
                value: '100%',
                sub: 'Für alle Kaltwasser-Kreisläufe',
            },
        ],
        problems: [
            { title: 'Hoher Energieverbrauch', desc: 'Kälteanlagen verbrauchen bis zu 40% der Gebäudeenergie.' },
            { title: 'Ineffiziente Wärmeabfuhr', desc: 'Kaltwassersysteme transportieren Wärme nicht optimal ab.' },
            { title: 'Überdimensionierte Anlagen', desc: 'Chiller laufen oft auf Volllast statt im effizienten Teillastbereich.' },
            { title: 'Steigende Kühllasten', desc: 'Klimawandel und Digitalisierung erhöhen den Kühlbedarf stetig.' },
        ],
        solutions: [
            { title: 'Bessere Wärmeabfuhr', desc: 'Verbesserte Benetzung der Wärmetauscherflächen steigert den Wärmetransport.' },
            { title: 'Geringerer Energieverbrauch', desc: 'Chiller erreichen die Solltemperatur schneller und laufen kürzer.' },
            { title: 'Optimierter Teillastbetrieb', desc: 'Effizientere Wärmeübertragung ermöglicht niedrigere Chiller-Leistung.' },
            { title: 'Längere Anlagenlebensdauer', desc: 'Weniger Laufzeit und stabilerer Betrieb schonen die Kompressoren.' },
        ],
        solutionTitle: 'EndoCool® einfach erklärt',
        solutionSubtitle: 'Ein Additiv für Ihr Kaltwasser – verbessert die Wärmeabfuhr in Kühlsystemen.',
        resultText: 'Bis zu 15% weniger Kühlkosten – ohne Umbau, große Investition oder Betriebsunterbrechung.',
        beforeImage: '/images/cooling-before.png',
        afterImage: '/images/cooling-after.png',
    },
};

export const productList = Object.values(products);
