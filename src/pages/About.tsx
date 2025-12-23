import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, TEAM_DATA } from '@/config/constants';

import SEO from '@/components/common/SEO';

const About: React.FC = () => {
   return (
      <div className="min-h-screen bg-white">
         <SEO
            title="About Us - Legacy & Vision"
            description={`Discover the legacy of ${BRAND.name}, driven by Esthetics, Ethics, and Engineering. Over 3 decades of transforming the Mumbai skyline.`}
         />
         {/* 1. HERO SECTION */}
         <section className="relative h-[60vh] w-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black">
               <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2000"
                  alt="About Hero"
                  className="w-full h-full object-cover opacity-60 bw-transition"
               />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-20 bg-gradient-to-t from-black/90 via-transparent to-transparent">
               <div className="animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                     About {BRAND.name}
                  </h1>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                     <Link to="/" className="hover:text-gold-500 transition-colors text-white">HOME</Link>
                     <span>/</span>
                     <span className="text-gold-500">ABOUT US</span>
                  </div>
               </div>
            </div>
         </section>

         {/* 2. WHO WE ARE */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
               <div className="flex flex-col lg:flex-row items-center gap-20">
                  <div className="lg:w-1/2">
                     <span className="text-gray-500 font-bold uppercase tracking-[0.25em] text-xs mb-4 block border-l-4 border-gold-500 pl-4">THE DEVELOPERS</span>
                     <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8">
                        CRAFTING LEGACIES
                     </h2>
                     <div className="space-y-6 text-gray-500 font-light leading-relaxed text-sm md:text-base text-justify">
                        <p>
                           {BRAND.name} was born from a vision to elevate the standards of Indian real estate.
                           Guided by our core philosophy of "Esthetics, Ethics, and Engineering," we have spent the last three decades transforming the city skyline.
                        </p>
                        <p>
                           We do not just build homes; we curate ecosystems where luxury meets functionality.
                           From land acquisition to the final coat of paint, our meticulous attention to detail ensures that every {BRAND.name} property is an asset for generations.
                        </p>
                     </div>
                  </div>

                  <div className="lg:w-1/2 relative group">
                     <div className="relative z-10 p-2 bg-white shadow-2xl">
                        <img
                           src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                           alt="Conference Room"
                           className="w-full bw-transition"
                        />
                     </div>
                     <div className="absolute -top-10 -right-10 w-24 h-24 hidden md:block animate-float">
                        <div className="relative w-full h-full bg-gold-500/10 rounded-full blur-xl"></div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* 3. VISION HEXAGON FEATURE */}
         <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
               <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2 relative flex justify-center">
                     <div className="w-[400px] h-[450px] bg-gray-100 clip-hexagon relative overflow-hidden group shadow-2xl">
                        <img
                           src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                           alt="Vision Building"
                           className="w-full h-full object-cover transform scale-125 group-hover:scale-100 transition-transform duration-700 bw-transition"
                        />
                     </div>
                  </div>

                  <div className="md:w-1/2">
                     <span className="text-gray-500 font-bold uppercase tracking-[0.25em] text-xs mb-4 block border-l-4 border-gold-500 pl-4">OUR VISION</span>
                     <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base text-justify">
                        To be the premier real estate developer in India, recognized for our commitment to quality, sustainability, and customer satisfaction. We aim to create landmarks that not only provide shelter but also enhance the quality of life for our residents, fostering vibrant communities and sustainable environments.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* 5. MANAGEMENT SECTION */}
         <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
               <span className="text-gray-500 font-bold uppercase tracking-[0.25em] text-xs mb-4 block">LEADERSHIP</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-16">
                  GUIDING VISIONARIES
               </h2>

               <div className="flex justify-center flex-wrap gap-8 items-end">
                  {TEAM_DATA.map((leader, index) => (
                     <div key={index} className={`flex flex-col items-center group transition-all duration-500 ${leader.center ? 'scale-110 z-10' : 'hover:scale-105'}`}>
                        <div className="w-48 h-60 overflow-hidden mb-4 bg-gray-100">
                           <img src={leader.img} alt={leader.name} className="w-full h-full object-cover bw-transition" />
                        </div>
                        <h4 className="font-serif font-bold text-gray-800 text-xs tracking-widest uppercase border-t border-gray-200 pt-2 w-full">{leader.name}</h4>
                        <span className="text-[10px] text-gold-500 font-bold uppercase mt-1">{leader.role}</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default About;