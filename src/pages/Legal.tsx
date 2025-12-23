import React, { useState } from 'react';
// Link removed

import { BRAND } from '@/config/constants';
import SEO from '@/components/common/SEO';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';

const Legal: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'rera'>('privacy');

   return (
      <div className="min-h-screen bg-white">
         <SEO title="Legal & Compliance" description="Privacy Policy, Terms of Use, and RERA Disclaimer for Lumina Estates." />

         {/* Header */}
         <section className="bg-brand-900 text-white pt-40 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
               <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Legal & Compliance</h1>
               <p className="text-gray-400 text-sm uppercase tracking-[0.2em]">Transparency • Trust • Integrity</p>
            </div>
         </section>

         {/* Tab Navigation */}
         <section className="sticky top-20 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-6">
               <div className="flex justify-center space-x-8 md:space-x-16 overflow-x-auto py-4">
                  <button
                     onClick={() => setActiveTab('privacy')}
                     className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest pb-1 transition-colors ${activeTab === 'privacy' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-gray-400 hover:text-brand-900'}`}
                  >
                     <Lock size={14} /> Privacy Policy
                  </button>
                  <button
                     onClick={() => setActiveTab('terms')}
                     className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest pb-1 transition-colors ${activeTab === 'terms' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-gray-400 hover:text-brand-900'}`}
                  >
                     <FileText size={14} /> Terms of Use
                  </button>
                  <button
                     onClick={() => setActiveTab('rera')}
                     className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest pb-1 transition-colors ${activeTab === 'rera' ? 'text-gold-500 border-b-2 border-gold-500' : 'text-gray-400 hover:text-brand-900'}`}
                  >
                     <Shield size={14} /> Disclaimer
                  </button>
               </div>
            </div>
         </section>

         {/* Content */}
         <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">

               {/* PRIVACY POLICY */}
               {activeTab === 'privacy' && (
                  <div className="animate-fade-in-up">
                     <h2 className="text-3xl font-serif font-bold text-brand-900 mb-8">Privacy Policy</h2>
                     <div className="prose prose-sm text-gray-600 max-w-none text-justify space-y-6">
                        <p>This Privacy Policy governs the manner in which {BRAND.name} collects, uses, maintains and discloses information collected from users (each, a "User") of the website. This privacy policy applies to the Site and all products and services offered by {BRAND.name}.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">1. Personal Identification Information</h3>
                        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">2. Web Browser Cookies</h3>
                        <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">3. Compliance with Indian Laws</h3>
                        <p>We process your data in accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. We implement appropriate data collection, storage and processing practices and security measures to protect against unauthorized access.</p>
                     </div>
                  </div>
               )}

               {/* TERMS OF USE */}
               {activeTab === 'terms' && (
                  <div className="animate-fade-in-up">
                     <h2 className="text-3xl font-serif font-bold text-brand-900 mb-8">Terms of Use</h2>
                     <div className="prose prose-sm text-gray-600 max-w-none text-justify space-y-6">
                        <p>Welcome to {BRAND.name}. By using this website, you agree to comply with and be bound by the following terms and conditions of use. Please check this page regularly to take notice of any changes we may have made to the Terms of Use.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">1. Intellectual Property</h3>
                        <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of {BRAND.name} or its content suppliers and protected by international copyright laws.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">2. Liability Limitation</h3>
                        <p>The content on this website is for general information only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website.</p>
                     </div>
                  </div>
               )}

               {/* RERA DISCLAIMER */}
               {activeTab === 'rera' && (
                  <div className="animate-fade-in-up">
                     <h2 className="text-3xl font-serif font-bold text-brand-900 mb-8">Disclaimer & MahaRERA</h2>
                     <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-gold-500 mb-8">
                        <div className="flex gap-4">
                           <AlertCircle className="text-gold-500 flex-shrink-0" />
                           <p className="text-xs text-gray-600 leading-relaxed font-bold">
                              All our ongoing projects are registered with Maharashtra Real Estate Regulatory Authority (MahaRERA).
                           </p>
                        </div>
                     </div>

                     <div className="prose prose-sm text-gray-600 max-w-none text-justify space-y-6">
                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">1. Artist's Impressions</h3>
                        <p>The images, designs, and facilities shown in this website are artistic impressions and are up to the date of the upload. They are indicative in nature and for general information purposes only. The actual property may vary from these impressions.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">2. No Offer of Contract</h3>
                        <p>This website does not constitute an offer and/or contract of any type between the Developer/Promoter and the recipient. Any purchaser of this development shall be governed by the terms and conditions of the Agreement for Sale entered into between the parties, and no details mentioned in this website shall in any way govern such transactions.</p>

                        <h3 className="font-bold text-gray-900 uppercase text-xs tracking-widest mt-8 mb-4">3. Verification</h3>
                        <p>We request all our customers to inspect the RERA registration number and related details on the official MahaRERA website (<a href="https://maharera.mahaonline.gov.in/" target="_blank" className="text-gold-600 hover:underline">https://maharera.mahaonline.gov.in/</a>) before making a decision.</p>
                     </div>
                  </div>
               )}

               <div className="pt-10 border-t border-gray-200 mt-12">
                  <p className="text-xs text-gray-400">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
               </div>

            </div>
         </section>
      </div>
   );
};

export default Legal;