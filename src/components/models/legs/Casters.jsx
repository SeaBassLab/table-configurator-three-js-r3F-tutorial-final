import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Casters(props) {
  const { nodes, materials } = useGLTF("./models/Casters.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh
          geometry={nodes.Mesh005.geometry}
          material={materials["Material 1"]}
        />
        <mesh
          geometry={nodes.Mesh005_1.geometry}
          material={materials["Material 5"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/Casters.glb");
