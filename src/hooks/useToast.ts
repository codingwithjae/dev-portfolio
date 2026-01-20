import { useState, useEffect, useCallback } from 'react';

/**
 * Valid notification types.
 */
type ToastType = 'success' | 'error';

/**
 * Interface representing a single toast message in the stack.
 */
interface ToastMessage {
    /** Unique timestamp-based ID for list rendering and removal */
    id: number;
    /** The message text to display */
    message: string;
    /** Semantic type of the toast (determines styling) */
    type: ToastType;
}

/**
 * Custom hook to manage a global-ready toast notification system.
 * Uses a combination of React state for rendering and DOM CustomEvents for global triggering.
 * This allows any component (even non-React ones or those high up the tree) to trigger toasts without prop drilling.
 * 
 * @returns An object containing:
 * - `toasts`: Array of active ToastMessage objects.
 * - `removeToast`: Function to manually remove a toast by its ID.
 * - `notify`: Function to trigger a new toast from within any component using the hook.
 * 
 * @example
 * ```tsx
 * const { notify } = useToast();
 * 
 * const onSave = () => {
 *   try {
 *     saveData();
 *     notify("Data saved!", "success");
 *   } catch (e) {
 *     notify("Save failed", "error");
 *   }
 * };
 * ```
 */
export const useToast = () => {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    /**
     * Removes a toast from the state by ID.
     */
    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    /**
     * Internal helper to create a toast and schedule its removal.
     * @param message - Text to show.
     * @param type - 'success' or 'error'.
     */
    const showToast = useCallback((message: string, type: ToastType = 'success') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }, [removeToast]);

    /**
     * Effect: Setup global accessibility.
     * 1. Attaches a helper to `window` for emergency external access (e.g. from static scripts).
     * 2. Listens for the 'toast-trigger' CustomEvent to add new toasts to the local state.
     */
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Optional: Expose to window for edge cases
            (window as any).showToast = (message: string, type: ToastType) => {
                const event = new CustomEvent('toast-trigger', {
                    detail: { message, type }
                });
                window.dispatchEvent(event);
            };
        }

        const handleToastEvent = (e: CustomEvent) => {
            const { message, type } = e.detail;
            showToast(message, type);
        };

        window.addEventListener('toast-trigger', handleToastEvent as EventListener);
        return () => {
            window.removeEventListener('toast-trigger', handleToastEvent as EventListener);
        };
    }, [showToast]);

    /**
     * Dispatches a global event to trigger the toast listener.
     * This is the preferred way to trigger notifications from within the React app.
     */
    const notify = useCallback((message: string, type: ToastType) => {
        const event = new CustomEvent('toast-trigger', {
            detail: { message, type }
        });
        window.dispatchEvent(event);
    }, []);

    return { toasts, removeToast, notify };
};
