# FusionDrive Website — FINAL MASTER REQUIREMENTS

> **Status: Final baseline for the complete rebuild**
>
> This document is the source of truth for Antigravity.
> The previous website implementation is obsolete. Rebuild the website from scratch according to this document.

---

# 1. COMPANY

**Legal name:** FUSIONDRIVE TECHNOLOGIES (OPC) PRIVATE LIMITED

**Founder & CEO:** Krish Parmar

**Business:** Robotics hardware and embedded systems

**Email:** info@fusiondrive.in

**Website:** fusiondrive.in

**Location:** Ahmedabad, Gujarat, India

FusionDrive is an early-stage robotics hardware company developing modular hardware and embedded systems for intelligent machines.

The long-term direction is an integrated robotics hardware/software ecosystem covering motion control, embedded electronics, sensing, communication, AI computing and developer tools.

The ecosystem is a **future direction**, not a completed/current product.

---

# 2. CURRENT COMPANY STAGE

FusionDrive is currently:

- Pre-revenue
- Prototype-stage
- In product development and validation
- Developing firmware and optimizing prototypes
- Preparing for pilot testing and early customer validation

Current physical hardware:

1. **FusionDrive Motion** — Dual Channel Smart Motor Driver
2. **FusionDrive Core** — Modular Robotics Controller / Master Controller

Company information confirms that two physical hardware prototypes have been developed and that hardware validation has been completed, while firmware development/performance optimization remains in progress.

Commercial sales have not started.

### IMPORTANT

Never present FusionDrive as:

- A mature commercial manufacturer
- Mass-production ready
- Commercially available
- A fully deployed robotics platform
- An already-completed ecosystem

unless that becomes factually true in the future.

---

# 3. WEBSITE OBJECTIVE

The website is primarily for:

- Investors
- Incubation centres
- Grant reviewers
- Universities
- Research laboratories
- Robotics developers
- OEMs
- Technical collaborators

It is **not primarily an e-commerce website**.

The visitor should understand the following in order:

```text
What is FusionDrive?
        ↓
What has FusionDrive actually built?
        ↓
Can FusionDrive actually engineer hardware?
        ↓
Where is FusionDrive going?
        ↓
Who is building it?
        ↓
How can I contact FusionDrive?
```

Core principle:

> **PROOF FIRST. VISION SECOND.**

Technical credibility is more important than marketing language.

---

# 4. WEBSITE ARCHITECTURE

The website must be a **single-page scrolling website**.

There are no separate main routes/pages for:

- Products
- Engineering
- Roadmap
- About
- Contact

The complete website is one continuous page.

Structure:

```text
HOME
↓
PRODUCTS
↓
ENGINEERING
↓
ROADMAP
↓
ABOUT
↓
CONTACT
↓
FOOTER
```

The navbar scrolls to sections instead of changing routes.

---

# 5. NAVBAR

Use a clean fixed/sticky navbar.

Navigation:

```text
Home
Products
Engineering
Roadmap
About
Contact
```

Use the existing combined branding asset:

```text
/images/combined-logo.svg
```

Do not split the logo and wordmark.

Do not recreate the logo.

Do not add:

- Get in Touch
- Buy Now
- Store
- GitHub
- Blog
- Careers
- Press
- Investor Portal

---

# 6. ACTIVE NAVIGATION / SCROLL SPY

This must work correctly.

The active navigation item must automatically change according to the section currently visible.

Use a robust Intersection Observer / scroll-spy approach.

Expected behavior:

```text
Home visible        → Home active
Products visible    → Products active
Engineering visible → Engineering active
Roadmap visible     → Roadmap active
About visible       → About active
Contact visible     → Contact active
```

Do NOT permanently hard-code one navigation item as active.

It must work for:

- Manual scrolling
- Clicking navbar items
- Smooth scrolling
- Browser hash navigation
- Returning to the top
- Different viewport sizes

Account for the fixed navbar when calculating section visibility.

---

# 7. VISUAL DESIGN DIRECTION

## Theme

**LIGHT THEME ONLY.**

There must be no theme toggle.

Do not implement dark mode.

Do not retain any previous theme-switching code.

## Overall visual identity

Use:

> **Monochrome Engineering + restrained sky-blue Hero**

The interface should primarily use:

- White
- Off-white
- Black
- Gray
- Very subtle light blue / sky blue only where appropriate

Suggested base palette:

