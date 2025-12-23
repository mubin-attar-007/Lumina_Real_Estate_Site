import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { ArrowLeft, MapPin, Home, CheckCircle, ExternalLink } from 'lucide-react';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'amenities'>('overview');

    const project = PROJECTS_DATA.find(p => p.id === id);

    // If project not found, redirect to 404
    if (!project) {
        return <Navigate to="/404" replace />;
    }

    // Sample amenities and additional details
    const amenities = [
        'Infinity Swimming Pool',
        '24/7 Concierge Service',
        'State-of-the-Art Gymnasium',
        'Landscaped Gardens',
        'Children\'s Play Area',
        'Multi-Purpose Hall',
        'Indoor Games Room',
        'Yoga & Meditation Deck',
        'Jogging Track',
        'Amphitheatre',
        'Business Center',
        'Visitor Parking',
        'Power Backup',
        'Advanced Security Systems',
        'Rainwater Harvesting',
        'Solar Panels'
    ];

    // Sample gallery images
    const galleryImages = [
        project.imageUrl,
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={`${project.title} | ${project.location}`}
                description={`${project.description} Premium ${project.type} project in ${project.location}. ${project.price}`}
            />

            {/* HERO SECTION */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-70 bw-transition"
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                    <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-20">
                        {/* Breadcrumb */}
                        <Link
                            to="/projects"
                            className="flex items-center gap-2 text-white/80 hover:text-gold-500 transition-colors mb-6 group w-fit"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to Collection</span>
                        </Link>

                        <div className="animate-fade-in-up">
                            <div className="inline-block px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full mb-4">
                                <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em]">
                                    {project.status}
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                                {project.title}
                            </h1>

                            <div className="flex items-center gap-2 text-white/80 text-sm mb-6">
                                <MapPin className="w-4 h-4" />
                                <span>{project.location}</span>
                                <span className="mx-2">•</span>
                                <span className="text-gold-500">{project.type}</span>
                            </div>

                            <p className="text-white/90 text-lg max-w-2xl mb-8">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-8">
                                <div>
                                    <div className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                                        Starting From
                                    </div>
                                    <div className="text-3xl font-serif font-bold text-gold-500">
                                        {project.price}
                                    </div>
                                </div>
                                {project.stats?.area && (
                                    <>
                                        <div className="h-12 w-px bg-white/20"></div>
                                        <div>
                                            <div className="text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-1">
                                                Configuration
                                            </div>
                                            <div className="text-xl font-semibold text-white">
                                                {project.stats.area}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TABS NAVIGATION */}
            <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex gap-8">
                        {[
                            { id: 'overview', label: 'Overview' },
                            { id: 'gallery', label: 'Gallery' },
                            { id: 'amenities', label: 'Amenities' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`py-6 text-sm font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === tab.id
                                    ? 'text-brand-900'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold-500"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* TAB CONTENT */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    {/* OVERVIEW TAB */}
                    {activeTab === 'overview' && (
                        <div className="animate-fade-in">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                                {/* Project Details */}
                                <div className="lg:col-span-2">
                                    <h2 className="text-3xl font-serif font-bold mb-6">Project Overview</h2>
                                    <p className="text-gray-700 leading-relaxed mb-8">
                                        {project.title} represents the pinnacle of luxury living in {project.location}.
                                        This exclusive {project.type.toLowerCase()} development combines world-class
                                        architecture with unmatched amenities, creating a lifestyle that transcends
                                        expectations. Every detail has been meticulously crafted to offer residents
                                        an experience of unparalleled sophistication and comfort.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Located in one of Mumbai's most prestigious neighborhoods, {project.title}
                                        offers seamless connectivity to key business districts, entertainment hubs,
                                        and cultural landmarks. The development features state-of-the-art infrastructure,
                                        sustainable design principles, and premium specifications that set new benchmarks
                                        in luxury real estate.
                                    </p>
                                </div>

                                {/* Quick Facts */}
                                <div className="bg-gray-50 p-8 rounded-lg h-fit">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Home className="w-5 h-5 text-gold-500" />
                                        Quick Facts
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                            <span className="text-gray-600 text-sm">Status</span>
                                            <span className="font-semibold">{project.status}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                            <span className="text-gray-600 text-sm">Type</span>
                                            <span className="font-semibold">{project.type}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                            <span className="text-gray-600 text-sm">Location</span>
                                            <span className="font-semibold">{project.location}</span>
                                        </div>
                                        {project.stats?.units && (
                                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                                <span className="text-gray-600 text-sm">Total Units</span>
                                                <span className="font-semibold">{project.stats.units}</span>
                                            </div>
                                        )}
                                        {project.stats?.area && (
                                            <div className="flex justify-between items-center py-3 border-b border-gray-200">
                                                <span className="text-gray-600 text-sm">Configuration</span>
                                                <span className="font-semibold">{project.stats.area}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between items-center py-3">
                                            <span className="text-gray-600 text-sm">RERA ID</span>
                                            <span className="font-semibold text-xs">{project.reraId}</span>
                                        </div>
                                    </div>

                                    <a
                                        href={`https://maharera.mahaonline.gov.in/SearchList/Search?UType=Project&Keyword=${project.reraId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 w-full flex items-center justify-center gap-2 bg-brand-900 text-white py-3 px-6 rounded-lg hover:bg-brand-800 transition-colors group"
                                    >
                                        View on MahaRERA
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* Specifications Grid */}
                            <div className="border-t border-gray-200 pt-12">
                                <h2 className="text-3xl font-serif font-bold mb-8">Specifications</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Structure</h4>
                                        <p className="text-gray-700 text-sm">RCC framed earthquake-resistant structure with premium quality concrete and steel reinforcement.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Flooring</h4>
                                        <p className="text-gray-700 text-sm">Imported Italian marble in living areas, vitrified tiles in bedrooms, anti-skid tiles in bathrooms.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Kitchen</h4>
                                        <p className="text-gray-700 text-sm">Modular kitchen with granite countertop, premium quality fittings, chimney, and hob provision.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Bathrooms</h4>
                                        <p className="text-gray-700 text-sm">Designer sanitary ware from premium brands, chrome-plated fixtures, hot and cold water mixer.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Doors & Windows</h4>
                                        <p className="text-gray-700 text-sm">Main door with premium teak wood finish, internal doors with laminated frames, powder-coated aluminum windows.</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 rounded-lg">
                                        <h4 className="font-bold mb-3">Electrical</h4>
                                        <p className="text-gray-700 text-sm">Concealed copper wiring, modular switches, video door phone, solar water heater provision.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* GALLERY TAB */}
                    {activeTab === 'gallery' && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-serif font-bold mb-8">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleryImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} view ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* AMENITIES TAB */}
                    {activeTab === 'amenities' && (
                        <div className="animate-fade-in">
                            <h2 className="text-3xl font-serif font-bold mb-4">World-Class Amenities</h2>
                            <p className="text-gray-700 mb-12 max-w-3xl">
                                Experience a lifestyle like no other with our comprehensive range of premium amenities
                                designed to cater to your every need.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {amenities.map((amenity, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gold-50 transition-colors group"
                                    >
                                        <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                        <span className="text-gray-800 group-hover:text-brand-900 transition-colors">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="bg-brand-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Interested in {project.title}?
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Schedule a private tour or download our detailed brochure to learn more about this exceptional property.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-gold-500 text-brand-900 px-8 py-4 rounded-lg font-bold hover:bg-gold-400 transition-all hover:scale-105"
                        >
                            Schedule Site Visit
                        </Link>
                        <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;
