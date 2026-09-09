import { Fragment } from 'react';

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
