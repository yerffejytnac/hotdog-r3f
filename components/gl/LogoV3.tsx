"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import React, {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    D1_1: THREE.SkinnedMesh;
    D2_1: THREE.SkinnedMesh;
    G1_1: THREE.SkinnedMesh;
    G2_1: THREE.SkinnedMesh;
    H1_1: THREE.SkinnedMesh;
    h2: THREE.SkinnedMesh;
    H3: THREE.SkinnedMesh;
    O2_1: THREE.SkinnedMesh;
    T1_1: THREE.SkinnedMesh;
    T2_1: THREE.SkinnedMesh;
    O1: THREE.SkinnedMesh;
    H1: THREE.Bone;
    H2_1: THREE.Bone;
    O_main: THREE.Bone;
    H3_1: THREE.Bone;
    T_main: THREE.Bone;
    H2_5015: THREE.Bone;
    D_main: THREE.Bone;
    H2_5024: THREE.Bone;
    O_main2: THREE.Bone;
    G_main: THREE.Bone;
    H2_5044: THREE.Bone;
    O_main2_1: THREE.Bone;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export interface LogoV3Props extends React.ComponentProps<"group"> {
  animationSpeed?: number;
  playOnMount?: boolean;
  onAnimationComplete?: () => void;
}

export interface LogoV3Ref {
  play: () => void;
  stop: () => void;
  reset: () => void;
}

