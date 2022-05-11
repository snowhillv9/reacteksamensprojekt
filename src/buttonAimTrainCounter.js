import React, {useState } from 'react';
import Image from "./spawnTargetRandom"

const ButtonState = () =>{
    const [targetCounter, setTargetCounter] = useState(0);
  
    const increment = () =>{
      setTargetCounter(targetCounter + 1);
      console.log("xd")
      
    }
  
      return(
        <div>
         <h4> Targets hit: {targetCounter} </h4>
          <Image onIncrementOnClick={increment}/>
        </div>
      )
    }
  

  export default ButtonState;