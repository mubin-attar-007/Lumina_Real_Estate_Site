import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { BRAND } from '@/config/constants';
import { NavLinkType } from '@/types';
import ReraDisclaimer from './ReraDisclaimer';

const FooterForm = () => {
   const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');
      setTimeout(() => setStatus('success'), 1500);
   };

   if (status === 'success') {
      return (
         <div className="bg-white/10 p-4 rounded text-center animate-fade-in-up">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">✓ Subscribed Successfully</span>
         </div>
      );
   }

   return (
      <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
         <input required type="text" placeholder="Name" className="flex-1 bg-black/20 border border-gray-700 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none text-white placeholder-gray-500 transition-colors" />
         <input required type="email" placeholder="Email" className="flex-1 bg-black/20 border border-gray-700 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none text-white placeholder-gray-500 transition-colors" />
         <input required type="tel" placeholder="Mobile" className="flex-1 bg-black/20 border border-gray-700 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none text-white placeholder-gray-500 transition-colors" />
         <button disabled={status === 'loading'} className="bg-gold-500 text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-gold-600 transition-colors text-xs md:w-auto shadow-lg disabled:opacity-50">
            {status === 'loading' ? '...' : 'Subscribe'}
         </button>
      </form>
   );
};

const Footer: React.FC = () => {
   const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'downloaded'>('idle');

   const handleDownload = (e: React.MouseEvent) => {
      e.preventDefault();
      setDownloadStatus('downloading');
      setTimeout(() => {
         setDownloadStatus('downloaded');
         setTimeout(() => setDownloadStatus('idle'), 3000);
      }, 2000);
   };

   const footerLinks = [
      { label: 'Home', path: NavLinkType.HOME },
      { label: 'The Brand', path: NavLinkType.ABOUT },
      { label: 'Collection', path: NavLinkType.PROJECTS },
      { label: 'Redevelopment', path: NavLinkType.REDEVELOP },
      { label: 'Journal', path: NavLinkType.BLOGS },
      { label: 'Careers', path: NavLinkType.CAREERS },
      { label: 'Legal', path: NavLinkType.LEGAL },
   ];

   return (
      <footer className="bg-[#0a0a0a] text-white pt-20 pb-8 border-t border-gray-900 relative overflow-hidden">
         <ReraDisclaimer />

         {/* BACKGROUND IMAGE TEXTURE */}
         <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-10">
            <img
               src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000"
               alt="City Skyline"
               className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
         </div>

         {/* DOWNLOAD FEEDBACK TOAST */}
         {downloadStatus !== 'idle' && (
            <div className="fixed bottom-10 right-10 z-[100] bg-brand-900 border border-gold-500 text-white px-6 py-4 rounded shadow-2xl animate-fade-in-up flex items-center gap-3">
               {downloadStatus === 'downloading' ? (
                  <>
                     <div className="w-4 h-4 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                     <span className="text-xs font-bold uppercase tracking-widest">Generating PDF...</span>
                  </>
               ) : (
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-500">✓ Brochure sent to email</span>
               )}
            </div>
         )}

         {/* Get In Touch Horizontal Form */}
         <div className="container mx-auto px-6 m-16 relative z-10">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm">
               <h3 className="text-2xl font-serif font-bold text-center mb-8 text-white">
                  JOIN THE EXCLUSIVE LIST <span className="text-gold-500 text-sm block mt-2 font-sans font-normal tracking-widest">OR DOWNLOAD BROCHURE</span>
               </h3>
               <FooterForm />
            </div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               {/* Corporate Office */}
               <div>
                  <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Headquarters</h4>
                  <div className="text-sm text-gray-400 space-y-4 leading-relaxed font-light">
                     <p className="flex gap-3 items-start">
                        <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-1" />
                        <span>{BRAND.contact.address}</span>
                     </p>
                     <p className="flex gap-3 items-center">
                        <Mail size={16} className="text-gold-500 flex-shrink-0" />
                        <a href={`mailto:${BRAND.contact.email}`} className="hover:text-white transition-colors">{BRAND.contact.email}</a>
                     </p>
                     <p className="flex gap-3 items-center">
                        <Phone size={16} className="text-gold-500 flex-shrink-0" />
                        <a href={`tel:${BRAND.contact.phone}`} className="hover:text-white transition-colors">{BRAND.contact.phone}</a>
                     </p>
                  </div>
               </div>

               {/* Concierge */}
               <div>
                  <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Concierge</h4>
                  <div className="text-sm text-gray-400 space-y-4 leading-relaxed font-light">
                     <p className="flex gap-3 items-center">
                        <Mail size={16} className="text-gold-500 flex-shrink-0" />
                        <a href="mailto:sales@luminaestates.com" className="hover:text-white transition-colors">sales@luminaestates.com</a>
                     </p>
                     <p className="flex gap-3 items-center">
                        <Phone size={16} className="text-gold-500 flex-shrink-0" />
                        <a href="tel:+919998887777" className="hover:text-white transition-colors">+91 999 888 7777</a>
                     </p>
                  </div>
               </div>

               {/* Dynamic Explore Links */}
               <div>
                  <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Explore</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                     {footerLinks.map((link) => (
                        <li key={link.label}>
                           <Link to={link.path} className="hover:text-gold-500 transition-colors flex items-center gap-2 group">
                              <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Trending */}
               <div>
                  <h4 className="text-lg font-serif font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Trending</h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                     {['Sea View Flats in Bandra', 'Luxury Condos in Worli', 'Commercial Offices BKC', 'Redevelopment Opportunities'].map(link => (
                        <li key={link}>
                           <Link to={NavLinkType.PROJECTS} className="hover:text-gold-500 transition-colors border-b border-gray-800/50 pb-1 block font-light">
                              {link}
                           </Link>
                        </li>
                     ))}
                     <li>
                        <button onClick={handleDownload} className="hover:text-gold-500 transition-colors border-b border-gray-800/50 pb-1 block font-light text-left w-full text-white/70">
                           Download 2025 Portfolio
                        </button>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Disclaimer / Compliance Section */}
            <div className="border-t border-gray-800 pt-8 pb-8 text-[10px] text-gray-500 leading-relaxed text-justify opacity-70 hover:opacity-100 transition-opacity duration-500">
               <p className="mb-2"><strong className="text-gray-400">Disclaimer:</strong> The content provided on this website is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purpose only.</p>
               <p><strong className="text-gray-400">RERA Compliance:</strong> All projects are registered under MahaRERA. The RERA registration numbers are available on the project details page and the official MahaRERA website under registered projects. We request all our customers to inspect the RERA registration number and related details before making a decision.</p>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
               <p>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved. <Link to={NavLinkType.LEGAL} className="ml-2 hover:text-white underline">Privacy Policy</Link> | <Link to={NavLinkType.LEGAL} className="hover:text-white underline">Terms of Use</Link></p>
               <div className="flex space-x-4 mt-4 md:mt-0">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                     <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300">
                        <Icon size={14} />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;