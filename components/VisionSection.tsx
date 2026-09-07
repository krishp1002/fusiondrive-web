import { ScrollReveal } from "@/components/ScrollReveal"
import { Layers, Target, Rocket } from "lucide-react"

export function VisionSection() {
  const stackedBlocks = [
    {
      icon: Layers,
      label: "CURRENT STAGE",
      title: "Building the Foundation",
    },
    {
      icon: Target,
      label: "FOCUS",
      title: "Robotics • Embedded Systems • AI",
    },
    {
      icon: Rocket,
      label: "VISION",
      title: "Integrated Robotics Ecosystem",
    },
  ]

  return (
    <section 
      className="py-24 sm:py-28 lg:py-32 bg-[#F8FAFC] border-b border-slate-200/80" 
      aria-label="Vision & Mission"
    >
      <div className="fd-container">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ── Left Column: Vision & Mission (65%) ── */}
            <div className="lg:col-span-8">
              {/* Eyebrow */}
              <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#1677FF] mb-4">
                ENGINEERING THE FUTURE OF ROBOTICS
              </p>

              {/* Large Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                Building the Robotics Platform for Intelligent Machines
              </h1>

              {/* Supporting Paragraph */}
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                FusionDrive is building toward an integrated robotics ecosystem where
                motion control, embedded electronics, AI computing, sensing, and
                developer tools can work together through a common architecture. Our
                mission is to simplify robotics development through modular, scalable
                technologies.
              </p>
            </div>

            {/* ── Right Column: Stacked Feature Blocks (35%) ── */}
            <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-slate-200/90 flex flex-col justify-between h-full pt-1">
              {stackedBlocks.map((block, index) => {
                const Icon = block.icon
                return (
                  <div
                    key={block.label}
                    className={`flex flex-col ${
                      index > 0 ? "pt-6 mt-6 border-t border-slate-200/80" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
                      <span className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#1677FF]">
                        {block.label}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                      {block.title}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
