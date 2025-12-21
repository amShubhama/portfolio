import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/img2.jpg";
import { FiMenu } from "react-icons/fi";

/**
 * Navbar Component
 * - Transparent by default (matches your original style)
 * - Responsive for all screen sizes
 * - Scroll behavior: hides on scroll down, shows on scroll up
 * - Hamburger menu for mobile screens
 */
const Navbar = ({ brandName = "Shubham" }) => {
    const [menuOpen, setMenuOpen] = useState(false); // Overlay menu state
    const [visible, setVisible] = useState(true); // Navbar show/hide

    const lastScrollY = useRef(0); // Track last scroll position
    const isInHome = useRef(true); // Track if user is at #home section

    // 🔹 Observe home section
    useEffect(() => {
        const homeSection = document.querySelector("#home");
        if (!homeSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isInHome.current = entry.isIntersecting;
                if (entry.isIntersecting) setVisible(true); // Keep navbar visible in home section
            },
            { threshold: 0.1 }
        );

        observer.observe(homeSection);
        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    // 🔹 Show/hide navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isInHome.current) return; // Don't hide in home section

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) setVisible(false); // scrolling down → hide
            else setVisible(true); // scrolling up → show

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between
        transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src={Logo}
                        alt={`${brandName} logo`}
                        className="w-8 h-8"
                    />
                    <span className="hidden sm:block text-2xl font-bold text-white">
                        {brandName}
                    </span>
                </div>

                <div className="flex gap-3 justify-center items-center">
                    {/* Desktop CTA */}
                    <div className="hidden lg:block">
                        <a
                            href="#contact"
                            className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity"
                        >
                            Reach Out
                        </a>
                    </div>

                    {/* Hamburger menu */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        className="text-white text-4xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded cursor-pointer"
                    >
                        <FiMenu />
                    </button>
                </div>
            </nav>

            {/* Overlay menu */}
            <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Navbar;