'use client';

import { useState } from 'react';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useTheme } from '../../components/ThemeProvider';

const allowancesData = [
    { label: 'UK & EEA ATM allowance\nEvery 30 days', value: '£300' },
    { label: 'International ATM allowance\nEvery 30 days', value: '£200' },
];

const limitsData = [
    { label: 'Contactless Payments Daily Limit', value: '£500' },
    { label: 'Card Transactions Daily Limit', value: '£1000' },
    { label: 'ATM Daily Limit', value: '£350' },
    { label: 'ATM Monthly Limit (30 days)', value: '£10,000' },
];

const transfersData = {
    in: [
        { label: 'Top-up by bank transfer', value: 'Unlimited' },
        { label: 'Cash Deposits (6 months)', value: '£1000' },
    ],
    out: [
        { label: 'Transfers Out (daily)', value: '£1000' },
        { label: 'Transfers to Tribe Systems customers (daily)', value: '£2500' },
    ],
};

const tabs = ['Allowances', 'Limits'];

export default function LimitsPage() {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('Allowances');

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="Allowances & Limits" showClose />

            {/* Tab bar */}
            <div className="flex mx-4 mt-4 rounded-xl overflow-hidden" style={{ backgroundColor: theme.primary }}>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-3 text-sm font-semibold no-underline transition ${
                            activeTab === tab
                                ? 'bg-white/20 text-white'
                                : 'text-white/70 hover:text-white'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Upgrade banner */}
            <div className="mx-4 mt-4 p-3 rounded-xl text-sm text-white" style={{ backgroundColor: theme.primary }}>
                Upgrade to a Premium Account to unlock higher allowances and additional card choices.
            </div>

            {activeTab === 'Allowances' && (
                <div className="px-4 mt-4">
                    {allowancesData.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100">
                            <p className="text-sm text-gray-700 whitespace-pre-line">{item.label}</p>
                            <p className="text-lg font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}

                    {/* Transfers In */}
                    <div className="mt-6">
                        <div className="py-2 px-4 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>
                            Transfers In
                        </div>
                        {transfersData.in.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100">
                                <p className="text-sm text-gray-700">{item.label}</p>
                                <p className="text-lg font-bold text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Transfers Out */}
                    <div className="mt-4">
                        <div className="py-2 px-4 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: theme.primary }}>
                            Transfers Out
                        </div>
                        {transfersData.out.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100">
                                <p className="text-sm text-gray-700">{item.label}</p>
                                <p className="text-lg font-bold text-gray-900">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'Limits' && (
                <div className="px-4 mt-4">
                    <div className="py-2 px-4 rounded-lg text-sm font-semibold text-white mb-2" style={{ backgroundColor: theme.primary }}>
                        Card Limits
                    </div>
                    {limitsData.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100">
                            <p className="text-sm text-gray-700">{item.label}</p>
                            <p className="text-lg font-bold text-gray-900">{item.value}</p>
                        </div>
                    ))}
                    <div className="mt-4 p-3 rounded-xl bg-gray-50 text-xs text-gray-600 text-center">
                        Cash withdrawals at ATM&apos;s are free within your allowance. If you take out more than your limit, a 2.5% fee applies.
                    </div>
                </div>
            )}
        </div>
    );
}
