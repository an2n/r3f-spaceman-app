import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Galaxy } from "./components/Galaxy";
import { LevaController } from "./components/LevaController";

export default function App() {
  return (
    <>
      <LevaController />
      <Canvas
        shadows
        gl={{
          powerPreference: "high-performance",
        }}
        camera={{ fov: 50, position: [0, -3, -1] }}
      >
        <Galaxy />
        <OrbitControls
          target={[0, 0.1, 0]}
          maxPolarAngle={1.45}
          maxDistance={155}
          minDistance={0.3}
          enablePan={false}
        />
      </Canvas>
    </>
  );
}
