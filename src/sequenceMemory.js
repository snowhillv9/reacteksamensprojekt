import React, { useEffect, useState } from "react";
import "./Button.css"

const SequenceMemory =() =>{

    
    const [squaresToRemember,setSquares] = useState([]);
    const handleClick = () =>{
        console.log("starting game");
    } 
   return (
    <div className="SequenceMemory">
      
        <button onClick={handleClick}>Start game</button>
        <div className='button-grid'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            </div>
    </div>
   ); 

   function AppHooks() {
    const buttonNames = [
      {
        namebutton: 1
      },
      {
        namebutton: 2
      },
      {
        namebutton: 3
      },
      {
        namebutton: 4
      },
      {
        namebutton: 5
      },
      {
        namebutton: 6
      },
      {
        namebutton: 7
      },
      {
        namebutton: 8
      },
      {
        namebutton: 9
      },
    ];
   }
}



// }



export default SequenceMemory;