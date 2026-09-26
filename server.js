/**
 * DEVGLUT STUDIO — STANDALONE NODE.JS / EXPRESS BACKEND SERVER
 * Serves static production assets & handles API endpoints
 * Ideal for Render.com Web Services or local development (`npm start`)
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ensure data directory exists for logging inquiries
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  try {
    fs.mkdirSync(dataDir, { recursive: true });
  } catch (e) {}
}

const briefsFilePath = path.join(dataDir, 'briefs.json');

// Helper to save brief
function saveBrief(brief) {
  try {
    let briefs = [];
    if (fs.existsSync(briefsFilePath)) {
      const content = fs.readFileSync(briefsFilePath, 'utf8');
      briefs = JSON.parse(content || '[]');
    }
    briefs.unshift(brief);
    fs.writeFileSync(briefsFilePath, JSON.stringify(briefs, null, 2));
  } catch (err) {
    console.error('[DATABASE WRITE ERROR]', err.message);
  }
}

/* ==========================================================================
   API ENDPOINTS
   ========================================================================== */

// 1. POST /api/contact - Handle Client Project Briefs
app.post('/api/contact', (req, res) => {
  const { name, email, service, budget, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Name and email are required.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.'
    });
  }

  const ticketId = `DEVGLUT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const briefRecord = {
    ticketId,
    name,
    email,
    service: service || 'Spatial & WebGL Engineering',
    budget: budget || '₹1,25,000+',
    message: message || '',
    receivedAt: new Date().toISOString()
  };

  saveBrief(briefRecord);
  console.log(`[NEW BRIEF] Ticket ${ticketId} registered from ${name} (${email})`);

  return res.status(200).json({
    success: true,
    ticket: ticketId,
    message: 'Project brief successfully queued for review by Farhan Khan and Harsh Rawat.',
    reviewTimeline: '12 Hours guaranteed turnaround',
    client: { name, email, service, budget },
    foundersNotified: ['Farhan Khan', 'Harsh Rawat'],
    timestamp: briefRecord.receivedAt
  });
});

// 2. POST /api/quote - Dynamic Cost & Timeline Calculation
app.post('/api/quote', (req, res) => {
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
});

// 3. GET /api/status - Studio Telemetry & Capacity Check
app.get('/api/status', (req, res) => {
  return res.status(200).json({
    studio: 'DEVGLUT STUDIO',
    status: 'OPERATIONAL',
    sprintQueue: '3 Active Sprints in Production',
    slotsAvailable: 2,
    leadTime: 'Immediate Kickoff (October 2026)',
    nodeVersion: process.version,
    foundersOnline: ['Farhan Khan', 'Harsh Rawat'],
    uptime: `${Math.round(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// Fallback to index.html for single page routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`⚡ DEVGLUT STUDIO ACTIVE BACKEND RUNNING ON PORT ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`👤 Founders: Farhan Khan × Harsh Rawat`);
  console.log(`======================================================\n`);
});
