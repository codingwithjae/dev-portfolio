import React from 'react';

interface IconProps {
    className?: string;
}

export const MinusIcon: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
);

export default MinusIcon;
