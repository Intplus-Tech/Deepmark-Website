// src/components/ContactForm.tsx
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const formSchema = z.object({
  fullname: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message:
        "Name can only contain letters, spaces, hyphens, and apostrophes",
    }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 digits" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Please enter a valid phone number" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

type EmailPayload = {
  fullname: string;
  email: string;
  phone?: string;
  message: string;
};

async function sendEmail(payload: EmailPayload) {
  const env = import.meta.env as {
    VITE_EMAILJS_SERVICE_ID?: string;
    VITE_EMAILJS_TEMPLATE_ID?: string;
    VITE_EMAILJS_PUBLIC_KEY?: string;
  };

  const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY;

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "Email service is not configured. Missing environment variables."
    );
  }

  const templateParams = {
    from_name: payload.fullname,
    from_email: payload.email,
    from_phone: payload.phone ?? "",
    message: payload.message,
    current_year: new Date().getFullYear().toString(),
  };

  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );

  if (response?.status !== 200) {
    throw new Error("Failed to send email via EmailJS");
  }

  return response;
}

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false); // ⬅ success UI toggle

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      message: "",
    },
  });

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
      gsap.fromTo(
        formRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );
    }, formRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormValues) => {
    const sanitizedData = {
      fullname: data.fullname.trim(),
      phone: data.phone.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim(),
    };

    try {
      await sendEmail(sanitizedData);

      setIsSuccess(true);
      form.reset();
    } catch (error: any) {
      if (import.meta.env.DEV) console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description:
          error?.message || "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div ref={formRef} className="">
      {isSuccess ? (
        // Success message UI
        <div className="relative h-full flex flex-col items-center justify-center text-center py-20 px-6 bg-muted/30 rounded-xl animate-fade-in">
          <CheckCircle2 strokeWidth={0.5} className="w-24 h-24 mb-4" />
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground max-w-md">
            Someone from our team will get back to you{" "}
            <br className="hidden md:block" /> within{" "}
            <span className="font-bold">24 hours.</span>
          </p>
          <Button
            variant="ghost"
            onClick={() => setIsSuccess(false)}
            className="absolute top-4 right-4 rounded-full p-2 hover:bg-transparent hover:text-foreground"
          >
            <X strokeWidth={0.5} className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        // Original form UI
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number"
                      type="tel"
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      className="min-h-[150px] bg-background resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-4 text-center md:text-left items-center justify-between">
              <div className="text-sm font-normal text-muted-foreground cursor-pointer">
                By submitting this form, I acknowledge receipt{" "}
                <br className="hidden md:block" /> of the Deepmark Insight
                Privacy Policy
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-fit rounded-full bg-[#31456A] hover:bg-primary/90 text-white"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                <ArrowRight />
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
