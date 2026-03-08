'use client';

import { useState, useEffect } from 'react';

const words = ['einfacher', 'flüssiger', 'schneller', 'rentabler', 'logischer'];

export default function RotatingWord() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setFade(true);
            }, 300);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className="font-bold text-blue-600 inline-block w-[90px] text-center transition-opacity duration-300"
            style={{ opacity: fade ? 1 : 0 }}
        >
            {words[index]}
        </span>
    );
}
