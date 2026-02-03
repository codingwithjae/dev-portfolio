const CONFIG = {
    SELECTOR: '.glassmorphism',
    MOUSE_X: '--mouse-x',
    MOUSE_Y: '--mouse-y',
    DEFAULT: '50%',
} as const;

function initGlassmorphismEffect(): void {
    const elements = document.querySelectorAll<HTMLElement>(CONFIG.SELECTOR);

    elements.forEach((el) => {
        const handleMove = (e: MouseEvent): void => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            el.style.setProperty(CONFIG.MOUSE_X, `${x}%`);
            el.style.setProperty(CONFIG.MOUSE_Y, `${y}%`);
        };

        const handleLeave = (): void => {
            el.style.setProperty(CONFIG.MOUSE_X, CONFIG.DEFAULT);
            el.style.setProperty(CONFIG.MOUSE_Y, CONFIG.DEFAULT);
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlassmorphismEffect);
} else {
    initGlassmorphismEffect();
}

document.addEventListener('astro:after-swap', initGlassmorphismEffect);
