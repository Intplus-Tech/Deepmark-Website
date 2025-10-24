import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/services-hero-bg.jpg";
import { Separator } from "../ui/separator";

const ServicesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          statsRef.current?.children || [],
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "20", label: "Years of Research Excellence", suffix: "+" },
    { number: "500", label: "Projects Successfully Delivered", suffix: "+" },
    { number: "50", label: "Major Client Partnerships", suffix: "+" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center py-20">
        <Separator className="mb-3 w-[30px] mx-auto" />
        <p className="text-white/80 text-sm font-bold mb-12 tracking-wider">
          Services
        </p>

        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl font-semibold text-white mb-16 max-w-4xl mx-auto"
        >
          Delivering insights for <br className="hidden md:block" /> industry
          leaders and institutions
        </h1>

        <div
          ref={statsRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="">
              <div className="text-5xl font-semibold text-white mb-2">
                {stat.number}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-white/90 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div ref={buttonRef}>
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-primary/90 hover:text-white rounded-full px-8 gap-2"
          >
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
