import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the state and logic for an infinite vertical ticker animation.
 * Ideal for displaying a rotating list of items (like a "Currently Learning" section).
 * Handles automatic timing, hover-pausing, and seamless infinite looping.
 * 
 * @param itemCount - The total number of items in the list, including the clone at the end for the loop effect.
 * @param intervalMs - The duration in milliseconds each item stays visible before transitioning. Defaults to 2400ms.
 * 
 * @returns An object containing:
 * - `currentIndex`: The integer representing the currently active item.
 * - `isHovering`: A boolean indicating if the mouse is over the ticker (used to pause animation).
 * - `setIsHovering`: Function to manually toggle the hovering state.
 * - `isTransitioning`: Boolean to control CSS transition class (false when snapping back to start).
 * 
 * @example
 * ```tsx
 * const { currentIndex, isHovering, setIsHovering, isTransitioning } = useSkillTicker(skills.length + 1, 3000);
 * 
 * return (
 *   <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
 *     <ul style={{ 
 *       transform: `translateY(-${currentIndex * 100}%)`,
 *       transition: isTransitioning ? 'transform 0.5s ease' : 'none'
 *     }}>
 *       {items.map(...) }
 *     </ul>
 *   </div>
 * );
 * ```
 */
export const useSkillTicker = (itemCount: number, intervalMs: number = 2400) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    /**
     * Effect: Advances the ticker at the specified interval.
     * Pauses if the user is hovering or if there isn't enough content to scroll.
     */
    useEffect(() => {
        if (isHovering || itemCount <= 1) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + 1);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [isHovering, itemCount, intervalMs]);

    /**
     * Effect: Handles the infinite loop "snap-back".
     * When reaching the final item (the clone portion), it disables transition 
     * and instantly jumps back to index 0 to create a seamless loop.
     */
    useEffect(() => {
        if (currentIndex === itemCount - 1) {
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500); // Wait for the current slide's transition to finish before snapping
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, itemCount]);

    return {
        currentIndex,
        isHovering,
        setIsHovering,
        isTransitioning
    };
};
