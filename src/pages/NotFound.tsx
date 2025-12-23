import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '@/components/common/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Texture"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 text-center px-6">
                <h1 className="text-[12rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-400 to-gold-700 leading-none opacity-50 select-none">
                    404
                </h1>
                <div className="animate-fade-in-up -mt-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">You Seem Lost</h2>
                    <p className="text-gray-400 text-sm mb-8 tracking-widest uppercase">The page you are looking for is not part of our collection.</p>

                    <Link to="/" className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-gold-600 transition-colors">
                        <ArrowLeft size={16} /> Returns Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
