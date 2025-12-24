import React, { useEffect } from 'react';
import Hero from '@/components/features/home/Hero';
import LegacySection from '@/components/features/home/LegacySection';
import ServicesSection from '@/components/features/home/ServicesSection';

import FeaturedResidences from '@/components/features/home/FeaturedResidences';
import JournalSection from '@/components/features/home/JournalSection';
import ManifestoSection from '@/components/features/home/ManifestoSection';
import StatsSection from '@/components/features/home/StatsSection';
import VerticalsSection from '@/components/features/home/VerticalsSection';
import AwardsSection from '@/components/features/home/AwardsSection';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';

import SEO from '@/components/common/SEO';

const Home: React.FC = () => {
   // Legacy observer removed - using ScrollReveal component
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="flex flex-col min-h-screen bg-white">
         <SEO
            title="Premium Real Estate Developers in Mumbai"
            description="SAQ Associates defines luxury living with iconic residential and commercial developments in Mumbai. Experience the art of soulful living."
         />
         <Hero />
         <ManifestoSection />
         <StatsSection />
         <LegacySection />
         <ServicesSection />
         <FeaturedResidences />
         <VerticalsSection />
         <AwardsSection />
         <TestimonialsSection />
         <JournalSection />
      </div>
   );
};

export default Home;