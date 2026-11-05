// Shared server-side validation helpers for the form API routes (contact, volunteer).
// Client-side checks exist for UX only; everything here is the real gate.

/** Name of the hidden anti-bot field. Real visitors never see or fill it. */
export const HONEYPOT_FIELD = 'companyWebsite';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_EMAIL_LENGTH = 254;

/** Reject request bodies larger than this (these forms are a few KB at most). */
const MAX_BODY_BYTES = 50_000;

export type FieldSpec = { max: number; multiline?: boolean };

/** Parse a JSON request body with a size cap. Returns null if missing, too large, or not a JSON object. */
export async function readJsonBody(request: Request): Promise<Record<string, unknown> | null> {
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return null;
  }
  if (raw.length > MAX_BODY_BYTES) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
  } catch {
    // fall through
  }
  return null;
}

/** True when the hidden honeypot field has been filled in (i.e. almost certainly a bot). */
export function isHoneypotTripped(body: Record<string, unknown>): boolean {
  const value = body[HONEYPOT_FIELD];
  return typeof value === 'string' ? value.trim() !== '' : value !== undefined && value !== null && value !== false;
}

function cleanText(value: string, multiline: boolean): string {
  // Strip control characters. Single-line fields (which can end up in mail headers
  // such as the subject) also lose newlines/tabs, and have whitespace collapsed.
  const stripped = value.replace(multiline ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g, ' ');
  return (multiline ? stripped : stripped.replace(/\s+/g, ' ')).trim();
}

/**
 * Read string fields from a body according to a spec. Missing/null values become ''.
 * Returns null if any value is not a string or exceeds its max length.
 */
export function parseTextFields<K extends string>(
  body: Record<string, unknown>,
  spec: Record<K, FieldSpec>
): Record<K, string> | null {
  const out = {} as Record<K, string>;
  for (const key of Object.keys(spec) as K[]) {
    const raw = body[key];
    if (raw === undefined || raw === null) {
      out[key] = '';
      continue;
    }
    if (typeof raw !== 'string') return null;
    const { max, multiline = false } = spec[key];
    const value = cleanText(raw, multiline);
    if (value.length > max) return null;
    out[key] = value;
  }
  return out;
}

/** Read an optional list of short strings. Returns null if malformed or over the limits. */
export function parseStringList(raw: unknown, maxItems: number, maxItemLength: number): string[] | null {
  if (raw === undefined || raw === null) return [];
  if (!Array.isArray(raw) || raw.length > maxItems) return null;
  const out: string[] = [];
  for (const item of raw) {
    if (typeof item !== 'string') return null;
    const value = cleanText(item, false);
    if (value.length > maxItemLength) return null;
    if (value) out.push(value);
  }
  return out;
}

export function isValidEmail(email: string): boolean {
  return email.length > 0 && email.length <= MAX_EMAIL_LENGTH && EMAIL_RE.test(email);
}
