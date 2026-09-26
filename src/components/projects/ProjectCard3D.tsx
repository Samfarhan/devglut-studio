'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, reverse, onOpenCaseStudy }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Custom visual renderers for distinct identities
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    if (project.visualType === 'spatial-3d') {
      // 3D Wireframe Icosahedron Spatial Field
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, (canvas.clientWidth || 400) / (canvas.clientHeight || 400), 0.1, 100);
      camera.position.z = 4.2;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(canvas.clientWidth || 400, canvas.clientHeight || 400);

      const geo = new THREE.IcosahedronGeometry(1.4, 2);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x050508,
        wireframe: true,
        roughness: 0.2,
      });

      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      const light = new THREE.DirectionalLight(0x0033ff, 2.5);
      light.position.set(2, 4, 3);
      scene.add(light);

      let animId: number;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.007;
        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
      };
    } else if (project.visualType === 'neural-graph') {
      // Dynamic Neural Node Graph
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = canvas.clientWidth || 500;
      canvas.height = canvas.clientHeight || 480;

      const nodes = Array.from({ length: 22 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.5,
      }));

      let animId: number;
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Nodes
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
          if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        animId = requestAnimationFrame(draw);
      };
      draw();

      return () => {
        cancelAnimationFrame(animId);
      };
    }
  }, [project.visualType]);

  return (
    <article className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-white/[0.08] ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Editorial Content Column */}
      <div className={`lg:col-span-5 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-xs text-[#52525c] tracking-wider">{project.projectNumber}</span>
          <span className="text-[10px] font-semibold tracking-[0.16em] uppercase px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#90909e]">
            {project.badge}
          </span>
        </div>

        <h3 className="text-[clamp(1.8rem,3vw,3.2rem)] font-bold tracking-[-0.03em] uppercase text-white mb-4 leading-tight">
          {project.title}
        </h3>

        <p className="text-[#90909e] text-base leading-relaxed mb-8 max-w-lg">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-[#70707e] bg-[#0c0c10] border border-white/[0.06] px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Case Study Trigger */}
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] uppercase text-white pb-1 border-b border-white/30 hover:border-[#0033ff] hover:text-[#0033ff] transition-all duration-200"
        >
          <span>View Case Study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Visual Preview Column */}
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative w-full h-[460px] bg-[#09090c] border border-white/[0.08] hover:border-white/20 transition-colors duration-300 rounded overflow-hidden flex items-center justify-center">
          
          {project.visualType === 'product-telemetry' ? (
            <div className="w-[90%] h-[85%] bg-[#0c0c10] border border-white/[0.08] rounded p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 font-mono text-[11px] text-[#52525c]">
                <span>// APEX_ORDER_STREAM</span>
                <span>LIVE FEED</span>
              </div>
              <div className="flex items-end gap-2.5 h-44 py-4">
                {[35, 60, 45, 80, 70, 95, 65, 85, 40, 75, 90, 55].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-white/10 hover:bg-[#0033ff]/70 transition-colors duration-200 rounded-sm"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between font-mono text-[11px] text-[#52525c]">
                <span>TICK: 0.0024ms</span>
                <span>STATE: STABLE</span>
              </div>
            </div>
          ) : (
            <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
          )}

          <div className="absolute bottom-6 left-6 z-10 flex flex-col font-mono text-[11px] text-[#52525c] tracking-wider">
            <span>{project.category.toUpperCase()}</span>
            <span>SYSTEM PREVIEW</span>
          </div>

        </div>
      </div>

    </article>
  );
};
