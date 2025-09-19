import { memo } from "react";
import type { RailProps } from "./types";

export const FrameRail = memo<RailProps>(
  ({ geometry, material, position, rotation, scale, ...props }) => {
    if (!geometry || !material) return null;

    return (
      <mesh
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        {...props}
      />
    );
  },
);

FrameRail.displayName = "FrameRail";
