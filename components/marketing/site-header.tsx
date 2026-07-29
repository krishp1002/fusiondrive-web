"use client"

import { MenuIcon } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import { ThemeToggle } from "@/components/marketing/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navItems, sectionOrder, type SectionId } from "@/lib/site-content"

function getNavActiveState(activeSection: SectionId): Record<string, boolean> {
  const state: Record<string, boolean> = {}

  for (const item of navItems) {
    state[item.label] = item.activeFor.includes(activeSection)
  }

  return state
}

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navActiveState = useMemo(
    () => getNavActiveState(activeSection),
    [activeSection]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length === 0) {
          return
        }

        const firstVisibleId = visibleEntries[0].target.id as SectionId
        setActiveSection(firstVisibleId)
      },
      {
        threshold: [0.2, 0.35, 0.55],
        rootMargin: "-28% 0px -45% 0px",
      }
    )

    for (const sectionId of sectionOrder) {
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (targetId: SectionId) => {
    const section = document.getElementById(targetId)
    if (!section) {
      return
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-white/12 bg-slate-950/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="fd-container flex h-16 items-center justify-between gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          onClick={() => scrollToSection("hero")}
          aria-label="Scroll to hero section"
        >
          <span className="inline-block size-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_2px_rgba(103,232,249,0.65)]" />
          FusionDrive
        </button>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                navActiveState[item.label] && "text-white"
              )}
              aria-current={navActiveState[item.label] ? "page" : undefined}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-cyan-300 transition-transform duration-300",
                  navActiveState[item.label] ? "scale-x-100" : "scale-x-0"
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            type="button"
            className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-slate-200 hover:text-white"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs border-white/10 bg-slate-950">
              <SheetHeader>
                <SheetTitle className="text-white">FusionDrive</SheetTitle>
                <SheetDescription className="text-slate-400">
                  Robotics engineering platform
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile primary" className="grid gap-2 px-4 pb-4">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    className={cn(
                      "justify-start",
                      navActiveState[item.label] && "bg-white/10 text-white"
                    )}
                    onClick={() => scrollToSection(item.target)}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  type="button"
                  className="mt-2 bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
