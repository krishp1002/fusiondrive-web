// ─── Section IDs ─────────────────────────────────────────────────────────────

export type SectionId =
  | "home"
  | "products"
  | "engineering"
  | "contact"

// ─── Navigation ──────────────────────────────────────────────────────────────

export type NavItem = {
  readonly label: string
  readonly target: SectionId
}

export const sectionOrder: readonly SectionId[] = [
  "home",
  "products",
  "engineering",
  "contact",
]

export const navItems: readonly NavItem[] = [
  { label: "Home", target: "home" },
  { label: "Products", target: "products" },
  { label: "Engineering", target: "engineering" },
  { label: "Contact", target: "contact" },
]

// ─── Products ────────────────────────────────────────────────────────────────

export type ProductSpec = {
  readonly label: string
  readonly value: string
  readonly note?: string // e.g. "Documented / Design value"
}

export type CoreTechnicalDetails = {
  readonly systemArchitecture: {
    readonly items: readonly { readonly name: string; readonly role: string }[]
    readonly principle: string
  }
  readonly communicationExpansion: readonly string[]
  readonly integrationTargets: readonly string[]
  readonly hardwareConfigurability: {
    readonly subtitle: string
    readonly items: readonly string[]
  }
  readonly developmentDebug: {
    readonly stm32: readonly string[]
    readonly esp32: readonly string[]
    readonly additional: readonly string[]
  }
}

export type Product = {
  readonly id: string
  readonly name: string
  readonly tagline: string
  readonly subtitle?: string
  readonly status: string
  readonly statusType: "prototype"
  readonly problem: string
  readonly specs?: readonly ProductSpec[]
  readonly coreDetails?: CoreTechnicalDetails
  readonly progress?: readonly string[]
  readonly limitations?: string
  readonly image: string // path under /images/
  readonly imageAlt: string
}

export const products: readonly Product[] = [
  {
    id: "fusiondrive-motion",
    name: "FusionDrive Motion",
    tagline: "Dual Channel Smart Motor Controller",
    subtitle: "Intelligent motion control with feedback, telemetry and protection built into the platform.",
    status: "Working Prototype",
    statusType: "prototype",
    problem:
      "FusionDrive Motion is a dual-channel DC motor controller designed for robotics, automation, autonomous systems and advanced embedded applications.\n\nIt combines motor control, encoder feedback, closed-loop PID control, telemetry, communication and protection into a compact embedded platform.",
    specs: [
      { label: "Channels", value: "2 × DC Motor Channels" },
      { label: "Operating Range", value: "14V–36V" },
      { label: "Continuous Current", value: "20A / channel" },
      { label: "Control Mode", value: "Closed-Loop PID Control" },
      { label: "Encoder Feedback", value: "Quadrature Encoder Feedback" },
      { label: "Communication", value: "UART, BLE, Wi-Fi" },
      { label: "Live Telemetry", value: "RPM, current, voltage, temperature" },
      { label: "Protection", value: "Overcurrent, Overtemperature, Undervoltage, Overvoltage" },
    ],
    image: "/images/fd-motion.png",
    imageAlt: "FusionDrive Motion — Dual Channel Smart Motor Controller prototype board",
  },
  {
    id: "fusiondrive-core",
    name: "FusionDrive Core",
    tagline: "Modular Robotics Controller",
    status: "Working Prototype",
    statusType: "prototype",
    problem:
      "Built as the central compute, sensing, communication, and control backbone for autonomous robotic platforms, FusionDrive Core is designed to handle sensor acquisition, actuator coordination, control-loop execution, telemetry exchange, communication bridging, debugging, and system orchestration.",
    coreDetails: {
      systemArchitecture: {
        items: [
          {
            name: "STM32F103C8T6",
            role: "Real-time control and peripheral management",
          },
          {
            name: "ESP32-S3",
            role: "Wi-Fi/BLE communication, remote interfacing and wireless diagnostics",
          },
          {
            name: "SPI",
            role: "Inter-processor communication between STM32 ↔ ESP32-S3",
          },
        ],
        principle:
          "A heterogeneous dual-MCU architecture separates hard real-time embedded control from network and communication workloads.",
      },
      communicationExpansion: [
        "CAN Bus",
        "UART",
        "SPI",
        "I²C",
        "GPIO Expansion",
      ],
      integrationTargets: [
        "LiDAR",
        "IMU",
        "GPS",
        "ToF Sensors",
        "OLED/TFT Displays",
        "Motor Controllers",
        "Encoders",
        "LoRa Modules",
        "Servo Drivers",
        "Sensor Fusion Modules",
        "Custom Peripherals",
      ],
      hardwareConfigurability: {
        subtitle: "DIP-switch configurable hardware supports:",
        items: [
          "I²C pull-up control",
          "Encoder interfacing",
          "Digital input conditioning",
          "Protocol adaptation",
          "Rapid prototyping / debugging",
        ],
      },
      developmentDebug: {
        stm32: [
          "ST-Link SWD debugging/programming",
          "UART flashing via CP2102",
          "USB Type-C bootloader-based firmware upload",
        ],
        esp32: [
          "Native USB Type-C programming/debugging",
        ],
        additional: [
          "Boot configuration",
          "Reset circuitry",
          "User push-button",
          "Status/debug LEDs",
          "WS2812 expansion",
        ],
      },
    },
    image: "/images/fd-core.png",
    imageAlt: "FusionDrive Core — Modular Robotics Controller prototype board",
  },
]

