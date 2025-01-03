import { Stars as R3FStars } from "@react-three/drei";
import { useControls } from "leva";

export function Starfield() {
  const controls = useControls("stars", {
    radius: { value: 100, min: 10, max: 200, step: 1 },
    depth: { value: 50, min: 10, max: 100, step: 1 },
    count: { value: 5000, min: 1000, max: 10000, step: 100 },
    factor: { value: 4, min: 1, max: 10, step: 1 },
    saturation: { value: 0, min: 0, max: 1, step: 0.01 },
  });

  return <R3FStars {...controls} fade />;
}
