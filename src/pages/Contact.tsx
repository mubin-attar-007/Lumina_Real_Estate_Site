import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
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
            <div className="h-full flex flex-col items-center justify-center p-10 animate-fade-in bg-gray-50">
                <div className="w-16 h-16 border border-gold-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-gold-500">✓</span>
                </div>
                <h3 className="text-3xl font-serif text-brand-900 mb-2">Message Sent</h3>
                <p className="text-gray-500 text-sm text-center mb-8">We will be in touch shortly.</p>
                <button onClick={() => setStatus('idle')} className="text-xs font-bold uppercase tracking-widest text-brand-900 border-b border-brand-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors">
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
                <div className="border-b border-gray-200 focus-within:border-brand-900 transition-colors">
                    <input required type="text" placeholder="Your Name" className="w-full bg-transparent py-4 text-brand-900 placeholder-gray-400 focus:outline-none" />
                </div>
                <div className="border-b border-gray-200 focus-within:border-brand-900 transition-colors">
                    <input required type="email" placeholder="Email Address" className="w-full bg-transparent py-4 text-brand-900 placeholder-gray-400 focus:outline-none" />
                </div>
                <div className="border-b border-gray-200 focus-within:border-brand-900 transition-colors">
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-transparent py-4 text-brand-900 placeholder-gray-400 focus:outline-none" />
                </div>
                <div className="border-b border-gray-200 focus-within:border-brand-900 transition-colors">
                    <select className="w-full bg-transparent py-4 text-brand-900 focus:outline-none appearance-none">
                        <option value="" disabled selected className="text-gray-400">Select Interest</option>
                        <option value="buy">Purchase a Residence</option>
                        <option value="redevelop">Society Redevelopment</option>
                        <option value="channel_partner">Channel Partnership</option>
                        <option value="career">Careers</option>
                        <option value="other">General Inquiry</option>
                    </select>
                </div>
                <div className="border-b border-gray-200 focus-within:border-brand-900 transition-colors">
                    <textarea placeholder="Message" rows={3} className="w-full bg-transparent py-4 text-brand-900 placeholder-gray-400 focus:outline-none resize-none"></textarea>
                </div>
            </div>

            <div className="text-[10px] text-gray-400 leading-relaxed max-w-md">
                By submitting, you consent to receive communication from {BRAND.name} via Email/SMS/WhatsApp.
            </div>

            <button disabled={status === 'loading'} type="submit" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-900 hover:text-gold-600 transition-colors">
                {status === 'loading' ? 'Processing...' : 'Submit Enquiry'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
};

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO title="Contact" description="Get in touch with Lumina Estates. Visit our corporate office or schedule a site visit." />

            {/* 1. HERO SECTION - Cinematic Fullscreen */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Get in Touch
                        </span>
                        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
                            Connect <br /> With Us.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. SPLIT LAYOUT: INFO & FORM */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* LEFT: Contact Info (Editorial) */}
                        <div className="space-y-16 animate-fade-in-up">
                            <div>
                                <span className="text-gold-500 font-bold uppercase tracking-[0.25em] text-xs mb-8 block">Headquarters</span>
                                <h2 className="text-3xl md:text-4xl font-serif text-brand-900 mb-8 leading-tight">
                                    {BRAND.name} Corporate Office
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-sm mb-8">
                                    {BRAND.contact.address}
                                </p>
                                <div className="space-y-4">
                                    <a href={`mailto:${BRAND.contact.email}`} className="flex items-center gap-3 text-brand-900 group">
                                        <Mail className="w-4 h-4 text-gold-500" />
                                        <span className="border-b border-transparent group-hover:border-gold-500 transition-all">{BRAND.contact.email}</span>
                                    </a>
                                    <a href={`tel:${BRAND.contact.phone}`} className="flex items-center gap-3 text-brand-900 group">
                                        <Phone className="w-4 h-4 text-gold-500" />
                                        <span className="border-b border-transparent group-hover:border-gold-500 transition-all">{BRAND.contact.phone}</span>
                                    </a>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gray-100"></div>

                            <div>
                                <h3 className="text-xl font-serif text-brand-900 mb-6">Visiting Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex items-center gap-4">
                                        <Clock className="w-4 h-4 text-gold-500" />
                                        <span>Monday - Saturday: 10:00 AM - 7:00 PM</span>
                                    </div>
                                    <div className="pl-8 text-sm text-gray-400">Sunday by appointment only</div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Minimal Form */}
                        <div className="bg-white lg:pl-12 animate-fade-in-up delay-200">
                            <span className="text-gray-400 font-bold uppercase tracking-[0.25em] text-xs mb-8 block">Inquiry</span>
                            <h2 className="text-3xl font-serif text-brand-900 mb-12">Start the Conversation</h2>
                            <FormLogic />
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. FULL WIDTH MAP */}
            <section className="h-[50vh] w-full grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.97230114032!2d72.8609!3d19.0645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e6df9891e1%3A0xb3388a1fba3d52d9!2sThe+Capital!5e0!3m2!1sen!2sin!4v1703248000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    className="border-0"
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;