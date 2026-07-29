import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the FusionDrive website.",
}

export default function TermsAndConditionsPage() {
  return (
    <main className="fd-container py-16">
      <h1 className="text-3xl font-semibold text-white">Terms & Conditions</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
        The FusionDrive website is provided for informational purposes regarding our
        engineering work, platform vision, and collaboration opportunities.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
        By using this website, you agree not to misuse the content, attempt
        unauthorized access, or represent FusionDrive without written permission.
      </p>
    </main>
  )
}