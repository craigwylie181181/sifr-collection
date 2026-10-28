// Sifr Collection contact form.
// Emails each enquiry to the Sifr inbox through Resend. Runs as a Vercel serverless function.
// Uses the same RESEND_API_KEY as api/subscribe.js (set in Vercel, never in the site).
// Optional: CONTACT_TO  overrides the inbox enquiries are sent to.

const DEFAULT_TO = 'c.wylie@sifrcollection.com';

function clean(v, max) {
  return (v || '').toString().trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Contact form is not configured yet.' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch (e) {
    body = {};
  }

  // Honeypot: real visitors never see or fill the "website" field
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  const org = clean(body.org, 200);
  const message = clean(body.message, 5000);

  if (!name) {
    return res.status(400).json({ ok: false, error: 'Please enter your name.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Sifr Collection <noreply@astongroupuae.com>',
        to: process.env.CONTACT_TO || DEFAULT_TO,
        reply_to: email,
        subject: 'Sifr enquiry from ' + name + (org ? ' (' + org + ')' : ''),
        text: 'Name: ' + name + '\nEmail: ' + email + '\nOrganisation: ' + (org || '-') + '\n\n' + (message || '(no message)')
      })
    });

    if (!r.ok) {
      const detail = await r.text();
      return res.status(502).json({ ok: false, error: 'Could not send right now.', detail: detail.slice(0, 200) });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'Could not send right now.' });
  }
}
