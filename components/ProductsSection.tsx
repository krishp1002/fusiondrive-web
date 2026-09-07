import { products } from "@/lib/site-content"
import { ScrollReveal } from "@/components/ScrollReveal"
import { ProductImage } from "@/components/ProductImage"
import { Cpu } from "lucide-react"

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-label="Products"
      className="fd-section bg-white border-y border-[#DCDCDC]"
    >
      <div className="fd-container">
        <ScrollReveal>
          <div className="mb-14">
            <p className="fd-eyebrow mb-3">Current Products</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] max-w-xl">
              What FusionDrive has built.
            </h2>
            <p className="mt-4 text-[#555] max-w-2xl">
              Two working hardware prototypes, currently in firmware development and
              optimization. Not commercially available yet.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-28 sm:space-y-36">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 80}>
              <article
                id={product.id}
                aria-label={product.name}
                className="relative grid gap-10 lg:grid-cols-12 lg:gap-14 items-start"
              >
                {/* ── Left Sticky Photo Column ── */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 z-10">
                  <ProductImage
                    src={product.image}
                    alt={product.imageAlt}
                    label={`${product.name} hardware photo`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="w-full aspect-[4/3] rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                  />
                </div>

                {/* ── Right Scrolling Content Column ── */}
                <div className="lg:col-span-7">
                  <span className="fd-badge fd-badge-prototype mb-4 inline-flex">
                    {product.status}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111]">
                    {product.name}
                  </h3>
                  <p className="text-[#1677FF] mt-1 font-semibold text-sm sm:text-base">
                    {product.tagline}
                  </p>
                  {product.subtitle && (
                    <p className="text-slate-600 mt-2 font-medium text-sm sm:text-base leading-snug">
                      {product.subtitle}
                    </p>
                  )}

                  <div className="mt-4 text-[#555] text-sm leading-relaxed space-y-2.5">
                    {product.problem.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Standard Specifications Table (for products with flat specs) */}
                  {product.specs && product.specs.length > 0 && (
                    <div className="mt-7">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#777] mb-3">
                        Specifications
                      </h4>
                      <div className="border border-[#DCDCDC] rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                          <tbody>
                            {product.specs.map((spec, i) => (
                              <tr
                                key={spec.label}
                                className={i % 2 === 0 ? "bg-white" : "bg-[#F8F8F8]"}
                              >
                                <td className="px-4 py-2.5 text-[#777] font-medium w-2/5 align-top">
                                  {spec.label}
                                </td>
                                <td className="px-4 py-2.5 text-[#111] align-top">
                                  {spec.value}
                                  {spec.note && (
                                    <span className="ml-2 text-[0.68rem] text-[#BDBDBD]">
                                      [{spec.note}]
                                    </span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Technical Architecture Sections (for FusionDrive Core) */}
                  {product.coreDetails && (
                    <div className="mt-8 space-y-6">
                      {/* 1. System Architecture */}
                      <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1677FF] mb-3.5 flex items-center gap-2">
                          <Cpu className="w-4 h-4 stroke-[2.2]" />
                          System Architecture
                        </h4>
                        <div className="space-y-3">
                          {product.coreDetails.systemArchitecture.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm"
                            >
                              <span className="font-semibold text-slate-900 min-w-[155px]">
                                {item.name}
                              </span>
                              <span className="text-slate-600">
                                — {item.role}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3.5 border-t border-slate-200/80">
                          <p className="text-xs text-slate-600 leading-relaxed italic">
                            <strong className="text-slate-800 not-italic font-semibold">
                              Architecture principle:
                            </strong>{" "}
                            {product.coreDetails.systemArchitecture.principle}
                          </p>
                        </div>
                      </div>

                      {/* 2. Communication & Expansion */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                          Communication & Expansion
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.coreDetails.communicationExpansion.map((comm) => (
                            <span
                              key={comm}
                              className="px-3 py-1 bg-white border border-slate-200 text-slate-800 text-xs font-medium rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                            >
                              {comm}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 3. Designed to Integrate With */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                          Designed to Integrate With
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {product.coreDetails.integrationTargets.map((target) => (
                            <span
                              key={target}
                              className="px-2.5 py-1 bg-[#EFF6FF] border border-[#DBEAFE] text-[#1677FF] text-xs font-medium rounded-lg"
                            >
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 4. Hardware Configurability */}
                      <div className="border border-slate-200/90 rounded-xl p-5 bg-white">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                          Hardware Configurability
                        </h4>
                        <p className="text-xs text-slate-500 mb-3 font-medium">
                          {product.coreDetails.hardwareConfigurability.subtitle}
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {product.coreDetails.hardwareConfigurability.items.map(
                            (item) => (
                              <li key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] flex-shrink-0" />
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* 5. Development & Debug */}
                      <div className="border border-slate-200/90 rounded-xl p-5 bg-[#F8FAFC]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3.5">
                          Development & Debug
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                          <div>
                            <p className="font-bold text-slate-900 mb-2">STM32</p>
                            <ul className="space-y-1.5 text-slate-600">
                              {product.coreDetails.developmentDebug.stm32.map(
                                (item) => (
                                  <li key={item} className="flex items-start gap-1.5">
                                    <span className="text-[#1677FF]">•</span>
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 mb-2">
                              ESP32-S3
                            </p>
                            <ul className="space-y-1.5 text-slate-600 mb-4">
                              {product.coreDetails.developmentDebug.esp32.map(
                                (item) => (
                                  <li key={item} className="flex items-start gap-1.5">
                                    <span className="text-[#1677FF]">•</span>
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                            <p className="font-bold text-slate-900 mb-2">
                              Additional onboard support
                            </p>
                            <ul className="space-y-1.5 text-slate-600">
                              {product.coreDetails.developmentDebug.additional.map(
                                (item) => (
                                  <li key={item} className="flex items-start gap-1.5">
                                    <span className="text-[#1677FF]">•</span>
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
