import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/homepage-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: 0.3,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current?.children,
          {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.4"
        );

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        opacity: 0.8,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/70" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10 xl:mt-40">
        <div ref={badgeRef} className="mb-8">
          <Button
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm rounded-full"
          >
            Check out our Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <h1
          ref={headlineRef}
          className="text-4xl md:text-7xl xl:text-6xl font-bold max-w-[90%] text-white mb-6 leading-tight"
        >
          Transform Market Complexity into Your
          <br className="hidden 2xl:block" /> Competitive Advantage.
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl xl:text-xl text-white/90 mb-8 max-w-4xl"
        >
          Deepmark Insight Data delivers the authoritative intelligence and
          clarity you need to inform strategy, drive growth, and make decisions
          with confidence.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-[hsl(var(--hero-overlay))] font-semibold rounded-full px-8"
          >
            Unlock Your Insights
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
