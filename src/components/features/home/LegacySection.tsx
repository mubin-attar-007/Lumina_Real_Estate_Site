import React from 'react';
import ScrollReveal from '@/components/common/ScrollReveal';

const LegacySection: React.FC = () => {
    return (
        <section className="bg-gray-50 text-brand-900 py-24 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-brand-900/10 pb-12">
                    <ScrollReveal>
                        <span className="block text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            The Track Record
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif">
                            Proven Results
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className="mt-8 md:mt-0 max-w-md text-gray-600 font-light text-lg">
                        <p>
                            We don't just list homes; we curate markets. Our numbers tell the story of dedication, precision, and unrivaled expertise.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Stats Grid - Light Theme */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">

                    <ScrollReveal delay={0.1} className="border-l border-brand-900/10 pl-8">
                        <div className="text-6xl md:text-8xl font-serif text-brand-900 mb-2">15M+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-gold-600">Sq. Ft. Developed</div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} className="border-l border-brand-900/10 pl-8">
                        <div className="text-6xl md:text-8xl font-serif text-brand-900 mb-2">45k+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-gold-600">Happy Families</div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3} className="border-l border-brand-900/10 pl-8">
                        <div className="text-6xl md:text-8xl font-serif text-brand-900 mb-2">60+</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-gold-600">Landmark Projects</div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
};

export default LegacySection;
