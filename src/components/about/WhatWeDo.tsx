import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, GitBranch, Lightbulb, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, descriptionRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Target,
      title: "Depth of Sector Expertise",
      description: "Our research is informed by deep, cross-industry knowledge, allowing us to quickly grasp your unique business context and competitive landscape.",
    },
    {
      icon: GitBranch,
      title: "End-to-End Methodology",
      description: "From study design and data collection to advanced analysis and strategic synthesis, we provide a seamless, integrated approach.",
    },
    {
      icon: Lightbulb,
      title: "Actionable Intelligence",
      description: "We go beyond raw data to deliver strategic recommendations that are practical, actionable, and designed to drive measurable business outcomes.",
    },
    {
      icon: CheckCircle2,
      title: "Rigorous Precision",
      description: "Our commitment to methodological integrity and data quality ensures that every insight we deliver is reliable, accurate, and trustworthy.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm mb-4 uppercase tracking-wider">
          What we do
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We deliver deep market intelligence that illuminates opportunities and informs strategy.
            </h2>
          </div>
          <div>
            <p ref={descriptionRef} className="text-muted-foreground text-base leading-relaxed mb-6">
              With over 25 years of specialized experience, we have guided more than 50 client projects, developing unmatched sector expertise and a profound understanding of the nuanced factors that drive market behavior.
            </p>
            <p ref={descriptionRef} className="text-muted-foreground text-base leading-relaxed">
              Here are the key differentiators that separate us from other firms:
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