```text
Background:       #F5F5F3
Surface:          #FFFFFF
Primary text:     #111111
Secondary text:   #555555
Muted text:       #777777
Border:           #DCDCDC
Strong border:    #BDBDBD
Primary button:   #111111
Button text:      #FFFFFF
Button hover:     #333333
Hero blue tint:   very subtle / low saturation
```

## STRICT

### NO PURPLE.

Do not use:

- Purple
- Violet
- Purple gradients
- Purple glow
- Neon purple
- Purple borders
- Purple active indicators

Also avoid:

- Rainbow gradients
- Neon cyberpunk styling
- Excessive glassmorphism
- Heavy glow
- Overly futuristic UI decorations

The hardware photography should provide most of the visual interest.

---

# 8. DESIGN INSPIRATION

The visual quality should take inspiration from premium hardware/technology websites such as:

- DJI
- ODrive
- Vicharak

The goal is to learn from their:

- Strong product hero
- Large photography
- Clear typography
- Product-first presentation
- Generous whitespace
- Simple navigation
- Premium composition

Do NOT copy:

- Their layouts exactly
- Their branding
- Their assets
- Their text
- Their animations

Create an original FusionDrive identity.

---

# 9. HOME — HERO

The Hero is the most visually important section.

Desktop layout:

```text
┌─────────────────────────────────────────────────────┐
│ NAVBAR                                              │
├───────────────────────────┬─────────────────────────┤
│                           │                         │
│ EYEBROW                   │                         │
│                           │     REAL FUSIONDRIVE    │
│ BUILDING THE ROBOTICS     │       HARDWARE          │
│ PLATFORM FOR INTELLIGENT  │      SHOWCASE           │
│ MACHINES                  │                         │
│                           │ Motion + Core           │
│ Description               │                         │
│                           │                         │
│ CTA                       │                         │
│                           │                         │
│ 3 small info cards        │                         │
└───────────────────────────┴─────────────────────────┘
```

The Hero should feel like a premium hardware company, not a generic SaaS/AI startup.

---

# 10. HERO BACKGROUND

Use a clean light background.

A subtle sky-blue / icy-blue gradient or ambient light effect is acceptable **only in the Hero**.

It must remain:

- Light
- Minimal
- Premium
- Low saturation

Do not make the entire website blue.

---

# 11. HERO COPY

Eyebrow:

> **ENGINEERING THE FUTURE OF ROBOTICS**

Main headline:

> **Building the Robotics Platform for Intelligent Machines**

Supporting description:

> FusionDrive is building toward an integrated robotics ecosystem where motion control, embedded electronics, AI computing, sensing, and developer tools can work together through a common architecture. Our mission is to simplify robotics development through modular, scalable technologies.

The phrase **"building toward"** is intentional.

Do not rewrite this in a way that implies the ecosystem already exists.

---

# 12. HERO INFORMATION CARDS

Three compact cards.

### CURRENT STAGE

> Building the Foundation

### FOCUS

> Robotics • Embedded Systems • AI

### VISION

> Integrated Robotics Ecosystem

Keep these compact.

Do not turn them into giant cards.

---

# 13. HERO CTA

One primary CTA:

> **Explore Products**

It smoothly scrolls to Products.

Do not use:

- Buy Now
- Order Now
- Purchase
- Get Started
- Request Demo

The company is currently pre-revenue and the purpose is credibility/validation rather than direct online sales.

---

# 14. HERO PRODUCT SHOWCASE

The right side must show FusionDrive's real hardware.

Primary products:

### FusionDrive Motion

Dual Channel Smart Motor Driver

### FusionDrive Core

Modular Robotics Controller

Use actual supplied FusionDrive product photography.

The visual idea can be similar to a premium hardware showcase:

- One larger product
- One smaller product
- Natural overlap
- Clean background
- Realistic shadows
- Slight depth
- Strong product visibility

Optional third real image may be used if it improves the composition.

Do not use:

- Generic robot photographs
- Stock robotics imagery
- Generic AI robot
- Fake product renders
- Invented hardware
- Unrelated hardware

If the required product photographs are not available, ask for them rather than fabricating them.

---

# 15. CURRENT PRODUCTS

There are exactly two current products.

## PRODUCT 01

### FusionDrive Motion

**Dual Channel Smart Motor Driver**

**Status: Working Prototype v1**

Documented features:

- Dual-channel DC motor control
- 14V–36V operating range
- 20A continuous current per channel
- Closed-loop PID speed control
- Real-time quadrature encoder feedback
- Wireless configuration and diagnostics
- UART communication
- Live telemetry: RPM, current, voltage and temperature
- Overcurrent protection
- Overtemperature protection
- Undervoltage protection
- Overvoltage protection

