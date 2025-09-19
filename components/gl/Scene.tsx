"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";

import { LogoV3 } from "./LogoV3";

// Animated lights for dynamic reflections
const AnimatedLights = () => {
  const light1Ref = useRef<THREE.SpotLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Animate spotlight position in a circle - closer to model
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.cos(time * 0.5) * 3;
      light1Ref.current.position.z = Math.sin(time * 0.5) * 3;
      light1Ref.current.position.y = 2;
    }

    // Animate point light position in opposite circle
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(time * 0.7 + Math.PI) * 2.5;
      light2Ref.current.position.y = Math.sin(time * 0.3) * 1 + 1;
      light2Ref.current.position.z = Math.sin(time * 0.7 + Math.PI) * 2.5;
    }

    // Animate third light vertically
    if (light3Ref.current) {
      light3Ref.current.position.y = Math.sin(time * 0.4) * 2 + 2;
    }
  });

  return (
    <>
      <spotLight
        ref={light1Ref}
        position={[3, 2, 3]}
        angle={0.5}
        penumbra={0.5}
        intensity={20}
        color="#ff0066"
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={light2Ref}
        position={[-2.5, 1, -2.5]}
        intensity={15}
        color="#00ffff"
      />
      <pointLight
        ref={light3Ref}
        position={[0, 2, 0]}
        intensity={15}
        color="#ffff00"
      />
    </>
  );
};

export const Scene = () => {
  return (
    <Canvas
      shadows
      gl={{
        precision: "highp",
        powerPreference: "high-performance",
        // Disable MSAA when DPR is high to avoid redundant work
        // antialias: true,
        alpha: true,
      }}
      // dpr={[1, 2]}
      orthographic
      // camera={{ position: [0, 0, 5000], near: 0.001, far: 10000, zoom: 1 }}
      // frameloop="never"
      linear
      // flat
      resize={{ scroll: false, debounce: { scroll: 0, resize: 500 } }}
    >
      <OrbitControls
        makeDefault
        minDistance={0.1}
        maxDistance={50}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={50}
        near={0.001}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <AnimatedLights />
      <Bounds fit observe margin={1.5}>
        <Center>
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[-0.25, 0.25]}
          >
            <LogoV3 />
          </Float>
        </Center>
      </Bounds>
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.75}
        blur={5}
        far={5}
        resolution={1024}
      />
      {/* Temporarily disabled to debug light reflections
      <Environment
        files="/assets/hdri/Light_Arches_A.hdr"
        backgroundIntensity={0.2}
        environmentIntensity={0.3}
      /> */}
    </Canvas>
  );
};
