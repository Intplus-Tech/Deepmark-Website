import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurMission from "@/components/about/OurMission";
import ContactSection from "@/components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="">
        <AboutHero />
        <WhatWeDo />
        <OurMission />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
