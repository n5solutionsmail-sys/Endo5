'use client';

export default function GridContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid-container">
            {/* Content */}
            <div className="grid-content">
                {children}
            </div>
        </div>
    );
}
