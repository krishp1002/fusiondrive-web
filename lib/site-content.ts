export type SectionId =
  | "hero"
  | "why-us"
  | "ecosystem"
  | "current-stage"
  | "engineering-gallery"
  | "founder"
  | "contact"

export type NavItem = {
  readonly label: string
  readonly target: SectionId
  readonly activeFor: readonly SectionId[]
}

export type EcosystemNode = {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly x: number
  readonly y: number
  readonly status: "active" | "coming-soon"
}

export const sectionOrder: readonly SectionId[] = [
  "hero",
  "why-us",
  "ecosystem",
  "current-stage",
  "engineering-gallery",
  "founder",
  "contact",
]

export const navItems: readonly NavItem[] = [
  { label: "Why Us", target: "why-us", activeFor: ["why-us"] },
  { label: "Ecosystem", target: "ecosystem", activeFor: ["ecosystem"] },
  {
    label: "Engineering",
    target: "current-stage",
    activeFor: ["current-stage", "engineering-gallery"],
  },
  { label: "Founder", target: "founder", activeFor: ["founder"] },
  { label: "Contact", target: "contact", activeFor: ["contact"] },
]

export const whyUsPoints: readonly string[] = [
  "Robotics development is fragmented across motion controllers, compute modules, perception stacks, and software tooling that were never designed as one cohesive system.",
  "Engineering teams spend critical months integrating disconnected hardware and middleware before they can validate a single real-world workflow.",
  "This integration burden slows iteration speed, introduces failure points, and prevents smaller teams from shipping production autonomy confidently.",
  "FusionDrive exists to remove that friction by building one integrated ecosystem that unifies robotics fundamentals under a shared architecture.",
  "Our long-term vision is to become the operating platform that powers intelligent machines across industrial, commercial, and frontier environments.",
]

export const ecosystemNodes: readonly EcosystemNode[] = [
  {
    id: "fusiondrive-core",
    title: "FusionDrive Core",
    description:
      "Unified control and intelligence backbone that synchronizes every layer of the robotics stack.",
    x: 50,
    y: 50,
    status: "active",
  },
  {
    id: "ai",
    title: "AI",
    description:
      "Adaptive models for perception, planning, and autonomous decision loops.",
    x: 50,
    y: 16,
    status: "active",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "Scene understanding, mapping, and target tracking pipelines for machine perception.",
    x: 18,
    y: 42,
    status: "active",
  },
  {
    id: "motion",
    title: "Motion",
    description:
      "Precision motor control, trajectory execution, and dynamic stabilization systems.",
    x: 82,
    y: 42,
    status: "active",
  },
  {
    id: "embedded",
    title: "Embedded",
    description:
      "Real-time firmware, edge computing modules, and deterministic compute orchestration.",
    x: 28,
    y: 76,
    status: "active",
  },
  {
    id: "sensors-power",
    title: "Sensors + Power",
    description:
      "Signal integrity, sensor fusion interfaces, and efficient power delivery foundations.",
    x: 50,
    y: 84,
    status: "coming-soon",
  },
  {
    id: "sdk",
    title: "SDK / Software Platform",
    description:
      "Developer APIs, simulation workflows, and deployment tools for rapid robotics iteration.",
    x: 72,
    y: 76,
    status: "coming-soon",
  },
]

export const ecosystemLinks: readonly [string, string][] = [
  ["fusiondrive-core", "ai"],
  ["fusiondrive-core", "vision"],
  ["fusiondrive-core", "motion"],
  ["fusiondrive-core", "embedded"],
  ["fusiondrive-core", "sensors-power"],
  ["fusiondrive-core", "sdk"],
  ["embedded", "sensors-power"],
  ["sensors-power", "sdk"],
]

export const currentStageWorkstreams: readonly string[] = [
  "PCB Renders",
  "Prototype Photos",
  "CAD Models",
  "Firmware Development",
  "Bench Testing",
  "Simulations",
  "Lab Setup",
  "Validation",
]

export const engineeringGalleryItems: readonly {
  readonly title: string
  readonly description: string
}[] = [
  {
    title: "PCB Designs",
    description:
      "Layer planning, routing discipline, thermal decisions, and signal integrity trade-offs.",
  },
  {
    title: "3D CAD",
    description:
      "Mechanical architecture, fitment constraints, and manufacturing-aware geometry decisions.",
  },
  {
    title: "Hardware Assembly",
    description:
      "Bring-up workflows, connector integrity checks, and subsystem integration traces.",
  },
  {
    title: "Oscilloscope Testing",
    description:
      "Timing, noise, and waveform analysis for robust embedded electronics behavior.",
  },
  {
    title: "Manufacturing",
    description:
      "Design-for-assembly strategy and repeatability foundations for scale-ready hardware.",
  },
  {
    title: "Firmware",
    description:
      "Low-level control loops, peripheral interfaces, diagnostics, and reliability safeguards.",
  },
  {
    title: "Components",
    description:
      "Conscious part selection based on availability, tolerance, and mission-grade performance.",
  },
  {
    title: "Engineering Lab",
    description:
      "Integrated workspace for instrumentation, experiments, and continuous validation cycles.",
  },
]
