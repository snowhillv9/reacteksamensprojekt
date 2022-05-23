import React from "react";
import ButtonState from "./buttonAimTrainCounter";
import CountdownTimerApp from "./CountdownTimer";
import { useState } from "react";


export default function AimTrainerLogic(){

    
    const [targetCounter, setTargetCounter] = useState(0);
    const [canBeClicked, setCanBeClicked] = useState(false);

    const increment = () =>{
      setTargetCounter(targetCounter + 1);
    }

    function resetTargetCounter(){
        setTargetCounter(0);
    }
    return(
        <>
        <ButtonState onClick ={increment} targetCounter= {targetCounter} canBeClicked ={canBeClicked}/>
        <CountdownTimerApp resetTargetCounter = {resetTargetCounter} setCanBeClicked ={setCanBeClicked} />
        </>
    )
}