import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/config/constants';

const PageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 mb-2">
                    {BRAND.name}
                </h1>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em]">Esthetics • Ethics • Engineering</p>

                {/* Loader Line */}
                <div className="w-48 h-[1px] bg-gray-800 mt-8 mx-auto overflow-hidden relative">
                    <motion.div
                        className="absolute inset-0 bg-gold-500"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default PageLoader;
