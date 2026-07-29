import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fusiondrive.ai"),
  title: {
    default: "FusionDrive | Operating Platform for Intelligent Machines",
    template: "%s | FusionDrive",
  },
  description:
    "FusionDrive helps robotics organizations deploy, optimize, and scale autonomous fleets with resilient orchestration, adaptive autonomy, and mission assurance.",
  applicationName: "FusionDrive",
  keywords: [
    "robotics platform",
    "autonomous fleet orchestration",
    "robotics operations",
    "autonomy infrastructure",
    "industrial robotics software",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FusionDrive | Operating Platform for Intelligent Machines",
    description:
      "Production-ready operating platform for intelligent machines, from fleet orchestration to mission assurance.",
    url: "https://fusiondrive.ai",
    siteName: "FusionDrive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionDrive | Operating Platform for Intelligent Machines",
    description:
      "Deploy, optimize, and scale autonomous robotic fleets with production-grade software infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only z-[100] m-3 rounded-md bg-cyan-300 px-3 py-2 text-sm font-medium text-slate-950 focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
