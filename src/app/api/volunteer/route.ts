import { NextResponse } from 'next/server';
import { sendFormEmail } from '@/lib/mailer';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    fullName,
    email,
    phone,
    city,
    ward,
    availability,
    interests,
    language,
    roles,
    skills,
    consent,
  } = body;

  if (!fullName || !email || !consent) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
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
        { label: 'Interests', value: Array.isArray(interests) ? interests.join(', ') : interests },
        { label: 'Preferred language', value: language },
        { label: 'Preferred roles', value: Array.isArray(roles) ? roles.join(', ') : roles },
        { label: 'Skills / notes', value: skills },
      ],
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Volunteer form email failed:', err);
    return NextResponse.json({ error: 'Could not send your sign-up. Please try again later.' }, { status: 500 });
  }
}
