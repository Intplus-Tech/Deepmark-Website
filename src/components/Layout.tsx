// src/components/Layout.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Remember to wrap your _app.tsx with <HelmetProvider>

// Define the props type
type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div className="">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
