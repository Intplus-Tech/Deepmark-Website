import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "@/assets/about-hero-bg.jpg";

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      ).fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <p className="text-white/80 text-sm mb-4 uppercase tracking-wider">Who We Are</p>
        <h1
          ref={headingRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          We are the premier authority in market intelligence, built on a legacy of research excellence.
        </h1>
        <p
          ref={textRef}
          className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We deliver clarity and strategic direction by transforming complex market data into actionable business intelligence. Our approach is rooted in deep industry experience and methodological precision, providing the insights you need to navigate competitive landscapes with confidence.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
