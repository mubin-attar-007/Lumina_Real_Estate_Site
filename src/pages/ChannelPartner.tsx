import React from 'react';
import { ArrowRight, CheckCircle, Building2, Users, TrendingUp } from 'lucide-react';
import SEO from '@/components/common/SEO';

const ChannelPartner: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Channel Partners"
                description="Partner with Lumina Estates. Join our elite circle of channel partners and grow with Mumbai's premier real estate developer."
            />

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000"
                        alt="Channel Partner Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Growth . Partnership . Success
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Partner with <br /> Excellence
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. BENEFITS & FORM SPLIT */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex flex-col lg:flex-row gap-20">

                        {/* Left: Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-serif text-brand-900 mb-8 leading-tight">
                                Join the <span className="text-gold-600">Elite Circle</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-12">
                                As a Lumina Channel Partner, you gain access to exclusive inventory, priority launches, and a relationship management team dedicated to your success.
                            </p>

                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    { icon: TrendingUp, title: "High Yields", desc: "Competitive brokerage structures and timely payouts." },
                                    { icon: Building2, title: "Priority Inventory", desc: "First access to pre-launch offers and premium units." },
                                    { icon: Users, title: "Dedicated Support", desc: "A relationship manager tailored to your agency's needs." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="p-4 bg-gray-50 rounded-full group-hover:bg-gold-500/10 transition-colors">
                                            <item.icon className="w-6 h-6 text-brand-900 group-hover:text-gold-600 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-brand-900 mb-2">{item.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Registration Form */}
                        <div className="lg:w-1/2">
                            <div className="bg-gray-50 p-10 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-[100px]"></div>

                                <h3 className="text-2xl font-serif text-brand-900 mb-8">Register as Partner</h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                                            <input type="text" className="w-full bg-white border-b border-gray-200 p-3 focus:border-gold-500 focus:outline-none transition-colors" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Agency Name</label>
                                            <input type="text" className="w-full bg-white border-b border-gray-200 p-3 focus:border-gold-500 focus:outline-none transition-colors" placeholder="Lumina Realtors" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">RERA Registration No.</label>
                                        <input type="text" className="w-full bg-white border-b border-gray-200 p-3 focus:border-gold-500 focus:outline-none transition-colors" placeholder="A51800012345" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Mobile Number</label>
                                            <input type="tel" className="w-full bg-white border-b border-gray-200 p-3 focus:border-gold-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                                            <input type="email" className="w-full bg-white border-b border-gray-200 p-3 focus:border-gold-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-brand-900 text-white py-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-600 transition-colors flex items-center justify-center gap-3">
                                        Submit Application
                                        <ArrowRight className="w-4 h-4" />
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default ChannelPartner;
