/** biome-ignore-all lint/complexity/useLiteralKeys: <explanation> */
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
    ["1"]: THREE.SkinnedMesh;
    ["2"]: THREE.SkinnedMesh;
    ["3"]: THREE.SkinnedMesh;
    d003: THREE.SkinnedMesh;
    d004: THREE.SkinnedMesh;
    g001: THREE.SkinnedMesh;
    g002: THREE.SkinnedMesh;
    g003: THREE.SkinnedMesh;
    o003: THREE.SkinnedMesh;
    ["t_cross-bar001"]: THREE.SkinnedMesh;
    t_vertical_line001: THREE.SkinnedMesh;
    o004: THREE.SkinnedMesh;
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

export interface HotdogV1Props extends React.ComponentProps<"group"> {
  animationSpeed?: number;
  playOnMount?: boolean;
  onAnimationComplete?: () => void;
}

export interface HotdogV1Ref {
  play: () => void;
  stop: () => void;
  reset: () => void;
}

export const HotdogV1 = forwardRef<HotdogV1Ref, HotdogV1Props>(
  function HotdogV1(
    { animationSpeed = 1.0, playOnMount = true, onAnimationComplete, ...props },
    ref: ForwardedRef<HotdogV1Ref>,
  ) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF(
      "./assets/models/hotdog-anim.glb",
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
          <group name="Armature" position={[-1.778, 0.441, 0.218]}>
            <skinnedMesh
              name="1"
              geometry={nodes["1"].geometry}
              material={materials.White}
              skeleton={nodes["1"].skeleton}
            />
            <skinnedMesh
              name="2"
              geometry={nodes["2"].geometry}
              material={materials.White}
              skeleton={nodes["2"].skeleton}
            />
            <skinnedMesh
              name="3"
              geometry={nodes["3"].geometry}
              material={materials.White}
              skeleton={nodes["3"].skeleton}
            />
            <skinnedMesh
              name="d003"
              geometry={nodes.d003.geometry}
              material={materials.White}
              skeleton={nodes.d003.skeleton}
            />
            <skinnedMesh
              name="d004"
              geometry={nodes.d004.geometry}
              material={materials.White}
              skeleton={nodes.d004.skeleton}
              morphTargetDictionary={nodes.d004.morphTargetDictionary}
              morphTargetInfluences={nodes.d004.morphTargetInfluences}
            />
            <skinnedMesh
              name="g001"
              geometry={nodes.g001.geometry}
              material={materials.White}
              skeleton={nodes.g001.skeleton}
            />
            <skinnedMesh
              name="g002"
              geometry={nodes.g002.geometry}
              material={materials.White}
              skeleton={nodes.g002.skeleton}
            />
            <skinnedMesh
              name="g003"
              geometry={nodes.g003.geometry}
              material={materials.White}
              skeleton={nodes.g003.skeleton}
            />
            <skinnedMesh
              name="o003"
              geometry={nodes.o003.geometry}
              material={materials.White}
              skeleton={nodes.o003.skeleton}
            />
            <skinnedMesh
              name="t_cross-bar001"
              geometry={nodes["t_cross-bar001"].geometry}
              material={materials.White}
              skeleton={nodes["t_cross-bar001"].skeleton}
            />
            <skinnedMesh
              name="t_vertical_line001"
              geometry={nodes.t_vertical_line001.geometry}
              material={materials.White}
              skeleton={nodes.t_vertical_line001.skeleton}
            />
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
            <skinnedMesh
              name="o004"
              geometry={nodes.o004.geometry}
              material={materials.White}
              skeleton={nodes.o004.skeleton}
            />
            <primitive object={nodes.O_main2_1} />
          </group>
        </group>
      </group>
    );
  },
);

useGLTF.preload("./assets/models/hotdog-anim.glb");
