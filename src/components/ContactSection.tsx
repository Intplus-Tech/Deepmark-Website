// src/components/ContactSection.tsx
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

type FormState = {
  fullName: string;
  mobile: string;
  email: string;
  challenge: string;
  message: string;
};

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    mobile: "",
    email: "",
    challenge: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // initialize EmailJS public key (optional)
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
    if (publicKey) {
      try {
        emailjs.init(publicKey);
      } catch (err) {
        if (import.meta.env.DEV) console.warn("EmailJS init warning:", err);
      }
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: -80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(formRef.current?.children || [], {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: 80,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const resetForm = () =>
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      challenge: "",
      message: "",
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setIsSubmitting(false);
      toast({
        title: "Email not configured",
        description: "Contact service is not configured. Please try later.",
        variant: "destructive",
      });
      return;
    }

    const templateParams = {
      to_name: "Deepmark Insight",
      from_name: formData.fullName,
      from_email: formData.email,
      from_phone: formData.mobile || "Not provided",
      challenge: formData.challenge || "Not specified",
      message: formData.message,
      current_year: new Date().getFullYear().toString(),
    };

    try {
      const res = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (res?.status !== 200) {
        throw new Error("Failed to send email");
      }

      // Show success UI instead of toast
      setIsSuccess(true);
      resetForm();
    } catch (err: any) {
      if (import.meta.env.DEV) console.error("EmailJS error:", err);
      toast({
        title: "Failed to send message",
        description:
          err?.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-[hsl(var(--hero-overlay))] text-[hsl(var(--text-light))]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-px bg-white/20"></div>
          <span className="text-sm text-[hsl(var(--text-muted))] uppercase tracking-wider">
            Let's Talk
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            ref={textRef}
            className="space-y-8 h-full flex flex-col justify-between"
          >
            <h2 className="text-4xl font-bold text-white leading-tight">
              Not sure which solution fits your challenge? Let's find the right
              insight together.
            </h2>

            <p className="text-[hsl(var(--text-muted))] text-sm">
              Your information is confidential and secure. We do not share your
              data.
            </p>
          </div>

          {/* Right column: either success UI or form */}
          <div className="min-h-[420px]">
            {isSuccess ? (
              <div className="relative h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-white/5 rounded-xl border border-white/10 animate-fade-in">
                <CheckCircle2 className="w-20 h-20 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-[hsl(var(--text-muted))] max-w-md">
                  Someone from our team will get back to you within{" "}
                  <span className="font-semibold">24 hours</span>.
                </p>

                <Button
                  variant="ghost"
                  onClick={() => setIsSuccess(false)}
                  className="absolute top-4 right-4 rounded-full p-2 hover:bg-white/5"
                >
                  <X className="w-4 h-4 text-white/80" />
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="flex flex-col xl:flex-row gap-8 items-center w-full">
                  <div className="relative w-full">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      type="text"
                      placeholder="Full Name*"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="pl-12 bg-white/5 border-white/10 w-full text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
                      required
                    />
                  </div>

                  <div className="relative  w-full">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      type="tel"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      className="pl-12 bg-white/5 border-white/10 w-full text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                  <Input
                    type="email"
                    placeholder="Email Address*"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20"
                    required
                  />
                </div>

                <Select
                  value={formData.challenge}
                  onValueChange={(value) =>
                    setFormData({ ...formData, challenge: value })
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white/60 focus:bg-white/10 focus:border-white/20">
                    <SelectValue placeholder="What challenge can we help you solve? [Select one]" />
                  </SelectTrigger>
                  <SelectContent className="bg-[hsl(var(--hero-overlay))] border-white/10">
                    <SelectItem className="text-white" value="market-research">
                      Market Research
                    </SelectItem>
                    <SelectItem className="text-white" value="brand-tracking">
                      Brand Health Tracking
                    </SelectItem>
                    <SelectItem
                      className="text-white"
                      value="customer-satisfaction"
                    >
                      Customer Satisfaction
                    </SelectItem>
                    <SelectItem
                      className="text-white"
                      value="advertising-research"
                    >
                      Advertising Research
                    </SelectItem>
                    <SelectItem className="text-white" value="product-testing">
                      Product Testing
                    </SelectItem>
                    <SelectItem className="text-white" value="other">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us more about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-32 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:bg-white/10 focus:border-white/20 resize-none"
                  required
                />

                <Button
                  type="submit"
                  className="bg-white rounded-full text-[hsl(var(--hero-overlay))] hover:bg-white/90 font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get in Touch"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
