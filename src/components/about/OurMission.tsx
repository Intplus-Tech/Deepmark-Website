import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";
import teamImage from "@/assets/team-union.png";

gsap.registerPlugin(ScrollTrigger);

const OurMission = () => {
  const missionRef = useRef<HTMLElement>(null);
  const purposeRef = useRef<HTMLElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const purposeHeadingRef = useRef<HTMLHeadingElement>(null);
  const purposeImageRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission section animation
      gsap.fromTo(
        missionTextRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
          },
        }
      );

      // Purpose section animations
      gsap.fromTo(
        purposeHeadingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: purposeRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        purposeImageRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: purposeImageRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        valuesRef.current?.children || [],
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
          },
        }
      );
    }, [missionRef, purposeRef]);

    return () => ctx.revert();
  }, []);

  const values = [
    "Integrity",
    "Expertise",
    "Precision",
    "Clarity",
    "Innovation",
    "Accountability",
    "Client Partnership",
  ];

  return (
    <>
      {/* Mission Section */}
      <section
        ref={missionRef}
        className="py-20 bg-[hsl(var(--footer-bg))] text-white"
      >
        <div className="container max-w-7xl mx-auto px-6">
          <div ref={missionTextRef} className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-white/50"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-6">
              To provide businesses with the most authoritative market
              intelligence, transforming complex data into strategic clarity and
              competitive advantage.
            </h2>
            <p className="text-3xl md:text-4xl">
              We bridge the gap between raw information and actionable strategy,
              empowering organizations to navigate market dynamics with
              confidence and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section ref={purposeRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div
            ref={purposeImageRef}
            className="relative w-full h-[400px] mb-12 overflow-hidden"
          >
            <img
              src={teamImage}
              alt="Company Purpose - Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-3 mb-8 mt-20 max-w-7xl mx-auto">
            <div className="w-12 h-px bg-foreground/20"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">
              Our Vision and Values
            </span>
          </div>
          <div className="grid lg:grid-cols-3  gap-12 items-start max-w-7xl mx-auto">
            <div className="lg:col-span-2 mb-8">
              <h3
                ref={purposeHeadingRef}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium 2xl:leading-10 text-foreground mb-6"
              >
                Building a more intelligent business landscape by providing
                unparalleled clarity and strategic direction to organizations.
              </h3>
            </div>

            <div ref={valuesRef} className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