Documented development progress:

- Hardware designed
- Prototype fabricated
- Prototype assembled
- Functional testing completed
- Firmware optimization in progress

---

## PRODUCT 02

### FusionDrive Core

**Modular Robotics Controller / Master Controller**

**Status: Working Prototype**

Documented architecture:

- Dual MCU architecture
- STM32F103C8T6
- ESP32
- Real-time motion control
- Native CAN Bus
- UART
- SPI
- I²C
- GPIO expansion
- Wireless connectivity
- ST-Link debugging
- USB Type-C programming
- Configurable hardware interface
- Modular expansion architecture

Documented supported integrations:

- LiDAR
- IMU
- GPS
- ToF sensors
- Motor controllers
- Encoders
- Servo drivers
- LoRa modules
- OLED/TFT displays
- Custom robotics peripherals

Documented progress:

- Hardware designed
- PCB fabricated
- Prototype assembled
- Functional validation completed
- Firmware development in progress

Do not claim a listed integration is currently deployed/tested unless evidence exists.

---

# 16. PRODUCTS PAGE/SECTION DESIGN

Products must be proof-first.

Each product presentation should include:

```text
Product name
↓
One-line description
↓
Real product photographs
↓
Current status
↓
What problem it solves
↓
Specifications
↓
Evidence / testing
↓
Known limitations
```

Do not use excessive marketing copy.

The visitor should be able to understand each product quickly.

---

# 17. PRODUCT SPECIFICATION INTEGRITY

This is a non-negotiable rule.

Never invent:

- Voltage
- Current
- Processor
- MCU
- Communication protocol
- Sensor compatibility
- Performance
- Test results
- Accuracy
- Thermal limits
- Reliability
- Production status

If a specification is a design/rated value rather than a measured test result, label it correctly.

For example:

> Designed for up to 20A

is not equivalent to:

> 20A continuous tested performance

If evidence is available, show the evidence.

If evidence is not available, do not imply it exists.

---

# 18. KNOWN LIMITATIONS

Each product must have a small honest limitations area.

Do not hide limitations.

This section should be based only on actual known limitations supplied by the engineering team.

If the exact limitations have not yet been supplied:

```text
KNOWN LIMITATIONS
To be finalized from current engineering validation.
```

Do not invent limitations.

Honest limitations increase credibility.

---

# 19. HOME PROBLEM SECTION

After the Hero, introduce the engineering problem briefly.

Heading:

> **Robotics development is still too fragmented.**

Use four compact problem blocks.

### Fragmented Hardware

Different motor controllers, sensors, power systems and compute modules often come from different vendors.

**Technical Impact:** More integration work.

### Protocol Debt

Different buses and interfaces require additional drivers, adapters and integration layers.

**Technical Impact:** More engineering overhead.

### Control Complexity

Different timing, processing and control layers have to work together reliably.

**Technical Impact:** Harder system-level validation.

### Integration Overhead

Teams spend engineering effort making components communicate before building the actual robotic application.

**Technical Impact:** Slower iteration.

Keep this section concise.

Do not make it a huge essay.

---

# 20. FUSIONDRIVE APPROACH

Heading:

> **Build the foundation once. Build more on top of it.**

Copy:

> FusionDrive is developing modular hardware and embedded systems around reusable interfaces, control infrastructure and software integration. The goal is to reduce repeated low-level engineering and create a stronger foundation for robotic systems.

Principles:

### Modular Hardware
Reusable building blocks

### Common Interfaces
Designed for system integration

### Embedded Control
Real-time hardware and firmware

### Expandable Architecture
Built to grow with the system

This is a direction/approach statement.

Do not present it as a completed ecosystem.

---

# 21. ENGINEERING SECTION

Purpose:

Show real engineering capability.

Show the actual workflow:

```text
DESIGN
↓
PCB
↓
FIRMWARE
↓
ASSEMBLY
↓
TESTING
↓
PROTOTYPE ITERATION
```

Use actual engineering evidence.

Possible evidence:

- PCB layout
- PCB design
- PCB fabrication
- Assembled boards
- Motor driver
- Controller
- CAD
- Wiring
- Firmware
- Serial/telemetry interfaces
- Testing setup
- Measurements
- Prototype iterations

---

# 22. ENGINEERING GALLERY

Every gallery image must answer:

1. What is shown?
2. Why does it matter?

Example:

