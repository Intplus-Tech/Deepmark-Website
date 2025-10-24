import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactInfo = () => {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current?.children || [],
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
          },
        }
      );
    }, infoRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={infoRef} className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-foreground font-medium mb-1">+234 803 401 6528</p>
            <p className="text-foreground font-medium mb-1">+234 708 985 9785</p>
            <p className="text-muted-foreground text-sm">Mon - Fri | 10am to 5pm WAT</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-foreground font-medium">info@deepmarkinsight.com</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div className="space-y-3">
            <p className="text-foreground font-medium leading-relaxed">
              Deepmark Insight Data Ltd<br />
              Balogunson Village, Ojuelegba,<br />
              Hock Lagos, Nigeria
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              32, Christian Op-Obosi,<br />
              Hock Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <p className="text-foreground font-medium mb-2">
          Interested in working with us?
        </p>
        <a
          href="/service"
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          Explore Jobs →
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
