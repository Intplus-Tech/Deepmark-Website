import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import expertiseImage from "@/assets/expertise.jpg";
import precisionImage from "@/assets/precision.jpg";
import clarityImage from "@/assets/clarity.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    image: expertiseImage,
    title: "25+ Years of Expertise",
    description: "Leverage a legacy of research leadership and proven success to guide your most critical decisions."
  },
  {
    image: precisionImage,
    title: "Uncompromising Precision",
    description: "Our commitment to methodological rigor guarantees data integrity and insights you can trust without question."
  },
  {
    image: clarityImage,
    title: "Actionable Clarity",
    description: "We translate complex data into clear, strategic direction, empowering you to act with conviction."
  }
];

const OurValue = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children || [], {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-foreground/20"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Our Value
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            From Deep Data to Marked Meaning
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValue;
