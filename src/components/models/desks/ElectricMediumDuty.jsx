import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ESDLaminate } from "../tables/ESDLaminate";
import { Casters } from "../legs/Casters";
import { CPUHolder } from "../accessories/CPUHolder";
import { KBAA } from "../accessories/KBAA";

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
      <ESDLaminate />
      <Casters />
      <CPUHolder />
      <KBAA />
    </group>
  );
}

useGLTF.preload("./models/ElectricMediumDuty.glb");
