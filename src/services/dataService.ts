import { Project, BlogPost, Testimonial, TeamMember, JobOpening, NewsItem } from '@/types';
import { PROJECTS_DATA, BLOGS_DATA, TESTIMONIALS_DATA, TEAM_DATA, CAREERS_DATA, NEWS_DATA, VERTICALS_DATA } from '@/config/constants';

// DATA REPOSITORIES INTERFACES
export interface ProjectRepository {
    getAll(): Promise<Project[]>;
    getById(id: string): Promise<Project | undefined>;
    getByStatus(status: string): Promise<Project[]>;
}

export interface BlogRepository {
    getAll(): Promise<BlogPost[]>;
    getLatest(limit: number): Promise<BlogPost[]>;
}

export interface TeamRepository {
    getAll(): Promise<TeamMember[]>;
}

export interface CareerRepository {
    getAll(): Promise<JobOpening[]>;
}

export interface MetaRepository {
    getTestimonials(): Promise<Testimonial[]>;
    getNews(): Promise<NewsItem[]>;
    getVerticals(): Promise<any[]>;
}

// MAIN DATA PROVIDER INTERFACE
export interface DataProvider {
    projects: ProjectRepository;
    blogs: BlogRepository;
    team: TeamRepository;
    careers: CareerRepository;
    meta: MetaRepository;
}

// ============================================================================
// 1. MOCK PROVIDER (Uses local constants.ts)
// ============================================================================
class MockDataProvider implements DataProvider {
    projects = {
        getAll: async () => [...PROJECTS_DATA],
        getById: async (id: string) => PROJECTS_DATA.find(p => p.id === id),
        getByStatus: async (status: string) => PROJECTS_DATA.filter(p => p.status === status)
    };

    blogs = {
        getAll: async () => [...BLOGS_DATA],
        getLatest: async (limit: number) => BLOGS_DATA.slice(0, limit)
    };

    team = {
        getAll: async () => [...TEAM_DATA]
    };

    careers = {
        getAll: async () => [...CAREERS_DATA]
    };

    meta = {
        getTestimonials: async () => [...TESTIMONIALS_DATA],
        getNews: async () => [...NEWS_DATA],
        getVerticals: async () => [...VERTICALS_DATA]
    };
}

// ============================================================================
// 2. SANITY PROVIDER (Placeholder for future implementation)
// ============================================================================
class SanityDataProvider implements DataProvider {
    // TODO: Initialize Sanity Client here
    // private client = createClient({...});

    projects = {
        getAll: async () => {
            // return this.client.fetch('*[_type == "project"]');
            console.warn("Sanity Provider not fully implemented. Returning empty array.");
            return [];
        },
        getById: async (_id: string) => undefined,
        getByStatus: async (_status: string) => []
    };

    blogs = {
        getAll: async () => [],
        getLatest: async () => []
    };

    team = { getAll: async () => [] };
    careers = { getAll: async () => [] };
    meta = {
        getTestimonials: async () => [],
        getNews: async () => [],
        getVerticals: async () => []
    };
}

// ============================================================================
// FACTORY
// ============================================================================
const CURRENT_SOURCE: string = 'MOCK'; // Changed to string to avoid TS "always false" error

const mockProvider = new MockDataProvider();
const sanityProvider = new SanityDataProvider();

export const getData = (): DataProvider => {
    return CURRENT_SOURCE === 'SANITY' ? sanityProvider : mockProvider;
};
