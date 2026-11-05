import nodemailer from 'nodemailer';

type MailLine = { label: string; value?: string | null };

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      'GMAIL_USER and GMAIL_APP_PASSWORD must be set (see .env.example) before the site can send form emails.'
    );
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  return transporter;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function sendFormEmail({
  subject,
  lines,
  replyTo,
}: {
  subject: string;
  lines: MailLine[];
  replyTo?: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;

  const text = lines
    .map(({ label, value }) => `${label}: ${value && value.trim() ? value : '(not provided)'}`)
    .join('\n');

  const rows = lines
    .map(({ label, value }) => {
      const safeValue = value && value.trim() ? escapeHtml(value).replace(/\n/g, '<br/>') : '<span style="color:#8B9184;">(not provided)</span>';
      return `<tr>
        <td style="padding:6px 16px 6px 0;color:#63695F;font:600 13px system-ui,sans-serif;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
        <td style="padding:6px 0;color:#1B211D;font:14px system-ui,sans-serif;vertical-align:top;">${safeValue}</td>
      </tr>`;
    })
    .join('');

  const html = `<div style="font-family:system-ui,sans-serif;max-width:560px;">
    <h2 style="font-size:16px;color:#1F6D4A;margin:0 0 16px;">${escapeHtml(subject)}</h2>
    <table style="border-collapse:collapse;width:100%;">${rows}</table>
    <p style="color:#8B9184;font-size:12px;margin-top:24px;">Sent automatically from the EcoCity Ottawa website.</p>
  </div>`;

  await getTransporter().sendMail({
    from: `"EcoCity Ottawa Website" <${process.env.GMAIL_USER}>`,
    to,
    replyTo,
    subject,
    text,
    html,
  });
}
