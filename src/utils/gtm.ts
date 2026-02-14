/**
 * Google Tag Manager (GTM) dataLayer helpers for form and event tracking.
 * Ensure GTM snippet is installed in index.html with your container ID (GTM-XXXXXXX).
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Initialize dataLayer if GTM script hasn't run yet */
function ensureDataLayer(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
}

/**
 * Push a custom event to GTM dataLayer (e.g. form fill / form submit success).
 * In GTM: create a Trigger → Custom Event, Event name: form_submit_success (or form_fill).
 */
export function pushFormSubmitSuccess(options: {
  formName: string;
  formId?: string;
  page?: string;
}): void {
  ensureDataLayer();
  window.dataLayer.push({
    event: 'form_submit_success',
    form_name: options.formName,
    form_id: options.formId ?? undefined,
    page: options.page ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
  });
}

/**
 * Push when user starts a form (e.g. first focus or submit click).
 * In GTM: create a Trigger → Custom Event, Event name: form_submit_start.
 */
export function pushFormSubmitStart(options: {
  formName: string;
  formId?: string;
  page?: string;
}): void {
  ensureDataLayer();
  window.dataLayer.push({
    event: 'form_submit_start',
    form_name: options.formName,
    form_id: options.formId ?? undefined,
    page: options.page ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
  });
}
