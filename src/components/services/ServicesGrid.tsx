import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckIcon } from "lucide-react";
import service1 from "@/assets/service-1.webp";
import service2 from "@/assets/service-2.webp";
import service3 from "@/assets/service-3.webp";

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

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
        // convert HTMLCollection to array safely; fallback to []
        Array.from(cardsRef.current?.children ?? []),
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

    // If route included #service, scroll into view after render
    const scrollToHash = (smooth = true) => {
      if (typeof window === "undefined") return;
      if (window.location.hash === "#service" && sectionRef.current) {
        // small delay to ensure the target is mounted
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({
            behavior: smooth ? "smooth" : "auto",
            block: "start",
          });
          // ensure ScrollTrigger recalculates positions after scroll
          ScrollTrigger.refresh();
        }, 60);
      }
    };

    // on mount, attempt a scroll if hash present
    scrollToHash(false);

    // also listen to hash changes (handles clicks when already on page)
    const onHashChange = () => scrollToHash(true);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      ctx.revert();
    };
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
    // <section id="service"> so /service#service scrolls here
    <section id="service" ref={sectionRef} className="py-10 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-px bg-foreground/20" />
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
            <div key={index} className="border-one">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div>
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
