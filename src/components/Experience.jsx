import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Loader } from "./Loader";
import { Suspense } from "react";
export const Experience = () => {
  const { MODEL, objSelected } = useConfigurator(); // Force rerender the stage & shadows

  /*   const { position, color, visible } = useControls({
    position: {
      value: { x: 2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "rgb(172, 190, 232)",
    visible: true
  }); */
  return (
    <Suspense fallback={<Loader />}>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "rgb(172, 190, 232)",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        {Object.entries(MODEL).map(([key, model]) => {
          return (
            model.visibility && <group key={key}>{model.component()}</group>
          );
        })}
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
