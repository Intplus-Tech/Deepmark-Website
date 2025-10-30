import { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ResearchServices from "@/components/ResearchServices";
import OurValue from "@/components/OurValue";
import ContactSection from "@/components/ContactSection";
import ClientLogos from "@/components/ClientLogos";
import StructuredData from "@/components/StructuredData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pageTitle = "Market Research & Brand Services | Deepmark Insight Data";
const pageDescription =
  "Discover Deepmark Insight Data, your trusted source for authoritative market research and strategic brand services. Empower your business with data solutions.";

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.deepmarkinsight.com/#organization",
      name: "DeepMark Insight",
      url: "https://www.deepmarkinsight.com",
      logo: "https://www.deepmarkinsight.com/favicon.ico",
      description:
        "DeepMark Insight delivers authoritative market intelligence and clarity to inform strategy, drive growth, and make decisions with confidence.",
      sameAs: [], // <-- Add social media links here
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Business Inquiries",
        url: "https://www.deepmarkinsight.com/contact",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Market Research" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Brand Strategy Services" },
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "DeepMark Insight",
      url: "https://www.deepmarkinsight.com",
      description:
        "Transform market complexity into your competitive advantage with authoritative business intelligence and market research.",
      publisher: {
        "@id": "https://www.deepmarkinsight.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.deepmarkinsight.com/?s={search_term_string}", // <-- Double-check this search URL
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

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
    <Layout title={pageTitle} description={pageDescription}>
      <StructuredData data={homePageSchema} />

      <main className="overflow-hidden">
        <Hero />
        <WhyChoose />
        <ResearchServices />
        <OurValue />
        <ContactSection />
      </main>
    </Layout>
  );
};

export default Index;
