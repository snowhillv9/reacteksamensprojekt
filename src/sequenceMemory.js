import React, { useEffect, useState } from "react";
const SequenceMemory =() =>{
    const handleClick = () =>{
        console.log("starting game");
    } 
   return (
    <div className="SequenceMemory">
        <button onClick={handleClick}>Start game</button>
    </div>
   ); 
}


export default SequenceMemory;