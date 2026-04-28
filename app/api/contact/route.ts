import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  organisation?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { status: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, topic, message } = body;

  if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
    return NextResponse.json(
      { status: false, message: "Name, email, topic and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { status: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // TODO: wire up real delivery (SMTP, Resend, SendGrid, or internal email relay).
  // For now, log the submission so the form UX is end-to-end functional.
  console.log("[contact] submission", {
    name,
    organisation: body.organisation ?? null,
    email,
    phone: body.phone ?? null,
    topic,
    messageLength: message.length,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ status: true, message: "Message received." });
}
