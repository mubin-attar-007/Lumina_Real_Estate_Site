import React from 'react';

const AwardsSection: React.FC = () => {
    const awards = [
        { title: "IGBC", subtitle: "Green Building", icon: "🌿" },
        { title: "ISO 9001", subtitle: "Quality", icon: "✓" },
        { title: "MahaRERA", subtitle: "Certified", icon: "⚖" },
        { title: "CREDAI", subtitle: "Member", icon: "🏛" },
        { title: "Best Developer", subtitle: "2024", icon: "🏆" },
        { title: "Sustainability", subtitle: "Award", icon: "🌱" }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #000 50px, #000 51px),
                                     repeating-linear-gradient(90deg, transparent, transparent 50px, #000 50px, #000 51px)`
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">RECOGNITION</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-900">A LEGACY OF AWARDS</h2>
                </div>

                {/* Hexagonal Grid Layout */}
                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-4 max-w-3xl">
                        {awards.map((award, i) => (
                            <div
                                key={i}
                                className={`group relative ${i >= 3 ? 'col-start-auto' : ''}`}
                                style={{
                                    marginTop: i >= 3 ? '-40px' : '0',
                                    marginLeft: i >= 3 ? (i % 2 === 0 ? '60px' : '0') : '0'
                                }}
                            >
                                {/* Hexagon Shape */}
                                <div className="relative w-40 h-44 mx-auto">
                                    {/* Hexagon Background */}
                                    <div
                                        className="absolute inset-0 bg-white border-2 border-gray-200 group-hover:border-gold-500 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
                                        style={{
                                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                        }}
                                    >
                                        {/* Subtle gradient overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                                            }}
                                        ></div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                                        <div className="text-4xl mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                                            {award.icon}
                                        </div>
                                        <h4 className="text-sm font-bold text-brand-900 mb-1 text-center group-hover:text-gold-600 transition-colors">
                                            {award.title}
                                        </h4>
                                        <p className="text-xs text-gray-500 text-center font-light">
                                            {award.subtitle}
                                        </p>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gold-500/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
