const EFFECT_CONFIG = {
    TARGET_CLASS_SELECTOR: '.glassmorphism-interactive',
    CSS_VARIABLE_MOUSE_X: '--mouse-x',
    CSS_VARIABLE_MOUSE_Y: '--mouse-y',
    CENTER_POSITION_VALUE: '50%',
} as const;

/**
 * Initializes the interactive glassmorphism effect on elements matching the selector.
 * Targets elements with the `.glassmorphism-interactive` class.
 */
function initializeInteractiveGlassmorphism(): void {
    const glassmorphismElements = document.querySelectorAll<HTMLElement>(EFFECT_CONFIG.TARGET_CLASS_SELECTOR);

    glassmorphismElements.forEach((element) => {
        const updateMousePositionVariables = (event: MouseEvent): void => {
            const elementRect = element.getBoundingClientRect();
            const mouseXRelativePercentage = ((event.clientX - elementRect.left) / elementRect.width) * 100;
            const mouseYRelativePercentage = ((event.clientY - elementRect.top) / elementRect.height) * 100;

            element.style.setProperty(EFFECT_CONFIG.CSS_VARIABLE_MOUSE_X, `${mouseXRelativePercentage}%`);
            element.style.setProperty(EFFECT_CONFIG.CSS_VARIABLE_MOUSE_Y, `${mouseYRelativePercentage}%`);
        };

        const resetMousePositionVariables = (): void => {
            element.style.setProperty(EFFECT_CONFIG.CSS_VARIABLE_MOUSE_X, EFFECT_CONFIG.CENTER_POSITION_VALUE);
            element.style.setProperty(EFFECT_CONFIG.CSS_VARIABLE_MOUSE_Y, EFFECT_CONFIG.CENTER_POSITION_VALUE);
        };

        element.addEventListener('mousemove', updateMousePositionVariables);
        element.addEventListener('mouseleave', resetMousePositionVariables);
    });
}

// Ensure the effect is initialized when the DOM is ready or after Astro navigation swaps.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeInteractiveGlassmorphism);
} else {
    initializeInteractiveGlassmorphism();
}

document.addEventListener('astro:after-swap', initializeInteractiveGlassmorphism);
