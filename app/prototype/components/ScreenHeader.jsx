'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export function ScreenHeader({ title, showBack = false, showClose = false, onClose }) {
    const router = useRouter();
    const { theme } = useTheme();

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-40">
            <div className="w-10">
                {showBack && (
                    <button onClick={() => router.back()} className="text-gray-600 p-1 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                )}
            </div>
            <h1 className="text-lg font-semibold" style={{ color: theme.primary }}>{title}</h1>
            <div className="w-10 flex justify-end">
                {showClose && (
                    <button onClick={onClose || (() => router.back())} className="text-gray-400 p-1 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