// ─── Engineering workflow ────────────────────────────────────────────────────

export type EngineeringEvidenceItem = {
  readonly id: string
  readonly category: string
  readonly title: string
  readonly description: string
  readonly image: string
  readonly imageAlt: string
}

export const engineeringEvidence: readonly EngineeringEvidenceItem[] = [
  {
    id: "pcb-design",
    category: "PCB ENGINEERING",
    title: "PCB Design & Development",
    description:
      "PCB layout and hardware development work behind FusionDrive's embedded electronics platforms.",
    image: "/images/engineering-pcb-design.jpg",
    imageAlt: "FusionDrive PCB layout and embedded hardware design",
  },
  {
    id: "rover-cad",
    category: "ROBOTICS DESIGN",
    title: "Robotic Platform Design",
    description:
      "Mechanical CAD development for a FusionDrive robotic platform.",
    image: "/images/engineering-rover-cad.jpg",
    imageAlt: "FusionDrive robotic rover mechanical CAD design",
  },
  {
    id: "omni-ball-cad",
    category: "MECHANICAL DESIGN",
    title: "Omnidirectional Mobility",
    description:
      "Mechanical development of an omnidirectional wheel mechanism for robotic mobility.",
    image: "/images/engineering-omni-ball-cad.jpg",
    imageAlt: "FusionDrive omnidirectional wheel mechanism CAD design",
  },
  {
    id: "system-integration",
    category: "SYSTEM INTEGRATION",
    title: "Robotics System Integration",
    description:
      "FusionDrive hardware integrated into a physical robotic platform for system-level testing and development.",
    image: "/images/engineering-system-integration.jpg",
    imageAlt:
      "FusionDrive robotic system integration test setup with controller hardware and laptop",
  },
]

// ─── Problem section ─────────────────────────────────────────────────────────

export type ProblemBlock = {
  readonly title: string
  readonly body: string
  readonly impact: string
}

export const problemBlocks: readonly ProblemBlock[] = [
  {
    title: "Fragmented Hardware",
    body: "Different motor controllers, sensors, power systems, and compute modules often come from different vendors and are not designed to work together.",
    impact: "More integration work.",
  },
  {
    title: "Complex Integration",
    body: "Different hardware interfaces, buses, and protocols add wiring, drivers, adapters, and integration effort.",
    impact: "More engineering overhead.",
  },
  {
    title: "Multiple Software Ecosystems",
    body: "Developers have to work across different firmware, SDKs, operating systems, tools, and software stacks.",
    impact: "Greater software complexity and disconnected development workflows.",
  },
  {
    title: "Slow Development Cycles",
    body: "Too much time is spent solving hardware and software integration problems before the actual robotic application can be developed.",
    impact: "Slower iteration.",
  },
]

// ─── Approach principles ─────────────────────────────────────────────────────

export type ApproachPrinciple = {
  readonly title: string
  readonly description: string
}

export const approachPrinciples: readonly ApproachPrinciple[] = [
  {
    title: "Seamless Integration",
    description: "Hardware, firmware, and software are designed to work together from the foundation.",
  },
  {
    title: "Modular & Scalable",
    description: "Start with one system and expand as your robotics platform grows.",
  },
  {
    title: "Developer Friendly",
    description: "Clear interfaces, reusable tools, and accessible software reduce the work between idea and machine.",
  },
  {
    title: "Built for Real-World Robotics",
    description: "Designed for actual machines, from early prototypes to scalable robotic systems.",
  },
]


