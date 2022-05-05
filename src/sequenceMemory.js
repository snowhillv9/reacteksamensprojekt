import React, { useEffect, useState } from "react";
import "./Button.css";
import "./sequenceMemoryGame.css";

  let squareArray = [];
  let storedSquares = [];
  let amountOfButtons = 9;
  

function SequenceMemory(){

  const [scoreDisplay, setScoreDisplay] = useState();
  const [clicked, setClicked] = useState();
  const [isChosen, setChosen] = useState([]);

  let isGameStarted = false;
  let isHighlighted = false;
  let isClicked = false;

  let gameProps = {isGameStarted, isHighlighted, isClicked};
 
  
  return (
    <>
    <h1>Welcome to the sequence memory game</h1>
     <button> </button>
    <tbody className="button-grid">
      <>
     {/* <StartGameButton gameProps = {gameProps}/> */}
      {spawnSquares()}
      </>
    </tbody>
    </>

  )
}

// function StartGameButton(gameProps){
 
  
// function handleClick(){
//  !gameProps.isGameStarted.value;
//  {console.log(gameProps.isGameStarted)};
//   }
//   return(
//     <>
//   Start Game 
//   <button onClick = {this.handleClick}>
//   </button>
//   </>
//   )
// }





// function _getRandomSquare() {
//   let min = 0;
//   let max = squareArray.length;
//   let randomSquare = Math.floor(Math.random() * (max - min)) + min;
//   randomSquare
//   storedSquares.push(randomSquare);
// }

function spawnSquares(){

  for (var i = 0; i < amountOfButtons; i++) {
   squareArray.push(<button></button>);
}
return squareArray;
}



export default SequenceMemory;