import React from 'react';
// import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BLOGS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';

const Blogs: React.FC = () => {
   return (
      <div className="min-h-screen bg-white">
         <SEO title="SAQ Journal" description="Insights on luxury living, real estate trends, and architectural design." />

         {/* 1. HERO SECTION - Cinematic Fullscreen */}
         <section className="relative h-[60vh] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black">
               <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
                  alt="Blogs Hero"
                  className="w-full h-full object-cover opacity-60"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                  <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                     Journal
                  </span>
                  <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                     Insights & <br /> Perspectives.
                  </h1>
               </div>
            </div>
         </section>

         {/* 2. BLOG LIST - Minimal */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-20">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                  {BLOGS_DATA.map((blog, i) => (
                     <div key={i} className="group cursor-pointer flex flex-col">
                        <div className="overflow-hidden relative h-72 mb-8 bg-gray-100">
                           <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                           <div className="absolute top-4 left-4 bg-white px-3 py-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-900 shadow-sm">
                              {blog.date}
                           </div>
                        </div>

                        <div className="flex-grow flex flex-col">
                           <h3 className="text-2xl font-serif text-brand-900 leading-tight group-hover:text-gold-600 transition-colors mb-4">
                              {blog.title}
                           </h3>
                           <p className="text-gray-500 mb-6 flex-grow line-clamp-3 leading-relaxed font-light">
                              {blog.snippet}
                           </p>

                           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 group-hover:text-gold-600 transition-colors">
                              Read Story <ArrowUpRight className="w-4 h-4" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Pagination - Minimal */}
               <div className="mt-24 flex justify-center gap-12 text-sm font-bold text-gray-400">
                  <span className="text-brand-900 border-b-2 border-brand-900 pb-1 cursor-pointer">01</span>
                  <span className="hover:text-brand-900 cursor-pointer transition-colors">02</span>
                  <span className="hover:text-brand-900 cursor-pointer transition-colors">03</span>
                  <span className="hover:text-brand-900 cursor-pointer transition-colors">Next</span>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Blogs;