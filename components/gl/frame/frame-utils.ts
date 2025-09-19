type Vector3D = {
  x: number;
  y: number;
  z: number;
};

export const toRadians = (degrees: Vector3D): [number, number, number] => {
  const rad = Math.PI / 180;
  return [degrees.x * rad, degrees.y * rad, degrees.z * rad];
};

export const calculateRailPositions = (
  width: number,
  height: number,
  profileWidth: number,
) => {
  const halfW = width / 2;
  const halfH = height / 2;
  const halfProfile = profileWidth / 2;

  return {
    top: { x: 0, y: halfH + halfProfile, z: 0 },
    bottom: { x: 0, y: -halfH - halfProfile, z: 0 },
    left: { x: -halfW - halfProfile, y: 0, z: 0 },
    right: { x: halfW + halfProfile, y: 0, z: 0 },
  };
};

export const calculateRailScales = (
  width: number,
  height: number,
  profileWidth: number,
  profileDepth: number,
  originalSize: { x: number; y: number; z: number },
) => {
  const horizLen = width + profileWidth * 2;
  const vertLen = height + profileWidth * 2;

  return {
    horizontal: [
      horizLen / originalSize.x,
      profileWidth / originalSize.y,
      profileDepth / originalSize.z,
    ] as [number, number, number],
    vertical: [
      vertLen / originalSize.x,
      profileWidth / originalSize.y,
      profileDepth / originalSize.z,
    ] as [number, number, number],
  };
};
