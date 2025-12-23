import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 m-auto w-full max-w-4xl h-[600px] bg-white z-[1001] flex shadow-2xl overflow-hidden"
                    >
                        {/* Image Side */}
                        <div className="hidden md:block w-5/12 relative">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                                alt="Luxury Interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-2xl font-serif font-bold mb-2">Lumina Estates</h3>
                                <p className="text-sm opacity-80">Experience the extraordinary.</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="w-full md:w-7/12 p-12 relative flex flex-col justify-center">
                            <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} className="text-gray-400" />
                            </button>

                            <h2 className="text-3xl font-serif font-bold text-brand-900 mb-2">Enquire Now</h2>
                            <p className="text-gray-500 mb-8 text-sm">Fill in your details and our relationship manager will get back to you shortly.</p>

                            <ModalFormLogic onClose={onClose} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

interface ModalFormLogicProps {
    onClose?: () => void;
}

const ModalFormLogic: React.FC<ModalFormLogicProps> = ({ onClose }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-900 mb-2">Request Received</h3>
                <p className="text-gray-500 text-sm mb-6">Our team will call you within 30 minutes.</p>
                <button onClick={() => { setStatus('idle'); if (onClose) onClose(); }} className="text-xs font-bold uppercase tracking-widest text-gold-500 border-b border-gold-500 pb-1 hover:text-brand-900 transition-colors">Close</button>
            </div>
        );
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <input required type="text" placeholder="Full Name" className="w-full border-b border-gray-200 py-3 text-sm focus:border-gold-500 focus:outline-none transition-colors" />
                <input required type="email" placeholder="Email Address" className="w-full border-b border-gray-200 py-3 text-sm focus:border-gold-500 focus:outline-none transition-colors" />
                <div className="flex gap-4">
                    <select className="w-24 border-b border-gray-200 py-3 text-sm focus:border-gold-500 focus:outline-none bg-transparent">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                    </select>
                    <input required type="tel" pattern="[0-9]{10}" placeholder="Mobile Number" className="flex-1 border-b border-gray-200 py-3 text-sm focus:border-gold-500 focus:outline-none transition-colors" />
                </div>
                <textarea placeholder="Message (Optional)" rows={2} className="w-full border-b border-gray-200 py-3 text-sm focus:border-gold-500 focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <button disabled={status === 'loading'} type="submit" className="cta-button w-full mt-4">
                {status === 'loading' ? 'Processing...' : 'Submit Enquiry'}
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-4">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
            </p>
        </form>
    );
};

export default EnquireModal;
