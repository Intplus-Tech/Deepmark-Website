import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Map,
  Award,
  TrendingUp,
  Package,
  FileText,
  Smartphone,
  Network,
  CheckIcon,
} from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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

  const services = [
    {
      title: "Ad Hoc Studies",
      description:
        "Our tailored research projects are designed to answer your specific, one-off business questions, providing immediate and actionable insight for critical decision-making.",
      features: [
        "Strategic Problem-Solving",
        "Custom Methodology",
        "Rapid Insight Generation",
      ],
      image: service1,
    },
    {
      title: "Brand Health Tracking",
      description:
        "Ongoing measurement of your brand’s vital signs—including awareness, usage, and perception—to monitor performance and guide your long-term marketing strategy.",
      features: [
        "Performance Benchmarking",
        "Trend Analysis",
        "ROI Measurement",
      ],
      image: service2,
    },
    {
      title: "Consumer Usage & Attitudes",
      description:
        "In-depth profiling of your target market to understand the underlying motivations, routines, and attitudes that drive category behavior and brand choice.",
      features: [
        "Behavioral Pattern Analysis",
        "Motivation & Driver Identification",
        "Market Segmentation",
      ],
      image: service3,
    },
    {
      title: "Customer Satisfaction Surveys",
      description:
        "Systematic measurement of customer experience and loyalty to identify key drivers of satisfaction, mitigate churn, and foster long-term brand advocacy.",
      features: [
        "Loyalty Driver Analysis",
        "Experience Gap Identification",
        "Retention Strategy Development",
      ],
      image: service1,
    },
    {
      title: "Advertising Research",
      description:
        "Pre- and post-campaign analysis that measures impact, message recall, and brand lift to maximize the effectiveness and return on investment of your marketing communications.",
      features: [
        "Message Recall Testing",
        "Brand Lift Measurement",
        "Creative Optimization",
      ],
      image: service2,
    },
    {
      title: "Full Mix Product Testing",
      description:
        "Rigorous in-home or central location testing that evaluates product performance, acceptability, and key attributes against competitors to drive launch and guide innovation.",
      features: [
        "Sensory & Attribute Testing",
        "Competitive Benchmarking",
        "Purchase Intent Forecasting",
      ],
      image: service3,
    },
    {
      title: "Distribution Checks",
      description:
        "Comprehensive audits of your product’s retail presence, measuring availability, positioning, and competitive shelf share to optimize sales and supply chain strategy.",
      features: [
        "Shelf Share Analysis",
        "Competitive Positioning",
        "Supply Chain Optimization",
      ],
      image: service1,
    },
    {
      title: "Customer Intercept Surveys",
      description:
        "Real-time consumer feedback gathered at the point of experience, delivering immediate insights into behavior, perceptions, and brand interactions in a natural context.",
      features: [
        "In-Moment Feedback Capture",
        "Experience Quality Assessment",
        "Immediate Insight Generation",
      ],
      image: service2,
    },
    {
      title: "Opinion Poll Studies",
      description:
        "Authoritative measurement of public opinion on social, political, or corporate issues, providing a statistically sound snapshot of the population’s beliefs and sentiments.",
      features: [
        "Public Sentiment Tracking",
        "Policy & Issue Testing",
        "Stakeholder Perception Mapping",
      ],
      image: service3,
    },
  ];

  return (
    <section ref={sectionRef} className="py-10 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-px bg-foreground/20"></div>
          <span className="text-sm text-muted-foreground tracking-wider">
            What We Do
          </span>
        </div>
        <h2
          ref={headingRef}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-4 max-w-4xl"
        >
          Comprehensive solutions designed to transform market complexity into
          your competitive advantage.
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          At Deepmark Insight Data, we deploy a suite of rigorous research
          methodologies to illuminate the path forward for your business. Each
          service is crafted to deliver precise, actionable intelligence.
        </p>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12"
        >
          {services.map((service, index) => (
            <div key={index} className="border-one ">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="">
                <h3 className="text-xl font-semibold text-foreground my-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2 font-medium"
                    >
                      <span className="text-red-500 mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
