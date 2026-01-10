export default function Problem() {
    const problems = [
        {
            icon: '📈',
            title: 'Steigende Kosten',
            description: 'Energiepreise steigen Jahr für Jahr – und Ihre Heizkosten mit.',
        },
        {
            icon: '💸',
            title: 'Ineffiziente Heizung',
            description: 'Alte Systeme verschwenden Energie, ohne dass Sie es merken.',
        },
        {
            icon: '🏗️',
            title: 'Teure Sanierung',
            description: 'Eine neue Heizung oder Dämmung kostet zehntausende Euro.',
        },
        {
            icon: '⏰',
            title: 'Zeit läuft',
            description: 'Je länger Sie warten, desto mehr Geld geht verloren.',
        },
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="mb-4">Kommt Ihnen das bekannt vor?</h2>
                    <p className="text-lg text-gray-600">
                        Viele Gebäudebesitzer kämpfen mit denselben Herausforderungen.
                    </p>
                </div>

                {/* Problem Cards - Simple Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{problem.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
