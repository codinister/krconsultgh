'use client'

import Pageheader from "@/components/Pageheader";
import AboutUsSection from "@/components/sections/AboutUsSection";
import Portfolio from "@/components/sections/Portfolio";

export default function AboutPage() {
  return (
    <>
    <Pageheader title="About Us" />
    <AboutUsSection />
     <Portfolio />
    </>
  );
}
