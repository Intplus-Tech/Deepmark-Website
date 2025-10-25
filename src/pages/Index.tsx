import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ResearchServices from "@/components/ResearchServices";
import OurValue from "@/components/OurValue";
import ContactSection from "@/components/ContactSection";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    const lenis = {
      on: (event: string, callback: () => void) => {
        window.addEventListener(event, callback);
      },
      raf: (time: number) => {
        ScrollTrigger.update();
      },
    };

    gsap.ticker.add(lenis.raf);

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <WhyChoose />
        <ResearchServices />
        <OurValue />
        <ContactSection />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
