import React from 'react';
import { Globe, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';

const NRI: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="NRI Corner"
                description="Exclusive real estate investment services for Non-Resident Indians. Invest in Mumbai's luxury market with confidence."
            />

            {/* 1. HERO SECTION */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-black">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="NRI Hero"
                        className="w-full h-full object-cover opacity-60"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-start justify-end h-full animate-fade-in-up">
                        <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            International Investments
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                            Invest in <br /> Home.
                        </h1>
                    </div>
                </div>
            </section>

            {/* 2. WHY INVEST SECTION */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-serif text-brand-900 mb-6">Seamless Investment from Abroad</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We understand the complexities of investing from overseas. SAQ Associates offers a dedicated NRI desk to handle legalities, tax advisory, and property management, ensuring your investment works for you while you are away.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Globe, title: "Virtual Tours", desc: "Experience your future home via live 3D walkthroughs and video consultations." },
                            { icon: ShieldCheck, title: "Legal Assistance", desc: "End-to-end support with FEMA compliance, POAs, and property registration." },
                            { icon: Banknote, title: "Rental Management", desc: "Post-possession leasing services to ensure high rental yields." }
                        ].map((item, i) => (
                            <div key={i} className="text-center group p-8 hover:bg-gray-50 transition-colors">
                                <div className="inline-flex items-center justify-center p-6 bg-brand-50 rounded-full mb-6 group-hover:bg-gold-500/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-brand-900 group-hover:text-gold-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-serif text-brand-900 mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. FAQ ACCORDION */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 md:px-20">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3">
                            <h2 className="text-4xl font-serif text-brand-900 mb-6">Common Questions</h2>
                            <p className="text-gray-600 mb-8">can't find what you're looking for? Reach out to our NRI desk directly.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-gold-600 font-bold uppercase text-xs tracking-widest hover:text-brand-900 transition-colors">
                                Contact NRI Desk <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            {[
                                { q: "Can NRIs buy property in India?", a: "Yes, NRIs can buy both residential and commercial properties in India. No special permission from the RBI is required, promoting a hassle-free buying process." },
                                { q: "What are the tax implications on rental income?", a: "Rental income earned in India is taxable in India. However, you can claim benefits under the Double Taxation Avoidance Agreement (DTAA) if your country of residence has a treaty with India." },
                                { q: "How can I fund the purchase?", a: "Payments can be made via inward remittances through normal banking channels or funds held in NRE/FCNR/NRO accounts in India." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white p-8 border border-gray-100 hover:border-gold-500/30 transition-colors">
                                    <h4 className="text-lg font-bold text-brand-900 mb-4">{faq.q}</h4>
                                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default NRI;
