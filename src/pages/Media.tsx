import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, ZoomIn, ArrowUpRight } from 'lucide-react';
import { NEWS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';

const Media: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO title="Press & Media" description="Latest news, press releases, and updates from Lumina Estates." />

            {/* 1. HERO SECTION - Cinematic Fullscreen */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
                        alt="Media Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Press Room
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            Lumina <br /> In The News.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. NEWSLETTER - Editorial Style */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">Quarterly Updates</span>
                            <h2 className="text-4xl font-serif text-brand-900">The Chronicles</h2>
                        </div>
                        <div className="hidden md:block text-sm text-gray-500 max-w-xs text-right">
                            Curated insights on luxury living, market trends, and company milestones.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Newsletter Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" alt="Vol 2" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-10 h-10 bg-white text-brand-900 flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-white transition-colors"><ZoomIn size={16} /></button>
                                    <button className="w-10 h-10 bg-white text-brand-900 flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-white transition-colors"><Share2 size={16} /></button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">Winter Edition 2025</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest">Vol. 02 • Digital Exclusive</p>
                                </div>
                                <ArrowUpRight className="text-gray-300 group-hover:text-brand-900 transition-colors" />
                            </div>
                        </div>

                        {/* Newsletter Card 2 */}
                        <div className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Vol 1" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="w-10 h-10 bg-white text-brand-900 flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-white transition-colors"><ZoomIn size={16} /></button>
                                    <button className="w-10 h-10 bg-white text-brand-900 flex items-center justify-center rounded-full hover:bg-gold-500 hover:text-white transition-colors"><Share2 size={16} /></button>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">Summer Edition 2025</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest">Vol. 01 • Digital Exclusive</p>
                                </div>
                                <ArrowUpRight className="text-gray-300 group-hover:text-brand-900 transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NEWS GRID - Minimal */}
            <section className="py-24 bg-gray-50/50">
                <div className="container mx-auto px-6 md:px-20">
                    <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs mb-12 block text-center">Press Coverage</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {NEWS_DATA.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="overflow-hidden relative h-72 mb-6 bg-gray-200">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-900">
                                        News
                                    </div>
                                </div>
                                <div className="pr-4">
                                    <h3 className="text-xl font-serif text-brand-900 leading-snug group-hover:text-gold-600 transition-colors mb-4 line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-900 transition-colors">
                                        Read Article <div className="w-8 h-px bg-gray-300 group-hover:bg-brand-900 transition-colors"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;