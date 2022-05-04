import React, { useEffect, useState } from "react";
import "./Button.css";
import "./sequenceMemoryGame.css";

  let squareArray = [];
  let amountOfButtons = 9;

function SequenceMemory(){

  
  const [scoreDisplay, setScoreDisplay] = useState();
  const [clicked, setClicked] = useState();
  
  return (
    <>
    <h1>Welcome to the sequence memory game</h1>
    <tbody className="button-grid">
      {spawnSquares()}
    </tbody>
    </>

  )
}

function spawnSquares(){

  for (var i = 0; i < amountOfButtons; i++) {
   squareArray.push(<button></button>);
}
return squareArray;
}


export default SequenceMemory;