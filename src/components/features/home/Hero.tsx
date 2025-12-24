import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax logic
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    const slides = [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-900 text-white">

            {/* 1. SLIDESHOW BACKGROUND (Ken Burns Effect) */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-[2]"></div> {/* Overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-[2]"></div>

                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentSlide}
                        src={slides[currentSlide]}
                        alt="Hero Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }} // Smooth crossfade
                        className="absolute inset-0 w-full h-full object-cover z-[1]"
                    />
                </AnimatePresence>
            </motion.div>

            {/* 2. CONTENT LAYER */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col justify-end items-start text-left px-6 md:px-12 pb-32 md:pb-40"
            >

                {/* Subheading / Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8 overflow-hidden"
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-gold-500 border-l-2 border-gold-500 pl-4">
                        Est. 1985 — Global Development
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-7xl font-serif font-medium tracking-tight leading-[1.05] mb-8 max-w-4xl text-white drop-shadow-2xl"
                >
                    Crafting skylines, <br />
                    <span className="italic font-light text-white/90">creating legacies.</span>
                </motion.h1>

                {/* Description - Hiding on mobile to save space, visible on large screens */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hidden md:block max-w-lg text-sm md:text-base font-light text-white/80 leading-relaxed border-l border-white/20 pl-6 drop-shadow-md"
                >
                    <p>
                        SAQ Associates engineers the world's most prestigious residential and commercial properties, redefining the standard of luxury living.
                    </p>
                </motion.div>

            </motion.div>

            {/* 3. SCROLL INDICATOR */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} className="text-white" />
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Hero;
