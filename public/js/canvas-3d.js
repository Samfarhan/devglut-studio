/**
 * DEVGLUT STUDIO — 3D WEBGL MONOLITH & PARTICLE GALAXY
 * Powered by Three.js with mouse tracking & 60fps RAF loop
 */

export function init3DCanvas(containerId = 'hero-canvas-container') {
  const container = document.getElementById(containerId);
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 24;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Group to rotate together
  const group = new THREE.Group();
  scene.add(group);

  // 1. Outer Geometric Monolith (Icosahedron Wireframe)
  const outerGeo = new THREE.IcosahedronGeometry(7, 1);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.75
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  group.add(outerMesh);

  // 2. Inner Glowing Core (Torus Knot)
  const innerGeo = new THREE.TorusKnotGeometry(3.6, 0.6, 64, 16);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x0055ff,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  group.add(innerMesh);

  // 3. Central Energy Sphere
  const coreGeo = new THREE.SphereGeometry(1.8, 16, 16);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: false,
    transparent: true,
    opacity: 0.8
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  group.add(coreMesh);

  // 4. Particle Starfield (1200 glowing cyber particles)
  const particlesCount = 1200;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 50;
    positions[i + 1] = (Math.random() - 0.5) * 50;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x00d9ff,
    size: 0.12,
    transparent: true,
    opacity: 0.6
  });
  const particleField = new THREE.Points(particleGeo, particleMat);
  scene.add(particleField);

  // Mouse Interaction with Smooth Damping
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    targetX = (x / rect.width) * 2;
    targetY = (y / rect.height) * 2;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    if (!container) return;
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  });

  // Animation Loop (60fps)
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Damped interpolation for ultra-smooth responsiveness
    mouseX += (targetX - mouseX) * 0.05;
    mouseY += (targetY - mouseY) * 0.05;

    // Rotate monolith
    outerMesh.rotation.x = elapsedTime * 0.2 + mouseY * 0.8;
    outerMesh.rotation.y = elapsedTime * 0.25 + mouseX * 0.8;

    innerMesh.rotation.x = -elapsedTime * 0.35 + mouseY * 0.6;
    innerMesh.rotation.y = -elapsedTime * 0.4 + mouseX * 0.6;

    // Pulsate central core
    const scale = 1 + Math.sin(elapsedTime * 3) * 0.12;
    coreMesh.scale.set(scale, scale, scale);

    // Slowly spin particle galaxy
    particleField.rotation.y = elapsedTime * 0.04;
    particleField.rotation.x = elapsedTime * 0.02;

    renderer.render(scene, camera);
  }

  animate();
}
