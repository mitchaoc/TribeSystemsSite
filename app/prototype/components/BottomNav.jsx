'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

const navItems = [
    {
        label: 'Wallet',
        href: '/prototype/wallet',
        icon: (active) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 7.5v9A2.25 2.25 0 005.25 18.75h13.5A2.25 2.25 0 0021 16.5V12zm-3 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
    },
    {
        label: 'Payments',
        href: '/prototype/payments',
        icon: (active) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
        ),
    },
    {
        label: 'Rewards',
        href: '/prototype/rewards',
        icon: (active) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18" />
            </svg>
        ),
    },
    {
        label: 'Shop',
        href: '/prototype/shop',
        icon: (active) => (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        ),
    },
];

export function BottomNav() {
    const pathname = usePathname();
    const { theme } = useTheme();

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50" style={{ maxWidth: '430px', margin: '0 auto' }}>
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-0.5 px-3 py-1 no-underline transition-colors"
                            style={{ color: isActive ? theme.primary : '#9CA3AF' }}
                        >
                            {item.icon(isActive)}
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
