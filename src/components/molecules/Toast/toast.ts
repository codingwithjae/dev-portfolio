/**
 * @file toast.ts
 * @description Lightweight utility to trigger toast notifications using custom DOM events.
 * This allows both React and Astro components to trigger notifications that are handled 
 * by the global vanilla Toast component.
 */

export type ToastType = 'success' | 'error';

export interface ToastEventDetail {
    message: string;
    type: ToastType;
}

/**
 * Dispatches a custom 'toast-notify' event to the window object.
 * 
 * @param message The message to display in the toast.
 * @param type The type of toast ('success' or 'error').
 */
export const toast = (message: string, type: ToastType = 'success') => {
    const event = new CustomEvent<ToastEventDetail>('toast-notify', {
        detail: { message, type }
    });
    window.dispatchEvent(event);
};

// Global polyfill for convenience if needed in non-module scripts
if (typeof window !== 'undefined') {
    (window as any).triggerToast = toast;
}
