import React from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export function CPUHolder(props) {
  const { nodes, materials } = useGLTF("./models/CPUHolder.glb");
  const { Left, Right, Rotate } = useControls("CPU Holder", {
    Left: {
      value: -0.43,
      min: -0.71,
      max: -0.1,
      step: 0.01,
    },
    Right: {
      value: 0.43,
      min: 0.1,
      max: 0.69,
      step: 0.01,
    },
    Rotate: false,
  });
  return (
    <group {...props} dispose={null}>
      <group
        position={!Rotate ? [Left, 0.71, 0.08] : [Right, 0.71, 0.08]}
        rotation={Rotate ? [0, 3.14, 0] : [0, 0, 0]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Mesh003.geometry}
          material={materials["Material 1"]}
        />
        <mesh
          geometry={nodes.Mesh003_1.geometry}
          material={materials["Material 2"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/CPUHolder.glb");
