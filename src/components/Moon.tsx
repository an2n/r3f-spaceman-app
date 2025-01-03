import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { Mesh } from "three";

export function Moon() {
  const moonRef = useRef<Mesh>(null);
  const [map, bumpMap] = useTexture([
    "assets/moonmap4k.jpg",
    "assets/moonbump4k.jpg",
  ]);

  const {
    color,
    emissive,
    emissiveIntensity,
    bumpScale,
    metalness,
    roughness,
    rotationSpeed,
    wireframe,
  } = useControls("moon", {
    color: { value: "#C5BFBD" },
    emissive: { value: "#000000" },
    emissiveIntensity: { value: 0, min: 0, max: 10, step: 0.1 },
    bumpScale: { value: 3, min: 0, max: 10, step: 0.01 },
    metalness: { value: 0.25, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.75, min: 0, max: 1, step: 0.01 },
    rotationSpeed: { value: 0.5, min: 0, max: 1, step: 0.1 },
    wireframe: { value: false },
  });

  useFrame((_, delta) => {
    // The delta time represents the time elapsed since the last frame.
    if (moonRef.current) {
      moonRef.current.rotation.x -= (rotationSpeed * delta) / 10;
    }
  });
  return (
    <Sphere
      ref={moonRef}
      args={[2.7, 128, 128]} // 27% of Earth's radius
      position={[0, -2.7, 0]}
      rotation={[0, Math.PI, 10]}
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        map={map}
        bumpMap={bumpMap}
        bumpScale={bumpScale}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        metalness={metalness}
        roughness={roughness}
        wireframe={wireframe}
      />
    </Sphere>
  );
}
