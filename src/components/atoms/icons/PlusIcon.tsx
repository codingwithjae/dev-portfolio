import React from 'react';

interface IconProps {
    className?: string;
}

export const PlusIcon: React.FC<IconProps> = ({ className = "w-3 h-3" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export default PlusIcon;
