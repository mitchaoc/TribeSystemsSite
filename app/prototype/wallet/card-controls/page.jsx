'use client';

import Link from 'next/link';
import { ScreenHeader } from '../../components/ScreenHeader';
import { CardDisplay } from '../../components/CardDisplay';
import { useTheme } from '../../components/ThemeProvider';

const controlItems = [
    {
        label: 'Activate Card',
        icon: '✓',
        href: '#',
    },
    {
        label: 'Order Physical Card',
        icon: '💳',
        href: '/prototype/wallet/order-card',
    },
    {
        label: 'Report Card Issue',
        icon: 'ℹ',
        href: '#',
    },
    {
        label: 'Card Allowances & Limits',
        icon: '📊',
        href: '/prototype/wallet/limits',
    },
];

export default function CardControlsPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="Card Controls" showClose />

            <div className="px-4 py-4">
                <CardDisplay compact />

                <p className="text-center text-sm text-gray-600 mt-4 mb-4">
                    Everything you need to manage your card in one place
                </p>

                {/* Add to Apple Wallet */}
                <button
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 mb-4 no-underline"
                    style={{ backgroundColor: '#000' }}
                >
                    <span className="text-lg">🍎</span> Add to Apple Wallet
                </button>

                {/* View Card Details */}
                <Link
                    href="/prototype/wallet/card-details"
                    className="block w-full py-3 rounded-xl text-white font-semibold text-sm text-center mb-4 no-underline"
                    style={{ backgroundColor: theme.primary }}
                >
                    View Card Details
                </Link>

                {/* Control items */}
                <div className="space-y-2">
                    {controlItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between py-3 px-4 rounded-xl border border-gray-200 no-underline hover:bg-gray-50 transition"
                        >
                            <span className="font-medium text-sm text-gray-900">{item.label}</span>
                            <span className="text-gray-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
