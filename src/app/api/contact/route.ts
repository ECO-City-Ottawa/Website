import { NextResponse } from 'next/server';
import { sendFormEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { fullName, email, phone, topic, ward, city, language, message, consent } = body;

  if (!fullName || !email || !message || !consent) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  try {
    await sendFormEmail({
      subject: `New contact message: ${topic || 'General question'}`,
      replyTo: email,
      lines: [
        { label: 'Full name', value: fullName },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'Topic', value: topic },
        { label: 'Ward / Neighbourhood', value: ward },
        { label: 'City', value: city },
        { label: 'Preferred language', value: language },
        { label: 'Message', value: message },
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form email failed:', err);
    return NextResponse.json({ error: 'Could not send your message. Please try again later.' }, { status: 500 });
  }
}
