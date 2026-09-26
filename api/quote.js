/**
 * DEVGLUT STUDIO — VERCEL SERVERLESS BACKEND
 * Endpoint: POST /api/quote
 * Calculates dynamic project estimation & deliverables matrix
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    const { screens = 3, tier = 'mvp', currency = 'INR', rush = false } = req.body || {};

    const baseINR = 125000;
    const baseUSD = 1500;
    const tierMultipliers = { mvp: 1.0, full: 1.75, enterprise: 2.85 };
    const tierDays = { mvp: 12, full: 24, enterprise: 45 };

    const base = currency === 'INR' ? baseINR : baseUSD;
    const multiplier = tierMultipliers[tier] || 1.0;
    const screenFactor = 1 + (Math.max(1, screens) - 1) * 0.12;
    const rushFactor = rush ? 1.25 : 1.0;

    const estimatedTotal = Math.round(base * multiplier * screenFactor * rushFactor);
    const estimatedDays = rush ? 7 : Math.round((tierDays[tier] || 14) * (screenFactor * 0.8));

    return res.status(200).json({
      success: true,
      tier,
      screens,
      currency,
      estimatedTotal,
      formattedPrice: currency === 'INR' ? `₹${estimatedTotal.toLocaleString('en-IN')}` : `$${estimatedTotal.toLocaleString('en-US')}`,
      estimatedBusinessDays: estimatedDays,
      rushDelivery: rush,
      sprintDirectors: ['Farhan Khan (Creative)', 'Harsh Rawat (Engineering)']
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
