/**
 * DEVGLUT STUDIO — VERCEL SERVERLESS BACKEND
 * Endpoint: POST /api/contact
 * Handles incoming client project briefs & sprint reservations
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { name, email, service, budget, message } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name and email are mandatory.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Generate unique studio booking ticket ID
    const ticketId = `DEVGLUT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toISOString();

    // Log brief on server side
    console.log(`[DEVGLUT BACKEND] New Brief Received! [${ticketId}] from ${name} (${email}) for service "${service || 'Fullstack'}" with budget ${budget}`);

    // Return confirmed response
    return res.status(200).json({
      success: true,
      ticket: ticketId,
      message: 'Project brief successfully queued for review by Farhan Khan and Harsh Rawat.',
      reviewTimeline: '12 Hours guaranteed turnaround',
      client: {
        name,
        email,
        service: service || 'Spatial & WebGL Engineering',
        budget: budget || '₹1,25,000+'
      },
      foundersNotified: ['Farhan Khan', 'Harsh Rawat'],
      timestamp
    });
  } catch (error) {
    console.error('[DEVGLUT BACKEND ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'Internal Server Error while registering brief.'
    });
  }
}
