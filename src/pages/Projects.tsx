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
                description="Explore our portfolio of premium residential and commercial projects across Mumbai. Find your dream home with SAQ."
            />
            {/* 1. HERO SECTION - Cinematic Static */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                        alt="Projects Hero"
                        loading="eager"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:px-20 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
                            The Collection
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. SEARCH WIDGET (Clean Bar) */}
            <SearchWidget
                filters={filters}
                onFilterChange={handleFilterChange}
                locations={uniqueLocations}
                statuses={uniqueStatuses}
                types={uniqueTypes}
            />

            {/* 3. TABS / RESULTS */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6 md:px-20">

                    {/* Simple Tabs for Status Switching */}
                    <div className="flex flex-wrap items-center justify-center gap-8 mb-20">
                        {['Ongoing', 'Upcoming', 'Completed'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleFilterChange('status', tab)}
                                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${filters.status === tab
                                    ? 'text-brand-900 border-b-2 border-gold-500'
                                    : 'text-gray-400 hover:text-brand-900 border-b-2 border-transparent'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* 4. PROJECT GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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