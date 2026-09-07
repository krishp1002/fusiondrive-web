"use client"

import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.5A1.6 1.6 0 0 0 6.2 8.13a1.62 1.62 0 0 0 3.25 0A1.6 1.6 0 0 0 7.83 6.5" />
    </svg>
  )
}

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function scrollTo(id: string) {
  if (typeof window === "undefined") return
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 64
  window.scrollTo({ top, behavior: "smooth" })
}

export function Footer() {
  return (
    <footer
      className="bg-white border-t border-[#DCDCDC]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="fd-container py-12 sm:py-14">
        {/* ── Main 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand & Social (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/combined-logo.svg"
                alt="FusionDrive"
                width={140}
                height={32}
                style={{ width: "auto", height: "28px" }}
                priority={false}
              />
            </div>
            <p className="text-sm text-[#555] leading-relaxed max-w-sm">
              Building the foundation for intelligent machines.
            </p>
            {/* Social Accounts: ONLY LinkedIn and Instagram */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/fusiondrive-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FusionDrive Technologies on LinkedIn (opens in new tab)"
                className="w-8 h-8 rounded-lg bg-[#F8F8F8] border border-[#DCDCDC] text-[#111] hover:text-[#1677FF] hover:border-[#1677FF] hover:bg-white transition-all flex items-center justify-center cursor-pointer"
              >
                <LinkedInIcon size={15} />
              </a>
              <a
                href="https://www.instagram.com/fusiondrivetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FusionDrive Technologies on Instagram (opens in new tab)"
                className="w-8 h-8 rounded-lg bg-[#F8F8F8] border border-[#DCDCDC] text-[#111] hover:text-[#1677FF] hover:border-[#1677FF] hover:bg-white transition-all flex items-center justify-center cursor-pointer"
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-0.5 h-3.5 bg-[#1677FF] rounded-full inline-block" aria-hidden="true" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#111]">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("home")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("products")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("engineering")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  Engineering
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-0.5 h-3.5 bg-[#1677FF] rounded-full inline-block" aria-hidden="true" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#111]">
                Products
              </h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("fusiondrive-motion")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  FusionDrive Motion
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("fusiondrive-core")}
                  className="text-[#666] hover:text-[#1677FF] hover:translate-x-0.5 transition-all text-left bg-transparent border-none p-0 cursor-pointer font-medium"
                >
                  FusionDrive Core
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-0.5 h-3.5 bg-[#1677FF] rounded-full inline-block" aria-hidden="true" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#111]">
                Contact Us
              </h3>
            </div>
            <div className="space-y-3 text-sm">
              {/* Email */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-md border border-[#DCDCDC] bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={13} className="text-[#555]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                    Email
                  </p>
                  <a
                    href="mailto:info@fusiondrive.in"
                    className="text-xs sm:text-sm text-[#111] font-medium hover:text-[#1677FF] hover:underline underline-offset-2 transition-colors"
                  >
                    info@fusiondrive.in
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-2.5 pt-0.5">
                <div className="w-7 h-7 rounded-md border border-[#DCDCDC] bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#555]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#888]">
                    Office
                  </p>
                  <address className="not-italic text-xs text-[#555] leading-relaxed">
                    512, Central Square,<br />
                    Opp. K B Royal Phoenix,<br />
                    Chandkheda, Ahmedabad,<br />
                    Gujarat 382424, India
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Sub-footer Bar ── */}
        <div className="mt-10 pt-6 border-t border-[#DCDCDC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888]">
          <p>© 2026 FusionDrive Technologies. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-[#555] transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-[#555] transition-colors cursor-default">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