### PCB Layout

> Multilayer routing and component placement for the controller architecture.

### Prototype Assembly

> Fabricated hardware assembled for functional validation.

### Testing

> Prototype connected to the test setup for functional and performance validation.

Do not use decorative engineering photographs.

---

# 23. ROADMAP

Roadmap is strictly future-facing.

Products and Roadmap must look visually different.

Use clear status labels:

```text
CURRENT
NEXT
PLANNED
FUTURE
LONG TERM
```

Concept:

```text
CURRENT
FusionDrive Motion
FusionDrive Core

↓

NEXT
Future products
Future capabilities

↓

LONG TERM
Integrated Robotics Ecosystem
```

Do not invent future product names or dates.

If specific 6/12/24 month milestones are later provided, add them.

Until then, use clearly labelled planned/future placeholders rather than pretending those products are already being built.

---

# 24. LONG-TERM VISION

The long-term goal is an integrated robotics hardware/software ecosystem.

The concept includes future areas such as:

- Motion control
- Embedded systems
- Sensors
- Power electronics
- AI computing
- Computer vision
- Developer tools
- Robotics software
- Connectivity

These are future platform directions unless explicitly marked as current products/capabilities.

The long-term ecosystem may be visually represented in Roadmap.

It must NOT be presented as a completed platform.

Do not put a large "8-node ecosystem" diagram on Home.

---

# 25. ABOUT SECTION

About should be compact and evidence-oriented.

Structure:

```text
ABOUT
│
├── Company
├── Recognition
├── Media Coverage
└── Founder
```

---

# 26. ABOUT — COMPANY

Briefly explain:

- Who FusionDrive is
- What it builds
- Current stage
- Long-term direction

Keep it short.

Do not repeat the entire Hero.

---

# 27. ABOUT — RECOGNITION

Recognition belongs inside About.

Confirmed company information states:

> DPIIT Recognized Startup

Only display confirmed statuses.

Correctly distinguish:

- Applied
- Granted
- Recognized
- Affiliated

Do not exaggerate:

- Government support
- Grants
- Incubation
- Recognition
- Funding

If another recognition is not confirmed, do not add it.

---

# 28. ABOUT — MEDIA COVERAGE

FusionDrive has also received newspaper coverage for its indigenous smart motor driver development.

Use the uploaded newspaper clipping as evidence.

The clipping shows a Gujarati newspaper article about a VGEC student developing an indigenous hardware-based smart motor driver and discusses FusionDrive's robotics hardware development.

### Placement

Put this inside:

```text
ABOUT
→ Media Coverage
```

Do NOT create a separate navbar item called Press or Media.

Do NOT make a huge newspaper section.

### Visual design

Use a clean media card or split layout:

```text
┌──────────────────────────────────────────────┐
│                                              │
│  [NEWSPAPER CLIPPING]   MEDIA COVERAGE       │
│                         Short explanation     │
│                         Publication/date*     │
│                         View coverage* ↗      │
│                                              │
└──────────────────────────────────────────────┘
```

The newspaper image should be displayed cleanly, with enough resolution to read the headline/details.

### IMPORTANT

Do not invent:

- Newspaper name
- Publication date
- Article URL
- Journalist name

If these details are not available from the source, show only:

> **Media Coverage**  
> Coverage of FusionDrive's indigenous smart motor driver development.

Add publication/date/link only after they are confirmed.

Do not call the article an "award" or "recognition".

---

# 29. ABOUT — FOUNDER

### Krish Parmar

**Founder & CEO**

Use a circular founder photograph.

Keep the biography short and technical.

Mention only genuine experience such as:

- Custom PCB design
- Firmware development
- Embedded systems
- Robotics
- Hands-on prototype development

Avoid generic founder language:

- Visionary
- Passionate entrepreneur
- Revolutionary
- Industry-leading
- Next-generation leader

### LinkedIn

Only LinkedIn.

Use an icon only, without a text button.

URL:

```text
https://www.linkedin.com/in/krishparmar-kp10/
```

Open in a new tab.

Do not include GitHub.

---

# 30. CONTACT SECTION

Contact should be practical and clean.

## Office

> Shop-512, Central Square, Opp. K B Royal Phoenix, Chandkheda, Ahmedabad, Gujarat 382424

## Registered Company

> FUSIONDRIVE TECHNOLOGIES (OPC) PRIVATE LIMITED

## Email

> info@fusiondrive.in

## Phone

Only use a confirmed company phone number.

Do not invent one.

---

