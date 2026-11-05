'use client';

import React from 'react';
import { HONEYPOT_FIELD } from '@/lib/formValidation';

/**
 * Hidden anti-bot field. Humans never see or tab to it; bots that auto-fill every
 * input will populate it, and the API routes silently discard those submissions.
 */
export default function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
