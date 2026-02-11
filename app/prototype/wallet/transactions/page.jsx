'use client';

import { ScreenHeader } from '../../components/ScreenHeader';
import { TransactionItem } from '../../components/TransactionItem';
import { useTheme } from '../../components/ThemeProvider';

const pendingTransactions = [
    { merchant: 'Starbucks', location: 'Manchester', amount: -39.78 },
    { merchant: 'Amazon', location: 'Amazon.co.uk', amount: 837.03 },
    { merchant: 'Zara', location: 'Liverpool One', amount: -35.99 },
];

const completedTransactions = [
    { merchant: 'Tim Hortons', location: 'Birmingham Airport', amount: -39.78 },
    { merchant: 'Virgin Trains', location: 'Glasgow Station', amount: -104.56 },
    { merchant: 'Vue', location: 'Liverpool One', amount: -14.99 },
];

export default function TransactionsPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="Transactions" showClose />

            {/* Search and filter */}
            <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex-1 relative">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text" placeholder="Search transactions" className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-gray-400" />
                </div>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center no-underline">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth={2} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                </button>
            </div>

            {/* Pending */}
            <div className="px-4">
                <div className="py-2 px-4 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: theme.primary }}>
                    Pending
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-gray-500">
                    <span>21 July 2025</span>
                    <span className="font-medium text-gray-900">£693.74</span>
                </div>
                {pendingTransactions.map((tx, i) => (
                    <TransactionItem key={i} {...tx} />
                ))}
            </div>

            {/* Completed */}
            <div className="px-4 mt-4">
                <div className="py-2 px-4 rounded-lg font-semibold text-sm text-white" style={{ backgroundColor: theme.primary }}>
                    Completed
                </div>
                <div className="flex justify-between items-center py-2 text-xs text-gray-500">
                    <span>16 July 2025</span>
                    <span className="font-medium text-gray-900">£693.74</span>
                </div>
                {completedTransactions.map((tx, i) => (
                    <TransactionItem key={i} {...tx} />
                ))}
            </div>
        </div>
    );
}
