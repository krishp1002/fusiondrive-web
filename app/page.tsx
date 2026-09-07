import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { VisionSection } from "@/components/VisionSection"
import { ProblemSection, ApproachSection } from "@/components/ProblemApproach"
import { ProductsSection } from "@/components/ProductsSection"
import { EngineeringSection } from "@/components/EngineeringSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { BackToTop } from "@/components/BackToTop"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FUSIONDRIVE TECHNOLOGIES (OPC) PRIVATE LIMITED",
  legalName: "FUSIONDRIVE TECHNOLOGIES (OPC) PRIVATE LIMITED",
  url: "https://fusiondrive.in",
  email: "info@fusiondrive.in",
  description:
    "Early-stage robotics hardware company developing modular hardware and embedded systems for intelligent machines.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "512, Central Square, Opp. K B Royal Phoenix",
    addressLocality: "Chandkheda, Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382424",
    addressCountry: "IN",
  },
  founder: {
    "@type": "Person",
    name: "Krish Parmar",
    jobTitle: "Founder & CEO",
    sameAs: "https://www.linkedin.com/in/krishparmar-kp10/",
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <VisionSection />
        <ProblemSection />
        <ApproachSection />
        <ProductsSection />
        <EngineeringSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
