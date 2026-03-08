'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Cal = dynamic(() => import('@calcom/embed-react').then(mod => mod.default), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[600px] text-gray-400">
            Kalender wird geladen…
        </div>
    ),
});

export default function CalEmbed() {
    const [showCal, setShowCal] = useState(false);

    useEffect(() => {
        if (!showCal) return;
        (async () => {
            const { getCalApi } = await import('@calcom/embed-react');
            const cal = await getCalApi({ namespace: 'beratung' });
            cal('ui', {
                theme: 'light',
                cssVarsPerTheme: {
                    light: {
                        'cal-brand': '#3b82f6',
                        'cal-brand-emphasis': '#2563eb',
                        'cal-brand-text': '#ffffff',
                        'cal-text': '#1f2937',
                        'cal-text-emphasis': '#111827',
                        'cal-border': '#e5e7eb',
                        'cal-border-emphasis': '#d1d5db',
                        'cal-bg': '#ffffff',
                        'cal-bg-emphasis': '#f9fafb',
                    },
                    dark: {
                        'cal-brand': '#3b82f6',
                        'cal-brand-emphasis': '#2563eb',
                        'cal-brand-text': '#ffffff',
                    },
                },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, [showCal]);

    if (!showCal) {
        return (
            <div className="flex items-center justify-center min-h-[300px]">
                <button
                    onClick={() => setShowCal(true)}
                    className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                    style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                >
                    Termin buchen
                </button>
            </div>
        );
    }

    return (
        <Cal
            namespace="beratung"
            calLink="endo5"
            style={{
                width: '100%',
                height: '100%',
                overflow: 'scroll',
                minHeight: '600px',
            }}
            config={{
                layout: 'month_view',
                theme: 'light',
            }}
        />
    );
}
