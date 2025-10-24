import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Smartphone, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    challenge: "",
    message: ""
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        x: -80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(formRef.current?.children || [], {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        },
        x: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      challenge: "",
      message: ""
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-[hsl(var(--hero-overlay))] text-[hsl(var(--text-light))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={textRef} className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/20"></div>
              <span className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wider">
                Let's Talk
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Not sure which solution fits your challenge? Let's find the right insight together.
            </h2>

            <p className="text-[hsl(var(--text-muted))] text-sm">
              Your information is confidential and secure. We do not share your data.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                type="text"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
                required
              />
            </div>

            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                type="tel"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <Input
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
                required
              />
            </div>

            <Select value={formData.challenge} onValueChange={(value) => setFormData({ ...formData, challenge: value })}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white/60 focus:bg-white/10 focus:border-white/20">
                <SelectValue placeholder="What challenge can we help you solve? [Select one]" />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(var(--hero-overlay))] border-white/10">
                <SelectItem value="market-research">Market Research</SelectItem>
                <SelectItem value="brand-tracking">Brand Health Tracking</SelectItem>
                <SelectItem value="customer-satisfaction">Customer Satisfaction</SelectItem>
                <SelectItem value="advertising-research">Advertising Research</SelectItem>
                <SelectItem value="product-testing">Product Testing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              placeholder="Tell us more about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-32 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20 resize-none"
              required
            />

            <Button 
              type="submit" 
              className="bg-white text-[hsl(var(--hero-overlay))] hover:bg-white/90 font-semibold group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
