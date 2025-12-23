import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();
  const { openEnquire } = useModal();

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
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const isDarkText = scrolled || isOpen || hoveredLink !== null;

  const navClasses = `fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[0.22,1,0.36,1] ${scrolled || hoveredLink
    ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4'
    : 'bg-transparent py-8'
    }`;

  const textColorClass = isOpen ? 'text-brand-900' : (isDarkText ? 'text-gray-900' : 'text-white');
  const logoTextClass = isOpen ? 'text-brand-900' : (isDarkText ? 'text-brand-900' : 'text-white');
  const subLogoTextClass = isOpen ? 'text-gray-500' : (isDarkText ? 'text-gray-400' : 'text-white/70');

  const linkClasses = `text-[11px] font-bold uppercase tracking-[0.2em] transition-colors flex items-center gap-1 cursor-pointer ${textColorClass} hover:text-gold-500`;

  // Mega Menu Content
  const collectionLinks = [
    { label: 'Residential', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80', path: '/projects?type=residential' },
    { label: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80', path: '/projects?type=commercial' },
    { label: 'Upcoming', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80', path: '/projects?type=upcoming' },
  ];

  const mobileLinks = [
    { label: 'Home', path: '/' },
    { label: 'The Brand', path: '/about' },
    { label: 'The Collection', path: '/projects' },
    { label: 'Redevelopment', path: '/redevelop' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press & Media', path: '/media' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav
      className={navClasses}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <div className="container mx-auto px-6 relative z-[101]">
        <div className="flex justify-between items-center relative">

          {/* 1. DESKTOP LEFT NAV */}
          <div className="hidden lg:flex items-center space-x-12 w-5/12">
            <Link to="/" className={linkClasses}>Home</Link>

            {/* THE BRAND - Simple Dropdown */}
            <div className="group relative py-4">
              <Link to="/about" className={linkClasses}>The Brand <ChevronDown size={10} className="mt-0.5" /></Link>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl py-2 hidden group-hover:block border-t border-gold-500 animate-fade-in-up">
                <Link to="/about" className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gold-500 hover:bg-gray-50 transition-colors">Our Legacy</Link>
                <Link to="/about" className="block px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-gold-500 hover:bg-gray-50 transition-colors">Philosophy</Link>
              </div>
            </div>

            {/* COLLECTION - MEGA MENU TRIGGER */}
            <div
              className="group relative py-4"
              onMouseEnter={() => setHoveredLink('collection')}
            >
              <Link to="/projects" className={linkClasses}>Collection <ChevronDown size={10} className="mt-0.5 opacity-50" /></Link>
            </div>

            <Link to="/careers" className={linkClasses}>Careers</Link>
          </div>

          {/* 2. CENTER LOGO */}
          <div className="flex lg:justify-center lg:w-2/12 z-[102] relative">
            <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsOpen(false)}>
              <div className="relative w-8 h-8 transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:rotate-180 scale-90">
                <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-gold-500 rounded-[1px] transform rotate-45 translate-x-2.5"></div>
                <div className={`absolute top-2.5 left-0 w-3.5 h-3.5 rounded-[1px] transform rotate-45 ${isDarkText ? 'bg-brand-900' : 'bg-brand-100'}`}></div>
                <div className={`absolute top-2.5 right-0 w-3.5 h-3.5 rounded-[1px] transform rotate-45 ${isDarkText ? 'bg-brand-800' : 'bg-brand-100'}`}></div>
              </div>
              <div className="flex flex-col items-start">
                <span className={`text-2xl font-bold font-serif tracking-tighter leading-none ${logoTextClass} transition-colors duration-300`}>LUMINA</span>
                <span className={`text-[8px] uppercase tracking-[0.35em] font-medium ml-0.5 ${subLogoTextClass} transition-colors duration-300`}>ESTATES</span>
              </div>
            </Link>
          </div>

          {/* 3. DESKTOP RIGHT NAV */}
          <div className="hidden lg:flex items-center justify-end space-x-12 w-5/12">
            <Link to="/redevelop" className={linkClasses}>Redevelopment</Link>
            <Link to="/media" className={linkClasses}>Press</Link>
            <button
              onClick={openEnquire}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] border ${scrolled || hoveredLink ? 'border-brand-900 text-brand-900' : 'border-white text-white'} px-8 py-3 hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300`}
            >
              Inquire
            </button>
          </div>

          {/* 4. MOBILE TOGGLE */}
          <div className={`lg:hidden z-[102] ${textColorClass} transition-colors relative`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none hover:text-gold-500 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MEGA MENU CONTAINER (Desktop) */}
      <div
        className={`hidden lg:block absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-500 overflow-hidden ${hoveredLink === 'collection' ? 'h-[400px] opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}
        onMouseEnter={() => setHoveredLink('collection')}
        onMouseLeave={() => setHoveredLink(null)}
      >
        <div className="container mx-auto px-6 pt-32 h-full">
          <div className="grid grid-cols-4 gap-8 h-full pb-12">
            <div className="col-span-1 pr-12 border-r border-gray-100">
              <h4 className="text-3xl font-serif font-bold text-brand-900 mb-6">The Collection</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Discover our portfolio of award-winning residences and commercial landmarks that redefine the Mumbai skyline.
              </p>
              <Link to="/projects" className="text-gold-500 text-xs font-bold uppercase tracking-widest hover:text-brand-900 transition-colors flex items-center gap-2">
                View All Projects <ChevronDown className="rotate-[-90deg]" size={12} />
              </Link>
            </div>
            {collectionLinks.map((item, idx) => (
              <Link to={item.path} key={idx} className="group relative overflow-hidden h-64 w-full cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <img src={item.image} alt={item.label} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <span className="text-white text-xl font-serif font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{item.label}</span>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* PREMIUM MOBILE MENU WITH FRAMER MOTION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] h-[100dvh] bg-white flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="flex flex-col items-center space-y-6 flex-grow justify-center min-h-[400px]">
              {mobileLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif font-medium text-brand-900 hover:text-gold-500 tracking-wide transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { openEnquire(); setIsOpen(false); }}
                className="mt-8 px-12 py-5 bg-brand-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-all duration-300 shadow-xl"
              >
                Inquire Now
              </motion.button>
            </div>

            {/* Footer Info in Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pt-10 border-t border-gray-100 flex flex-col items-center gap-6"
            >
              <div className="flex gap-6 text-gray-400">
                <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" className="hover:text-gold-500 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" className="hover:text-gold-500 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                © 2025 Lumina Estates.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;