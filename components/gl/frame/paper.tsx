"use client";

import { useTexture } from "@react-three/drei";
import { memo } from "react";
import { RepeatWrapping, SRGBColorSpace } from "three";
import type { PaperProps } from "./types";

const MATERIAL_PROPERTIES = {
  glossy: { roughness: 0.1, metalness: 0.1 },
  matte: { roughness: 0.8, metalness: 0.0 },
};

export const Paper = memo<PaperProps>(
  ({ width, height, imageUrl, paperType, emissiveIntensity }) => {
    const texture = useTexture(imageUrl);

    // Correct color space and mirroring
    texture.colorSpace = SRGBColorSpace;
    texture.wrapS = RepeatWrapping;
    texture.repeat.x = -1;
    texture.flipY = false;

    const materialProps = MATERIAL_PROPERTIES[paperType];

    return (
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial
          map={texture}
          {...materialProps}
          emissive="white"
          emissiveMap={texture}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
    );
  },
);

Paper.displayName = "Paper";
