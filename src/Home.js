import React from 'react';
import Image from "./spawnTargetRandom"
import ButtonState from './buttonAimTrainCounter';
import Counter from './CountdownTimer';

export default function Home(){
    return(
        <div>
            <h1>Profile
            <ButtonState/>
            </h1>   
            <Counter/>   
        </div>
    )
}



