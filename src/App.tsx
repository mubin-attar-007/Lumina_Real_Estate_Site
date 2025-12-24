import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/common/ChatWidget';
import EnquiryButton from '@/components/common/EnquiryButton';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/common/PageTransition';
import SmoothScroll from '@/components/common/SmoothScroll';

import { ModalProvider, useModal } from '@/context/ModalContext';
import EnquireModal from '@/components/common/EnquireModal';

// Lazy Load Pages for Performance
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetails = lazy(() => import('@/pages/ProjectDetails'));
const Contact = lazy(() => import('@/pages/Contact'));
const Redevelop = lazy(() => import('@/pages/Redevelop'));
const Media = lazy(() => import('@/pages/Media'));
const Careers = lazy(() => import('@/pages/Careers'));
const Blogs = lazy(() => import('@/pages/Blogs'));
const Legal = lazy(() => import('@/pages/Legal'));
const ChannelPartner = lazy(() => import('@/pages/ChannelPartner'));
const NRI = lazy(() => import('@/pages/NRI'));
const CSR = lazy(() => import('@/pages/CSR'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const PageLoader = lazy(() => import('@/components/common/PageLoader'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><ProjectDetails /></PageTransition>} />
        <Route path="/redevelop" element={<PageTransition><Redevelop /></PageTransition>} />
        <Route path="/media" element={<PageTransition><Media /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/legal" element={<PageTransition><Legal /></PageTransition>} />
        <Route path="/channel-partners" element={<PageTransition><ChannelPartner /></PageTransition>} />
        <Route path="/nri" element={<PageTransition><NRI /></PageTransition>} />
        <Route path="/csr" element={<PageTransition><CSR /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent: React.FC = () => {
  const { isEnquireOpen, closeEnquire } = useModal();

  return (
    <Router>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white relative">
          <div className="fixed inset-0 pointer-events-none z-[50] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          {/* <CustomCursor /> */}
          <ScrollToTop />
          <Navbar />
          <EnquiryButton />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>

          <Footer />
          <ChatWidget />
          <EnquireModal isOpen={isEnquireOpen} onClose={closeEnquire} />
        </div>
      </SmoothScroll>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ModalProvider>
        <AppContent />
      </ModalProvider>
    </HelmetProvider>
  );
};

export default App;