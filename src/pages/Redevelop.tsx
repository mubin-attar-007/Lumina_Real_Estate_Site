import React from 'react';
import { BRAND } from '@/config/constants';

import SEO from '@/components/common/SEO';

const Redevelop: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Redevelopment Services"
                description="Transforming societies into landmarks. Trust Mumbai's most reliable redevelopment partner for transparency and timely delivery."
            />
            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
                        alt="Redevelopment Hero"
                        className="w-full h-full object-cover opacity-50 bw-transition"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-2">
                            RENEWAL
                        </h1>
                        <p className="text-white/90 text-xl md:text-3xl font-light">
                            Reshaping the Skyline For Generations
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. INTRODUCTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6 uppercase">
                        Thoughtful Redevelopment. Timeless Impact.
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        With a legacy of over {BRAND.stats.years}, {BRAND.name} has transformed 50+ societies through thoughtful redevelopment rooted in trust and excellence. Every project reflects our commitment to quality, customer delight, and lifestyle upgrades that set new benchmarks in luxury living. We maintain a 100% track record of on-time delivery and legal transparency.
                    </p>
                </div>
            </section>

            {/* 3. BENEFITS LIST & IMAGE */}
            <section className="py-12 pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">WHY REDEVELOP YOUR HOME?</span>

                            <div className="space-y-6">
                                {[
                                    { title: "Structural Longevity", desc: "Modern engineering upgrades that extend your building's life by decades." },
                                    { title: "Spatial Optimization", desc: "Intelligent floor plans that offer 20-30% more carpet area." },
                                    { title: "Advanced Security", desc: "Integrated BMS, CCTV surveillance, and smart access control." },
                                    { title: "Contemporary Aesthetics", desc: "Facade designs that become landmarks in the neighborhood." },
                                    { title: "Lifestyle Amenities", desc: "Rooftop lounges, fitness centers, and landscaped podiums." },
                                    { title: "Asset Appreciation", desc: "Significant increase in property value post-redevelopment." }
                                ].map((item, i) => (
                                    <div key={i} className="border-b border-gray-100 pb-4">
                                        <h4 className="font-serif font-bold text-brand-900 text-lg">{item.title}</h4>
                                        <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4 group">
                                <img src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=400" className="w-full h-64 object-cover mt-12 rounded-sm bw-transition" alt="Family moving in" />
                                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" className="w-full h-80 object-cover rounded-sm bw-transition" alt="Building" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SUBMIT FORM */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-white shadow-2xl p-8 md:p-12 rounded-lg">
                        <h2 className="text-3xl font-serif font-bold text-center text-brand-900 mb-8">Submit Your Society Details</h2>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Society Name</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Your Name</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                                    <input type="email" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Mobile</label>
                                    <input type="tel" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Address</label>
                                <textarea rows={3} className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm"></textarea>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Pin Code</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Total Society Area</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Location Type</label>
                                <select className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none rounded-sm bg-white">
                                    <option>South Mumbai</option>
                                    <option>Western Suburbs</option>
                                    <option>Central Suburbs</option>
                                </select>
                            </div>

                            <div className="flex justify-center mt-8">
                                <button type="submit" className="cta-button">
                                    Submit Proposal
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Redevelop;