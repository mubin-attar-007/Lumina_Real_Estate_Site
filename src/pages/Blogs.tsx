import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { BLOGS_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';

const Blogs: React.FC = () => {
   return (
      <div className="min-h-screen bg-white">
         <SEO title="Lumina Journal" description="Insights on luxury living, real estate trends, and architectural design." />
         {/* 1. HERO SECTION */}
         <section className="relative h-[50vh] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black">
               <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
                  alt="Blogs Hero"
                  className="w-full h-full object-cover opacity-60 bw-transition"
               />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 md:px-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
               <div className="animate-fade-in-up">
                  <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                     Blogs
                  </h1>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                     <Link to="/" className="hover:text-gold-500 transition-colors">HOME</Link>
                     <span>/</span>
                     <span className="text-gold-500">BLOGS</span>
                  </div>
               </div>
            </div>
         </section>

         {/* 2. BLOG LIST */}
         <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl font-serif font-bold text-brand-900 mb-12">RECENT POSTS</h2>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {BLOGS_DATA.map((blog, i) => (
                     <div key={i} className="bg-white group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                        <div className="overflow-hidden relative h-60">
                           <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bw-transition" />
                           <div className="absolute bottom-4 left-4 bg-black/70 text-white text-[10px] font-bold uppercase px-3 py-1 flex items-center gap-2 shadow-sm">
                              <Calendar size={10} /> {blog.date}
                           </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                           <h3 className="text-lg font-serif font-bold text-brand-900 leading-tight group-hover:text-gold-500 transition-colors mb-4">
                              {blog.title}
                           </h3>
                           <p className="text-sm text-gray-500 mb-6 flex-grow line-clamp-3">
                              {blog.snippet}
                           </p>

                           <div className="border-t border-gray-100 pt-4 flex justify-end">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-gray-400 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all">
                                 <ArrowUpRight size={16} />
                              </span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Pagination Mockup */}
               <div className="mt-16 flex justify-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">&laquo;</button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gold-500 text-white border border-gold-500 rounded-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">2</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">3</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">4</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">5</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors rounded-sm">&raquo;</button>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Blogs;