import React, {useState } from 'react';
import Image from "./spawnTargetRandom"

const ButtonState = (props) =>{
   

      
      return(
        <div>
          {props.canBeClicked        
             ? 
             <div>
             <Image onIncrementOnClick={props.onClick}/>   
             <h4> Targets hit: {props.targetCounter} </h4>
             </div>
             : <div>
               <h1>Currently awaiting new game start.</h1>
              <h1>Total targets hit: {props.targetCounter}</h1>
              <h1>Targets hit per second: {props.targetCounter/30}</h1>
             </div>
          }
         
        </div>
      )
    }
  

  export default ButtonState;