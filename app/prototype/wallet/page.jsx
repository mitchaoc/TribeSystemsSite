'use client';

import Link from 'next/link';
import { useTheme } from '../components/ThemeProvider';
import { CardDisplay } from '../components/CardDisplay';
import { TransactionItem } from '../components/TransactionItem';

const transactions = [
    { merchant: 'Starbucks', location: 'Manchester', amount: -39.78 },
    { merchant: 'Amazon', location: 'Amazon.co.uk', amount: 837.03 },
    { merchant: 'Zara', location: 'Liverpool One', amount: -35.99 },
];

export default function WalletPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <Link href="/prototype/account" className="no-underline">
                    <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: theme.primary }}
                    >
                        QA
                    </div>
                </Link>
                <div className="text-center">
                    <p className="text-xs text-gray-500">Quentin Armitage</p>
                    <p className="text-2xl font-bold text-gray-900">£693.74</p>
                </div>
                <div className="w-9" />
            </div>

            {/* Card */}
            <div className="px-4 mt-2">
                <CardDisplay />
            </div>

            {/* Quick actions */}
            <div className="flex justify-center gap-8 py-4">
                <Link href="/prototype/wallet/card-controls" className="flex flex-col items-center gap-1 no-underline">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${theme.primary}15` }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth={2} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Card controls</span>
                </Link>
                <Link href="/prototype/wallet/add-money" className="flex flex-col items-center gap-1 no-underline">
                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${theme.primary}15` }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth={2} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Add funds</span>
                </Link>
            </div>

            {/* Latest Transactions */}
            <div className="px-4">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-base font-bold text-gray-900">Latest Transactions</h2>
                    <Link
                        href="/prototype/wallet/transactions"
                        className="text-xs font-medium no-underline"
                        style={{ color: theme.primary }}
                    >
                        View all
                    </Link>
                </div>
                <p className="text-xs text-gray-500 mb-2">21st July 2025</p>
                <div>
                    {transactions.map((tx, i) => (
                        <TransactionItem key={i} {...tx} />
                    ))}
                </div>
            </div>

            {/* Rewards preview */}
            <div className="px-4 mt-6 mb-4">
                <Link
                    href="/prototype/rewards"
                    className="block p-4 rounded-xl no-underline"
                    style={{ backgroundColor: `${theme.primary}10`, border: `1px solid ${theme.primary}30` }}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-gray-900">Rewards & Perks</p>
                            <p className="text-xs text-gray-500 mt-0.5">Explore exclusive offers from {theme.name}</p>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke={theme.primary} strokeWidth={2} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    );
}
