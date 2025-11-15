'use client';

import Pageheader from '@/components/Pageheader';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <>
      <Pageheader title="Our Services" />
      <Services />
      <Portfolio />
    </>
  );
}
