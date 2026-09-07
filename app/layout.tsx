import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fusiondrive.in"),
  title: "FusionDrive",
  description:
    "FusionDrive is an early-stage robotics hardware company developing modular hardware and embedded systems for intelligent machines. Based in Ahmedabad, India.",
  applicationName: "FusionDrive",
  keywords: [
    "robotics hardware",
    "motor driver",
    "embedded systems",
    "modular robotics",
    "FusionDrive Motion",
    "FusionDrive Core",
    "Ahmedabad robotics",
    "India robotics startup",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "FusionDrive — Robotics Hardware & Embedded Systems",
    description:
      "Building modular hardware and embedded systems for intelligent machines. Two working prototypes: FusionDrive Motion and FusionDrive Core.",
    url: "https://fusiondrive.in",
    siteName: "FusionDrive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionDrive — Robotics Hardware & Embedded Systems",
    description:
      "Early-stage robotics hardware company building modular motion control and controller platforms for intelligent machines.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:bg-white focus:text-[#111] focus:px-4 focus:py-2 focus:rounded focus:shadow-md focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-[#1A6FAB]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
