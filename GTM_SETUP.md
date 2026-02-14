# Google Tag Manager (GTM) Setup

This project includes Google Tag Manager and form-fill tracking. Follow these steps to finish setup.

## 1. Create a GTM container

1. Go to [Google Tag Manager](https://tagmanager.google.com/).
2. Create an account (if needed) and a **Web** container.
3. Copy your **Container ID** (e.g. `GTM-XXXXXXX`).

## 2. Add your Container ID to the website

Replace `GTM-XXXXXXX` with your real Container ID in **two places** in `index.html`:

- In the `<head>`: inside the script that loads `googletagmanager.com/gtm.js`.
- In the `<body>`: inside the `<noscript>` iframe `src` URL.

So change:
- `'GTM-XXXXXXX'` in the script (around line 8).
- `id=GTM-XXXXXXX` in the noscript iframe (around line 18).

## 3. Form-fill tracking (dataLayer events)

The site pushes these **Custom Events** to `dataLayer` when forms are submitted successfully:

| Event name             | When it fires                         | Example variables   |
|------------------------|----------------------------------------|---------------------|
| `form_submit_success`  | User successfully submits a form       | `form_name`, `page` |

**Variable names pushed:**

- `event` – `form_submit_success`
- `form_name` – e.g. `contact_form`, `about_contact_form`, `services_contact_form`
- `form_id` – e.g. `contact_us`, `about_page`, `services_page`
- `page` – current path (e.g. `/contact-us`, `/about`, `/services`)

## 4. Create a trigger and tag in GTM

### Trigger

1. In GTM: **Triggers** → **New**.
2. **Trigger type**: Custom Event.
3. **Event name**: `form_submit_success`.
4. Save and name it (e.g. “Form submit success”).

### Tag (e.g. Google Analytics 4)

1. **Tags** → **New**.
2. **Tag type**: e.g. Google Analytics: GA4 Event.
3. **Event name**: e.g. `form_submit` or `generate_lead`.
4. Add **Event Parameters** if you want:
   - `form_name` → Data Layer Variable: `form_name`
   - `form_id` → Data Layer Variable: `form_id`
   - `page` → Data Layer Variable: `page`
5. **Triggering**: select the “Form submit success” trigger.
6. Save and **Submit** your container.

### Data Layer Variables (for the tag)

Create these **Variables** in GTM (type: Data Layer Variable):

- **Data Layer Variable Name**: `form_name`
- **Data Layer Variable Name**: `form_id`
- **Data Layer Variable Name**: `page`

## 5. Optional: track form start (e.g. submit click)

The code can also push `form_submit_start` when the user clicks submit. If you add that in the app, create a second GTM trigger for the Custom Event `form_submit_start` and use it for tags that should fire on form start (e.g. for step tracking).

## Summary

- **index.html**: GTM snippet is already added; replace both `GTM-XXXXXXX` with your Container ID.
- **Forms tracked**: Contact (Contact Us page), About page contact form, Services page contact form.
- **Events**: `form_submit_success` with `form_name`, `form_id`, and `page` for conversion and analytics tags.
