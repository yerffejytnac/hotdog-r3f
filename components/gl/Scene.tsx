"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { LogoV3 } from "./LogoV3";

export const Scene = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={1024}
        castShadow
      />
      <Bounds fit observe margin={1}>
        <Center>
          <PresentationControls
            global
            snap={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float
              speed={1}
              rotationIntensity={1}
              floatIntensity={1}
              floatingRange={[-0.25, 0.25]}
            >
              <LogoV3 />
            </Float>
          </PresentationControls>
        </Center>
      </Bounds>
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.75}
        blur={5}
        far={5}
        resolution={1024}
      />
      <Environment preset="studio" />
    </Canvas>
  );
};
