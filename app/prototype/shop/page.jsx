'use client';

import { useTheme } from '../components/ThemeProvider';

export default function ShopPage() {
    const { theme } = useTheme();

    return (
        <div className="bg-white min-h-screen">
            <div className="px-4 pt-6 pb-4">
                <h1 className="text-xl font-bold text-gray-900">Shop</h1>
                <p className="text-sm text-gray-500 mt-1">Official merchandise from {theme.name}</p>
            </div>

            <div className="px-4">
                {/* External store link */}
                <a
                    href="https://quadrant.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-xl text-center no-underline"
                    style={{ backgroundColor: `${theme.primary}10`, border: `2px dashed ${theme.primary}40` }}
                >
                    <div className="text-4xl mb-3">🛍️</div>
                    <p className="font-semibold text-gray-900 text-sm">Visit the {theme.name} Store</p>
                    <p className="text-xs text-gray-500 mt-1">Browse official merchandise, teamwear and accessories</p>
                    <div
                        className="inline-flex items-center gap-1 mt-4 px-4 py-2 rounded-lg text-white text-sm font-medium no-underline"
                        style={{ backgroundColor: theme.primary }}
                    >
                        Shop Now
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </a>

                {/* Coming soon features */}
                <div className="mt-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Coming Soon</p>
                    <div className="space-y-2">
                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 opacity-60">
                            <p className="font-medium text-sm text-gray-700">In-App Product Catalogue</p>
                            <p className="text-xs text-gray-400 mt-0.5">Browse products without leaving the app</p>
                        </div>
                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 opacity-60">
                            <p className="font-medium text-sm text-gray-700">Native Checkout</p>
                            <p className="text-xs text-gray-400 mt-0.5">Pay directly from your Tribe account</p>
                        </div>
                        <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 opacity-60">
                            <p className="font-medium text-sm text-gray-700">Order Tracking</p>
                            <p className="text-xs text-gray-400 mt-0.5">Track your merchandise orders in-app</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
