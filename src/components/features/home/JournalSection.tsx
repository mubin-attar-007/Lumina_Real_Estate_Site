import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { BLOGS_DATA } from '@/config/constants';

const JournalSection: React.FC = () => {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">INSIGHTS</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-900">Lumina Journal</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {BLOGS_DATA.slice(0, 3).map((blog, i) => (
                        <div key={i} className="group cursor-pointer bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                            <div className="overflow-hidden relative h-64">
                                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bw-transition" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-900 text-[10px] font-bold uppercase px-4 py-2 flex items-center gap-2 shadow-sm">
                                    <Calendar size={10} className="text-gold-500" /> {blog.date}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-lg font-serif font-bold text-brand-900 leading-snug group-hover:text-gold-500 transition-colors mb-6 min-h-[3.5em]">
                                    {blog.title}
                                </h3>
                                <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Read Article</span>
                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:bg-brand-900 group-hover:border-brand-900 group-hover:text-white transition-all">
                                        <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JournalSection;
