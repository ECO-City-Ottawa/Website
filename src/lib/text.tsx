import { Fragment } from 'react';

/**
 * t() returns the key itself when a translation is missing (never falsy), so
 * `t(key) || fallback` never falls through. This checks properly: if the
 * lookup didn't find a real translation, use the fallback (the English/real
 * data) instead of showing a raw key like "mockProject.1.title" on the page.
 */
export function localize(t: (key: string) => string, key: string, fallback?: string) {
  const val = t(key);
  return val !== key ? val : fallback;
}

/**
 * Renders translation strings that use "<br/>" or "\n" as a line-break marker,
 * without parsing the string as HTML (safe even if the source ever becomes editable).
 */
export function renderWithBreaks(text: string) {
  const parts = text.split(/<br\s*\/?>|\n/i);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}
