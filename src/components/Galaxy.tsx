import { Earth } from "./Earth";
import { Moon } from "./Moon";
import { Spaceman } from "./Spaceman";
import { Starfield } from "./Starfield";
import { Sun } from "./Sun";

export function Galaxy() {
  return (
    <>
      <Starfield />
      <Sun />
      <Earth />
      <Moon />
      <Spaceman />
    </>
  );
}
