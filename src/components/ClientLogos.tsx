import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import larfarge from "@/assets/partners/image 151.png";
import bbc from "@/assets/partners/image 152.png";
import mtn from "@/assets/partners/image 177.png";
import guinness from "@/assets/partners/guiness.png";
import honeywell from "@/assets/partners/image 157.png";
import grandoak from "@/assets/partners/image 158.png";
import hatytude from "@/assets/partners/image 161.png";
import promasidor from "@/assets/partners/image 162.png";
import inlaks from "@/assets/partners/image 159.png";
import ninemobile from "@/assets/partners/ninemobile.png";
import twinings from "@/assets/partners/image 155.png";
import laticmarine from "@/assets/partners/image 166.png";
import edge from "@/assets/partners/image 171.png";
import fmn from "@/assets/partners/image 156.png";
import hill from "@/assets/partners/image 172.png";
import ipsos from "@/assets/partners/image 173.png";
import trs from "@/assets/partners/image 174.png";
import wfp from "@/assets/partners/image 175.png";
import nosakgroup from "@/assets/partners/image 169.png";
import strausscorp from "@/assets/partners/image 168.png";
import kpmg from "@/assets/partners/image 176.png";
import ey from "@/assets/partners/image 165.png";
import pwc from "@/assets/partners/image 164.png";
import malariaconsortium from "@/assets/partners/image 170.png";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "LaFarge", color: "#006341", logo: larfarge },
  { name: "BBC Media Action", color: "#000000", logo: bbc },
  { name: "MTN", color: "#FFCC00", logo: mtn },
  { name: "Guinness", color: "#000000", logo: guinness },
  { name: "Honeywell", color: "#C41E3A", logo: honeywell },
  { name: "Grandoak", color: "#C41E3A", logo: grandoak },
  { name: "Hatytude Consulting", color: "#E31837", logo: hatytude },
  { name: "Promasidor", color: "#E31837", logo: promasidor },
  { name: "Inlaks", color: "#C41E3A", logo: inlaks },
  { name: "Nine Mobile", color: "#C41E3A", logo: ninemobile },
  { name: "Twinings", color: "#8B4513", logo: twinings },
  { name: "Latic Marine", color: "#003366", logo: laticmarine },
  { name: "Edge", color: "#003366", logo: edge },
  { name: "FMN", color: "#006341", logo: fmn },
  { name: "Hill", color: "#006341", logo: hill },
  { name: "Ipsos Indonesia", color: "#0066CC", logo: ipsos },
  { name: "TRS", color: "#0066CC", logo: trs },
  { name: "World Food Programme", color: "#0066CC", logo: wfp },
  { name: "Nosak Group", color: "#FF6600", logo: nosakgroup },
  { name: "Strauss Corp", color: "#003366", logo: strausscorp },
  { name: "KPMG", color: "#0066CC", logo: kpmg },
  { name: "EY", color: "#FFE600", logo: ey },
  { name: "PwC", color: "#FF6600", logo: pwc },
  { name: "Malaria Consortium", color: "#008B8B", logo: malariaconsortium }
];

const ClientLogos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(logosRef.current?.children || [], {
        scrollTrigger: {
          trigger: logosRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Heading */}
        <div
          ref={headingRef}
          className="flex flex-col mb-12 gap-6 justify-center md:pb-40"
        >
          <div >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-foreground/20"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Our Reach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Trusted by
              <br />
              Industry Leaders
            </h2>
          </div>

          <Button
            variant="default"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 group w-fit"
          >
            View More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Logos Grid */}
        <div
          ref={logosRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center col-span-2"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              {/* uniform container: set a fixed height and allow images to scale inside */}
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
