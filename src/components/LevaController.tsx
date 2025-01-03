import { useKeyPress } from "ahooks";
import { Leva } from "leva";
import { useState } from "react";

export function LevaController() {
  const [isLevaControlHidden, setLevaControlHidden] = useState(true);

  useKeyPress("space", () => {
    setLevaControlHidden((prev) => !prev);
  });

  return <Leva flat hidden={isLevaControlHidden} />;
}