export const LogoV3 = forwardRef<LogoV3Ref, LogoV3Props>(function Logo(
  { animationSpeed = 1.25, playOnMount = true, onAnimationComplete, ...props },
  ref: ForwardedRef<LogoV3Ref>,
) {
  const group = useRef<THREE.Group>(null);
  const { nodes, animations } = useGLTF(
    "/assets/models/hotdog-v3-compressed-custom-meshopt.glb",
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // Create realistic glass material
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      transmission: 0.95, // Slightly less than full transparency
      opacity: 1, // Full opacity (transmission handles transparency)
      transparent: true, // Enable transparency
      roughness: 0.05, // Slightly rough for better light interaction
      metalness: 0.75, // Slight metalness for better reflections
      ior: 1.45, // Glass index of refraction
      thickness: 0.5, // Thinner glass for better light transmission
      envMapIntensity: 0.75, // Reduced to let direct lights show more
      clearcoat: 0.5, // Moderate clearcoat
      clearcoatRoughness: 0.1, // Slightly rough clearcoat
      side: THREE.FrontSide, // Render both sides
      color: new THREE.Color(0xffffff), // Pure white base
      attenuationColor: new THREE.Color(0xffffff), // Clear glass (no tint)
      attenuationDistance: 50, // Shorter distance for more visible effect
      specularIntensity: 1, // Full specular reflections
      specularColor: new THREE.Color(0xffffff), // White specular highlights
      reflectivity: 0.1, // High reflectivity for lights
    });
  }, []);

  // Create a chrome-like material that will show light reflections clearly
  // const glassMaterial = useMemo(() => {
  //   return new THREE.MeshStandardMaterial({
  //     color: new THREE.Color(0xffffff),
  //     metalness: 1,
  //     roughness: 0,
  //     envMapIntensity: 1,
  //     side: THREE.DoubleSide,
  //   });
  // }, []);

  useImperativeHandle(
    ref,
    () => ({
      play: () => {
        if (actions.Scene) {
          actions.Scene.reset();
          actions.Scene.play();
        }
      },
      stop: () => {
        if (actions.Scene) {
          actions.Scene.stop();
        }
      },
      reset: () => {
        if (actions.Scene) {
          actions.Scene.reset();
          actions.Scene.stop();
        }
      },
    }),
    [actions],
  );

  useEffect(() => {
    if (actions.Scene) {
      actions.Scene.timeScale = animationSpeed;
    }
  }, [actions, animationSpeed]);

  useEffect(() => {
    if (actions.Scene) {
      actions.Scene.setLoop(THREE.LoopOnce, 1);
      actions.Scene.clampWhenFinished = true;

      const handleFinished = () => {
        onAnimationComplete?.();
      };

      actions.Scene.getMixer().addEventListener("finished", handleFinished);

      if (playOnMount) {
        actions.Scene.play();
      }

      return () => {
        if (actions.Scene) {
          actions.Scene.getMixer().removeEventListener(
            "finished",
            handleFinished,
          );
        }
      };
    }
  }, [actions, playOnMount, onAnimationComplete]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          position={[-1.778, 0.441, 0.218]}
          userData={{ name: "Armature" }}
        >
          <primitive object={nodes.H1} />
          <primitive object={nodes.H2_1} />
          <primitive object={nodes.O_main} />
          <primitive object={nodes.H3_1} />
          <primitive object={nodes.T_main} />
          <primitive object={nodes.H2_5015} />
          <primitive object={nodes.D_main} />
          <primitive object={nodes.H2_5024} />
          <primitive object={nodes.O_main2} />
          <primitive object={nodes.G_main} />
          <primitive object={nodes.H2_5044} />
        </group>
        <group
          name="Armature001"
          position={[-3.695, 0.112, 0.218]}
          userData={{ name: "Armature.001" }}
        >
          <primitive object={nodes.O_main2_1} />
        </group>
        <skinnedMesh
          name="D1_1"
          geometry={nodes.D1_1.geometry}
          material={glassMaterial}
          skeleton={nodes.D1_1.skeleton}
          morphTargetDictionary={nodes.D1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.D1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "D1" }}
        />
        <skinnedMesh
          name="D2_1"
          geometry={nodes.D2_1.geometry}
          material={glassMaterial}
          skeleton={nodes.D2_1.skeleton}
          morphTargetDictionary={nodes.D2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.D2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "D2" }}
        />
        <skinnedMesh
          name="G1_1"
          geometry={nodes.G1_1.geometry}
          material={glassMaterial}
          skeleton={nodes.G1_1.skeleton}
          morphTargetDictionary={nodes.G1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.G1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "G1" }}
        />
        <skinnedMesh
          name="G2_1"
          geometry={nodes.G2_1.geometry}
          material={glassMaterial}
          skeleton={nodes.G2_1.skeleton}
          morphTargetDictionary={nodes.G2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.G2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "G2" }}
        />
        <skinnedMesh
          name="H1_1"
          geometry={nodes.H1_1.geometry}
          material={glassMaterial}
          skeleton={nodes.H1_1.skeleton}
          position={[-1.778, 0.441, 0.218]}
          userData={{ name: "H1" }}
        />
        <skinnedMesh
          name="h2"
          geometry={nodes.h2.geometry}
          material={glassMaterial}
          skeleton={nodes.h2.skeleton}
          morphTargetDictionary={nodes.h2.morphTargetDictionary}
          morphTargetInfluences={nodes.h2.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "h2" }}
        />
        <skinnedMesh
          name="H3"
          geometry={nodes.H3.geometry}
          material={glassMaterial}
          skeleton={nodes.H3.skeleton}
          morphTargetDictionary={nodes.H3.morphTargetDictionary}
          morphTargetInfluences={nodes.H3.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "H3" }}
        />
        <skinnedMesh
          name="O2_1"
          geometry={nodes.O2_1.geometry}
          material={glassMaterial}
          skeleton={nodes.O2_1.skeleton}
          morphTargetDictionary={nodes.O2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.O2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "O2" }}
        />
        <skinnedMesh
          name="T1_1"
          geometry={nodes.T1_1.geometry}
          material={glassMaterial}
          skeleton={nodes.T1_1.skeleton}
          morphTargetDictionary={nodes.T1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.T1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "T1" }}
        />
        <skinnedMesh
          name="T2_1"
          geometry={nodes.T2_1.geometry}
          material={glassMaterial}
          skeleton={nodes.T2_1.skeleton}
          morphTargetDictionary={nodes.T2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.T2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "T2" }}
        />
        <skinnedMesh
          name="O1"
          geometry={nodes.O1.geometry}
          material={glassMaterial}
          skeleton={nodes.O1.skeleton}
          morphTargetDictionary={nodes.O1.morphTargetDictionary}
          morphTargetInfluences={nodes.O1.morphTargetInfluences}
          position={[-3.695, 0.112, 0.218]}
          userData={{ targetNames: ["Key 1"], name: "O1" }}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/assets/models/hotdog-v3-compressed-custom-meshopt.glb");
