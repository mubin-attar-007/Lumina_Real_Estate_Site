import React from 'react';
import { Clock, Building, CheckCircle, Map, Smile } from 'lucide-react';
import { BRAND } from '@/config/constants';
import ScrollReveal from '@/components/common/ScrollReveal';

const StatsSection: React.FC = () => {
    return (
        <section className="py-32 bg-brand-900 relative overflow-hidden">
            {/* Dark Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-brand-900/80 to-brand-900/95"></div>
            </div>

            {/* Decorative Honeycomb Pattern Overlay - Increased from 5% to 10% */}
            <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="honeycomb" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                            <path d="M25 0L50 14.5L50 43.5L25 58L0 43.5L0 14.5Z" fill="none" stroke="#c5a059" strokeWidth="0.5" />
                            <path d="M75 0L100 14.5L100 43.5L75 58L50 43.5L50 14.5Z" fill="none" stroke="#c5a059" strokeWidth="0.5" />
                            <path d="M25 58L50 72.5L50 101.5L25 116L0 101.5L0 72.5Z" fill="none" stroke="#c5a059" strokeWidth="0.5" />
                            <path d="M75 58L100 72.5L100 101.5L75 116L50 101.5L50 72.5Z" fill="none" stroke="#c5a059" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#honeycomb)" />
                </svg>
            </div>

            {/* Large Background Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <h2 className="text-[18vw] md:text-[14vw] font-bold leading-none select-none opacity-5 whitespace-nowrap font-serif text-white uppercase tracking-tighter">
                    Lumina Life
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 relative">
                    {/* Hexagonal Badge Container */}
                    <ScrollReveal animation="fade-down">
                        <div className="inline-flex items-center justify-center relative">
                            {/* Bright Glowing Hexagon for High Contrast on Dark Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-gold-50 to-gold-100 border-2 border-gold-400 clip-hexagon scale-110 shadow-[0_0_50px_rgba(197,160,89,0.6)]"></div>

                            {/* Content with Dark Text for Maximum Contrast */}
                            <div className="relative px-12 py-6 text-xl font-serif italic text-brand-900 z-10">
                                Numbers that define our journey
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="relative flex justify-center py-24">
                    {/* Responsive Grid Layout for Hexagons */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {[
                            { num: BRAND.stats.years, label: "Years of Excellence", icon: <Clock size={24} /> },
                            { num: BRAND.stats.sqft, label: "Sq.Ft Developed", icon: <Building size={24} /> },
                            { num: BRAND.stats.projects, label: "Landmarks Created", icon: <CheckCircle size={24} /> },
                            { num: "8+", label: "Townships", icon: <Map size={24} /> },
                            { num: BRAND.stats.families, label: "Happy Families", icon: <Smile size={24} /> },
                        ].map((stat, i) => (
                            <ScrollReveal
                                key={i}
                                animation="zoom-in"
                                delay={i * 0.1}
                                className="group cursor-pointer w-40 h-44 md:w-48 md:h-52 mx-auto"
                            >
                                {/* Hexagon Shape */}
                                <div className="relative w-full h-full bg-gradient-to-br from-brand-950 via-brand-900 to-black clip-hexagon border-[0.5px] border-gold-500/40 group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-500 shadow-2xl">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-80 mix-blend-overlay clip-hexagon"></div>

                                    {/* Content Container */}
                                    <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                                        <div className="mb-3 p-2.5 rounded-full border border-gold-500/30 bg-brand-800/40 text-gold-500 group-hover:bg-gold-500 group-hover:text-brand-900 transition-all duration-500">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 tracking-tight">
                                            {stat.num}
                                        </div>
                                        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold-500 font-bold leading-tight">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
