import { useState, useCallback } from 'react';

const API_CONTACT = '/api/contact';

export type ContactFormState = {
  submitting: boolean;
  succeeded: boolean;
  errors: Array<{ field: string; message: string }>;
};

export type ContactFormReturn = {
  state: ContactFormState;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

/** Minimal ValidationError-compatible helper for use with useContactForm */
export function FormError({
  field,
  errors,
  className,
  style,
}: {
  field: string;
  errors?: Array<{ field: string; message: string }>;
  className?: string;
  style?: React.CSSProperties;
}) {
  const err = errors?.find((e) => e.field === field);
  if (!err) return null;
  return (
    <span className={className} style={style}>
      {err.message}
    </span>
  );
}

/**
 * Hook to submit contact form to our Vercel API (Resend).
 * Replaces Formspree for higher submission limits.
 */
export function useContactForm(): ContactFormReturn {
  const [state, setState] = useState<ContactFormState>({
    submitting: false,
    succeeded: false,
    errors: [],
  });

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body: Record<string, string> = {};
    formData.forEach((value, key) => {
      body[key] = String(value);
    });

    setState((s) => ({ ...s, submitting: true, errors: [] }));

    try {
      const res = await fetch(API_CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        let message = data?.error || 'Failed to send. Please try again.';
        if (res.status === 404) message = 'Form API not found (404). Check deployment.';
        setState((s) => ({
          ...s,
          submitting: false,
          errors: [{ field: 'form', message }],
        }));
        return;
      }

      setState((s) => ({ ...s, submitting: false, succeeded: true, errors: [] }));
    } catch {
      setState((s) => ({
        ...s,
        submitting: false,
        errors: [{ field: 'form', message: 'Network error. Please try again.' }],
      }));
    }
  }, []);

  return { state, handleSubmit };
}
