import { NextResponse } from "next/server";

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

async function submitToHubSpot(payload: ContactPayload) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  if (!portalId || !formId) {
    throw new Error("HubSpot form configuration is missing.");
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(portalId)}/${encodeURIComponent(formId)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "firstname", value: payload.firstName ?? "" },
          { name: "lastname", value: payload.lastName ?? "" },
          { name: "email", value: payload.email ?? "" },
          { name: "phone", value: payload.phone ?? "" },
          { name: "service", value: formatRequestedService(payload) },
          { name: "message", value: payload.message ?? "" },
        ],
      }),
    },
  );

  if (!response.ok) {
    const details = await response.text();
    console.error("HubSpot form submission failed", response.status, details);
    throw new Error("HubSpot form submission failed.");
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Contact API test endpoint is working.",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone) {
    return NextResponse.json(
      { error: "Missing required contact information." },
      { status: 400 },
    );
  }

  try {
    await submitToHubSpot(payload);
  } catch (error) {
    console.error("Contact submission failed", error);
    return NextResponse.json(
      { error: "We could not process your request. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    status: "success",
    receivedAt: new Date().toISOString(),
    message: "Your message has been sent successfully.",
  });
}
