import React from 'react';
import { useTheme } from './useTheme';
import { SunIcon, MoonIcon } from '../icons';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by only rendering after mount
    if (!mounted) {
        return <div className="w-12 h-6 rounded-full bg-secondary border border-border-base opacity-0"></div>;
    }

    return (
        <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`relative w-12 h-6 rounded-full bg-secondary border border-border-base cursor-pointer outline-none transition-colors duration-300 hover:border-accent`}
            aria-label="Toggle Theme"
        >
            <div
                id="theme-toggle-dot"
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center overflow-hidden shadow-[0_0_10px_rgba(214,234,46,0.5)] ${theme === 'light' ? 'translate-x-6 rotate-180 bg-text-base shadow-none' : 'translate-x-0 rotate-0'}`}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    <span
                        className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100 rotate-0 text-primary' : 'opacity-0 scale-50 rotate-90 text-text-base'}`}
                    >
                        <SunIcon />
                    </span>
                    <span
                        className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 scale-100 rotate-0 text-primary' : 'opacity-0 scale-50 -rotate-90 text-primary'}`}
                    >
                        <MoonIcon />
                    </span>
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
