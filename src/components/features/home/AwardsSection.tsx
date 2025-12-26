import React from 'react';
import { Award, CheckCircle, Star, Shield, Zap, Leaf } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const AwardsSection: React.FC = () => {
    const awards = [
        { title: "IGBC Platinum", subtitle: "Sustainability Rating", icon: <Leaf size={24} /> },
        { title: "ISO 9001:2015", subtitle: "Quality Certified", icon: <CheckCircle size={24} /> },
        { title: "MahaRERA", subtitle: "Registered Developer", icon: <Shield size={24} /> },
        { title: "CREDAI Member", subtitle: "Official Member", icon: <Star size={24} /> },
        { title: "Best Developer", subtitle: "Luxury Segment 2024", icon: <Award size={24} /> },
        { title: "Safety Award", subtitle: "National Safety Council", icon: <Zap size={24} /> },
    ];

    return (
        <section className="py-16 md:py-32 bg-gray-50 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <ScrollReveal animation="fade-down" width="100%">
                        <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Recognition
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-900">
                            A Legacy of <span className="italic text-gray-400">Awards</span>
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
                    {awards.map((award, i) => (
                        <ScrollReveal
                            key={i}
                            animation="fade-up"
                            delay={i * 0.1}
                            className="h-full"
                            width="100%"
                        >
                            <div className="h-full group relative p-8 md:p-10 bg-brand-900 border border-brand-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center rounded-sm overflow-hidden">
                                {/* Gradient Border Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/0 via-gold-500/0 to-gold-400/0 group-hover:from-gold-600/10 group-hover:via-gold-500/5 group-hover:to-gold-400/10 transition-all duration-700"></div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                                    <div className="mb-6 p-4 rounded-full bg-brand-950/50 border border-brand-800 group-hover:border-gold-500/50 text-gold-500/80 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-500">
                                        {award.icon}
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center w-full">
                                        <h4 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-200 transition-colors">
                                            {award.title}
                                        </h4>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-medium leading-relaxed">
                                            {award.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
