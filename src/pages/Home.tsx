import React, { useEffect } from 'react';
import Hero from '@/components/features/home/Hero';
import LegacySection from '@/components/features/home/LegacySection';
import ServicesSection from '@/components/features/home/ServicesSection';

import FeaturedResidences from '@/components/features/home/FeaturedResidences';
import JournalSection from '@/components/features/home/JournalSection';
import ManifestoSection from '@/components/features/home/ManifestoSection';

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
            description="Lumina Estates defines luxury living with iconic residential and commercial developments in Mumbai. Experience the art of soulful living."
         />
         <Hero />
         <ManifestoSection />
         <LegacySection />
         <ServicesSection />

         <FeaturedResidences />
         {/* <AwardsSection /> */}
         {/* <TestimonialsSection /> */}
         <JournalSection />
         {/* <VerticalsSection /> */}
      </div>
   );
};

export default Home;