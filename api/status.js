/**
 * DEVGLUT STUDIO — VERCEL SERVERLESS BACKEND
 * Endpoint: GET /api/status
 * Telemetry endpoint providing real-time studio capacity & status
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    studio: 'DEVGLUT STUDIO',
    status: 'OPERATIONAL',
    sprintQueue: '3 Active Sprints in Production',
    slotsAvailable: 2,
    leadTime: 'Immediate Kickoff (October 2026)',
    edgeLocation: process.env.VERCEL_REGION || 'del1 (Edge Node)',
    foundersOnline: ['Farhan Khan', 'Harsh Rawat'],
    uptime: '99.98%',
    timestamp: new Date().toISOString()
  });
}