# 31. CONTACT MAP

Include a map/location element for the office.

Use the supplied office address.

Do not fabricate coordinates.

If Google Maps integration is used, ensure the actual location corresponds to the supplied address.

If an API key/configuration is required, identify it clearly instead of silently failing.

---

# 32. CONTACT FORM

The contact form should have:

- Name
- Email
- Subject
- Message
- Submit

Do not show:

> Send Message (Demo)

in the final UI.

Do not falsely claim that a message was sent if there is no backend.

The frontend should be prepared for a real backend integration.

If backend is not yet configured, use a clear development state rather than fake success.

---

# 33. FOOTER

Minimal footer.

Include:

**FusionDrive logo**

> Building the robotics platform for intelligent machines.

Navigation:

- Home
- Products
- Engineering
- Roadmap
- About
- Contact

Social:

- LinkedIn only

Company:

> FusionDrive Technologies (OPC) Private Limited

Copyright:

> © 2026 FusionDrive Technologies (OPC) Private Limited. All rights reserved.

Do not add:

- Newsletter
- GitHub
- YouTube Coming Soon
- Fake social accounts
- Store
- Product catalogue
- Huge CTA
- Giant sitemap
- Fake awards

---

# 34. BACK TO TOP

Keep a subtle back-to-top button.

It smoothly scrolls to Home.

No separate route.

---

# 35. TECHNOLOGY STACK

The website should remain technically simple and maintainable.

### Required direction

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React
- **Styling:** use the project's existing styling system; Tailwind CSS is preferred if already installed
- **Build/dev:** use the project's existing Next.js tooling / Turbopack where supported
- **Icons:** use the existing icon library if already installed; do not add an unnecessary icon dependency
- **Images:** Next.js image optimization where appropriate
- **Navigation:** single-page anchor scrolling + Intersection Observer
- **Backend:** not required for the first frontend rebuild
- **Database:** not required for the first frontend rebuild

### IMPORTANT

Before changing the project:

1. Inspect `package.json`.
2. Inspect `next.config.*`.
3. Inspect the current source tree.
4. Inspect existing dependencies.
5. Inspect available assets in `/public`.
6. Confirm the actual installed framework/version and styling/icon libraries.

Do not blindly install new libraries.

Reuse existing dependencies where appropriate.

Do not introduce a large UI framework just for styling.

---

# 36. PROJECT STRUCTURE

Use clean reusable components.

Suggested conceptual structure:

```text
app/
  page.tsx
  ...

components/
  Navbar
  HomeSection
  ProductsSection
  ProductCard
  EngineeringSection
  EngineeringGallery
  RoadmapSection
  AboutSection
  MediaCoverage
  FounderSection
  ContactSection
  Footer
```

The exact structure may differ if the existing project architecture is cleaner.

Do not create unnecessary abstractions.

---

# 37. ASSET MANAGEMENT

Inspect the existing:

```text
/public/images
```

and other asset directories before implementation.

Use real FusionDrive assets wherever available.

Known branding asset:

```text
/images/combined-logo.svg
```

Do not recreate the logo.

For missing hardware photographs, ask for the actual photographs.

Do not generate fake product photographs and present them as real.

---

# 38. RESPONSIVE DESIGN

Desktop:

```text
Hero:
LEFT content | RIGHT products
```

Mobile:

```text
Eyebrow
Headline
Description
CTA
Information cards
Product showcase
```

All sections must remain readable on:

- Desktop
- Laptop
- Tablet
- Mobile

The product photographs must remain recognizable.

The navbar should adapt appropriately on mobile.

---

# 39. ANIMATION

Animation should be restrained.

Allowed:

- Smooth scrolling
- Gentle reveal animations
- Small hover transitions
- Subtle image movement
- Small interaction feedback

Avoid:

- Dramatic 3D spinning
- Excessive parallax
- Constant floating elements
- Full-screen transitions
- Neon effects
- Heavy blur/glow

Respect:

```text
prefers-reduced-motion
```

---

# 40. PERFORMANCE

Prioritize:

- Fast initial load
- Optimized images
- Correct image sizing
- Lazy loading below-the-fold images
- Minimal JavaScript
- Minimal dependencies
- No unnecessary animation libraries
- No oversized assets

Use Next.js image optimization where appropriate.

---

# 41. ACCESSIBILITY

Implement:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Accessible buttons
- Meaningful alt text
- Visible focus states
- Sufficient contrast
- Reduced-motion support

---

# 42. CONTENT INTEGRITY

