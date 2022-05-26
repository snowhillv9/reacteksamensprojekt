import React from "react";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import AimTrainerLogic from "./Aimtrainerlogic";

export default function Aimtrainer() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  if (clicked) {
    return (
      <>
        <AimTrainerLogic />
      </>
    );
  }
  return (
    <div>
      <h1>Aimtrainer</h1>
      <button onClick={handleClick}>Start Game</button>
    </div>
  );
}
