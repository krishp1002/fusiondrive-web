import { problemBlocks, approachPrinciples } from "@/lib/site-content"
import { ScrollReveal } from "@/components/ScrollReveal"
import {
  Cpu,
  Network,
  Layers,
  Clock,
  Workflow,
  Blocks,
  Code2,
  Bot,
} from "lucide-react"

const problemIcons = [Cpu, Network, Layers, Clock]
const approachIcons = [Workflow, Blocks, Code2, Bot]

export function ProblemSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
      aria-label="Why FusionDrive Exists"
    >
      <div className="fd-container">
        <ScrollReveal>
          {/* Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#1677FF] mb-2.5">
              WHY FUSIONDRIVE EXISTS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-900 leading-[1.2]">
              Robotics development is still too fragmented.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Building a capable robotic system still requires integrating hardware
              and software from dozens of incompatible sources.
            </p>
          </div>

          {/* 2x2 Problem Card Grid — Compact & Content-Driven */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {problemBlocks.map((block, index) => {
              const Icon = problemIcons[index % problemIcons.length]
              return (
                <div
                  key={block.title}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200/60 hover:border-blue-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Top-left blue line icon */}
                    <div className="mb-3 inline-flex">
                      <Icon className="w-4 h-4 text-[#1677FF] stroke-[2.2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5 leading-snug">
                      {block.title}
                    </h3>

                    {/* Body */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {block.body}
                    </p>
                  </div>

                  {/* Technical Impact with thin divider */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-800">
                      <span className="text-[#1677FF]">Technical Impact:</span>{" "}
                      <span className="text-slate-600 font-normal">{block.impact}</span>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function ApproachSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80"
      aria-label="Our Approach"
    >
      <div className="fd-container">
        <ScrollReveal>
          {/* Header */}
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#1677FF] mb-2.5">
              OUR APPROACH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight text-slate-900 leading-[1.2]">
              Build the foundation once. Build more on top of it.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl font-normal">
              FusionDrive is developing modular hardware and embedded systems around
              reusable interfaces, control infrastructure and software integration.
              The goal is to reduce repeated low-level engineering and create a stronger
              foundation for robotic systems.
            </p>
          </div>

          {/* 2x2 Solution Card Grid — Compact & Content-Driven */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {approachPrinciples.map((principle, index) => {
              const Icon = approachIcons[index % approachIcons.length]
              return (
                <div
                  key={principle.title}
                  className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/5 hover:border-blue-300 flex flex-col justify-start"
                >
                  {/* Light blue icon badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] text-[#1677FF] flex items-center justify-center mb-3 flex-shrink-0">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1.5 leading-snug">
                    {principle.title}
                  </h3>

                  {/* Body */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
