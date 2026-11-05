import { NextResponse } from 'next/server';
import { sendFormEmail } from '@/lib/mailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  try {
    await sendFormEmail({
      subject: 'New newsletter subscriber',
      replyTo: email,
      lines: [{ label: 'Email', value: email }],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Newsletter signup email failed:', err);
    return NextResponse.json({ error: 'Could not subscribe you right now. Please try again later.' }, { status: 500 });
  }
}
