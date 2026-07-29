"use client"

import type { CSSProperties } from "react"
import { useMemo, useState } from "react"

export function HeroOrbitalVisual() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        angle: (360 / 18) * index,
        radius: 34 + (index % 3) * 12,
        delay: index * 0.11,
      })),
    []
  )

  return (
    <div
      className="fd-hero-visual group"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8
        const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8
        setRotation({ x, y })
      }}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      aria-hidden="true"
    >
      <div
        className="fd-hero-visual-inner"
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="fd-hero-core" />
        <div className="fd-hero-ring fd-hero-ring-one" />
        <div className="fd-hero-ring fd-hero-ring-two" />
        <div className="fd-hero-ring fd-hero-ring-three" />

        {particles.map((particle) => (
          <span
            key={particle.id}
            className="fd-hero-particle"
            style={
              {
                "--fd-angle": `${particle.angle}deg`,
                "--fd-radius": `${particle.radius}%`,
                "--fd-delay": `${particle.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}