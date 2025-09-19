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
import { Canvas } from "@react-three/fiber";

import { LogoV3 } from "./LogoV3";

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
        fov={40}
        near={0.001}
        far={1000}
      />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={1024}
        castShadow
      />
      <Bounds fit observe margin={1.25}>
        <Center>
          {/* <PresentationControls
            global
            snap={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          > */}
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[-0.25, 0.25]}
          >
            <LogoV3 />
          </Float>
          {/* </PresentationControls> */}
        </Center>
      </Bounds>
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.75}
        blur={5}
        far={5}
        resolution={1024}
      />
      <Environment
        // preset="studio"
        // background
        files={"/assets/hdri/Light_Arches_A.hdr"}
      />
    </Canvas>
  );
};
