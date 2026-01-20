import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// Inline SVG icons to avoid Font Awesome dependency
const SunIcon = () => (
    <svg className="w-[10px] h-[10px]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
);

const MoonIcon = () => (
    <svg className="w-[10px] h-[10px]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

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
