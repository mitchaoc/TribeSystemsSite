'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const DEMO_PASSWORD = 'tribe2026';
const AUTH_KEY = 'tribe-proto-auth';

export function AuthGate({ children }) {
    const { theme } = useTheme();
    const [authed, setAuthed] = useState(false);
    const [checking, setChecking] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const stored = sessionStorage.getItem(AUTH_KEY);
        if (stored === 'true') {
            setAuthed(true);
        }
        setChecking(false);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === DEMO_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            setAuthed(true);
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    if (checking) return null;

    if (authed) return children;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                    <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black"
                        style={{ background: `linear-gradient(135deg, ${theme.primaryDark} 0%, ${theme.primary} 100%)` }}
                    >
                        T
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">Tribe App Prototype</h1>
                    <p className="text-sm text-gray-500 mt-1">Enter the demo password to continue</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(''); }}
                        placeholder="Password"
                        autoFocus
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-gray-400 mb-3"
                    />
                    {error && <p className="text-red-500 text-xs mb-3">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl text-white font-semibold text-sm no-underline"
                        style={{ backgroundColor: theme.primary }}
                    >
                        Enter
                    </button>
                </form>
                <p className="text-[10px] text-gray-400 text-center mt-4">Confidential — for authorised partners only</p>
            </div>
        </div>
    );
}
