'use client';

const merchantLogos = {
    Starbucks: { bg: '#00704A', text: '☕' },
    Amazon: { bg: '#FF9900', text: 'a' },
    Zara: { bg: '#000000', text: 'Z' },
    'Tim Hortons': { bg: '#C8102E', text: 'T' },
    'Virgin Trains': { bg: '#C80815', text: 'V' },
    Vue: { bg: '#19295C', text: 'V' },
    Default: { bg: '#6B7280', text: '£' },
};

export function TransactionItem({ merchant, location, amount, logo }) {
    const isCredit = amount > 0;
    const displayAmount = `${isCredit ? '+' : '-'}£${Math.abs(amount).toFixed(2)}`;
    const merchantLogo = merchantLogos[merchant] || merchantLogos.Default;

    return (
        <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: merchantLogo.bg }}
                >
                    {merchantLogo.text}
                </div>
                <div>
                    <p className="font-medium text-gray-900 text-sm">{merchant}</p>
                    <p className="text-xs text-gray-500">{location}</p>
                </div>
            </div>
            <span className={`font-semibold text-sm ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
                {displayAmount}
            </span>
        </div>
    );
}
