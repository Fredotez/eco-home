import { NextResponse } from "next/server";
import { contactSection } from "../../../lib/homeData";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  services?: string[];
  message?: string;
};

function formatRequestedService(payload: ContactPayload) {
  return payload.service ?? payload.services?.join(", ") ?? "General inquiry";
}

function buildPlainTextEmail(payload: ContactPayload) {
  const lines = [
    `Name: ${payload.firstName ?? ""} ${payload.lastName ?? ""}`.trim(),
    payload.email ? `Email: ${payload.email}` : null,
    payload.phone ? `Phone: ${payload.phone}` : null,
    `Requested service(s): ${formatRequestedService(payload)}`,
    payload.message ? `\nMessage:\n${payload.message}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

function buildHtmlEmail(payload: ContactPayload) {
  const serviceLabel = formatRequestedService(payload);
  const message = (payload.message ?? "").replace(/\n/g, "<br />");

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
      <h2 style="margin: 0 0 16px; color: #064e3b;">New Eco-Home Website Inquiry</h2>
      <p><strong>Name:</strong> ${payload.firstName ?? ""} ${payload.lastName ?? ""}</p>
      <p><strong>Email:</strong> ${payload.email ?? "N/A"}</p>
      <p><strong>Phone:</strong> ${payload.phone ?? "N/A"}</p>
      <p><strong>Requested service(s):</strong> ${serviceLabel}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No additional details provided."}</p>
    </div>
  `;
}

export async function GET() {
  console.log("DEBUG: contact API test endpoint hit");

  return NextResponse.json({
    status: "ok",
    message: "Contact API test endpoint is working.",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => ({}))) as ContactPayload;

  console.log("DEBUG: contact API POST received", payload);

  if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone) {
    return NextResponse.json(
      { error: "Missing required contact information." },
      { status: 400 },
    );
  }

  const toEmail = process.env.CONTACT_TO || contactSection.email;
  const fromEmail = process.env.CONTACT_FROM || "no-reply@eco-home.services";
  const sendgridKey = process.env.SENDGRID_API_KEY;

  if (!sendgridKey) {
    console.error("SENDGRID_API_KEY is not configured; contact email was not sent.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const subject = `Website inquiry: ${formatRequestedService(payload)}`;
  const plainText = buildPlainTextEmail(payload);
  const html = buildHtmlEmail(payload);

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sendgridKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail }], subject }],
      from: { email: fromEmail, name: "Eco-Home" },
      reply_to: { email: payload.email },
      content: [
        { type: "text/plain", value: plainText },
        { type: "text/html", value: html },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    console.error("SendGrid email error", response.status, text);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    status: "success",
    receivedAt: new Date().toISOString(),
    message: "Your message has been sent successfully.",
  });
}
