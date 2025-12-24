import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, TEAM_DATA } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { ArrowRight, Quote } from 'lucide-react';

const About: React.FC = () => {
   return (
      <div className="min-h-screen bg-white">
         <SEO
            title="About Us - Legacy & Vision"
            description={`Discover the legacy of ${BRAND.name}, driven by Esthetics, Ethics, and Engineering. Over 3 decades of transforming the Mumbai skyline.`}
         />
         {/* 1. HERO SECTION - Cinematic Fullscreen */}
         <section className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black">
               <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
                  alt="About Hero"
                  loading="eager"
                  className="w-full h-full object-cover opacity-60"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
               <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                  <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                     Our Story
                  </span>
                  <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                     Building <br /> Legacies.
                  </h1>
                  <div className="h-px w-24 bg-gold-500 mb-8"></div>
                  <p className="text-white/80 text-lg max-w-xl font-light leading-relaxed">
                     For over three decades, we have been more than just builders. We are curators of lifestyles, engineers of dreams, and architects of the future.
                  </p>
               </div>
            </div>
         </section>

         {/* 2. THE VISION - Editorial Split */}
         <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-20">
               <div className="flex flex-col lg:flex-row gap-20 items-start">
                  <div className="lg:w-1/2 sticky top-32">
                     <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-6 block">The Philosophy</span>
                     <h2 className="text-4xl md:text-6xl font-serif text-brand-900 mb-8 leading-tight">
                        Esthetics. <br /> Ethics. <br /> <span className="italic text-gold-600">Engineering.</span>
                     </h2>
                  </div>

                  <div className="lg:w-1/2 space-y-12">
                     <div className="group">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                           {BRAND.name} was born from a singular vision: to elevate the standards of Indian real estate.
                           In a market often defined by volume, we chose value. Where others saw empty plots, we saw potential ecosystems.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                           Our philosophy is simple yet profound. We believe that true luxury lies not just in opulence, but in the seamless integration of form and function.
                           It is about engineering spaces that breathe, designs that inspire, and quality that endures.
                        </p>
                     </div>

                     <div className="relative pl-8 border-l-2 border-gold-500">
                        <Quote className="absolute -top-4 -left-3 w-6 h-6 text-gold-500 bg-white p-1" />
                        <p className="text-2xl font-serif text-brand-900 italic leading-relaxed mb-4">
                           "We don't just build structures; we engineer legacies for generations to come. Every brick laid is a promise kept."
                        </p>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                           — Rajiv Malhotra, Chairman
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. IMAGERY BREAK - Parallax */}
         <section className="relative h-[60vh] overflow-hidden">
            <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000")' }}>
               <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative container mx-auto px-6 h-full flex items-center justify-center text-center">
               <div className="max-w-3xl">
                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">
                     Excellence is not an act, but a habit.
                  </h3>
                  <Link to="/projects" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors uppercase tracking-widest text-xs font-bold">
                     Explore Our Works <ArrowRight size={14} />
                  </Link>
               </div>
            </div>
         </section>

         {/* 4. LEADERSHIP - Clean Grid */}
         <section className="py-24 md:py-32 bg-gray-50/50">
            <div className="container mx-auto px-6 md:px-20">
               <div className="text-center mb-20 animate-fade-in-up">
                  <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">Leadership</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-900">
                     Guiding Visionaries
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                  {TEAM_DATA.map((leader, index) => (
                     <div key={index} className="group cursor-pointer">
                        <div className="overflow-hidden mb-6 aspect-[3/4] bg-gray-200">
                           <img
                              src={leader.img}
                              alt={leader.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                           />
                        </div>
                        <h4 className="font-serif text-2xl text-brand-900 mb-2 group-hover:text-gold-600 transition-colors">
                           {leader.name}
                        </h4>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-widest border-t border-gray-200 pt-2 inline-block w-full">
                           {leader.role}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;