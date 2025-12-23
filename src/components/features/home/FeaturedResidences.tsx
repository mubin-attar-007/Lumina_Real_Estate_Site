import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/config/constants';
import ProjectCard from '@/components/common/ProjectCard';

const FeaturedResidences: React.FC = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-20">
                    <div>
                        <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">COLLECTION</span>
                        <h2 className="text-5xl font-serif font-bold text-brand-900">Featured Residences</h2>
                    </div>
                    <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-luxury border-b border-gray-300 pb-1 hover:text-gold-500 hover:border-gold-500 transition-all">
                        View All Projects <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {PROJECTS_DATA.slice(0, 3).map((p, i) => (
                        <div key={i} className="h-[500px]">
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedResidences;
