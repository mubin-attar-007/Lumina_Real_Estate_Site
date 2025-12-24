import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { ArrowLeft, MapPin, Check, ExternalLink, ArrowRight } from 'lucide-react';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'amenities'>('overview');

    const project = PROJECTS_DATA.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    // Amenities List (Expanded)
    const amenities = [
        'Infinity Swimming Pool', '24/7 Concierge Service', 'State-of-the-Art Gymnasium',
        'Landscaped Gardens', 'Children\'s Play Area', 'Multi-Purpose Hall',
        'Indoor Games Room', 'Yoga & Meditation Deck', 'Jogging Track',
        'Amphitheatre', 'Business Center', 'Visitor Parking',
        'Power Backup', 'Advanced Security Systems', 'Rainwater Harvesting', 'Solar Panels'
    ];

    // Gallery Images
    const galleryImages = [
        project.imageUrl,
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={`${project.title} | ${project.location}`}
                description={`${project.description} Premium ${project.type} project in ${project.location}. ${project.price}`}
            />

            {/* HERO SECTION - Cinematic Fullscreen */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                {/* Gradient Mesh for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full">
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Collection</span>
                        </Link>

                        <div className="animate-fade-in-up max-w-4xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    {project.status}
                                </span>
                                <span className="text-gold-500 text-xs font-serif italic">
                                    {project.type} Residence
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-8 text-white/80">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-gold-500" />
                                    <span className="text-sm tracking-wide">{project.location}</span>
                                </div>
                                <div className="h-4 w-px bg-white/20"></div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm tracking-wide">Starting from <span className="text-white font-bold">{project.price}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NAVIGATION TABS - Minimal Sticky */}
            <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex gap-12 overflow-x-auto no-scrollbar">
                        {[
                            { id: 'overview', label: 'The Vision' },
                            { id: 'amenities', label: 'Amenities' },
                            { id: 'gallery', label: 'Gallery' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`py-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${activeTab === tab.id
                                    ? 'text-brand-900 border-b-2 border-gold-500'
                                    : 'text-gray-400 hover:text-brand-900 border-b-2 border-transparent'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT SECTIONS */}
            <div className="min-h-screen">
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <section className="py-24 md:py-32">
                        <div className="container mx-auto px-6 md:px-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                                {/* Left: Editorial Text */}
                                <div className="space-y-8 animate-fade-in-up">
                                    <h2 className="text-3xl md:text-5xl font-serif text-brand-900 leading-tight">
                                        Refining the Art of <span className="italic text-gold-600">Luxury Living</span>.
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {project.description} {project.title} stands as a testament to our commitment to engineering perfection.
                                        Designed for those who seek more than just a home, it offers a sanctuary where modern architecture meets timeless elegance.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Every square foot is meticulously planned to maximize light, space, and ventilation.
                                        From the grand entrance lobby to the private sky decks, every detail exudes sophistication.
                                    </p>

                                    <div className="pt-8">
                                        <a
                                            href={`https://maharera.mahaonline.gov.in/SearchList/Search?UType=Project&Keyword=${project.reraId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 text-brand-900 font-bold hover:text-gold-600 transition-colors uppercase tracking-widest text-xs border-b border-brand-900 pb-1 hover:border-gold-600"
                                        >
                                            View RERA Details <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                {/* Right: Stats / Key Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in-up delay-200">
                                    <div className="p-8 bg-gray-50 border border-gray-100 hover:border-gold-500/30 transition-colors group">
                                        <span className="block text-4xl font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {project.stats?.units || "Top"}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Units</span>
                                    </div>
                                    <div className="p-8 bg-gray-50 border border-gray-100 hover:border-gold-500/30 transition-colors group">
                                        <span className="block text-4xl font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {project.stats?.area || "Prime"}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Configuration</span>
                                    </div>
                                    <div className="p-8 bg-gray-50 border border-gray-100 hover:border-gold-500/30 transition-colors group col-span-1 sm:col-span-2">
                                        <span className="block text-lg font-serif text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">
                                            {project.location}
                                        </span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Prime Location</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* AMENITIES TAB */}
                {activeTab === 'amenities' && (
                    <section className="py-24 bg-gray-50/50">
                        <div className="container mx-auto px-6 md:px-20 animate-fade-in">
                            <h2 className="text-3xl font-serif text-brand-900 mb-16 text-center">Curated Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                                {amenities.map((amenity, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-2 h-2 mt-2 bg-gold-400 rounded-full group-hover:scale-150 transition-transform"></div>
                                        <span className="text-lg text-gray-700 font-light group-hover:text-brand-900 transition-colors">
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* GALLERY TAB */}
                {activeTab === 'gallery' && (
                    <section className="py-24">
                        <div className="container mx-auto px-6 md:px-20 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {galleryImages.map((img, i) => (
                                    <div key={i} className={`overflow-hidden relative group ${i === 0 ? 'md:col-span-2 md:h-[600px]' : 'h-[300px]'}`}>
                                        <img
                                            src={img}
                                            alt="Gallery"
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* CTA FOOTER */}
            <section className="bg-brand-900 py-32 text-center text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Create Your Legacy</h2>
                    <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                        Experience {project.title} for yourself. Schedule a private viewing with our relationship managers.
                    </p>
                    <Link to="/contact" className="inline-block bg-gold-500 text-brand-900 px-12 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                        Inquire Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
