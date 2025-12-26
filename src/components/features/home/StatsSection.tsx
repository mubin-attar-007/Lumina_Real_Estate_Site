import React from 'react';
import { BRAND } from '@/config/constants';
import ScrollReveal from '@/components/common/ScrollReveal';

const StatsSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-brand-950 relative overflow-hidden group">
            {/* Dark Background Image - Enhanced Visibility & Interaction */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-[1]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/80 to-brand-950 z-[2]"></div>
            </div>

            {/* Large Background Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <h2 className="text-[20vw] md:text-[15vw] font-bold leading-none select-none opacity-[0.03] whitespace-nowrap font-serif text-white uppercase tracking-tighter">
                    Legacy
                </h2>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 relative">
                    <ScrollReveal animation="fade-down">
                        <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Numbers that define <span className="italic text-gold-500">Excellence</span>
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="relative flex justify-center">
                    {/* Simplified, Elegant Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 max-w-6xl mx-auto">
                        {[
                            { num: BRAND.stats.years.replace('+', ''), label: "Years of Excellence", suffix: "+" },
                            { num: BRAND.stats.sqft.replace('+', ''), label: "Sq.Ft Developed", suffix: "+" },
                            { num: BRAND.stats.projects.replace('+', ''), label: "Landmarks Created", suffix: "+" },
                            { num: BRAND.stats.families.replace('+', '').replace(',', ''), label: "Happy Families", suffix: "+" },
                        ].map((stat, i) => (
                            <ScrollReveal
                                key={i}
                                animation="fade-up"
                                delay={i * 0.1}
                                className="group flex flex-col items-center justify-center text-center"
                            >
                                <div className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-4 group-hover:scale-110 transition-transform duration-700 ease-out">
                                    {stat.num}<span className="text-4xl md:text-5xl align-top text-gold-600 ml-1">{stat.suffix || '+'}</span>
                                </div>
                                <div className="h-px w-12 bg-gray-800 mb-4 group-hover:w-24 group-hover:bg-gold-500 transition-all duration-500"></div>
                                <div className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-200 font-medium group-hover:text-white transition-colors">
                                    {stat.label}
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
