import React from 'react';
import { VERTICALS_DATA } from '@/config/constants';

const VerticalsSection: React.FC = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">VERTICALS</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-900">Beyond Real Estate</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-0 border border-gray-200 shadow-2xl">
                    {VERTICALS_DATA.map((biz, index) => (
                        <div key={index} className="bg-white p-12 md:p-16 group relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 min-h-[400px]">
                            {/* Background Image - Now Visible by Default */}
                            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                                <img src={biz.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt={biz.title} />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-white/95 via-white/90 to-white/85 group-hover:from-white/90 group-hover:via-white/85 group-hover:to-white/80 transition-all duration-700"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6 group-hover:text-gold-600 transition-colors">{biz.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm mb-8 font-light">{biz.description}</p>
                                <button className="text-xs font-bold uppercase tracking-widest text-brand-900 border-b-2 border-brand-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300">Know More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VerticalsSection;
