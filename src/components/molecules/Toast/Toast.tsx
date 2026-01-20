import React from 'react';
import { useToast } from './useToast';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, ExclamationIcon, CloseIcon } from '../../atoms/icons';

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
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${toast.type === 'success' ? 'bg-accent text-primary' : 'bg-red-500 text-white'
                            }`}>
                            {toast.type === 'success' ? <CheckIcon /> : <ExclamationIcon />}
                        </div>

                        <div className="flex-1">
                            <p className="font-display font-bold text-text-base">{toast.type === 'success' ? 'Success!' : 'Error'}</p>
                            <p className="font-sans text-sm text-text-muted">{toast.message}</p>
                        </div>

                        <button
                            onClick={() => removeToast(toast.id)}
                            className="text-text-muted hover:text-text-base transition-colors"
                        >
                            <CloseIcon />
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default Toast;
