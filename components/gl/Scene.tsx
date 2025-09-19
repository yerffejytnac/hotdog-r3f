"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { Frame } from "./frame/frame";
import { FRAME_MODELS, SAMPLE_IMAGES } from "./frame/frame-constants";
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
        intensity={10}
        color="#ffffff"
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        ref={light2Ref}
        position={[-2.5, 1, -2.5]}
        intensity={5}
        color="#ffffff"
      />
      <pointLight
        ref={light3Ref}
        position={[0, 2, 0]}
        intensity={5}
        color="#ffffff"
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
        // localClippingEnabled: false
        // Disable MSAA when DPR is high to avoid redundant work
        // antialias: true,
        alpha: true,
        reversedDepthBuffer: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      // dpr={[1, 2]}
      // orthographic
      // camera={{ position: [0, 0, 5000], near: 0.001, far: 10000, zoom: 1 }}
      // frameloop="never"
      linear
      flat
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
        position={[0, 0, 300]}
        fov={50}
        near={0.001}
        far={10000.0}
      />
      <ambientLight intensity={0.5} />
      {/* <AnimatedLights /> */}
      <Frame
        scale={0.25 as any}
        position={[-2.25, -0.75, -7.5]}
        emissiveIntensity={0}
        paperType="glossy"
        image={SAMPLE_IMAGES.Radar}
        frameModel={FRAME_MODELS["Natural Oak"]}
      />
      <Frame
        scale={0.25 as any}
        position={[2.375, -0.75, -7.5]}
        emissiveIntensity={0}
        paperType="glossy"
        image={SAMPLE_IMAGES.Maggie}
        frameModel={FRAME_MODELS["Walnut"]}
      />
      <Frame
        scale={0.25 as any}
        position={[7, -0.75, -7.5]}
        emissiveIntensity={0}
        paperType="glossy"
        image={SAMPLE_IMAGES.Ruckus}
        frameModel={FRAME_MODELS["Natural Oak"]}
      />
      <Bounds fit observe margin={1.5}>
        <Center>
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.5}
            floatingRange={[-0.25, 0.125]}
          >
            <LogoV3 />
          </Float>
        </Center>
      </Bounds>
      {/* <ContactShadows position={[0, -2.4, 0]} opacity={0.75} blur={5} far={5} /> */}
      <Environment
        files="/assets/hdri/Light_Arches_A.hdr"
        backgroundIntensity={0.125}
        // environmentIntensity={0.375}
      />
    </Canvas>
  );
};
