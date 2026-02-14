# Contact Form – Vercel API + Resend

Forms now submit to your own API on Vercel and send email via **Resend** (no 50/month limit like Formspree).

## 1. Resend account

1. Sign up at [resend.com](https://resend.com).
2. In **API Keys**, create a key and copy it (starts with `re_`).
3. (Optional) Add and verify your domain in Resend so you can send from `contact@thenavra.in`. Until then you can use their test sender.

## 2. Vercel environment variables

In the [Vercel dashboard](https://vercel.com) → your project **www.thenavra.in** → **Settings** → **Environment Variables**, add:

| Name | Value | Notes |
|------|--------|--------|
| `RESEND_API_KEY` | `re_xxxx...` | Your Resend API key (required). |
| `CONTACT_TO_EMAIL` | `admin@thenavra.in` | Where form submissions are sent (required). |
| `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` | Sender address. Use your verified domain later (e.g. `contact@thenavra.in`). |
| `CONTACT_FROM_NAME` | `Navra` | Optional; used as sender name. |

Redeploy the project after saving so the new variables are applied.

## 3. Local testing (optional)

To test the form against the API locally:

- Run the app: `npm run dev`.
- Run Vercel dev (so `/api/contact` works): `npx vercel dev`.

Or test only on the deployed site after redeploying with the env vars set.

## Summary

- **API:** `api/contact.ts` (Vercel serverless function).
- **Forms:** Contact Us, About, and Services use `useContactForm()` and POST to `/api/contact`.
- **Email:** Resend sends to `CONTACT_TO_EMAIL` (e.g. 3,000/month on free tier).
- **GTM:** Form success tracking is unchanged; `form_submit_success` still fires on success.
