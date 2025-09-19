"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  // PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Logo } from "./Logo";
// import { LogoV2 } from "./LogoV2";
import { LogoV3 } from "./LogoV3";
// import { LogoV4 } from "./LogoV4";
export const Scene = () => {
  return (
    <Canvas shadows>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={0.5}
        maxAzimuthAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
      />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={1024}
        castShadow
      />
      <Bounds fit observe margin={1.5}>
        <Center>
          {/* <PresentationControls
            global
            snap={true}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          > */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[-0.25, 0.25]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <LogoV3 />
          </Float>
          {/* </PresentationControls>   */}
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
        preset="studio"
        // background
        // backgroundIntensity={0.5}
        // backgroundRotation={[0, Math.PI / 2, 0]} // optional rotation (default: 0, only works with three 0.163 and up)
        // files={"/assets/hdri/Light_Arches_A.hdr"}
      />
    </Canvas>
  );
};
