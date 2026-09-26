import { Project, CapabilityDiscipline, LeadershipMember } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'kroma',
    projectNumber: 'PROJECT 01',
    title: 'Kroma Spatial',
    category: 'Creative Technology',
    badge: 'EXPERIMENTAL BUILD',
    headline: 'Real-time WebGL Spatial Audio Engine',
    summary: 'A real-time WebGL spatial audio engine allowing multi-channel sound visualization in three dimensions with zero audio latency.',
    fullOverview: 'Kroma Spatial is an architectural study in low-latency WebGL spatial audio processing. It leverages Web Audio API gain nodes with custom positional math to let listeners explore immersive 3D sonic environments right inside the browser without third-party audio player bloat.',
    highlights: [
      'Procedural sound wave deformation on a reactive 3D polygonal geometry',
      'Zero third-party audio dependencies — pure Web Audio API oscillator synthesis',
      '60 FPS GPU-accelerated rendering on both desktop and mobile platforms'
    ],
    techStack: ['WebGL', 'Three.js', 'Web Audio API', 'GLSL Shaders', 'TypeScript'],
    visualType: 'spatial-3d'
  },
  {
    id: 'synapse',
    projectNumber: 'PROJECT 02',
    title: 'Synapse Kernel',
    category: 'Intelligent Systems',
    badge: 'CONCEPT PROJECT',
    headline: 'Autonomous Reasoning & Neural Graph Topology',
    summary: 'Intelligent workflow intelligence visualizing dynamic cognitive paths and real-time algorithmic decisions in an interactive neural graph.',
    fullOverview: 'Synapse Kernel is a real-time topology visualizer for autonomous AI agent decision chains. It transforms complex multi-step reasoning steps into an intuitive, interactive spatial node tree with instant feedback loops.',
    highlights: [
      'Dynamic cognitive path visualization with animated edge propagation',
      'Streaming markdown rendering with syntax-highlighted code blocks',
      'Sub-20ms rendering loop utilizing HTML5 Canvas 2D context optimization'
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Vector Embeddings', 'Canvas Topology', 'Tailwind CSS'],
    visualType: 'neural-graph'
  },
  {
    id: 'apex',
    projectNumber: 'PROJECT 03',
    title: 'Apex Protocol',
    category: 'Digital Engineering',
    badge: 'STUDIO ARCHIVE',
    headline: 'High-Throughput Financial SaaS Architecture',
    summary: 'High-throughput financial analytics platform delivering sub-millisecond market execution telemetry with strict zero-layout-shift UI.',
    fullOverview: 'Apex Protocol was engineered as a zero-layout-shift financial dashboard capable of sustaining thousands of concurrent WebSocket price ticks without freezing the main UI thread.',
    highlights: [
      'Zero cumulative layout shifts (CLS = 0) during aggressive live price re-renders',
      'Virtual DOM diffing bypass using direct Canvas-backed ticker rails',
      'Tested against extreme burst loads of 5,000 updates/second'
    ],
    techStack: ['React', 'WebSocket Engine', 'Tailwind CSS', 'Rust WASM Core'],
    visualType: 'product-telemetry'
  }
];

export const capabilitiesData: CapabilityDiscipline[] = [
  {
    number: '01 — DISC',
    title: 'Digital Engineering',
    services: [
      'Full-stack development',
      'Web applications',
      'SaaS architecture',
      'API systems'
    ]
  },
  {
    number: '02 — DISC',
    title: 'Creative Technology',
    services: [
      '3D WebGL experiences',
      'Three.js and shader architecture',
      'Interactive digital installations',
      'Physics-based motion systems'
    ]
  },
  {
    number: '03 — DISC',
    title: 'Intelligent Systems',
    services: [
      'Applied AI applications',
      'Autonomous agents & workflows',
      'Retrieval Augmented Generation (RAG)',
      'Predictive data pipelines'
    ]
  },
  {
    number: '04 — DISC',
    title: 'Digital Growth',
    services: [
      'Technical SEO & Core Web Vitals',
      'Performance optimization',
      'Conversion architecture',
      'Global accessibility compliance'
    ]
  }
];

export const leadershipData: LeadershipMember[] = [
  {
    name: 'Farhan Khan',
    role: 'Creative Technology Lead',
    bio: 'Leading 3D spatial computing, interactive WebGL architecture, and real-time creative engineering. Focused on turning complex digital ideas into fluid, tactile browser experiences.',
    specialization: ['WebGL', 'Three.js', 'Interactive Systems']
  },
  {
    name: 'Harsh Rawat',
    role: 'Creative Technology Lead',
    bio: 'Directing distributed web architecture, applied intelligence, and high-performance product systems. Focused on uncompromised speed, resilient cloud infrastructure, and autonomous workflows.',
    specialization: ['AI Systems', 'Next.js Architecture', 'Performance']
  }
];
