'use client';

import { ScreenHeader } from '../../components/ScreenHeader';
import { CardDisplay } from '../../components/CardDisplay';
import { useTheme } from '../../components/ThemeProvider';

export default function OrderCardPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            <ScreenHeader title="Order Physical Card" showClose />

            <div className="px-4 py-4">
                <CardDisplay compact />

                <div className="text-center mt-4">
                    <p className="text-sm" style={{ color: theme.primary }}>Balance</p>
                    <p className="text-2xl font-bold text-gray-900">£693.74</p>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Your new card costs <strong>£4.99</strong>, including delivery.
                        You can pay straight from your account balance or use another card for flexibility.
                    </p>
                </div>

                <div className="mt-8 space-y-3">
                    <button className="w-full py-3 rounded-xl border-2 border-gray-800 text-gray-800 font-semibold text-sm no-underline hover:bg-gray-50 transition">
                        Pay using another card
                    </button>
                    <button
                        className="w-full py-3 rounded-xl font-semibold text-sm no-underline text-white"
                        style={{ backgroundColor: theme.primary }}
                    >
                        Add funds to purchase
                    </button>
                </div>
            </div>
        </div>
    );
}
