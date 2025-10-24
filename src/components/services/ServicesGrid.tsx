import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Map, Award, TrendingUp, Package, FileText, Smartphone, Network } from "lucide-react";
import consumerBehavior from "@/assets/service-consumer-behavior.jpg";
import competitive from "@/assets/service-competitive.jpg";
import marketLandscape from "@/assets/service-market-landscape.jpg";
import brandResearch from "@/assets/service-brand-research.jpg";
import newMarket from "@/assets/service-new-market.jpg";
import productSector from "@/assets/service-product-sector.jpg";
import feasibility from "@/assets/service-feasibility.jpg";
import consumerTech from "@/assets/service-consumer-tech.jpg";
import digitalB2B from "@/assets/service-digital-b2b.jpg";

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
      icon: Users,
      title: "Consumer Behavior Analysis",
      description: "In-depth study of consumer preferences, purchasing patterns, and decision-making processes to inform product development and marketing strategies.",
      features: [
        "Purchase behavior mapping",
        "Consumer segmentation",
        "Trend forecasting",
      ],
      image: consumerBehavior,
    },
    {
      icon: Target,
      title: "Competitive Intelligence",
      description: "Comprehensive analysis of competitor strategies, market positioning, and performance to identify opportunities and threats.",
      features: [
        "Competitor benchmarking",
        "Performance monitoring",
        "Strategic gap analysis",
      ],
      image: competitive,
    },
    {
      icon: Map,
      title: "Market Landscape Survey",
      description: "Holistic assessment of market structure, key players, regulatory environment, and growth dynamics across industries.",
      features: [
        "Market size estimation",
        "Regulatory landscape review",
        "Growth opportunity identification",
      ],
      image: marketLandscape,
    },
    {
      icon: Award,
      title: "Brand Deep Research",
      description: "Detailed exploration of brand perception, equity, and positioning to strengthen brand strategy and customer loyalty.",
      features: [
        "Brand equity measurement",
        "Positioning strategy",
        "Customer perception analysis",
      ],
      image: brandResearch,
    },
    {
      icon: TrendingUp,
      title: "New Market Profiling",
      description: "Strategic analysis of emerging markets and new business opportunities to guide market entry and expansion decisions.",
      features: [
        "Market entry assessment",
        "Risk and opportunity analysis",
        "Competitive landscape profiling",
      ],
      image: newMarket,
    },
    {
      icon: Package,
      title: "Product Sector Insights",
      description: "Sector-specific research delivering actionable intelligence on product trends, innovation, and competitive dynamics.",
      features: [
        "Product performance tracking",
        "Innovation trend monitoring",
        "Category dynamics analysis",
      ],
      image: productSector,
    },
    {
      icon: FileText,
      title: "Market Feasibility Studies",
      description: "Rigorous assessment of business viability, demand potential, and market readiness for new products or services.",
      features: [
        "Demand forecasting",
        "Financial viability analysis",
        "Market readiness evaluation",
      ],
      image: feasibility,
    },
    {
      icon: Smartphone,
      title: "Consumer Technology Survey",
      description: "Analysis of technology adoption, usage patterns, and consumer attitudes toward emerging digital solutions.",
      features: [
        "Technology adoption tracking",
        "Usage pattern analysis",
        "Digital transformation insights",
      ],
      image: consumerTech,
    },
    {
      icon: Network,
      title: "Digital B2B Industry",
      description: "Specialized research on B2B digital ecosystems, procurement trends, and enterprise technology landscapes.",
      features: [
        "B2B buyer behavior analysis",
        "Enterprise technology trends",
        "Supply chain digital insights",
      ],
      image: digitalB2B,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-2xl md:text-3xl font-bold text-foreground mb-4 max-w-4xl"
        >
          Comprehensive solutions designed to transform market complexity into your competitive advantage.
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
