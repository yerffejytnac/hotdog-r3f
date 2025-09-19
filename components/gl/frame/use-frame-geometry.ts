"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import type { Mesh } from "three";
import * as THREE from "three";

export const useFrameGeometry = (modelUrl: string) => {
  const { nodes } = useGLTF(modelUrl);

  return useMemo(() => {
    const firstMesh = Object.values(nodes).find(
      (node): node is Mesh =>
        (node as Mesh).isMesh &&
        (node as Mesh).geometry &&
        (node as Mesh).material &&
        (node as Mesh).material instanceof THREE.MeshStandardMaterial,
    );

    if (!firstMesh) {
      return {
        geometry: null,
        material: null,
        originalSize: new THREE.Vector3(),
      };
    }

    const geometry = firstMesh.geometry.clone();
    geometry.center();
    geometry.computeBoundingBox();

    const size = new THREE.Vector3();
    geometry.boundingBox?.getSize(size);

    return {
      geometry,
      material: firstMesh.material,
      originalSize: size,
    };
  }, [nodes]);
};
