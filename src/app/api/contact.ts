import { NextResponse } from 'next/server';
import { contactSection } from '../../lib/homeData';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  services?: string[];
  service?: string;
  message?: string;
};

function buildPlainText(data: ContactPayload) {
  const lines: string[] = [];
  lines.push(`Name: ${data.firstName ?? ''} ${data.lastName ?? ''}`);
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.phone) lines.push(`Phone: ${data.phone}`);
  const requested = data.service ?? (data.services && data.services.join(', ')) ?? '';
  if (requested) lines.push(`Requested service(s): ${requested}`);
  if (data.message) lines.push('\nMessage:\n' + data.message);
  return lines.join('\n');
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;

    // Basic validation
    if (!payload.firstName || !payload.lastName || !payload.email || !payload.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO || contactSection.email;
    const fromEmail = process.env.SENDGRID_FROM || `no-reply@${toEmail.split('@')[1] || 'eco-home.services'}`;
    const subject = `Website contact: ${payload.service ?? (payload.services ?? []).join(', ') || 'General inquiry'}`;

    const plain = buildPlainText(payload);
    const html = `<p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Phone:</strong> ${payload.phone}</p>
      <p><strong>Requested service(s):</strong> ${payload.service ?? (payload.services ?? []).join(', ')}</p>
      <p><strong>Message:</strong></p>
      <p>${(payload.message || '').replace(/\n/g, '<br/>')}</p>`;

    const sendgridKey = process.env.SENDGRID_API_KEY;
    if (!sendgridKey) {
      // Server not configured to actually send email
      console.error('SENDGRID_API_KEY not set; cannot send email');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const body = {
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject,
        },
      ],
      from: { email: fromEmail, name: 'Eco-Home Website' },
      content: [
        { type: 'text/plain', value: plain },
        { type: 'text/html', value: html },
      ],
    };

    const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sendgridKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('SendGrid error', resp.status, text);
      return NextResponse.json({ error: 'Failed to send email', details: text }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact endpoint error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
