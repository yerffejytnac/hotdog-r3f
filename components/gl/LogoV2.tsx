/** biome-ignore-all lint/complexity/useLiteralKeys: GLTF node names use numeric keys */
"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import React, {
  type ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
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

export interface LogoV2Props extends React.ComponentProps<"group"> {
  animationSpeed?: number;
  playOnMount?: boolean;
  onAnimationComplete?: () => void;
}

export interface LogoV2Ref {
  play: () => void;
  stop: () => void;
  reset: () => void;
}

export const LogoV2 = forwardRef<LogoV2Ref, LogoV2Props>(function Logo(
  { animationSpeed = 1.0, playOnMount = true, onAnimationComplete, ...props },
  ref: ForwardedRef<LogoV2Ref>,
) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "./assets/models/hotdog-v2-transformed.glb",
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

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

  // Initial setup effect
  useEffect(() => {
    if (actions.Scene) {
      const action = actions.Scene;
      const mixer = action.getMixer();

      // Configure the animation
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;

      // Reset animation to start
      action.reset();
      action.time = 0;
      action.enabled = true;
      action.setEffectiveWeight(1.0);

      // Force update the mixer to apply frame 0
      mixer.update(0);

      // Pause the animation at frame 0 instead of stopping it
      action.paused = true;

      const handleFinished = () => {
        onAnimationComplete?.();
      };

      mixer.addEventListener("finished", handleFinished);

      return () => {
        mixer.removeEventListener("finished", handleFinished);
      };
    }
  }, [actions, onAnimationComplete]);

  // Separate effect to handle playOnMount changes
  useEffect(() => {
    console.log(
      "LogoV2 playOnMount effect - playOnMount:",
      playOnMount,
      "actions.Scene:",
      !!actions.Scene,
    );
    if (actions.Scene && playOnMount) {
      console.log("Playing animation now!");
      actions.Scene.paused = false;
      actions.Scene.play();
    }
  }, [actions, playOnMount]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Wrapper group to normalize positioning for Bounds component */}
      <group name="Scene">
        <group name="Armature" position={[-1.778, 0.441, 0.218]}>
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
        <group name="Armature001" position={[-3.695, 0.112, 0.218]}>
          <primitive object={nodes.O_main2_1} />
        </group>
        <skinnedMesh
          name="D1_1"
          geometry={nodes.D1_1.geometry}
          material={materials.White}
          skeleton={nodes.D1_1.skeleton}
          morphTargetDictionary={nodes.D1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.D1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="D2_1"
          geometry={nodes.D2_1.geometry}
          material={materials.White}
          skeleton={nodes.D2_1.skeleton}
          morphTargetDictionary={nodes.D2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.D2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="G1_1"
          geometry={nodes.G1_1.geometry}
          material={materials.White}
          skeleton={nodes.G1_1.skeleton}
          morphTargetDictionary={nodes.G1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.G1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="G2_1"
          geometry={nodes.G2_1.geometry}
          material={materials.White}
          skeleton={nodes.G2_1.skeleton}
          morphTargetDictionary={nodes.G2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.G2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="H1_1"
          geometry={nodes.H1_1.geometry}
          material={materials.White}
          skeleton={nodes.H1_1.skeleton}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="h2"
          geometry={nodes.h2.geometry}
          material={materials.White}
          skeleton={nodes.h2.skeleton}
          morphTargetDictionary={nodes.h2.morphTargetDictionary}
          morphTargetInfluences={nodes.h2.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="H3"
          geometry={nodes.H3.geometry}
          material={materials.White}
          skeleton={nodes.H3.skeleton}
          morphTargetDictionary={nodes.H3.morphTargetDictionary}
          morphTargetInfluences={nodes.H3.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="O2_1"
          geometry={nodes.O2_1.geometry}
          material={materials.White}
          skeleton={nodes.O2_1.skeleton}
          morphTargetDictionary={nodes.O2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.O2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="T1_1"
          geometry={nodes.T1_1.geometry}
          material={materials.White}
          skeleton={nodes.T1_1.skeleton}
          morphTargetDictionary={nodes.T1_1.morphTargetDictionary}
          morphTargetInfluences={nodes.T1_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="T2_1"
          geometry={nodes.T2_1.geometry}
          material={materials.White}
          skeleton={nodes.T2_1.skeleton}
          morphTargetDictionary={nodes.T2_1.morphTargetDictionary}
          morphTargetInfluences={nodes.T2_1.morphTargetInfluences}
          position={[-1.778, 0.441, 0.218]}
        />
        <skinnedMesh
          name="O1"
          geometry={nodes.O1.geometry}
          material={materials.White}
          skeleton={nodes.O1.skeleton}
          morphTargetDictionary={nodes.O1.morphTargetDictionary}
          morphTargetInfluences={nodes.O1.morphTargetInfluences}
          position={[-3.695, 0.112, 0.218]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("./assets/models/hotdog-v2-transformed.glb");
