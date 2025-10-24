import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BarChart3, 
  Megaphone, 
  Heart, 
  ClipboardCheck, 
  Star, 
  Users, 
  Package, 
  FlaskConical, 
  Vote 
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: BarChart3,
    title: "Ad Hoc Studies",
    description: "Tailored research projects designed to answer specific, time-sensitive business questions, providing critical strategic intelligence for critical decision-making."
  },
  {
    icon: Megaphone,
    title: "Advertising Research",
    description: "Pre- and post-campaign analysis that measures impact, message recall, and brand lift to maximize the ROI and effectiveness of your investment of your marketing communications."
  },
  {
    icon: Heart,
    title: "Brand Health Tracker",
    description: "Ongoing measurement of your brand's vital signs—including awareness, usage, perception, and sentiment—to monitor performance and track the impact of your initiatives over time."
  },
  {
    icon: ClipboardCheck,
    title: "Customer Intercept Surveys",
    description: "Real-time feedback captured at critical touch point of experience, delivering immediate intelligence about customer perceptions, and brand interactions in a retail context."
  },
  {
    icon: Star,
    title: "Customer Satisfaction Surveys",
    description: "Systematic measurement of customer experience and loyalty to identify key drivers of satisfaction, mitigate churn, and foster long-term brand advocacy."
  },
  {
    icon: Users,
    title: "Customer Usage, Habits & Attitude Studies",
    description: "In-depth profiling of consumer behavior that reveals the underlying motivations, routines, and attitudes that drive category decisions, and brand choice."
  },
  {
    icon: Package,
    title: "Distribution Checks",
    description: "Comprehensive audits of your product's retail presence, measuring availability, positioning, and compliance and share to determine sales performance and market penetration."
  },
  {
    icon: FlaskConical,
    title: "Full Mix Consumer Product Test",
    description: "Rigorous in-home or central location testing that evaluates product performance, acceptability, and key attributes against competitive and internal product benchmarks to guide innovation."
  },
  {
    icon: Vote,
    title: "Opinion Poll Study (OPS)",
    description: "Authoritative measurement of public opinion on social, political, or corporate issues, presenting a statistically sound snapshot of the prevailing attitudes of relevant audiences."
  }
];

const ResearchServices = () => {
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
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-[hsl(var(--hero-overlay))] text-[hsl(var(--text-light))]">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-white/20"></div>
            <span className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wider">
              Our Research Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
            We offer a comprehensive suite of quantitative and qualitative research solutions designed to answer your most pressing business questions and uncover critical market opportunities.
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-white text-lg font-semibold">
                      {service.title}
                    </CardTitle>
                    <Icon className="h-5 w-5 text-white/60 flex-shrink-0" />
                  </div>
                  <CardDescription className="text-[hsl(var(--text-muted))] text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchServices;
