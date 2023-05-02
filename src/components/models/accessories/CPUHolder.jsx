import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CPUHolder(props) {
  const { nodes, materials } = useGLTF("./models/CPUHolder.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.43, 0.71, 0.08]} scale={0.03}>
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
