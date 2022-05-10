import React, {useState } from 'react';
import Image from "./spawnTargetRandom"
const ButtonState = () =>{
    const [targetCounter, setTargetCounter] = useState(0);
  
    const increment = () =>{
      setTargetCounter(targetCounter + 1);
    }
  
      return(
        <div>
          {targetCounter}
          <button><img src="Aimtrainer.PNG" alt="my image" onClick={increment}  /> Targets hit:</button>
        </div>
      )
    }
  

  export default ButtonState;