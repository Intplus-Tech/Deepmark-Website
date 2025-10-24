import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/Union-1.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-40 pb-20 px-6 md:px-12 bg-background max-w-7xl mx-auto">
      <div className="mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8 md:col-span-2">
            <div ref={headingRef}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-foreground/20"></div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Why Choose DEEPMARK
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-10">
                We are a premier partner for authoritative market intelligence,
                built on a over 25-year legacy of research excellence.
              </h2>
            </div>

            <div ref={contentRef} className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Custom Research Design
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deepmark Insight Data provides end-to-end consultancy for your
                  research needs, ensuring every study is meticulously crafted to address
                  your specific strategic challenges.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Our research design experts delve deep into your business objectives to
                construct a robust methodological framework. We ensure the approach
                is quantifying sound, logically flawless, and precisely targeted to
                deliver the clear, actionable insights you require.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-6">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Next:</span>
                  <span className="text-sm text-primary font-medium">Brand Health Tracking</span>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full border">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              <Button variant="link" className="text-primary group">
                View all Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div ref={imageRef} className="relative flex items-center justify-end">
            <img
              src={productsImage}
              alt="Research products showcase"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
