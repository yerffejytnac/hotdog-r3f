"use client";

import {
  ContactShadows,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, type ThreeElements } from "@react-three/fiber";
import { BoxGeometry } from "three";

import { theme } from "@/styles";

export const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <color attach="background" args={[theme.colors.primary[90]]} />
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
        <Box position={[0, 0, 0]} />
      </PresentationControls>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      />
      <Environment preset="city" />
    </Canvas>
  );
};

type BoxProps = ThreeElements["mesh"] & {
  fill?: string;
};

const Box = ({ fill = theme.colors.secondary[60], ...props }: BoxProps) => {
  return (
    <mesh geometry={new BoxGeometry(1, 1, 1)} {...props}>
      <meshStandardMaterial roughness={0} color={fill} />
    </mesh>
  );
};
