import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/config/constants';
import ReraDisclaimer from './ReraDisclaimer';

const Footer: React.FC = () => {
   const [email, setEmail] = useState('');

   return (
      <footer className="bg-[#050505] text-white overflow-hidden relative border-t border-white/5">

         <div className="container mx-auto px-6 relative z-10">

            {/* UPPER SECTION: Content with Background Text */}
            <div className="relative py-16 md:py-32">

               {/* Massive Background Text */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <h1 className="text-[18vw] font-serif font-bold text-white/[0.03] tracking-tight leading-none transform translate-y-4">
                     SAQ
                  </h1>
               </div>

               {/* Foreground Content */}
               <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">

                     {/* Newsletter Block */}
                     <div className="lg:w-4/12">
                        <h3 className="text-3xl font-serif mb-8 text-white">
                           Join the Inner Circle.
                        </h3>
                        <div className="flex border-b border-white/20 pb-4">
                           <input
                              type="email"
                              placeholder="Email Address"
                              className="bg-transparent border-none outline-none w-full text-lg placeholder-white/30 text-white font-light"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                           <button className="text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors">
                              Subscribe
                           </button>
                        </div>
                     </div>

                     {/* Links Grid */}
                     <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Sitemap</span>
                           <ul className="space-y-3 text-sm font-light text-white/70">
                              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                              <li><Link to="/about" className="hover:text-white transition-colors">Legacy</Link></li>
                              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                              <li><Link to="/redevelop" className="hover:text-white transition-colors">Redevelopment</Link></li>
                              <li><Link to="/media" className="hover:text-white transition-colors">Press</Link></li>
                              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                           </ul>
                        </div>

                        <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Social</span>
                           <ul className="space-y-3 text-sm font-light text-white/70">
                              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                           </ul>
                        </div>

                        <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Resources</span>
                           <ul className="space-y-3 text-sm font-light text-white/70">
                              <li><Link to="/channel-partners" className="hover:text-white transition-colors">Channel Partners</Link></li>
                              <li><Link to="/nri" className="hover:text-white transition-colors">NRI Corner</Link></li>
                              <li><Link to="/csr" className="hover:text-white transition-colors">CSR</Link></li>
                           </ul>
                        </div>

                        <div>
                           <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Legal</span>
                           <ul className="space-y-3 text-sm font-light text-white/70">
                              <li><Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                              <li><Link to="/legal" className="hover:text-white transition-colors">Terms of Use</Link></li>
                              <li><Link to="/legal" className="hover:text-white transition-colors">Disclaimer</Link></li>
                           </ul>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            {/* LOWER SECTION: Contact & RERA */}
            <div className="border-t border-white/10 py-10 grid md:grid-cols-2 gap-8 items-end">
               <div className="space-y-6">
                  <div className="text-white/60 font-light text-sm space-y-1">
                     <p>{BRAND.contact.address}</p>
                     <p>{BRAND.contact.email} &nbsp;•&nbsp; {BRAND.contact.phone}</p>
                  </div>
                  <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/30">
                     <span>© {new Date().getFullYear()} SAQ Associates</span>
                     <span>Designed by Antigravity</span>
                  </div>
               </div>
               <div className="md:text-right">
                  <ReraDisclaimer />
               </div>
            </div>

         </div>
      </footer >
   );
};

export default Footer;