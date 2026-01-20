'use client';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Endo5' : '';

interface LogoScrollerProps {
    className?: string;
}

export default function LogoScroller({ className = '' }: LogoScrollerProps) {
    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* Shadow overlays for fade effect */}
            <div
                className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.5), transparent)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.5), transparent)' }}
            />

            {/* Scrolling track */}
            <div
                className="flex items-center gap-16 animate-scroll"
                style={{ width: 'max-content' }}
            >
                {/* Duplicated sets for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex items-center gap-16">
                        <img
                            src={`${BASE_PATH}/logos/shell.png`}
                            alt="Shell"
                            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                        />
                        <img
                            src={`${BASE_PATH}/logos/shell.png`}
                            alt="Shell"
                            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                        />
                        <img
                            src={`${BASE_PATH}/logos/shell.png`}
                            alt="Shell"
                            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                        />
                        <img
                            src={`${BASE_PATH}/logos/shell.png`}
                            alt="Shell"
                            className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
