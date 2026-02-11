'use client';

import { useTheme } from '../components/ThemeProvider';

const comingSoonItems = [
    { label: 'Standing Orders', description: 'Set up recurring scheduled payments' },
    { label: 'Direct Debits', description: 'Manage direct debit mandates' },
    { label: 'Request Money', description: 'Request payments from other Tribe users' },
    { label: 'Scheduled Payments', description: 'View all upcoming and recurring payments' },
];

export default function PaymentsPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="px-4 pt-6 pb-4">
                <h1 className="text-xl font-bold text-gray-900">Payments</h1>
                <p className="text-sm text-gray-500 mt-1">Send money and manage your payments</p>
            </div>

            {/* Transfer money - active */}
            <div className="px-4 mb-4">
                <button
                    className="w-full p-4 rounded-xl text-white text-left no-underline"
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold text-sm">Transfer Money</p>
                            <p className="text-xs opacity-80 mt-0.5">Send money to a UK bank account</p>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </button>
            </div>

            {/* Coming soon items */}
            <div className="px-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Coming Soon</p>
                <div className="space-y-2">
                    {comingSoonItems.map((item) => (
                        <div key={item.label} className="p-4 rounded-xl border border-gray-100 bg-gray-50 opacity-60">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-sm text-gray-700">{item.label}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{item.description}</p>
                                </div>
                                <span className="text-[10px] font-semibold text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">SOON</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
