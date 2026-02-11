'use client';

import { createContext, useContext, useState } from 'react';

const themes = {
    veloce: {
        name: 'Veloce',
        primary: '#5B2D8E',
        primaryLight: '#7B4DAE',
        primaryDark: '#3D1A6E',
        accent: '#2bdcd2',
        cardBg: 'linear-gradient(135deg, #1a0a2e 0%, #3D1A6E 50%, #5B2D8E 100%)',
        cardImage: '/designs/Screenshot 2026-02-05 at 17.04.20-bank1.png',
        logo: 'V',
        tagline: 'Veloce eSports',
        heroText: 'Start your engines',
    },
    quadrant: {
        name: 'Quadrant',
        primary: '#FF6B00',
        primaryLight: '#FF8533',
        primaryDark: '#CC5500',
        accent: '#00D4AA',
        cardBg: 'linear-gradient(135deg, #1a1a1a 0%, #333333 50%, #FF6B00 100%)',
        cardImage: null,
        logo: 'Q',
        tagline: 'Quadrant',
        heroText: 'Level up your game',
    },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeName, setThemeName] = useState('veloce');
    const theme = themes[themeName];

    const toggleTheme = () => {
        setThemeName((prev) => (prev === 'veloce' ? 'quadrant' : 'veloce'));
    };

    return (
        <ThemeContext.Provider value={{ theme, themeName, toggleTheme, themes }}>
            <div
                style={{
                    '--theme-primary': theme.primary,
                    '--theme-primary-light': theme.primaryLight,
                    '--theme-primary-dark': theme.primaryDark,
                    '--theme-accent': theme.accent,
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}
