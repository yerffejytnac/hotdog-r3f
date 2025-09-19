"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Logo } from "./Logo";
import { LogoV2 } from "./LogoV2";

export const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <Bounds fit observe margin={1.5}>
        <Center>
          <PresentationControls
            global
            snap={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={1} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <LogoV2 />
            </Float>
          </PresentationControls>
        </Center>
      </Bounds>
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.75}
        blur={5}
        far={10}
        resolution={1024}
      />
      <Environment
        preset="city"
        // files={"/assets/hdri/Light_Arches_A.hdr"}
      />
    </Canvas>
  );
};
