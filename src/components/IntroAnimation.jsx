import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * IntroAnimation Component
 * - Displays a series of greetings in multiple languages.
 * - Responsive font sizes for all devices.
 * - Uses Framer Motion for smooth entrance and exit animations.
 * - aria-live ensures accessibility for screen readers.
 */
const greetings = [
    "नमस्ते", "Hello", "નમસ્તે", "নমস্কার", "నమస్తే",
    "नमस्कार", "வணக்கம்", "السلام علیکم", "ನಮಸ್ಕಾರ",
    "നമസ്കാരം", "ନମସ୍କାର", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "নমস্কাৰ",
];

const IntroAnimation = ({ onFinish = () => { } }) => {
    const [index, setIndex] = useState(0);  // Current greeting index
    const [visible, setVisible] = useState(true);  // Show/hide animation

    // Cycle through greetings automatically
    useEffect(() => {
        if (index < greetings.length - 1) {
            const timeoutId = setTimeout(() => setIndex(prev => prev + 1), 180);
            return () => clearTimeout(timeoutId);
        }

        // Hide animation after last greeting
        const timeoutId = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(timeoutId);
    }, [index]);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
                    }}
                >
                    <motion.h1
                        key={index}
                        aria-live="polite" // Screen readers announce greetings
                        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center px-4 break-words"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.12 }}
                    >
                        {greetings[index]}
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;