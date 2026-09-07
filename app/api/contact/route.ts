import { NextResponse } from "next/server"
import { getSupabaseServerClient } from "@/lib/supabaseServer"
import { sendContactNotificationEmail } from "@/lib/email"

// RFC 5322 compliant email format validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

// Maximum field length limits
const MAX_NAME_LENGTH = 120
const MAX_EMAIL_LENGTH = 255
const MAX_SUBJECT_LENGTH = 200
const MAX_MESSAGE_LENGTH = 5000

export async function POST(request: Request) {
  try {
    // 1. Content-Type check
    const contentType = request.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid Content-Type. Expected application/json." },
        { status: 400 }
      )
    }

    // 2. Parse request JSON body safely
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: "Malformed JSON in request body." },
        { status: 400 }
      )
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = body as Record<string, unknown>

    // 3. Trim inputs
    const cleanName = typeof name === "string" ? name.trim() : ""
    const cleanEmail = typeof email === "string" ? email.trim() : ""
    const cleanSubject = typeof subject === "string" ? subject.trim() : ""
    const cleanMessage = typeof message === "string" ? message.trim() : ""

    // 4. Validate Name
    if (!cleanName) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      )
    }
    if (cleanName.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: `Name exceeds maximum allowed length of ${MAX_NAME_LENGTH} characters.` },
        { status: 400 }
      )
    }

    // 5. Validate Email
    if (!cleanEmail) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }
    if (cleanEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: `Email exceeds maximum allowed length of ${MAX_EMAIL_LENGTH} characters.` },
        { status: 400 }
      )
    }
    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    // 6. Validate Subject
    if (!cleanSubject) {
      return NextResponse.json(
        { error: "Subject is required." },
        { status: 400 }
      )
    }
    if (cleanSubject.length > MAX_SUBJECT_LENGTH) {
      return NextResponse.json(
        { error: `Subject exceeds maximum allowed length of ${MAX_SUBJECT_LENGTH} characters.` },
        { status: 400 }
      )
    }

    // 7. Validate Message
    if (!cleanMessage) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      )
    }
    if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      )
    }

    // 8. Insert into Supabase `contact_submissions` table
    const supabase = getSupabaseServerClient()

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          status: "new",
        },
      ])

    if (dbError) {
      console.error("[Contact API] Supabase insertion error:", dbError.message)
      return NextResponse.json(
        {
          error:
            "Unable to submit your message at this time. Please try again or email us directly at info@fusiondrive.in.",
        },
        { status: 500 }
      )
    }

    // 9. Send email notification via Resend (asynchronous background notification)
    // If Resend fails, we log it safely and do NOT fail the user's inquiry
    sendContactNotificationEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    }).catch((emailErr) => {
      console.error("[Contact API] Background email notification error:", emailErr)
    })

    // 10. Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your message has been received.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Contact API] Unhandled server error:", error)
    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while processing your request. Please email us directly at info@fusiondrive.in.",
      },
      { status: 500 }
    )
  }
}
