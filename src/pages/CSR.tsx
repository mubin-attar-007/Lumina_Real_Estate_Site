import React from 'react';
import { Heart, Sprout, BookOpen, Users } from 'lucide-react';
import SEO from '@/components/common/SEO';

const CSR: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Social Responsibility"
                description="SAQ Cares. Our commitment to sustainable development, education, and community welfare."
            />

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2000"
                        alt="CSR Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            SAQ Cares
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Building Beyond <br /> Structures.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. PHILOSOPHY INTRO */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-20 text-center max-w-4xl mx-auto">
                    <Heart className="w-12 h-12 text-gold-500 mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-serif text-brand-900 mb-8 leading-tight">
                        "True legacy isn't just about the skylines we shape, but the lives we touch along the way."
                    </h2>
                    <p className="text-gray-600 text-lg">
                        At SAQ Associates, Corporate Social Responsibility (CSR) is deeply ingrained in our ethos. We believe in sustainable growth that empowers communities and protects our planet.
                    </p>
                </div>
            </section>

            {/* 3. KEY PILLARS */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Sprout,
                                title: "Green Initiative",
                                desc: "Planting 10,000+ trees annually and ensuring all our projects achieve IGBC Gold/Platinum certification.",
                                img: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5afa?auto=format&fit=crop&q=80&w=600"
                            },
                            {
                                icon: BookOpen,
                                title: "Education for All",
                                desc: "Supporting municipal schools with digital infrastructure and scholarship programs for children of construction workers.",
                                img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
                            },
                            {
                                icon: Users,
                                title: "Community Health",
                                desc: "Regular health camps and sanitation drives in the neighborhoods we operate in.",
                                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <pillar.icon className="w-8 h-8 text-gold-600 mb-6" />
                                    <h3 className="text-2xl font-serif text-brand-900 mb-4">{pillar.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CSR;
