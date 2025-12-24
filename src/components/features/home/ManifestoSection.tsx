import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/common/ScrollReveal';

const ManifestoSection: React.FC = () => {
    return (
        <section className="bg-gray-50 py-24 md:py-40">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                    {/* Left Column: Portrait/Image */}
                    <ScrollReveal animation="fade-right" duration={0.8} className="w-full md:w-5/12">
                        <div className="relative aspect-[3/4] overflow-hidden group">
                            <div className="absolute inset-0 border border-gold-500/20 translate-x-4 translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                                alt="Founder"
                                className="relative z-10 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                            />
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Editorial Text (Builder Context) */}
                    <div className="w-full md:w-7/12">
                        <ScrollReveal animation="fade-up" delay={0.2} duration={0.8}>
                            <span className="block text-xs font-bold uppercase tracking-[0.3em] text-gold-600 mb-8">
                                The Vision
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-900 leading-[1.1] mb-12">
                                Building the future of <span className="italic text-gray-400">luxury living.</span>
                            </h2>
                            <div className="space-y-8 text-lg font-light text-gray-600 leading-relaxed max-w-xl">
                                <p>
                                    SAQ Associates is not just a name; it is a promise of permanence. For over three decades, we have been the silent architects behind the city's most iconic skylines, mastering the balance between structural integrity and aesthetic perfection.
                                </p>
                                <p>
                                    We don't just develop properties; we engineer ecosystems. From the foundation to the final finish, every project is a testament to our relentless pursuit of construction excellence and innovation.
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-8">
                                <Link to="/about" className="text-xs font-bold uppercase tracking-widest border-b border-brand-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-all">
                                    Our Story
                                </Link>
                                <img src="/signature.png" alt="" className="h-12 opacity-50 hidden" />
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ManifestoSection;
