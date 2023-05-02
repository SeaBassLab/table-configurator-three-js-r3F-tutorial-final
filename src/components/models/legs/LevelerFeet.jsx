import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LevelerFeet(props) {
  const { nodes, materials } = useGLTF("./models/LevelerFeet.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Leveler_Feet.geometry}
        material={materials["Material 1"]}
        scale={0.03}
      />
    </group>
  );
}

useGLTF.preload("./models/LevelerFeet.glb");
