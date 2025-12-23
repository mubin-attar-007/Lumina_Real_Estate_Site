import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/config/constants';

const LegacySection: React.FC = () => {
    return (
        <section className="py-32 bg-white reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24 items-center">
                    <div className="lg:w-5/12">
                        <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-6 block flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-gold-500"></span> THE BRAND
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-10 leading-tight">
                            ARCHITECTS OF <span className="italic text-gray-400">ASPIRATION</span>
                        </h2>
                        <div className="space-y-8 text-gray-500 leading-loose text-sm font-light text-justify">
                            <p>At {BRAND.name}, we don't just build structures; we curate lifestyles. Since {BRAND.founded}, our mission has been to create spaces that resonate with the ambitions of modern India while staying rooted in timeless design principles.</p>
                            <p>With over {BRAND.stats.projects} completed landmarks and {BRAND.stats.sqft} sq.ft. developed, our footprint is a testament to trust, transparency, and technical superiority.</p>

                            <Link to="/about" className="inline-block border-b border-brand-900 text-brand-900 pb-1 text-xs font-bold uppercase tracking-luxury hover:text-gold-500 hover:border-gold-500 transition-all mt-4">
                                Discover Our Philosophy
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-7/12 relative">
                        <div className="absolute -top-12 -left-12 w-32 h-32 border border-gold-500/30 z-0"></div>
                        <div className="relative z-10 group">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" className="w-full bw-transition shadow-2xl" alt="Corporate Team" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 bg-brand-900 p-8 max-w-xs shadow-xl hidden md:block">
                            <p className="text-white font-serif italic text-lg leading-relaxed">"Excellence is not a skill, it is an attitude."</p>
                            <p className="text-gold-500 text-xs font-bold uppercase mt-4 tracking-widest">— Rajiv Malhotra, Chairman</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
