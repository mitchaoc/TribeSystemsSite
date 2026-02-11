'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../components/ThemeProvider';

const profileData = {
    name: 'Quentin Armitage',
    address: '184 Bartell Keys,\nBorders,\nHaleyside,\nHS18 1BK',
    email: 'quentin@btinternet.com',
    mobile: '07999 991991',
    memberSince: 'Apr 2024',
};

const accountTabs = ['Profile', 'Bank', 'Card'];

export default function AccountPage() {
    const { theme } = useTheme();
    const [view, setView] = useState('hub');
    const [accountTab, setAccountTab] = useState('Profile');

    if (view === 'hub') {
        return (
            <div className="bg-white min-h-screen">
                {/* Close button */}
                <div className="flex justify-end p-4">
                    <Link href="/prototype/wallet" className="text-gray-400 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>

                {/* Profile photo and name */}
                <div className="text-center px-4 pb-6">
                    <div
                        className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold"
                        style={{ backgroundColor: theme.primary }}
                    >
                        QA
                    </div>
                    <h1 className="text-xl font-bold text-gray-900">{profileData.name}</h1>
                    <p className="text-sm text-gray-500">Member since {profileData.memberSince}</p>
                </div>

                {/* Navigation cards */}
                <div className="px-4 space-y-3">
                    <button
                        onClick={() => setView('account')}
                        className="w-full p-4 rounded-xl text-left no-underline text-white relative overflow-hidden"
                        style={{ backgroundColor: theme.primary }}
                    >
                        <p className="font-semibold text-sm">My account 👤</p>
                    </button>

                    <button className="w-full p-4 rounded-xl text-left no-underline text-white relative overflow-hidden opacity-60" style={{ backgroundColor: theme.primaryDark }}>
                        <p className="font-semibold text-sm">My payouts 💰</p>
                        <span className="text-[10px] absolute top-2 right-2 bg-white/20 px-2 py-0.5 rounded-full">Coming Soon</span>
                    </button>

                    <button
                        onClick={() => setView('help')}
                        className="w-full p-4 rounded-xl text-left no-underline text-white relative overflow-hidden"
                        style={{ backgroundColor: theme.primaryLight }}
                    >
                        <p className="font-semibold text-sm">Help and Support 🤖</p>
                    </button>
                </div>
            </div>
        );
    }

    if (view === 'help') {
        return (
            <div className="bg-white min-h-screen">
                <div className="flex justify-end p-4">
                    <button onClick={() => setView('hub')} className="text-gray-400 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="text-center px-8 pt-8">
                    <p className="text-gray-600 text-sm">Hey, I&apos;m</p>
                    <h1 className="text-4xl font-black text-gray-900 mt-1">PITStop</h1>
                    <p className="text-sm text-gray-500 mt-1">your<br />Personal Intelligence Service</p>
                </div>

                <div className="text-6xl text-center mt-8 mb-8">🤖</div>

                <div className="px-4 mt-auto">
                    <p className="text-xs text-gray-400 text-center mb-2">Let me know what you&apos;d like help with:</p>
                    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-3">
                        <input
                            type="text"
                            placeholder="Start Chat"
                            className="flex-1 text-sm text-gray-900 border-none outline-none bg-transparent"
                        />
                        <svg viewBox="0 0 24 24" fill={theme.primary} className="w-6 h-6">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    // view === 'account'
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="w-10">
                    <button onClick={() => setView('hub')} className="text-gray-600 p-1 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <h1 className="text-lg font-semibold" style={{ color: theme.primary }}>My Account</h1>
                <div className="w-10 flex justify-end">
                    <button onClick={() => setView('hub')} className="text-gray-400 p-1 no-underline">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Info banner */}
            <div className="mx-4 mt-4 p-3 rounded-xl text-sm text-white" style={{ backgroundColor: theme.primary }}>
                See your personal information, bank details or manage your card product right here:
            </div>

            {/* Sub-tabs */}
            <div className="flex mx-4 mt-4 rounded-xl overflow-hidden border border-gray-200">
                {accountTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setAccountTab(tab)}
                        className={`flex-1 py-2.5 text-xs font-semibold no-underline transition ${
                            accountTab === tab ? 'text-white' : 'text-gray-600 bg-white'
                        }`}
                        style={accountTab === tab ? { backgroundColor: theme.primary } : {}}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Profile tab content */}
            {accountTab === 'Profile' && (
                <div className="px-4 mt-4 space-y-5">
                    <div>
                        <p className="text-xs text-gray-500">Name:</p>
                        <p className="font-semibold text-gray-900">{profileData.name}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs text-gray-500">Address:</p>
                        <p className="font-semibold text-gray-900 whitespace-pre-line">{profileData.address}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500">Email:</p>
                                <p className="font-semibold text-gray-900">{profileData.email}</p>
                            </div>
                            <button className="text-gray-400 no-underline">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500">Mobile Number:</p>
                                <p className="font-semibold text-gray-900">{profileData.mobile}</p>
                            </div>
                            <button className="text-gray-400 no-underline">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <button className="text-sm no-underline" style={{ color: theme.primary }}>Change keycode</button>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                        <button className="text-sm text-gray-500 no-underline">Log out</button>
                    </div>
                </div>
            )}

            {accountTab === 'Bank' && (
                <div className="px-4 mt-6 text-center">
                    <p className="text-4xl mb-3">🏦</p>
                    <p className="text-sm text-gray-500">Bank details and statements</p>
                    <p className="text-xs text-gray-400 mt-1">Account Number: 25475971 | Sort Code: 51-92-87</p>
                </div>
            )}

            {accountTab === 'Card' && (
                <div className="px-4 mt-6 text-center">
                    <p className="text-4xl mb-3">💳</p>
                    <p className="text-sm text-gray-500">Manage your card product</p>
                    <p className="text-xs text-gray-400 mt-1">Current tier: Everyday (£4.99/month)</p>
                    <button
                        className="mt-4 px-6 py-2 rounded-lg text-white text-sm font-medium no-underline"
                        style={{ backgroundColor: theme.primary }}
                    >
                        Upgrade Tier
                    </button>
                </div>
            )}
        </div>
    );
}
