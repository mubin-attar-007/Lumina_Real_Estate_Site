import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, X } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import PremiumButton from '@/components/common/PremiumButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openEnquire } = useModal();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Links for Center Nav (Builder Focused)
  const centerLinks = [
    { label: 'Legacy', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Redevelopment', path: '/redevelop' },
    { label: 'Channel Partners', path: '/channel-partners' },
    { label: 'Press', path: '/media' },
  ];

  // Links for Side Drawer (Comprehensive Builder Site)
  const drawerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Legacy', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Redevelopment', path: '/redevelop' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press Room', path: '/media' },
    { label: 'Journal', path: '/blogs' },
    { label: 'Channel Partners', path: '/channel-partners' },
    { label: 'NRI Corner', path: '/nri' },
    { label: 'CSR', path: '/csr' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  const isDarkText = scrolled || isOpen;

  // Background logic
  const navClasses = `fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-sm py-4'
    : 'bg-transparent py-6 md:py-8'
    }`;

  const textColorClass = isDarkText ? 'text-brand-900' : 'text-white';
  const logoTextClass = isDarkText ? 'text-brand-900' : 'text-white';

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold-500 z-[101] origin-left"
        style={{ scaleX }}
      />

      <nav className={navClasses}>
        <div className="container mx-auto px-6 md:px-12 relative z-[101]">
          <div className="flex justify-between items-center relative">

            {/* 1. LEFT - LOGO */}
            <div className="w-3/12 md:w-3/12 flex justify-start items-center z-[102] relative">
              <Link to="/" className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsOpen(false)}>
                <div className="flex flex-col items-start">
                  <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight leading-none ${logoTextClass} transition-colors duration-300`}>SAQ</span>
                  <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.35em] font-medium ml-0.5 ${logoTextClass} opacity-80 transition-colors duration-300`}>ASSOCIATES</span>
                </div>
              </Link>
            </div>

            {/* 2. CENTER - LINKS (Desktop Only) */}
            <div className={`hidden lg:flex w-6/12 justify-center items-center space-x-12 ${textColorClass} transition-colors duration-300`}>
              {centerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* 3. RIGHT - MENU TOGGLE */}
            <div className="w-9/12 md:w-3/12 flex justify-end items-center z-[102] relative">
              <div className={`hidden md:block mr-12 ${textColorClass} transition-colors duration-300`}>
                <Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors">
                  Connect
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors ${textColorClass} flex items-center gap-3 group`}
                aria-label="Toggle Menu"
              >
                <div className="space-y-1.5 p-1">
                  <span className={`block w-8 h-[1px] bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-[1px] bg-current ml-auto transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-8 h-[1px] bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>

      </nav>

      {/* FULL SCREEN MENU (100% Width) - Moved outside nav to escape stacking context */}
      {/* FULL SCREEN MENU (100% Width) - Moved outside nav to escape stacking context */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
              className="fixed inset-0 z-[999] bg-white flex h-[100dvh]"
            >
              {/* LEFT COLUMN: 70% Width - CEO / Founder Image (Builder Context) */}
              <div className="hidden lg:block w-[70%] h-full relative overflow-hidden bg-gray-100">
                <img
                  /* Using a 'clean' professional portrait placeholder */
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1600"
                  alt="CEO Portrait"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.97] hover:scale-105 transition-transform duration-[2s] ease-out grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>

                <div className="absolute bottom-16 left-16 text-white max-w-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-gold-400">The Visionary</p>
                  <p className="text-4xl font-serif italic leading-tight">
                    "We don't just build structures;<br />we engineer legacies for generations."
                  </p>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest opacity-80">— Rajiv Malhotra, Chairman</p>
                </div>
              </div>

              {/* RIGHT COLUMN: 30% Width - Menu Links */}
              <div className="w-full lg:w-[30%] h-full bg-white flex flex-col overflow-y-auto px-8 py-10 md:p-16 scrollbar-hide">

                {/* Close Button */}
                <div className="flex justify-end mb-6 shrink-0">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 text-brand-900 focus:outline-none bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100/50 shadow-sm"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-gold-600 transition-colors">Close</span>
                    <div className="relative w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gold-500 transition-colors">
                      <X size={12} className="group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                  </button>
                </div>

                {/* Links List */}
                <nav className="flex flex-col space-y-4 md:space-y-6 justify-center min-h-min py-8 grow">
                  {drawerLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl md:text-3xl lg:text-4xl font-serif font-medium text-brand-900 hover:text-gold-600 transition-colors block leading-tight"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-gray-100 pb-8 shrink-0"
                >
                  <PremiumButton onClick={() => { openEnquire(); setIsOpen(false); }} className="w-full justify-center mb-8">
                    Partner With Us
                  </PremiumButton>

                  <div className="flex justify-between items-center text-gray-400">
                    <div className="flex gap-4">
                      <Instagram size={18} className="hover:text-gold-500 cursor-pointer transition-colors" />
                      <Linkedin size={18} className="hover:text-gold-500 cursor-pointer transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">© 2025</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;