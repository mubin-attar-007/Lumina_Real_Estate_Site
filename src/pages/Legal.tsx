import React, { useState } from 'react';
import { BRAND } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';

const Legal: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'rera'>('privacy');

   return (
      <div className="min-h-screen bg-white">
         <SEO title="Legal & Compliance" description="Privacy Policy, Terms of Use, and RERA Disclaimer for Lumina Estates." />

         {/* 1. MINIMAL HEADER (Text Only) */}
         <section className="pt-32 pb-16 px-6 md:px-20 border-b border-gray-100">
            <div className="container mx-auto">
               <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-6 block">Transparency & Trust</span>
               <h1 className="text-5xl md:text-6xl font-serif text-brand-900 mb-4">Legal & Compliance</h1>
            </div>
         </section>

         {/* 2. TABBED CONTENT */}
         <section className="bg-white min-h-[60vh]">
            <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row gap-16 py-16">

               {/* Sidebar Tabs */}
               <div className="lg:w-1/4">
                  <div className="flex flex-col items-start gap-2 sticky top-24">
                     {['privacy', 'terms', 'rera'].map((tab) => (
                        <button
                           key={tab}
                           onClick={() => setActiveTab(tab as any)}
                           className={`text-sm font-bold uppercase tracking-widest py-3 px-6 rounded-full transition-all w-full text-left
                                ${activeTab === tab ? 'bg-brand-900 text-white' : 'text-gray-400 hover:text-brand-900 hover:bg-gray-100'}`}
                        >
                           {tab === 'privacy' && 'Privacy Policy'}
                           {tab === 'terms' && 'Terms of Use'}
                           {tab === 'rera' && 'Disclaimer'}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Content Area */}
               <div className="lg:w-3/4 max-w-3xl">
                  <div className="animate-fade-in-up key={activeTab}">

                     {/* PRIVACY */}
                     {activeTab === 'privacy' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-serif text-brand-900 border-b border-gray-100 pb-4">Privacy Policy</h2>
                           <p className="text-gray-600 leading-relaxed text-lg font-light">
                              At {BRAND.name}, we value your trust and are committed to protecting your personal data. This policy outlines how we handle your information with the utmost care and confidentiality.
                           </p>

                           <div className="space-y-6">
                              <div className="group">
                                 <h3 className="text-lg font-bold text-brand-900 mb-2">Data Collection</h3>
                                 <p className="text-gray-500 text-sm leading-relaxed">We collect limited personal information (Name, Email, Phone) only when you explicitly provide it via our inquiry forms to schedule visits or request details.</p>
                              </div>
                              <div className="group">
                                 <h3 className="text-lg font-bold text-brand-900 mb-2">Usage & Security</h3>
                                 <p className="text-gray-500 text-sm leading-relaxed">Your data is stored on secure, encrypted servers. We do not sell, trade, or rent your identification information to third parties.</p>
                              </div>
                           </div>
                        </div>
                     )}

                     {/* TERMS */}
                     {activeTab === 'terms' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-serif text-brand-900 border-b border-gray-100 pb-4">Terms of Use</h2>
                           <p className="text-gray-600 leading-relaxed text-lg font-light">
                              Accessing certain areas of this website serves as your agreement to be bound by these provisions.
                           </p>
                           <ul className="list-disc pl-5 space-y-4 text-gray-500 text-sm leading-relaxed marker:text-gold-500">
                              <li>The content provided is for general information regarding our projects and legacy.</li>
                              <li>All intellectual property, including architectural renders, logos, and text, belongs to {BRAND.name}.</li>
                              <li>We reserve the right to modify project specifications as per regulatory requirements without prior notice.</li>
                           </ul>
                        </div>
                     )}

                     {/* RERA */}
                     {activeTab === 'rera' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-serif text-brand-900 border-b border-gray-100 pb-4">MahaRERA Disclaimer</h2>

                           <div className="bg-gold-50 p-6 border border-gold-200 rounded-sm flex gap-4 items-start">
                              <AlertCircle className="text-gold-600 shrink-0 mt-1" />
                              <div>
                                 <h4 className="font-bold text-brand-900 mb-1">Official Registration</h4>
                                 <p className="text-sm text-gray-600">All our ongoing projects are strictly registered with MahaRERA. Registration numbers are available on project details pages.</p>
                              </div>
                           </div>

                           <div className="prose prose-sm text-gray-500 max-w-none space-y-4">
                              <p>The imagery used on the website is indicative of artist's impressions. Furniture, accessories, and interior fixtures shown in show residences are not part of standard offerings unless explicitly stated.</p>
                              <p>We invite you to verify all details, including approvals and plans, at our corporate office or the official <a href="https://maharera.mahaonline.gov.in/" target="_blank" rel="noreferrer" className="text-brand-900 underline hover:text-gold-600">MahaRERA Website</a>.</p>
                           </div>
                        </div>
                     )}

                  </div>
               </div>

            </div>
         </section>
      </div>
   );
};

export default Legal;