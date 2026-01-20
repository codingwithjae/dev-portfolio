/**
 * @file FaqItem.tsx
 * @description An accessible accordion component for FAQ sections.
 */

import React, { useId } from 'react';
import { useAccordion } from './useAccordion';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon, MinusIcon } from '../../atoms/icons';

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
                <span
                    className="w-[2.1875rem] h-[2.1875rem] flex items-center justify-center rounded-full border border-border-base bg-primary transition-colors duration-300 flex-shrink-0"
                    aria-hidden="true"
                >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
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
