import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-scale')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block border border-gold-500"
            style={{
                boxShadow: '0 0 10px rgba(197, 160, 89, 0.3)'
            }}
            animate={{
                x: mousePosition.x - (isHovered ? 24 : 6),
                y: mousePosition.y - (isHovered ? 24 : 6),
                width: isHovered ? 48 : 12,
                height: isHovered ? 48 : 12,
                backgroundColor: isHovered ? 'rgba(197, 160, 89, 0.1)' : 'rgba(197, 160, 89, 0.8)',
            }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 20
            }}
        />
    );
};

export default CustomCursor;
