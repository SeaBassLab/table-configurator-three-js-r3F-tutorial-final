import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function KBAA(props) {
  const { nodes, materials } = useGLTF("./models/KBAA.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.KBAA.geometry}
        material={materials["Material 2"]}
        position={[0, 0.4, -0.17]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("./models/KBAA.glb");