Every claim should be supportable.

Before displaying any claim, ask:

> Is this current, documented, and verifiable?

If not:

- Remove it
- Mark it as future
- Or ask for confirmation

Never silently turn an ambition into a capability.

---

# 43. CURRENT VS FUTURE VISUAL LANGUAGE

This distinction must be obvious.

### CURRENT

Use:

- Working Prototype
- Prototype v1
- Current
- Validated
- Testing
- In development

### FUTURE

Use:

- Planned
- Future
- Roadmap
- Long term
- Intended
- Building toward

Do not visually style future concepts exactly like finished products.

---

# 44. WHAT MUST NOT BE INCLUDED

Do not create:

- Blog
- Careers
- Case Studies
- Press/Media navbar page
- Investor Portal
- FAQ
- Store
- E-commerce checkout
- Newsletter
- Fake testimonials
- Fake customer logos
- Fake awards
- Fake partnerships
- Fake certifications
- Fake product reviews
- Fake statistics
- Fake test results

Do not create empty placeholder sections.

---

# 45. OLD WEBSITE ELEMENTS TO REMOVE

Because this is a full rebuild, remove/replace old concepts including:

- Dark theme
- Theme toggle
- Purple styling
- Purple active navigation
- Old ecosystem cards
- Old Founder page layout
- GitHub founder link
- "Get in Touch" navbar button
- Product card numbers such as 01 / 02 / 03 if they are decorative
- Old separate-page behavior
- Old hard-coded active navigation
- Old fake/demo contact submission
- Old obsolete copy

The new design must feel like a deliberate restart, not a patched version.

---

# 46. FINAL VISUAL EXPERIENCE

The site should feel like:

> **A serious early-stage robotics hardware company showing real engineering work.**

Not:

> A generic AI startup landing page.

The strongest visual elements should be:

1. Real FusionDrive hardware in the Hero
2. Real product photography
3. Real PCB/engineering evidence
4. Clean technical typography
5. Restrained monochrome interface
6. Subtle sky-blue Hero atmosphere
7. Clear current-vs-future distinction

The site should be visually impressive without exaggerating the company's maturity.

---

# 47. FINAL VISITOR JOURNEY

```text
HOME
"What is FusionDrive?"
↓
Clear statement + real hardware.

PRODUCTS
"What have they actually built?"
↓
Two real prototypes + specifications + status.

ENGINEERING
"Can they actually build this?"
↓
PCB + firmware + testing evidence.

ROADMAP
"Where is this going?"
↓
Clearly labelled future development.

ABOUT
"Who is behind it and what external evidence exists?"
↓
Company + recognition + media coverage + founder.

CONTACT
"How can I engage?"
↓
Form + address + map + email.

FOOTER
Simple close.
```

---

# 48. IMPLEMENTATION ORDER

Do NOT try to build everything blindly in one pass.

Follow this order:

### Phase 1 — Audit

Inspect:

- Existing source code
- `package.json`
- Next.js configuration
- Tailwind/styling configuration
- Existing assets
- Existing fonts
- Existing images
- Existing dependencies

Report what exists before destructive changes.

### Phase 2 — Foundation

Implement:

- Light-only theme
- Global typography
- Global spacing
- Navbar
- Section structure
- Scroll behavior
- Active navigation
- Footer

### Phase 3 — Home

Implement:

- Hero
- Product showcase
- Information cards
- Problem section
- FusionDrive approach

### Phase 4 — Products

Implement both current prototypes with evidence-first layouts.

### Phase 5 — Engineering

Implement engineering workflow and gallery.

### Phase 6 — Roadmap

Implement future-only roadmap.

### Phase 7 — About

Implement:

- Company
- Recognition
- Media Coverage
- Founder

### Phase 8 — Contact

Implement:

- Contact information
- Map
- Form

### Phase 9 — QA

Test:

- Desktop
- Laptop
- Tablet
- Mobile
- Navbar active state
- Smooth scrolling
- Image loading
- Broken links
- Accessibility
- Console errors
- Performance
- No purple
- No dark mode
- No obsolete sections

---

# 49. MASTER RULE

**Do not invent. Do not exaggerate. Do not mix current and future.**

The website should make a skeptical technical visitor think:

> "They are early, but they have actually built something."

That is the intended impression.

The interface should communicate ambition through the roadmap and vision, while the Products and Engineering sections provide the evidence that makes that ambition credible.

**This document is the SOURCE OF TRUTH for the FusionDrive website rebuild.**
