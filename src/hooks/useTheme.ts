import { useState, useEffect } from 'react';

/**
 * Valid theme options for the application.
 */
type Theme = 'dark' | 'light';

/**
 * Hook to manage and persist the application's color theme (dark/light).
 * Handles synchronization between React state, LocalStorage, and the HTML data-theme attribute.
 * Uses a MutationObserver to react to theme changes made from outside this specific hook instance.
 * 
 * @returns An object containing:
 * - `theme`: The current theme string ('dark' or 'light').
 * - `toggleTheme`: A function to switch between 'dark' and 'light' modes.
 * 
 * @example
 * ```tsx
 * const { theme, toggleTheme } = useTheme();
 * return <button onClick={toggleTheme}>Switch to {theme === 'dark' ? 'light' : 'dark'}</button>;
 * ```
 */
export const useTheme = () => {
    /**
     * Initialize theme state.
     * Order of precedence:
     * 1. LocalStorage 'theme' key.
     * 2. Document element 'data-theme' attribute.
     * 3. System color preference.
     * 4. 'dark' (Default).
     */
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            // Direct LocalStorage check (Primary Source of Truth)
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
            }

            // Fallback to DOM attribute if storage is empty (e.g. system pref applied by inline script)
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'light' || currentTheme === 'dark') {
                return currentTheme;
            }

            // Final fallback to system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        }
        return 'dark'; // Default for SSR / Initial load
    });

    /**
     * Effect: Sync the document element's data-theme attribute whenever the state changes.
     */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.documentElement;
            if (root.getAttribute('data-theme') !== theme) {
                root.setAttribute('data-theme', theme);
            }
        }
    }, [theme]);

    /**
     * Effect: Setup MutationObserver to watch for changes to the 'data-theme' attribute.
     * This allows multiple instances of the hook to stay in sync.
     */
    useEffect(() => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') as Theme;
        if (currentTheme) {
            setThemeState(currentTheme);
        }

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const newTheme = html.getAttribute('data-theme') as Theme;
                    if (newTheme === 'light' || newTheme === 'dark') {
                        setThemeState(newTheme);
                    }
                }
            });
        });

        observer.observe(html, { attributes: true });
        return () => observer.disconnect();
    }, []);

    /**
     * Toggles the current theme and persists the choice to LocalStorage and the DOM.
     * The state update is handled by the MutationObserver configured in the mount effect.
     */
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return { theme, toggleTheme };
};
