import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectCard from '@/components/common/ProjectCard';
import SearchWidget from '@/components/common/SearchWidget';
import { ProjectFilters, Project } from '@/types';
import { getData } from '@/services/dataService';
import SEO from '@/components/common/SEO';

const Projects: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [filters, setFilters] = useState<ProjectFilters>({
        location: '',
        status: 'Ongoing',
        type: ''
    });
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch Data
    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            try {
                // Using Repository Pattern - easy swap to Sanity later
                const data = await getData().projects.getAll();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Sync with URL params on mount
    useEffect(() => {
        const type = searchParams.get('type');
        if (type) {
            // Capitalize first letter for consistency with data
            const formattedType = type.charAt(0).toUpperCase() + type.slice(1);
            setFilters(prev => ({ ...prev, type: formattedType, status: '' })); // Clear status if type is selected
        }
    }, [searchParams]);

    // Extract unique options for dropdowns from DATA
    const uniqueLocations = useMemo(() => Array.from(new Set(projects.map(p => p.location))), [projects]);
    const uniqueStatuses = useMemo(() => Array.from(new Set(projects.map(p => p.status))), [projects]);
    const uniqueTypes = useMemo(() => Array.from(new Set(projects.map(p => p.type))), [projects]);

    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            return (
                (filters.location === '' || p.location === filters.location) &&
                (filters.status === '' || p.status === filters.status) &&
                (filters.type === '' || p.type === filters.type)
            );
        });
    }, [projects, filters]);

    const handleFilterChange = (key: keyof ProjectFilters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        // No explicit loading state needed for client-side filtering of fetched data
        // But if server-side filtering were implemented, we would set loading here.
    };

    const ProjectSkeleton = () => (
        <div className="h-[480px] w-full bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" style={{ backgroundSize: '1000px 100%' }}></div>
            <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded"></div>
                <div className="h-8 bg-gray-200 w-2/3 mb-6 rounded"></div>
                <div className="h-px bg-gray-200 w-full mb-6"></div>
                <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 w-1/4 rounded"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Luxury Properties Collection"
                description="Explore our portfolio of premium residential and commercial projects across Mumbai. Find your dream home with Lumina."
            />
            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=2000"
                        alt="Projects Hero"
                        className="w-full h-full object-cover opacity-60 bw-transition"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                            The Collection
                        </h1>
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                            <span className="text-white hover:text-gold-500 cursor-pointer">HOME</span>
                            <span>/</span>
                            <span className="text-gold-500">PROJECTS</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SEARCH WIDGET (Overlapping) */}
            <SearchWidget
                filters={filters}
                onFilterChange={handleFilterChange}
                locations={uniqueLocations}
                statuses={uniqueStatuses}
                types={uniqueTypes}
            />

            {/* 3. TABS / RESULTS */}
            <section className="py-20">
                <div className="container mx-auto px-6">

                    {/* Simple Tabs for Status Switching */}
                    <div className="flex flex-wrap justify-center border-b border-gray-200 mb-16 max-w-4xl mx-auto gap-2 md:gap-0">
                        {['Ongoing', 'Upcoming', 'Completed'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleFilterChange('status', tab)}
                                className={`px-6 md:px-12 py-4 md:py-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${filters.status === tab
                                    ? 'text-brand-900'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab}
                                {filters.status === tab && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold-500"></div>}
                            </button>
                        ))}
                    </div>

                    {/* 4. PROJECT GRID */}
                    <div className="text-center mb-12">
                        <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs block mb-2">
                            {filters.status ? `${filters.status} Projects` : 'All Projects'}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {isLoading ? (
                            // Show Skeletons
                            Array.from({ length: 4 }).map((_, i) => (
                                <ProjectSkeleton key={i} />
                            ))
                        ) : (
                            // Show Projects
                            filteredProjects.map(project => (
                                <div key={project.id} className="animate-fade-in-up">
                                    <ProjectCard project={project} />
                                </div>
                            ))
                        )}
                    </div>

                    {!isLoading && filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-400 italic">
                            No projects found matching your criteria.
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
};

export default Projects;