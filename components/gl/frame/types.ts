import type * as THREE from "three";

export interface Vector3D {
  x: number;
  y: number;
  z: number;
}

export interface FrameProps extends Partial<Omit<THREE.Group, "position">> {
  width?: number;
  height?: number;
  frameModel?: string;
  image?: string;
  paperType?: "glossy" | "matte";
  emissiveIntensity?: number;
  position?: [number, number, number];
}

export interface PaperProps {
  width: number;
  height: number;
  imageUrl: string;
  paperType: "glossy" | "matte";
  emissiveIntensity: number;
}

export interface RailProps {
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
}
