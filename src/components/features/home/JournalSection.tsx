import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/common/ScrollReveal';
import { NEWS_DATA } from '@/config/constants';

const JournalSection: React.FC = () => {
    const articles = NEWS_DATA.slice(0, 3);

    return (
        <section className="bg-gray-50 py-24 md:py-32">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                    <ScrollReveal>
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 mb-4 block">
                            Press & Media
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-900">
                            In The News
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link to="/media" className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-brand-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                            Read All Stories
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {articles.map((article, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <Link to="/media" className="group block">
                                <div className="aspect-[4/3] overflow-hidden mb-8 bg-gray-200">
                                    <img
                                        src={article.img}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        <span className="text-gold-600">{article.source}</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-brand-900 leading-snug group-hover:text-gold-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest border-b border-transparent group-hover:border-gold-600 transition-colors mt-2">
                                        Read Piece
                                    </span>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link to="/media" className="text-xs font-bold uppercase tracking-widest border-b border-brand-900 pb-1">
                        Read All Stories
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default JournalSection;
