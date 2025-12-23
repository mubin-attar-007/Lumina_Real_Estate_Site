import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND, CAREERS_DATA } from '@/config/constants';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';

const Careers: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <SEO title="Careers at Lumina" description="Join the team building Mumbai's future landmarks. Explore opportunities at Lumina Estates." />
            {/* 1. HERO SECTION */}
            <section className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
                        alt="Careers Hero"
                        className="w-full h-full object-cover opacity-60 bw-transition"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                            Careers
                        </h1>
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                            <Link to="/" className="text-white hover:text-gold-500 transition-colors">HOME</Link>
                            <span>/</span>
                            <span className="text-gold-500">CAREERS</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LIFE AT LUMINA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">CULTURE</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-8">LIFE AT LUMINA</h2>
                    <p className="text-gray-600 leading-relaxed mb-12 text-sm md:text-base">
                        We are an employee-first organization. We believe that to build world-class landmarks, you need world-class people. Our culture is built on the pillars of Meritocracy, Innovation, and Respect. We treat our employees as partners in our success story, providing opportunities to grow, lead, and excel in a dynamic environment.
                    </p>

                    <div className="w-full h-[400px] overflow-hidden rounded-sm shadow-xl group">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover bw-transition" alt="Office Life" />
                    </div>
                </div>
            </section>

            {/* 3. CURRENT OPENINGS */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-xs mb-8 block text-center">CURRENT OPPORTUNITIES</span>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CAREERS_DATA.map((job, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border-t-4 border-gray-100 hover:border-gold-500 group relative hover:-translate-y-1">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50/50 rounded-bl-full -z-0 transition-colors group-hover:bg-gold-500/5"></div>

                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                                        {job.type}
                                    </span>

                                    <h3 className="font-serif font-bold text-2xl text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">{job.title}</h3>
                                    <p className="text-sm text-gray-400 font-medium mb-6 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> {job.loc}
                                    </p>

                                    <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Experience</span>
                                            <span className="font-bold text-gray-900">{job.exp}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Department</span>
                                            <span className="font-bold text-gray-900">{(job as any).department}</span>
                                        </div>
                                    </div>

                                    <button className="cta-button w-full">
                                        Apply Now <ArrowUpRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. EMAIL LINK */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-4 block">JOIN THE TEAM</span>
                    <p className="text-lg text-gray-800">
                        We appreciate your interest in {BRAND.name}. Kindly share your resume with us at
                        <br className="md:hidden" />
                        <a href={`mailto:careers@luminaestates.com`} className="font-bold underline hover:text-gold-500 ml-1">careers@luminaestates.com</a>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Careers;