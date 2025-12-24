import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/common/ScrollReveal';

const ServicesSection: React.FC = () => {
    const services = [
        {
            id: 'residential',
            title: "Residential Development",
            description: "From ultra-luxury high-rises to bespoke private estates, we conceptualize and construct homes that define modern living.",
            link: "/projects"
        },
        {
            id: 'commercial',
            title: "Commercial & Retail",
            description: "Engineering landmark towers and boutique retail spaces that become the heartbeat of their districts.",
            link: "/projects" // Pointing to projects as we have commercial projects there
        },
        {
            id: 'land',
            title: "Land Acquisition",
            description: "Strategic sourcing and sustainable planning for future-proof communities across the globe.",
            link: "/contact"
        }
    ];

    return (
        <section className="bg-brand-900 py-32 text-white border-b border-white/5">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row gap-16 md:gap-24">

                    {/* Header */}
                    <div className="w-full md:w-4/12">
                        <ScrollReveal>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-6 block">
                                Our Expertise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white">
                                Integrated <br /> <span className="italic text-gray-400">Real Estate</span> <br /> Solutions.
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Services List */}
                    <div className="w-full md:w-8/12">
                        <div className="divide-y divide-white/10">
                            {services.map((service, idx) => (
                                <ScrollReveal key={service.id} delay={idx * 0.1} className="py-12 group">
                                    <Link to={service.link} className="flex flex-col md:flex-row md:items-center justify-between gap-6 group-hover:pl-4 transition-all duration-500">
                                        <div className="max-w-xl">
                                            <h3 className="text-2xl md:text-3xl font-serif mb-3 text-white group-hover:text-gold-500 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 font-light leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-brand-900 transition-all">
                                            <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
