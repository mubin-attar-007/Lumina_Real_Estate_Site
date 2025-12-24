import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/config/constants';
import ScrollReveal from '@/components/common/ScrollReveal';

const FeaturedResidences: React.FC = () => {
    // Slice to show only top 3-4 featured projects for the homepage
    const featuredProjects = PROJECTS_DATA.slice(0, 4);

    return (
        <section className="bg-white py-24 md:py-40">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="mb-24 text-center">
                    <ScrollReveal animation="fade-up">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 mb-4 block">
                            Our Portfolio
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-brand-900">
                            Current Offerings
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Projects List - Zig Zag */}
                <div className="flex flex-col gap-32">
                    {featuredProjects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>

                            {/* Image Side */}
                            <div className="w-full md:w-3/5">
                                <ScrollReveal animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} duration={1}>
                                    <Link to={`/projects/${project.id}`} className="block overflow-hidden group relative aspect-[16/10]">
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                                        />

                                        {/* Hover Overlay Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                            <div className="bg-white/90 backdrop-blur-md px-8 py-4 text-brand-900 text-xs font-bold uppercase tracking-widest border border-white">
                                                View Residence
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-2/5">
                                <ScrollReveal animation="fade-up" delay={0.2} className="flex flex-col items-start">
                                    <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                        {project.location}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-serif text-brand-900 mb-6 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-sm">
                                        {project.description.substring(0, 120)}... An architectural masterpiece curated for the discerning few.
                                    </p>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 hover:text-gold-600 transition-colors"
                                    >
                                        Explore <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </ScrollReveal>
                            </div>

                        </div>
                    ))}
                </div>

                {/* View All */}
                <div className="mt-32 text-center">
                    <ScrollReveal animation="fade-up">
                        <Link to="/projects" className="inline-block border-b border-brand-900 pb-1 text-sm font-bold uppercase tracking-[0.2em] hover:text-gold-600 hover:border-gold-600 transition-colors">
                            View All Properties
                        </Link>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default FeaturedResidences;
