import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  { name: "LaFarge", color: "#006341" },
  { name: "BBC Media Action", color: "#000000" },
  { name: "MTN", color: "#FFCC00" },
  { name: "Guinness", color: "#000000" },
  { name: "Honeywell", color: "#C41E3A" },
  { name: "Geoallies", color: "#4CAF50" },
  { name: "Hatytude Consulting", color: "#E31837" },
  { name: "Prosavithor", color: "#FF8C00" },
  { name: "Inlaks", color: "#C41E3A" },
  { name: "Nestlé", color: "#009F4D" },
  { name: "Twinings", color: "#8B4513" },
  { name: "Latic Marine", color: "#003366" },
  { name: "Lincoedge", color: "#FF6B35" },
  { name: "FMN", color: "#006341" },
  { name: "FHIL", color: "#E31837" },
  { name: "Ipsos Indonesia", color: "#0066CC" },
  { name: "TRS", color: "#0066CC" },
  { name: "World Food Programme", color: "#0066CC" },
  { name: "Nosak Group", color: "#FF6600" },
  { name: "Strauss Corp", color: "#003366" },
  { name: "KPMG", color: "#0066CC" },
  { name: "EY", color: "#FFE600" },
  { name: "PwC", color: "#FF6600" },
  { name: "Malaria Consortium", color: "#008B8B" }
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
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-foreground/20"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Our Reach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Trusted by<br />Industry Leaders
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

        <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="text-center">
                <div 
                  className="font-bold text-sm md:text-base transition-transform group-hover:scale-105"
                  style={{ color: client.color }}
                >
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
