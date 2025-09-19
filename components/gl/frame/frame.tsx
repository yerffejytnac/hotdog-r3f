import { memo } from "react";
import type { Material } from "three";
import {
  FRAME_CONSTANTS,
  FRAME_MODELS,
  SAMPLE_IMAGES,
} from "./frame-constants";
import { FrameRail } from "./frame-rail";
import {
  calculateRailPositions,
  calculateRailScales,
  toRadians,
} from "./frame-utils";
import { Paper } from "./paper";
import type { FrameProps } from "./types";
import { useFrameGeometry } from "./use-frame-geometry";

export const Frame = memo<FrameProps>(
  ({
    width = 16,
    height = 20,
    frameModel = FRAME_MODELS["Natural Oak"],
    image = SAMPLE_IMAGES.Radar,
    paperType = "glossy",
    emissiveIntensity = 0.25,
    ...props
  }) => {
    const { geometry, material, originalSize } = useFrameGeometry(frameModel);

    if (!geometry || !material || originalSize.equals({ x: 0, y: 0, z: 0 })) {
      return null;
    }

    const railPositions = calculateRailPositions(
      width,
      height,
      FRAME_CONSTANTS.PROFILE_WIDTH,
    );

    const railScales = calculateRailScales(
      width,
      height,
      FRAME_CONSTANTS.PROFILE_WIDTH,
      FRAME_CONSTANTS.PROFILE_DEPTH,
      originalSize,
    );

    return (
      <group
        position={[
          FRAME_CONSTANTS.FRAME_POSITION.x,
          FRAME_CONSTANTS.FRAME_POSITION.y,
          FRAME_CONSTANTS.FRAME_POSITION.z,
        ]}
        {...props}
      >
        <group
          position={[
            FRAME_CONSTANTS.PAPER_POSITION.x,
            FRAME_CONSTANTS.PAPER_POSITION.y,
            FRAME_CONSTANTS.PAPER_POSITION.z,
          ]}
          rotation={toRadians(FRAME_CONSTANTS.PAPER_ROTATION)}
        >
          <Paper
            key={image} // This is the fix for the unreliable dropdown
            width={width}
            height={height}
            imageUrl={image}
            paperType={paperType}
            emissiveIntensity={emissiveIntensity}
          />
        </group>

        <FrameRail
          geometry={geometry}
          material={material as Material}
          position={[
            railPositions.top.x,
            railPositions.top.y,
            railPositions.top.z,
          ]}
          rotation={toRadians(FRAME_CONSTANTS.BASE_RAIL_ROTATIONS.top)}
          scale={railScales.horizontal}
        />

        <FrameRail
          geometry={geometry}
          material={material as Material}
          position={[
            railPositions.bottom.x,
            railPositions.bottom.y,
            railPositions.bottom.z,
          ]}
          rotation={toRadians(FRAME_CONSTANTS.BASE_RAIL_ROTATIONS.bottom)}
          scale={railScales.horizontal}
        />

        <FrameRail
          geometry={geometry}
          material={material as Material}
          position={[
            railPositions.left.x,
            railPositions.left.y,
            railPositions.left.z,
          ]}
          rotation={toRadians(FRAME_CONSTANTS.BASE_RAIL_ROTATIONS.left)}
          scale={railScales.vertical}
        />

        <FrameRail
          geometry={geometry}
          material={material as Material}
          position={[
            railPositions.right.x,
            railPositions.right.y,
            railPositions.right.z,
          ]}
          rotation={toRadians(FRAME_CONSTANTS.BASE_RAIL_ROTATIONS.right)}
          scale={railScales.vertical}
        />
      </group>
    );
  },
);

Frame.displayName = "Frame";
