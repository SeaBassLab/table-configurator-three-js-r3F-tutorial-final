import React from "react";
import { useGLTF } from "@react-three/drei";

export function ElectricMediumDuty(props) {
  const { nodes, materials } = useGLTF("./models/ElectricMediumDuty.glb");

  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials["Material 1"]}
        />
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material 2"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/ElectricMediumDuty.glb");
