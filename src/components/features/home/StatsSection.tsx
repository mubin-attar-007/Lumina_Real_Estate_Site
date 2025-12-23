import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Building, CheckCircle, Map, Smile } from 'lucide-react';
import { BRAND } from '@/config/constants';

const StatsSection: React.FC = () => {
    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <h2 className="text-[18vw] md:text-[12vw] font-bold text-stroke-light leading-none select-none opacity-10 md:opacity-40 whitespace-nowrap font-serif text-gray-200 uppercase tracking-tighter">
                    Lumina Life
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-block border border-brand-900/10 bg-white/80 backdrop-blur px-10 py-4 text-xl font-serif italic text-brand-900 shadow-sm">
                        Numbers that define our journey
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                    {[
                        { num: BRAND.stats.years, label: "Years of Excellence", icon: <Clock size={24} className="mb-2" /> },
                        { num: BRAND.stats.sqft, label: "Sq.Ft Developed", icon: <Building size={24} className="mb-2" /> },
                        { num: BRAND.stats.projects, label: "Landmarks Created", icon: <CheckCircle size={24} className="mb-2" /> },
                        { num: "8+", label: "Integrated Townships", icon: <Map size={24} className="mb-2" /> },
                        { num: BRAND.stats.families, label: "Happy Families", icon: <Smile size={24} className="mb-2" /> }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-48 h-48 clip-hexagon bg-white flex flex-col items-center justify-center text-brand-900 transition-all duration-500 group-hover:bg-brand-900 group-hover:text-white shadow-xl group-hover:-translate-y-2 relative overflow-hidden z-20">
                                <div className="absolute inset-1 border border-gray-100 clip-hexagon group-hover:border-white/20"></div>
                                <div className="z-10 flex flex-col items-center">
                                    <div className="text-gold-500 group-hover:text-gold-400 transition-colors">{stat.icon}</div>
                                    <span className="text-4xl font-serif font-bold mb-2">{stat.num}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{stat.label}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
