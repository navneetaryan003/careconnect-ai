import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Sparkles, HeartPulse, Stethoscope, Eye, Volume2 } from 'lucide-react';
import './CareAssistant3D.css';

/**
 * CareAssistant3D
 *
 * Interactive stylized 3D female medical guide "Care".
 * Features:
 * - Smooth cursor/head & eye tracking with damped interpolation (lerp)
 * - Rhythmic natural breathing cycles
 * - Expressive state transitions: idle, hover (wave & smile), listening (attentive posture), typing, pointing
 * - Fully isolated component with WebGL fallback
 */
export default function CareAssistant3D({
  state = 'idle',
  className = '',
  onDirectStateChange = null
}) {
  const mountRef = useRef(null);
  const [internalState, setInternalState] = useState(state);
  const [webglSupported, setWebglSupported] = useState(true);
  const stateRef = useRef(state);

  // Synchronize state prop
  useEffect(() => {
    setInternalState(state);
    stateRef.current = state;
  }, [state]);

  const handleTrigger = useCallback((newState) => {
    setInternalState(newState);
    stateRef.current = newState;
    if (onDirectStateChange) onDirectStateChange(newState);
  }, [onDirectStateChange]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvasTest = document.createElement('canvas');
      const gl = canvasTest.getContext('webgl') || canvasTest.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    let animationFrameId;
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 460;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 3.4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);
    renderer.domElement.className = 'care-canvas';

    // ----------------------------------------------------
    // Lighting Setup
    // ----------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Warm main key light
    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.2);
    keyLight.position.set(2.5, 3.5, 3);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Soft sky rim light (gives signature medical blue halo)
    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.1);
    rimLight.position.set(-2.5, 2, -2);
    scene.add(rimLight);

    // Subtle front fill light
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.6);
    fillLight.position.set(0, -1, 2);
    scene.add(fillLight);

    // ----------------------------------------------------
    // Materials & Color Palette
    // ----------------------------------------------------
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xfbd0b5,
      roughness: 0.55,
      metalness: 0.05
    });

    const blushMat = new THREE.MeshBasicMaterial({
      color: 0xf472b6,
      transparent: true,
      opacity: 0.28
    });

    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x3d2314, // rich warm chestnut brown
      roughness: 0.6,
      metalness: 0.1
    });

    const scrubMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // CareConnect primary medical blue
      roughness: 0.45,
      metalness: 0.05
    });

    const whiteCoatMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc, // clean lab coat
      roughness: 0.35,
      metalness: 0.02
    });

    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.2,
      metalness: 0.85
    });

    const rubberMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.5,
      metalness: 0.1
    });

    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const irisMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0xdb2777 });

    // ----------------------------------------------------
    // Root Rigged Hierarchy
    // ----------------------------------------------------
    const characterRoot = new THREE.Group();
    characterRoot.position.set(0, -0.7, 0);
    scene.add(characterRoot);

    // Torso Group
    const torsoGroup = new THREE.Group();
    characterRoot.add(torsoGroup);

    // Upper body / lab coat
    const bodyGeo = new THREE.CylinderGeometry(0.38, 0.46, 0.95, 24);
    const bodyMesh = new THREE.Mesh(bodyGeo, whiteCoatMat);
    bodyMesh.position.y = 0.48;
    torsoGroup.add(bodyMesh);

    // Inner medical scrub V-neck
    const scrubVGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.5, 16);
    const scrubVMesh = new THREE.Mesh(scrubVGeo, scrubMat);
    scrubVMesh.position.set(0, 0.68, 0.16);
    torsoGroup.add(scrubVMesh);

    // Care ID Badge
    const badgeGeo = new THREE.BoxGeometry(0.12, 0.16, 0.02);
    const badgeMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2 });
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
    badgeMesh.position.set(-0.22, 0.62, 0.38);
    badgeMesh.rotation.z = -0.05;
    torsoGroup.add(badgeMesh);

    // Glowing badge indicator light
    const badgeDotGeo = new THREE.SphereGeometry(0.015, 8, 8);
    const badgeDotMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const badgeDot = new THREE.Mesh(badgeDotGeo, badgeDotMat);
    badgeDot.position.set(-0.25, 0.67, 0.4);
    torsoGroup.add(badgeDot);

    // ----------------------------------------------------
    // Stethoscope
    // ----------------------------------------------------
    const stethGroup = new THREE.Group();
    torsoGroup.add(stethGroup);

    // Neck tube (curved around neck)
    const stethCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.22, 0.85, 0.05),
      new THREE.Vector3(-0.2, 0.65, 0.35),
      new THREE.Vector3(0, 0.42, 0.42),
      new THREE.Vector3(0.2, 0.65, 0.35),
      new THREE.Vector3(0.22, 0.85, 0.05)
    ]);
    const stethGeo = new THREE.TubeGeometry(stethCurve, 32, 0.018, 8, false);
    const stethMesh = new THREE.Mesh(stethGeo, rubberMat);
    stethGroup.add(stethMesh);

    // Metal chest piece
    const chestPieceGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.03, 16);
    const chestPieceMesh = new THREE.Mesh(chestPieceGeo, silverMat);
    chestPieceMesh.rotation.x = Math.PI / 2;
    chestPieceMesh.position.set(0, 0.42, 0.44);
    stethGroup.add(chestPieceMesh);

    // ----------------------------------------------------
    // Neck & Head Rig
    // ----------------------------------------------------
    const neckGroup = new THREE.Group();
    neckGroup.position.set(0, 0.95, 0);
    characterRoot.add(neckGroup);

    const neckGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.22, 16);
    const neckMesh = new THREE.Mesh(neckGeo, skinMat);
    neckMesh.position.y = 0.08;
    neckGroup.add(neckMesh);

    // Head Group (tracks cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.2, 0);
    neckGroup.add(headGroup);

    // Head sphere (stylized proportion)
    const headGeo = new THREE.SphereGeometry(0.36, 32, 32);
    headGeo.scale(1, 1.08, 1);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(headMesh);

    // Cheeks blush
    const leftCheek = new THREE.Mesh(new THREE.CircleGeometry(0.065, 16), blushMat);
    leftCheek.position.set(-0.2, -0.05, 0.34);
    leftCheek.rotation.y = -0.3;
    headGroup.add(leftCheek);

    const rightCheek = new THREE.Mesh(new THREE.CircleGeometry(0.065, 16), blushMat);
    rightCheek.position.set(0.2, -0.05, 0.34);
    rightCheek.rotation.y = 0.3;
    headGroup.add(rightCheek);

    // Nose (subtle stylized)
    const noseGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const noseMesh = new THREE.Mesh(noseGeo, skinMat);
    noseMesh.position.set(0, -0.02, 0.38);
    headGroup.add(noseMesh);

    // ----------------------------------------------------
    // Stylized Hair
    // ----------------------------------------------------
    // Main hair cap
    const hairCapGeo = new THREE.SphereGeometry(0.39, 32, 32);
    const hairCap = new THREE.Mesh(hairCapGeo, hairMat);
    hairCap.position.set(0, 0.06, -0.04);
    headGroup.add(hairCap);

    // Side hair bangs / locks
    const leftBangGeo = new THREE.CylinderGeometry(0.08, 0.02, 0.45, 12);
    const leftBang = new THREE.Mesh(leftBangGeo, hairMat);
    leftBang.position.set(-0.35, -0.06, 0.16);
    leftBang.rotation.z = -0.2;
    headGroup.add(leftBang);

    const rightBangGeo = new THREE.CylinderGeometry(0.08, 0.02, 0.45, 12);
    const rightBang = new THREE.Mesh(rightBangGeo, hairMat);
    rightBang.position.set(0.35, -0.06, 0.16);
    rightBang.rotation.z = 0.2;
    headGroup.add(rightBang);

    // Neat professional bun
    const bunGeo = new THREE.SphereGeometry(0.19, 20, 20);
    const bun = new THREE.Mesh(bunGeo, hairMat);
    bun.position.set(0, 0.28, -0.35);
    headGroup.add(bun);

    // Teal medical hair ribbon / band
    const ribbonGeo = new THREE.TorusGeometry(0.18, 0.025, 12, 24);
    const ribbonMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 });
    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbon.position.set(0, 0.26, -0.32);
    ribbon.rotation.x = Math.PI / 3;
    headGroup.add(ribbon);

    // ----------------------------------------------------
    // Eyes & Expressive Rig
    // ----------------------------------------------------
    const eyesGroup = new THREE.Group();
    headGroup.add(eyesGroup);

    function createEye(isRight) {
      const xSign = isRight ? 1 : -1;
      const eyeRig = new THREE.Group();
      eyeRig.position.set(xSign * 0.14, 0.04, 0.33);

      // Sclera
      const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 16), eyeWhiteMat);
      sclera.scale.set(1, 0.9, 0.5);
      eyeRig.add(sclera);

      // Pupil / Iris group (micro tracks cursor)
      const pupilGroup = new THREE.Group();
      pupilGroup.position.set(0, 0, 0.045);
      eyeRig.add(pupilGroup);

      const iris = new THREE.Mesh(new THREE.CircleGeometry(0.042, 16), irisMat);
      pupilGroup.add(iris);

      const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.022, 16), pupilMat);
      pupil.position.z = 0.001;
      pupilGroup.add(pupil);

      // Specular shine dot
      const shine = new THREE.Mesh(new THREE.CircleGeometry(0.012, 12), shineMat);
      shine.position.set(0.015, 0.015, 0.002);
      pupilGroup.add(shine);

      // Eyelid for blinking
      const lidGeo = new THREE.SphereGeometry(0.078, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const lid = new THREE.Mesh(lidGeo, skinMat);
      lid.rotation.x = -Math.PI / 2;
      lid.scale.set(1, 0.01, 1); // starts open
      eyeRig.add(lid);

      // Eyebrow
      const browGeo = new THREE.CylinderGeometry(0.016, 0.01, 0.11, 8);
      const brow = new THREE.Mesh(browGeo, hairMat);
      brow.rotation.z = Math.PI / 2 + (xSign * 0.1);
      brow.position.set(0, 0.1, 0.02);
      eyeRig.add(brow);

      return { eyeRig, pupilGroup, lid, brow };
    }

    const leftEye = createEye(false);
    const rightEye = createEye(true);
    eyesGroup.add(leftEye.eyeRig);
    eyesGroup.add(rightEye.eyeRig);

    // Mouth (curved welcoming smile)
    const mouthGeo = new THREE.TorusGeometry(0.07, 0.016, 8, 16, Math.PI * 0.85);
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, -0.15, 0.34);
    mouth.rotation.x = 0.2;
    mouth.rotation.z = Math.PI * 1.07;
    headGroup.add(mouth);

    // ----------------------------------------------------
    // Right Arm (Interactive Hand Gestures)
    // ----------------------------------------------------
    const rightShoulder = new THREE.Group();
    rightShoulder.position.set(0.42, 0.78, 0.05);
    torsoGroup.add(rightShoulder);

    const rightUpperArmGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.42, 16);
    const rightUpperArm = new THREE.Mesh(rightUpperArmGeo, whiteCoatMat);
    rightUpperArm.position.y = -0.2;
    rightShoulder.add(rightUpperArm);

    const rightElbow = new THREE.Group();
    rightElbow.position.set(0, -0.38, 0);
    rightShoulder.add(rightElbow);

    const rightForearmGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.38, 16);
    const rightForearm = new THREE.Mesh(rightForearmGeo, skinMat);
    rightForearm.position.y = -0.18;
    rightElbow.add(rightForearm);

    // Hand
    const handGeo = new THREE.SphereGeometry(0.07, 12, 12);
    handGeo.scale(1, 1.2, 0.7);
    const hand = new THREE.Mesh(handGeo, skinMat);
    hand.position.set(0, -0.36, 0.02);
    rightElbow.add(hand);

    // ----------------------------------------------------
    // Left Arm (Relaxed Doctor Pose)
    // ----------------------------------------------------
    const leftShoulder = new THREE.Group();
    leftShoulder.position.set(-0.42, 0.78, 0.05);
    torsoGroup.add(leftShoulder);

    const leftUpperArmGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.42, 16);
    const leftUpperArm = new THREE.Mesh(leftUpperArmGeo, whiteCoatMat);
    leftUpperArm.position.y = -0.2;
    leftShoulder.add(leftUpperArm);

    const leftElbow = new THREE.Group();
    leftElbow.position.set(0, -0.38, 0);
    leftShoulder.add(leftElbow);

    const leftForearmGeo = new THREE.CylinderGeometry(0.075, 0.065, 0.38, 16);
    const leftForearm = new THREE.Mesh(leftForearmGeo, skinMat);
    leftForearm.position.y = -0.18;
    leftElbow.add(leftForearm);

    const leftHandGeo = new THREE.SphereGeometry(0.07, 12, 12);
    leftHandGeo.scale(1, 1.2, 0.7);
    const leftHand = new THREE.Mesh(leftHandGeo, skinMat);
    leftHand.position.set(0, -0.36, 0.02);
    leftElbow.add(leftHand);

    // Left arm resting naturally forward
    leftShoulder.rotation.x = 0.3;
    leftShoulder.rotation.z = 0.15;
    leftElbow.rotation.x = -0.4;

    // ----------------------------------------------------
    // Floating Holographic Medical Cross Badge
    // ----------------------------------------------------
    const holoCrossGroup = new THREE.Group();
    holoCrossGroup.position.set(0.65, 0.65, 0.3);
    characterRoot.add(holoCrossGroup);

    const crossMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.85,
      roughness: 0.2
    });

    const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.14, 0.03), crossMat);
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.03), crossMat);
    holoCrossGroup.add(crossV);
    holoCrossGroup.add(crossH);

    // ----------------------------------------------------
    // Mouse Interaction Tracking
    // ----------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onMouseMove = (event) => {
      // Normalized device coordinates (-1 to 1) relative to window
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.targetX = x;
      mouse.targetY = y;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Blink controller
    let nextBlinkTime = 2.0;
    let isBlinking = false;
    let blinkProgress = 0;

    // ----------------------------------------------------
    // Animation Loop with State Machine
    // ----------------------------------------------------
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const currentState = stateRef.current;

      // Smooth mouse interpolation (damping)
      mouse.x = THREE.MathUtils.lerp(mouse.x, mouse.targetX, 0.05);
      mouse.y = THREE.MathUtils.lerp(mouse.y, mouse.targetY, 0.05);

      // 1. Natural Breathing (sine cycle on torso & root)
      const breathing = Math.sin(elapsedTime * 2.2);
      torsoGroup.scale.set(1 + breathing * 0.012, 1 + breathing * 0.018, 1 + breathing * 0.012);
      characterRoot.position.y = -0.7 + Math.sin(elapsedTime * 1.5) * 0.02;

      // Floating holographic badge
      holoCrossGroup.position.y = 0.65 + Math.sin(elapsedTime * 2.5) * 0.04;
      holoCrossGroup.rotation.y = elapsedTime * 0.8;

      // 2. Head Cursor Following (yaw & pitch)
      const targetHeadYaw = mouse.x * 0.45;
      const targetHeadPitch = -mouse.y * 0.3;

      // Additional state-dependent head bias
      let statePitchBias = 0;
      let stateYawBias = 0;
      let stateRollBias = 0;

      if (currentState === 'listening' || currentState === 'typing') {
        statePitchBias = 0.08; // slightly leaned forward
        stateRollBias = 0.06;  // thoughtful head tilt
      } else if (currentState === 'hover') {
        stateRollBias = -0.05; // warm friendly tilt
        statePitchBias = 0.04;
      } else if (currentState === 'pointing') {
        stateYawBias = -0.25;  // looks toward the left recommendation
      }

      headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetHeadYaw + stateYawBias, 0.06);
      headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetHeadPitch + statePitchBias, 0.06);
      headGroup.rotation.z = THREE.MathUtils.lerp(headGroup.rotation.z, (mouse.x * 0.1) + stateRollBias, 0.06);

      // 3. Eye Micro-tracking
      const eyeOffsetX = THREE.MathUtils.clamp(mouse.x * 0.02, -0.015, 0.015);
      const eyeOffsetY = THREE.MathUtils.clamp(mouse.y * 0.015, -0.012, 0.012);
      leftEye.pupilGroup.position.x = eyeOffsetX;
      leftEye.pupilGroup.position.y = eyeOffsetY;
      rightEye.pupilGroup.position.x = eyeOffsetX;
      rightEye.pupilGroup.position.y = eyeOffsetY;

      // 4. Natural Blinking
      if (elapsedTime > nextBlinkTime && !isBlinking) {
        isBlinking = true;
        blinkProgress = 0;
      }

      if (isBlinking) {
        blinkProgress += 0.18;
        const lidScale = Math.sin(blinkProgress * Math.PI);
        leftEye.lid.scale.y = Math.max(0.01, lidScale);
        rightEye.lid.scale.y = Math.max(0.01, lidScale);

        if (blinkProgress >= 1) {
          isBlinking = false;
          leftEye.lid.scale.y = 0.01;
          rightEye.lid.scale.y = 0.01;
          nextBlinkTime = elapsedTime + 3.0 + Math.random() * 3.5;
        }
      }

      // 5. Eyebrow Reactivity
      if (currentState === 'listening' || currentState === 'typing') {
        leftEye.brow.position.y = THREE.MathUtils.lerp(leftEye.brow.position.y, 0.12, 0.1);
        rightEye.brow.position.y = THREE.MathUtils.lerp(rightEye.brow.position.y, 0.12, 0.1);
      } else if (currentState === 'hover') {
        leftEye.brow.position.y = THREE.MathUtils.lerp(leftEye.brow.position.y, 0.13, 0.1);
        rightEye.brow.position.y = THREE.MathUtils.lerp(rightEye.brow.position.y, 0.13, 0.1);
      } else {
        leftEye.brow.position.y = THREE.MathUtils.lerp(leftEye.brow.position.y, 0.1, 0.08);
        rightEye.brow.position.y = THREE.MathUtils.lerp(rightEye.brow.position.y, 0.1, 0.08);
      }

      // 6. Right Arm Gestures
      if (currentState === 'hover') {
        // Welcoming hand wave!
        const wave = Math.sin(elapsedTime * 8) * 0.25;
        rightShoulder.rotation.x = THREE.MathUtils.lerp(rightShoulder.rotation.x, 1.3, 0.1);
        rightShoulder.rotation.z = THREE.MathUtils.lerp(rightShoulder.rotation.z, -0.65, 0.1);
        rightElbow.rotation.x = THREE.MathUtils.lerp(rightElbow.rotation.x, -1.2, 0.1);
        rightElbow.rotation.z = THREE.MathUtils.lerp(rightElbow.rotation.z, wave, 0.2);
        mouth.scale.set(1.15, 1.25, 1);
      } else if (currentState === 'listening' || currentState === 'typing') {
        // Attentive listening posture: hand near heart/stethoscope
        rightShoulder.rotation.x = THREE.MathUtils.lerp(rightShoulder.rotation.x, 0.75, 0.08);
        rightShoulder.rotation.z = THREE.MathUtils.lerp(rightShoulder.rotation.z, -0.3, 0.08);
        rightElbow.rotation.x = THREE.MathUtils.lerp(rightElbow.rotation.x, -0.9, 0.08);
        rightElbow.rotation.z = THREE.MathUtils.lerp(rightElbow.rotation.z, 0.4, 0.08);
        mouth.scale.set(1.0, 1.0, 1);
      } else if (currentState === 'pointing') {
        // Pointing gesture toward recommendation
        rightShoulder.rotation.x = THREE.MathUtils.lerp(rightShoulder.rotation.x, 1.1, 0.08);
        rightShoulder.rotation.z = THREE.MathUtils.lerp(rightShoulder.rotation.z, 0.2, 0.08);
        rightElbow.rotation.x = THREE.MathUtils.lerp(rightElbow.rotation.x, -0.3, 0.08);
        rightElbow.rotation.z = THREE.MathUtils.lerp(rightElbow.rotation.z, 0.5, 0.08);
      } else {
        // Natural Idle: hand relaxed at side
        rightShoulder.rotation.x = THREE.MathUtils.lerp(rightShoulder.rotation.x, 0.15, 0.05);
        rightShoulder.rotation.z = THREE.MathUtils.lerp(rightShoulder.rotation.z, -0.12, 0.05);
        rightElbow.rotation.x = THREE.MathUtils.lerp(rightElbow.rotation.x, -0.15, 0.05);
        rightElbow.rotation.z = THREE.MathUtils.lerp(rightElbow.rotation.z, 0, 0.05);
        mouth.scale.set(1.0, 1.0, 1);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 420;
      const newH = container.clientHeight || 460;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`care-3d-wrapper ${className}`}>
      {webglSupported ? (
        <div ref={mountRef} className="care-canvas-container" />
      ) : (
        /* Graceful Accessible Fallback */
        <div className="care-fallback bg-sky-50/70 rounded-3xl border border-sky-100">
          <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 mb-4 shadow-soft">
            <Stethoscope className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">Meet Care</h3>
          <p className="text-sm text-slate-500 max-w-xs">
            Your friendly healthcare guide. Tell Care what you are experiencing and get directed to the right specialist.
          </p>
        </div>
      )}
    </div>
  );
}
