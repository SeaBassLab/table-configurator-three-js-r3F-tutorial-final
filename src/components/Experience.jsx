import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { ElectricMediumDuty } from "./models/desks/ElectricMediumDuty";
import { Loader } from "./Loader";
import { Suspense } from "react";

export const Experience = () => {
  const { model, objSelected } = useConfigurator(); // Force rerender the stage & shadows
  return (
    <Suspense fallback={<Loader />}>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <ElectricMediumDuty />
      </Stage>
      {!objSelected && (
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
      )}
    </Suspense>
  );
};
