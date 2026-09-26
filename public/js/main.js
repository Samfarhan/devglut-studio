/**
 * DEVGLUT STUDIO — MAIN ORCHESTRATOR
 * Initializes all modules, custom cursor, scroll effects & form interactions
 */

import { STUDIO_CONFIG } from './config.js';
import { sound } from './audio.js';
import { init3DCanvas } from './canvas-3d.js';
import { initCalculator } from './calculator.js';
import { initTerminal } from './terminal.js';
import { submitContactBrief } from './api-client.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Three.js WebGL Scene
  init3DCanvas('hero-canvas-container');

  // 2. Initialize Sprint Estimator & Calculator
  initCalculator();

  // 3. Initialize Developer Terminal CLI
  initTerminal();

  // 4. Custom Glowing Cursor Tracking
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (cursor && cursorDot) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    const hoverables = document.querySelectorAll('a, button, input, select, textarea, .service-card, .founder-card, .scope-pill');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
        sound.playHover();
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
      });
    });
  }

  // 5. Sound Toggle in Navbar
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.classList.toggle('active', sound.isEnabled());
    soundToggleBtn.addEventListener('click', () => {
      const isNowEnabled = sound.toggle();
      soundToggleBtn.classList.toggle('active', isNowEnabled);
      const icon = soundToggleBtn.querySelector('span');
      if (icon) {
        icon.textContent = isNowEnabled ? '🔊' : '🔇';
      }
    });
  }

  // 6. Navbar Scroll Blur & Styling
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // 7. Scroll Reveal Animation for Cards
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));

  // 8. Contact / Project Brief Form Submission to Active Backend
  const briefForm = document.getElementById('brief-form');
  const submitBtn = document.getElementById('btn-submit-brief');

  if (briefForm) {
    briefForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      sound.playClick();

      const name = document.getElementById('brief-name').value.trim();
      const email = document.getElementById('brief-email').value.trim();
      const service = document.getElementById('brief-service').value;
      const budget = document.getElementById('brief-budget').value.trim();
      const message = document.getElementById('brief-desc').value.trim();

      if (!name || !email) {
        alert('Please provide your name and email address.');
        return;
      }

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>⚡ Transmitting to Studio Backend...</span>';

      const payload = {
        name,
        email,
        service,
        budget: budget || '₹1,25,000+',
        message: message || 'Custom Sprint Exploration',
        submittedAt: new Date().toISOString()
      };

      await submitContactBrief(payload);

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      briefForm.reset();
    });
  }

  // 9. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinks.style.display === 'flex';
      navLinks.style.display = isOpen ? 'none' : 'flex';
      sound.playClick();
    });
  }
});
