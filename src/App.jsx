import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { useConfigurator } from "./contexts/Configurator";

function App() {
  const { setObjSelected } = useConfigurator();
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [4, 4, -12], fov: 35 }}
        onPointerUp={() => setObjSelected(null)}
      >
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
