import AboutUs from '@/components/sections/AboutUs';
import Analytics from '@/components/sections/Analytics';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <WhyChooseUs />
      <Analytics />
      <AboutUs />
      <Services />
      <Contact />
    </>
  );
}
