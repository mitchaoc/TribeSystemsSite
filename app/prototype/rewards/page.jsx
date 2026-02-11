'use client';

import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';

const subTabs = ['Merch', 'Events', 'Rewards', 'Experiences', 'Partner'];

const rewardsContent = {
    Merch: [
        { title: 'Quadrant Moto Jersey', detail: '£75', action: 'Buy now', image: '👕' },
        { title: 'Quadrant Vintage Cap - Mushroom Grey', detail: '£25 While stocks last!', action: 'Buy now', image: '🧢' },
        { title: 'Veloce Racing Sublimated T-Shirt', detail: '£25 Until they\'re gone!', action: 'Buy now', image: '👕' },
    ],
    Events: [
        { title: 'Veloce Offices Tour Invite', detail: 'Limited number of tickets', action: 'Claim', image: '🏢' },
        { title: 'Meet Team Quadrant', detail: '20 to be won', action: 'Enter', image: '🎮' },
    ],
    Rewards: [
        { title: 'Extreme E hotel bundle offer', detail: 'Exclusive Member Only', action: 'Redeem', image: '🏨' },
        { title: 'Enjoy a trackside meal', detail: 'Includes a main, drink and dessert', action: 'Redeem', image: '🍽️' },
        { title: 'Sushi at London\'s finest', detail: '10% off', action: 'Redeem', image: '🍣' },
        { title: 'Half Price tickets to the Greatest Track Day on Earth', detail: 'Half Price', action: 'Redeem', image: '🏎️' },
    ],
    Experiences: [
        { title: 'Private tuition from Kevin Hansen', detail: '1 free hour to be won', action: 'Redeem', image: '🏁' },
        { title: 'Behind the scenes paddock tour', detail: 'Exclusive access', action: 'Claim', image: '🎫' },
    ],
    Partner: [
        { title: 'Collect 100 free VEXT coins', detail: 'Free for first 100 subscribers', action: 'Redeem', image: '🪙' },
        { title: '1 Free Scuf faceplate - choose your design', detail: 'Limited availability', action: 'Redeem', image: '🎮' },
        { title: '10% off Quadrant Clothing Brand', detail: 'Limited Time Deal!', action: 'Redeem', image: '👕' },
    ],
};

export default function RewardsPage() {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState('Merch');

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="px-4 pt-6 pb-2">
                <h1 className="text-xl font-bold text-gray-900">Gear & Gratitude</h1>
                <p className="text-sm text-gray-500 mt-1">
                    Enjoy the perks of being part of the team — discounts, offers, and insider access, all in one place.
                </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex overflow-x-auto px-4 gap-1 py-3 no-scrollbar">
                {subTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap no-underline transition ${
                            activeTab === tab
                                ? 'text-white'
                                : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                        }`}
                        style={activeTab === tab ? { backgroundColor: theme.primary } : {}}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content cards */}
            <div className="px-4 space-y-4 pb-4">
                {(rewardsContent[activeTab] || []).map((item, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                        <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-5xl">
                            {item.image}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">{item.detail}</p>
                            <button
                                className="mt-3 px-6 py-2 rounded-lg text-white text-sm font-medium no-underline"
                                style={{ backgroundColor: theme.primary }}
                            >
                                {item.action}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
