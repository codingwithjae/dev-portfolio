import React from 'react';

interface IconProps {
    className?: string;
}

export const MoonIcon: React.FC<IconProps> = ({ className = "w-[10px] h-[10px]" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
);

export default MoonIcon;
