'use client';

import QuickContact from '@/components/QuickContact';
import Analytics from '@/components/sections/Analytics';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <QuickContact />
      <WhyChooseUs />
      <Analytics />
    </>
  );
}
