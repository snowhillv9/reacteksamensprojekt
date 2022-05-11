import React from 'react';
import Image from "./spawnTargetRandom"
import ButtonState from './buttonAimTrainCounter';
import CountdownTimer from './CountdownTimer';

export default function Home(){
    return(
        <div>
            <h1>Profile
            <ButtonState/>
            
            </h1>   
            <CountdownTimer countDownTimestampMS={1643673600000}/>   
        </div>
    )
}



