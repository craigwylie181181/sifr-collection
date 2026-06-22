// Sifr Collection newsletter signup.
// Adds an email to a Resend audience. Runs as a Vercel serverless function.
// Requires two environment variables set in Vercel (never in the site):
//   RESEND_API_KEY        your Resend API key
//   RESEND_AUDIENCE_ID    the id of the Sifr audience in Resend
// Optional: SUBSCRIBE_NOTIFY  an email to copy on each new signup.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
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
    const r = await fetch('https://api.resend.com/audiences/' + audienceId + '/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, unsubscribed: false })
    });

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
          from: 'Sifr Collection <noreply@sifrcollection.com>',
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
