'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const StudioHeroSculpture: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Engineered Geometric Monolith (Smoked Titanium / Obsidian Digital Sculpture)
    const geometry = new THREE.TorusKnotGeometry(1.6, 0.42, 160, 32, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0x121217,
      roughness: 0.18,
      metalness: 0.95,
      wireframe: false,
    });

    const sculpture = new THREE.Mesh(geometry, material);
    // Positioned offset to support typography without visual competition
    sculpture.position.set(1.4, 0.2, 0);
    scene.add(sculpture);

    // Studio Lighting (Clean, Directional, Realistic Reflections)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Crisp Directional Studio Key
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(-6, 8, 6);
    scene.add(keyLight);

    // Intentional Electric Blue Rim Light from rear
    const rimLight = new THREE.DirectionalLight(0x0033ff, 3.2);
    rimLight.position.set(8, -4, -4);
    scene.add(rimLight);

    // Subtle Cyan Fill
    const fillLight = new THREE.PointLight(0x00d9ff, 0.6, 20);
    fillLight.position.set(-4, -4, 4);
    scene.add(fillLight);

    // Smooth Cursor Responsiveness
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 0.35;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Sizing
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (window.innerWidth < 768) {
        sculpture.position.set(0, 0.8, 0);
        sculpture.scale.set(0.65, 0.65, 0.65);
      } else {
        sculpture.position.set(1.4, 0.2, 0);
        sculpture.scale.set(1, 1, 1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Subtle, steady rotation
      sculpture.rotation.x += 0.003;
      sculpture.rotation.y += 0.004;

      // Inertia interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      sculpture.rotation.x += mouseY * 0.02;
      sculpture.rotation.y += mouseX * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden"
      aria-hidden="true"
    />
  );
};
