import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    animation?: "fade-up" | "fade-down" | "fade-right" | "fade-left" | "zoom-in" | "none";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.8,
    threshold = 0.2, // Trigger when 20% visible
    className = "",
    animation = "fade-up"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = (): { hidden: Variant; visible: Variant } => {
        switch (animation) {
            case "fade-up":
                return {
                    hidden: { opacity: 0, y: 30 }, // Subtle 30px shift
                    visible: { opacity: 1, y: 0 }
                };
            case "fade-down":
                return {
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 }
                };
            case "fade-right":
                return {
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 }
                };
            case "fade-left":
                return {
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 }
                };
            case "zoom-in":
                return {
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 }
                };
            case "none":
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                };
        }
    };

    const variants = getVariants();

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants as any}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} // "custom cubic-bezier" matching the smooth feel
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
