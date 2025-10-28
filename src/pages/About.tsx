// src/pages/About.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "@/components/Layout"; // <-- 1. Import Layout
import StructuredData from "@/components/StructuredData"; // <-- 2. Import StructuredData
import AboutHero from "@/components/about/AboutHero";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurMission from "@/components/about/OurMission";
import ContactSection from "@/components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const pageTitle = "About DeepMark Insight | Our Mission & Team";
const pageDescription =
  "Learn about DeepMark Insight, our mission, and the team dedicated to transforming market complexity into strategic advantage.";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About DeepMark Insight",
  url: "https://www.deepmarkinsight.com/about",
  description:
    "Learn about DeepMark Insight, our mission, and the team dedicated to transforming market complexity into strategic advantage.",
  publisher: {
    "@type": "Organization",
    name: "DeepMark Insight",
    url: "https://www.deepmarkinsight.com",
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 5. Use the Layout component
    <Layout title={pageTitle} description={pageDescription}>
      {/* 6. Add the structured data component */}
      <StructuredData data={aboutPageSchema} />
      <main className="overflow-hidden">
        <AboutHero />
        <WhatWeDo />
        <OurMission />
        <ContactSection />
      </main>
    </Layout>
  );
};

export default About;
