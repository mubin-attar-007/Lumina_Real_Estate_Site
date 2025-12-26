import React from 'react';
import { VERTICALS_DATA } from '@/config/constants';

const VerticalsSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-brand-900 relative">
            <div className="container mx-auto px-6">
                <div className="mb-12 md:mb-20 text-center">
                    <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">VERTICALS</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Beyond Real Estate</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border border-gold-500/20 shadow-2xl">
                    {VERTICALS_DATA.map((biz, index) => (
                        <div key={index} className="bg-brand-950/50 p-8 md:p-16 group relative overflow-hidden boundary-row border-b md:border-b-0 md:border-r border-gold-500/10 min-h-[300px] md:min-h-[400px]">
                            {/* Background Image - Strikingly Visible */}
                            <div className="absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                                <img src={biz.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt={biz.title} />
                            </div>

                            {/* Gradient Overlay - Reduced for better visibility */}
                            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-brand-900/80 via-brand-900/40 to-transparent group-hover:from-brand-900/70 group-hover:via-brand-900/30 group-hover:to-transparent transition-all duration-700"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-gold-500 transition-colors">{biz.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm mb-8 font-light">{biz.description}</p>
                                <button className="text-xs font-bold uppercase tracking-widest text-white border-b-2 border-white/30 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300">Know More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VerticalsSection;
