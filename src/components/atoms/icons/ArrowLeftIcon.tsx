import React from 'react';

interface IconProps {
    className?: string;
}

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export default ArrowLeftIcon;
