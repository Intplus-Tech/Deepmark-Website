import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#C3D1E4] via-[#b0bccc] to-[#FFFFFF] relative overflow-hidden text-[#31456A]">
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 w-1/3 sm:w-2/5 lg:w-1/3 xl:w-[30%] z-0 pointer-events-none">
        <Image
          src="/laptop.png"
          alt="Laptop with colorful display"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-1 mb-8 lg:mb-12">
          <Image
            src="/logo.svg"
            alt="Deepmark Insight Data"
            width={120}
            height={46}
            className="h-[clamp(2rem,4vw,2.5rem)] sm:h-[clamp(2.5rem,5vw,3rem)] w-auto transition-all duration-300"
          // Responsive height for logo
          />
          <span className="flex flex-col font-medium text-[#0A1A35] text-[clamp(0.85rem,2vw,1.1rem)] sm:text-[clamp(1rem,2.5vw,1.25rem)]">
            <p className="leading-tight sm:leading-5">
              Deepmark <br /> Insight Data
            </p>
          </span>
        </div>

        <div className="max-w-2xl lg:max-w-3xl">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <h1 className="font-bold text-[#31456A] leading-tight text-balance text-[clamp(2rem,5vw,3.5rem)]">
              Deepmark Insight Data is on the Horizon
            </h1>

            {/* Intro Text */}
            <p className="font-semibold leading-relaxed text-pretty text-[clamp(1rem,2vw,1.25rem)]">
              Our new digital home is being built to better serve you with the clarity and precision you expect.
            </p>

            {/* What to Expect Section */}
            <div className="space-y-3">
              <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.95rem,1.5vw,1.1rem)]">
                What to Expect:
              </h2>
              <ul className="space-y-2 text-[#3d4f6b] text-[clamp(0.95rem,1.5vw,1.1rem)]">
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b] mt-1">·</span>
                  <span>Authoritative Market Intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b] mt-1">·</span>
                  <span>Deep-Dive Sector Reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#3d4f6b] mt-1">·</span>
                  <span>Actionable Data-Driven Insights</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.95rem,1.5vw,1.1rem)]">
                  Contact Information:
                </h2>
                <p className="text-[#3d4f6b] leading-relaxed text-pretty text-[clamp(0.95rem,1.5vw,1.1rem)]">
                  In the meantime, for urgent inquiries or to speak with our team about your research needs, please do
                  not hesitate to contact us.
                </p>
              </div>
              <div className="space-y-1 text-[#3d4f6b] text-[clamp(0.95rem,1.5vw,1.1rem)]">
                <p className="break-words">
                  Email:{" "}
                  <a href="mailto:info@deepmarkinsight.com" className="text-[#5b7a9e] underline">
                    info@deepmarkinsight.com
                  </a>
                </p>
                <p>Phone: +25 803 581 0248</p>
              </div>
            </div>

            {/* Stay Informed Section */}
            <div className="space-y-4">
              <h2 className="text-[#3d4f6b] font-semibold text-[clamp(0.95rem,1.5vw,1.1rem)]">
                Stay Informed.
              </h2>
              <p className="text-[#3d4f6b] leading-relaxed text-pretty text-[clamp(0.95rem,1.5vw,1.1rem)]">
                Be the first to access our insights when we launch. Leave your email below to receive updates.
              </p>
              <form className="flex flex-col gap-3 sm:gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full sm:max-w-4xl py-5 rounded-lg bg-[#E3EDF7]/50 text-[#3d4f6b] placeholder:text-[#1c324d] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] focus:outline-none transition-shadow duration-300 focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  className="w-full sm:w-fit px-8 py-6 rounded-lg text-sm hover:bg-[#eef2f5] sm:text-base bg-[#E3EDF7] text-[#31456A] shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.8)] active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)] font-normal transition-shadow duration-300"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 lg:mt-24 text-center lg:text-left max-w-2xl lg:max-w-3xl">
          <p className="text-[#8a9aae] text-[clamp(0.75rem,1vw,0.95rem)]">
            © Copyrights Deepmark Insight | All Rights Reserved
          </p>
        </footer>
      </div>
    </main>
  )
}
