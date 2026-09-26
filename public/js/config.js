/**
 * DEVGLUT STUDIO — CONFIGURATION & CONSTANTS
 * Studio Founders: Farhan Khan × Harsh Rawat
 */

export const STUDIO_CONFIG = {
  brandName: 'DEVGLUT',
  tagline: 'Spatial Computing, 3D Systems & High-Velocity Engineering',
  sprintStatus: '⚡ Q4 SPRINTS ACTIVE — 2 SLOTS OPEN',
  
  founders: [
    {
      name: 'Farhan Khan',
      role: 'Founder & Creative Director',
      bio: 'Visionary creative technologist specializing in spatial UI, WebGL visual engineering, and cinematic brand identities that capture market dominance.',
      avatarInitial: 'FK',
      skills: ['Spatial 3D Design', 'Creative Direction', 'WebGL / Three.js', 'Brand Systems'],
      socials: {
        github: 'https://github.com/Samfarhan',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      name: 'Harsh Rawat',
      role: 'Co-Founder & Technical Lead',
      bio: 'Fullstack systems architect engineering sub-second distributed microservices, ultra-low-latency real-time apps, and enterprise cloud infrastructure.',
      avatarInitial: 'HR',
      skills: ['Fullstack Systems', 'Distributed Clouds', 'Next.js / Node.js', 'Low-Latency APIs'],
      socials: {
        github: 'https://github.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com'
      }
    }
  ],

  capabilities: [
    {
      id: '01',
      title: '3D Spatial & WebGL Experiences',
      desc: 'Immersive, GPU-accelerated interactive web landscapes with real-time physics, custom shaders, and 60fps responsive canvas architectures.',
      tags: ['Three.js', 'GLSL Shaders', 'WebGPU', 'Blender Pipelines']
    },
    {
      id: '02',
      title: 'High-Velocity Fullstack Architecture',
      desc: 'Blazing fast web apps built on Next.js, React, Node.js, and serverless distributed microservices with guaranteed 99.9% uptime.',
      tags: ['Next.js 14', 'TypeScript', 'Node.js', 'PostgreSQL / Redis']
    },
    {
      id: '03',
      title: 'Generative AI & Agentic Platforms',
      desc: 'Custom enterprise AI agents, automated workflow copilots, real-time vector embeddings, and cognitive business intelligence systems.',
      tags: ['Gemini / OpenAI', 'LangChain', 'Vector DBs', 'Agentic Workflows']
    },
    {
      id: '04',
      title: 'Elite Brand & Cybernetic Identity',
      desc: 'Avant-garde visual identity, micro-interactions, dark-mode luxury design systems, and digital aesthetics engineered to dominate market mindshare.',
      tags: ['Design Systems', 'Micro-Interactions', 'Figma Tokens', 'Motion Graphics']
    }
  ],

  pricing: {
    baseINR: 125000,
    baseUSD: 1500,
    exchangeRate: 83.5,
    scopeMultipliers: {
      mvp: 1.0,
      full: 1.75,
      enterprise: 2.8
    }
  },

  apiEndpoints: {
    contact: '/api/contact',
    quote: '/api/quote',
    status: '/api/status'
  }
};
