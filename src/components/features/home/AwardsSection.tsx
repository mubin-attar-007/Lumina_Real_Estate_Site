import React from 'react';
import { Award, CheckCircle, Star, Shield, Zap, Leaf } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

const AwardsSection: React.FC = () => {
    const awards = [
        { title: "IGBC", subtitle: "Platinum Rating", icon: <Leaf size={28} /> },
        { title: "ISO 9001", subtitle: "Quality Certified", icon: <CheckCircle size={28} /> },
        { title: "MahaRERA", subtitle: "Registered", icon: <Shield size={28} /> },
        { title: "CREDAI", subtitle: "Member", icon: <Star size={28} /> },
        { title: "Best Developer", subtitle: "2024", icon: <Award size={28} /> },
        { title: "Sustainability", subtitle: "Award", icon: <Zap size={28} /> },
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Elegant Background with Subtle Texture */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
                    alt=""
                    className="w-full h-full object-cover opacity-[0.08] mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/90 to-white/95"></div>
            </div>

            {/* Decorative Diagonal Lines Pattern - Increased from 2% to 8% */}
            <div className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="40" y2="40" stroke="#c5a059" strokeWidth="0.5" />
                            <line x1="40" y1="0" x2="0" y2="40" stroke="#c5a059" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
                </svg>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 relative">
                    {/* Hexagonal Badge Container */}
                    <div className="inline-flex flex-col items-center justify-center relative mb-4">
                        {/* Hexagon Background with Subtle Luxury Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-gold-50/30 to-white border-2 border-gold-400/40 clip-hexagon scale-110 shadow-xl"></div>

                        {/* Content */}
                        <div className="relative px-12 py-6 z-10">
                            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 mb-2">
                                <span className="w-8 h-[1px] bg-gold-500"></span>
                                Recognition
                                <span className="w-8 h-[1px] bg-gold-500"></span>
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif text-brand-900">A Legacy of Awards</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {awards.map((award, i) => (
                        <ScrollReveal
                            key={i}
                            animation="zoom-in"
                            delay={i * 0.1}
                            className="group relative w-40 h-44 md:w-48 md:h-52 flex flex-col items-center justify-center hover:z-50 transition-all duration-300"
                        >
                            {/* Hexagon Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-black clip-hexagon border-2 border-gold-500/10 group-hover:border-gold-500 group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all duration-500"></div>

                            {/* Inner Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 clip-hexagon"></div>

                            {/* Inner Content */}
                            <div className="z-10 flex flex-col items-center text-center p-4">
                                <div className="mb-3 text-gold-500/80 group-hover:text-gold-500 group-hover:scale-110 transition-all duration-500 drop-shadow-md">
                                    {award.icon}
                                </div>
                                <h4 className="text-sm font-bold text-gray-100 mb-1 group-hover:text-white transition-colors">
                                    {award.title}
                                </h4>
                                <p className="text-[10px] text-gray-400 font-light group-hover:text-gold-200 transition-colors uppercase tracking-wider">
                                    {award.subtitle}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
