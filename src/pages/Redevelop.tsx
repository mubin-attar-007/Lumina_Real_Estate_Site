import React from 'react';
import { BRAND } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Redevelop: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Redevelopment Services"
                description="Transforming societies into landmarks. Trust Mumbai's most reliable redevelopment partner for transparency and timely delivery."
            />
            {/* 1. HERO SECTION - Cinematic Fullscreen */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
                        alt="Redevelopment Hero"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Society Redevelopment
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            A New <br /> Beginning.
                        </h1>
                        <p className="text-white/80 text-lg max-w-xl font-light leading-relaxed">
                            Reshaping the skyline for generations. We transform aging structures into timeless landmarks, preserving memories while upgrading lifestyles.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. THE PROMISE - Editorial Split */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">
                        <div className="lg:w-1/2">
                            <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-6 block">The Upgrade</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-8 leading-tight">
                                Thoughtful Redevelopment, <br /> Timeless Impact.
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                With a legacy of over {BRAND.stats.years}, {BRAND.name} has transformed 50+ societies through thoughtful redevelopment rooted in trust and excellence.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We maintain a 100% track record of on-time delivery and legal transparency, ensuring your transition to a new home is as seamless as the final finish.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 gap-8">
                            {[
                                { title: "Structural Longevity", desc: "Modern engineering upgrades that extend your building's life by decades." },
                                { title: "Spatial Optimization", desc: "Intelligent floor plans that offer 20-30% more carpet area." },
                                { title: "Asset Appreciation", desc: "Significant increase in property value post-redevelopment." }
                            ].map((item, i) => (
                                <div key={i} className="group border-b border-gray-100 pb-8 hover:border-gold-500 transition-colors">
                                    <h4 className="font-serif text-2xl text-brand-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROCESS - Horizontal Timeline Concept */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 md:px-20">
                    <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs mb-12 block text-center">The Journey</span>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            "Feasibility Study", "Society Approval", "Planning & Approvals", "Construction & Delivery"
                        ].map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-6xl font-serif text-gray-200 group-hover:text-gold-500/20 transition-colors mb-4 font-bold">0{i + 1}</div>
                                <h3 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">{step}</h3>
                                <div className="h-0.5 w-12 bg-gray-300 group-hover:w-full group-hover:bg-gold-500 transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROPOSAL FORM - Minimal Split */}
            <section className="py-24 md:py-32 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-6 md:px-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6">Submit Your Proposal</h2>
                            <p className="text-white/60 text-lg mb-12 leading-relaxed">
                                Ready to upgrade your society? Fill in the details and our redevelopment experts will conduct a preliminary feasibility check.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Transparent Documentation", "Timely Rent Disbursements", "Premium Specifications", "Post-Possession Support"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <CheckCircle className="w-5 h-5 text-gold-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <input type="text" placeholder="Society Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                    <input type="text" placeholder="Location/Area" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                    <input type="text" placeholder="Contact Number" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                    <input type="text" placeholder="Total Plot Area (sq. ft.)" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <input type="text" placeholder="Approx No. of Members" className="bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors" />
                                    <div className="hidden md:block"></div>
                                </div>
                                <textarea placeholder="Additional Details" rows={3} className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder-white/30 focus:border-gold-500 focus:outline-none transition-colors"></textarea>

                                <button type="submit" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-gold-500 transition-colors mt-8">
                                    Submit for Review
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Redevelop;