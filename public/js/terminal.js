/**
 * DEVGLUT STUDIO — INTERACTIVE DEVELOPER TERMINAL (devglut-os)
 * Hacker CLI with real-time command processing & system queries
 */

import { STUDIO_CONFIG } from './config.js';
import { sound } from './audio.js';

export function initTerminal() {
  const modalBackdrop = document.getElementById('terminal-modal');
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const terminalCloseBtn = document.getElementById('terminal-close-btn');
  const terminalTriggerBtn = document.getElementById('btn-open-terminal');
  const footerTerminalBtn = document.getElementById('footer-open-terminal');

  if (!modalBackdrop || !terminalInput) return;

  function openTerminal() {
    modalBackdrop.classList.add('open');
    sound.playClick();
    terminalInput.focus();
  }

  function closeTerminal() {
    modalBackdrop.classList.remove('open');
    sound.playClick();
  }

  // Event Listeners
  if (terminalTriggerBtn) terminalTriggerBtn.addEventListener('click', openTerminal);
  if (footerTerminalBtn) footerTerminalBtn.addEventListener('click', openTerminal);
  if (terminalCloseBtn) terminalCloseBtn.addEventListener('click', closeTerminal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeTerminal();
  });

  // Keyboard Shortcut: '~' (tilde/backtick) or Escape to close
  window.addEventListener('keydown', (e) => {
    if (e.key === '`' || e.key === '~') {
      e.preventDefault();
      if (modalBackdrop.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    } else if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeTerminal();
    }
  });

  // Print line to terminal
  function printLine(text, color = '#d1d5db') {
    const p = document.createElement('div');
    p.style.color = color;
    p.style.marginBottom = '4px';
    p.innerHTML = text;
    terminalBody.insertBefore(p, terminalBody.lastElementChild);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  // Handle Command Submission
  terminalInput.addEventListener('keydown', async (e) => {
    sound.playKey();
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      terminalInput.value = '';
      if (!rawCmd) return;

      printLine(`<span style="color:#00f0ff;">farhan@devglut-os:~$</span> ${rawCmd}`);

      const args = rawCmd.toLowerCase().split(' ');
      const command = args[0];

      switch (command) {
        case 'help':
          printLine(`Available Commands:`);
          printLine(`  <span style="color:#00f0ff;">founders</span>   - View Studio Leadership & Founders`);
          printLine(`  <span style="color:#00f0ff;">services</span>   - List 4 Core Engineering Disciplines`);
          printLine(`  <span style="color:#00f0ff;">status</span>     - Check Live Studio Capacity & Sprint Queue`);
          printLine(`  <span style="color:#00f0ff;">quote</span>      - Quick Sprint Pricing Matrix`);
          printLine(`  <span style="color:#00f0ff;">ping</span>       - Test Latency to Backend API`);
          printLine(`  <span style="color:#00f0ff;">clear</span>      - Clear Terminal Display`);
          printLine(`  <span style="color:#00f0ff;">exit</span>       - Close Terminal`);
          sound.playClick();
          break;

        case 'founders':
        case 'team':
          printLine(`<b>DEVGLUT STUDIO LEADERSHIP:</b>`, '#ffffff');
          STUDIO_CONFIG.founders.forEach(f => {
            printLine(`• <b>${f.name}</b> — <span style="color:#00f0ff;">${f.role}</span>`);
            printLine(`  ${f.bio}`, '#9ca3af');
            printLine(`  Stack: ${f.skills.join(', ')}`, '#6b7280');
          });
          sound.playSuccess();
          break;

        case 'services':
        case 'capabilities':
          printLine(`<b>CORE DISCIPLINES:</b>`, '#ffffff');
          STUDIO_CONFIG.capabilities.forEach(c => {
            printLine(`[${c.id}] <span style="color:#00f0ff;">${c.title}</span>`);
            printLine(`    ${c.desc}`, '#9ca3af');
          });
          sound.playSuccess();
          break;

        case 'status':
          printLine(`Fetching live telemetry from backend /api/status...`, '#60a5fa');
          try {
            const res = await fetch(STUDIO_CONFIG.apiEndpoints.status);
            const data = await res.json();
            printLine(`• System Health: <span style="color:#00ff88;">${data.status}</span>`);
            printLine(`• Sprint Queue: ${data.sprintQueue}`);
            printLine(`• Available Q4 Slots: <span style="color:#00f0ff;">${data.slotsAvailable}</span>`);
            printLine(`• Operational Founders: ${data.foundersOnline.join(' & ')} (Online)`);
            sound.playSuccess();
          } catch (err) {
            printLine(`• System Status: <span style="color:#00ff88;">OPERATIONAL (Offline Mode)</span>`);
            printLine(`• Slots Available: 2 Q4 Sprints`);
            printLine(`• Leadership: Farhan Khan & Harsh Rawat Active`);
          }
          break;

        case 'quote':
        case 'pricing':
          printLine(`<b>DEVGLUT SPRINT TIERS:</b>`, '#ffffff');
          printLine(`• MVP Sprint: ₹1,25,000 / $1,500 (10-14 days)`);
          printLine(`• Full Product: ₹2,18,000 / $2,625 (3-4 weeks)`);
          printLine(`• Enterprise Flagship: ₹3,56,000 / $4,275 (6-8 weeks)`);
          printLine(`Use the on-page interactive slider for custom calculations.`);
          sound.playClick();
          break;

        case 'ping':
          const start = performance.now();
          printLine(`Pinging backend API...`, '#9ca3af');
          try {
            await fetch('/api/status', { method: 'HEAD' });
            const latency = Math.round(performance.now() - start);
            printLine(`Pong! Latency: <span style="color:#00ff88;">${latency}ms</span>`);
          } catch (e) {
            printLine(`Pong! Simulated Edge Latency: <span style="color:#00ff88;">14ms</span>`);
          }
          sound.playClick();
          break;

        case 'clear':
          const rows = terminalBody.querySelectorAll('div:not(.terminal-prompt-row)');
          rows.forEach(r => r.remove());
          break;

        case 'exit':
        case 'quit':
          closeTerminal();
          break;

        default:
          printLine(`devglut-os: command not found: "${rawCmd}". Type <span style="color:#00f0ff;">help</span> for manual.`, '#f87171');
          sound.playClick();
          break;
      }
    }
  });
}
