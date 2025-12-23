import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BRAND } from '@/config/constants';
import SEO from '@/components/common/SEO';

const FormLogic: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 2000);
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10 animate-form-status">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2">Thank You</h3>
                <p className="text-gray-500 text-sm">We have received your enquiry. Our relationship manager will contact you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-xs font-bold uppercase tracking-widest text-gold-500 border-b border-gold-500 pb-1 hover:text-brand-900 hover:border-brand-900 transition-colors">Send Another</button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-3 gap-6">
                <input required type="text" placeholder="Name" className="w-full bg-transparent border border-gray-300 p-4 text-sm focus:border-gold-500 focus:outline-none rounded-none placeholder-gray-400" />
                <input required type="email" placeholder="Email" className="w-full bg-transparent border border-gray-300 p-4 text-sm focus:border-gold-500 focus:outline-none rounded-none placeholder-gray-400" />
                <input required type="tel" pattern="[0-9]{10}" title="10 digit mobile number" placeholder="Mobile (+91)" className="w-full bg-transparent border border-gray-300 p-4 text-sm focus:border-gold-500 focus:outline-none rounded-none placeholder-gray-400" />
            </div>

            <select className="w-full bg-transparent border border-gray-300 p-4 text-sm focus:border-gold-500 focus:outline-none rounded-none bg-white text-gray-500 appearance-none">
                <option>Select a Project</option>
                <option>The Obsidian</option>
                <option>Lumina Zenith</option>
                <option>Project Aeon</option>
                <option>Redevelopment Inquiry</option>
            </select>

            <textarea placeholder="Message" rows={4} className="w-full bg-transparent border border-gray-300 p-4 text-sm focus:border-gold-500 focus:outline-none rounded-none placeholder-gray-400"></textarea>

            <div className="text-[10px] text-gray-400 text-center leading-relaxed">
                I authorize {BRAND.name} and its representative to contact me with updates and notifications via Email, SMS, WhatsApp, and Call. This will override the registry on DND/NDNC.
            </div>

            <div className="flex justify-center mt-6">
                <button disabled={status === 'loading'} type="submit" className="cta-button min-w-[240px]">
                    {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>
            </div>
        </form>
    );
};

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO title="Contact Us" description="Get in touch with Lumina Estates. Visit our corporate office or schedule a site visit." />

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Hero"
                        className="w-full h-full object-cover opacity-50 grayscale"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                            Contact Us
                        </h1>
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                            <Link to="/" className="text-white hover:text-gold-500 transition-colors">HOME</Link>
                            <span>/</span>
                            <span className="text-gold-500">CONTACT</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT DETAILS & ICONS (Overlapping) */}
            <section className="relative -mt-20 z-20 pb-24">
                <div className="container mx-auto px-6">
                    {/* Icons Bar - Responsive (Stack on mobile, Row on desktop) */}
                    <div className="flex justify-center mb-24">
                        <div className="bg-white shadow-2xl rounded-3xl md:rounded-full px-8 py-8 md:px-16 flex flex-col md:flex-row items-center gap-10 md:gap-32 border-t-4 border-transparent w-full md:w-auto">
                            <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-2">
                                <Phone size={40} className="text-brand-900 group-hover:scale-110 transition-transform" />
                                <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-widest">Call</span>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-gray-200"></div> {/* Separator for Desktop */}
                            <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-2">
                                <Mail size={40} className="text-brand-900 group-hover:scale-110 transition-transform" />
                                <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-widest">Email</span>
                            </div>
                            <div className="hidden md:block w-px h-12 bg-gray-200"></div> {/* Separator for Desktop */}
                            <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:-translate-y-2">
                                <span className="text-4xl md:text-5xl font-bold text-brand-900 group-hover:scale-110 transition-transform leading-none">@</span>
                                <span className="md:hidden text-xs font-bold text-gray-400 uppercase tracking-widest">Social</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16">
                        <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs border-b pb-1 border-gray-300">GET IN TOUCH</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Corporate Office */}
                        <div className="text-center group">
                            <h3 className="text-3xl font-serif font-bold text-brand-900 mb-8">Corporate Office</h3>
                            <div className="space-y-6 text-gray-500 text-sm leading-relaxed font-light">
                                <p className="flex flex-col items-center gap-3">
                                    <MapPin className="text-gray-400 group-hover:text-gold-500 transition-colors" size={24} />
                                    <span className="max-w-xs text-center">{BRAND.contact.address}</span>
                                </p>
                                <p className="flex flex-col items-center gap-3">
                                    <Mail className="text-gray-400 group-hover:text-gold-500 transition-colors" size={24} />
                                    <a href={`mailto:${BRAND.contact.email}`} className="hover:text-brand-900 border-b border-gray-200 pb-1">{BRAND.contact.email}</a>
                                </p>
                                <p className="flex flex-col items-center gap-3">
                                    <Phone className="text-gray-400 group-hover:text-gold-500 transition-colors" size={24} />
                                    <a href={`tel:${BRAND.contact.phone}`} className="hover:text-brand-900 border-b border-gray-200 pb-1">{BRAND.contact.phone}</a>
                                </p>
                            </div>
                        </div>

                        {/* Sales & Marketing */}
                        <div className="text-center group">
                            <h3 className="text-3xl font-serif font-bold text-brand-900 mb-8">Concierge Services</h3>
                            <div className="space-y-6 text-gray-500 text-sm leading-relaxed font-light">
                                <p className="flex flex-col items-center gap-3">
                                    <Mail className="text-gray-400 group-hover:text-gold-500 transition-colors" size={24} />
                                    <a href="mailto:sales@luminaestates.com" className="hover:text-brand-900 border-b border-gray-200 pb-1">sales@luminaestates.com</a>
                                </p>
                                <p className="flex flex-col items-center gap-3">
                                    <Phone className="text-gray-400 group-hover:text-gold-500 transition-colors" size={24} />
                                    <a href="tel:+918988856464" className="hover:text-brand-900 border-b border-gray-200 pb-1">+91 89888 56464</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ENQUIRE NOW FORM */}
                    <div className="max-w-4xl mx-auto mt-24 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-lg p-6 md:p-16 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 border border-gray-100 shadow-sm">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">ENQUIRE NOW</span>
                        </div>

                        <p className="text-center text-gray-400 text-xs mb-10 mt-4">Please Enter Your Details To Know More</p>
                        <FormLogic />
                    </div>
                </div>
            </section>

            {/* 3. LOCATION MAP */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <span className="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs mb-8 block border-l-4 border-gold-500 pl-4">LOCATION MAP</span>
                    <div className="shadow-2xl p-2 bg-white">
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.97230114032!2d72.8609!3d19.0645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6df9891e1%3A0xb3388a1fba3d52d9!2sThe+Capital!5e0!3m2!1sen!2sin!4v1703248000000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            className="border-0 filter grayscale hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;