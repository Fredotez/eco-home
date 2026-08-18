import { NextResponse } from "next/server";

export async function GET() {
  console.log("DEBUG: contact API test endpoint hit");

  return NextResponse.json({
    status: "ok",
    message: "Contact API test endpoint is working.",
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  console.log("DEBUG: contact API POST received", payload);

  return NextResponse.json({
    status: "success",
    receivedAt: new Date().toISOString(),
    payload,
  });
}
