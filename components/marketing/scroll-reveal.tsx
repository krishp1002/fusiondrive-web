"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  readonly className?: string
  readonly children: ReactNode
} & Omit<ComponentPropsWithoutRef<"section">, "className" | "children">

export function ScrollReveal({ className, children, ...props }: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const target = ref.current
    if (!target) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={ref}
      className={cn("fd-reveal", isVisible && "fd-reveal-visible", className)}
      {...props}
    >
      {children}
    </section>
  )
}
