import { DirectionalLight } from "three";
import { useControls } from "leva";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export const Sun = () => {
  const directionalLightRef = useRef<DirectionalLight>(null);

  const controls = useControls("sun", {
    showHelpers: false,
    bloomOverlay: { value: "#ffc67c" },
    lightColor: { value: "#D0C0B8" },
    lightIntensity: { value: 4, min: 0, max: 10 },
    bloomIntensity: { value: 0.4, min: 0, max: 2, step: 0.1 },
    bloomLevels: { value: 5, min: 1, max: 9, step: 1 },
    emissiveIntensity: { value: 2.5, min: 0, max: 10, step: 0.1 },
  });

  return (
    <>
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={controls.bloomIntensity}
          luminanceThreshold={0.6}
          levels={controls.bloomLevels}
        />
      </EffectComposer>

      <mesh position={[0, 30, 200]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          emissive={controls.bloomOverlay}
          emissiveIntensity={controls.emissiveIntensity}
        />
      </mesh>

      <directionalLight
        position={[0, 30, 200]}
        ref={directionalLightRef}
        intensity={controls.lightIntensity}
        color={controls.lightColor}
        castShadow
      />
      {controls.showHelpers && directionalLightRef.current && (
        <directionalLightHelper
          args={[directionalLightRef.current, 10, "red"]}
        />
      )}
    </>
  );
};
