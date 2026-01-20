/**
 * @file FaqItem.tsx
 * @description Accordion component with co-located useAccordion hook.
 */

import React, { useId, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Hook (non-reusable, co-located) ---
const useAccordion = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
    return { isOpen, toggle, setIsOpen };
};

// --- Component ---
interface FaqItemProps {
    question: string;
    answer: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const { isOpen, toggle } = useAccordion();
    const id = useId();
    const panelId = `faq-panel-${id}`;
    const triggerId = `faq-trigger-${id}`;

    return (
        <div className="faq-item group py-[0.9375rem] mx-[0.9375rem] border-b border-border-base transition-colors duration-300">
            <button
                id={triggerId}
                onClick={toggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="faq-trigger w-full font-bold cursor-pointer flex items-center justify-between text-[18px] text-left text-text-base font-display outline-none select-none bg-transparent border-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
                {question}
                <span className="w-[2.1875rem] h-[2.1875rem] flex items-center justify-center rounded-full border border-border-base bg-primary transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                    {/* Plus/Minus icons - inline SVGs */}
                    {isOpen ? (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    ) : (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    )}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-[0.9375rem] pb-[0.625rem]">
                            <p className="leading-[1.5625rem] text-text-muted text-left text-[18px] font-display transition-colors">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FaqItem;
