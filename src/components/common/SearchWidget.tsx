import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { ProjectFilters } from '@/types';

interface SearchWidgetProps {
    filters?: ProjectFilters;
    onFilterChange?: (key: keyof ProjectFilters, value: string) => void;
    locations?: string[];
    statuses?: string[];
    types?: string[];
}

const SearchWidget: React.FC<SearchWidgetProps> = ({
    filters,
    onFilterChange,
    locations = [],
    statuses = [],
    types = []
}) => {

    const handleChange = (key: keyof ProjectFilters, value: string) => {
        if (onFilterChange) {
            onFilterChange(key, value);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto -mt-16 md:-mt-24 relative z-30 px-6">
            <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-6 md:p-10 border-t-4 border-gold-500 rounded-sm">
                <h3 className="text-brand-900 font-serif font-bold text-xl md:text-2xl mb-6 md:mb-8">Find Your Home</h3>

                <div className="flex flex-col lg:flex-row gap-6 items-end">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
                        {/* Location Dropdown */}
                        <div className="relative group">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Location</label>
                            <div className="relative">
                                <select
                                    value={filters?.location || ''}
                                    onChange={(e) => handleChange('location', e.target.value)}
                                    className="w-full appearance-none bg-transparent border-b border-gray-200 text-brand-900 py-3 pr-8 focus:outline-none focus:border-gold-500 text-sm font-semibold cursor-pointer hover:border-gray-400 transition-colors rounded-none"
                                >
                                    <option value="">All Locations</option>
                                    {locations.map(loc => (
                                        <option key={loc} value={loc}>{loc}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gold-500">
                                    <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Status Dropdown */}
                        <div className="relative group">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project Status</label>
                            <div className="relative">
                                <select
                                    value={filters?.status || ''}
                                    onChange={(e) => handleChange('status', e.target.value)}
                                    className="w-full appearance-none bg-transparent border-b border-gray-200 text-brand-900 py-3 pr-8 focus:outline-none focus:border-gold-500 text-sm font-semibold cursor-pointer hover:border-gray-400 transition-colors rounded-none"
                                >
                                    <option value="">All Statuses</option>
                                    {statuses.map(st => (
                                        <option key={st} value={st}>{st}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gold-500">
                                    <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>

                        {/* Type Dropdown */}
                        <div className="relative group">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Property Type</label>
                            <div className="relative">
                                <select
                                    value={filters?.type || ''}
                                    onChange={(e) => handleChange('type', e.target.value)}
                                    className="w-full appearance-none bg-transparent border-b border-gray-200 text-brand-900 py-3 pr-8 focus:outline-none focus:border-gold-500 text-sm font-semibold cursor-pointer hover:border-gray-400 transition-colors rounded-none"
                                >
                                    <option value="">All Types</option>
                                    {types.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gold-500">
                                    <ChevronDown size={14} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="bg-brand-900 text-white px-10 py-4 uppercase font-bold text-xs tracking-widest hover:bg-gold-500 transition-colors w-full lg:w-auto flex items-center justify-center gap-2 shadow-lg min-w-[160px]">
                        <Search size={14} /> Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchWidget;