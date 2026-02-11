'use client';

import { useTheme } from './ThemeProvider';

export function CardDisplay({ compact = false }) {
    const { theme } = useTheme();

    return (
        <div
            className={`relative rounded-xl overflow-hidden shadow-lg ${compact ? 'h-40' : 'h-48'}`}
            style={{ background: theme.cardBg }}
        >
            <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-wider opacity-80">Virtual</span>
                    <div className="flex flex-col items-end">
                        <svg viewBox="0 0 48 16" className="w-12 h-4">
                            <text x="0" y="13" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">VISA</text>
                        </svg>
                        <span className="text-[8px] uppercase tracking-wider opacity-60 mt-0.5">Debit</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-5 rounded-sm bg-yellow-400/80" />
                        <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3 opacity-60">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm tracking-widest font-mono opacity-90">•••• •••• •••• 1111</span>
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{ backgroundColor: theme.accent }}
                        >
                            {theme.logo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
