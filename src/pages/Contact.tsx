// src/pages/Contact.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Header from "@/components/ContactHeader";

import { Helmet } from "react-helmet-async";
import StructuredData from "@/components/StructuredData";

const pageTitle = "Contact DeepMark Insight | Let's Talk";
const pageDescription =
  "Get in touch with the DeepMark Insight team for business inquiries, support, or to schedule a consultation.";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact DeepMark Insight",
  url: "https://www.deepmarkinsight.com/contact",
  description:
    "Get in touch with the DeepMark Insight team for business inquiries, support, or to schedule a consultation.",
  publisher: {
    "@type": "Organization",
    name: "DeepMark Insight",
    url: "https://www.deepmarkinsight.com",
  },
};

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <StructuredData data={contactPageSchema} />
      <Header />
      <main className="pt-16">
        <div className="container mx-auto py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-foreground/20"></div>
            <span className="text-sm text-muted-foreground tracking-wider">
              Let's Talk
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
