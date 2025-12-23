import React from 'react';
import { motion } from 'framer-motion';
import { BRAND } from '@/config/constants';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"
                    alt="Hero Building"
                    className="w-full h-full object-cover bw-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.5
                            }
                        }
                    }}
                    className="max-w-6xl"
                >
                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight"
                    >
                        {BRAND.name} <span className="text-gold-500 italic">&mdash;</span><br />
                        {BRAND.tagline}
                    </motion.h1>
                    <motion.div
                        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                        className="h-1 w-24 bg-gold-500 mb-8 origin-left"
                    ></motion.div>
                    <motion.p
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.8 } }}
                        className="text-white/80 text-lg font-light tracking-wide max-w-2xl"
                    >
                        Redefining luxury living with over {BRAND.founded ? new Date().getFullYear() - BRAND.founded : 38} years of excellence. Where architectural brilliance meets soulful living.
                    </motion.p>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                <span className="text-[10px] uppercase tracking-widest block mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-white/30 mx-auto"></div>
            </div>
        </section>
    );
};

export default Hero;
