import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const greetings = [
    "नमस्ते",
    "Hello",
    "નમસ્તે",
    "নমস্কার",
    "నమస్తే",
    "नमस्कार",
    "வணக்கம்",
    "السلام علیکم",
    "ನಮಸ್ಕಾರ",
    "നമസ്കാരം",
    "ନମସ୍କାର",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
    "নমস্কাৰ",
];

const IntroAnimation = ({ onFinish = () => { } }) => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const id = setTimeout(() => {
                setIndex(prev => prev + 1);
            }, 180);

            return () => clearTimeout(id);
        }

        const id = setTimeout(() => setVisible(false), 300);
        return () => clearTimeout(id);
    }, [index]);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white overflow-hidden"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.05,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                >
                    <motion.h1
                        key={index}
                        aria-live="polite"
                        className="text-5xl md:text-7xl lg:text-8xl font-bold"
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