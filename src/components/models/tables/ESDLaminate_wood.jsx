import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ESDLaminateWood(props) {
  const { nodes, materials } = useGLTF("./models/ESDLaminate_wood.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh
          geometry={nodes.Mesh002.geometry}
          material={materials["Material 3"]}
        />
        <mesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials["Material 3"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/ESDLaminate_wood.glb");
