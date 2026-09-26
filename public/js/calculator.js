/**
 * DEVGLUT STUDIO — INTERACTIVE SPRINT ESTIMATOR & PRICING CALCULATOR
 * Real-time dynamic budget & delivery timeline engine
 */

import { STUDIO_CONFIG } from './config.js';
import { sound } from './audio.js';

export function initCalculator() {
  const scopeSlider = document.getElementById('calc-scope-slider');
  const scopeValueDisplay = document.getElementById('calc-scope-display');
  const scopePills = document.querySelectorAll('.scope-pill');
  const currencyBtns = document.querySelectorAll('.curr-btn');
  const rushCheckbox = document.getElementById('calc-rush-checkbox');
  
  const priceDisplay = document.getElementById('receipt-price');
  const timelineDisplay = document.getElementById('receipt-timeline');
  const featuresList = document.getElementById('receipt-features');
  const lockScopeBtn = document.getElementById('btn-lock-scope');

  if (!scopeSlider || !priceDisplay) return;

  let state = {
    screens: 3,
    tier: 'mvp', // 'mvp' | 'full' | 'enterprise'
    currency: 'INR', // 'INR' | 'USD'
    rush: false
  };

  const tierMultipliers = {
    mvp: 1.0,
    full: 1.75,
    enterprise: 2.85
  };

  const tierTimelines = {
    mvp: '10 - 14 Days',
    full: '3 - 4 Weeks',
    enterprise: '6 - 8 Weeks'
  };

  const tierFeatures = {
    mvp: [
      'Custom 3D / WebGL interactive hero scene',
      'Mobile-responsive ultra-fast frontend (60fps)',
      'Backend contact inquiry & lead capture API',
      'Basic SEO & OpenGraph meta configuration'
    ],
    full: [
      'Everything in MVP Sprint',
      'Custom WebGL shaders & spatial interactions',
      'Fullstack database architecture & auth integration',
      'CMS / Dynamic content administration pipeline',
      'Automated CI/CD deployment to Vercel/Render'
    ],
    enterprise: [
      'Everything in Full Platform',
      'Dedicated Generative AI Agent or Copilot engine',
      'Custom 3D model asset creation & animation',
      'Sub-second edge caching & distributed microservices',
      'Direct Slack/WhatsApp hotline with Farhan Khan & Harsh Rawat'
    ]
  };

  function recalculate() {
    let base = state.currency === 'INR' ? STUDIO_CONFIG.pricing.baseINR : STUDIO_CONFIG.pricing.baseUSD;
    let multiplier = tierMultipliers[state.tier];
    let screenFactor = 1 + (state.screens - 1) * 0.12;
    let rushFactor = state.rush ? 1.25 : 1.0;

    let finalPrice = Math.round(base * multiplier * screenFactor * rushFactor);
    
    // Format Price
    if (state.currency === 'INR') {
      priceDisplay.textContent = '₹' + finalPrice.toLocaleString('en-IN');
    } else {
      priceDisplay.textContent = '$' + finalPrice.toLocaleString('en-US');
    }

    // Format Timeline
    let timeline = tierTimelines[state.tier];
    if (state.rush) {
      timeline = '⚡ 7-Day Express Sprint';
    }
    timelineDisplay.textContent = 'Estimated Timeline: ' + timeline;

    // Render Features
    featuresList.innerHTML = '';
    tierFeatures[state.tier].forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
  }

  // Slider Event
  scopeSlider.addEventListener('input', (e) => {
    state.screens = parseInt(e.target.value, 10);
    scopeValueDisplay.textContent = `${state.screens} Screen${state.screens > 1 ? 's' : ''}`;
    sound.playHover();
    recalculate();
  });

  // Scope Pill Clicks
  scopePills.forEach(pill => {
    pill.addEventListener('click', () => {
      scopePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.tier = pill.getAttribute('data-scope');
      sound.playClick();
      recalculate();
    });
  });

  // Currency Toggle Clicks
  currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currencyBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currency = btn.getAttribute('data-currency');
      sound.playClick();
      recalculate();
    });
  });

  // Rush Toggle
  if (rushCheckbox) {
    rushCheckbox.addEventListener('change', (e) => {
      state.rush = e.target.checked;
      sound.playClick();
      recalculate();
    });
  }

  // Lock Scope Button -> Scroll to Brief & Prepopulate
  if (lockScopeBtn) {
    lockScopeBtn.addEventListener('click', () => {
      sound.playSuccess();
      const briefSection = document.getElementById('contact');
      if (briefSection) {
        briefSection.scrollIntoView({ behavior: 'smooth' });
        
        // Auto-fill budget input in contact form
        const budgetInput = document.getElementById('brief-budget');
        const descInput = document.getElementById('brief-desc');
        if (budgetInput) {
          budgetInput.value = priceDisplay.textContent;
        }
        if (descInput && !descInput.value) {
          descInput.value = `Targeting ${state.tier.toUpperCase()} Sprint with ${state.screens} screens (${state.rush ? 'Rush Delivery' : 'Standard Delivery'}).`;
        }
      }
    });
  }

  // Initial Calculation
  recalculate();
}
