"use client";

import { Bounds, Center, ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { theme } from "@/styles";
import { LogoV2 } from "./LogoV2";

// Animated logo wrapper component
const AnimatedLogo = ({ ...props }: React.ComponentProps<typeof LogoV2>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [playOnMount, setPlayOnMount] = useState(false);

  useEffect(() => {
    console.log("AnimatedLogo mounted");
    // Wait a bit for bounds to settle, then start animation
    const timer = setTimeout(() => {
      console.log("Setting visible");
      setIsVisible(true);
      // Enable animation after visibility
      setTimeout(() => {
        console.log("Setting playOnMount to true");
        setPlayOnMount(true);
      }, 50);
    }, 300); // Slightly longer delay to ensure bounds are calculated
    return () => clearTimeout(timer);
  }, []); // Empty deps - run once on mount

  return <LogoV2 playOnMount={playOnMount} visible={isVisible} {...props} />;
};

export const Scene = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <Suspense fallback={null}>
        <Bounds fit observe margin={1.5}>
          <Center>
            <AnimatedLogo />
          </Center>
        </Bounds>
      </Suspense>
      <ContactShadows
        position={[0, -2, 0]}
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
