export const FRAME_MODELS = {
  "Alder Brown": "/assets/models/frame/model-52.glb",
  "Black Oak": "/assets/models/frame/model-53.glb",
  "Natural Maple": "/assets/models/frame/model-55.glb",
  "Natural Oak": "/assets/models/frame/model-57.glb",
  "White Oak": "/assets/models/frame/model-74.glb",
  Walnut: "/assets/models/frame/model-610.glb",
} as const;

export const SAMPLE_IMAGES = {
  Radar: "/assets/images/radar.webp",
  Maggie: "/assets/images/maggie.webp",
  Ruckus: "/assets/images/ruckus.webp",
} as const;

export const FRAME_CONSTANTS = {
  PROFILE_WIDTH: 0.24,
  PROFILE_DEPTH: 1.14,
  PAPER_POSITION: { x: 0, y: 0, z: 0.36 },
  PAPER_ROTATION: { x: 180, y: 180, z: 0 },
  BASE_RAIL_ROTATIONS: {
    top: { x: 180, y: 180, z: 180 },
    bottom: { x: 180, y: 180, z: 0 },
    left: { x: 0, y: 0, z: 90 },
    right: { x: 0, y: 0, z: -90 },
  },
  FRAME_POSITION: { x: 0, y: 0, z: 0.5 },
} as const;
