'use client';

import QuickContact from '@/components/QuickContact';
import Analytics from '@/components/sections/Analytics';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <QuickContact />
      <WhyChooseUs />
      <Analytics />
    </>
  );
}
