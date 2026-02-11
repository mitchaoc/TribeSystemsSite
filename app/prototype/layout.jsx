import { ThemeProvider } from './components/ThemeProvider';
import { BottomNav } from './components/BottomNav';
import { ThemeToggle } from './components/ThemeToggle';

export const metadata = {
    title: 'Tribe App Prototype',
    description: 'Clickable prototype for the Tribe x Veloce consumer banking app',
};

export default function PrototypeLayout({ children }) {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-gray-100 flex items-start justify-center">
                {/* Mobile frame wrapper */}
                <div className="relative w-full max-w-[430px] min-h-screen bg-white shadow-2xl overflow-hidden">
                    <ThemeToggle />
                    <div className="pb-20">
                        {children}
                    </div>
                    <BottomNav />
                </div>
            </div>
        </ThemeProvider>
    );
}
