import { NextResponse } from 'next/server';
import { sendFormEmail } from '@/lib/mailer';
import {
  isHoneypotTripped,
  isValidEmail,
  parseStringList,
  parseTextFields,
  readJsonBody,
} from '@/lib/formValidation';

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
    city: { max: 100 },
    ward: { max: 100 },
    availability: { max: 100 },
    language: { max: 30 },
    skills: { max: 2000, multiline: true },
  });
  const interests = parseStringList(body.interests, 20, 100);
  const roles = parseStringList(body.roles, 20, 100);

  if (!fields || !interests || !roles) {
    return NextResponse.json({ error: 'One or more fields are invalid or too long.' }, { status: 400 });
  }

  const { fullName, email, phone, city, ward, availability, language, skills } = fields;

  if (!fullName || !email || body.consent !== true) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  try {
    await sendFormEmail({
      subject: 'New volunteer sign-up',
      replyTo: email,
      lines: [
        { label: 'Full name', value: fullName },
        { label: 'Email', value: email },
        { label: 'Phone', value: phone },
        { label: 'City', value: city },
        { label: 'Ward / Neighbourhood', value: ward },
        { label: 'Availability', value: availability },
        { label: 'Interests', value: interests.join(', ') },
        { label: 'Preferred language', value: language },
        { label: 'Preferred roles', value: roles.join(', ') },
        { label: 'Skills / notes', value: skills },
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Volunteer form email failed:', err);
    return NextResponse.json({ error: 'Could not send your sign-up. Please try again later.' }, { status: 500 });
  }
}
