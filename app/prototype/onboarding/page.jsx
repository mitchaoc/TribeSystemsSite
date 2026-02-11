'use client';

import Link from 'next/link';
import { useTheme } from '../components/ThemeProvider';

const steps = [
    { number: 1, title: 'Tell Us About Yourself', description: 'Name as it appears on photo ID' },
    { number: 2, title: 'How Do We Reach You?', description: 'Email address and verification' },
    { number: 3, title: 'What\'s Your Mobile Number?', description: 'For account verification and security' },
    { number: 4, title: 'Create a Keycode', description: '6-digit secure keycode + biometric setup' },
    { number: 5, title: 'When Were You Born?', description: 'Date of birth for identity verification' },
    { number: 6, title: 'Where Do You Live?', description: 'Address matching official documents' },
];

const tiers = [
    { name: 'Everyday Account', price: '£4.99/monthly', features: ['Everyday banking with instant balance updates', 'Free debit card for payments worldwide', 'Access to selected in-app content and perks', '24/7 in-app support'] },
    { name: 'Plus Account', price: '£6.99/monthly', features: ['All Everyday features', 'Unlock extra rewards and experiences', 'Enhanced content access'] },
    { name: 'Premium Account', price: '£89.99/annually', features: ['All Plus features, plus:', 'Full access to premium rewards & experiences', 'Exclusive annual content collections', 'Dedicated priority support'] },
];

export default function OnboardingPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            {/* Welcome Hero */}
            <div
                className="p-8 text-center text-white"
                style={{ background: `linear-gradient(135deg, ${theme.primaryDark} 0%, ${theme.primary} 100%)` }}
            >
                <div className="text-4xl font-black mb-2">{theme.logo}</div>
                <p className="text-sm opacity-80 mb-4">
                    {theme.heroText} and go behind the scenes with {theme.tagline}. Get exclusive content, early access and subscriber-only rewards.
                </p>
                <div className="space-y-2 mt-6">
                    <button className="w-full py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm no-underline">
                        I&apos;m new here →
                    </button>
                    <button className="w-full py-3 rounded-xl border-2 border-white/50 text-white font-semibold text-sm no-underline">
                        Log in →
                    </button>
                </div>
            </div>

            {/* Choose Your Card */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-bold text-gray-900 text-center">Choose Your Card</h2>
                <p className="text-center text-sm text-gray-600 mt-1 mb-4">WHY TAKE A CARD?</p>
                <ul className="text-xs text-gray-500 space-y-1 mb-6 pl-4">
                    <li>Exclusive rewards for real fans</li>
                    <li>Early access to content</li>
                    <li>Premium banking features you&apos;ll love</li>
                </ul>

                <p className="text-sm font-semibold text-gray-700 mb-3">Which card feels right for you?</p>

                <div className="space-y-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className="border-2 rounded-xl p-4"
                            style={{ borderColor: `${theme.primary}40` }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div>
                                    <p className="font-semibold text-sm text-gray-900">{tier.name}</p>
                                    <p className="text-xs text-gray-500">Enjoy everyday perks and content!</p>
                                </div>
                                <span className="font-bold text-sm" style={{ color: theme.primary }}>{tier.price}</span>
                            </div>
                            <p className="text-xs underline" style={{ color: theme.primary }}>See full product details</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Registration Steps */}
            <div className="px-4 py-6 border-t border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Registration Steps</h2>
                <div className="space-y-3">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-start gap-3">
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                style={{ backgroundColor: theme.primary }}
                            >
                                {step.number}
                            </div>
                            <div>
                                <p className="font-semibold text-sm text-gray-900">{step.title}</p>
                                <p className="text-xs text-gray-500">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* KYC success and legal */}
                <div className="mt-6 space-y-3">
                    <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                        <p className="text-2xl mb-1">🏁</p>
                        <p className="font-semibold text-sm text-green-800">KYC Verification</p>
                        <p className="text-xs text-green-600">Identity checks processed via Equals API</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
                        <p className="font-semibold text-sm text-gray-700">Legal Agreements</p>
                        <p className="text-xs text-gray-500">Terms of Service & Privacy Policy acceptance</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                        <p className="font-semibold text-sm text-blue-800">Initial Payment</p>
                        <p className="text-xs text-blue-600">Fund account to cover monthly fee</p>
                    </div>
                </div>
            </div>

            {/* Link to wallet */}
            <div className="px-4 py-6">
                <Link
                    href="/prototype/wallet"
                    className="block w-full py-3 rounded-xl text-white font-semibold text-sm text-center no-underline"
                    style={{ backgroundColor: theme.primary }}
                >
                    View Wallet (Post-Onboarding) →
                </Link>
            </div>
        </div>
    );
}
