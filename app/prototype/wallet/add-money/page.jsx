'use client';

import { useState } from 'react';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useTheme } from '../../components/ThemeProvider';

export default function AddMoneyPage() {
    const { theme } = useTheme();
    const [showAccountDetails, setShowAccountDetails] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="Add Money" showClose />

            <div className="px-4 py-4">
                {/* Info banner */}
                <div className="bg-blue-50 rounded-xl p-4 mb-6 text-center">
                    <p className="text-sm text-gray-700 font-medium">
                        We offer two easy ways to add money. Simply choose what works for you.
                    </p>
                </div>

                {/* Card/Wallet option */}
                <div className="mb-6">
                    <p className="text-sm text-gray-700 mb-3">
                        If you choose to add money by card or wallet, payment options include:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700">
                            <span className="text-base">🍎</span> Apple Pay
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700">
                            <span className="text-base">G</span> Google Pay
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700">
                            <span className="font-bold text-blue-700">VISA</span> Visa
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700">
                            <span className="text-red-500 font-bold">●●</span> Mastercard
                        </span>
                    </div>
                    <p className="text-xs text-gray-500">
                        The funds will arrive instantly in your account.
                    </p>
                </div>

                {/* Bank Transfer option */}
                <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-700 mb-3">
                        If you choose to add funds by:
                    </p>
                    <button
                        onClick={() => setShowAccountDetails(true)}
                        className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 w-full text-left no-underline hover:bg-gray-50 transition"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth={2} className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                        <span className="font-semibold text-sm text-gray-900">Bank Transfer</span>
                    </button>
                </div>
            </div>

            {/* Account Details Modal */}
            {showAccountDetails && (
                <div className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center" onClick={() => setShowAccountDetails(false)}>
                    <div
                        className="bg-white rounded-t-2xl w-full max-w-[430px] p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold" style={{ color: theme.primary }}>Account Details</h3>
                            <button onClick={() => setShowAccountDetails(false)} className="text-gray-400 no-underline">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-gray-500">Account Name:</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900">Mr Quentin Armitage</p>
                                    <button className="text-gray-400 no-underline">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0113.5 2.25h-3a2.25 2.25 0 00-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Account Number:</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 text-lg">25475971</p>
                                    <button className="text-gray-400 no-underline">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0113.5 2.25h-3a2.25 2.25 0 00-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Sort Code:</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-gray-900 text-lg">51-92-87</p>
                                    <button className="text-gray-400 no-underline">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0113.5 2.25h-3a2.25 2.25 0 00-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
