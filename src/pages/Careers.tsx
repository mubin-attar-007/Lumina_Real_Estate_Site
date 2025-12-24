import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { BRAND, CAREERS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';

const Careers: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO title="Careers at Lumina" description="Join the team building Mumbai's future landmarks. Explore opportunities at Lumina Estates." />

            {/* 1. HERO SECTION - Cinematic Fullscreen */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                        alt="Careers Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Join the Team
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            Build <br /> The Future.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. CULTURE & VALUES - Editorial Split */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-8 block">Our Culture</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-900 mb-8 leading-tight">
                                Excellence is <br /> our habit.
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                To build world-class landmarks, you need world-class people. Our culture is built on the pillars of Meritocracy, Innovation, and Respect.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                We treat our employees as partners in our success story, providing opportunities to grow, lead, and excel in a dynamic environment where your impact is visible on the city skyline.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Office Life" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OPEN POSITIONS - Minimal List */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 md:px-20 max-w-5xl">
                    <h2 className="text-4xl font-serif text-center text-brand-900 mb-16">Current Openings</h2>

                    <div className="space-y-4">
                        {CAREERS_DATA.map((job, i) => (
                            <div key={i} className="group bg-white p-8 border border-transparent hover:border-gold-500 transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                        <span className="font-bold uppercase tracking-wider text-xs">{job.type}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.loc}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>{job.exp}</span>
                                    </div>
                                </div>

                                <button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-900">
                                    Apply <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <p className="text-gray-500 mb-4">Don't see your role?</p>
                        <a href={`mailto:careers@luminaestates.com`} className="text-xl font-serif text-brand-900 border-b border-brand-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-all">
                            Send your resume to careers@luminaestates.com
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;