'use client';

import Pageheader from '@/components/Pageheader';
import Portfolio from '@/components/sections/Portfolio';
import ServicesSection from '@/components/sections/ServicesSection';

export default function ServicesPage() {
  return (
    <>
      <Pageheader title="Our Services" />
      <ServicesSection />
      <Portfolio />
    </>
  );
}
