import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './HeartBackground3D.css';

function createHeartShape() {
  const shape = new THREE.Shape();
  shape.moveTo(25, 25);
  shape.bezierCurveTo(25, 25, 20, 0, 0, 0);
  shape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
  shape.bezierCurveTo(-30, 55, -10, 77, 25, 100);
  shape.bezierCurveTo(60, 77, 80, 55, 80, 35);
  shape.bezierCurveTo(80, 35, 80, 0, 50, 0);
  shape.bezierCurveTo(35, 0, 25, 25, 25, 25);
  return shape;
}

function createHeartGeometry() {
  const geometry = new THREE.ExtrudeGeometry(createHeartShape(), {
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 4.5,
    bevelSize: 3.5,
    bevelOffset: 0,
    bevelSegments: 6,
    curveSegments: 40
  });
  geometry.center();
  geometry.rotateZ(Math.PI);
  geometry.scale(0.024, 0.024, 0.024);
  geometry.computeVertexNormals();
  return geometry;
}

export default function HeartBackground3D() {
  const mountRef = useRef(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    try {
      const canvasTest = document.createElement('canvas');
      const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 0.05, 8.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffe4e6, 0.7);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.55);
    keyLight.position.set(2.4, 3.4, 6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xfb7185, 14, 16);
    fillLight.position.set(-2.6, 0.8, 3.4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff4d6d, 16, 14);
    rimLight.position.set(3.2, -1.4, -1.8);
    scene.add(rimLight);

    const cursorLight = new THREE.PointLight(0xfff1f2, 10, 12);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    const heartGeo = createHeartGeometry();
    const heartMat = new THREE.MeshPhysicalMaterial({
      color: 0xdc143c,
      emissive: 0x7f1d1d,
      emissiveIntensity: 0.22,
      roughness: 0.28,
      metalness: 0.12,
      clearcoat: 0.75,
      clearcoatRoughness: 0.22
    });

    const heart = new THREE.Mesh(heartGeo, heartMat);
    heart.position.set(1.35, 0.05, 0);
    heart.rotation.y = 0.38;
    scene.add(heart);

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff2d55,
      transparent: true,
      opacity: 0.07,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(heartGeo.clone(), glowMat);
    glow.scale.setScalar(1.05);
    heart.add(glow);

    const orbitHearts = [];
    const miniGeo = heartGeo.clone();
    for (let i = 0; i < 3; i += 1) {
      const mat = new THREE.MeshPhysicalMaterial({
        color: i % 2 === 0 ? 0xfb7185 : 0xbe123c,
        emissive: 0x881337,
        emissiveIntensity: 0.25,
        roughness: 0.3,
        metalness: 0.1,
        transparent: true,
        opacity: 0.72
      });
      const mesh = new THREE.Mesh(miniGeo, mat);
      const scale = 0.12 + i * 0.028;
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      orbitHearts.push({
        mesh,
        radius: 2.35 + i * 0.32,
        speed: 0.28 + i * 0.08,
        phase: (i / 3) * Math.PI * 2,
        tilt: 0.42 + i * 0.1
      });
    }

    const particleCount = 90;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVel = [];
    for (let i = 0; i < particleCount; i += 1) {
      particlePositions[i * 3] = 0;
      particlePositions[i * 3 + 1] = 0;
      particlePositions[i * 3 + 2] = 0;
      particleVel.push(new THREE.Vector3());
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff6b81,
      size: 0.08,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const click = { impulse: 0, speedBoost: 0 };
    const particleLife = { value: 0 };

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.targetY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const burstParticles = () => {
      particleLife.value = 1;
      particleMat.opacity = 0.95;
      const origin = heart.position;
      for (let i = 0; i < particleCount; i += 1) {
        particlePositions[i * 3] = origin.x;
        particlePositions[i * 3 + 1] = origin.y;
        particlePositions[i * 3 + 2] = origin.z;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const speed = 1.6 + Math.random() * 2.4;
        particleVel[i].set(
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.sin(phi) * Math.sin(theta) * speed,
          Math.cos(phi) * speed * 0.65
        );
      }
      particleGeo.attributes.position.needsUpdate = true;
    };

    const onPointerDown = (event) => {
      const rect = container.getBoundingClientRect();
      if (
        event.clientY < rect.top ||
        event.clientY > rect.bottom ||
        event.clientX < rect.left ||
        event.clientX > rect.right
      ) {
        return;
      }
      click.impulse = 1;
      click.speedBoost = 1;
      burstParticles();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown);

    const clock = new THREE.Clock();
    let frameId;

    const setSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || 640;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    setSize();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const dt = Math.min(clock.getDelta(), 0.05);

      mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.07);
      mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.07);
      click.impulse = THREE.MathUtils.lerp(click.impulse, 0, 0.08);
      click.speedBoost = THREE.MathUtils.lerp(click.speedBoost, 0, 0.035);

      const beatRate = reduceMotion ? 0 : 2 * Math.PI * (1.05 + click.speedBoost * 1.8);
      const phase = t * beatRate;
      const lub = Math.max(0, Math.sin(phase));
      const dub = Math.max(0, Math.sin(phase * 2 - 0.35)) * 0.55;
      const pump = reduceMotion ? 0.02 : lub * 0.14 + dub * 0.07 + click.impulse * 0.32;

      const restScale = 1.42;
      heart.scale.setScalar(restScale + pump);

      const followX = 1.35 + mouse.x * 1.15;
      const followY = 0.05 + mouse.y * 0.7;
      heart.position.x = THREE.MathUtils.lerp(heart.position.x, followX, 0.1);
      heart.position.y = THREE.MathUtils.lerp(heart.position.y, followY, 0.1);
      heart.position.z = click.impulse * 0.7;

      heart.rotation.y = THREE.MathUtils.lerp(heart.rotation.y, 0.38 + mouse.x * 1.05, 0.1);
      heart.rotation.x = THREE.MathUtils.lerp(heart.rotation.x, -mouse.y * 0.55, 0.1);
      heart.rotation.z = Math.sin(t * 0.7) * 0.05 + mouse.x * 0.12;

      heartMat.emissiveIntensity = 0.18 + pump * 1.8 + click.impulse * 1.4;
      glowMat.opacity = 0.06 + pump * 0.22 + click.impulse * 0.28;
      glow.scale.setScalar(1.04 + pump * 0.18);

      cursorLight.position.set(mouse.x * 4.5, mouse.y * 3.2, 3.6);
      cursorLight.intensity = 10 + click.impulse * 28;

      orbitHearts.forEach((item, index) => {
        const a = t * item.speed + item.phase;
        item.mesh.position.set(
          heart.position.x + Math.cos(a) * item.radius * 0.55,
          heart.position.y + Math.sin(a * 1.35) * item.tilt,
          Math.sin(a) * item.radius * 0.4 - 0.4
        );
        item.mesh.rotation.y = a * 0.8;
        item.mesh.rotation.z = Math.sin(a) * 0.4;
        item.mesh.scale.setScalar((0.12 + index * 0.028) * (1 + pump * 0.35));
      });

      if (particleLife.value > 0) {
        particleLife.value = Math.max(0, particleLife.value - dt * 0.85);
        particleMat.opacity = particleLife.value * 0.9;
        const pos = particleGeo.attributes.position.array;
        for (let i = 0; i < particleCount; i += 1) {
          particleVel[i].y -= 1.8 * dt;
          pos[i * 3] += particleVel[i].x * dt;
          pos[i * 3 + 1] += particleVel[i].y * dt;
          pos[i * 3 + 2] += particleVel[i].z * dt;
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver(setSize);
    resizeObserver.observe(container);
    window.addEventListener('resize', setSize);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', setSize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      heartGeo.dispose();
      glow.geometry.dispose();
      miniGeo.dispose();
      particleGeo.dispose();
      heartMat.dispose();
      glowMat.dispose();
      particleMat.dispose();
      orbitHearts.forEach((item) => item.mesh.material.dispose());
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="heart-bg" aria-hidden="true">
        <div className="heart-bg-fallback">
          <div className="heart-bg-fallback-pulse" />
        </div>
        <div className="heart-bg-veil" />
      </div>
    );
  }

  return (
    <div className="heart-bg" aria-hidden="true">
      <div ref={mountRef} className="heart-bg-canvas" />
      <div className="heart-bg-veil" />
    </div>
  );
}
