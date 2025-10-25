import { useEffect } from "react";
import { gsap } from "gsap";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Header from "@/components/ContactHeader";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
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
