import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Facebook, Linkedin, Twitter } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/logo-dark.svg";
import Union from "@/assets/footer-union.svg";

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
    <footer ref={footerRef} className="">
      <div className="">
        <div className="mb-16 bg-[hsl(var(--footer-bg))] py-16 relaltive">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Stay Informed with <br className="hidden md:block" /> Deepmark
                Insights
              </h2>
              <p className="text-white/70 mb-6 max-w-2xl">
                Get authoritative market intelligence direct to your inbox
              </p>
              <p className="text-white/60 text-sm mb-6 max-w-2xl">
                The latest research, sector analysis, and strategic insights,
                sent straight to <br className="hidden md:block" /> your inbox
                every month.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full items-end">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border-white/10 h-16 text-white placeholder:text-white/40 max-w-[600px] rounded-none md:mb-4"
              />
              <Button className="bg-white w-full md:w-fit rounded-none ml-auto h-12  hover:bg-white/90 text-[hsl(var(--footer-bg))] font-semibold">
                <span className="flex items-center gap-12">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
            <img
              src={Union}
              alt="Footer Decorative Element"
              className="w-full block"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12 container max-w-7xl mx-auto text-foreground">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={logo}
                alt="Deepmark Insight Data"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm mb-6 max-w-[400px]">
              Deepmark Insight Data transforms complex market information into
              profound clarity, empowering businesses to make strategic
              decisions with confidence.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className=" transition-colors size-10 rounded-full flex items-center justify-center border">
                <Facebook size={16} strokeWidth={0.5} />
              </a>
              <a href="#" className=" transition-colors size-10 rounded-full flex items-center justify-center border">
                <Linkedin size={16} strokeWidth={0.5} />
              </a>
              <a href="#" className=" transition-colors size-10 rounded-full flex items-center justify-center border">
                <Twitter size={16} strokeWidth={0.5} />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className=" transition-colors text-sm hover:underine hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className=" transition-colors text-sm hover:underine hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-lg">Sector</h3>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className=" transition-colors text-sm hover:underine hover:underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 border-t container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 text-sm text-foreground">
              <Link to="/privacy" className="transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="transition-colors">
                Terms of Use
              </Link>
              <span>•</span>
              <Link to="/cookies" className="transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-foreground">
              Copyright © 2025 Deepmark Insight Data. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
