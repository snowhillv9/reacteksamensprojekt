import React from 'react';
import Image from "./spawnTargetRandom"
import ButtonState from './buttonAimTrainCounter';
import CountdownTimerApp from './CountdownTimer';

export default function Home(){
    return(
        <div>
            <h1>Profile
            <ButtonState/>
            </h1>   
           <CountdownTimerApp/>
        </div>
    )
}



