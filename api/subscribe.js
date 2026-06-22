// Sifr Collection newsletter signup.
// Adds an email to Resend as a contact. Runs as a Vercel serverless function.
// Requires one environment variable set in Vercel (never in the site):
//   RESEND_API_KEY        your Resend API key
// Optional: SUBSCRIBE_NOTIFY  an email to alert on each new signup
//           (sends from a verified Resend domain, noreply@astongroupuae.com).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Newsletter is not configured yet.' });
  }

  // Accept JSON or form-encoded bodies
  let email = '';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    email = (body.email || '').toString().trim().toLowerCase();
  } catch (e) {
    email = '';
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  try {
    const r = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, unsubscribed: false })
    });

    // 409 means the contact already exists, which we treat as success
    if (!r.ok && r.status !== 409) {
      const detail = await r.text();
      return res.status(502).json({ ok: false, error: 'Could not subscribe right now.', detail: detail.slice(0, 200) });
    }

    // Optional internal notification, best-effort, never blocks the response
    if (process.env.SUBSCRIBE_NOTIFY) {
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'Sifr Collection <noreply@astongroupuae.com>',
          to: process.env.SUBSCRIBE_NOTIFY,
          subject: 'New Sifr brief subscriber',
          text: email + ' subscribed to the Sifr Weekly Brief.'
        })
      }).catch(function () {});
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ ok: false, error: 'Could not subscribe right now.' });
  }
}
