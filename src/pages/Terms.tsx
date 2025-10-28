import Header from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import TermsOfUse from "@/components/TermsOfUse";
import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-hidden pt-10">
        <TermsOfUse />
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
