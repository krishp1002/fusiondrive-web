"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Building2, AlertCircle, CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formState === "submitting") return

    setFormState("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setFormState("error")
        setErrorMessage(
          data?.error || "Unable to send your message. Please try again or email us directly at info@fusiondrive.in."
        )
        return
      }

      // Success
      setFormState("success")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch {
      setFormState("error")
      setErrorMessage(
        "A network error occurred while sending your message. Please check your connection or email us directly at info@fusiondrive.in."
      )
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact FusionDrive"
      className="fd-section bg-white"
      style={{ borderTop: "1px solid #DCDCDC" }}
    >
      <div className="fd-container">
        <ScrollReveal>
          <div className="mb-12">
            <p className="fd-eyebrow mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] max-w-xl">
              Get in touch.
            </h2>
            <p className="mt-4 text-[#555] max-w-xl">
              For research collaboration, investment inquiries, technical partnerships,
              or engineering questions. We read every message.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* ── Left: contact info + map ── */}
          <div className="space-y-8">
            <ScrollReveal>
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-[#DCDCDC] bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={15} className="text-[#555]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#777] mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@fusiondrive.in"
                      className="text-sm text-[#111] font-medium hover:underline underline-offset-2"
                    >
                      info@fusiondrive.in
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-[#DCDCDC] bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={15} className="text-[#555]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#777] mb-1">
                      Office
                    </p>
                    <address className="not-italic text-sm text-[#555] leading-relaxed">
                      512, Central Square,<br />
                      Opp. K B Royal Phoenix,<br />
                      Chandkheda, Ahmedabad,<br />
                      Gujarat 382424, India
                    </address>
                  </div>
                </div>

                {/* Registered company */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-[#DCDCDC] bg-[#F8F8F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 size={15} className="text-[#555]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#777] mb-1">
                      Registered Company
                    </p>
                    <p className="text-sm text-[#555]">
                      FUSIONDRIVE TECHNOLOGIES (OPC) PRIVATE LIMITED
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map — Google Maps Embed API */}
            <ScrollReveal delay={80}>
              <div className="fd-map" role="region" aria-label="Office location map">
                <iframe
                  title="FusionDrive Technologies office location — 512, Central Square, Chandkheda, Ahmedabad"
                  src={
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                      ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:ChIJA-q1UsODXjkRozLyg49nqnM`
                      : `https://maps.google.com/maps?q=FusionDrive%20Technologies%2C%20512%2C%20Central%20Square%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424&t=&z=16&ie=UTF8&iwloc=&output=embed`
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing FusionDrive Technologies office at 512, Central Square, Chandkheda, Ahmedabad"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: contact form ── */}
          <ScrollReveal delay={40}>
            <div className="fd-card-flat">
              {formState === "success" ? (
                <div className="text-center py-8 text-[#555]">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3.5 border border-emerald-100">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="font-bold text-lg text-[#111]">Message sent successfully.</p>
                  <p className="text-sm mt-2 text-[#555] max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your submission and will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="mt-6 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-[#1677FF] hover:bg-blue-50/60 rounded-lg transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  {/* Error Notification Banner */}
                  {formState === "error" && errorMessage && (
                    <div
                      className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-5 text-sm text-red-800 flex items-start gap-2.5"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 leading-snug">
                        <p className="font-semibold">Unable to send message</p>
                        <p className="text-xs text-red-700 mt-0.5">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="contact-name" className="fd-label">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={formState === "submitting"}
                        className="fd-input"
                        placeholder="Your name"
                        autoComplete="name"
                        maxLength={120}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="fd-label">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={formState === "submitting"}
                        className="fd-input"
                        placeholder="your@email.com"
                        autoComplete="email"
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contact-subject" className="fd-label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={formState === "submitting"}
                      className="fd-input"
                      placeholder="e.g. Research collaboration inquiry"
                      maxLength={200}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="fd-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={formState === "submitting"}
                      className="fd-input resize-y"
                      placeholder="Tell us about your project, question, or inquiry…"
                      maxLength={5000}
                    />
                  </div>

                  <button
                    type="submit"
                    className="fd-btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? "Sending Message..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
