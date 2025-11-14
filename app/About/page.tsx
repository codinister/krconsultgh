'use client'

import Pageheader from "@/components/Pageheader";
import AboutUs from "@/components/sections/AboutUs";
import Portfolio from "@/components/sections/Portfolio";

export default function About() {
  return (
    <>
    <Pageheader title="About Us" />
    <AboutUs />
     <Portfolio />
    </>
  );
}
