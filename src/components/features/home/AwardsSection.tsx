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
        <section className="py-32 bg-gray-50 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <ScrollReveal animation="fade-down">
                        <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
                            Recognition
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-900">
                            A Legacy of <span className="italic text-gray-400">Awards</span>
                        </h2>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, i) => (
                        <ScrollReveal
                            key={i}
                            animation="fade-up"
                            delay={i * 0.1}
                            className="group relative p-10 bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-gold-500/30 transition-all duration-500 flex flex-col items-center text-center rounded-sm"
                        >
                            <div className="mb-6 text-gray-300 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-500">
                                {award.icon}
                            </div>
                            <h4 className="text-xl font-serif font-bold text-brand-900 mb-2 group-hover:text-brand-800 transition-colors">
                                {award.title}
                            </h4>
                            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                                {award.subtitle}
                            </p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
