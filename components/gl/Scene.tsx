"use client";

import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { theme } from "@/styles";
// import { Logo } from "./Logo";
import { LogoV2 } from "./LogoV2";

export const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <color attach="background" args={[theme.colors.primary[80]]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <PresentationControls
        global
        snap={true}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        {/* <Logo scale={0.5} /> */}
        <LogoV2 scale={0.5} />
      </PresentationControls>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      />
      <Environment
        preset="city"
        // files={"/assets/hdri/Light_Arches_A.hdr"}
      />
    </Canvas>
  );
};
