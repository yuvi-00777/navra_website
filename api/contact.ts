import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/** Build email HTML from form data */
function buildEmailBody(data: Record<string, string>): string {
  const rows = Object.entries(data)
    .filter(([, v]) => v != null && String(v).trim() !== '')
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${String(v).replace(/</g, '&lt;')}</td></tr>`)
    .join('');
  return `
    <h2>New contact form submission</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      ${rows}
    </table>
    <p><em>Sent from www.thenavra.in</em></p>
  `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS: allow same-origin and explicit origin
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }
  if (!toEmail) {
    console.error('CONTACT_TO_EMAIL or RESEND_TO_EMAIL is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Invalid body' });
    }

    const html = buildEmailBody(body as Record<string, string>);

    const resendClient = new Resend(apiKey);
    const { data, error } = await resendClient.emails.send({
      from: process.env.CONTACT_FROM_NAME
        ? `${process.env.CONTACT_FROM_NAME} <${fromEmail}>`
        : `Navra Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `[Navra] New enquiry from ${body.name || 'website'}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
