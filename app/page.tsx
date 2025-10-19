import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C3D1E4] via-[#b0bccc] to-[#FFFFFF] relative overflow-hidden text-[#31456A]">
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-1/3 sm:w-2/5 lg:w-1/3 xl:w-[30%] 2xl:w-[25%] z-0 pointer-events-none">
        <Image
          src="/laptop.png"
          alt="Laptop with colorful display"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-1 mb-4">
          <Image
            src="/logo.svg"
            alt="Deepmark Insight Data"
            width={60}
            height={60}
            className="w-[clamp(40px,8vw,80px)] h-auto"
          />
          <span className="flex flex-col font-medium text-[#0A1A35] text-[clamp(0.85rem,2vw,1.25rem)] sm:text-[clamp(1rem,2.5vw,1.5rem)] lg:text-[clamp(1.1rem,2vw,1.75rem)] xl:text-[clamp(1.2rem,1.8vw,2rem)]">
            <p className="leading-tight sm:leading-5">
              Deepmark <br /> Insight Data
            </p>
          </span>
        </div>

        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-2">
            {/* Main Heading */}
            <h1 className="font-bold text-[#31456A] leading-tight text-balance text-[clamp(1.25rem,3vw,2.5rem)] xl:text-[clamp(1.5rem,2.5vw,3rem)]">
              Deepmark Insight Data <br /> is on the Horizon
            </h1>

            {/* Intro Text */}
            <p className="font-semibold leading-relaxed text-pretty text-[clamp(0.75rem,1.2vw,1.1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
              Our new digital home is being built to better serve you with <br /> the clarity and precision you expect.
            </p>

            {/* What to Expect Section */}
            <div className="space-y-1">
              <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                What to Expect:
              </h2>
              <ul className="space-y-1 text-[#3d4f6b] text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b]">·</span>
                  <span>Authoritative Market Intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b]">·</span>
                  <span>Deep-Dive Sector Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b]">·</span>
                  <span>Actionable Data-Driven Insights</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                  Contact Information:
                </h2>
                <p className="text-[#3d4f6b] leading-relaxed text-pretty text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                  In the meantime, for urgent inquiries or to speak with our team about your research <br /> needs, please do
                  not hesitate to contact us.
                </p>
              </div>
              <div className="text-[#3d4f6b] text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                <p className="break-words">
                  Email:{" "}
                  <a href="mailto:info@deepmarkinsight.com" className="text-[#5b7a9e] underline">
                    info@deepmarkinsight.com
                  </a>
                </p>
                <p>Phone: +234 803 5816 248</p>
              </div>
            </div>

            {/* Stay Informed Section */}
            <div className="space-y-2">
              <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                Stay Informed.
              </h2>
              <p className="text-[#3d4f6b] leading-relaxed text-pretty text-[clamp(0.75rem,1.2vw,1rem)] xl:text-[clamp(0.85rem,1vw,1.25rem)]">
                Be the first to access our insights when we launch. Leave your email below to receive updates.
              </p>
              <form className="flex flex-col gap-3 sm:gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:max-w-xl rounded-lg bg-[#E3EDF7]/50 text-[#3d4f6b] placeholder:text-[#1c324d] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none transition-shadow duration-300 focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  className="w-full sm:w-fit rounded-lg text-sm hover:bg-[#eef2f5] sm:text-base bg-[#E3EDF7] text-[#31456A] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] font-normal transition-shadow duration-300"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-4 lg:text-left max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
          <p className="text-[#8a9aae] text-[clamp(0.6rem,0.8vw,0.875rem)]">
            © Copyrights Deepmark Insight | All Rights Reserved
          </p>
        </footer>
      </div>
    </main>
  )
}