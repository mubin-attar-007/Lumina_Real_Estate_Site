import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost' | 'gold';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PremiumButton: React.FC<PremiumButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    className = '',
    onClick,
    ...props
}) => {

    const baseClasses = "relative overflow-hidden font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-brand-900 text-white hover:bg-gold-500 border border-brand-900 hover:border-gold-500",
        gold: "bg-gold-500 text-brand-900 hover:bg-brand-900 hover:text-white border border-gold-500 hover:border-brand-900",
        outline: "bg-transparent border border-current hover:bg-gold-500 hover:border-gold-500 hover:text-white",
        ghost: "bg-transparent text-current hover:text-gold-500",
    };

    const sizes = {
        sm: "text-[10px] px-6 py-2",
        md: "text-xs px-8 py-3",
        lg: "text-sm px-10 py-4",
    };

    return (
        <motion.button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            {...props}
        >
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
                {icon && iconPosition === 'left' && (
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: -3 }}
                        transition={{ duration: 0.2 }}
                    >
                        {icon}
                    </motion.span>
                )}

                {children}

                {icon && iconPosition === 'right' && (
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                    >
                        {icon}
                    </motion.span>
                )}
            </span>

            {/* Shine Effect Overlay */}
            <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
        </motion.button>
    );
};

export default PremiumButton;
