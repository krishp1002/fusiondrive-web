"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, sectionOrder, type SectionId } from "@/lib/site-content"

export function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId>("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // ── Scroll spy ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      const productsEl = document.getElementById("products")
      const engineeringEl = document.getElementById("engineering")
      const contactEl = document.getElementById("contact")

      // Bottom of page detection
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50

      if (isBottom && contactEl) {
        setActiveSection("contact")
        return
      }

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection("contact")
      } else if (engineeringEl && scrollPosition >= engineeringEl.offsetTop) {
        setActiveSection("engineering")
      } else if (productsEl && scrollPosition >= productsEl.offsetTop) {
        setActiveSection("products")
      } else {
        setActiveSection("home")
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  // ── Navbar appearance state based on scroll position ────────────────────────
  useEffect(() => {
    const updateNavbarState = () => {
      const isHeroNav = window.scrollY <= 50
      setIsScrolled(!isHeroNav)
    }

    updateNavbarState()
    window.addEventListener("scroll", updateNavbarState, { passive: true })
    window.addEventListener("resize", updateNavbarState, { passive: true })
    return () => {
      window.removeEventListener("scroll", updateNavbarState)
      window.removeEventListener("resize", updateNavbarState)
    }
  }, [])

  // ── Scroll to section ────────────────────────────────────────────────────────
  const scrollTo = (id: SectionId) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsMobileOpen(false)
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: "smooth" })
    setIsMobileOpen(false)
  }

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isMobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [isMobileOpen])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  return (
    <>
      <header
        className={cn("fd-navbar", isScrolled ? "fd-navbar-solid" : "fd-navbar-transparent")}
        role="banner"
      >
        <div className="fd-container flex items-center justify-between h-full gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            aria-label="Back to top — FusionDrive"
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Image
              src="/images/combined-logo.svg"
              alt="FusionDrive"
              width={210}
              height={38}
              className="h-8 sm:h-9 md:h-[36px] w-auto"
              style={{ width: "auto" }}
              priority
              onError={(e) => {
                // Fallback to text if SVG not yet available
                const target = e.currentTarget as HTMLImageElement
                target.style.display = "none"
                const fallback = target.nextElementSibling as HTMLElement | null
                if (fallback) fallback.style.display = "block"
              }}
            />
            {/* Text fallback — hidden once SVG loads */}
            <span
              style={{ display: "none" }}
              className="text-lg font-bold tracking-tight text-[#111]"
              aria-hidden="true"
            >
              FusionDrive
            </span>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.target)}
                aria-current={activeSection === item.target ? "page" : undefined}
                className={cn(
                  "fd-nav-link",
                  activeSection === item.target && "fd-nav-link-active"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#555] hover:text-[#111] hover:bg-black/5 transition-colors"
            onClick={() => setIsMobileOpen((o) => !o)}
            aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[99] md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#DCDCDC]">
              <span className="font-semibold text-[#111]">FusionDrive</span>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 flex items-center justify-center rounded text-[#555] hover:text-[#111] hover:bg-black/5"
              >
                <X size={18} />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollTo(item.target)}
                  aria-current={activeSection === item.target ? "page" : undefined}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    activeSection === item.target
                      ? "bg-black/5 text-[#111] font-semibold"
                      : "text-[#555] hover:text-[#111] hover:bg-black/4"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
