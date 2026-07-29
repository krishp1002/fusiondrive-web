import Link from "next/link"

import { EcosystemMap } from "@/components/marketing/ecosystem-map"
import { HeroOrbitalVisual } from "@/components/marketing/hero-orbital-visual"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { SectionHeading } from "@/components/marketing/section-heading"
import { SiteHeader } from "@/components/marketing/site-header"
import { Button } from "@/components/ui/button"
import { currentStageWorkstreams, engineeringGalleryItems, whyUsPoints } from "@/lib/site-content"

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FusionDrive Technologies (OPC) Private Limited",
    description:
      "FusionDrive is building an integrated robotics ecosystem for intelligent machines.",
    url: "https://fusiondrive.ai",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <SiteHeader />

      <main id="main-content" className="relative overflow-hidden pt-16">
        <div className="fd-ambient-background" aria-hidden="true" />

        <ScrollReveal id="hero" className="relative scroll-mt-24">
          <div className="fd-container py-18 sm:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                  FusionDrive
                </p>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Building the Operating Platform for Intelligent Machines
                </h1>
                <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                  FusionDrive is building an integrated robotics ecosystem that
                  unifies motion control, embedded computing, AI, perception, and
                  developer tools into one engineering platform for the next
                  generation of intelligent machines.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button
                    asChild
                    type="button"
                    className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                  >
                    <Link href="#why-us">Explore Our Vision</Link>
                  </Button>
                  <Button
                    asChild
                    type="button"
                    variant="outline"
                    className="border-white/20 bg-white/0 text-white hover:bg-white/10"
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <HeroOrbitalVisual />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal id="why-us" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="Why FusionDrive Exists"
              title="Engineering-first clarity in a fragmented robotics landscape"
              description="We are building FusionDrive because robotics teams deserve infrastructure that lets them focus on invention, not integration overhead."
            />
            <div className="mt-8 space-y-4">
              {whyUsPoints.map((point) => (
                <p
                  key={point}
                  className="max-w-4xl text-pretty text-base leading-relaxed text-slate-300"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal id="ecosystem" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="The Ecosystem We&apos;re Building"
              title="One integrated robotics stack instead of disconnected subsystems"
              description="Hover nodes to inspect each layer. Future modules are marked as coming soon while the architecture stays unified from day one."
            />
            <div className="mt-10">
              <EcosystemMap />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal id="current-stage" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="Current Stage"
              title="Currently in Research & Development"
              description="No fabricated milestones. This is the real engineering work currently underway."
            />
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {currentStageWorkstreams.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-white/12 bg-white/[0.02] px-4 py-3 text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal id="engineering-gallery" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="Engineering Gallery"
              title="An immersive story of how FusionDrive is being built"
              description="From electronics and firmware to testing and manufacturing readiness, every layer is engineered with intent."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringGalleryItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/12 bg-white/[0.02] p-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal id="founder" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="Founder"
              title="Built by engineers for engineers"
              description="FusionDrive was started to close the gap between ambitious robotics ideas and production-ready execution."
            />
            <div className="mt-8 grid gap-6 rounded-2xl border border-white/12 bg-white/[0.02] p-6 md:grid-cols-[220px_1fr]">
              <div className="fd-founder-portrait" aria-hidden="true" />
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-slate-300">
                  The founding vision is simple: remove unnecessary complexity from
                  robotics development and deliver an integrated platform that helps
                  teams ship intelligent machines faster, safer, and with stronger
                  engineering confidence.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  Mission: Build the foundational operating layer for the next decade
                  of robotics. Vision: Make high-performance autonomy accessible to
                  serious engineering teams worldwide.
                </p>
                <Button asChild type="button" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                  <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal id="contact" className="scroll-mt-24">
          <div className="fd-container py-16 sm:py-20">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s build the next generation of robotics together"
              description="For business inquiries, partnerships, and research collaboration."
            />
            <div className="mt-8 grid gap-4 rounded-2xl border border-cyan-300/30 bg-cyan-300/8 p-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase">
                  Contact Email
                </p>
                <Link
                  href="mailto:hello@fusiondrive.ai"
                  className="mt-2 inline-block text-lg font-medium text-white underline-offset-4 hover:underline"
                >
                  hello@fusiondrive.ai
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase">
                  Social
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  LinkedIn • GitHub • YouTube (Future)
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <footer className="fd-container border-t border-white/10 py-10">
          <div className="grid gap-8 text-sm text-slate-300 md:grid-cols-3">
            <div className="space-y-2">
              <p className="font-semibold text-white">
                FusionDrive Technologies (OPC) Private Limited
              </p>
              <p>Registered Office: Available upon request</p>
              <p>CIN: Available upon request</p>
              <p>Email: hello@fusiondrive.ai</p>
              <p>Phone: Available upon request</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Quick Links</p>
              <p>
                <Link href="#why-us" className="hover:text-white">
                  Why Us
                </Link>
              </p>
              <p>
                <Link href="#ecosystem" className="hover:text-white">
                  Ecosystem
                </Link>
              </p>
              <p>
                <Link href="#current-stage" className="hover:text-white">
                  Engineering
                </Link>
              </p>
              <p>
                <Link href="#founder" className="hover:text-white">
                  Founder
                </Link>
              </p>
              <p>
                <Link href="#contact" className="hover:text-white">
                  Contact
                </Link>
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Policies & Channels</p>
              <p>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link href="/terms-and-conditions" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </p>
              <p>
                <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn
                </Link>
              </p>
              <p>
                <Link href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                  GitHub
                </Link>
              </p>
              <p>YouTube (Future)</p>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-500">
            Copyright © {new Date().getFullYear()} FusionDrive. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  )
}
