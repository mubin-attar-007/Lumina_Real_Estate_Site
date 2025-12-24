import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/config/constants';
import ReraDisclaimer from './ReraDisclaimer';

const Footer: React.FC = () => {
   const [email, setEmail] = useState('');

   return (
      <footer className="bg-[#050505] text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">

         <div className="container mx-auto px-6 z-10 relative">

            {/* Top Grid: Newsletter & Links */}
            <div className="flex flex-col lg:flex-row justify-between mb-32 gap-20">

               {/* Newsletter Block */}
               <div className="lg:w-5/12">
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
               {/* Links Grid */}
               <div className="lg:w-6/12 grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                     <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Sitemap</span>
                     <ul className="space-y-4 text-sm font-light text-white/70">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">Legacy</Link></li>
                        <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                        <li><Link to="/redevelop" className="hover:text-white transition-colors">Redevelopment</Link></li>
                        <li><Link to="/media" className="hover:text-white transition-colors">Press</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                     </ul>
                  </div>

                  <div>
                     <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Social</span>
                     <ul className="space-y-4 text-sm font-light text-white/70">
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                     </ul>
                  </div>

                  <div>
                     <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Resources</span>
                     <ul className="space-y-4 text-sm font-light text-white/70">
                        <li><Link to="/channel-partners" className="hover:text-white transition-colors">Channel Partners</Link></li>
                        <li><Link to="/nri" className="hover:text-white transition-colors">NRI Corner</Link></li>
                        <li><Link to="/csr" className="hover:text-white transition-colors">CSR</Link></li>
                     </ul>
                  </div>

                  <div>
                     <span className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Legal</span>
                     <ul className="space-y-4 text-sm font-light text-white/70">
                        <li><Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/legal" className="hover:text-white transition-colors">Terms of Use</Link></li>
                        <li><Link to="/legal" className="hover:text-white transition-colors">Disclaimer</Link></li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Middle: Contact & RERA */}
            <div className="grid md:grid-cols-2 gap-12 border-t border-white/5 pt-12 mb-24">
               <div className="text-white/60 font-light text-sm space-y-2">
                  <p>{BRAND.contact.address}</p>
                  <p>{BRAND.contact.email} &nbsp;•&nbsp; {BRAND.contact.phone}</p>
               </div>
               <div className="md:text-right">
                  <ReraDisclaimer />
               </div>
            </div>

            {/* Bottom: Massive Brand Name */}
            <div className="border-t border-white/10 pt-12">
               <h1 className="text-[14vw] leading-[0.8] font-serif font-bold text-center text-white/10 select-none tracking-tight pointer-events-none">
                  LUMINA
               </h1>
               <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/30 mt-4 px-2">
                  <span>© {new Date().getFullYear()} Lumina Estates</span>
                  <span>Designed by Antigravity</span>
               </div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;