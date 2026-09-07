import { engineeringEvidence } from "@/lib/site-content"
import { ScrollReveal } from "@/components/ScrollReveal"
import { ProductImage } from "@/components/ProductImage"

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      aria-label="Engineering Evidence"
      className="fd-section bg-white"
    >
      <div className="fd-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-14">
            <p className="fd-eyebrow mb-3">ENGINEERING EVIDENCE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] max-w-2xl">
              Built, tested, and engineered in-house.
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl text-base leading-relaxed">
              Selected evidence from FusionDrive&apos;s hardware development,
              embedded systems, robotics integration, PCB engineering, and
              mechanical design work.
            </p>
          </div>
        </ScrollReveal>

        {/* ── 4-Card Evidence Grid (2x2 Balanced Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {engineeringEvidence.map((item, i) => {
            const isPcb = item.id === "pcb-design"
            const isCad = item.id === "rover-cad" || item.id === "omni-ball-cad"
            const isIntegration = item.id === "system-integration"

            return (
              <ScrollReveal key={item.id} delay={i * 60} className="h-full">
                <article
                  aria-label={item.title}
                  className="group rounded-2xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  {/* Image Container with tailored background & framing */}
                  <div
                    className={`relative w-full aspect-[16/10] border-b border-slate-200/80 overflow-hidden ${
                      isPcb
                        ? "bg-[#0B0F19] p-2 sm:p-3 flex items-center justify-center"
                        : isCad
                        ? "bg-white p-2 sm:p-3 flex items-center justify-center"
                        : "bg-slate-100"
                    }`}
                  >
                    <ProductImage
                      src={item.image}
                      alt={item.imageAlt}
                      label={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="w-full h-full"
                      imgClassName={
                        isIntegration
                          ? "object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-[1.015]"
                          : "object-contain object-center w-full h-full transition-transform duration-500 group-hover:scale-[1.015]"
                      }
                      priority={i < 2}
                    />
                  </div>

                  {/* Content Block */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF] mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#555] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
