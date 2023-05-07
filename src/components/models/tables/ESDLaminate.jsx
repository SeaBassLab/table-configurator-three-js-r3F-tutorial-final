import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ESDLaminate(props) {
  const { nodes, materials } = useGLTF("./models/ESDLaminate.glb");
  console.log(nodes, materials);
  return (
    <group {...props} dispose={null}>
      <group scale={0.03}>
        <mesh
          geometry={nodes.Mesh002.geometry}
          material={materials["Material 3"]}
        />
        <mesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials["Material 4"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/ESDLaminate.glb");
