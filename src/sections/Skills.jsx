import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { DiNodejsSmall } from "react-icons/di";
import { FaJava, FaReact } from "react-icons/fa";
import {
    SiCplusplus,
    SiCss3,
    SiDocker,
    SiHtml5,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPython,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const SPEED = 1.2; // Controls marquee speed

const Skills = () => {
    const skills = [
        // Programming Languages
        { icon: <FaJava />, name: "Java" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },

        // Frontend
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss3 />, name: "CSS" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },

        // Backend
        { icon: <DiNodejsSmall />, name: "Node.js" },

        // Databases
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },

        // DevOps / Tools
        { icon: <SiDocker />, name: "Docker" },
    ];

    // Duplicate skills to enable seamless infinite scrolling
    const items = [...skills, ...skills];

    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const direction = useRef(1); // 1 → right, -1 → left

    /* ------------------------------------------------
       Detect scroll direction
       Scroll down  → move right
       Scroll up    → move left
    ------------------------------------------------ */
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            direction.current = currentY > lastScrollY ? 1 : -1;
            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* ------------------------------------------------
       Infinite marquee animation (no blink)
    ------------------------------------------------ */
    useAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const halfWidth = container.scrollWidth / 2;
        let nextX = x.get() + direction.current * SPEED;

        // Seamless wrap-around logic
        if (nextX <= -halfWidth) nextX += halfWidth;
        if (nextX > 0) nextX -= halfWidth;

        x.set(nextX);
    });

    return (
        <section
            id="skills"
            className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-0 w-[300px] h-[400px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
            </div>

            {/* Heading */}
            <motion.h2
                className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                My Skills
            </motion.h2>

            <motion.p
                className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Modern Applications | Modern Technologies
            </motion.p>

            {/* Marquee */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    ref={containerRef}
                    style={{ x }}
                    className="flex gap-10 text-6xl text-[#1cd8d2] will-change-transform"
                >
                    {items.map(({ icon, name }, i) => (
                        <div
                            key={`${name}-${i}`}
                            className="mt-2 flex flex-col items-center gap-2 min-w-[120px]"
                            aria-label={name}
                        >
                            <span className="hover:scale-125 transition-transform duration-300">
                                {icon}
                            </span>
                            <p className="text-sm">{name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;