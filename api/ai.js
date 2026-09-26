/**
 * DEVGLUT STUDIO — VERCEL SERVERLESS BACKEND
 * Endpoint: POST /api/ai
 * AI Studio Copilot Engine representing Farhan Khan & Harsh Rawat
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
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
    const { prompt, message } = req.body || {};
    const query = (prompt || message || '').trim().toLowerCase();

    if (!query) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a prompt query.'
      });
    }

    let reply = '';
    let category = 'general';

    if (query.includes('farhan') || query.includes('creative') || (query.includes('who') && query.includes('founder'))) {
      category = 'leadership';
      reply = `<strong>Farhan Khan</strong> is Co-Founder &amp; Creative Director at DEVGLUT. He commands our spatial 3D WebGL architecture, luxury visual identity, and high-fidelity interaction design. Every digital artifact produced by DEVGLUT undergoes his direct aesthetic supervision.`;
    } else if (query.includes('harsh') || query.includes('technical') || query.includes('architect')) {
      category = 'leadership';
      reply = `<strong>Harsh Rawat</strong> is Co-Founder &amp; Technical Architect at DEVGLUT. He leads autonomous multi-agent AI topologies, vector retrieval pipelines, microsecond Vercel edge runtimes, and Rust WASM systems, ensuring zero main-thread lockup and 99.98% reliability SLAs.`;
    } else if (query.includes('price') || query.includes('pricing') || query.includes('cost') || query.includes('rate') || query.includes('tier')) {
      category = 'commercial';
      reply = `DEVGLUT operates on milestone-gated fixed sprint pricing:<br/>&bull; <strong>Rapid Prototype:</strong> ₹19,999 (3–5 Days)<br/>&bull; <strong>Spatial Pro 3D Engine:</strong> ₹44,999 (7–14 Days)<br/>&bull; <strong>Flagship AI &amp; Spatial Suite:</strong> ₹99,999 (14–28 Days)<br/>All deliverables include 100% IP transfer and direct founder Slack access.`;
    } else if (query.includes('webgl') || query.includes('3d') || query.includes('shader') || query.includes('fps')) {
      category = 'engineering';
      reply = `Our spatial engines utilize custom GLSL fragment shaders, GPU vertex instancing, and dielectric reflections. We benchmark every viewport to sustain <strong>60.0 FPS</strong> with sub-45ms draw latencies across Apple Silicon and Android mobile chipsets.`;
    } else if (query.includes('time') || query.includes('timeline') || query.includes('fast') || query.includes('urgency') || query.includes('when')) {
      category = 'cadence';
      reply = `We deploy initial live staging environments in <strong>48 to 72 hours</strong>. Full production sprints complete within 2 to 4 weeks. Currently, <strong>2 slots remain</strong> for October 2026.`;
    } else if (query.includes('contact') || query.includes('hire') || query.includes('brief') || query.includes('book') || query.includes('email')) {
      category = 'onboarding';
      reply = `You can transmit your brief directly to Farhan Khan &amp; Harsh Rawat via the <a href="#" onclick="toggleAiDrawer(); openProjectModal();" style="color: #34d399; text-decoration: underline;">Project Brief Ingestion Modal</a>, or email <a href="mailto:founders@devglut.com" style="color: #34d399;">founders@devglut.com</a>. Guaranteed 12-hour turnaround.`;
    } else {
      category = 'consultation';
      reply = `DEVGLUT transforms complex digital ambitions into iconic reality — spatial 3D WebGL experiences, autonomous AI reasoning agents, and sub-millisecond edge architecture. Would you like to <a href="#" onclick="toggleAiDrawer(); openProjectModal('Custom Architecture');" style="color: #34d399; text-decoration: underline;">Initiate a Project Brief</a> with Farhan &amp; Harsh?`;
    }

    return res.status(200).json({
      success: true,
      category,
      reply,
      studioCapacity: '2 Slots Remaining for October 2026',
      directorsOnline: ['Farhan Khan', 'Harsh Rawat'],
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('[AI COPILOT ERROR]', err);
    return res.status(500).json({
      success: false,
      error: 'Studio AI is temporarily recalculating neural weights.'
    });
  }
}
