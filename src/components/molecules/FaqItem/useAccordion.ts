import { useState, useCallback } from 'react';

/**
 * A simple, lightweight hook to manage the state of a togglable UI element (accordion, dropdown, modal).
 * Provides memoized handlers for opening, closing, and toggling state.
 * 
 * @param initialState - The initial open/closed state. Defaults to `false`.
 * @returns An object containing:
 * - `isOpen`: Current boolean state.
 * - `toggle`: Memoized function to flip the state.
 * - `open`: Memoized function to explicitly set state to true.
 * - `close`: Memoized function to explicitly set state to false.
 * 
 * @example
 * ```tsx
 * const { isOpen, toggle } = useAccordion();
 * 
 * return (
 *   <div>
 *     <button onClick={toggle}>Expand Section</button>
 *     {isOpen && <p>Visible Content</p>}
 *   </div>
 * );
 * ```
 */
export const useAccordion = (initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return { isOpen, toggle, open, close };
};
