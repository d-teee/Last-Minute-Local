# Last Minute Local — landing page

React + Vite implementation of the Last Minute Local marketing/waitlist landing page.

## Develop

```bash
npm install
npm run dev
```

## Waitlist form

Both waitlist forms (customer + business) submit to a [Formspree](https://formspree.io) endpoint.

1. Create a free account at [formspree.io](https://formspree.io) and add a new form.
2. Copy its endpoint (looks like `https://formspree.io/f/xxxxxxxx`).
3. Locally: copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT` to that endpoint.
4. On Vercel: Project Settings → Environment Variables → add `VITE_FORMSPREE_ENDPOINT` with the same value, then redeploy.

Submissions include a `kind` field (`customer` or `business`) plus the entered form fields, so you can tell the two apart in your Formspree inbox.

## Build

```bash
npm run build
```
