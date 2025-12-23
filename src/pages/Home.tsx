import React, { useEffect } from 'react';
import Hero from '@/components/features/home/Hero';
import LegacySection from '@/components/features/home/LegacySection';
import StatsSection from '@/components/features/home/StatsSection';
import FeaturedResidences from '@/components/features/home/FeaturedResidences';
import AwardsSection from '@/components/features/home/AwardsSection';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';
import JournalSection from '@/components/features/home/JournalSection';
import VerticalsSection from '@/components/features/home/VerticalsSection';

import SEO from '@/components/common/SEO';

const Home: React.FC = () => {
   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('opacity-100', 'translate-y-0');
               entry.target.classList.remove('opacity-0', 'translate-y-12');
            }
         });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
      return () => observer.disconnect();
   }, []);

   return (
      <div className="flex flex-col min-h-screen bg-white">
         <SEO
            title="Premium Real Estate Developers in Mumbai"
            description="Lumina Estates defines luxury living with iconic residential and commercial developments in Mumbai. Experience the art of soulful living."
         />
         <Hero />
         <LegacySection />
         <StatsSection />
         <FeaturedResidences />
         <AwardsSection />
         <TestimonialsSection />
         <JournalSection />
         <VerticalsSection />
      </div>
   );
};

export default Home;