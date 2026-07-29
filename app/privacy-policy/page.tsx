import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for FusionDrive website visitors and inquiries.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="fd-container py-16">
      <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
        FusionDrive respects your privacy. If you contact us, we only use the
        information you provide to respond to your inquiry and maintain relevant
        communication regarding collaboration opportunities.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">
        We do not sell personal data. For privacy-related requests, email
        hello@fusiondrive.ai.
      </p>
    </main>
  )
}