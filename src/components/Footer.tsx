import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current.children, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  const companyLinks = [
    { label: "About us", path: "/about" },
    { label: "Our Insights", path: "/insights" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Ad Hoc Studies", path: "/services/ad-hoc" },
    { label: "Brand Health Tracking", path: "/services/brand-health" },
    { label: "Consumer Insights", path: "/services/consumer-insights" },
    { label: "Sector Analysis", path: "/services/sector-analysis" },
  ];

  const sectorLinks = [
    { label: "FMCG & Retails", path: "/sectors/fmcg" },
    { label: "Healthcare & Pharma", path: "/sectors/healthcare" },
    { label: "Financial Services", path: "/sectors/financial" },
    { label: "Technology & Media", path: "/sectors/technology" },
    { label: "Government & NGOs", path: "/sectors/government" },
  ];

  return (
    <footer ref={footerRef} className="bg-[hsl(var(--footer-bg))] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Informed with Deepmark Insights
          </h2>
          <p className="text-white/70 mb-6 max-w-2xl">
            Get authoritative market intelligence direct to your inbox
          </p>
          <p className="text-white/60 text-sm mb-6 max-w-2xl">
            The latest research, sector analysis, and strategic insights, sent straight to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 flex-1"
            />
            <Button className="bg-white hover:bg-white/90 text-[hsl(var(--footer-bg))] font-semibold">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-[hsl(var(--footer-bg))] font-bold text-sm">DI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm leading-none">Deepmark</span>
                  <span className="text-white/80 text-xs leading-none">Insight Data</span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Deepmark Insight Data transforms complex market information into profound clarity, empowering businesses to make strategic decisions with confidence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sector</h3>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-white/60">
              Copyright © 2025 Deepmark Insight Data. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
