import { useEffect, useRef } from "react";

const BASE_SIZE = 80; // Default cursor diameter

/**
 * CustomCursor Component
 * - Smooth lagging cursor using requestAnimationFrame
 * - Mobile and touch devices disabled for usability
 * - Respects prefers-reduced-motion for accessibility
 */
const CustomCursor = () => {
    const cursorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const position = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);

    useEffect(() => {
        // Disable on touch devices or reduced motion
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (isTouchDevice || prefersReducedMotion) return;

        // Track mouse position
        const onMouseMove = e => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        // Smooth animation using linear interpolation (lerp)
        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.15;
            position.current.y += (mouse.current.y - position.current.y) * 0.15;

            if (cursorRef.current) {
                const size = window.innerWidth < 640 ? BASE_SIZE / 2 : BASE_SIZE; // Responsive size
                cursorRef.current.style.width = `${size}px`;
                cursorRef.current.style.height = `${size}px`;
                cursorRef.current.style.transform = `translate3d(${position.current.x - size / 2}px, ${position.current.y - size / 2}px, 0)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform">
            <div className="w-full h-full rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-2xl opacity-80" />
        </div>
    );
};

export default CustomCursor;