// src/pages/Service.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
// import { slugify } from "@/lib/utils";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const pageTitle = "Our Services | DeepMark Insight";
const pageDescription =
  "Explore our suite of expert services: Ad Hoc Studies, Brand Health Tracking, Consumer U&A, Customer Satisfaction, Advertising Research, and more.";

// --- Dynamically Generated Structured Data ---
const servicesListPageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DeepMark Insight Services",
  description: "Our core services for market research and brand strategy.",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      // ⚠️ IMPORTANT: Verify this URL structure matches your app's routing
      // url: `https://www.deepmarkinsight.com/services/${slugify(service.title)}`,
    },
  })),
};
// ------------------------------------------

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <StructuredData data={servicesListPageSchema} />
      <main className="overflow-hidden">
        <ServicesHero />
        <ServicesGrid />
      </main>
    </Layout>
  );
};

export default Service;
