import { NextResponse } from 'next/server';
import { sendFormEmail } from '@/lib/mailer';
import { isHoneypotTripped, isValidEmail, parseTextFields, readJsonBody } from '@/lib/formValidation';

export async function POST(request: Request) {
  const body = await readJsonBody(request);

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success so they get no signal, send nothing.
  if (isHoneypotTripped(body)) {
    return NextResponse.json({ ok: true });
  }

  const fields = parseTextFields(body, {
    fullName: { max: 100 },
    email: { max: 254 },
    phone: { max: 40 },
    topic: { max: 100 },
    ward: { max: 100 },
    city: { max: 100 },
    language: { max: 30 },
    message: { max: 5000, multiline: true },
  });

  if (!fields) {
    return NextResponse.json({ error: 'One or more fields are invalid or too long.' }, { status: 400 });
  }

  const { fullName, email, phone, topic, ward, city, language, message } = fields;

  if (!fullName || !email || !message || body.consent !== true) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
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
