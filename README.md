# DEVGLUT STUDIO — Creative Technology & Spatial Engineering

> **Founded & Directed by [Farhan Khan](https://github.com/Samfarhan) × [Harsh Rawat](https://github.com)**  
> Next-Gen 3D Spatial UI, WebGL Visual Engineering & High-Velocity Distributed Architectures.

---

## ⚡ Live Telemetry & Deployments

- **Live Production URL**: [https://devglut-studio.vercel.app](https://devglut-studio.vercel.app)
- **Active Telemetry Endpoint**: `/api/status`
- **Lead Time**: Immediate Kickoff (October 2026 Sprints)
- **Founders**: Farhan Khan (Creative Director) & Harsh Rawat (Technical Lead)

---

## 📁 Modular Architecture

This project is built using a clean, separated modular architecture:

```
devglut-studio/
├── public/                     # High-Performance Frontend Assets
│   ├── index.html              # Clean semantic HTML5 layout
│   ├── css/
│   │   ├── variables.css       # Design tokens, cyber neons, glassmorphism
│   │   ├── main.css            # Base styles, glowing cursor, grid background
│   │   ├── components.css      # Hero, services, calculator, founders, brief form
│   │   └── animations.css      # 60fps keyframes, pulse rings, scanline effects
│   └── js/
│       ├── config.js           # Studio constants, founders data, capabilities
│       ├── audio.js            # Web Audio API procedural sound engine
│       ├── canvas-3d.js        # Three.js 3D interactive wireframe monolith
│       ├── calculator.js       # Real-time dynamic sprint estimator (₹ / $)
│       ├── terminal.js         # Interactive developer CLI modal (`~` shortcut)
│       ├── api-client.js       # Active backend API client & toast notifications
│       └── main.js             # Main orchestrator & smooth interactions
├── api/                        # Vercel Serverless Functions
│   ├── contact.js              # POST /api/contact - handles client briefs & lead capture
│   ├── quote.js                # POST /api/quote - dynamic pricing & sprint breakdown
│   └── status.js               # GET /api/status - real-time studio capacity telemetry
├── server.js                   # Node.js + Express standalone backend (for Render & local dev)
├── render.yaml                 # 1-Click Render.com deployment blueprint
├── vercel.json                 # Vercel static rewrites + serverless routing
└── package.json                # Project dependencies & npm scripts
```

---

## 🚀 Running Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Backend & Frontend**:
   ```bash
   npm start
   ```

3. Open **`http://localhost:3000`** in your browser.
   - The interactive 3D WebGL scene will render automatically.
   - Press **`~`** (tilde) anywhere on the page to open the interactive **devglut-os** terminal.
   - Use the **Sprint Calculator** to estimate budgets in INR or USD.
   - Submitting the brief sends a real POST request to the active backend!

---

## ☁️ Deployment

### Option 1: Vercel (Current Setup)
Push the repository to GitHub:
```bash
git add .
git commit -m "feat: modular devglut studio with active backend"
git push origin main
```
Vercel automatically serves the static assets from `public/` and mounts `/api/*.js` as serverless functions.

### Option 2: Render.com
1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **New +** > **Web Service**
3. Select your repository `Samfarhan/devglut-studio`
4. Render will auto-detect `render.yaml` or set:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Click **Deploy Web Service**!

---

## 🛠️ Tech Stack

- **3D Spatial / WebGL**: Three.js, GLSL Shaders, Canvas 2D
- **Procedural Sound**: Native Web Audio API (Oscillators + Gain Nodes)
- **Frontend Architecture**: ES6 Modules, Modern CSS Custom Properties, IntersectionObserver
- **Active Backend**: Node.js, Express, Vercel Serverless Functions
- **Design Tokens**: Void Black (`#050508`), Cyber Blue (`#0055ff`), Electric Cyan (`#00f0ff`)

---

## 👥 Studio Leadership

- **Farhan Khan** — Founder & Creative Director  
  *Spatial UI, 3D Systems, Creative Direction, Brand Architecture*  
  GitHub: [@Samfarhan](https://github.com/Samfarhan)

- **Harsh Rawat** — Co-Founder & Technical Lead  
  *Fullstack Architecture, Distributed Cloud Systems, High-Concurrency APIs*

---

© 2026 DEVGLUT STUDIO. Engineered with precision.
