"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="FusionDrive — Hardware Showcase"
      className="fd-hero-bg relative overflow-hidden flex flex-col items-center justify-center min-h-[100svh] w-full"
      style={{
        paddingTop: "64px",
      }}
    >
      {/* ── Complete Wide Hardware Artwork ── */}
      <div className="relative w-full h-[calc(100svh-64px)] flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/images/hero-wide-bg.png"
          alt="FusionDrive hardware ecosystem — FusionDrive Core modular robotics controller and FusionDrive Motion dual channel smart motor controller"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-[center_55%]"
        />
      </div>
    </section>
  )
}






