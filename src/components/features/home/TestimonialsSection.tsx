import React from 'react';
import { Play } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/config/constants';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-32 bg-white relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold-500 font-bold uppercase tracking-luxury text-[10px] mb-4 block">TESTIMONIALS</span>
                    <h2 className="text-4xl font-serif font-bold text-brand-900">Voices of Lumina</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {TESTIMONIALS_DATA.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-100 relative overflow-hidden shadow-lg mb-6">
                                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bw-transition" alt={item.name} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                                        <Play fill="white" className="text-white" size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h4 className="text-brand-900 font-serif font-bold text-lg">{item.name}</h4>
                                <p className="text-gold-500 text-[10px] uppercase tracking-widest mt-2">Resident, {item.project}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
