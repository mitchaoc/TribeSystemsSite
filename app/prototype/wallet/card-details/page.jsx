'use client';

import { ScreenHeader } from '../../components/ScreenHeader';
import { useTheme } from '../../components/ThemeProvider';

const cardFields = [
    { label: 'Name on Card:', value: 'Mr Q Armitage' },
    { label: 'Card Number/PAN:', value: '6243 7654 XXXX XXXX' },
    { label: 'Expiry:', value: '11/28' },
    { label: 'CVV:', value: '765' },
];

export default function CardDetailsPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="View Card Details" showClose />

            {/* Security notice */}
            <div className="mx-4 mt-4 p-4 rounded-xl text-white text-sm" style={{ backgroundColor: theme.primary }}>
                <p>
                    These are your personal card details. They&apos;re just for you, so please keep them private and make sure no one else can see your screen. Keeping this information secure helps protect your account.
                </p>
            </div>

            {/* Card fields */}
            <div className="px-4 mt-6 space-y-6">
                {cardFields.map((field) => (
                    <div key={field.label} className="border-b border-gray-100 pb-4">
                        <p className="text-xs text-gray-500 mb-1">{field.label}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold text-gray-900">{field.value}</p>
                            <button className="text-gray-400 no-underline p-1">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0113.5 2.25h-3a2.25 2.25 0 00-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* View PIN button */}
            <div className="px-4 mt-6">
                <button
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 no-underline"
                    style={{ backgroundColor: '#1F2937' }}
                >
                    View my PIN
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
