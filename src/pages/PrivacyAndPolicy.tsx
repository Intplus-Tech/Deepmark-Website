import Header from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React, { useEffect } from "react";

const PrivacyAndPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-10">
      <Header />
      <main className="overflow-hidden">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyAndPolicy;
