// src/pages/Service.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "@/components/Layout";
import StructuredData from "@/components/StructuredData";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

import { slugify } from "@/lib/utils";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// --- Page-specific SEO Content ---
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

  // Pass services array as a prop to ServicesGrid
  // The services array is defined above, so it's available here.

  return (
    <Layout title={pageTitle} description={pageDescription}>
      <StructuredData data={servicesListPageSchema} />
      <main className="overflow-hidden">
        <ServicesHero />
        {/* You need to pass the services data to your grid component */}
        <ServicesGrid />
      </main>
    </Layout>
  );
};

export default Service;
