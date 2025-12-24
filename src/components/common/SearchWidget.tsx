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
        <div className="w-full relative z-30 px-6 md:px-20 border-b border-gray-100 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">

                {/* Filter Group */}
                <div className="flex flex-wrap items-center gap-8 md:gap-12 w-full md:w-auto">
                    {/* Location */}
                    <div className="relative group">
                        <select
                            value={filters?.location || ''}
                            onChange={(e) => handleChange('location', e.target.value)}
                            className="appearance-none bg-transparent text-brand-900 py-2 pr-6 focus:outline-none text-xs md:text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-gold-600 transition-colors"
                        >
                            <option value="">All Locations</option>
                            {locations.map(loc => (
                                <option key={loc} value={loc}>{loc}</option>
                            ))}
                        </select>
                        <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 pointer-events-none" />
                    </div>

                    {/* Status */}
                    <div className="relative group">
                        <select
                            value={filters?.status || ''}
                            onChange={(e) => handleChange('status', e.target.value)}
                            className="appearance-none bg-transparent text-brand-900 py-2 pr-6 focus:outline-none text-xs md:text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-gold-600 transition-colors"
                        >
                            <option value="">All Statuses</option>
                            {statuses.map(st => (
                                <option key={st} value={st}>{st}</option>
                            ))}
                        </select>
                        <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 pointer-events-none" />
                    </div>

                    {/* Type */}
                    <div className="relative group">
                        <select
                            value={filters?.type || ''}
                            onChange={(e) => handleChange('type', e.target.value)}
                            className="appearance-none bg-transparent text-brand-900 py-2 pr-6 focus:outline-none text-xs md:text-sm font-bold uppercase tracking-widest cursor-pointer hover:text-gold-600 transition-colors"
                        >
                            <option value="">All Types</option>
                            {types.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                        <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 pointer-events-none" />
                    </div>
                </div>

                {/* Results Count or Extra Action could go here */}
                {/* For now, just a decorative separator or nothing */}
            </div>
        </div>
    );
};

export default SearchWidget;