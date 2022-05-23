import React from "react";
import { useState } from "react";
import { click } from "@testing-library/user-event/dist/click";
import AimTrainerLogic from "./Aimtrainerlogic";

export default function Aimtrainer(){
    const[clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    const isClicked = clicked;
    
    if(clicked){
        return(
        <>
        <AimTrainerLogic/>
        </>
        )
    }
    return(
        <div>
            <h1>Aimtrainer</h1>
            <button onClick={handleClick}>Start Game</button>
        </div>
    )

    function StopGame(){

        // let targetsHit = ButtonState.value
        //Kalder på countdownTimerApp eller lignende og lytter efter hvad counteren er. Er counteren 0 stoppes spillet og der bliver printet, hvor mange targets spilleren har skudt. 
    }

}


