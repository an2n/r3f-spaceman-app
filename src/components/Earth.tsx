import React from "react";
import { Color } from "three";
import { useTexture } from "@react-three/drei";

export const Earth: React.FC = () => {
  const [emissiveMap] = useTexture(["/assets/earthnight4k.jpg"]);

  return (
    <mesh rotation-y={-0.3} position={[50, 0, 150]}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshStandardMaterial
        color={"blue"}
        bumpScale={0.03}
        metalness={0.1}
        emissiveMap={emissiveMap}
        emissive={new Color(0xffff88)}
      />
    </mesh>
  );
};
