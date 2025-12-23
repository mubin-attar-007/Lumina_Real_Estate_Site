import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, ZoomIn, Volume2 } from 'lucide-react';
import { NEWS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';

const Media: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO title="Press & Media" description="Latest news, press releases, and updates from Lumina Estates." />
            {/* 1. HERO SECTION */}
            <section className="relative h-[50vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
                        alt="Media Hero"
                        className="w-full h-full object-cover opacity-60 bw-transition"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                            Press Room
                        </h1>
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                            <Link to="/" className="text-white hover:text-gold-500 transition-colors">HOME</Link>
                            <span>/</span>
                            <span className="text-gold-500">MEDIA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. NEWSLETTER */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-center text-brand-900 mb-16 uppercase">Lumina Chronicles</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Newsletter Card 1 */}
                        <div className="bg-white p-6 shadow-xl relative group">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg font-serif">CHRONICLES</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <ZoomIn size={16} className="hover:text-gold-500 cursor-pointer" />
                                    <Share2 size={16} className="hover:text-gold-500 cursor-pointer" />
                                    <Volume2 size={16} className="hover:text-gold-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="relative overflow-hidden border border-gray-200">
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500" alt="Vol 2" className="w-full h-[300px] object-cover bw-transition" />
                                <div className="absolute bottom-0 left-0 w-full bg-gray-100 py-2 px-4 flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500">WINTER 2025</span>
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-brand-900 font-bold text-xs">
                                <span className="p-1 border border-brand-900 rounded">Digital Edition</span>
                            </div>
                        </div>

                        {/* Newsletter Card 2 */}
                        <div className="bg-white p-6 shadow-xl relative group">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-lg font-serif">CHRONICLES</h3>
                                <div className="flex gap-2 text-gray-500">
                                    <ZoomIn size={16} className="hover:text-gold-500 cursor-pointer" />
                                    <Share2 size={16} className="hover:text-gold-500 cursor-pointer" />
                                    <Volume2 size={16} className="hover:text-gold-500 cursor-pointer" />
                                </div>
                            </div>
                            <div className="relative overflow-hidden border border-gray-200">
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=500" alt="Vol 1" className="w-full h-[300px] object-cover bw-transition" />
                                <div className="absolute bottom-0 left-0 w-full bg-gray-100 py-2 px-4 flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500">SUMMER 2025</span>
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-brand-900 font-bold text-xs">
                                <span className="p-1 border border-brand-900 rounded">Digital Edition</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NEWS & PR GRID */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold text-center text-brand-900 mb-16 uppercase">In The News</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_DATA.map((item, index) => (
                            <div key={index} className="group cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative border border-gray-100">
                                <div className="overflow-hidden relative h-64">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bw-transition" />
                                    {/* Date Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-900 z-20 shadow-lg border-l-2 border-gold-500">
                                        Recent
                                    </div>
                                </div>
                                <div className="p-6 relative">
                                    <div className="h-1 w-12 bg-gold-500 mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                                    <h3 className="text-lg font-serif font-bold text-gray-900 leading-snug group-hover:text-gold-600 transition-colors mb-4">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-brand-900 transition-colors">
                                        Read Article <div className="w-4 h-[1px] bg-gray-300 group-hover:bg-brand-900 transition-colors"></div>
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