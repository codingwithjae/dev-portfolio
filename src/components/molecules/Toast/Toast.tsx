import React from 'react';
import { useToast } from './useToast';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast: React.FC = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <motion.div
                        key={toast.id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.9 }}
                        className={`pointer-events-auto px-6 py-4 rounded-xl border border-border-base shadow-2xl flex items-center gap-4 min-w-[20rem] backdrop-blur-md ${toast.type === 'success'
                            ? 'bg-gradient-to-r from-accent/20 to-accent/5'
                            : 'bg-gradient-to-r from-red-500/20 to-red-500/5'
                            }`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${toast.type === 'success' ? 'bg-accent text-primary' : 'bg-red-500 text-white'}`}>
                            {/* Check / Exclamation icons - inline SVGs */}
                            {toast.type === 'success' ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                            )}
                        </div>

                        <div className="flex-1">
                            <p className="font-display font-bold text-text-base">{toast.type === 'success' ? 'Success!' : 'Error'}</p>
                            <p className="font-sans text-sm text-text-muted">{toast.message}</p>
                        </div>

                        <button onClick={() => removeToast(toast.id)} className="text-text-muted hover:text-text-base transition-colors">
                            {/* Close icon - inline SVG */}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;
