'use client';

import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
    const { theme, themeName, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-3 right-3 z-[100] flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg no-underline transition-all hover:scale-105"
            style={{ backgroundColor: theme.primary }}
        >
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                {themeName === 'veloce' ? 'V' : 'Q'}
            </span>
            {theme.name}
        </button>
    );
}
